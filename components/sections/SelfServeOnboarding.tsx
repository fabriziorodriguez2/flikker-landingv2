"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  Check,
  Flame,
  MapPin,
  Menu,
  Package,
  Palette,
  Repeat2,
  RotateCcw,
  ScanLine,
  Store,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";

import { APP_REGISTER_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Goal = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const GOALS: Goal[] = [
  { id: "frequency", label: "Que vuelvan más seguido", icon: Repeat2 },
  {
    id: "first-visit",
    label: "Convertir primeras visitas en clientes recurrentes",
    icon: Users,
  },
  { id: "loyalty", label: "Premiar la fidelidad", icon: BadgeCheck },
  {
    id: "recovery",
    label: "Recuperar clientes que dejaron de venir",
    icon: RotateCcw,
  },
];

const CHALLENGES = [
  {
    type: "Mission",
    title: "Completá 3 visitas este mes",
    detail: "Una meta concreta dentro de un período definido.",
    icon: CalendarCheck2,
  },
  {
    type: "Streak",
    title: "Mantené una racha de 3 semanas",
    detail: "Reconoce la constancia de quienes vuelven.",
    icon: Flame,
  },
  {
    type: "ReturnChallenge",
    title: "Volvé dentro de 7 días",
    detail: "Acorta el tiempo entre una visita y la siguiente.",
    icon: RotateCcw,
  },
] as const;

const QR_LOCATIONS = [
  { label: "Mostrador", icon: Store },
  { label: "Mesa", icon: Utensils },
  { label: "Menú", icon: Menu },
  { label: "Packaging", icon: Package },
] as const;

const TEST_ITEMS = [
  "El QR abre correctamente",
  "La visita queda registrada",
  "La tarjeta se ve como esperás",
  "El beneficio se desbloquea",
  "Mi Flikker funciona en el teléfono",
] as const;

function StepLabel({ step, label }: { step: number; label: string }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7767db]">
      <span className="tabular-nums">{String(step).padStart(2, "0")}</span>
      <span className="h-px w-7 bg-[#7767db]/35" aria-hidden="true" />
      {label}
    </p>
  );
}

