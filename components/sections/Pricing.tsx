"use client";

import { useState } from "react";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

/* ─── Data ─── */

const FREE_FEATURES = [
  "Hasta 100 mensajes WhatsApp",
  "Reseñas automáticas en Google",
  "Filtro inteligente de reseñas",
  "Dashboard básico",
];

const STARTER_FEATURES = [
  "200 mensajes WhatsApp / mes",
  "Reseñas automáticas en Google",
  "Filtro inteligente de reseñas",
  "Dashboard básico",
];

const PRO_FEATURES = [
  "600 mensajes WhatsApp / mes",
  "Todo lo del Starter",
  "Reactivación de clientes inactivos",
  "Widget de prueba social",
  "Widget de notificaciones",
  "Dashboard completo + reporte mensual",
  "Soporte WhatsApp en 24h hábil",
];

type Cell = true | false | string;

const ROWS: { label: string; highlight?: boolean; starter: Cell; pro: Cell; custom: Cell }[] = [
  { label: "Mensajes WhatsApp / mes",      starter: "200",         pro: "600",            custom: "Ilimitados" },
  { label: "Reseñas automáticas",           starter: true,          pro: true,             custom: true },
  { label: "Filtro inteligente",            starter: true,          pro: true,             custom: true },
  { label: "Dashboard",                     starter: "Básico",      pro: "Completo",       custom: "Personalizado" },
  { label: "Reactivación de clientes",      highlight: true, starter: false, pro: true,   custom: true },
  { label: "Widget de prueba social",       highlight: true, starter: false, pro: true,   custom: true },
  { label: "Widget de notificaciones",      highlight: true, starter: false, pro: true,   custom: true },
  { label: "Reporte mensual",               starter: false,         pro: true,             custom: true },
  { label: "Soporte",                       starter: "Email",       pro: "WhatsApp 24h",   custom: "Prioritario" },
  { label: "Setup asistido",                starter: false,         pro: "Opcional",       custom: true },
  { label: "Múltiples locales",             starter: false,         pro: false,            custom: true },
];

/* ─── Sub-components ─── */

function Toggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={cn("text-sm font-medium", !annual ? "text-neutral-900" : "text-neutral-400")}>
        Mensual
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={annual}
        onClick={() => onChange(!annual)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2",
          annual ? "bg-periwinkle" : "bg-neutral-200"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200",
            annual ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
      <span className={cn("text-sm font-medium", annual ? "text-neutral-900" : "text-neutral-400")}>
        Anual
        <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
          2 meses gratis
        </span>
      </span>
    </div>
  );
}

