"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar, Star } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES, CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SCREEN_DURATIONS_MS = [5000, 2000, 3000, 3000, 2000];

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-28 md:grid-cols-2 md:gap-4 md:px-8 md:pb-24 md:pt-28 lg:pb-28 lg:pt-32">
        <HeroText />
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroText() {
  return (
    <div className="max-w-xl">
      <span className="inline-flex items-center rounded-full border border-neutral-200 px-3.5 py-1 text-xs font-medium text-neutral-500">
        Dejá de pedir reseñas a mano
      </span>

      <h1 className="mt-6 font-display text-[44px] font-black leading-[1.05] tracking-[-0.03em] text-neutral-900 md:text-[54px] lg:text-[60px]">
        Tenés clientes felices.{" "}
        <span className="text-periwinkle">Google no lo está mostrando.</span>
      </h1>

      <p className="mt-5 text-lg leading-[1.6] text-neutral-500">
        Flikker pide reseñas por WhatsApp después de cada compra, visita o
        servicio. Las buenas llegan a Google. Las malas te avisan primero a vos.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={buildWhatsAppUrl(WHATSAPP_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-periwinkle px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90"
        >
          Probar gratis
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
        >
          <Calendar className="h-4 w-4 text-neutral-400" />
          Agendar demo
        </a>
      </div>

      <p className="mt-5 text-xs text-neutral-400">
        Sin descargar app · Sin conocimiento técnico · Compatible con iPhone y Android
      </p>
    </div>
  );
}

function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("relative rounded-[38px] bg-[#1c1c1e]", className)}
      style={{
        padding: "9px",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.28), 0 8px 20px rgba(0,0,0,0.18)",
      }}
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-[11px] z-10 h-[18px] w-[56px] -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
      {/* Left buttons */}
      <div className="absolute -left-[3px] top-[78px] h-[30px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      <div className="absolute -left-[3px] top-[118px] h-[52px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      {/* Right button */}
      <div className="absolute -right-[3px] top-[96px] h-[64px] w-[3px] rounded-r-sm bg-[#2a2a2c]" />
      {/* Screen */}
      <div
        className="overflow-hidden rounded-[30px] bg-white"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {children}
      </div>
    </div>
  );
}

