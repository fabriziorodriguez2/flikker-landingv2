"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw } from "lucide-react";

/* ── WhatsApp icon ── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        fill="#fff"
        d="M24 8C15.2 8 8 15.2 8 24c0 2.8.7 5.5 2.1 7.9L8 40l8.3-2.1C18.5 39.3 21.2 40 24 40c8.8 0 16-7.2 16-16S32.8 8 24 8zm7.9 21.9c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.4.1-2.3-.1-.5-.2-1.2-.4-2-.8-3.6-1.5-5.9-5.1-6.1-5.3-.2-.3-1.5-2-1.5-3.8 0-1.8.9-2.7 1.3-3.1.3-.3.7-.5 1.1-.5.1 0 .3 0 .4.01.4.01.6.02.9.7.3.7 1 2.4 1.1 2.6.1.2.2.4.01.7-.1.3-.2.4-.4.6-.2.2-.4.4-.5.5-.2.2-.4.4-.2.7.2.3 1 1.7 2.2 2.7 1.5 1.3 2.7 1.7 3.1 1.9.3.1.7.1.9-.1.3-.3.6-.8.9-1.2.2-.3.5-.3.8-.2.3.1 1.9.9 2.2 1.1.3.2.5.3.6.4.1.4-.1 1.5-.4 2.3z"
      />
    </svg>
  );
}

/* ── Notification card ── */
type Notif = {
  business: string;
  message: string;
  time: string;
  color: string;
};

function NotifCard({ notif, delay }: { notif: Notif; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-3 rounded-2xl px-4 py-3.5"
      style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)" }}
    >
      {/* App icon */}
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white text-[11px] font-black"
        style={{ background: notif.color }}
      >
        <WhatsAppIcon className="h-9 w-9 rounded-xl" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold text-white/70">WhatsApp</span>
          <span className="shrink-0 text-[10px] text-white/40">{notif.time}</span>
        </div>
        <p className="mt-0.5 text-[13px] font-semibold leading-snug text-white">
          {notif.business}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-white/65">
          {notif.message}
        </p>
      </div>
    </motion.div>
  );
}

const NOTIFS: Notif[] = [
  {
    business: "Flikker",
    message: "Hola Sofía 👋 Hace un tiempo que no te vemos. ¿Volvés esta semana? Tenemos turno disponible 💜",
    time: "ahora",
    color: "#25D366",
  },
  {
    business: "Flikker",
    message: "Hola Martín! Extrañamos verte por aquí ☕ Esta semana tenés un 10% off solo por volver.",
    time: "1 min",
    color: "#25D366",
  },
  {
    business: "Flikker",
    message: "Hola Laura 💪 Hace 45 días que no venís. ¿Retomamos? Agendá tu clase gratuita de reactivación.",
    time: "3 min",
    color: "#25D366",
  },
];

/* ── Lock screen ── */
function LockScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShow(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const mins = String(now.getMinutes()).padStart(2, "0");
  const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  const dateStr = `${days[now.getDay()]}, ${now.getDate()} de ${months[now.getMonth()]}`;

  return (
    <div
      className="flex h-full flex-col px-4 pb-6 pt-10"
      style={{
        background: "linear-gradient(160deg, #1a0f3c 0%, #0d0828 40%, #07060f 100%)",
      }}
    >
      {/* Status bar */}
      <div className="flex items-center justify-between px-1 text-[10px] font-semibold text-white">
        <span>{hours}:{mins}</span>
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </div>
      </div>

      {/* Time */}
      <div className="mt-4 text-center">
        <p className="font-display text-[52px] font-black leading-none tracking-tight text-white">
          {hours}:{mins}
        </p>
        <p className="mt-1 text-[12px] text-white/55">{dateStr}</p>
      </div>

      {/* Notifications */}
      <div className="mt-6 space-y-2.5">
        <AnimatePresence>
          {show &&
            NOTIFS.map((n, i) => (
              <NotifCard key={n.business} notif={n} delay={i * 0.22} />
            ))}
        </AnimatePresence>
      </div>

      {/* Home indicator */}
      <div className="mt-auto flex justify-center pt-4">
        <div className="h-1 w-24 rounded-full bg-white/30" />
      </div>
    </div>
  );
}

/* ── Phone frame (same as Hero) ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative rounded-[38px] bg-[#1c1c1e]"
      style={{
        padding: "9px",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.5), 0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div className="absolute left-1/2 top-[11px] z-10 h-[18px] w-[56px] -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
      <div className="absolute -left-[3px] top-[78px] h-[30px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      <div className="absolute -left-[3px] top-[118px] h-[52px] w-[3px] rounded-l-sm bg-[#2a2a2c]" />
      <div className="absolute -right-[3px] top-[96px] h-[64px] w-[3px] rounded-r-sm bg-[#2a2a2c]" />
      <div className="overflow-hidden rounded-[30px]" style={{ aspectRatio: "9 / 19.5" }}>
        {children}
      </div>
    </div>
  );
}

/* ── Section ── */
export function Reactivation() {
  return (
    <section className="px-6 py-24 md:px-8 md:py-32" style={{ background: "#07060f" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* Left — copy */}
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Campanas de reactivación
          </span>
          <h2 className="font-display mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.03em] text-white md:text-[52px]">
            Recuperá clientes que{" "}
            <span className="text-periwinkle">ya no vuelven.</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-[1.65] text-white/55 md:text-lg">
            Sin llamadas. Sin recordatorios manuales. Flikker detecta cuando un
            cliente no regresa y le escribe por WhatsApp en el momento justo —
            con tu nombre, tu tono, tu oferta.
          </p>

          {/* Benefits */}
          <div className="mt-10 space-y-4">
            {[
              { title: "Automático al 100%", body: "Definís el tiempo de inactividad (30, 60, 90 días) y Flikker hace el resto." },
              { title: "Mensaje con tu voz", body: "No es un bot genérico. Es tu negocio escribiéndole a tu cliente." },
              { title: "Sin lista manual", body: "Flikker identifica quién no volvió y a quién escribirle. Vos no hacés nada." },
            ].map(({ title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-periwinkle/20">
                  <RefreshCw className="h-3 w-3 text-periwinkle" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-[13px] leading-[1.6] text-white/50">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — phone */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-[260px] md:w-[300px]">
            <PhoneFrame>
              <LockScreen />
            </PhoneFrame>
          </div>
        </div>

      </div>
    </section>
  );
}
