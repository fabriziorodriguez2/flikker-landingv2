import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://flikker.uy";
const SITE_NAME = "Flikker";
const TITLE = "Flikker | Retención, reseñas y clientes que vuelven";
const DESCRIPTION =
  "Flikker ayuda a negocios físicos a registrar visitas, retener clientes, conseguir más reseñas en Google y recuperar por WhatsApp a quienes dejaron de venir.";

const PLAUSIBLE_DOMAIN =
  process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "flikker.uy";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Flikker",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Flikker" }],
  keywords: [
    "retención de clientes",
    "programa de retención",
    "retener clientes negocios físicos",
    "programa de beneficios para negocios",
    "programa de recompensas digital",
    "tarjeta de fidelización digital",
    "recuperar clientes por WhatsApp",
    "reactivación de clientes por WhatsApp",
    "reseñas de Google para negocios",
    "más reseñas en Google Maps",
    "QR para negocios locales",
    "NFC retención clientes",
    "software retención negocios físicos Uruguay",
    "programa fidelización negocios Uruguay",
    "reputación online negocio local",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_UY",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/brand/flikker-isotype.svg", type: "image/svg+xml" }],
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "es-UY",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Base",
      priceCurrency: "UYU",
      price: "0",
    },
    {
      "@type": "Offer",
      name: "Plan Pro",
      priceCurrency: "UYU",
      price: "1000",
    },
  ],
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/flikker-isotype.svg`,
  description: DESCRIPTION,
  areaServed: "UY",
  inLanguage: "es-UY",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Spanish",
  },
};

/** FAQ schema — espejo exacto de las PRIMARY_FAQS de FAQ.tsx */
const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Flikker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flikker ayuda a que los clientes de tu negocio vuelvan más seguido. Cada visita puede acercarlos a una recompensa y, si un cliente deja de venir, Flikker puede intentar recuperarlo automáticamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ponés un QR o NFC de Flikker en tu local. El cliente lo escanea cuando visita el negocio, registra su visita y ve su progreso hacia la próxima recompensa.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis clientes tienen que descargar una app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Todo funciona desde el navegador del teléfono. El cliente escanea el QR o acerca su teléfono al NFC y continúa desde ahí.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funcionan las recompensas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vos definís la recompensa y cuántas visitas hacen falta para alcanzarla. Puede ser un café, un producto, un descuento, un 2×1 o cualquier beneficio que tenga sentido para tu negocio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se canjea una recompensa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando el cliente completa las visitas necesarias, la recompensa se desbloquea y recibe un QR de canje. El empleado lo escanea con la cámara de su teléfono y confirma el beneficio.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si un cliente deja de venir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flikker puede detectar que un cliente que antes visitaba el negocio dejó de aparecer y contactarlo por WhatsApp para intentar traerlo de vuelta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia con una tarjeta de fidelidad tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una tarjeta de papel solo muestra el progreso de alguien. Flikker además registra visitas, muestra quién vuelve, gestiona el canje y puede actuar cuando un cliente deja de venir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Para qué tipo de negocios funciona mejor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Especialmente para negocios donde un mismo cliente puede volver varias veces al mes: cafeterías, panaderías, heladerías, peluquerías, comida rápida y otros comercios de alta recurrencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Flikker también ayuda a conseguir reseñas de Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Después de una buena experiencia, Flikker puede ofrecerle al cliente la posibilidad de compartirla también en Google. Las reseñas acompañan al sistema de recurrencia, pero no son el centro del producto.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-body text-midnight">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        {children}
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.outbound-links.tagged-events.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
