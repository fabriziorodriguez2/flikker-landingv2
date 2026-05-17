"use client";

import { useEffect, useMemo, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { Star, RefreshCw, TrendingUp, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl, CALCULATOR_FORMULAS } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

function CountUp({ value }: { value: number }) {
  const reduced = useReducedMotion();
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString("es-UY"));

  useEffect(() => {
    if (reduced) { mv.set(value); return; }
    const controls = animate(mv, value, { duration: 0.5, ease: "easeOut" });
    return () => controls.stop();
  }, [value, mv, reduced]);

  return <motion.span className="tabular-nums">{rounded}</motion.span>;
}

const STAT_CARDS = (reviews: number, reactivations: number) => [
  {
    icon: Star,
    value: <><span className="text-[11px] mr-0.5 opacity-60">~</span><CountUp value={reviews} /></>,
    label: "reseñas nuevas en Google",
    sub: "en 30 días",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.25)",
  },
  {
    icon: RefreshCw,
    value: <><span className="text-[11px] mr-0.5 opacity-60">+</span><CountUp value={reactivations} /></>,
    label: "clientes reactivados",
    sub: "automáticamente",
    color: "#9188f5",
    glow: "rgba(145,136,245,0.2)",
  },
  {
    icon: TrendingUp,
    value: <span className="text-[38px] md:text-[48px]">35%</span>,
    label: "visibilidad local en Google",
    sub: "vs ~12% sin reseñas",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
  },
];

export function ImpactCalculator() {
  const { slider, reviewsIn60Days, reactivated } = CALCULATOR_FORMULAS;
  const [customers, setCustomers] = useState<number>(slider.default);

  const reviews = useMemo(() => reviewsIn60Days(customers), [customers, reviewsIn60Days]);
  const reactivations = useMemo(() => reactivated(customers), [customers, reactivated]);

  const progress = ((customers - slider.min) / (slider.max - slider.min)) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #9188f5 0%, #9188f5 ${progress}%, rgba(255,255,255,0.1) ${progress}%, rgba(255,255,255,0.1) 100%)`,
  };

  const sliderClasses = [
    "w-full appearance-none h-1.5 rounded-full cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060f]",
    "[&::-webkit-slider-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:w-7",
    "[&::-webkit-slider-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:bg-white",
    "[&::-webkit-slider-thumb]:shadow-[0_0_0_3px_#9188f5,0_4px_12px_rgba(0,0,0,0.4)]",
    "[&::-webkit-slider-thumb]:cursor-pointer",
    "[&::-webkit-slider-thumb]:transition-transform",
    "hover:[&::-webkit-slider-thumb]:scale-110",
    "active:[&::-webkit-slider-thumb]:scale-105",
    "[&::-moz-range-thumb]:h-7 [&::-moz-range-thumb]:w-7",
    "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0",
    "[&::-moz-range-thumb]:bg-white",
    "[&::-moz-range-thumb]:shadow-[0_0_0_3px_#9188f5,0_4px_12px_rgba(0,0,0,0.4)]",
    "[&::-moz-range-thumb]:cursor-pointer",
    "[&::-moz-range-track]:bg-transparent",
  ].join(" ");

  const message = `Hola! Calculé que podría tener ${reviews} reseñas con Flikker, quiero saber más.`;

  return (
    <section
      id="calculadora"
      className="relative scroll-mt-20 overflow-hidden px-6 py-24 md:px-8 md:py-32"
      style={{ background: "#07060f" }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(100,60,255,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Calculá tu impacto
          </span>
          <h2 className="font-display mt-4 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[48px]">
            ¿Cuántas reseñas podrías
            <br />
            tener en 30 días?
          </h2>
          <p className="mt-4 text-base text-white/45">
            Mové el slider y mirá tu potencial en tiempo real.
          </p>
        </div>

        {/* Slider card */}
        <div
          className="mx-auto mt-12 max-w-2xl rounded-3xl p-8 md:p-10"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <label htmlFor="customers" className="block">
            <span className="text-sm font-medium text-white/50">
              Atiendo o vendo a
            </span>
            <div className="mt-2 flex items-baseline gap-3">
              <motion.span
                key={customers}
                className="font-display text-[64px] font-black leading-none tracking-tight text-white"
              >
                {customers}
              </motion.span>
              <span className="text-base font-medium text-white/50">
                clientes por mes
              </span>
            </div>
          </label>

          <div className="mt-6">
            <input
              id="customers"
              type="range"
              min={slider.min}
              max={slider.max}
              step={slider.step}
              value={customers}
              onChange={(e) => setCustomers(Number(e.target.value))}
              style={sliderStyle}
              aria-label="Clientes por mes"
              aria-valuetext={`${customers} clientes por mes`}
              className={sliderClasses}
            />
            <div className="mt-2 flex justify-between text-[11px] font-medium text-white/30">
              <span>{slider.min}</span>
              <span>{slider.max}+</span>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STAT_CARDS(reviews, reactivations).map(({ icon: Icon, value, label, sub, color, glow }) => (
            <div
              key={label}
              className="relative overflow-hidden rounded-3xl p-7"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full"
                style={{ background: glow, filter: "blur(24px)" }}
              />

              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{ background: `${color}22` }}
              >
                <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.75} aria-hidden="true" />
              </div>

              <div className="relative mt-5">
                <p
                  className="font-display text-[52px] font-black leading-none tracking-tight"
                  style={{ color }}
                >
                  {value}
                </p>
                <p className="mt-2 text-[14px] font-semibold text-white">{label}</p>
                <p className="mt-0.5 text-[12px] text-white/40">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={buildWhatsAppUrl(message)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("Calculator Submit", { customers, reviews, reactivations })}
            className="inline-flex items-center gap-2 rounded-full bg-periwinkle px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90 hover:shadow-[0_4px_32px_rgba(145,136,245,0.6)]"
          >
            Quiero estos números
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
