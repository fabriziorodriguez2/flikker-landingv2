"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Gift,
  LayoutDashboard,
  MessageCircle,
  QrCode,
  Smartphone,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { APP_REGISTER_URL, CALENDLY_URL, buildWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   STICKY SECONDARY NAV
───────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: "intro", label: "Introducción" },
  { id: "por-mi-cuenta", label: "Por mi cuenta" },
  { id: "con-asistencia", label: "Con asistencia" },
  { id: "tu-cliente", label: "Tu cliente" },
  { id: "faq-ce", label: "Preguntas" },
];

function StickySecondaryNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 520);
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-[68px] z-30 px-4 transition-all duration-300",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="mx-auto max-w-5xl">
        <div className="w-fit max-w-full rounded-b-[26px] border-x border-b border-neutral-200/80 bg-white/95 px-4 pb-2 pt-4 shadow-[0_7px_12px_rgba(23,21,29,0.08)] backdrop-blur-md sm:px-6">
          <nav
            aria-label="Navegación de sección"
            className="flex max-w-full items-center gap-1 overflow-x-auto scrollbar-none"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "shrink-0 rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all",
                  active === item.id
                    ? "bg-[#7767db]/10 text-[#7767db]"
                    : "text-neutral-500 hover:text-neutral-700"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STEP COMPONENTS
───────────────────────────────────────────── */

interface StepProps {
  n: string;
  title: string;
  children: React.ReactNode;
  visual: React.ReactNode;
  flip?: boolean;
  result?: string;
}

