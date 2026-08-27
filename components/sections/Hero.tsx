"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  type Variants,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { APP_REGISTER_URL } from "@/lib/constants";

const COPY_REVEAL: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

const COPY_ITEM_REVEAL: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 24 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 24 });
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [12, -12]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (
      shouldReduceMotion ||
      window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 10);
    pointerY.set(y * 8);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-[#f7f6f2]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/[0.06]"
      />

      <div className="mx-auto grid min-h-[760px] max-w-[1200px] grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-12 lg:gap-8 lg:px-6 lg:pb-20 lg:pt-28 xl:px-0">
        <motion.div
          variants={COPY_REVEAL}
          initial={false}
          animate="visible"
          className="relative z-10 lg:col-span-5 lg:pr-5"
        >
          <motion.p
            variants={COPY_ITEM_REVEAL}
            className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#4e428f] sm:text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#7767db]" />
            Retención para negocios físicos
          </motion.p>

          <motion.h1
            variants={COPY_ITEM_REVEAL}
            id="hero-title"
            className="mt-6 max-w-[650px] font-display text-[46px] font-bold leading-[0.98] tracking-[-0.052em] text-[#17151d] sm:text-[60px] lg:text-[68px]"
          >
            Hacé que tus clientes quieran volver.
          </motion.h1>

          <motion.p
            variants={COPY_ITEM_REVEAL}
            className="mt-7 max-w-[540px] text-[17px] leading-[1.65] text-[#5d5963] sm:text-lg"
          >
            Un QR en tu local convierte visitas anónimas en clientes que podés
            hacer volver. Flikker registra visitas, da motivos para regresar,
            mejora tu reputación y detecta cuando alguien deja de venir.
          </motion.p>

          <motion.div
            variants={COPY_ITEM_REVEAL}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={APP_REGISTER_URL}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2f176e] px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(47,23,110,0.18)] transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#3b2084] hover:shadow-[0_14px_36px_rgba(47,23,110,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
            >
              Quiero probar Flikker
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#solucion"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/55 px-6 text-sm font-semibold text-[#2b2830] transition-[background-color,border-color] duration-200 hover:border-black/20 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
            >
              Ver cómo funciona
              <ArrowDown
                aria-hidden="true"
                className="h-4 w-4 text-[#7767db] transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.p
            variants={COPY_ITEM_REVEAL}
            className="mt-5 text-xs leading-5 text-[#77717d]"
          >
            Sin app para descargar · QR o NFC · Listo para usar en tu local
          </motion.p>
        </motion.div>

        <motion.div
          ref={stageRef}
          style={{ y: shouldReduceMotion ? 0 : scrollOffset }}
          initial={false}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.72,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:col-span-7"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : smoothX,
              y: shouldReduceMotion ? 0 : smoothY,
            }}
            className="relative"
          >
            <Image
              src="/landing/hero-qr-stand-glow.png"
              alt="Teléfono, cappuccino y exhibidor Flikker con código QR sobre fondo negro"
              width={1536}
              height={1024}
              priority
              className="block h-auto w-full rounded-[28px] object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
