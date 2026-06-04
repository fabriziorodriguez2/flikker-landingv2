"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  Star,
  QrCode,
  Users,
  Send,
  MessageCircle,
  Layers,
  Globe,
  Headphones,
  Check,
  Minus,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const BASE_PROMO = 1000;
const BASE_REGULAR = 2000;
const PRO_PROMO = 2000;
const PRO_REGULAR = 3000;

function fmt(n: number) {
  return n.toLocaleString("es-UY");
}

/* ── Feature types ── */

type Feature = {
  icon: LucideIcon;
  label: ReactNode;
  sub: string;
  green?: boolean;
};

const BASE_FEATURES: Feature[] = [
  {
    icon: Star,
    label: "Reseñas automáticas en Google",
    sub: "WhatsApp a cada cliente atendido",
  },
  {
    icon: QrCode,
    label: "QR de captación",
    sub: "Para mostrador o sala de espera",
  },
  {
    icon: Users,
    label: "Base de contactos propia",
    sub: "Tus clientes guardados para siempre",
  },
  {
    icon: Send,
    label: "Campañas manuales",
    sub: "Promociones y recordatorios a tu base",
  },
  {
    icon: MessageCircle,
    label: (
      <>
        <strong className="font-semibold text-neutral-900">200 mensajes</strong>{" "}
        de WhatsApp incluidos
      </>
    ),
    sub: "$2,50 UYU por mensaje extra",
  },
];

const PRO_FEATURES: Feature[] = [
  {
    icon: Layers,
    label: "Todo lo del plan Base",
    sub: "Reseñas, QR, base de contactos y campañas",
    green: true,
  },
  {
    icon: Globe,
    label: "Widget de prueba social para tu web",
    sub: "Tus reseñas reales en tu sitio, automático",
  },
  {
    icon: Headphones,
    label: "Soporte prioritario",
    sub: "Respuesta en menos de 24 horas",
    green: true,
  },
  {
    icon: MessageCircle,
    label: (
      <>
        <strong className="font-semibold text-neutral-900">500 mensajes</strong>{" "}
        de WhatsApp incluidos
      </>
    ),
    sub: "$2,50 UYU por mensaje extra",
  },
];

/* ── Comparison table data ── */

type CompRow = {
  feature: string;
  base: boolean | string;
  pro: boolean | string;
};

const COMPARISON: CompRow[] = [
  { feature: "Reseñas automáticas en Google por WhatsApp", base: true, pro: true },
  { feature: "QR de captación en el local", base: true, pro: true },
  { feature: "Base de contactos propia", base: true, pro: true },
  { feature: "Campañas manuales por WhatsApp", base: true, pro: true },
  { feature: "Mensajes de WhatsApp incluidos", base: "200 / mes", pro: "500 / mes" },
  { feature: "Widget de prueba social para tu web", base: false, pro: true },
  { feature: "Soporte prioritario (respuesta en 24 hs)", base: false, pro: true },
  { feature: "Precio por mensaje extra", base: "$2,50 UYU", pro: "$2,50 UYU" },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check className="mx-auto h-4 w-4 text-emerald-500" strokeWidth={2.5} />;
  if (value === false)
    return <Minus className="mx-auto h-4 w-4 text-neutral-300" strokeWidth={2} />;
  return <span className="font-medium text-neutral-700">{value}</span>;
}

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="flex-1 space-y-3.5">
      {features.map((f, i) => {
        const iconBg = f.green ? "bg-emerald-50" : "bg-periwinkle/10";
        const iconColor = f.green ? "#16a34a" : "#9188f5";
        return (
          <li key={i} className="flex items-start gap-3">
            <div className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-lg", iconBg)}>
              <f.icon className="h-3.5 w-3.5" style={{ color: iconColor }} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[13px] font-semibold leading-snug text-neutral-800">
                {f.label}
              </p>
              <p className="text-[11px] text-neutral-400">{f.sub}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Main component ── */

export function Pricing() {
  const [showTable, setShowTable] = useState(false);

  return (
    <section
      id="precios"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-8 md:py-32"
    >
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
            Dos planes. Todo incluido. Sin letra chica.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">

          {/* ── Base ── */}
          <div className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <span className="inline-flex w-fit items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-500">
              Base
            </span>

            <h3 className="font-display mt-3 text-[17px] font-black text-neutral-900">
              Flikker Base
            </h3>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-neutral-400 line-through">
                  ${fmt(BASE_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="font-display text-[40px] font-black leading-none tracking-tight text-neutral-900">
                  ${fmt(BASE_PROMO)}
                </span>
                <span className="text-xs text-neutral-400">UYU / mes</span>
              </div>
            </div>

            <p className="mt-2.5 text-[12px] leading-[1.6] text-neutral-500">
              Para negocios que quieren empezar a construir reputación y base
              de clientes sin complicaciones.
            </p>

            <hr className="my-4 border-neutral-100" />

            <FeatureList features={BASE_FEATURES} />

            <p className="mt-4 text-[11px] font-medium text-periwinkle">
              Si usás más de 500 mensajes, te conviene el Pro.
            </p>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[14px] font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Empezar con Base
            </a>

            <p className="mt-2.5 text-center text-[11px] text-neutral-400">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

          {/* ── Pro ── */}
          <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-2 ring-periwinkle">
            <span className="inline-flex w-fit items-center rounded-full bg-periwinkle/10 px-2.5 py-0.5 text-[11px] font-semibold text-periwinkle">
              Pro
            </span>

            <h3 className="font-display mt-3 text-[17px] font-black text-neutral-900">
              Flikker Pro
            </h3>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-neutral-400 line-through">
                  ${fmt(PRO_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="font-display text-[40px] font-black leading-none tracking-tight text-neutral-900">
                  ${fmt(PRO_PROMO)}
                </span>
                <span className="text-xs text-neutral-400">UYU / mes</span>
              </div>
            </div>

            <p className="mt-2.5 text-[12px] leading-[1.6] text-neutral-500">
              Para negocios que quieren aprovechar su reputación al máximo y
              llegar a más clientes.
            </p>

            <hr className="my-4 border-neutral-100" />

            <FeatureList features={PRO_FEATURES} />

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-periwinkle px-4 py-3 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(145,136,245,0.35)] transition-all hover:opacity-90"
            >
              Empezar con Pro
            </a>

            <p className="mt-2.5 text-center text-[11px] text-neutral-400">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

        </div>

        {/* Compare button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowTable((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-800"
          >
            {showTable ? "Ocultar comparación" : "Comparar planes"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                showTable && "rotate-180"
              )}
            />
          </button>
        </div>

        {/* Comparison table */}
        {showTable && (
          <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-2xl border border-neutral-200">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-5 py-3 text-left font-semibold text-neutral-500">
                    Característica
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-neutral-500">
                    Base
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-periwinkle">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-neutral-100 last:border-b-0",
                      i % 2 === 1 && "bg-neutral-50/60"
                    )}
                  >
                    <td className="px-5 py-3 text-neutral-700">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.base} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
}