function Step({ n, title, children, visual, flip = false, result }: StepProps) {
  return (
    <div className="relative py-16 lg:py-20">
      {/* Decorative large number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-8 select-none text-[120px] font-black leading-none text-[#f0eeff] lg:text-[160px]"
      >
        {n}
      </span>

      <div
        className={cn(
          "relative flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16",
          flip && "lg:flex-row-reverse"
        )}
      >
        {/* Text side */}
        <div className="lg:w-[46%]">
          <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7767db] text-[12px] font-bold text-white">
            {n}
          </div>
          <h3 className="font-display text-[26px] font-bold leading-[1.15] tracking-[-0.025em] text-[#17151d] lg:text-[30px]">
            {title}
          </h3>
          <div className="mt-4 space-y-3 text-[15px] leading-[1.7] text-[#5d5963]">
            {children}
          </div>
          {result && (
            <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-[#d4cef0] bg-[#f8f6ff] p-4">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7767db]">
                <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-[13px] font-semibold text-[#4a3fa0]">{result}</p>
            </div>
          )}
        </div>

        {/* Visual side */}
        <div className="lg:w-[54%]">{visual}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL MOCKUPS
───────────────────────────────────────────── */

function MockupCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-3xl border border-[#eae5df] bg-white shadow-[0_8px_48px_rgba(0,0,0,0.08)]", className)}>
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-[#f0eeed] bg-[#f7f6f2] px-4 py-3">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffd93d]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#6bcb77]" />
        <div className="ml-3 h-4 w-40 rounded-full bg-[#e4e0d8]" />
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

function VisualRegistro() {
  return (
    <MockupCard>
      <p className="mb-4 text-[13px] font-bold text-[#17151d]">Crear tu espacio en Flikker</p>
      {[
        { label: "Nombre del negocio", val: "La Stampa" },
        { label: "Categoría", val: "Cafetería" },
        { label: "Dirección", val: "Av. 18 de Julio 1256" },
      ].map((f) => (
        <div key={f.label} className="mb-3">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#9691a0]">{f.label}</p>
          <div className="flex h-9 items-center rounded-xl border border-[#eae5df] bg-[#fafafa] px-3 text-[13px] text-[#17151d]">
            {f.val}
          </div>
        </div>
      ))}
      <div className="mt-4 mb-3">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#9691a0]">Logo</p>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-dashed border-[#d4cef0] bg-[#f8f6ff]">
          <span className="text-[22px]">☕</span>
        </div>
      </div>
      <button className="mt-4 w-full rounded-xl bg-[#7767db] py-2.5 text-[13px] font-bold text-white">
        Crear espacio →
      </button>
    </MockupCard>
  );
}

function VisualObjetivos() {
  const goals = [
    { icon: "🔁", label: "Aumentar frecuencia de visitas", active: true },
    { icon: "👥", label: "Conseguir más clientes recurrentes", active: false },
    { icon: "⭐", label: "Premiar clientes frecuentes", active: false },
    { icon: "📩", label: "Recuperar clientes que dejaron de ir", active: false },
  ];
  return (
    <MockupCard>
      <p className="mb-1 text-[13px] font-bold text-[#17151d]">¿Qué querés lograr?</p>
      <p className="mb-4 text-[12px] text-[#9691a0]">Podés elegir uno o varios</p>
      <div className="space-y-2.5">
        {goals.map((g) => (
          <div
            key={g.label}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-2xl border p-3 text-[13px] transition-all",
              g.active
                ? "border-[#7767db] bg-[#f8f6ff] text-[#4a3fa0] font-semibold"
                : "border-[#eae5df] text-[#5d5963] hover:border-[#c4bcf0]"
            )}
          >
            <span className="text-lg">{g.icon}</span>
            {g.label}
            {g.active && (
              <div className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#7767db]">
                <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </MockupCard>
  );
}

function VisualBeneficios() {
  const beneficios = [
    { visitas: 5, premio: "☕ Café gratis", color: "#f0eeff" },
    { visitas: 8, premio: "💰 20% de descuento", color: "#fef9ee" },
    { visitas: 10, premio: "🎁 Producto de regalo", color: "#f0fdf4" },
  ];
  return (
    <div className="space-y-3">
      {beneficios.map((b) => (
        <div
          key={b.visitas}
          className="flex items-center gap-4 rounded-2xl border border-[#eae5df] bg-white p-4 shadow-sm"
        >
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl"
            style={{ background: b.color }}
          >
            {b.premio.split(" ")[0]}
          </div>
          <div>
            <p className="text-[13px] font-bold text-[#17151d]">
              {b.visitas} visitas
            </p>
            <p className="text-[12px] text-[#5d5963]">
              {b.premio.split(" ").slice(1).join(" ")}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 w-2 rounded-full",
                  i < 3 ? "bg-[#7767db]" : "bg-[#e8e3f8]"
                )}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-2xl border-2 border-dashed border-[#d4cef0] p-4 text-[13px] text-[#9691a0]">
        <span className="text-lg">＋</span>
        Agregar otro beneficio
      </div>
    </div>
  );
}

function VisualDesafios() {
  const desafios = [
    { icon: "🗓", title: "Visitá 3 veces este mes", sub: "Activo · 14 días restantes" },
    { icon: "⚡", title: "Volvé antes de 7 días", sub: "Recurrencia rápida" },
    { icon: "🏆", title: "Completá 5 visitas seguidas", sub: "Desafío de fidelidad" },
  ];
  return (
    <div className="space-y-3">
      {desafios.map((d) => (
        <div key={d.title} className="flex items-center gap-4 rounded-2xl border border-[#eae5df] bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0eeff] text-xl">
            {d.icon}
          </div>
          <div>
            <p className="text-[13px] font-bold text-[#17151d]">{d.title}</p>
            <p className="text-[11px] text-[#9691a0]">{d.sub}</p>
          </div>
          <div className="ml-auto h-5 w-5 rounded-full border-2 border-[#d4cef0]" />
        </div>
      ))}
    </div>
  );
}

function VisualPersonalizacion() {
  return (
    <div className="flex justify-center">
      {/* Phone */}
      <div className="relative h-[420px] w-[220px] rounded-[40px] border-[6px] border-[#17151d] bg-white shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-[#17151d]" />
        {/* Screen */}
        <div className="mt-8 overflow-hidden rounded-[32px]">
          <div className="h-28 bg-gradient-to-br from-[#3d0fa8] to-[#9b3ff5] px-4 pt-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 text-lg">☕</div>
              <div>
                <p className="text-[11px] font-bold text-white">La Stampa</p>
                <p className="text-[9px] text-white/60">Cafetería · Pocitos</p>
              </div>
            </div>
            <p className="mt-2 text-[9px] text-white/80">¡Hola! Registrá tu visita y empezá a desbloquear beneficios.</p>
          </div>
          <div className="bg-white p-4">
            <p className="mb-2 text-[10px] font-semibold text-[#9691a0]">TU PROGRESO</p>
            <div className="mb-3 flex gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-6 w-6 rounded-full text-[9px] font-bold flex items-center justify-center",
                    i < 3 ? "bg-[#7767db] text-white" : "border-2 border-dashed border-[#e0dbf5] text-[#d0c8f0]"
                  )}
                >
                  {i < 3 ? "✓" : (i + 1)}
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-[#f8f6ff] p-2.5">
              <p className="text-[10px] font-bold text-[#4a3fa0]">Próximo beneficio</p>
              <p className="text-[9px] text-[#7767db]">2 visitas para tu café gratis ☕</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualQR() {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-8">
      {/* QR mockup */}
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-2xl border border-[#eae5df] bg-white p-5 shadow-sm">
          <div className="mb-3 text-center">
            <div className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-lg bg-[#7767db] text-[14px]">☕</div>
            <p className="text-[10px] font-bold text-[#17151d]">La Stampa</p>
          </div>
          {/* QR grid */}
          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: 49 }).map((_, i) => {
              const isCorner =
                (i < 7 && i % 7 < 3 && Math.floor(i / 7) < 3) ||
                (i >= 28 && i < 35 && i % 7 < 3 && Math.floor(i / 7) >= 4) ||
                (i < 7 && i % 7 >= 4 && Math.floor(i / 7) < 3);
              const isRandom = [10, 12, 16, 18, 22, 25, 30, 33, 37, 40, 43, 46].includes(i);
              return (
                <div
                  key={i}
                  className={cn(
                    "h-4 w-4 rounded-sm",
                    isCorner || isRandom ? "bg-[#17151d]" : "bg-transparent"
                  )}
                />
              );
            })}
          </div>
          <p className="mt-3 text-center text-[9px] text-[#9691a0]">flikker.uy/ls</p>
        </div>
        <p className="text-[12px] font-semibold text-[#5d5963]">Tu QR único</p>
      </div>

      {/* Placement ideas */}
      <div className="flex-1 space-y-2.5">
        {[
          { emoji: "🖨", label: "Imprimir y plastificar" },
          { emoji: "💳", label: "Tarjeta en mostrador" },
          { emoji: "🪧", label: "Cartel en caja" },
          { emoji: "📦", label: "Sticker en packaging" },
          { emoji: "📋", label: "Menú o carta" },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-3 rounded-xl bg-white border border-[#eae5df] px-3 py-2 shadow-sm">
            <span className="text-lg">{p.emoji}</span>
            <span className="text-[13px] text-[#5d5963]">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualChecklist({ items }: { items: string[] }) {
  return (
    <MockupCard>
      <p className="mb-4 text-[13px] font-bold text-[#17151d]">Revisión previa al lanzamiento</p>
      <div className="space-y-2.5">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-xl border border-[#d4cef0] bg-[#f8f6ff] px-3 py-2.5">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7767db]">
              <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[13px] text-[#4a3fa0]">{item}</span>
          </div>
        ))}
      </div>
    </MockupCard>
  );
}

function VisualLanzamiento() {
  const steps = [
    { icon: "📲", label: "Escanea" },
    { icon: "✅", label: "Registra visita" },
    { icon: "📈", label: "Ve progreso" },
    { icon: "🔄", label: "Vuelve" },
    { icon: "🎁", label: "Desbloquea" },
  ];
  return (
    <div className="rounded-3xl border border-[#eae5df] bg-white p-6 shadow-sm">
      <p className="mb-5 text-[12px] font-semibold uppercase tracking-wide text-[#9691a0]">Experiencia del cliente</p>
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f8f6ff] text-xl">
                {s.icon}
              </div>
              <span className="text-[10px] font-semibold text-[#5d5963]">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-[#d4cef0]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualAsistido({ paso }: { paso: number }) {
  const content: Record<number, React.ReactNode> = {
    1: (
      <div className="space-y-3">
        {[
          { q: "¿Qué tipo de negocio tenés?", a: "Cafetería" },
          { q: "¿Cuántos clientes por mes?", a: "~200" },
          { q: "¿Con qué frecuencia vienen?", a: "1-2 veces/semana" },
          { q: "¿Qué objetivos tenés?", a: "Más recurrencia" },
        ].map((f) => (
          <div key={f.q} className="rounded-xl border border-[#eae5df] bg-[#fafafa] p-3">
            <p className="text-[11px] text-[#9691a0]">{f.q}</p>
            <p className="text-[13px] font-semibold text-[#17151d]">{f.a}</p>
          </div>
        ))}
      </div>
    ),
    2: (
      <div className="space-y-3">
        {[
          { cat: "Cafetería", regla: "5 visitas → café gratis" },
          { cat: "Peluquería", regla: "4 cortes → 20% en el próximo" },
          { cat: "Restaurante", regla: "3 visitas en 30 días → beneficio especial" },
        ].map((e) => (
          <div key={e.cat} className="rounded-2xl border border-[#eae5df] bg-white p-4 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[#9691a0]">{e.cat}</p>
            <p className="mt-1 text-[14px] font-bold text-[#17151d]">{e.regla}</p>
          </div>
        ))}
      </div>
    ),
    3: (
      <VisualChecklist
        items={[
          "Espacio del negocio creado",
          "Beneficios configurados",
          "Desafíos activos",
          "Branding y colores",
          "Mensajes de bienvenida",
          "QR generado",
          "Experiencia del cliente probada",
        ]}
      />
    ),
    4: (
      <div className="rounded-3xl border border-[#eae5df] bg-white p-6 shadow-sm">
        <p className="mb-4 text-[13px] font-bold text-[#17151d]">Vista previa antes de lanzar</p>
        <div className="flex justify-center">
          <div className="relative h-52 w-28 rounded-[28px] border-[5px] border-[#17151d] bg-[#f8f6ff]">
            <div className="absolute left-1/2 top-1.5 h-3 w-12 -translate-x-1/2 rounded-full bg-[#17151d]" />
            <div className="pt-7 px-2 text-center">
              <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-xl bg-[#7767db] text-sm">☕</div>
              <p className="text-[8px] font-bold text-[#17151d]">La Stampa</p>
              <div className="mt-2 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={cn("h-4 w-4 rounded-full text-[7px] flex items-center justify-center", i < 3 ? "bg-[#7767db] text-white" : "border border-dashed border-[#d4cef0]")}>{i < 3 ? "✓" : ""}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-xl border border-[#eae5df] py-2 text-[12px] font-semibold text-[#5d5963]">Editar</button>
          <button className="flex-1 rounded-xl bg-[#7767db] py-2 text-[12px] font-bold text-white">Se ve bien →</button>
        </div>
      </div>
    ),
    5: (
      <div className="grid grid-cols-2 gap-3">
        {[
          { emoji: "🪧", label: "Cartel" },
          { emoji: "📋", label: "Mesa" },
          { emoji: "💳", label: "Mostrador" },
          { emoji: "📦", label: "Packaging" },
        ].map((p) => (
          <div key={p.label} className="flex flex-col items-center gap-2 rounded-2xl border border-[#eae5df] bg-white p-4 shadow-sm">
            <span className="text-3xl">{p.emoji}</span>
            <p className="text-[12px] font-semibold text-[#5d5963]">{p.label}</p>
          </div>
        ))}
      </div>
    ),
    6: (
      <div className="rounded-3xl border border-[#eae5df] bg-white p-5 shadow-sm">
        <p className="mb-3 text-[12px] font-bold text-[#17151d]">Lo que le decís a tu cliente</p>
        <div className="rounded-2xl bg-[#f8f6ff] p-4 text-[13px] italic text-[#4a3fa0]">
          "Escaneá el QR, registrá tu visita y empezá a desbloquear beneficios."
        </div>
        <p className="mt-3 text-[11px] text-[#9691a0]">Simple. Una sola frase. Tus clientes lo entienden solos.</p>
      </div>
    ),
    7: (
      <MockupCard>
        <p className="mb-3 text-[13px] font-bold text-[#17151d]">Tu panel después del lanzamiento</p>
        {[
          { label: "Visitas hoy", val: "12" },
          { label: "Clientes recurrentes", val: "38" },
          { label: "Beneficios otorgados", val: "5" },
        ].map((s) => (
          <div key={s.label} className="mb-2.5 flex items-center justify-between rounded-xl border border-[#eae5df] px-3 py-2">
            <span className="text-[12px] text-[#5d5963]">{s.label}</span>
            <span className="text-[16px] font-black text-[#17151d]">{s.val}</span>
          </div>
        ))}
      </MockupCard>
    ),
  };
  return <div>{content[paso] ?? null}</div>;
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export function ComoEmpezarPage() {
  const WA_URL = buildWhatsAppUrl("Hola! Quiero implementar Flikker con asistencia en mi negocio.");

  return (
    <>
      <Navbar />
      <StickySecondaryNav />

      <main className="pt-24">

        {/* ── HERO ──────────────────────────────── */}
        <section id="intro" className="bg-[#f7f6f2] px-6 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#7767db] sm:text-[11px]">
              Empezar con Flikker
            </p>
            <h1 className="font-display mt-5 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-[#17151d] sm:text-[54px] lg:text-[64px]">
              Tu sistema de retención<br className="hidden sm:block" /> funcionando, paso a paso.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-[#5d5963]">
              Configurá Flikker a tu ritmo o hacelo junto a nosotros. Te acompañamos desde la creación del espacio hasta tu primer cliente retenido.
            </p>

            {/* Two paths */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <a
                href="#por-mi-cuenta"
                className="group flex flex-col items-start rounded-3xl border border-[#eae5df] bg-white p-6 text-left shadow-sm transition-all hover:border-[#c4bcf0] hover:shadow-md"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f0eeff]">
                  <Zap className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} />
                </div>
                <h2 className="text-[17px] font-bold text-[#17151d]">Quiero configurarlo por mi cuenta</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5d5963]">
                  Creá tu espacio, configurá la retención y empezá a recibir clientes.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#7767db]">
                  Ver el proceso <ChevronRight className="h-4 w-4" />
                </span>
              </a>

              <a
                href="#con-asistencia"
                className="group relative flex flex-col items-start rounded-3xl border border-[#7767db]/30 bg-[#f8f6ff] p-6 text-left shadow-sm transition-all hover:border-[#7767db]/60 hover:shadow-md"
              >
                <div className="absolute right-4 top-4 rounded-full bg-[#7767db] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                  Recomendado
                </div>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7767db]/10">
                  <Users className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} />
                </div>
                <h2 className="text-[17px] font-bold text-[#17151d]">Prefiero hacerlo con asistencia</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5d5963]">
                  Nos contás cómo funciona tu negocio y armamos todo juntos.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-[#7767db]">
                  Ver el proceso <ChevronRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            CAMINO A — POR MI CUENTA
        ══════════════════════════════════════ */}
        <section id="por-mi-cuenta" className="scroll-mt-[140px] bg-white px-6 md:px-8">
          <div className="mx-auto max-w-5xl pt-20">
            <div className="flex items-center gap-4 border-b border-[#eae5df] pb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0eeff]">
                <Zap className="h-6 w-6 text-[#7767db]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#7767db]">Camino A</p>
                <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.025em] text-[#17151d]">
                  Quiero configurarlo por mi cuenta
                </h2>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl divide-y divide-[#f0eeed]">

            <Step n="01" title="Creá tu cuenta" visual={<VisualRegistro />} result="Tu negocio ya tiene su espacio en Flikker.">
              <p>Registrate en Flikker y creá el espacio de tu negocio. Solo necesitás datos básicos para arrancar.</p>
              <ul className="mt-2 space-y-1.5">
                {["Nombre del negocio", "Categoría (cafetería, peluquería, etc.)", "Dirección", "Logo (opcional, podés agregarlo después)"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
            </Step>

            <Step n="02" title="Configurá cómo querés retener clientes" visual={<VisualObjetivos />} flip result="Flikker adapta la experiencia al objetivo de tu negocio.">
              <p>Definí qué querés conseguir. Flikker te ayuda a alinear la configuración con tu objetivo real.</p>
              <ul className="mt-2 space-y-1.5">
                {["Aumentar la frecuencia de visitas", "Conseguir más clientes recurrentes", "Incentivar una cantidad de visitas concreta", "Premiar clientes frecuentes", "Recuperar clientes que dejaron de ir"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
            </Step>

            <Step n="03" title="Creá tus beneficios" visual={<VisualBeneficios />} result="Tus clientes tienen una razón concreta para volver.">
              <p>Vos decidís qué ofrecer y cuándo. Podés configurar múltiples beneficios y cambiarlos cuando quieras.</p>
              <p>Para cada beneficio definís:</p>
              <ul className="mt-2 space-y-1.5">
                {["Cantidad de visitas para desbloquearlo", "El beneficio en sí (café, descuento, regalo...)", "Condiciones o disponibilidad", "Fecha de vencimiento si aplica"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
            </Step>

            <Step n="04" title="Creá desafíos" visual={<VisualDesafios />} flip result="Tus clientes tienen más motivos activos para volver pronto.">
              <p>Los desafíos generan recurrencia a corto plazo. Le dan al cliente una meta concreta y visible.</p>
              <ul className="mt-2 space-y-1.5">
                {["Visitá 3 veces este mes", "Volvé antes de 7 días", "Completá 5 visitas seguidas"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
              <p>Podés tener varios desafíos activos al mismo tiempo.</p>
            </Step>

            <Step n="05" title="Personalizá la experiencia" visual={<VisualPersonalizacion />} result="Tus clientes ven tu marca, no la de Flikker.">
              <p>Lo que ve el cliente en el check-in es tuyo. Podés configurar:</p>
              <ul className="mt-2 space-y-1.5">
                {["Logo y colores del negocio", "Nombre y categoría", "Mensaje de bienvenida", "Textos de los beneficios", "Lo que aparece después del check-in"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
            </Step>

            <Step n="06" title="Generá tu QR" visual={<VisualQR />} flip result="Ya podés empezar a registrar visitas.">
              <p>Flikker genera automáticamente el QR único de tu negocio. Lo imprimís, lo plastificás y lo colocás donde tus clientes lo vean.</p>
              <p>El flujo completo desde el QR:</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px]">
                {["QR", "check-in", "progreso", "recompensa"].map((s, i, arr) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="rounded-full bg-[#f0eeff] px-3 py-1 font-semibold text-[#4a3fa0]">{s}</span>
                    {i < arr.length - 1 && <ChevronRight className="h-3.5 w-3.5 text-[#c4bcf0]" />}
                  </div>
                ))}
              </div>
            </Step>

            <Step n="07" title="Probá todo antes de publicarlo" visual={<VisualChecklist items={["Escaneo funcionando", "Check-in registrado correctamente", "Beneficios configurados", "Desafíos activos", "Datos del negocio correctos", "Experiencia móvil revisada"]} />} result="Tu Flikker está listo para recibir clientes.">
              <p>Antes de lanzarlo, revisá que todo funcione como esperás. Podés hacer una visita de prueba desde tu propio celular escaneando el QR.</p>
              <p>Si algo no está bien, podés editarlo directamente desde el panel antes de mostrárselo a tus clientes.</p>
            </Step>

            <Step n="08" title="Lanzá Flikker en tu negocio" visual={<VisualLanzamiento />} flip>
              <p>Colocá tu QR donde tus clientes lo vean y empezá a invitarlos a escanear.</p>
              <p>El proceso para tu cliente es inmediato: entra, escanea, registra su visita y empieza a acumular.</p>
              <p>Desde el panel podés ver en tiempo real quién está visitando, quién está acumulando y quién ya desbloqueó un beneficio.</p>
              <div className="mt-6">
                <a
                  href={APP_REGISTER_URL}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7767db] px-6 py-3 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(119,103,219,0.38)] transition-all hover:bg-[#6658c5]"
                >
                  Crear mi Flikker
                </a>
              </div>
            </Step>

          </div>
        </section>

        {/* ══════════════════════════════════════
            CAMINO B — CON ASISTENCIA
        ══════════════════════════════════════ */}
        <section id="con-asistencia" className="scroll-mt-[140px] bg-[#f7f6f2] px-6 md:px-8">
          <div className="mx-auto max-w-5xl pt-20">
            <div className="flex items-center gap-4 border-b border-[#e0dbf5] pb-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7767db]/10">
                <Users className="h-6 w-6 text-[#7767db]" strokeWidth={1.8} />
              </div>
              <div>
                <div className="mb-1 inline-flex rounded-full bg-[#7767db] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Recomendado
                </div>
                <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.025em] text-[#17151d]">
                  Prefiero hacerlo con asistencia
                </h2>
              </div>
            </div>
            <div className="py-10">
              <p className="max-w-xl text-[17px] leading-[1.7] text-[#5d5963]">
                No necesitás configurar todo solo. Entendemos tu negocio, armamos contigo la estrategia y te ayudamos a dejar Flikker funcionando.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl divide-y divide-[#e8e3f0]">

            <Step n="01" title="Nos contás sobre tu negocio" visual={<VisualAsistido paso={1} />} result="Entendemos exactamente qué necesitás antes de tocar cualquier configuración.">
              <p>Empezamos escuchando. Queremos entender cómo funciona tu negocio antes de definir cualquier cosa.</p>
              <p>Lo que nos contás:</p>
              <ul className="mt-2 space-y-1.5">
                {["Tipo de negocio y rubro", "Cantidad aproximada de clientes por mes", "Frecuencia de compra o visita", "Ticket promedio", "Promociones o beneficios que ya usás", "Qué querés lograr con Flikker"].map(i => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 shrink-0 text-[#7767db]" />{i}</li>
                ))}
              </ul>
            </Step>

            <Step n="02" title="Definimos la estrategia juntos" visual={<VisualAsistido paso={2} />} flip result="Sabés exactamente cómo va a funcionar Flikker en tu negocio antes de lanzarlo.">
              <p>No simplemente instalamos software. Te ayudamos a pensar cómo usar Flikker para que genere impacto real en tu negocio.</p>
              <p>Juntos definimos qué beneficios tienen sentido, cuántas visitas necesita el cliente y qué desafíos van a generar más recurrencia.</p>
            </Step>

            <Step n="03" title="Configuramos Flikker" visual={<VisualAsistido paso={3} />} result="Tu espacio está completo y listo para ser revisado.">
              <p>Nos encargamos de configurar todo desde el panel. Vos podés seguir con tu negocio mientras nosotros armamos el sistema.</p>
            </Step>

            <Step n="04" title="Lo revisamos contigo" visual={<VisualAsistido paso={4} />} flip result="Lanzamos con la configuración exacta que vos querés.">
              <p>Antes de mostrárselo a tus clientes, revisamos todo juntos. Ves exactamente cómo va a verse y funcionar.</p>
              <p>Si algo no está bien o querés ajustarlo, lo cambiamos en el momento.</p>
            </Step>

            <Step n="05" title="Te ayudamos a implementarlo físicamente" visual={<VisualAsistido paso={5} />} result="Tu QR está en el lugar correcto, visible para tus clientes.">
              <p>El QR tiene que estar donde tus clientes lo puedan ver fácilmente. Te asesoramos sobre dónde colocarlo según el tipo de negocio.</p>
              <p>También podemos ayudarte a diseñar el material de soporte si lo necesitás.</p>
            </Step>

            <Step n="06" title="Lanzamos" visual={<VisualAsistido paso={6} />} flip result="Flikker está funcionando en tu negocio.">
              <p>Te explicamos cómo presentárselo a tus clientes y cómo responder las primeras preguntas que puedan surgir.</p>
              <p>El primer día acompañamos el lanzamiento para asegurarnos de que todo funcione.</p>
            </Step>

            <Step n="07" title="Seguimos acompañándote" visual={<VisualAsistido paso={7} />} result="Tenés un sistema de retención activo y datos reales de tu negocio.">
              <p>El lanzamiento es el comienzo, no el final. Después de activarlo podés revisar visitas, clientes recurrentes, beneficios obtenidos y evolución del programa.</p>
              <p>Si necesitás ajustar algo o agregar funcionalidades, estamos disponibles.</p>
              <div className="mt-6">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7767db] px-6 py-3 text-[14px] font-bold text-white shadow-[0_4px_20px_rgba(119,103,219,0.38)] transition-all hover:bg-[#6658c5]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quiero implementar Flikker con ayuda
                </a>
              </div>
            </Step>

          </div>
        </section>

        {/* ── COMPARADOR ──────────────────────── */}
        <section className="bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">Comparación</p>
              <h2 className="font-display mt-4 text-[30px] font-bold tracking-[-0.025em] text-[#17151d] sm:text-[38px]">
                Elegí la forma que mejor se adapte a vos.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Col A */}
              <div className="rounded-3xl border border-[#eae5df] bg-[#fafafa] p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f0eeff]">
                  <Zap className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[18px] font-bold text-[#17151d]">Por mi cuenta</h3>
                <div className="mt-5 space-y-4">
                  {[
                    { k: "Configuración", v: "La hacés vos" },
                    { k: "Velocidad", v: "Podés empezar inmediatamente" },
                    { k: "Asistencia", v: "Guías dentro de Flikker" },
                    { k: "Ideal para", v: "Quienes quieren explorar y configurar todo por su cuenta" },
                  ].map(r => (
                    <div key={r.k}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9691a0]">{r.k}</p>
                      <p className="mt-0.5 text-[14px] text-[#17151d]">{r.v}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={APP_REGISTER_URL}
                  className="mt-8 block w-full rounded-full border border-[#7767db] py-3 text-center text-[14px] font-bold text-[#7767db] transition-all hover:bg-[#f0eeff]"
                >
                  Empezar
                </a>
              </div>

              {/* Col B */}
              <div className="rounded-3xl border border-[#7767db]/30 bg-[#f8f6ff] p-8">
                <div className="mb-1 inline-flex rounded-full bg-[#7767db] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Recomendado
                </div>
                <div className="mb-5 mt-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7767db]/10">
                  <Users className="h-5 w-5 text-[#7767db]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[18px] font-bold text-[#17151d]">Con asistencia</h3>
                <div className="mt-5 space-y-4">
                  {[
                    { k: "Configuración", v: "La hacemos contigo" },
                    { k: "Estrategia", v: "Te ayudamos a definirla" },
                    { k: "Implementación", v: "Te acompañamos en el lanzamiento" },
                    { k: "Ideal para", v: "Negocios que quieren empezar con una estructura ya definida" },
                  ].map(r => (
                    <div key={r.k}>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9691a0]">{r.k}</p>
                      <p className="mt-0.5 text-[14px] text-[#17151d]">{r.v}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full rounded-full bg-[#7767db] py-3 text-center text-[14px] font-bold text-white shadow-[0_4px_14px_rgba(119,103,219,0.38)] transition-all hover:bg-[#6658c5]"
                >
                  Hablar con Flikker
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── QUÉ VE TU CLIENTE ──────────────── */}
        <section id="tu-cliente" className="scroll-mt-[140px] bg-[#f4f4f6] px-6 py-24 md:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">Experiencia del cliente</p>
              <h2 className="font-display mt-4 text-[30px] font-bold tracking-[-0.025em] text-[#17151d] sm:text-[38px]">
                Mientras vos configurás Flikker, esto es lo que vive tu cliente.
              </h2>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { n: "1", icon: QrCode, title: "Escanea", body: "El QR del negocio con su celular." },
                { n: "2", icon: Smartphone, title: "Registra su visita", body: "Proceso rápido desde el navegador. Sin app." },
                { n: "3", icon: Target, title: "Ve su progreso", body: "Visitas, beneficios y desafíos activos." },
                { n: "4", icon: Star, title: "Vuelve", body: "Tiene una razón concreta para regresar." },
                { n: "5", icon: Gift, title: "Desbloquea", body: "El negocio recompensa su fidelidad." },
              ].map(({ n, icon: Icon, title, body }, i) => (
                <div key={n} className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-[#7767db]" strokeWidth={1.6} />
                  </div>
                  <div className="my-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#7767db] text-[10px] font-bold text-white">
                    {n}
                  </div>
                  <h3 className="text-[14px] font-bold text-[#17151d]">{title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#5d5963]">{body}</p>
                  {i < 4 && (
                    <ChevronRight className="mt-3 hidden h-5 w-5 text-[#c4bcf0] lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────── */}
        <section id="faq-ce" className="scroll-mt-[140px] bg-white px-6 py-24 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">Preguntas frecuentes</p>
              <h2 className="font-display mt-4 text-[30px] font-bold tracking-[-0.025em] text-[#17151d] sm:text-[38px]">
                Dudas frecuentes sobre la implementación
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {[
                {
                  q: "¿Necesito instalar algo?",
                  a: "No. Flikker funciona completamente desde el navegador. Tus clientes acceden escaneando el QR — sin descargar ninguna app.",
                },
                {
                  q: "¿Necesito tener conocimientos técnicos?",
                  a: "No. El panel de configuración está diseñado para que cualquier dueño de negocio pueda usarlo sin experiencia técnica.",
                },
                {
                  q: "¿Puedo configurar Flikker completamente solo?",
                  a: "Sí. El camino 'Por mi cuenta' te guía paso a paso por toda la configuración. Podés hacerlo a tu ritmo y en el orden que prefieras.",
                },
                {
                  q: "¿Me pueden ayudar a configurarlo?",
                  a: "Sí. El camino 'Con asistencia' incluye un proceso completo donde el equipo de Flikker trabaja junto a vos, desde la estrategia hasta el lanzamiento.",
                },
                {
                  q: "¿Puedo cambiar los beneficios después de lanzarlo?",
                  a: "Sí. Los beneficios y desafíos se pueden editar en cualquier momento desde el panel. Los cambios se aplican de inmediato.",
                },
                {
                  q: "¿Puedo probarlo antes de mostrárselo a mis clientes?",
                  a: "Sí. Podés hacer una visita de prueba escaneando tu propio QR y ver exactamente lo que ve un cliente. También hay una vista previa desde el panel.",
                },
                {
                  q: "¿Cuánto demora ponerlo en funcionamiento?",
                  a: "Por tu cuenta, podés configurarlo en menos de una hora. Con asistencia, el proceso completo lleva 24-48 horas hábiles, para que todo esté bien definido antes de lanzar.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-neutral-200 bg-white px-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold text-[#17151d] marker:hidden">
                    {q}
                    <ChevronRight className="h-4 w-4 shrink-0 text-neutral-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pb-5 text-[14px] leading-relaxed text-[#5d5963]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────── */}
        <section className="px-6 py-24 md:px-8" style={{ background: "linear-gradient(to right, #0d0452 0%, #3d0fa8 40%, #7c28e8 72%, #9b3ff5 100%)" }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[34px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[44px]">
              Tu próximo cliente puede convertirse en uno que vuelva.
            </h2>
            <p className="mt-4 text-[17px] text-white/65">
              Elegí cómo querés empezar.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={APP_REGISTER_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-[#17151d] shadow-lg transition-all hover:bg-white/90 sm:w-auto"
              >
                Empezar por mi cuenta
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[15px] font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Quiero asistencia
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
