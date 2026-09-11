import type { Metadata } from "next";

import { ComoEmpezarPage } from "@/components/sections/ComoEmpezarPage";

export const metadata: Metadata = {
  title: "Cómo empezar · Flikker",
  description:
    "Guía completa para implementar Flikker en tu negocio. Configuralo por tu cuenta o con ayuda de nuestro equipo. Paso a paso, desde la creación hasta el primer cliente retenido.",
  alternates: { canonical: "https://flikker.uy/como-empezar" },
  openGraph: {
    type: "website",
    url: "https://flikker.uy/como-empezar",
    title: "Cómo empezar con Flikker",
    description:
      "Configurá Flikker a tu ritmo o con acompañamiento. Todo el proceso, paso a paso.",
    locale: "es_UY",
  },
};

export default function ComoEmpezar() {
  return <ComoEmpezarPage />;
}