export function SelfServeOnboarding() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    "frequency",
    "first-visit",
  ]);

  const toggleGoal = (goal: string) => {
    setSelectedGoals((current) =>
      current.includes(goal)
        ? current.filter((item) => item !== goal)
        : [...current, goal],
    );
  };

  return (
    <div className="text-[#17151d]">
      <section id="paso-1" className="scroll-mt-32 bg-white px-6 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-40">
            <StepLabel step={1} label="Cuenta" />
            <h3 className="mt-5 max-w-md text-[clamp(2.35rem,4.8vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Creá tu espacio.
            </h3>
            <p className="mt-6 max-w-sm text-[17px] leading-7 text-[#68626d]">
              Nombre del negocio, categoría y dirección. El resto lo configurás después.
            </p>
          </div>

          <form className="border-t border-black/10" aria-label="Ejemplo del formulario para crear un espacio">
            <label className="grid gap-2 border-b border-black/10 py-6 sm:grid-cols-[170px_1fr] sm:items-center">
              <span className="text-sm font-semibold">Nombre del negocio</span>
              <input
                type="text"
                placeholder="Ej. La Stampa"
                className="h-12 border-0 bg-[#f6f5f2] px-4 text-[15px] outline-none placeholder:text-[#9a949f] focus:ring-2 focus:ring-[#7767db]/35"
              />
            </label>
            <label className="grid gap-2 border-b border-black/10 py-6 sm:grid-cols-[170px_1fr] sm:items-center">
              <span className="text-sm font-semibold">Categoría</span>
              <select
                defaultValue=""
                className="h-12 border-0 bg-[#f6f5f2] px-4 text-[15px] text-[#68626d] outline-none focus:ring-2 focus:ring-[#7767db]/35"
              >
                <option value="" disabled>Elegí una categoría</option>
                <option>Cafetería</option>
                <option>Restaurante</option>
                <option>Peluquería</option>
                <option>Otro negocio</option>
              </select>
            </label>
            <label className="grid gap-2 border-b border-black/10 py-6 sm:grid-cols-[170px_1fr] sm:items-center">
              <span className="text-sm font-semibold">Dirección</span>
              <span className="relative block">
                <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8d8791]" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Calle, número y ciudad"
                  className="h-12 w-full border-0 bg-[#f6f5f2] pl-11 pr-4 text-[15px] outline-none placeholder:text-[#9a949f] focus:ring-2 focus:ring-[#7767db]/35"
                />
              </span>
            </label>
            <div className="flex justify-end pt-7">
              <a
                href={APP_REGISTER_URL}
                className="inline-flex min-h-12 items-center gap-2 bg-[#7767db] px-6 text-sm font-bold text-white transition-colors hover:bg-[#6658c5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
              >
                Crear mi espacio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>
      </section>

      <section id="paso-2" className="scroll-mt-32 bg-[#f4f3f0] px-6 py-24 md:px-8 lg:py-36">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <StepLabel step={2} label="Objetivo" />
              <h3 className="mt-5 max-w-3xl text-[clamp(2.3rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
                ¿Qué querés conseguir con Flikker?
              </h3>
            </div>
            <p className="pb-1 text-sm text-[#77717b]">Podés elegir más de uno.</p>
          </div>

          <div className="mt-14 grid border-t border-black/15 md:grid-cols-2">
            {GOALS.map(({ id, label, icon: Icon }, index) => {
              const selected = selectedGoals.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleGoal(id)}
                  className={cn(
                    "group flex min-h-28 items-center gap-5 border-b border-black/15 px-1 py-6 text-left transition-colors md:px-7",
                    index % 2 === 0 && "md:border-r",
                    selected ? "bg-white" : "hover:bg-white/60",
                  )}
                >
                  <Icon
                    className={cn("h-6 w-6 shrink-0", selected ? "text-[#7767db]" : "text-[#77717b]")}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className="max-w-sm text-[17px] font-semibold leading-6">{label}</span>
                  <span
                    className={cn(
                      "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
                      selected ? "border-[#7767db] bg-[#7767db]" : "border-black/20",
                    )}
                  >
                    {selected && <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paso-3" className="scroll-mt-32 bg-white px-6 py-24 md:px-8 lg:py-36">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <StepLabel step={3} label="Benefits" />
              <h3 className="mt-5 text-[clamp(2.3rem,4.8vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
                Definí por qué vale la pena volver.
              </h3>
            </div>
            <p className="max-w-xl text-[17px] leading-7 text-[#68626d] lg:justify-self-end">
              Elegís el beneficio y el objetivo que lo desbloquea. La vista previa te muestra cómo llega a la tarjeta del cliente.
            </p>
          </div>

          <figure className="mt-14 border border-black/10 bg-[#f4f3f0] p-3 sm:p-7 lg:p-10">
            <Image
              src="/landing/stamps-la-stampa-7.png"
              alt="Vista previa real de una tarjeta de beneficios de La Stampa"
              width={1050}
              height={600}
              sizes="(min-width: 1200px) 1040px, 92vw"
              className="h-auto w-full"
            />
            <figcaption className="flex flex-col gap-2 border-t border-black/10 px-1 pt-5 text-sm text-[#68626d] sm:flex-row sm:items-center sm:justify-between">
              <span>Vista previa de la tarjeta del cliente</span>
              <span className="font-semibold text-[#17151d]">Benefit · RewardGoal</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="paso-4" className="scroll-mt-32 bg-[#f4f3f0] px-6 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <StepLabel step={4} label="Desafíos" />
            <h3 className="mt-5 text-[clamp(2.25rem,4.4vw,4.1rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Dales un motivo para volver antes.
            </h3>
            <p className="mt-6 max-w-md text-[17px] leading-7 text-[#68626d]">
              Cada formato trabaja un comportamiento distinto. Activá solo los que tengan sentido para tu negocio.
            </p>
          </div>

          <div className="border-t border-black/15">
            {CHALLENGES.map(({ type, title, detail, icon: Icon }) => (
              <div key={type} className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[48px_1fr_auto] sm:items-center">
                <Icon className="h-6 w-6 text-[#7767db]" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#77717b]">{type}</p>
                  <p className="mt-1 text-[17px] font-bold">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#77717b]">{detail}</p>
                </div>
                <span className="text-xs font-semibold text-[#7767db]">Ejemplo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paso-5" className="scroll-mt-32 overflow-hidden bg-[#17151d] px-6 py-24 text-white md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
          <div>
            <StepLabel step={5} label="Experiencia" />
            <h3 className="mt-5 text-[clamp(2.35rem,4.8vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Hacelo sentir parte de tu negocio.
            </h3>
            <p className="mt-6 max-w-md text-[17px] leading-7 text-white/65">
              Flikker mantiene el marco. Tu negocio define la tarjeta, el logo, el sello y los detalles de marca.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-2"><Palette className="h-4 w-4 text-[#9188f5]" /> Identidad del negocio</span>
              <span className="inline-flex items-center gap-2"><ScanLine className="h-4 w-4 text-[#9188f5]" /> CHECKIN_V2</span>
            </div>
          </div>

          <div className="relative min-h-[430px] border-l border-white/15 sm:min-h-[580px]">
            <Image
              src="/landing/checkin-phone.png"
              alt="Check-in real de La Stampa dentro de Flikker"
              fill
              sizes="(min-width: 1024px) 590px, 90vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </section>

      <section id="paso-6" className="scroll-mt-32 bg-white px-6 py-24 md:px-8 lg:py-36">
        <div className="mx-auto grid max-w-[1120px] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
          <div className="flex justify-center border-b border-black/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16">
            <Image
              src="/landing/qr-nfc-support-hq.png"
              alt="Soporte real de Flikker con QR y NFC"
              width={447}
              height={558}
              sizes="(min-width: 1024px) 420px, 82vw"
              className="h-auto max-h-[540px] w-auto"
            />
          </div>

          <div>
            <StepLabel step={6} label="QR y NFC" />
            <h3 className="mt-5 text-[clamp(2.3rem,4.7vw,4.35rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Ponelo donde tus clientes lo vean.
            </h3>
            <p className="mt-6 max-w-lg text-[17px] leading-7 text-[#68626d]">
              El acceso tiene que aparecer en el momento de la visita. Elegí uno o dos lugares claros y mantenelos visibles.
            </p>

            <div className="mt-10 grid grid-cols-2 border-t border-black/10">
              {QR_LOCATIONS.map(({ label, icon: Icon }, index) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-3 border-b border-black/10 py-5 text-sm font-semibold",
                    index % 2 === 0 ? "pr-4" : "border-l pl-5",
                  )}
                >
                  <Icon className="h-4 w-4 text-[#7767db]" strokeWidth={1.8} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="paso-7" className="scroll-mt-32 bg-[#f4f3f0] px-6 py-20 md:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[980px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
          <div>
            <StepLabel step={7} label="Prueba" />
            <h3 className="mt-5 text-[clamp(2.15rem,4vw,3.7rem)] font-semibold leading-[1] tracking-[-0.05em]">
              Probalo como lo haría un cliente.
            </h3>
            <p className="mt-5 text-[16px] leading-7 text-[#68626d]">
              Un recorrido completo alcanza para detectar cualquier ajuste antes de publicar.
            </p>
          </div>

          <div className="border border-black/10 bg-white px-6 sm:px-8">
            {TEST_ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-black/10 py-4 last:border-b-0">
                <Check className="h-4 w-4 shrink-0 text-[#7767db]" strokeWidth={2.4} aria-hidden="true" />
                <span className="text-[15px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="paso-8" className="scroll-mt-32 bg-[#17151d] px-6 py-28 text-white md:px-8 lg:py-40">
        <div className="mx-auto max-w-[1000px]">
          <StepLabel step={8} label="Lanzamiento" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h3 className="max-w-4xl text-[clamp(3rem,7.5vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
                Listo. Ahora hacé que lo usen.
              </h3>
              <p className="mt-8 max-w-xl text-[17px] leading-7 text-white/65">
                Mostrá el QR, explicalo en una frase y empezá a ver cómo vuelven.
              </p>
            </div>
            <a
              href={APP_REGISTER_URL}
              className="inline-flex min-h-13 w-fit items-center gap-2 bg-[#9188f5] px-7 text-sm font-bold text-[#17151d] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#17151d]"
            >
              Crear mi Flikker
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
            <span>QR visible</span>
            <span>Equipo preparado</span>
            <span>Primeras visitas</span>
          </div>
        </div>
      </section>
    </div>
  );
}
