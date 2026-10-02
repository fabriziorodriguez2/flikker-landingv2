"use client";

import { useState } from "react";
import {
  BarChart3,
  Check,
  Gift,
  Globe,
  Layers,
  MessageCircle,
  QrCode,
  ScanLine,
  Send,
  Users,
  type LucideIcon,
} from "lucide-react";

import { APP_REGISTER_URL, PLAN_PRICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PlanFeature = {
  icon: LucideIcon;
  label: string;
};

const BASE_FEATURES: PlanFeature[] = [
  { icon: QrCode, label: "Check-in por QR o NFC" },
  { icon: Gift, label: "Visitas y recompensas" },
  { icon: ScanLine, label: "Canje por QR" },
  { icon: Send, label: "Feedback post-visita" },
  { icon: BarChart3, label: "Métricas de recurrencia" },
  { icon: Users, label: "Hasta 50 clientes participantes" },
];

const PRO_FEATURES: PlanFeature[] = [
  { icon: Layers, label: "Todo lo del Plan Base" },
  { icon: Users, label: "Reactivación automática" },
  { icon: Send, label: "Incentivos de recuperación" },
  { icon: Globe, label: "Reseñas de Google" },
  { icon: MessageCircle, label: "600 mensajes de WhatsApp incluidos" },
];

function FeatureList({
  features,
  variant,
}: {
  features: PlanFeature[];
  variant: "base" | "pro";
}) {
  const isPro = variant === "pro";

  return (
    <ul className="space-y-3.5" aria-label="Incluye">
      {features.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-3.5">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
              isPro
                ? "bg-[#ebe9ff] text-[#5d46c7]"
                : "bg-[#f0edff] text-[#6a55d2]"
            }`}
          >
            <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span
            className={`text-[15px] font-semibold leading-[1.35] ${
              isPro ? "text-white" : "text-[#27232c]"
            }`}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

type Billing = "MONTHLY" | "YEARLY";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("YEARLY");

  const proPrice =
    billing === "YEARLY"
      ? `${PLAN_PRICES.CURRENCY} ${PLAN_PRICES.YEARLY.toLocaleString("es-UY")}`
      : `${PLAN_PRICES.CURRENCY} ${PLAN_PRICES.MONTHLY.toLocaleString("es-UY")}`;
  const proPeriod = billing === "YEARLY" ? "/año" : "/mes";
  const proSignupUrl = `${APP_REGISTER_URL}?plan=PRO&billing=${billing}`;

  return (
    <section
      id="precios"
      aria-labelledby="pricing-title"
      className="scroll-mt-20 bg-[#f7f6f2] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="mx-auto max-w-[820px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Precios
          </p>
          <h2
            id="pricing-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] text-[#17151d] sm:text-[58px] lg:text-[70px]"
          >
            Elegí cómo querés cuidar cada regreso.
          </h2>
          <p className="mx-auto mt-6 max-w-[650px] text-[17px] leading-[1.65] text-[#68626d] sm:text-lg">
            Base retiene a quienes ya vienen. Pro suma seguimiento automático
            para recuperar a quienes cortan el hábito.
          </p>
        </header>

        <div className="mx-auto mt-14 grid max-w-[1100px] items-stretch gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          {/* ── Base ── */}
          <article className="flex min-h-[650px] flex-col rounded-[30px] border border-black/[0.09] bg-white p-7 shadow-[0_18px_55px_rgba(40,31,53,0.06)] sm:p-9 lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full bg-[#f1eff5] px-3 py-1 text-[11px] font-bold text-[#706a76]">
                Base
              </span>
            </div>

            <h3 className="mt-5 font-display text-[27px] font-bold tracking-[-0.035em] text-[#17151d]">
              Flikker Base
            </h3>
            <p className="mt-3 inline-flex w-fit rounded-full bg-[#fff0cc] px-3 py-1.5 text-[12px] font-bold text-[#9a6100]">
              Para hacer que vuelvan
            </p>

            <div className="mt-5 flex items-end gap-2 text-[#17151d]">
              <span className="font-display text-[48px] font-bold leading-none tracking-[-0.045em]">
                UYU 0
              </span>
            </div>

            <p className="mt-2 text-[13px] font-medium text-[#6a55d2]">
              Sin tarjeta. Sin compromiso.
            </p>

            <p className="mt-4 max-w-[470px] text-[15px] leading-[1.65] text-[#6e6872]">
              Para convertir cada visita en un motivo concreto para regresar.
            </p>

            <div className="my-7 h-px bg-black/[0.07]" aria-hidden="true" />

            <FeatureList features={BASE_FEATURES} variant="base" />

            <a
              href={APP_REGISTER_URL}
              data-testid="pricing-base-cta"
              className="mt-auto inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[14px] border border-[#17151d]/20 bg-[#17151d] px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(23,21,29,0.12)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#2b2730] hover:shadow-[0_14px_28px_rgba(23,21,29,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
            >
              Empezar gratis
            </a>
          </article>

          {/* ── Pro ── */}
          <article className="relative flex min-h-[680px] flex-col overflow-hidden rounded-[30px] bg-[#0b0916] p-7 text-white shadow-[0_28px_80px_rgba(34,21,79,0.28)] ring-1 ring-[#7767db]/35 sm:p-9 lg:-translate-y-3 lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#7157dc]/20 blur-3xl"
            />

            <div className="relative flex items-center justify-between gap-4">
              <span className="inline-flex rounded-full bg-[#30225f] px-3 py-1 text-[11px] font-bold text-[#bcb3ff]">
                Pro
              </span>
              <span className="inline-flex rounded-full bg-[#8a78f5] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(119,103,219,0.3)]">
                Recomendado
              </span>
            </div>

            <h3 className="relative mt-5 font-display text-[29px] font-bold tracking-[-0.035em]">
              Flikker Pro
            </h3>
            <p className="relative mt-3 inline-flex w-fit rounded-full bg-[#fff0cc] px-3 py-1.5 text-[12px] font-bold text-[#9a6100]">
              Para recuperarlos también
            </p>

            {/* Billing toggle */}
            <div
              role="group"
              aria-label="Período de facturación"
              className="relative mt-6 inline-flex self-start rounded-full bg-white/10 p-1"
            >
              <button
                type="button"
                onClick={() => setBilling("MONTHLY")}
                aria-pressed={billing === "MONTHLY"}
                data-testid="billing-monthly"
                className={cn(
                  "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all duration-150",
                  billing === "MONTHLY"
                    ? "bg-white text-[#17151d] shadow-sm"
                    : "text-white/60 hover:text-white/90"
                )}
              >
                Mensual
              </button>
              <button
                type="button"
                onClick={() => setBilling("YEARLY")}
                aria-pressed={billing === "YEARLY"}
                data-testid="billing-yearly"
                className={cn(
                  "rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all duration-150",
                  billing === "YEARLY"
                    ? "bg-white text-[#17151d] shadow-sm"
                    : "text-white/60 hover:text-white/90"
                )}
              >
                Anual
              </button>
            </div>

            <div className="relative mt-4 flex items-end gap-2">
              <span className="font-display text-[48px] font-bold leading-none tracking-[-0.045em]">
                {proPrice}
              </span>
              <span className="pb-1 text-[15px] text-white/60">{proPeriod}</span>
            </div>

            {billing === "YEARLY" && (
              <p className="relative mt-2 text-[13px] font-semibold text-[#a99cff]">
                Pagás 10 meses y usás 12
              </p>
            )}

            <p className="relative mt-4 max-w-[470px] text-[15px] leading-[1.65] text-white/65">
              Para hacer que vuelvan y recuperar también a quienes corten el
              hábito.
            </p>

            <div className="relative my-7 h-px bg-white/10" aria-hidden="true" />

            <div className="relative">
              <FeatureList features={PRO_FEATURES} variant="pro" />
            </div>

            <a
              href={proSignupUrl}
              data-testid="pricing-pro-cta"
              className="relative mt-auto inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[14px] bg-white px-5 py-3.5 text-[15px] font-bold text-[#17151d] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#f2f0ff] hover:shadow-[0_16px_32px_rgba(0,0,0,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c8eff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0916]"
            >
              <Check className="h-4 w-4 text-[#6a55d2]" strokeWidth={2.5} aria-hidden="true" />
              Empezar con Pro
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
