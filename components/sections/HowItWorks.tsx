import { Check, Gift, MessageCircle, Sparkles } from "lucide-react";

const BENEFIT_TAGS = ["Café gratis", "Descuento", "2×1", "Regalo", "Personalizada"];

export function HowItWorks() {
  return (
    <section
      id="retencion"
      aria-labelledby="retention-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-6 xl:px-0">

        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Retención
          </p>
          <h2
            id="retention-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#17151d] sm:text-[56px] lg:text-[68px]"
          >
            Dales una razón para volver.
          </h2>
          <p className="mx-auto mt-5 max-w-[580px] text-[17px] leading-[1.65] text-[#5d5963]">
            Flikker combina beneficios con herramientas para recuperar clientes
            y convertir cada visita en el comienzo de la siguiente.
          </p>
        </div>

        {/* Cards — 2 pilares */}
        <div className="mx-auto mt-16 grid max-w-[1080px] gap-6 lg:grid-cols-[1.06fr_0.94fr]">

          {/* ── 1. Beneficios ── */}
          <div className="flex flex-col overflow-hidden rounded-[30px] border border-[#e7e2dc] bg-[#f7f5f1] p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white shadow-[0_8px_24px_rgba(35,27,57,0.08)] ring-1 ring-black/[0.05]">
                <Gift className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7767db]">
                Configuración flexible
              </p>
            </div>

            <h3 className="mt-6 max-w-[430px] text-[26px] font-bold leading-[1.08] tracking-[-0.035em] text-[#17151d] sm:text-[30px]">
              Creá beneficios que tengan sentido para tu negocio.
            </h3>
            <p className="mt-3 max-w-[440px] text-[15px] leading-[1.7] text-[#69636d]">
              Vos decidís qué ofrecer. Los clientes saben que volver tiene valor.
            </p>

            <div className="mt-8 rounded-[24px] bg-white p-5 shadow-[0_22px_60px_rgba(38,30,68,0.09)] ring-1 ring-black/[0.055] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7767db]">
                    Nuevo beneficio
                  </p>
                  <p className="mt-1.5 text-[17px] font-bold tracking-[-0.02em] text-[#17151d]">
                    Elegí qué querés ofrecer
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0edff] text-[#7767db]">
                  <Sparkles className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 border-t border-black/[0.07] pt-5">
                <p className="text-[11px] font-semibold text-[#817b85]">Tipo de beneficio</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BENEFIT_TAGS.map((tag, index) => (
                    <span
                      key={tag}
                      className={
                        index === 0
                          ? "rounded-full bg-[#7767db] px-3.5 py-2 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(119,103,219,0.24)]"
                          : "rounded-full bg-[#f5f3ef] px-3.5 py-2 text-[12px] font-semibold text-[#69636d]"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 divide-y divide-black/[0.07] border-y border-black/[0.07]">
                <div className="grid gap-1 py-4 sm:grid-cols-[138px_1fr] sm:items-center">
                  <p className="text-[11px] font-semibold text-[#8a848e]">Beneficio</p>
                  <p className="text-[14px] font-bold text-[#26222b]">
                    Café de especialidad gratis
                  </p>
                </div>
                <div className="grid gap-1 py-4 sm:grid-cols-[138px_1fr] sm:items-center">
                  <p className="text-[11px] font-semibold text-[#8a848e]">Cuándo ofrecerlo</p>
                  <p className="text-[14px] font-bold text-[#26222b]">
                    Después de una nueva visita
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-[#5547bd]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7767db] text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-[13px] font-bold">Beneficio activo</span>
                </div>
                <span className="rounded-full bg-[#eeebff] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6658cc]">
                  Listo
                </span>
              </div>
            </div>
          </div>

          {/* ── 2. Reactivación ── */}
          <div className="relative flex flex-col overflow-hidden rounded-[30px] bg-[#0d0b1f] p-6 text-white shadow-[0_28px_80px_rgba(13,11,31,0.16)] sm:p-8 lg:p-10">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#7767db]/20 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white/10 ring-1 ring-white/10">
                <MessageCircle
                  className="h-5 w-5 text-[#a79eff]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </div>
              <span className="flex items-center gap-2 rounded-full bg-[#25203f] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#b4acff] ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8c7cff] shadow-[0_0_0_4px_rgba(140,124,255,0.12)]" />
                Automática
              </span>
            </div>

            <p className="relative mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9188f5]">
              Recuperación
            </p>
            <h3 className="relative mt-2 text-[28px] font-bold leading-[1.08] tracking-[-0.035em] sm:text-[30px]">
              Reactivación automática
            </h3>
            <p className="relative mt-3 text-[15px] leading-[1.7] text-white/60">
              Si alguien deja de venir, Flikker puede detectarlo y volver a
              contactarlo automáticamente por WhatsApp.
            </p>

            <div className="relative mt-8 rounded-[22px] bg-white/[0.055] p-5 ring-1 ring-white/10 sm:p-6">
              {[
                { label: "Día 0",  text: "Última visita registrada" },
                { label: "Día 14", text: "Flikker detecta la inactividad" },
                { label: "Día 15", text: "WhatsApp automático de reactivación" },
              ].map(({ label, text }, i) => (
                <div key={label} className="grid grid-cols-[28px_1fr] gap-3">
                  <div className="flex flex-col items-center">
                    <span className={i === 2 ? "flex h-7 w-7 items-center justify-center rounded-full bg-[#7767db] text-white" : "flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#aaa1ff] ring-1 ring-white/10"}>
                      {i === 2 ? <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" /> : <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                    </span>
                    {i < 2 && (
                      <span className="block h-9 w-px bg-white/10" aria-hidden="true" />
                    )}
                  </div>
                  <div className={i < 2 ? "pb-5" : ""}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9188f5]">{label}</p>
                    <p className="mt-1 text-[13px] font-semibold leading-[1.5] text-white/75">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 rounded-[20px] bg-white p-5 text-[#17151d] shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7767db]">Mensaje preparado</p>
                <span className="text-[11px] font-semibold text-[#8a848e]">WhatsApp</span>
              </div>
              <p className="mt-3 text-[13px] font-semibold leading-[1.55] text-[#4e4853]">
                Te extrañamos. Cuando quieras volver, tenemos algo especial para vos.
              </p>
            </div>

            <p className="relative mt-6 text-[12px] leading-[1.6] text-white/35">
              El momento de contacto se adapta al comportamiento de cada cliente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
