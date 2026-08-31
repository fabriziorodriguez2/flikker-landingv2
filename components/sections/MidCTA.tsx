"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

type StampCount = 6 | 7 | 8;

const STAMP_CARDS: Record<StampCount, string> = {
  6: "/landing/stamps-la-stampa-6.png",
  7: "/landing/stamps-la-stampa-7.png",
  8: "/landing/stamps-la-stampa-8.png",
};

export function MidCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() === true;
  const [stampCount, setStampCount] = useState<StampCount>(6);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextCount: StampCount = progress >= 0.72 ? 8 : progress >= 0.36 ? 7 : 6;
    setStampCount((currentCount) =>
      currentCount === nextCount ? currentCount : nextCount,
    );
  });

  const visibleStampCount: StampCount = shouldReduceMotion ? 8 : stampCount;

  return (
    <section
      ref={sectionRef}
      id="recompensas"
      aria-labelledby="stamps-title"
      className={`relative bg-[#eeebe4] text-[#201d24] ${
        shouldReduceMotion ? "py-24 sm:py-32" : "min-h-[220vh]"
      }`}
    >
      <div
        className={
          shouldReduceMotion
            ? "mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-6 xl:px-0"
            : "sticky top-0 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-5 py-12 sm:px-8 lg:px-6 xl:px-0"
        }
      >
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Progreso visible
          </p>
          <h2
            id="stamps-title"
            className="mt-4 font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[56px] lg:text-[68px]"
          >
            Cada visita tiene un próximo paso.
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] text-base leading-[1.65] text-[#69636d] sm:text-lg">
            Tus clientes ven exactamente cuánto les falta para la próxima
            recompensa.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[900px] sm:mt-10">
          <CustomerRewardCard
            stampCount={visibleStampCount}
            reducedMotion={shouldReduceMotion}
          />
        </div>

        <div
          aria-label={`${visibleStampCount} de 8 visitas completadas`}
          className="mx-auto mt-5 flex items-center gap-2"
        >
          {[6, 7, 8].map((step) => (
            <span
              key={step}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                visibleStampCount === step
                  ? "w-8 bg-[#5e46bd]"
                  : "w-1.5 bg-[#bbb4bd]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerRewardCard({
  stampCount,
  reducedMotion,
}: {
  stampCount: StampCount;
  reducedMotion: boolean;
}) {
  const isUnlocked = stampCount === 8;

  return (
    <motion.div
      layout={!reducedMotion}
      className="overflow-hidden rounded-[26px] bg-[#be6c1d] shadow-[0_28px_80px_rgba(62,36,18,0.18)] sm:rounded-[34px]"
    >
      <div className="relative aspect-[7/4]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stampCount}
            initial={reducedMotion ? false : { opacity: 0.65, scale: 0.992 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, scale: 1.006 }}
            transition={{ duration: reducedMotion ? 0 : 0.22 }}
            className="absolute inset-0"
          >
            <Image
              src={STAMP_CARDS[stampCount]}
              alt={`Tarjeta de puntos La Stampa con ${stampCount} de 8 visitas completadas`}
              fill
              sizes="(min-width: 1024px) 900px, 92vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div
          aria-live="polite"
          className="absolute right-[2.8%] top-[4%] z-10 flex h-[13%] min-h-8 w-[14%] items-center justify-center bg-[#be6c1d] text-xl font-medium leading-none text-black sm:text-4xl lg:text-[50px]"
        >
          {stampCount}/8
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isUnlocked && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#be6c1d] text-black"
          >
            <div className="flex flex-col items-center justify-center gap-5 px-5 py-6 text-center sm:flex-row sm:gap-7 sm:px-8 sm:py-7 sm:text-left">
              <div className="shrink-0 rounded-[18px] bg-white p-2.5 shadow-[0_10px_30px_rgba(69,32,8,0.16)]">
                <Image
                  src="/landing/reward-claim-qr.png"
                  alt="Código QR para reclamar la recompensa"
                  width={132}
                  height={132}
                  className="block h-[112px] w-[112px] sm:h-[132px] sm:w-[132px]"
                />
              </div>

              <div className="max-w-[390px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/55">
                  Recompensa desbloqueada · 8 de 8
                </p>
                <p className="mt-2 font-display text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                  Escaneá para reclamar tu recompensa
                </p>
                <p className="mt-2 text-xs leading-5 text-black/60 sm:text-sm">
                  El personal del local escanea este código y confirma el canje.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
