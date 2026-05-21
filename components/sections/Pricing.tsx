"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PROMO_MONTHLY = 2900;
const REGULAR_MONTHLY = 3500;

function fmt(n: number) {
  return n.toLocaleString("es-UY");
}

const FEATURES = [
  "Reseñas automáticas en Google por WhatsApp",
  "Las buenas van a Google, las malas te llegan a vos primero",
  "Dashboard con los números de tu negocio",
  "Widget de prueba social para tu sitio web",
  "Hasta 400 clientes contactados por mes",
  "Soporte por WhatsApp",
  "Onboarding acompañado",
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const promoPrice = annual ? PROMO_MONTHLY * 10 : PROMO_MONTHLY;
  const regularPrice = annual ? REGULAR_MONTHLY * 10 : REGULAR_MONTHLY;
  const period = annual ? "/ año" : "/ mes";

  return (
    <section id="precios" className="scroll-mt-20 bg-white px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
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
            Un solo plan. Todo incluido. Sin letra chica.
          </p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={cn("text-sm font-medium transition-colors", !annual ? "text-neutral-900" : "text-neutral-400")}>
              Mensual
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className={cn(
                "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200",
                annual ? "bg-periwinkle" : "bg-neutral-200"
              )}
            >
              <span className={cn(
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200",
                annual ? "translate-x-5" : "translate-x-0"
              )} />
            </button>
            <span className={cn("text-sm font-medium transition-colors", annual ? "text-neutral-900" : "text-neutral-400")}>
              Anual
              <span className="ml-1.5 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                2 meses gratis
              </span>
            </span>
          </div>
        </div>

        {/* Plan card */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">

            {/* Price row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <p className="text-sm font-semibold text-neutral-400">Plan Flikker</p>
                {/* Crossed-out original price */}
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-[18px] font-black leading-none text-neutral-300 line-through">
                    ${fmt(regularPrice)}
                  </span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                    Últimos lugares
                  </span>
                </div>
                {/* Promo price */}
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-[24px] font-black leading-none text-neutral-300">$</span>
                  <span className="font-display text-[44px] font-black leading-none tracking-tight text-neutral-900 sm:text-[64px]">
                    {fmt(promoPrice)}
                  </span>
                  <span className="text-sm text-neutral-400">{period}</span>
                </div>
              </div>
              <span className="mt-1 shrink-0 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                Sin instalación
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-periwinkle">
              Arrancás sin pagar instalación.
            </p>

            <hr className="my-6 border-neutral-100" />

            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-periwinkle" strokeWidth={2.5} />
                  <span className="text-[14px] text-neutral-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-periwinkle px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Quiero empezar
            </a>
          </div>

          {/* Guarantee block */}
          <div className="mt-4 rounded-3xl border border-neutral-100 bg-neutral-50 px-6 py-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-periwinkle" strokeWidth={1.75} />
              <div>
                <p className="text-[14px] font-bold text-neutral-900">
                  Garantía Flikker: 20 reseñas nuevas en 30 días o no pagás el primer mes.
                </p>
                <p className="mt-2 text-[13px] leading-[1.65] text-neutral-500">
                  Lo único que necesitamos de tu lado es que cargues a los pacientes que atendés
                  — el sistema hace el resto.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
