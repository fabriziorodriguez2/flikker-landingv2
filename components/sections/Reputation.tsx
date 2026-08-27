import {
  Check,
  Globe,
  LockKeyhole,
  MessageCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import type { ReactNode } from "react";

export function Reputation() {
  return (
    <section
      id="reputacion"
      aria-labelledby="rep-title"
      className="overflow-hidden bg-[#f7f6f2] py-24 sm:py-32"
    >
      <style>{`
        @keyframes rep-float {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -7px; }
        }
        @keyframes rep-flow {
          to { stroke-dashoffset: -24; }
        }
        .rep-float-a { animation: rep-float 5.8s ease-in-out infinite; }
        .rep-float-b { animation: rep-float 6.4s ease-in-out .8s infinite; }
        .rep-flow-line { animation: rep-flow 2.4s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .rep-float-a, .rep-float-b, .rep-flow-line { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-6 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
              Reputación
            </p>

            <h2
              id="rep-title"
              className="mt-5 font-display text-[42px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#17151d] sm:text-[54px] lg:text-[62px]"
            >
              Escuchá primero.
              <br />
              Pedí la reseña después.
            </h2>

            <p className="mt-6 max-w-[500px] text-[17px] leading-[1.65] text-[#5d5963] sm:text-lg">
              Flikker recoge feedback después de la visita y, si el cliente
              quiere, lo guía para compartir su experiencia también en Google.
            </p>

            <div className="mt-10 space-y-5">
              <Micro
                iconBg="bg-[#e5f4e9]"
                icon={<Check className="h-4 w-4 text-[#277a47]" strokeWidth={2.5} />}
                text="El cliente comparte su experiencia primero con vos, no con el mundo."
              />
              <Micro
                iconBg="bg-[#7767db]/10"
                icon={<Star className="h-4 w-4 fill-[#7767db] text-[#7767db]" strokeWidth={0} />}
                text="Si quiere, lo guiamos a dejar la reseña en Google en un solo toque."
              />
              <Micro
                iconBg="bg-[#7767db]/10"
                icon={<TrendingUp className="h-4 w-4 text-[#7767db]" strokeWidth={2} />}
                text="Seguimiento de rating y cantidad de reseñas en tiempo real."
              />
            </div>

            <p className="mt-11 text-[15px] font-semibold leading-snug text-[#2b2830] sm:text-base">
              Flikker convierte feedback en reputación real.
            </p>
          </div>

          <ReputationFlow />
        </div>
      </div>
    </section>
  );
}

function ReputationFlow() {
  return (
    <div
      className="relative mx-auto min-h-[610px] w-full max-w-[610px]"
      aria-label="Flujo de feedback privado, reseña en Google y mejora de reputación"
    >
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[8%] h-64 w-64 rounded-full bg-[#7767db]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[2%] h-56 w-56 rounded-full bg-[#65b884]/10 blur-3xl"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 610 610"
        className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
      >
        <defs>
          <linearGradient id="rep-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8b79e8" stopOpacity=".5" />
            <stop offset="1" stopColor="#4f9b69" stopOpacity=".55" />
          </linearGradient>
          <marker id="rep-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8" fill="none" stroke="#6d62b6" strokeWidth="1.4" />
          </marker>
        </defs>
        <path
          d="M214 172 C 288 176, 309 207, 354 246"
          fill="none"
          stroke="url(#rep-line)"
          strokeWidth="1.6"
          strokeDasharray="7 8"
          markerEnd="url(#rep-arrow)"
          className="rep-flow-line"
        />
        <path
          d="M405 402 C 404 449, 365 475, 305 500"
          fill="none"
          stroke="url(#rep-line)"
          strokeWidth="1.6"
          strokeDasharray="7 8"
          markerEnd="url(#rep-arrow)"
          className="rep-flow-line"
        />
      </svg>

      <article className="rep-float-a absolute left-0 top-7 z-10 w-[86%] max-w-[370px] rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_22px_60px_rgba(36,28,45,0.10)] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eeeaff] text-[#6753ca]">
              <LockKeyhole className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#242029]">Feedback privado</p>
              <p className="mt-0.5 text-[10px] text-[#96909a]">Solo lo ve tu negocio</p>
            </div>
          </div>
          <span className="rounded-full bg-[#f1eef8] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#776f80]">
            Recibido
          </span>
        </div>

        <div className="mt-5 rounded-[18px] bg-[#f8f7fb] p-4 ring-1 ring-black/[0.035]">
          <MessageCircle className="h-4 w-4 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
          <p className="mt-2 text-[16px] font-semibold leading-[1.45] tracking-[-0.015em] text-[#312c35]">
            “Muy buena atención, vuelvo seguro.”
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f4eb] text-[9px] font-bold text-[#397d55]">
            M
          </span>
          <p className="text-[11px] text-[#85808a]">Martín · después de su visita</p>
        </div>
      </article>

      <div className="absolute left-[39%] top-[205px] z-20 rounded-full border border-[#ddd7f5] bg-[#f7f6f2]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em] text-[#6a58c2] shadow-sm backdrop-blur-sm">
        Invitación automática
      </div>

      <article className="rep-float-b absolute right-0 top-[250px] z-10 w-[88%] max-w-[390px] rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_24px_70px_rgba(36,28,45,0.12)] sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3f7ff]">
              <GoogleG />
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#242029]">Reseña en Google</p>
              <p className="mt-0.5 text-[10px] text-[#96909a]">Compartida por el cliente</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f5eb] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-[#2f7549]">
            <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
            Publicada
          </span>
        </div>

        <div className="mt-5 flex gap-1" aria-label="5 estrellas">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-[18px] w-[18px] fill-[#fbbc04] text-[#fbbc04]" />
          ))}
        </div>
        <p className="mt-3 text-[15px] font-semibold leading-[1.5] tracking-[-0.01em] text-[#312c35]">
          “Muy buena atención, vuelvo seguro.”
        </p>
        <div className="mt-4 flex items-center gap-2 border-t border-black/[0.06] pt-3.5 text-[10px] font-semibold text-[#77717c]">
          <Globe className="h-3.5 w-3.5 text-[#397d55]" strokeWidth={2} aria-hidden="true" />
          Visible en el perfil del negocio
        </div>
      </article>

      <div className="absolute bottom-4 left-[4%] z-20 grid w-[92%] grid-cols-2 gap-3">
        <article className="rounded-[20px] border border-black/[0.055] bg-white/95 p-4 shadow-[0_16px_45px_rgba(36,28,45,0.09)] backdrop-blur-sm">
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((star) => (
              <Star key={star} className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
            ))}
          </div>
          <p className="mt-2 font-display text-[26px] font-bold leading-none tracking-[-0.04em] text-[#211d26]">
            4.8
          </p>
          <p className="mt-1 text-[10px] font-semibold text-[#837d87]">promedio</p>
        </article>

        <article className="rounded-[20px] border border-[#dcece1] bg-[#f8fcf9]/95 p-4 shadow-[0_16px_45px_rgba(36,28,45,0.08)] backdrop-blur-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e2f2e7] text-[#397d55]">
            <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
          </span>
          <p className="mt-2 font-display text-[22px] font-bold leading-none tracking-[-0.035em] text-[#255e3c]">
            +12 reseñas
          </p>
          <p className="mt-1 text-[10px] font-semibold text-[#66806f]">este mes</p>
        </article>
      </div>
    </div>
  );
}

function Micro({
  iconBg,
  icon,
  text,
}: {
  iconBg: string;
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
        {icon}
      </div>
      <p className="pt-0.5 text-[15px] leading-[1.6] text-[#4e4852]">{text}</p>
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path
        fill="#FFC107"
        d="M43.6 20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 0 1 0-24c3 0 5.7 1.1 7.8 3l5.7-5.7A20 20 0 1 0 44 24c0-1.3-.1-2.7-.4-4Z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8A12 12 0 0 1 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7A20 20 0 0 0 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.9 28l-6.6 5.1A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C41.1 35.4 44 30.3 44 24c0-1.3-.1-2.7-.4-4Z"
      />
    </svg>
  );
}
