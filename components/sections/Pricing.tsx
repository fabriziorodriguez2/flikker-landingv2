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
    <ul className="flex-1 space-y-4">
      {features.map((f, i) => {
        const color = f.accent ?? "#9188f5";
        return (
          <li key={i} className="flex items-start gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `${color}22` }}
            >
              <f.icon
                className="h-4 w-4"
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
      className="scroll-mt-20 px-6 py-24 md:px-8 md:py-32"
      style={{ background: "#07060f" }}
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Precios
          </span>
          <h2 className="font-display mt-4 text-[32px] font-black leading-[1.05] tracking-[-0.02em] text-white md:text-[48px]">
            Una inversión que se paga
            <br />
            sola desde el primer mes.
          </h2>
          <p className="mt-4 text-base text-white/45">
            Dos planes. Todo incluido. Sin letra chica.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* ── Base ── */}
          <div
            className="flex flex-col rounded-3xl p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/70">
              Base
            </span>

            <h3 className="font-display mt-4 text-[20px] font-black text-white">
              Flikker Base
            </h3>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white/30 line-through">
                  ${fmt(BASE_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="font-display text-[52px] font-black leading-none tracking-tight text-white">
                  ${fmt(BASE_PROMO)}
                </span>
                <span className="text-sm text-white/40">UYU / mes</span>
              </div>
            </div>

            <p className="mt-3 text-[13px] leading-[1.6] text-white/50">
              Para negocios que quieren empezar a construir reputación y base
              de clientes sin complicaciones.
            </p>

            <div className="my-6 h-px bg-white/8" />

            <FeatureList features={BASE_FEATURES} />

            <p className="mt-5 text-[12px] font-medium text-periwinkle">
              Si usás más de 500 mensajes, te conviene el Pro.
            </p>

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_starter)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Empezar con Base
            </a>

            <p className="mt-3 text-center text-[11px] text-white/30">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

          {/* ── Pro ── */}
          <div
            className="flex flex-col rounded-3xl p-8 ring-2 ring-periwinkle"
            style={{ background: "rgba(145,136,245,0.07)" }}
          >
            <span className="inline-flex w-fit items-center rounded-full bg-periwinkle/25 px-3 py-1 text-[11px] font-semibold text-periwinkle">
              Pro
            </span>

            <h3 className="font-display mt-4 text-[20px] font-black text-white">
              Flikker Pro
            </h3>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[15px] font-semibold text-white/30 line-through">
                  ${fmt(PRO_REGULAR)}
                </span>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400">
                  Oferta lanzamiento
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-1.5">
                <span className="font-display text-[52px] font-black leading-none tracking-tight text-white">
                  ${fmt(PRO_PROMO)}
                </span>
                <span className="text-sm text-white/40">UYU / mes</span>
              </div>
            </div>

            <p className="mt-3 text-[13px] leading-[1.6] text-white/50">
              Para negocios que quieren aprovechar su reputación al máximo y
              llegar a más clientes.
            </p>

            <div className="my-6 h-px bg-white/8" />

            <FeatureList features={PRO_FEATURES} />

            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.pricing_pro)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center rounded-2xl bg-periwinkle px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(145,136,245,0.4)] transition-all hover:opacity-90"
            >
              Empezar con Pro
            </a>

            <p className="mt-3 text-center text-[11px] text-white/30">
              Sin contrato · cancelás cuando querés
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
