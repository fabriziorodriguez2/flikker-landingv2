import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9333;
const profile = `${process.cwd()}\\.tmp-chrome-profile`;

function readEnvFile(path) {
  const env = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;
    let value = match[2];
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
  return env;
}

const secrets = readEnvFile(".env.local");
if (!secrets.FLIKKER_EMAIL || !secrets.FLIKKER_PASSWORD) {
  throw new Error("Faltan FLIKKER_EMAIL o FLIKKER_PASSWORD en .env.local");
}

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--disable-extensions",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  "--window-size=1440,1100",
  "https://app.flikker.uy/login",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getTarget() {
  for (let i = 0; i < 60; i += 1) {
    try {
      const targets = await fetch(`http://127.0.0.1:${port}/json`).then((r) => r.json());
      const page = targets.find((target) => target.type === "page" && target.url.includes("app.flikker.uy"));
      if (page) return page;
    } catch {}
    await sleep(250);
  }
  throw new Error("Chrome DevTools no quedó disponible");
}

const target = await getTarget();
const socket = new WebSocket(target.webSocketDebuggerUrl);
const pending = new Map();
let id = 0;

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

function cdp(method, params = {}) {
  const requestId = ++id;
  socket.send(JSON.stringify({ id: requestId, method, params }));
  return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await cdp("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await cdp("Page.enable");
await cdp("Runtime.enable");
await sleep(2000);

const loginResult = await evaluate(`(() => {
  const setValue = (selector, value) => {
    const input = document.querySelector(selector);
    if (!input) return false;
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    setter.call(input, value);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  };
  const emailOk = setValue("#email", ${JSON.stringify(secrets.FLIKKER_EMAIL)});
  const passwordOk = setValue("#password", ${JSON.stringify(secrets.FLIKKER_PASSWORD)});
  const form = document.querySelector("form");
  if (emailOk && passwordOk && form) form.requestSubmit();
  return { emailOk, passwordOk, form: Boolean(form) };
})()`);

if (!loginResult.emailOk || !loginResult.passwordOk || !loginResult.form) {
  throw new Error("No se encontraron los controles del login");
}

for (let i = 0; i < 60; i += 1) {
  await sleep(500);
  const url = await evaluate("location.href");
  if (!url.includes("/login")) break;
}

await sleep(2500);
const audit = await evaluate(`(() => ({
  url: location.href,
  title: document.title,
  text: document.body.innerText.slice(0, 12000),
  links: [...document.querySelectorAll("a[href]")].map((a) => ({
    text: (a.innerText || a.getAttribute("aria-label") || "").trim(),
    href: a.href,
  })).filter((item) => item.text || item.href).slice(0, 250),
}))()`);

console.log(JSON.stringify(audit, null, 2));
socket.close();
chrome.kill();
