"use client";

import Image from "next/image";
import { Check, Footprints, Gift, LockKeyhole } from "lucide-react";

import { Logo } from "@/components/ui/Logo";

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

        <div className="mt-14 grid items-center gap-10 sm:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <StandAsset />
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="relative aspect-[908/1516] w-full max-w-[360px] overflow-visible">
              <Image
                src="/landing/checkin-phone.png"
                alt="Celular con el registro de visitas de La Stampa"
                width={2000}
                height={2000}
                sizes="(min-width: 1024px) 360px, 80vw"
                className="absolute left-[-81.83%] top-[-19.26%] h-auto w-[220.27%] max-w-none object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StandAsset() {
  return (
    <Image
      src="/landing/qr-nfc-support-hq.png"
      alt="Soporte acrílico Flikker con código QR y NFC"
      width={447}
      height={558}
      className="mx-auto block h-auto w-full max-w-[360px] object-contain drop-shadow-[0_26px_34px_rgba(40,27,73,0.18)]"
    />
  );
}

function PhoneShell({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="relative w-[300px] rounded-[42px] border-[7px] border-[#17151a] bg-[#17151a] p-[3px] shadow-[0_30px_75px_rgba(27,18,38,0.22)] sm:w-[320px]">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[12px] z-20 h-[20px] w-[72px] -translate-x-1/2 rounded-full bg-[#17151a]"
      />
      <div className={`relative aspect-[9/19.2] overflow-hidden rounded-[32px] ${light ? "bg-[#f4f7fb] text-[#101725]" : "bg-[#08070d] text-white"}`}>
        <div className={`absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 text-[9px] font-semibold ${light ? "text-[#27232c]" : "text-white/90"}`}>
          <span>9:41</span>
          <span className="tracking-[0.12em]">● ◒ ▰</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="text-center">
      <p className="font-serif text-[18px] font-bold italic tracking-[-0.03em] text-white">
        La Stampa
      </p>
      <span className="mx-auto mt-1 block h-0.5 w-8 rounded-full bg-[#e3a532]" />
    </div>
  );
}

function FirstVisitForm() {
  return (
    <div className="flex h-full flex-col bg-[#f4f7fb] px-4 pb-5 pt-[104px] text-[#101725] sm:px-5 sm:pt-[112px]">
      <div className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-[16px] bg-black shadow-[0_5px_12px_rgba(22,18,26,0.16)]">
        <Image
          src="/landing/la-stampa-logo.png"
          alt="La Stampa 1996"
          width={1200}
          height={328}
          sizes="46px"
          className="h-auto w-[46px] object-contain"
        />
      </div>

      <h3 className="mx-auto mt-5 max-w-[270px] text-center font-display text-[20px] font-semibold leading-[1.12] tracking-[-0.04em]">
        Sumate a Panadería La Stampa Cassinoni
      </h3>
      <p className="mx-auto mt-3 max-w-[270px] text-center text-[10px] leading-[1.55] text-[#596273]">
        Dejanos tu nombre y número y te avisamos cuando haya algo para vos.
      </p>

      <form aria-label="Registro de primera visita" className="mt-6 space-y-2.5">
        <input
          aria-label="Tu nombre"
          readOnly
          tabIndex={-1}
          placeholder="Tu nombre"
          className="h-12 w-full rounded-[14px] border border-[#d3d8e1] bg-white px-4 text-[11px] text-[#384052] outline-none placeholder:text-[#9ca4b7]"
        />

        <div className="flex h-12 overflow-hidden rounded-[14px] border border-[#d3d8e1] bg-white">
          <span className="flex w-[58px] shrink-0 items-center border-r border-[#d3d8e1] px-3 text-[11px] text-[#334052]">+598</span>
          <input
            aria-label="Número de teléfono"
            readOnly
            tabIndex={-1}
            placeholder="91624988"
            className="min-w-0 flex-1 bg-transparent px-3 text-[11px] text-[#384052] outline-none placeholder:text-[#9ca4b7]"
          />
        </div>

        <fieldset>
          <legend className="mb-1.5 text-[9px] text-[#384052]">Fecha de nacimiento (opcional)</legend>
          <div className="grid grid-cols-3 gap-2">
            {["Día", "Mes", "Año"].map((label) => (
              <select
                key={label}
                defaultValue=""
                tabIndex={-1}
                aria-label={label}
                className="h-10 rounded-[12px] border border-[#d3d8e1] bg-white px-2 text-[10px] text-[#263044] outline-none"
              >
                <option value="" disabled>{label}</option>
              </select>
            ))}
          </div>
        </fieldset>

        <button type="button" tabIndex={-1} className="h-11 w-full rounded-[13px] bg-[#9ca8dc] text-[11px] font-bold text-white">
          Anotarme
        </button>
      </form>

      <p className="mt-auto text-center text-[9px] text-[#a0a7b8]">
        Powered by <span className="font-semibold text-[#777f91]">Flikker</span>
      </p>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="flex h-full flex-col px-4 pb-5 pt-12 sm:px-5">
      <BrandHeader />

      <div className="mt-6 text-center">
        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-[22px] font-bold tracking-[-0.04em]">¡Hola, María!</h3>
        <p className="mx-auto mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-2 text-[10px] font-semibold text-white/85">
          <Check className="h-3 w-3" aria-hidden="true" />
          Tu visita quedó guardada
        </p>
      </div>

      <div className="mt-6 rounded-[20px] bg-white p-4 text-[#211d29]">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#efedff] text-[#493694]">
            <Footprints className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold">¡Seguís sumando!</p>
            <p className="mt-0.5 text-[9px] text-[#817989]">Cada visita te acerca a algo lindo</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold leading-none">1</p>
            <p className="mt-1 text-[8px] text-[#817989]">visita</p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-[20px] border border-white/15 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
            <Gift className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[9px] text-white/60">Un regalo para vos</p>
            <p className="mt-0.5 text-[15px] font-bold">3 medialunas</p>
          </div>
        </div>

        <div className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full border border-white/30 text-[10px] font-semibold text-white/75">
          <LockKeyhole className="h-4 w-4" aria-hidden="true" />
          2 visitas para desbloquear
        </div>
      </div>

      <div className="mt-auto flex items-center justify-center gap-1.5 text-[9px] text-white/35">
        <Logo variant="isotype" className="h-2.5 w-auto opacity-60" />
        Powered by <span className="font-semibold text-white/55">Flikker</span>
      </div>
    </div>
  );
}
