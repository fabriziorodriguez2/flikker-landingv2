import Image from "next/image";

const BUSINESSES = [
  {
    name: "Cafeterías",
    cadence: "Varias veces por semana",
    photo: "/landing/businesses/cafeterias.png",
  },
  {
    name: "Panaderías",
    cadence: "Una compra cotidiana",
    photo: "/landing/businesses/panaderias-interior.png",
  },
  {
    name: "Heladerías",
    cadence: "Un antojo que se repite",
    photo: "/landing/businesses/heladerias.png",
  },
  {
    name: "Peluquerías",
    cadence: "Una rutina que vuelve",
    photo: "/landing/businesses/peluquerias.png",
  },
  {
    name: "Comida rápida",
    cadence: "Elección frecuente",
    photo: "/landing/businesses/comida-rapida.png",
  },
] as const;

export function ClientCarousel() {
  return (
    <section
      aria-labelledby="target-business-title"
      className="bg-[#f7f6f2] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-6 xl:px-0">
        <div className="grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:gap-6 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6552c7]">
              <span className="h-px w-8 bg-[#6552c7]/55" aria-hidden="true" />
              Dónde funciona mejor
            </p>
            <h2
              id="target-business-title"
              className="max-w-3xl font-display text-[clamp(2.45rem,5.2vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#201d24]"
            >
              Para negocios que forman parte de la rutina.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#68626c] lg:col-span-4 lg:col-start-9 lg:text-lg lg:leading-8">
            Flikker funciona mejor cuando tus clientes pueden volver seguido y
            alcanzar una recompensa en poco tiempo. Así, cada avance mantiene
            visible un próximo motivo para regresar.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-14 lg:grid-cols-5 lg:gap-x-6">
          {BUSINESSES.map((business, position) => (
            <article
              key={business.name}
              className={position === BUSINESSES.length - 1 ? "col-span-2 lg:col-span-1" : undefined}
            >
              <div className="group relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#d8d2ca]">
                <Image
                  src={business.photo}
                  alt={`Local de ${business.name.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 224px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="font-display text-base font-semibold tracking-[-0.025em] text-white sm:text-lg">
                    {business.name}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                    {business.cadence}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-2xl border-l-2 border-[#6552c7] pl-5 text-sm leading-6 text-[#68626c] sm:mt-16 sm:text-base sm:leading-7">
          La clave no es el rubro por sí solo: es que exista una frecuencia real
          de regreso y que el premio se sienta alcanzable, no lejano.
        </p>
      </div>
    </section>
  );
}
