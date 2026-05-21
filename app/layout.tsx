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
const TITLE = "Flikker｜Más reseñas de Google para tu negocio, automático";
const DESCRIPTION =
  "Automatizá las reseñas en Google de tu negocio con WhatsApp. Flikker envía mensajes automáticos a cada cliente tras su visita o compra. Las buenas van a Google; las malas te llegan primero a vos. Sin esfuerzo manual.";

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
    "reseñas Google negocio",
    "automatizar reseñas Google",
    "pedir reseñas WhatsApp",
    "más reseñas Google Maps",
    "reputación online negocio local",
    "Google Business Profile reseñas",
    "reseñas automáticas WhatsApp",
    "SEO local negocios",
    "mejorar calificación Google",
    "reseñas para restaurantes",
    "reseñas para negocios Uruguay",
    "software reseñas negocios locales",
    "conseguir reseñas Google automático",
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
      name: "Plan Flikker",
      priceCurrency: "UYU",
      price: "2900",
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

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo sabe Flikker cuándo mandar el mensaje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podemos conectarlo a tu operación o darte un panel simple para marcar ventas, visitas o servicios completados. El mensaje sale después, cuando el cliente ya terminó su experiencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si me dejan una reseña mala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ese es el punto clave. Flikker filtra: si la experiencia fue buena, llevamos al cliente a Google. Si fue mala, te llega a vos primero en privado para que puedas resolverlo antes de que se vuelva público.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito tener web o Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Si no tenés web o Instagram, te lo diseñamos y creamos. Y si tampoco tenés tu ficha de Google Business Profile, también te ayudamos a dejarla pronta durante el setup.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es legal pedir reseñas por WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Siempre que la persona haya dejado su número para contacto comercial o de atención, podés escribirle. Flikker además suma un opt-out visible en cada mensaje.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa con los datos de mis clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Están en servidores seguros, cifrados, y nunca se comparten con terceros. Cumplimos con la Ley 18.331 de Protección de Datos Personales de Uruguay.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en configurarse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 24 y 48 horas. Vos nos pasás una primera lista o fuente de clientes. El resto lo hacemos nosotros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo cancelar cuando quiera?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. No hay contratos mínimos ni cláusulas raras. Si querés pausar o cancelar, mandás un WhatsApp y listo.",
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
