"use client";

import { APP_REGISTER_URL } from "@/lib/constants";

const CTA_STARS = [
  { left: 5, delay: -2, duration: 11, size: 20 },
  { left: 11, delay: -7, duration: 14, size: 27 },
  { left: 18, delay: -4, duration: 12, size: 17 },
  { left: 24, delay: -10, duration: 15, size: 22 },
  { left: 31, delay: -1, duration: 13, size: 15 },
  { left: 38, delay: -8, duration: 12, size: 25 },
  { left: 44, delay: -5, duration: 16, size: 17 },
  { left: 51, delay: -12, duration: 15, size: 28 },
  { left: 58, delay: -3, duration: 11, size: 15 },
  { left: 64, delay: -9, duration: 14, size: 22 },
  { left: 71, delay: -6, duration: 13, size: 19 },
  { left: 78, delay: -11, duration: 16, size: 27 },
  { left: 85, delay: -4, duration: 12, size: 15 },
  { left: 92, delay: -8, duration: 15, size: 24 },
] as const;

function FloatingStars() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes cta-star-float {
          0% { transform: translate3d(0, 28px, 0) rotate(0deg); opacity: 0; }
          12% { opacity: 0.34; }
          82% { opacity: 0.28; }
          100% { transform: translate3d(0, -570px, 0) rotate(42deg); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-floating-star { display: none; }
        }
      `}</style>

      {CTA_STARS.map((star) => (
        <span
          key={`${star.left}-${star.delay}`}
          className="cta-floating-star absolute bottom-0 select-none text-[#9188f5]"
          style={{
            left: `${star.left}%`,
            fontSize: star.size,
            lineHeight: 1,
            opacity: 0,
            animation: `cta-star-float ${star.duration}s ${star.delay}s linear infinite`,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function CTAFinal() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-20">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-8 py-20 text-center text-white md:px-16 md:py-24"
        style={{ background: "#07060f" }}
      >
        {/* Purple radial glow at top center */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0"
          aria-hidden="true"
          style={{
            height: "55%",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(110,60,255,0.45) 0%, transparent 100%)",
          }}
        />

        <FloatingStars />

        <div className="relative">
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-periwinkle">
            ¿Hacemos que vuelvan?
          </span>

          <h2 className="font-display mt-6 text-[36px] font-black leading-[1.05] tracking-[-0.03em] md:text-[60px] lg:text-[72px]">
            Tu próximo cliente puede ser uno que{" "}
            <span className="text-periwinkle">ya te eligió.</span>
          </h2>

          <p className="mt-6 mx-auto max-w-xl text-base leading-[1.6] text-white/60 md:text-lg">
            Convertí cada visita en una oportunidad de volver. Flikker da
            motivos para regresar, mejora tu reputación y reactiva a quienes
            dejaron de venir, todo automático.
          </p>

          <div className="mt-10">
            <a
              href={APP_REGISTER_URL}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-[#17151d] shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#f2f0ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9c8eff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060f] md:px-14 md:py-6 md:text-xl"
            >
              Quiero probar Flikker
            </a>
          </div>

          <p className="mt-5 text-sm text-white/40">
            Una conversación breve, sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
}
