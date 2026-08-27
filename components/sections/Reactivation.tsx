"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Check, Clock3, MessageCircle } from "lucide-react";

type ReactivationPhase = 0 | 1 | 2 | 3;

export function Reactivation() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() === true;
  const [phase, setPhase] = useState<ReactivationPhase>(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextPhase: ReactivationPhase =
      progress >= 0.75 ? 3 : progress >= 0.5 ? 2 : progress >= 0.25 ? 1 : 0;
    setPhase((currentPhase) =>
      currentPhase === nextPhase ? currentPhase : nextPhase,
    );
  });

  const visiblePhase: ReactivationPhase = shouldReduceMotion ? 3 : phase;

  return (
    <section
      ref={sectionRef}
      id="reactivacion"
      aria-labelledby="reactivation-title"
      className={`relative bg-[#f4f1eb] text-[#211e24] ${
        shouldReduceMotion ? "py-24 sm:py-32" : "min-h-[220vh]"
      }`}
    >
      <div
        className={
          shouldReduceMotion
            ? "mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-6 xl:px-0"
            : "sticky top-0 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-6 xl:px-0"
        }
      >
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Seguimiento automático
          </p>
          <h2
            id="reactivation-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]"
          >
            Y si deja de venir, Flikker lo nota.
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.65] text-[#69636d] sm:text-lg">
            Flikker sigue el ritmo de visitas de cada cliente. Cuando detecta
            una caída en su frecuencia habitual, puede reactivarlo
            automáticamente por WhatsApp en el momento indicado.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[1200px] sm:mt-16">
          <DesktopTimeline phase={visiblePhase} reducedMotion={shouldReduceMotion} />
          <MobileTimeline phase={visiblePhase} reducedMotion={shouldReduceMotion} />
        </div>

        <div className="mx-auto mt-6 flex items-center gap-2" aria-hidden="true">
          {[0, 1, 2, 3].map((step) => (
            <span
              key={step}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                visiblePhase === step
                  ? "w-8 bg-[#5e46bd]"
                  : "w-1.5 bg-[#c5bec7]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopTimeline({
  phase,
  reducedMotion,
}: {
  phase: ReactivationPhase;
  reducedMotion: boolean;
}) {
  return (
    <div className="relative hidden h-[370px] origin-center scale-[1.06] lg:block">
      <div className="absolute left-[5%] right-[5%] top-[114px] h-px bg-[#cfc8cf]" />
      <div className="absolute left-[34%] top-[111px] h-[7px] w-[29%] bg-[#f4f1eb]" />
      <div className="absolute left-[35%] top-[114px] w-[27%] border-t border-dashed border-[#bdb5bf]" />

      <VisitNode left="8%" date="4 abr" label="Visita confirmada" />
      <VisitNode left="20%" date="12 abr" label="Visita confirmada" />
      <VisitNode left="32%" date="21 abr" label="Visita confirmada" />

      <div className="absolute left-[48.5%] top-[57px] -translate-x-1/2 text-center">
        <p className="text-xs font-semibold text-[#817984]">La frecuencia habitual cae</p>
        <p className="mt-1 text-[11px] text-[#a19aa3]">Flikker detecta el cambio</p>
      </div>

      <motion.div
        animate={{
          opacity: phase >= 1 ? 1 : 0,
          scale: phase >= 1 ? 1 : 0.94,
        }}
        transition={{ duration: reducedMotion ? 0 : 0.24 }}
        className="absolute left-[63%] top-[84px] -translate-x-1/2 text-center"
      >
        <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border-[6px] border-[#f4f1eb] bg-[#e6a84b] text-white shadow-[0_0_0_1px_rgba(112,86,50,0.2)]">
          <Clock3 className="h-6 w-6" aria-hidden="true" />
        </div>
        <span className="mt-3 inline-flex rounded-full bg-[#fff2dc] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a591b]">
          Frecuencia en caída
        </span>
      </motion.div>

      <motion.div
        animate={{
          opacity: phase >= 2 ? 1 : 0,
          y: phase >= 2 ? 0 : 8,
        }}
        transition={{ duration: reducedMotion ? 0 : 0.25 }}
        className="absolute left-[57%] top-[218px] w-[340px] rounded-[20px] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(38,29,45,0.09)] ring-1 ring-black/[0.05]"
      >
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#817984]">
          <MessageCircle className="h-4 w-4 text-[#25a95a]" aria-hidden="true" />
          La Stampa · WhatsApp automático
        </div>
        <p className="mt-2.5 text-[13px] leading-[1.55] text-[#4e4851]">
          Hola, María. Hace un tiempo que no te vemos. Cuando quieras, tenemos
          algo especial para vos.
        </p>
      </motion.div>

      <motion.div
        animate={{
          opacity: phase >= 3 ? 1 : 0,
          scale: phase >= 3 ? 1 : 0.94,
        }}
        transition={{ duration: reducedMotion ? 0 : 0.25 }}
        className="absolute left-[92%] top-[84px] -translate-x-1/2 text-center"
      >
        <div className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full border-[6px] border-[#f4f1eb] bg-[#397d55] text-white shadow-[0_0_0_1px_rgba(49,100,70,0.2)]">
          <Check className="h-6 w-6" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <p className="mt-3 whitespace-nowrap text-[13px] font-bold text-[#2c6845]">Volvió hoy</p>
        <p className="mt-1 whitespace-nowrap text-[11px] text-[#8d8690]">Visita confirmada</p>
      </motion.div>
    </div>
  );
}

function VisitNode({
  left,
  date,
  label,
}: {
  left: string;
  date: string;
  label: string;
}) {
  return (
    <div className="absolute top-[90px] -translate-x-1/2 text-center" style={{ left }}>
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#f4f1eb] bg-[#5f49b9] text-white shadow-[0_0_0_1px_rgba(75,58,137,0.18)]">
        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <p className="mt-3 text-xs font-bold text-[#4e4852]">{date}</p>
      <p className="mt-1 whitespace-nowrap text-[10px] text-[#918a94]">{label}</p>
    </div>
  );
}

function MobileTimeline({
  phase,
  reducedMotion,
}: {
  phase: ReactivationPhase;
  reducedMotion: boolean;
}) {
  return (
    <div className="relative mx-auto max-w-[390px] pl-12 lg:hidden">
      <div className="absolute bottom-5 left-[18px] top-5 w-px bg-[#cbc4cc]" />

      <MobileVisit date="4 abr" />
      <MobileVisit date="12 abr" />
      <MobileVisit date="21 abr" />

      <div className="relative py-7">
        <div className="absolute -left-[30px] top-0 h-full border-l border-dashed border-[#b9b1bb]" />
        <p className="text-xs font-semibold text-[#6f6873]">La frecuencia habitual cae</p>
        <p className="mt-1 text-[10px] text-[#99929c]">Flikker detecta el cambio</p>
      </div>

      <motion.div
        animate={{ opacity: phase >= 1 ? 1 : 0, x: phase >= 1 ? 0 : -6 }}
        transition={{ duration: reducedMotion ? 0 : 0.22 }}
        className="relative py-3"
      >
        <div className="absolute -left-[43px] top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#e6a84b] text-white ring-4 ring-[#f4f1eb]">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
        <span className="inline-flex rounded-full bg-[#fff2dc] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8a591b]">
          Frecuencia en caída
        </span>
      </motion.div>

      <motion.div
        animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 7 }}
        transition={{ duration: reducedMotion ? 0 : 0.24 }}
        className="my-3 rounded-[17px] bg-white px-4 py-3 shadow-[0_10px_28px_rgba(38,29,45,0.08)] ring-1 ring-black/[0.05]"
      >
        <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#817984]">
          <MessageCircle className="h-3 w-3 text-[#25a95a]" aria-hidden="true" />
          La Stampa · WhatsApp automático
        </div>
        <p className="mt-2 text-[11px] leading-[1.5] text-[#4e4851]">
          Hola, María. Hace un tiempo que no te vemos. Cuando quieras, tenemos
          algo especial para vos.
        </p>
      </motion.div>

      <motion.div
        animate={{ opacity: phase >= 3 ? 1 : 0, x: phase >= 3 ? 0 : -6 }}
        transition={{ duration: reducedMotion ? 0 : 0.24 }}
        className="relative mt-4 py-3"
      >
        <div className="absolute -left-[43px] top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#397d55] text-white ring-4 ring-[#f4f1eb]">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <p className="text-sm font-bold text-[#2c6845]">Volvió hoy</p>
        <p className="mt-1 text-[10px] text-[#8d8690]">Visita confirmada</p>
      </motion.div>
    </div>
  );
}

function MobileVisit({ date }: { date: string }) {
  return (
    <div className="relative py-2.5">
      <div className="absolute -left-[41px] top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#5f49b9] text-white ring-4 ring-[#f4f1eb]">
        <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
      </div>
      <p className="text-xs font-bold text-[#4e4852]">{date}</p>
      <p className="mt-0.5 text-[9px] text-[#918a94]">Visita confirmada</p>
    </div>
  );
}