function CellValue({ value, pro }: { value: Cell; pro?: boolean }) {
  if (value === true) {
    return (
      <span className={cn(
        "flex h-5 w-5 items-center justify-center rounded-full mx-auto",
        pro ? "bg-periwinkle/20" : "bg-neutral-100"
      )}>
        <Check className={cn("h-3 w-3", pro ? "text-periwinkle" : "text-neutral-500")} strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return <Minus className="h-4 w-4 text-neutral-300 mx-auto" strokeWidth={2} />;
  }
  return (
    <span className={cn(
      "text-[13px] font-medium",
      pro ? "text-periwinkle" : "text-neutral-600"
    )}>
      {value}
    </span>
  );
}

/* ─── Main component ─── */

const STARTER_MONTHLY = 2990;
const PRO_MONTHLY = 5490;

function fmt(n: number) {
  return n.toLocaleString("es-UY");
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const starterPrice = annual ? STARTER_MONTHLY * 10 : STARTER_MONTHLY;
  const proPrice = annual ? PRO_MONTHLY * 10 : PRO_MONTHLY;
  const period = annual ? "/año" : "/mes";

  return (
    <section id="precios" className="scroll-mt-20 bg-white px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">

        {/* ── Header ── */}
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Precios
          </span>
          <h2 className="font-display mt-4 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[48px]">
            Una inversión que se paga
            <br />
            sola desde el primer mes.
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Empezá cuando quieras. Sin contratos ni letra chica.
          </p>
          <div className="mt-8">
            <Toggle annual={annual} onChange={setAnnual} />
          </div>
        </div>

        {/* ── Plan cards ── */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Gratis */}
          <div className="flex flex-col rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
            <p className="text-sm font-semibold text-neutral-500">Gratis</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[28px] font-black leading-none text-neutral-300">$</span>
              <span className="font-display text-[56px] font-black leading-none tracking-tight text-neutral-900">0</span>
            </div>
            <p className="mt-2 text-sm font-medium text-neutral-500">Para probar sin comprometerte.</p>
            <p className="mt-3 text-sm leading-[1.6] text-neutral-400">
              Hasta 100 mensajes o 20 reseñas nuevas. Cuando querés más, subís de plan.
            </p>

            <hr className="my-6 border-neutral-200" />

            <ul className="flex-1 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" strokeWidth={2.5} />
                  <span className="text-[14px] text-neutral-500">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-100"
            >
              Empezar gratis
            </a>
          </div>

          {/* Starter */}
          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8">
            <p className="text-sm font-semibold text-neutral-500">Starter</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[28px] font-black leading-none text-neutral-400">$</span>
              <span className="font-display text-[56px] font-black leading-none tracking-tight text-neutral-900">
                {fmt(starterPrice)}
              </span>
              <span className="text-sm text-neutral-400">{period}</span>
            </div>
            {annual && (
              <p className="mt-1 text-[12px] text-neutral-400">
                equivale a ${fmt(Math.round(starterPrice / 12))}/mes · 2 meses gratis
              </p>
            )}
            <p className="mt-2 text-sm font-medium text-periwinkle">Para empezar sin fricción.</p>
            <p className="mt-3 text-sm leading-[1.6] text-neutral-500">
              Sin setup. Activalo hoy y empezá a recibir reseñas esta semana.
            </p>

            <hr className="my-6 border-neutral-100" />

            <ul className="flex-1 space-y-3">
              {STARTER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-periwinkle" strokeWidth={2.5} />
                  <span className="text-[14px] text-neutral-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-periwinkle px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Empezar con Starter
            </a>
          </div>

          {/* Pro */}
          <div
            className="relative flex flex-col rounded-3xl p-8"
            style={{ background: "#07060f" }}
          >
            <span className="absolute right-6 top-6 rounded-full bg-periwinkle px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              Más popular
            </span>

            <p className="text-sm font-semibold text-white/60">Pro</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-[28px] font-black leading-none text-white/40">$</span>
              <span className="font-display text-[56px] font-black leading-none tracking-tight text-white">
                {fmt(proPrice)}
              </span>
              <span className="text-sm text-white/40">{period}</span>
            </div>
            {annual && (
              <p className="mt-1 text-[12px] text-white/40">
                equivale a ${fmt(Math.round(proPrice / 12))}/mes · 2 meses gratis
              </p>
            )}
            <p className="mt-2 text-sm font-medium text-periwinkle">El equilibrio justo. Lo que recomendamos.</p>
            <p className="mt-3 text-sm leading-[1.6] text-white/50">
              Setup $4.300 · 1 local. Con solo 3 clientes que vuelvan una vez más al mes, se paga solo.
            </p>

            <hr className="my-6 border-white/10" />

            <ul className="flex-1 space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-periwinkle" strokeWidth={2.5} />
                  <span className="text-[14px] text-periwinkle/90">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
            >
              Quiero el plan Pro
            </a>
          </div>
        </div>

        {/* Guarantee */}
        <p className="mt-10 text-center text-sm leading-[1.6] text-neutral-400">
          <span className="font-semibold text-neutral-600">Garantía:</span> si en 60 días no tenés al menos 20 reseñas nuevas, te devolvemos el setup. Sin drama.
        </p>

        {/* Link to full comparison */}
        <div className="mt-6 text-center">
          <a
            href="/planes"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-periwinkle"
          >
            Ver comparativa completa de planes
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
