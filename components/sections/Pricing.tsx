import type { ReactNode } from "react";
import {
  Star,
  QrCode,
  Users,
  Send,
  MessageCircle,
  Layers,
  Globe,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const BASE_PROMO = 1000;
const BASE_REGULAR = 2000;
const PRO_PROMO = 2000;
const PRO_REGULAR = 3000;

function fmt(n: number) {
  return n.toLocaleString("es-UY");
}

type Feature = {
  icon: LucideIcon;
  label: ReactNode;
  sub: string;
  accent?: string;
};

const BASE_FEATURES: Feature[] = [
  {
    icon: Star,
    label: "Reseñas automáticas en Google",
    sub: "WhatsApp a cada cliente atendido",
  },
  {
    icon: QrCode,
    label: "QR de captación",
    sub: "Para mostrador o sala de espera",
  },
  {
    icon: Users,
    label: "Base de contactos propia",
    sub: "Tus clientes guardados para siempre",
  },
  {
    icon: Send,
    label: "Campañas manuales",
    sub: "Promociones y recordatorios a tu base",
  },
  {
    icon: MessageCircle,
    label: (
      <>
        <strong className="font-semibold text-white">200 mensajes</strong>{" "}
        de WhatsApp incluidos
      </>
    ),
    sub: "$2,50 UYU por mensaje extra",
  },
];

const PRO_FEATURES: Feature[] = [
  {
    icon: Layers,
    label: "Todo lo del plan Base",
    sub: "Reseñas, QR, base de contactos y campañas",
    accent: "#4ade80",
  },
  {
    icon: Globe,
    label: "Widget de prueba social para tu web",
    sub: "Tus reseñas reales en tu sitio, automático",
  },
  {
    icon: Headphones,
    label: "Soporte prioritario",
    sub: "Respuesta en menos de 24 horas",
    accent: "#4ade80",
  },
  {
    icon: MessageCircle,
    label: (
      <>
        <strong className="font-semibold text-white">500 mensajes</strong>{" "}
        de WhatsApp incluidos
      </>
    ),
    sub: "$2,50 UYU por mensaje extra",
  },
];

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <ul className="flex-1 space-y-3.5">
      {features.map((f, i) => {
        const color = f.accent ?? "#9188f5";
        return (
          <li key={i} className="flex items-start gap-3">
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
              style={{ background: `${color}22` }}
            >
              <f.icon
                className="h-3.5 w-3.5"
                style={{ color }}
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="text-[13px] font-semibold leading-snug text-white/85">
                {f.label}
              </p>
              <p className="text-[11px] text-white/40">{f.sub}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function Pricing() {
  return (
    <section
      id="precios"
      className="scroll-mt-20 bg-white px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Precios
          </span>
          <h2 className="font-display mt-4 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[48px]">
            Una inversión que se paga
            <br />
            sola desde el primer mes.
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Dos planes. Todo incluido. Sin letra chica.
          </p>
        </div>

        {/* Cards — capped at 2xl so no se estiran demasiado */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">

          {/* ── Base ── */}
          <div
            className="flex flex-col rounded-2xl p-6"
            style={{
              background: "#07060f",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/65">
              Base
            </span>

            <h3 className="font-display mt-3 text-[17px] font-black text-white">
              Flikker Base
            </h3>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-white/30 line-through">
                  ${fmt(BASE_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="font-display text-[40px] font-black leading-none tracking-tight text-white">
                  ${fmt(BASE_PROMO)}
                </span>
                <span className="text-xs text-white/40">UYU / mes</span>
              </div>
            </div>

            <p className="mt-2.5 text-[12px] leading-[1.6] text-white/50">
              Para negocios que quieren empezar a construir reputación y base
              de clientes sin complicaciones.
            </p>

            <div className="my-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

            <FeatureList features={BASE_FEATURES} />

            <p className="mt-4 text-[11px] font-medium text-periwinkle">
              Si usás más de 500 mensajes, te conviene el Pro.
            </p>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Empezar con Base
            </a>

            <p className="mt-2.5 text-center text-[11px] text-white/30">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

          {/* ── Pro ── */}
          <div
            className="flex flex-col rounded-2xl p-6 ring-2 ring-periwinkle"
            style={{ background: "#07060f" }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-periwinkle/25 px-2.5 py-0.5 text-[11px] font-semibold text-periwinkle">
              Pro
            </span>

            <h3 className="font-display mt-3 text-[17px] font-black text-white">
              Flikker Pro
            </h3>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-white/30 line-through">
                  ${fmt(PRO_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-0.5 flex items-baseline gap-1">
                <span className="font-display text-[40px] font-black leading-none tracking-tight text-white">
                  ${fmt(PRO_PROMO)}
                </span>
                <span className="text-xs text-white/40">UYU / mes</span>
              </div>
            </div>

            <p className="mt-2.5 text-[12px] leading-[1.6] text-white/50">
              Para negocios que quieren aprovechar su reputación al máximo y
              llegar a más clientes.
            </p>

            <div className="my-4 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />

            <FeatureList features={PRO_FEATURES} />

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-xl bg-periwinkle px-4 py-3 text-[14px] font-semibold text-white shadow-[0_4px_16px_rgba(145,136,245,0.4)] transition-all hover:opacity-90"
            >
              Empezar con Pro
            </a>

            <p className="mt-2.5 text-center text-[11px] text-white/30">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
