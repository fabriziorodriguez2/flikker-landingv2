/**
 * Flikker landing — constantes compartidas.
 *
 * Reemplazá WHATSAPP_NUMBER con el número real antes de publicar.
 * Formato E.164 sin el "+" (es lo que wa.me espera).
 */

export const WHATSAPP_NUMBER = "59891624988";

export const CALENDLY_URL = "https://calendly.com/fabrizio-rodriguez7274/30min";

type WhatsAppMessageKey =
  | "nav"
  | "hero"
  | "calculator"
  | "pricing_starter"
  | "pricing_pro"
  | "testimonials_beta"
  | "ctaFinal"
  | "floating";

export const WHATSAPP_MESSAGES: Record<WhatsAppMessageKey, string> = {
  nav: "Hola! Quiero saber más de Flikker para mi negocio.",
  hero: "Hola! Vi la landing de Flikker y quiero más reseñas en Google para mi negocio.",
  calculator:
    "Hola! Calculé el impacto en la landing y quiero estos números para mi negocio.",
  pricing_starter: "Hola! Me interesa el plan Starter de Flikker.",
  pricing_pro: "Hola! Me interesa el plan Pro de Flikker.",
  testimonials_beta:
    "Hola! Quiero ser de los primeros negocios en probar Flikker en beta.",
  ctaFinal:
    "Hola! Quiero probar Flikker para que más clientes vuelvan a mi negocio.",
  floating: "Hola! Me quedé con dudas mirando Flikker, ¿podemos hablar?",
};

export function buildWhatsAppUrl(message: string, number = WHATSAPP_NUMBER) {
  const cleanNumber = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const CALCULATOR_FORMULAS = {
  reviewsIn60Days: (customersPerMonth: number) =>
    Math.round(customersPerMonth * 2 * 0.15),

  reactivated: (customersPerMonth: number) =>
    Math.round(customersPerMonth * 0.08),

  slider: {
    min: 20,
    max: 1000,
    step: 10,
    default: 150,
  },
} as const;

export const NAV_LINKS = [
  { label: "Cómo funciona", href: "#solucion" },
  { label: "Precios", href: "#precios" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
] as const;
