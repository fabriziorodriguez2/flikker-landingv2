import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Star, MessageCircle, DollarSign } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Caso Gains: de 8 a 58 reseñas en Google y 6.7x ROI en 30 días",
  description:
    "Cómo Gains, tienda de ropa deportiva en Montevideo, pasó de 8 a 58 reseñas en menos de 30 días, subió su conversión un 37% y logró 6.7x de retorno usando Flikker. Todo automatizado.",
  alternates: { canonical: "https://flikker.website/casos/gains" },
  openGraph: {
    type: "article",
    url: "https://flikker.website/casos/gains",
    title: "Caso Gains: de 8 a 58 reseñas en Google y 6.7x ROI en 30 días",
    description:
      "Cómo Gains pasó de 8 a 58 reseñas, subió su conversión un 37% y logró 6.7x de retorno usando Flikker en 30 días.",
    locale: "es_UY",
    publishedTime: "2026-05-16",
  },
};

const WA_MESSAGE = "Hola! Leí el caso de Gains en Flikker y quiero resultados similares para mi negocio.";

export default function GainsCasePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="px-6 pb-16 pt-32 md:px-8">
          <div className="mx-auto max-w-3xl">

            <Link
              href="/#casos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-periwinkle"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver a casos
            </Link>

            <div className="mt-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-periwinkle/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-periwinkle">
                  Caso de éxito
                </span>
                <span className="text-[13px] text-neutral-400">Tienda de ropa deportiva · Montevideo</span>
              </div>

              <h1 className="font-display mt-5 text-[36px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[54px]">
                Cómo Gains pasó de 8 a 58 reseñas y subió un 37% su conversión
              </h1>

              <p className="mt-5 text-lg leading-[1.7] text-neutral-500">
                Gains es una tienda de ropa deportiva en Montevideo. Antes de Flikker, sus clientes
                salían satisfechos pero nadie dejaba reseña. En menos de 30 días, eso cambió por completo.
              </p>
            </div>

            {/* Stats bar */}
            <div className="mt-10 grid grid-cols-2 divide-neutral-100 rounded-3xl border border-neutral-200 bg-neutral-50 md:grid-cols-4">
              {[
                { icon: Star, value: "8 → 58", label: "Reseñas en Google", highlight: false },
                { icon: TrendingUp, value: "+37%", label: "Tasa de conversión", highlight: false },
                { icon: DollarSign, value: "6.7x", label: "ROI en 30 días", highlight: true },
                { icon: MessageCircle, value: "30 días", label: "Para ver resultados", highlight: false },
              ].map(({ icon: Icon, value, label, highlight }) => (
                <div
                  key={label}
                  className={[
                    "flex flex-col items-center px-4 py-6 text-center [&:not(:last-child)]:border-r [&:nth-child(2)]:border-b md:[&:nth-child(2)]:border-b-0 [&:nth-child(1)]:border-b md:[&:nth-child(1)]:border-b-0",
                    highlight ? "bg-periwinkle/5" : "",
                  ].join(" ")}
                >
                  <Icon className={highlight ? "h-4 w-4 text-periwinkle" : "h-4 w-4 text-periwinkle"} strokeWidth={2} />
                  <p className={[
                    "font-display mt-2 font-black leading-none tracking-tight",
                    highlight ? "text-[32px] text-periwinkle md:text-[40px]" : "text-[22px] text-neutral-900 md:text-[28px]",
                  ].join(" ")}>
                    {value}
                  </p>
                  <p className={highlight ? "mt-1 text-[12px] font-semibold text-periwinkle/70" : "mt-1 text-[12px] text-neutral-500"}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Logo visual */}
        <section className="px-6 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a]" style={{ height: 300 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/gains-logo.png"
                  alt="Logo de Gains"
                  width={140}
                  height={140}
                  className="rounded-2xl object-contain"
                  unoptimized
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-8 pb-6 pt-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">Tienda de ropa deportiva · Montevideo</p>
                <p className="mt-1 text-[20px] font-bold text-white">Gains</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="px-6 py-16 md:px-8">
          <div className="mx-auto max-w-3xl space-y-10 text-[16px] leading-[1.8] text-neutral-600">

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El problema
              </h2>
              <p className="mt-4">
                Gains tenía clientes fieles y buena atención, pero su presencia en Google no lo reflejaba.
                Solo 8 reseñas en total, muchas de ellas viejas. Los potenciales clientes buscaban
                "tienda de ropa deportiva Montevideo" y Gains aparecía, pero sin suficiente prueba social
                para generar confianza.
              </p>
              <p className="mt-4">
                Pedían reseñas de forma manual, a veces con un cartel en el local, a veces
                recordándoselo al cliente en caja. La tasa de conversión era baja: muchos visitaban
                la ficha de Google pero pocos compraban o visitaban el local.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Qué implementamos
              </h2>
              <p className="mt-4">
                Con Flikker activamos tres cosas desde el primer día:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Mensaje automático por WhatsApp a cada cliente después de su visita, con un link directo a Google para dejar la reseña.",
                  "Filtro inteligente: los clientes que tuvieron una mala experiencia son redirigidos a un formulario interno, no a Google.",
                  "Widget de reseñas embebido en la web de Gains, mostrando las últimas 5 estrellas en tiempo real.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-periwinkle" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-periwinkle pl-6 text-[18px] font-medium italic leading-[1.6] text-neutral-700">
              "No teníamos ni idea de que era tan fácil. Lo activamos un viernes y el lunes ya teníamos
              3 reseñas nuevas sin haberle pedido nada a nadie."
            </blockquote>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Los resultados
              </h2>
              <p className="mt-4">
                En los primeros 30 días, Gains pasó de 8 a 58 reseñas en Google. Pero el número
                más importante fue otro: la tasa de conversión de visitantes del perfil de Google
                a clientes reales subió un <strong className="text-neutral-900">37%</strong>.
              </p>
              <p className="mt-4">
                Más reseñas significó mejor posicionamiento en búsquedas locales. Más posicionamiento
                significó más visitas al perfil. Y con el widget de reseñas en la web, esas visitas
                convirtieron más.
              </p>

              {/* ROI highlight */}
              <div className="mt-6 rounded-2xl bg-periwinkle/8 border border-periwinkle/20 px-6 py-5 flex items-center gap-5">
                <p className="font-display text-[64px] font-black leading-none tracking-tight text-periwinkle shrink-0">
                  6.7x
                </p>
                <div>
                  <p className="text-[15px] font-bold text-neutral-900">Retorno sobre la inversión</p>
                  <p className="mt-1 text-[13px] leading-[1.6] text-neutral-500">
                    Por cada peso invertido en Flikker, Gains recuperó 6.7x en ingresos directamente
                    atribuibles a clientes que llegaron a través de Google, en los primeros 30 días.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Qué sigue
              </h2>
              <p className="mt-4">
                Gains está activando el módulo de reactivación de clientes inactivos: WhatsApps
                automáticos para clientes que no volvieron en más de 45 días, con una oferta especial.
                La base de datos ya está, el sistema ya funciona.
              </p>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl bg-neutral-900 px-8 py-12 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
              ¿Querés resultados similares?
            </p>
            <h3 className="font-display mt-3 text-[28px] font-black leading-[1.1] tracking-tight text-white md:text-[36px]">
              Empezá con Flikker hoy.
            </h3>
            <p className="mt-3 text-base text-white/50">
              Setup en menos de 24h. Sin contratos. Sin letra chica.
            </p>
            <a
              href={buildWhatsAppUrl(WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-periwinkle px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90"
            >
              Quiero esto para mi negocio
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
