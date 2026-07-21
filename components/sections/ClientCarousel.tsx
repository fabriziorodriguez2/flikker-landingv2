const LOGOS = [
  {
    src: "/clientes/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).svg",
    alt: "Marca cliente Flikker",
  },
  {
    src: "/clientes/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(4).svg",
    alt: "Marca cliente Flikker",
  },
  {
    src: "/clientes/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(5).svg",
    alt: "Marca cliente Flikker",
  },
  {
    src: "/clientes/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(6).svg",
    alt: "Marca cliente Flikker",
  },
];

export function ClientCarousel() {
  return (
    <section className="border-y border-neutral-100 bg-white py-12">
      <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
        Negocios que ya usan Flikker
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={i}
              className="mx-3 flex shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-4 transition-shadow hover:shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                width={88}
                height={88}
                className="h-[88px] w-[88px] select-none object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
