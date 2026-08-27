import Image from "next/image";

const CLIENTS = [
  {
    photo: "/landing/businesses/nueva-fraternidad-exterior.webp",
    logo: "/clientes/nueva-fraternidad-logo-transparent.png",
    name: "Bar Nueva Fraternidad",
    logoClassName: "h-28 w-52",
    bareLogo: true,
  },
  {
    photo: "/landing/businesses/taza-calavera-local.jpg",
    logo: "/clientes/taza-calavera-logo.png",
    name: "Taza Calavera",
    logoClassName: "h-28 w-28",
    bareLogo: true,
  },
  {
    photo: "/landing/businesses/cafeterias.png",
    logo: "/clientes/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(6).svg",
    name: "La Vida en Rosa",
    logoClassName: "h-32 w-32 scale-[1.35]",
    bareLogo: true,
  },
] as const;

const CAROUSEL_CLIENTS = [...CLIENTS, ...CLIENTS];

const DEPTH_STYLES = [
  "sm:-translate-y-3 sm:-rotate-[1.5deg] sm:scale-[0.96]",
  "sm:translate-y-4 sm:rotate-[1deg] sm:scale-[1.02]",
  "sm:-translate-y-1 sm:-rotate-[0.5deg] sm:scale-[0.985]",
] as const;

export function ClientLogoCarousel() {
  return (
    <section
      id="clientes"
      aria-labelledby="client-logo-carousel-title"
      className="overflow-hidden bg-[#f7f6f2] py-16 sm:py-20"
    >
      <div className="mx-auto mb-9 max-w-[1200px] px-5 sm:mb-11 sm:px-8 lg:px-6 xl:px-0">
        <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7767db]">
          <span className="h-px w-5 bg-[#7767db]/55" aria-hidden="true" />
          En negocios reales
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="client-logo-carousel-title"
            className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#242129] sm:text-4xl"
          >
            Marcas que convierten visitas en clientes que vuelven.
          </h2>
          <p className="max-w-sm text-sm leading-6 text-[#77717d] sm:text-right">
            Negocios reales que ya forman parte de la experiencia Flikker.
          </p>
        </div>
      </div>

      <div className="relative [perspective:1200px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[#f7f6f2] to-transparent sm:w-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[#f7f6f2] to-transparent sm:w-20"
        />

        <div className="client-marquee-track flex w-max py-10 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] sm:py-12">
          <ClientGroup />
          <ClientGroup duplicate />
        </div>
      </div>
    </section>
  );
}

function ClientGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
    >
      {CAROUSEL_CLIENTS.map((client, index) => (
        <article
          key={`${client.logo}-${index}`}
          className={`group relative aspect-[4/5] w-[210px] shrink-0 overflow-hidden rounded-[28px] border border-white/50 bg-[#d8d2ca] shadow-[0_28px_65px_rgba(31,22,42,0.20),0_8px_20px_rgba(31,22,42,0.10)] transition-[transform,box-shadow] duration-500 hover:z-10 hover:-translate-y-3 hover:rotate-0 hover:scale-[1.025] hover:shadow-[0_36px_80px_rgba(31,22,42,0.26),0_12px_28px_rgba(31,22,42,0.14)] sm:w-[270px] lg:w-[310px] ${DEPTH_STYLES[index % DEPTH_STYLES.length]}`}
        >
          <Image
            src={client.photo}
            alt={duplicate ? "" : `Local de ${client.name}`}
            fill
            sizes="(min-width: 1024px) 310px, (min-width: 640px) 270px, 210px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/[0.04]"
          />

          <div
            className={
              client.bareLogo
                ? "absolute inset-x-0 bottom-4 flex h-32 items-center justify-center px-5 sm:bottom-5"
                : "absolute inset-x-4 bottom-4 flex min-h-24 items-center justify-center overflow-hidden rounded-[20px] border border-white/50 bg-white/90 px-5 shadow-[0_12px_35px_rgba(18,12,25,0.16)] backdrop-blur-md sm:inset-x-5 sm:bottom-5"
            }
          >
            <Image
              src={client.logo}
              alt={duplicate ? "" : client.name}
              width={160}
              height={80}
              className={`${client.logoClassName} select-none object-contain ${client.bareLogo ? "drop-shadow-[0_8px_18px_rgba(20,12,24,0.36)]" : ""}`}
              draggable={false}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