function UserIcon({ bg, color }: { bg: string; color: string }) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
      style={{ background: bg }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" fill={color} />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ReviewToast({
  name,
  text,
  time,
  bg,
  color,
  style,
  floatDelay = 0,
}: {
  name: string;
  text: string;
  time: string;
  bg: string;
  color: string;
  style?: React.CSSProperties;
  floatDelay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute flex cursor-default items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5"
      style={{
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
        minWidth: 200,
        maxWidth: 230,
        ...style,
      }}
      animate={
        shouldReduceMotion
          ? {}
          : { y: [0, -8, 0] }
      }
      transition={{
        duration: 3.5,
        delay: floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -14,
        scale: 1.05,
        boxShadow: "0 16px 48px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.08)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <UserIcon bg={bg} color={color} />
      <div className="min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-[11px] font-semibold text-neutral-800">{name}</span>
          <span className="shrink-0 text-[10px] text-neutral-400">{time}</span>
        </div>
        <div className="mt-0.5 flex gap-px">
          {[0,1,2,3,4].map(i => (
            <Star key={i} className="h-2.5 w-2.5 fill-[#fbbc04] text-[#fbbc04]" />
          ))}
        </div>
        <p className="mt-0.5 truncate text-[10px] text-neutral-500">{text}</p>
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative hidden md:flex md:items-center md:justify-center">
      <div className="relative" style={{ width: 520, height: 580 }}>

        {/* Floating review toasts */}
        <ReviewToast
          name="María García"
          text="¡Excelente atención, vuelvo siempre!"
          time="ahora"
          bg="#ede9fe"
          color="#7c3aed"
          style={{ top: 0, right: -10, zIndex: 10 }}
          floatDelay={0}
        />
        <ReviewToast
          name="Carlos Rodríguez"
          text="Muy profesionales y rápidos."
          time="2 min"
          bg="#ddd6fe"
          color="#5b21b6"
          style={{ bottom: 60, left: -10, zIndex: 10 }}
          floatDelay={1.2}
        />
        <ReviewToast
          name="Ana Pérez"
          text="Todo perfecto, los recomiendo."
          time="5 min"
          bg="#fef3c7"
          color="#d97706"
          style={{ bottom: 160, right: -20, zIndex: 10 }}
          floatDelay={2.4}
        />

        {/* Left phone — animated screens */}
        <div
          className="absolute"
          style={{
            left: 10,
            top: "8%",
            width: 236,
            transform: "rotate(-8deg)",
            transformOrigin: "center center",
            zIndex: 2,
          }}
        >
          <PhoneFrame>
            <AnimatedScreens />
          </PhoneFrame>
        </div>

        {/* Right phone — reviews dashboard */}
        <div
          className="absolute"
          style={{
            right: 10,
            top: "4%",
            width: 236,
            transform: "rotate(6deg)",
            transformOrigin: "center center",
            zIndex: 1,
          }}
        >
          <PhoneFrame>
            <ReviewsScreen />
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}

/* ── Pantallas animadas ── */

function AnimatedScreens() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SCREEN_DURATIONS_MS.length),
      SCREEN_DURATIONS_MS[index]
    );
    return () => window.clearTimeout(id);
  }, [index, shouldReduceMotion]);

  const screens = useMemo(
    () => [
      <WhatsAppScreen key="wa" />,
      <ReviewRatingScreen key="rating" />,
      <ThankYouScreen key="thanks" />,
      <GoogleReviewsScreen key="google" />,
      <CounterScreen key="counter" />,
    ],
    []
  );

  const active = shouldReduceMotion ? 0 : index;

  return (
    <div className="relative h-full w-full bg-white">
      <AnimatePresence initial={false}>
        <motion.div
          key={active}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {screens[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Panel de reseñas ── */

const REVIEWS = [
  { name: "María G.", stars: 5, time: "hace 1 día", text: "Excelente atención, vuelvo siempre." },
  { name: "Carlos R.", stars: 5, time: "hace 3 días", text: "Muy profesionales y rápidos." },
  { name: "Ana P.", stars: 4, time: "hace 1 sem.", text: "Muy buena experiencia general." },
  { name: "Juan L.", stars: 5, time: "hace 2 sem.", text: "Lo recomiendo sin dudarlo." },
];

function ReviewsScreen() {
  return (
    <div className="flex h-full flex-col bg-white px-3 pb-3 pt-8">
      <div className="flex items-center gap-2 border-b border-neutral-100 pb-2.5">
        <GoogleG className="h-5 w-5" />
        <div>
          <p className="text-[11px] font-bold text-neutral-800">Reseñas de Google</p>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-neutral-700">4.9</span>
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
              ))}
            </div>
            <span className="text-[9px] text-neutral-400">(48)</span>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden pt-2.5">
        {REVIEWS.map(({ name, stars, time, text }) => (
          <div key={name} className="flex gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-periwinkle/15 text-[10px] font-semibold text-periwinkle">
              {name[0]}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-neutral-800">{name}</span>
                <span className="text-[9px] text-neutral-400">{time}</span>
              </div>
              <div className="flex gap-px">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <p className="mt-0.5 text-[9px] leading-snug text-neutral-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Screens individuales ── */

function WhatsAppScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#ece5dd]">
      <div className="flex items-center gap-2.5 bg-[#128c7e] px-3 pb-2.5 pt-3 text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
          <Logo variant="isotype" className="h-4 w-auto" />
        </div>
        <div className="leading-tight">
          <p className="text-[11px] font-semibold">Flikker</p>
          <p className="text-[9px] text-white/80">en línea</p>
        </div>
      </div>
      <div className="flex-1 space-y-2 px-2.5 py-3">
        {[
          { delay: 0.1, text: "Hola María 👋 Gracias por comprar hoy en Gains.", right: false },
          { delay: 0.45, text: "¿Nos ayudás contándonos cómo fue tu experiencia? Son 30 segundos.", right: false },
          { delay: 0.85, text: "flikker.app/r/gains", right: false, green: true },
          { delay: 1.6, text: "¡Genial! Todo llegó perfecto 😊", right: true },
          { delay: 2.3, text: "Ya les dejé la reseña ⭐️⭐️⭐️⭐️⭐️", right: true },
        ].map(({ delay, text, right, green }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay }}
            className={cn(
              "max-w-[85%] rounded-lg px-2.5 py-2 text-[10px] leading-snug shadow-sm",
              right ? "ml-auto rounded-tr-sm bg-[#dcf8c6] text-zinc-800" : "rounded-tl-sm bg-white text-zinc-800",
              green && "font-semibold text-[#128c7e]"
            )}
          >
            {text}
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 border-t border-black/5 bg-white px-2 py-1.5">
        <div className="h-6 flex-1 rounded-full bg-zinc-100" />
        <div className="h-6 w-6 rounded-full bg-[#128c7e]" />
      </div>
    </div>
  );
}

function ReviewRatingScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center">
      <Logo variant="default" className="h-14 w-auto" />
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-periwinkle">Gains</p>
      <h3 className="mt-2 font-display text-[15px] font-bold leading-tight text-midnight">
        ¿Cómo estuvo tu experiencia?
      </h3>
      <div className="mt-5 flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div key={i} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 + i * 0.08, duration: 0.2 }}>
            <Star className="h-6 w-6 fill-apricot text-apricot" />
          </motion.div>
        ))}
      </div>
      <p className="mt-4 text-[9px] text-midnight/50">Tocá para calificar</p>
    </div>
  );
}

function ThankYouScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-periwinkle/15"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="var(--color-periwinkle)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <h3 className="mt-4 font-display text-[15px] font-bold leading-tight text-midnight">¡Gracias, María!</h3>
      <p className="mt-2 text-[10px] leading-snug text-midnight/70">¿Nos ayudás dejándola también en Google?</p>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.2 }}
        className="mt-4 flex items-center gap-1.5 rounded-full bg-midnight px-3.5 py-2 text-[10px] font-semibold text-mist"
      >
        <GoogleG className="h-3 w-3" />
        <span>Dejar reseña en Google</span>
      </motion.div>
    </div>
  );
}

function GoogleReviewsScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-white pt-4">
      <div className="flex items-center justify-between px-3 pb-2">
        <div className="flex items-center gap-1.5">
          <GoogleG className="h-4 w-4" />
          <span className="text-[10px] font-semibold text-midnight">Gains</span>
        </div>
        <span className="text-[9px] text-midnight/50">Reseña</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-periwinkle/20 text-[11px] font-semibold text-periwinkle">M</div>
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div key={i} initial={{ opacity: 0.25 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.25 }}>
              <Star className="h-5 w-5 fill-[#fbbc04] text-[#fbbc04]" />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="rounded-full bg-[#1a73e8] px-3 py-1.5 text-[10px] font-semibold text-white"
        >
          Publicar
        </motion.div>
      </div>
    </div>
  );
}

function CounterScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center">
      <div className="flex items-center gap-1.5">
        <GoogleG className="h-3.5 w-3.5" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-midnight/60">Reseñas de Google</span>
      </div>
      <span className="mt-4 font-display text-5xl font-bold text-midnight">51</span>
      <span className="mt-3 rounded-full bg-periwinkle/15 px-2.5 py-1 text-[9px] font-semibold text-periwinkle">+1 nueva</span>
      <div className="mt-4 flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-[#fbbc04] text-[#fbbc04]" />
        ))}
        <span className="ml-1 text-[10px] font-semibold text-midnight">5.0</span>
      </div>
    </div>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={cn("h-4 w-4", className)}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3L37.6 9A20 20 0 0 0 6.3 14.7Z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.6 5C9.5 39.6 16.2 44 24 44Z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 40.3 44 35 44 24c0-1.2-.1-2.4-.4-3.5Z" />
    </svg>
  );
}
