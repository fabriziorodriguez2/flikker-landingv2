import Image from "next/image";

export function Solution() {
  return (
    <section
      id="solucion"
      aria-labelledby="checkin-title"
      className="scroll-mt-20 overflow-hidden bg-[#f7f6f2] py-24 text-[#1d1a21] sm:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-6 xl:px-0">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            El primer check-in
          </p>
          <h2
            id="checkin-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]"
          >
            Todo empieza con un toque.
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.65] text-[#68626d] sm:text-lg">
            El cliente escanea el QR o acerca el teléfono al NFC. La primera
            vez deja nombre y teléfono; después Flikker lo reconoce y el
            check-in toma segundos.
          </p>
        </div>

        <figure className="mt-14 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_24px_70px_rgba(42,31,22,0.10)] sm:mt-20 sm:rounded-[36px]">
          <Image
            src="/landing/flikker-checkin-lifestyle-final.png"
            alt="Cliente registrando una visita en Flikker al acercar su teléfono a un display con QR y NFC en una cafetería"
            width={1672}
            height={941}
            sizes="(min-width: 1280px) 1200px, (min-width: 640px) 94vw, 100vw"
            className="block h-auto w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
