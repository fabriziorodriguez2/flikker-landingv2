"use client";

import { useState } from "react";
import { Check, Minus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

type Cell = true | false | string;

const ROWS: { label: string; highlight?: boolean; free: Cell; starter: Cell; pro: Cell; custom: Cell }[] = [
  { label: "Mensajes WhatsApp / mes",   free: "100",   starter: "200",    pro: "600",          custom: "Ilimitados" },
  { label: "Reseñas automáticas",        free: true,    starter: true,     pro: true,           custom: true },
  { label: "Filtro inteligente",         free: true,    starter: true,     pro: true,           custom: true },
  { label: "Dashboard",                  free: "Básico",starter: "Básico", pro: "Completo",     custom: "Personalizado" },
  { label: "Reactivación de clientes",   highlight: true, free: false, starter: false, pro: true, custom: true },
  { label: "Widget de prueba social",    highlight: true, free: false, starter: false, pro: true, custom: true },
  { label: "Widget de notificaciones",   highlight: true, free: false, starter: false, pro: true, custom: true },
  { label: "Reporte mensual",            free: false,   starter: false,    pro: true,           custom: true },
  { label: "Soporte",                    free: "Email", starter: "Email",  pro: "WhatsApp 24h", custom: "Prioritario" },
  { label: "Setup asistido",             free: false,   starter: false,    pro: "Opcional",     custom: true },
  { label: "Múltiples locales",          free: false,   starter: false,    pro: false,          custom: true },
];

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
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200",
          annual ? "bg-periwinkle" : "bg-neutral-200"
        )}
      >
        <span className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200",
          annual ? "translate-x-5" : "translate-x-0"
        )} />
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
    <span className={cn("text-[13px] font-medium", pro ? "text-periwinkle" : "text-neutral-600")}>
      {value}
    </span>
  );
}

const STARTER_MONTHLY = 2990;
const PRO_MONTHLY = 5490;

function fmt(n: number) {
  return n.toLocaleString("es-UY");
}

export default function PlanesPage() {
  const [annual, setAnnual] = useState(false);
  const starterPrice = annual ? STARTER_MONTHLY * 10 : STARTER_MONTHLY;
  const proPrice = annual ? PRO_MONTHLY * 10 : PRO_MONTHLY;
  const period = annual ? "/ año" : "/ mes";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Back link */}
          <Link
            href="/#precios"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-periwinkle"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver a precios
          </Link>

          {/* Header */}
          <div className="mt-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
              Planes
            </span>
            <h1 className="font-display mt-3 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[48px]">
              Compará nuestros planes
            </h1>
            <p className="mt-3 text-base text-neutral-500">
              Elegí la potencia que tu negocio necesita para crecer.
            </p>
            <div className="mt-8">
              <Toggle annual={annual} onChange={setAnnual} />
            </div>
          </div>

          {/* Table */}
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="border-b border-neutral-100">
                  <th className="pb-5 text-left w-[32%]">
                    <span className="text-[12px] font-semibold text-neutral-400">Características</span>
                  </th>
                  <th className="pb-5 text-center">
                    <p className="text-[15px] font-bold text-neutral-900">Gratis</p>
                    <p className="mt-0.5 text-[13px] text-neutral-400">$0</p>
                    <p className="mt-0.5 text-[11px] text-neutral-400">hasta 100 msg o 20 reseñas</p>
                  </th>
                  <th className="pb-5 text-center">
                    <p className="text-[15px] font-bold text-neutral-900">Starter</p>
                    <p className="mt-0.5 text-[13px] text-neutral-400">${fmt(starterPrice)} {period}</p>
                  </th>
                  <th className="pb-5 text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="mb-1.5 rounded-full bg-periwinkle px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                        Popular
                      </span>
                      <p className="text-[15px] font-bold text-neutral-900">Pro</p>
                      <p className="mt-0.5 text-[13px] text-neutral-400">${fmt(proPrice)} {period}</p>
                    </div>
                  </th>
                  <th className="pb-5 text-center">
                    <p className="text-[15px] font-bold text-neutral-900">A medida</p>
                    <p className="mt-0.5 text-[13px] text-neutral-400">Consultá</p>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-neutral-100">
                {ROWS.map(({ label, highlight, free, starter, pro, custom }) => (
                  <tr key={label} className="hover:bg-neutral-50/60 transition-colors">
                    <td className="py-4 pr-6">
                      <span className={cn(
                        "text-[13px] font-medium",
                        highlight ? "text-periwinkle" : "text-neutral-600"
                      )}>
                        {label}
                      </span>
                    </td>
                    <td className="py-4 text-center"><CellValue value={free} /></td>
                    <td className="py-4 text-center"><CellValue value={starter} /></td>
                    <td className="py-4 text-center"><CellValue value={pro} pro /></td>
                    <td className="py-4 text-center"><CellValue value={custom} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl border border-dashed border-neutral-300 px-5 py-3.5 text-[14px] font-semibold text-neutral-500 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              Empezar gratis
            </a>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl border border-neutral-200 px-5 py-3.5 text-[14px] font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              Empezar con Starter
            </a>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl bg-periwinkle px-5 py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Quiero el plan Pro
            </a>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.nav)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-2xl border border-neutral-200 px-5 py-3.5 text-[14px] font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
            >
              Consultar
            </a>
          </div>

          {/* Guarantee */}
          <p className="mt-10 text-center text-sm leading-[1.6] text-neutral-400">
            <span className="font-semibold text-neutral-600">Garantía:</span> si en 30 días no tenés al menos 20 reseñas nuevas, te devolvemos el setup. Sin drama.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
