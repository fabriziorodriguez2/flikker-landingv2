import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "Cómo responder reseñas negativas sin perder clientes · Flikker",
};

const WA = "Hola! Leí el artículo sobre reseñas negativas en Flikker y quiero saber cómo aplicarlo en mi negocio.";

export default function ResenasNegativasPage() {
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
                <span className="text-[13px] text-neutral-400">5 min · 10 May 2026</span>
              </div>
              <h1 className="font-display mt-5 text-[34px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[50px]">
                Cómo responder reseñas negativas sin perder clientes
              </h1>
              <p className="mt-5 text-lg leading-[1.7] text-neutral-500">
                Una mala reseña no es el fin. Con la respuesta correcta, podés convertirla en la prueba más potente de que tu negocio sabe escuchar — y eso vale más que diez reseñas de cinco estrellas.
              </p>
            </div>

            {/* Visual strip */}
            <div
              className="mt-10 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{ background: "#1a1a2e", height: 220 }}
            >
              <div className="w-full max-w-[280px] space-y-3 px-4">
                <div className="rounded-xl bg-white/10 px-4 py-3">
                  <div className="flex gap-0.5 text-[16px] leading-none">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white/20">★★★★</span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-[1.5] text-white/55">
                    "El servicio tardó más de lo esperado y nadie nos avisó..."
                  </p>
                </div>
                <div className="ml-5 rounded-xl border border-white/10 bg-white/6 px-4 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-periwinkle">Respuesta del dueño</p>
                  <p className="mt-1 text-[11px] leading-[1.5] text-white/55">
                    "Gracias por el feedback, tenés razón. Ya corregimos el proceso y te contactamos para resolverlo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <article className="px-6 pb-16 md:px-8">
          <div className="mx-auto max-w-3xl space-y-10 text-[16px] leading-[1.85] text-neutral-600">

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Por qué importa más de lo que creés
              </h2>
              <p className="mt-4">
                El 89% de los consumidores lee las respuestas del negocio a las reseñas negativas antes de decidir si comprar. No solo miran la queja — miran cómo reaccionás. Una respuesta empática y rápida puede convertir a un cliente insatisfecho en un defensor de tu marca, y convencer a futuros clientes de que tu negocio es confiable.
              </p>
              <p className="mt-4">
                El error más común es ignorar las reseñas negativas o responder a la defensiva. Ambos enfoques dañan tu reputación más que la reseña original.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El marco de 4 pasos para responder bien
              </h2>

              <div className="mt-6 space-y-6">
                <Step number="01" title="Agradecé el feedback, siempre">
                  <p>
                    Empezá por agradecer, sin importar qué tan injusta te parezca la reseña. "Gracias por tomarte el tiempo de comentar" desarma la confrontación y demuestra madurez. No es rendirse — es liderar la conversación.
                  </p>
                </Step>

                <Step number="02" title="Reconocé el problema sin excusas">
                  <p>
                    Si el cliente tuvo una mala experiencia, reconocelo. No hace falta que tengas razón o que estés de acuerdo en todo. "Entendemos que la espera fue más larga de lo que esperabas y eso no estuvo bien de nuestra parte" es poderoso porque es honesto.
                  </p>
                  <p className="mt-3">
                    Evitá el clásico "lamentamos que hayas sentido eso" — suena a que la culpa es de la percepción del cliente, no de la realidad. La gente lo nota.
                  </p>
                </Step>

                <Step number="03" title="Ofrecé una solución concreta">
                  <p>
                    No te quedes en las disculpas. Si podés resolver algo, decilo: un reembolso, una nueva visita sin cargo, un descuento, o simplemente una llamada. Y si el problema fue interno y ya lo corregiste, mencionalo — demuestra que escuchás y actuás.
                  </p>
                </Step>

                <Step number="04" title="Mové la conversación offline">
                  <p>
                    Las reseñas son públicas. Los detalles, no. Terminá siempre invitando al cliente a contactarte directamente: "Te invitamos a escribirnos a [contacto] para que podamos resolverlo personalmente." Esto muestra disposición y evita el intercambio público.
                  </p>
                </Step>
              </div>
            </section>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-periwinkle pl-6 text-[18px] font-medium italic leading-[1.6] text-neutral-700">
              "Una reseña negativa bien respondida convierte más que diez reseñas perfectas en silencio."
            </blockquote>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                Ejemplo real: la respuesta que no debés dar vs. la que sí
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-500">❌ Lo que no funciona</p>
                  <p className="mt-3 text-[13px] italic leading-[1.6] text-red-800">
                    "Lamentamos que hayas sentido eso. Nosotros siempre hacemos todo bien y no tenemos quejas de otros clientes. Quizás hubo un malentendido."
                  </p>
                  <p className="mt-3 text-[12px] text-red-600">
                    Defensivo, invalida al cliente, suena falso.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">✓ Lo que sí funciona</p>
                  <p className="mt-3 text-[13px] italic leading-[1.6] text-emerald-900">
                    "Gracias por contarnos. Tenés razón, ese día tuvimos un problema con los tiempos y no debió pasar. Ya lo corregimos. Si querés, escribinos directo para arreglarlo personalmente."
                  </p>
                  <p className="mt-3 text-[12px] text-emerald-700">
                    Empático, asume responsabilidad, ofrece solución.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                El timing importa tanto como el texto
              </h2>
              <p className="mt-4">
                Responder dentro de las primeras 24 horas aumenta la probabilidad de que el cliente actualice su reseña. Después de 48–72 horas, la ventana se cierra: el cliente ya procesó su experiencia negativa y es mucho más difícil revertirla.
              </p>
              <p className="mt-4">
                Si gestionás el volumen de reseñas manualmente, es fácil perder track. Por eso los negocios que usan Flikker tienen una ventaja: el sistema detecta reseñas bajas antes de que lleguen a Google, lo que te da tiempo para resolver el problema en privado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                La reseña negativa que se convirtió en la mejor publicidad
              </h2>
              <p className="mt-4">
                Uno de nuestros clientes recibió una reseña de 2 estrellas de una clienta que esperó 40 minutos más de lo previsto. En vez de ignorarla, respondieron en menos de dos horas, se disculparon, explicaron que habían tenido una emergencia ese día, y le ofrecieron volver gratis.
              </p>
              <p className="mt-4">
                La clienta actualizó la reseña a 5 estrellas y escribió: "Al final el servicio fue increíble. Y la forma en que me atendieron cuando me quejé dice mucho de ellos."
              </p>
              <p className="mt-4">
                Ese comentario terminó siendo el más leído de su perfil de Google.
              </p>
            </section>

            <section>
              <h2 className="font-display text-[22px] font-black tracking-tight text-neutral-900">
                En resumen
              </h2>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li>Respondé siempre y rápido — el silencio es la peor respuesta.</li>
                <li>Agradecé, reconocé, resolvé, y mové la conversación offline.</li>
                <li>No uses el clásico "lamentamos que hayas sentido" — suena a excusa.</li>
                <li>Una buena respuesta pública convierte a futuros lectores en clientes.</li>
                <li>Si podés interceptar la queja antes de que llegue a Google, mejor todavía.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl bg-neutral-900 px-8 py-12 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
                ¿Querés proteger tu reputación?
              </p>
              <h3 className="font-display mt-3 text-[28px] font-black leading-[1.1] tracking-tight text-white md:text-[34px]">
                Filtrá las malas reseñas antes de que lleguen a Google.
              </h3>
              <p className="mt-3 text-base text-white/50">
                Flikker detecta experiencias negativas y te las manda a vos primero. Solo las buenas van a Google.
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
                <Link href="/blog/google-reviews" className="group rounded-2xl border border-neutral-100 p-5 transition-colors hover:border-periwinkle/30 hover:bg-neutral-50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-periwinkle">Estrategia</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.3] text-neutral-900 group-hover:text-periwinkle">
                    Por qué Google Reviews es el activo más subestimado de tu negocio
                  </p>
                </Link>
                <Link href="/blog/recurrencia" className="group rounded-2xl border border-neutral-100 p-5 transition-colors hover:border-periwinkle/30 hover:bg-neutral-50">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-periwinkle">Guía</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.3] text-neutral-900 group-hover:text-periwinkle">
                    5 formas de aumentar la recurrencia en tu local sin descuentos
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

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-periwinkle/10 text-[13px] font-black text-periwinkle">
        {number}
      </div>
      <div>
        <p className="font-bold text-neutral-900">{title}</p>
        <div className="mt-2 space-y-2 text-[15px]">{children}</div>
      </div>
    </div>
  );
}
