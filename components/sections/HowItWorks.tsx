import Image from "next/image";
import { Gift, MessageCircle } from "lucide-react";

const BENEFIT_TAGS = ["Café gratis", "Descuento", "2×1", "Regalo", "Personalizada"];

export function HowItWorks() {
  return (
    <section
      id="fidelizacion"
      aria-labelledby="fidel-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-6 xl:px-0">

        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Retención
          </p>
          <h2
            id="fidel-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#17151d] sm:text-[56px] lg:text-[68px]"
          >
            Dales una razón para volver.
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-[17px] leading-[1.65] text-[#5d5963]">
            Flikker no es un sistema de puntos. Es una plataforma de retención
            que los incluye, entre otras herramientas.
          </p>
        </div>

        {/* Cards — 2 pilares */}
        <div className="mx-auto mt-16 grid max-w-[920px] gap-5 lg:grid-cols-2">

          {/* ── 1. Beneficios ── */}
          <div className="flex flex-col rounded-[24px] border border-[#eae5df] bg-[#f7f6f2] p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7767db]/10">
              <Gift className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-[22px] font-bold leading-[1.15] tracking-[-0.025em] text-[#17151d]">
              Creá beneficios que tengan sentido para tu negocio.
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-[#69636d]">
              Vos decidís qué ofrecer. Los clientes saben que volver tiene valor.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {BENEFIT_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-[#5a4fa8] shadow-[0_1px_3px_rgba(0,0,0,0.07)] ring-1 ring-black/[0.05]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex justify-center pt-5">
              <div className="w-[72%] overflow-hidden rounded-2xl">
                <Image
                  src="/landing/reward-cappuccino.webp"
                  alt="Taza de café como recompensa en programa de fidelización Flikker"
                  width={800}
                  height={500}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ── 2. Reactivación ── */}
          <div className="flex flex-col rounded-[24px] bg-[#0d0b1f] p-8 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <MessageCircle
                className="h-5 w-5 text-[#9188f5]"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <h3 className="mt-5 text-[22px] font-bold leading-[1.15] tracking-[-0.025em]">
              Reactivación automática
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-white/60">
              Si alguien deja de venir, Flikker puede detectarlo y volver a
              contactarlo automáticamente por WhatsApp.
            </p>

            <div className="mt-7 space-y-5">
              {[
                { label: "Día 0",  text: "Última visita registrada" },
                { label: "Día 14", text: "Flikker detecta la inactividad" },
                { label: "Día 15", text: "WhatsApp automático de reactivación" },
              ].map(({ label, text }, i) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex shrink-0 flex-col items-center">
                    <span className="rounded-full bg-[#9188f5]/20 px-2.5 py-0.5 text-[11px] font-bold text-[#9188f5]">
                      {label}
                    </span>
                    {i < 2 && (
                      <span className="mt-1.5 block h-6 w-px bg-white/10" aria-hidden="true" />
                    )}
                  </div>
                  <p className="pt-0.5 text-[14px] leading-[1.55] text-white/65">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-auto pt-8 text-[13px] text-white/30">
              El umbral de inactividad se adapta al comportamiento de cada cliente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
