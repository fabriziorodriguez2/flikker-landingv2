"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  ShieldCheck,
  Star,
  BarChart3,
  LayoutGrid,
  RefreshCw,
  Clock,
  TrendingUp,
  QrCode,
  Users,
  type LucideIcon,
} from "lucide-react";

function FlikkerIsotype({ className }: { className?: string }) {
  return (
    <svg viewBox="197.18 0 516.34 402.57" aria-hidden="true" className={className}>
      <polygon fill="#9188f5" points="366.82 200.96 411.51 149.16 370.5 101.62 197.18 302.58 283.4 402.57 370.5 301.6 457.6 402.57 543.88 302.58 497.76 249.13 453.05 300.95 366.82 200.96" />
      <polygon fill="#9188f5" points="627.29 300.95 713.52 200.96 540.17 0 411.51 149.16 497.76 249.13 540.17 199.96 627.29 300.95" />
    </svg>
  );
}

function UserIcon({ bg, color }: { bg: string; color: string }) {
  return (
    <div
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
      style={{ background: bg }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.2" fill={color} />
        <path d="M4.5 20c0-3.6 3.36-6.5 7.5-6.5s7.5 2.9 7.5 6.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-[#fbbc04] text-[#fbbc04]" strokeWidth={1.5} />
      ))}
    </div>
  );
}

const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MessageCircle,
    title: "Mensajes automáticos por WhatsApp",
    body: "Después de cada compra o visita, Flikker le escribe al cliente con tu marca. Sin que vos hagas nada.",
  },
  {
    icon: ShieldCheck,
    title: "Filtro inteligente de reseñas",
    body: "Las experiencias buenas van directo a Google. Las malas te llegan a vos primero, en privado, para que puedas resolverlo.",
  },
  {
    icon: Star,
    title: "Más estrellas, más visibilidad",
    body: "Más reseñas reales mejoran tu posición en Google Maps y en búsquedas locales. Tus clientes te encuentran antes que a la competencia.",
  },
  {
    icon: BarChart3,
    title: "Panel de control en tiempo real",
    body: "Ves todas tus reseñas, la evolución de tu calificación y qué clientes respondieron, todo desde un solo lugar.",
  },
  {
    icon: QrCode,
    title: "QR de captación en tu local",
    body: "Poné el QR en tu sala de espera o mostrador. Cada cliente que lo escanea deja su contacto y queda en tu base, listo para recibir reseñas y campañas.",
  },
  {
    icon: Users,
    title: "Base de contactos propia",
    body: "Cada cliente que pasa por Flikker queda guardado con nombre y teléfono. Es tuyo para siempre, para promociones, recordatorios o lo que necesites.",
  },
];

