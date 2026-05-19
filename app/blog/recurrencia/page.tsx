import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "5 formas de aumentar la recurrencia en tu local sin descuentos · Flikker",
};

const WA = "Hola! Leí el artículo sobre recurrencia en Flikker y quiero aplicarlo en mi negocio.";

export default function RecurrenciaPage() {
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
                  Guía
                </span>
                <span className="text-[13px] text-neutral-400">6 min · 2 May 2026</span>
              </div>
              <h1 className="font-display mt-5 text-[34px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[50px]">
                5 formas de aumentar la recurrencia en tu local sin descuentos
              </h1>
              <p className="mt-5 text-lg leading-[1.7] text-neutral-500">
                La fidelización no siempre pasa por bajar precios. De hecho, los descuentos entrenan a tus clientes a esperar ofertas antes de volver. Acá van cinco tácticas que funcionan en negocios físicos de Latinoamérica — sin regalar margen.
              </p>
            </div>

            {/* Visual strip */}
            <div
              className="mt-10 flex items-end justify-center overflow-hidden rounded-3xl px-8 pb-8"
              style={{ background: "#0a1f0a", height: 220 }}
            >
              <div className="flex w-full max-w-xs items-end justify-center gap-3">
                {[38, 52, 61, 74, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-lg"
                    style={{
                      height: h,
                      background: i === 4 ? "#4ade80" : `rgba(255,255,255,${0.1 + i * 0.05})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="px-6 pb-16 md:px-8">
          <div className="mx-auto max-w-3xl space-y-10 text-[16px] leading-[1.85] text-neutral-600">

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Por qué los descuentos son una trampa
              </h2>
              <p className="mt-4">
                Cada vez que hacés un descuento para traer de vuelta a un cliente, le estás enseñando una cosa: que tu precio normal no vale lo que pedís por él. Con el tiempo, ese cliente solo vuelve cuando hay promoción. Y cuando no hay, busca en otro lado.
              </p>
              <p className="mt-4">
                La recurrencia real no viene del precio — viene de la relación. Y construir una relación no requiere sacrificar margen. Requiere atención, consistencia y presencia.
              </p>
            </section>

            {/* 5 tactics */}
            <section className="space-y-8">
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Las 5 tácticas
              </h2>

              <Tactic number="1" title="Seguimiento post-visita automático">
                <p>
                  La mayoría de los negocios pierde al cliente en cuanto sale por la puerta. El seguimiento post-visita rompe ese ciclo: un mensaje de WhatsApp a las 24–48 horas después de la visita, agradeciendo y preguntando cómo estuvo la experiencia, mantiene tu negocio top of mind.
                </p>
                <p className="mt-3">
                  No tiene que ser promocional. "Hola [Nombre], ¿cómo te fue con el servicio de ayer?" es suficiente para generar una respuesta. Y una respuesta es el inicio de una relación.
                </p>
                <p className="mt-3">
                  Con Flikker, esto es automático: el sistema envía el mensaje por vos, en el momento justo, sin que tengas que recordarlo.
                </p>
              </Tactic>

              <Tactic number="2" title="Reactivación de clientes inactivos">
                <p>
                  Tenés clientes que vinieron una vez y no volvieron. Eso no significa que no les gustó — significa que no se acordaron. Un mensaje de reactivación a los 30, 45 o 60 días de inactividad puede traer de vuelta hasta un 15% de esa base.
                </p>
                <p className="mt-3">
                  El mensaje no tiene que ser un cupón. Puede ser tan simple como: "Hace un tiempo que no te vemos. ¿Todo bien? Cuando quieras, acá estamos." La cercanía funciona mejor que la oferta.
                </p>
              </Tactic>

              <Tactic number="3" title="Fechas especiales personalizadas">
                <p>
                  El cumpleaños de un cliente es el momento ideal para aparecer — no con descuento, sino con un saludo. "Feliz cumpleaños, [Nombre]. Cuando quieras venir, tenemos algo especial para vos" genera más impacto que cualquier anuncio genérico.
                </p>
                <p className="mt-3">
                  Si el "algo especial" es un gesto pequeño — un producto de muestra, prioridad en el turno, una atención extra — el cliente lo recuerda y lo cuenta. El boca a boca no se compra, se merece.
                </p>
              </Tactic>

              <Tactic number="4" title="Convertir cada visita en una historia">
                <p>
                  ¿Qué hace que tus clientes cuenten que fueron a tu negocio? No el precio — la experiencia. Un detalle inesperado, una atención personalizada, algo que nadie más hace. Identificá cuál es tu diferenciador real y amplificalo.
                </p>
                <p className="mt-3">
                  Un cliente que tiene una historia que contar vuelve para tener otra. Y trae a alguien la segunda vez.
                </p>
              </Tactic>

              <Tactic number="5" title="Prueba social como recordatorio">
                <p>
                  Cuando un cliente nuevo ve que otros ya confiaron en vos — y están satisfechos — baja la barrera de volver. Un widget de reseñas en tu sitio web, historias de Instagram con casos reales, o simplemente compartir una reseña nueva, recuerdan a tus clientes existentes que tomaron una buena decisión.
                </p>
                <p className="mt-3">
                  La prueba social no es solo para atraer nuevos clientes — también refuerza la lealtad de los que ya tenés.
                </p>
              </Tactic>
            </section>

            <blockquote className="border-l-2 border-periwinkle pl-6 text-[18px] font-medium italic leading-[1.6] text-neutral-700">
              "El cliente que vuelve no te busca por el precio. Te busca porque la última vez valió la pena."
            </blockquote>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Cuánto vale un cliente que vuelve
              </h2>
              <p className="mt-4">
                Calculalo de esta forma: si un cliente visita tu negocio en promedio 4 veces al año y gasta $1.500 por visita, su valor anual es $6.000. Si aumentás la recurrencia a 5 visitas — solo una más — ese mismo cliente vale $7.500.
              </p>
              <p className="mt-4">
                Ahora multiplicá eso por la cantidad de clientes que se fueron y no volvieron. ¿Cuánto estás dejando sobre la mesa por no tener un sistema de seguimiento?
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Por dónde empezar
              </h2>
              <p className="mt-4">
                No intentés implementar las 5 tácticas a la vez. Empezá por la que menos fricción requiere: el mensaje post-visita. Si ya tenés los números de tus clientes, podés empezar hoy.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Definí en qué momento querés contactar al cliente (24h, 48h, 72h post-visita).</li>
                <li>Escribí un mensaje corto, cálido y sin presión comercial.</li>
                <li>Medí cuántos responden y qué dicen.</li>
                <li>Iterá y automatizá cuando tengas el mensaje que funciona.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-neutral-900 px-8 py-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                ¿Querés automatizar la recurrencia?
              </p>
              <h3 className="font-display mt-3 text-[28px] font-black leading-[1.1] tracking-tight text-white md:text-[34px]">
                Flikker hace el seguimiento por vos, automáticamente.
              </h3>
              <p className="mt-3 text-base text-white/50">
                Mensajes post-visita, reactivación de inactivos y reseñas en Google — todo sin esfuerzo manual.
              </p>
              <a
                href={buildWhatsAppUrl(WA)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-periwinkle px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(145,136,245,0.45)] transition-all hover:bg-periwinkle/90"
              >
                Quiero saber más
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
                <Link href="/blog/google-reviews" className="group rounded-2xl border border-neutral-100 p-5 transition-colors hover:border-periwinkle/30 hover:bg-neutral-50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-periwinkle">Estrategia</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.3] text-neutral-900 group-hover:text-periwinkle">
                    Por qué Google Reviews es el activo más subestimado de tu negocio
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

function Tactic({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-periwinkle text-[13px] font-black text-white">
          {number}
        </div>
        <div>
          <p className="font-bold text-neutral-900">{title}</p>
          <div className="mt-3 space-y-2 text-[15px] text-neutral-600">{children}</div>
        </div>
      </div>
    </div>
  );
}
