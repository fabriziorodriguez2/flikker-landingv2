import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes y Precios · Flikker",
  description:
    "Compará los planes de Flikker y empezá a conseguir más reseñas en Google desde el primer mes. Un solo plan, todo incluido, sin letra chica. Garantía de 20 reseñas en 30 días.",
  alternates: { canonical: "https://flikker.website/planes" },
  openGraph: {
    type: "website",
    url: "https://flikker.website/planes",
    title: "Planes y Precios · Flikker",
    description:
      "Compará los planes de Flikker y empezá a conseguir más reseñas en Google desde el primer mes. Un solo plan, todo incluido, sin letra chica.",
    locale: "es_UY",
  },
};

export default function PlanesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