const reactivationBenefits: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Clock,
    title: "Detecta clientes inactivos",
    body: "Flikker identifica automáticamente quiénes no volvieron en 30, 60 o 90 días.",
  },
  {
    icon: MessageCircle,
    title: "Les escribe por WhatsApp",
    body: "Les manda un mensaje con tu marca en el momento justo. Sin que vos hagas nada.",
  },
  {
    icon: TrendingUp,
    title: "Más visitas, más ingresos",
    body: "Recuperar un cliente existente cuesta hasta 5× menos que conseguir uno nuevo.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function ReviewEmbedWidget() {
  const reviews = [
    { bg: "#ede9fe", color: "#7c3aed", name: "María G.", text: "Excelente atención, vuelvo siempre." },
    { bg: "#ddd6fe", color: "#5b21b6", name: "Carlos R.", text: "Muy profesionales y rápidos." },
    { bg: "#ede9fe", color: "#7c3aed", name: "Ana P.", text: "Todo perfecto, lo recomiendo." },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 48 48" className="h-4 w-4 shrink-0" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8a12 12 0 1 1 7.9-21l5.7-5.7A20 20 0 1 0 44 24c0-1.2-.1-2.4-.4-3.5Z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.2 7.9 3L37.6 9A20 20 0 0 0 6.3 14.7Z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28l-6.6 5C9.5 39.6 16.2 44 24 44Z" />
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 40.3 44 35 44 24c0-1.2-.1-2.4-.4-3.5Z" />
          </svg>
          <span className="text-[12px] font-semibold text-neutral-800">Reseñas de Google</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] font-bold text-neutral-800">4.9</span>
          <StarRow />
        </div>
      </div>

      <div className="divide-y divide-neutral-100">
        {reviews.map(({ bg, color, name, text }) => (
          <div key={name} className="flex items-start gap-3 px-4 py-3">
            <UserIcon bg={bg} color={color} />
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-neutral-800">{name}</p>
              <StarRow />
              <p className="mt-0.5 truncate text-[11px] text-neutral-500">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end gap-1.5 border-t border-neutral-100 px-4 py-2">
        <FlikkerIsotype className="h-3 w-auto" />
        <span className="text-[10px] text-neutral-400">Powered by Flikker</span>
      </div>
    </div>
  );
}

function NotificationToasts() {
  const toasts = [
    { name: "Florencia M.", stars: 5, time: "hace 2 min" },
    { name: "Diego R.", stars: 5, time: "hace 1 hora" },
  ];

  return (
    <div className="space-y-3">
      {toasts.map(({ name, stars, time }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          className="flex items-start gap-3 rounded-2xl border border-[#ede9fe] bg-[#f5f3ff] px-4 py-3.5 shadow-sm"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7c3aed]">
            <Star className="h-5 w-5 fill-white" strokeWidth={0} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold leading-[1.3] text-neutral-900">
              {name} nos dejó {stars} estrellas
            </p>
            <StarRow count={stars} />
            <div className="mt-1 flex items-center gap-1">
              <FlikkerIsotype className="h-2.5 w-auto" />
              <span className="text-[10px] text-neutral-400">{time} · Powered by Flikker</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function Solution() {
  const shouldReduceMotion = useReducedMotion();
  const initial = shouldReduceMotion ? false : "hidden";

  return (
    <section
      id="solucion"
      className="scroll-mt-20 bg-[#f4f4f6] px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Qué es Flikker
          </span>
          <h2 className="font-display mt-4 text-[36px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[52px]">
            La plataforma de reputación local para negocios.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.7] text-neutral-500 md:text-lg">
            Flikker automatiza la captación de reseñas en Google, la
            reactivación de clientes inactivos y la prueba social en tu sitio
            web.{" "}
            <strong className="font-semibold text-neutral-800">
              Convertimos cada venta en una reseña, y cada reseña en clientes
              nuevos.
            </strong>{" "}
            Llevamos infraestructura de nivel enterprise a negocios que recién
            están construyendo su marca.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "#ede9fe" }}
              >
                <Icon
                  className="h-6 w-6"
                  style={{ color: "#7c3aed" }}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-[15px] font-bold leading-snug text-neutral-900">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-neutral-500">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Widget showcase */}
        <motion.div
          initial={initial}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {/* Social proof card — review embed + notification toasts */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "#ede9fe" }}
            >
              <LayoutGrid className="h-6 w-6" style={{ color: "#7c3aed" }} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-[17px] font-bold leading-snug text-neutral-900">
              Widget de prueba social
            </h3>
            <p className="mt-2 text-[13px] leading-[1.65] text-neutral-500">
              Mostrá tus reseñas de Google en tu web y notificá a cada visita en
              tiempo real cuando alguien deja una nueva estrella.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ReviewEmbedWidget />
              <NotificationToasts />
            </div>
          </motion.div>

          {/* Reactivation card — one mini-card per benefit */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-200"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "#ede9fe" }}
            >
              <RefreshCw className="h-6 w-6" style={{ color: "#7c3aed" }} strokeWidth={1.75} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-[17px] font-bold leading-snug text-neutral-900">
              Campanas de reactivación
            </h3>
            <p className="mt-2 text-[13px] leading-[1.65] text-neutral-500">
              Recuperá clientes que no vuelven. Flikker les escribe solo, en el
              momento justo, con tu marca.
            </p>
            <div className="mt-6 space-y-3">
              {reactivationBenefits.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-neutral-100 bg-[#f9f9fb] px-4 py-4"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "#ede9fe" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#7c3aed" }} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">{title}</p>
                    <p className="mt-0.5 text-[12px] leading-[1.6] text-neutral-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
