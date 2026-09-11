import { UserPlus, Settings2, QrCode, LayoutDashboard } from "lucide-react";

import { APP_REGISTER_URL } from "@/lib/constants";

const STEPS = [
  {
    n: "01",
    icon: UserPlus,
    badge: "2 min",
    title: "Creá tu cuenta",
    body: "Registrate en app.flikker.uy. Sin tarjeta de crédito y sin contratos mínimos.",
  },
  {
    n: "02",
    icon: Settings2,
    badge: "24 – 48 h",
    title: "Configuramos juntos",
    body: "Definimos tu recompensa, armamos el flujo de check-in y preparamos el QR o NFC. El equipo de Flikker se encarga de todo.",
  },
  {
    n: "03",
    icon: QrCode,
    badge: "5 min",
    title: "Instalás el punto de check-in",
    body: "Colocás el QR en el mostrador o la entrada. Desde ese momento tus clientes ya pueden registrar visitas.",
  },
  {
    n: "04",
    icon: LayoutDashboard,
    badge: "Desde el día 1",
    title: "Tus clientes vuelven. Vos medís.",
    body: "Seguís visitas, canjes y reactivaciones desde el panel. Sin apps adicionales ni capacitación especial.",
  },
] as const;

export function GettingStarted() {
  return (
    <section
      id="como-empezar"
      aria-labelledby="gs-title"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-6 xl:px-0">

        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Implementación
          </p>
          <h2
            id="gs-title"
            className="mt-5 font-display text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#17151d] sm:text-[50px] lg:text-[60px]"
          >
            Activo en menos de 48 horas.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.65] text-[#5d5963]">
            Sin equipos especiales. Sin capacitación. El equipo de Flikker
            configura todo junto con vos.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {STEPS.map(({ n, icon: Icon, badge, title, body }, i) => (
              <div key={n} className="relative flex flex-col">

                {/* Desktop connector — dashed line to the right of each step (except last) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-[22px] hidden lg:block"
                    style={{
                      left: "calc(50% + 26px)",
                      right: "calc(-50% + 26px)",
                      height: 0,
                      borderTop: "1.5px dashed #d4cef0",
                    }}
                  />
                )}

                {/* Mobile connector — vertical line below the badge (except last) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute left-[21px] top-[44px] block w-px lg:hidden"
                    style={{
                      bottom: "-40px",
                      borderLeft: "1.5px dashed #d4cef0",
                    }}
                  />
                )}

                {/* Number badge + icon */}
                <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-4">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7767db] text-[13px] font-bold text-white lg:h-11 lg:w-11">
                    {n}
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#f0eeff] lg:hidden">
                    <Icon className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                {/* Desktop icon (below the number badge) */}
                <div className="mt-5 hidden items-center justify-center lg:flex">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0eeff]">
                    <Icon className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                {/* Text content */}
                <div className="mt-4 pl-0 lg:mt-5 lg:text-center">
                  <span className="inline-block rounded-full bg-[#f0eeff] px-2.5 py-0.5 text-[11px] font-semibold text-[#6057b8]">
                    {badge}
                  </span>
                  <h3 className="mt-3 text-[16px] font-bold leading-[1.25] tracking-[-0.02em] text-[#17151d]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-[#69636d]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <a
            href={APP_REGISTER_URL}
            className="inline-flex items-center gap-2 rounded-full bg-[#7767db] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(119,103,219,0.38)] transition-all hover:bg-[#6658c5] hover:shadow-[0_4px_24px_rgba(119,103,219,0.48)]"
          >
            Empezar gratis
          </a>
          <p className="text-[13px] text-[#9691a0]">
            Setup asistido incluido en todos los planes
          </p>
        </div>

      </div>
    </section>
  );
}
