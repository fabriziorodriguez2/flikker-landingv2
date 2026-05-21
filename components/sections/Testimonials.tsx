"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/constants";

type CaseStudy = {
  category: string;
  location: string;
  name: string;
  statValue: string;
  statUnit?: string;
  statDetail: string;
  description: string;
  imageSrc?: string;
  imageBg?: string;
  accentColor?: string;
};

const CASES: CaseStudy[] = [
  {
    category: "Tienda de ropa deportiva",
    location: "Montevideo",
    name: "Gains",
    statValue: "58",
    statUnit: "reseñas",
    statDetail: "en Google · +37% conversión",
    description:
      "Pasaron de 8 a 58 reseñas en menos de 30 días y su tasa de conversión subió un 37%. Todo automatizado: sin pedir nada a mano.",
    imageSrc: "/gains-logo.png",
    imageBg: "#0a0a0a",
    accentColor: "#9188f5",
  },
];

function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
      {/* Image / visual area */}
      <div
        className="relative flex h-52 items-end justify-start overflow-hidden"
        style={{ background: c.imageBg ?? "#111" }}
      >
        {c.imageSrc && (
          <Image
            src={c.imageSrc}
            alt={`Logo de ${c.name}`}
            width={120}
            height={120}
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl object-contain"
            unoptimized
          />
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
            {c.category} · {c.location}
          </p>
          <p className="mt-0.5 text-[15px] font-bold text-white">{c.name}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Stat */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[52px] font-black leading-none tracking-tight text-neutral-900">
            {c.statValue}
          </span>
          {c.statUnit && (
            <span className="text-[15px] font-semibold text-neutral-500">{c.statUnit}</span>
          )}
          <span className="text-[13px] text-neutral-400">{c.statDetail}</span>
        </div>

        <hr className="my-4 border-neutral-100" />

        <p className="text-[14px] leading-[1.65] text-neutral-500">{c.description}</p>

        <a
          href="/casos/gains"
          className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-neutral-900 transition-colors hover:text-periwinkle"
        >
          Leer caso completo
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

type TestimonialsProps = {
  hasTestimonials?: boolean;
};

export function Testimonials({ hasTestimonials = false }: TestimonialsProps) {
  return (
    <section
      id="casos"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Casos de Éxito
          </span>
          <h2 className="font-display mt-3 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[48px]">
            Negocios reales.
            <br />
            Resultados reales.
          </h2>
        </div>

        {hasTestimonials ? (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <CaseCard key={c.name} c={c} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex max-w-xl flex-col items-start gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
            <span className="inline-flex items-center rounded-full bg-periwinkle/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-periwinkle">
              En beta
            </span>
            <h3 className="font-display text-[24px] font-black leading-[1.15] tracking-[-0.015em] text-neutral-900 md:text-[30px]">
              Arrancamos con pocos negocios.
              <br />
              Sé de los primeros.
            </h3>
            <p className="text-base leading-[1.6] text-neutral-500">
              Estamos en beta cerrada. Si entrás ahora, tenés acompañamiento
              directo, setup sin costo y precio fundador por 12 meses.
            </p>
            <WhatsAppButton message={WHATSAPP_MESSAGES.testimonials_beta}>
              Quiero ser beta tester
            </WhatsAppButton>
          </div>
        )}
      </div>
    </section>
  );
}
