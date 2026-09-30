import { NextRequest, NextResponse } from "next/server";

const FLIKKER_API_URL = process.env.FLIKKER_API_URL;

function err(code: string, status: number) {
  return NextResponse.json({ error: code }, { status });
}

export async function POST(req: NextRequest) {
  if (!FLIKKER_API_URL) {
    return err("server_misconfigured", 500);
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return err("invalid_body", 400);
  }

  const idempotencyKey =
    req.headers.get("Idempotency-Key") ?? crypto.randomUUID();

  // Step 1: create checkout intent
  let intentRes: Response;
  try {
    intentRes = await fetch(`${FLIKKER_API_URL}/public/checkout/intents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return err("upstream_unavailable", 503);
  }

  if (!intentRes.ok) {
    if (intentRes.status === 400) return err("invalid_request", 400);
    if (intentRes.status === 429) return err("too_many_requests", 429);
    return err("upstream_error", 502);
  }

  let intent: { id: string };
  try {
    intent = (await intentRes.json()) as { id: string };
  } catch {
    return err("upstream_parse_error", 502);
  }

  // Step 2: get checkout URL
  let checkoutRes: Response;
  try {
    checkoutRes = await fetch(
      `${FLIKKER_API_URL}/public/checkout/intents/${intent.id}/checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey,
        },
      }
    );
  } catch {
    return err("upstream_unavailable", 503);
  }

  if (!checkoutRes.ok) {
    if (checkoutRes.status === 404) return err("intent_not_found", 404);
    if (checkoutRes.status === 429) return err("too_many_requests", 429);
    return err("upstream_error", 502);
  }

  let checkout: { checkoutUrl: string };
  try {
    checkout = (await checkoutRes.json()) as { checkoutUrl: string };
  } catch {
    return err("upstream_parse_error", 502);
  }

  return NextResponse.json({ checkoutUrl: checkout.checkoutUrl });
}
