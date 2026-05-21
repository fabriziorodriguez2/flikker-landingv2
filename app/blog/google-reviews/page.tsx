import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "Por qué Google Reviews es el activo más subestimado de tu negocio",
  description:
    "El 87% de los consumidores lee reseñas antes de visitar un local. Descubrí cómo Google Reviews impacta tu visibilidad en Google Maps, tu conversión y cómo automatizarlas con WhatsApp.",
  alternates: { canonical: "https://flikker.uy/blog/google-reviews" },
  openGraph: {
    type: "article",
    url: "https://flikker.uy/blog/google-reviews",
    title: "Por qué Google Reviews es el activo más subestimado de tu negocio",
    description:
      "El 87% de los consumidores lee reseñas antes de visitar un local. Descubrí cómo Google Reviews impacta tu visibilidad y conversión.",
    locale: "es_UY",
    publishedTime: "2026-04-28",
  },
};

const WA = "Hola! Leí el artículo sobre Google Reviews en Flikker y quiero saber cómo conseguir más reseñas para mi negocio.";

export default function GoogleReviewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="px-6 pb-12 pt-32 md:px-8">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition-colors hover:text-periwinkle"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver al blog
            </Link>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-periwinkle/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-periwinkle">
                  Estrategia
                </span>
                <span className="text-[13px] text-neutral-400">4 min · 28 Abr 2026</span>
              </div>
              <h1 className="font-display mt-5 text-[34px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[50px]">
                Por qué Google Reviews es el activo más subestimado de tu negocio
              </h1>
              <p className="mt-5 text-lg leading-[1.7] text-neutral-500">
                El 87% de los consumidores lee reseñas antes de visitar un local. Sin embargo, la mayoría de los negocios trata las reseñas como algo que "pasa solo" — y esa pasividad les cuesta clientes todos los días.
              </p>
            </div>

            {/* Visual strip */}
            <div
              className="mt-10 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{ background: "#1c0f00", height: 220 }}
            >
              <div className="text-center">
                <p className="font-display text-[72px] font-black leading-none tracking-tight text-white">4.9</p>
                <div className="mt-2 flex justify-center gap-1 text-[24px] leading-none text-yellow-400">
                  ★★★★★
                </div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">
                  Google Reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="px-6 pb-16 md:px-8">
          <div className="mx-auto max-w-3xl space-y-10 text-[16px] leading-[1.85] text-neutral-600">

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El buscador que ya no tenés que pagar
              </h2>
              <p className="mt-4">
                Cuando alguien busca "peluquería cerca" o "dentista en [tu ciudad]", Google no muestra los que pagan más publicidad — muestra los que tienen mejor reputación. Las reseñas son uno de los tres factores principales que Google usa para rankear negocios locales en Maps y en búsqueda.
              </p>
              <p className="mt-4">
                Eso significa que cada reseña nueva es, literalmente, publicidad gratuita. No te cuesta un peso por clic. No caduca. Y genera más confianza que cualquier aviso.
              </p>
            </section>

            {/* Stats callout */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { stat: "87%", desc: "de los consumidores lee reseñas antes de visitar un local" },
                { stat: "3.3x", desc: "más probable que un negocio con 4.5★ sea elegido sobre uno con 3.5★" },
                { stat: "68%", desc: "de los clientes dice que las reseñas positivas aumentan su confianza en el negocio" },
              ].map(({ stat, desc }) => (
                <div key={stat} className="rounded-2xl bg-neutral-50 border border-neutral-100 p-5 text-center">
                  <p className="font-display text-[36px] font-black leading-none tracking-tight text-periwinkle">{stat}</p>
                  <p className="mt-2 text-[13px] leading-[1.5] text-neutral-500">{desc}</p>
                </div>
              ))}
            </div>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El efecto compuesto que nadie te cuenta
              </h2>
              <p className="mt-4">
                Las reseñas no son lineales. Pasás de 10 a 20 reseñas y tu visibilidad sube un poco. Pero cuando pasás de 20 a 50, algo cambia: Google empieza a mostrarte en posiciones donde antes no aparecías, llegan más visitas a tu perfil, y esas visitas ven más reseñas recientes, lo que convierte mejor.
              </p>
              <p className="mt-4">
                Uno de nuestros clientes pasó de 8 a 58 reseñas en 30 días con Flikker. El resultado no fue solo "más reseñas" — fue un aumento del 37% en la tasa de conversión de visitantes a clientes reales. El volumen de reseñas cambia cómo te perciben antes de que lleguen a tu puerta.
              </p>
            </section>

            <blockquote className="border-l-2 border-periwinkle pl-6 text-[18px] font-medium italic leading-[1.6] text-neutral-700">
              "Tu perfil de Google es tu vitrina más visitada — y la mayoría de los negocios la tiene desactualizada."
            </blockquote>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Por qué la mayoría de los negocios tiene pocas reseñas
              </h2>
              <p className="mt-4">
                No es porque sus clientes estén insatisfechos. Es porque los clientes satisfechos no sienten urgencia de dejar una reseña — la experiencia fue buena y siguen con su día. Los que tuvieron una mala experiencia, en cambio, sí tienen motivación para escribir.
              </p>
              <p className="mt-4">
                El resultado es una asimetría: las pocas reseñas que existen tienden a tener un sesgo negativo, no porque el negocio sea malo, sino porque nadie le pidió al cliente feliz que escribiera.
              </p>
              <p className="mt-4">
                La solución no es rogar por reseñas en el momento del pago — eso es incómodo y tiene una tasa de conversión muy baja. La solución es pedirlas en el momento correcto, por el canal correcto, con el mensaje correcto.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El canal y el momento lo cambian todo
              </h2>
              <p className="mt-4">
                WhatsApp tiene una tasa de apertura del 98% — versus el 20–25% del email. Cuando le mandás a un cliente satisfecho un mensaje de WhatsApp 24 horas después de su visita, en el momento en que aún recuerda la experiencia positiva, la probabilidad de que deje una reseña se multiplica.
              </p>
              <p className="mt-4">
                No necesitás un script largo. "Hola [Nombre], ¿cómo te fue ayer? Si querés contarnos en Google lo que viviste, lo apreciaríamos mucho: [link directo]" es suficiente.
              </p>
              <p className="mt-4">
                Eso sí: hacerlo manualmente para cada cliente es insostenible. Ahí es donde entra la automatización.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Cómo se ve un perfil bien trabajado
              </h2>
              <p className="mt-4">
                Un negocio con 4.8 estrellas y 60 reseñas recientes se ve así ante un potencial cliente:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Confiable: muchas personas ya probaron el servicio y están conformes.</li>
                <li>Activo: las reseñas son recientes, el negocio sigue operando y mejorando.</li>
                <li>Responsivo: si respondiste las reseñas (incluso las negativas), demostrás que te importa el feedback.</li>
                <li>Rankeado: Google te muestra más alto porque interpreta que sos relevante y confiable.</li>
              </ul>
              <p className="mt-4">
                Ese círculo virtuoso no se logra esperando que los clientes reseñen solos. Se construye con un sistema.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Por dónde empezar hoy
              </h2>
              <p className="mt-4">
                Si todavía no tenés un proceso para pedir reseñas, empezá por lo más simple:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-5">
                <li>Verificá y completá tu perfil de Google Business al 100%: foto, horarios, descripción, categoría.</li>
                <li>Conseguí el link directo a tu perfil de Google para dejar reseñas (Google lo genera en tu panel de Business).</li>
                <li>Enviá ese link a tus últimos 20 clientes que tuvieron una buena experiencia, con un mensaje personalizado.</li>
                <li>Medí cuántos responden y calculá tu tasa de conversión base.</li>
                <li>Automatizá ese proceso para que ocurra con cada cliente, siempre.</li>
              </ol>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-neutral-900 px-8 py-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                ¿Querés más reseñas en Google?
              </p>
              <h3 className="font-display mt-3 text-[28px] font-black leading-[1.1] tracking-tight text-white md:text-[34px]">
                Automatizá el pedido de reseñas con Flikker.
              </h3>
              <p className="mt-3 text-base text-white/50">
                Cada cliente que atendés recibe un WhatsApp automático en el momento justo. Las buenas reseñas van a Google. Las malas, te llegan a vos primero.
              </p>
              <a
                href={buildWhatsAppUrl(WA)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-periwinkle px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90"
              >
                Quiero más reseñas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Next reads */}
            <div className="mt-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-neutral-400">Seguí leyendo</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Link href="/blog/resenas-negativas" className="group rounded-2xl border border-neutral-100 p-5 transition-colors hover:border-periwinkle/30 hover:bg-neutral-50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-periwinkle">Estrategia</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.3] text-neutral-900 group-hover:text-periwinkle">
                    Cómo responder reseñas negativas sin perder clientes
                  </p>
                </Link>
                <Link href="/casos/gains" className="group rounded-2xl border border-neutral-100 p-5 transition-colors hover:border-periwinkle/30 hover:bg-neutral-50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-periwinkle">Caso de Éxito</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.3] text-neutral-900 group-hover:text-periwinkle">
                    Gains: de 8 a 58 reseñas y 6.7x ROI en 30 días
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
