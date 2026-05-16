"use client";

import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo sabe Flikker cuándo mandar el mensaje?",
    a: "Podemos conectarlo a tu operación o darte un panel simple para marcar ventas, visitas o servicios completados. El mensaje sale después, cuando el cliente ya terminó su experiencia.",
  },
  {
    q: "¿Y si me dejan una reseña mala?",
    a: "Ese es el punto clave. Flikker filtra: si la experiencia fue buena, llevamos al cliente a Google. Si fue mala, te llega a vos primero en privado para que puedas resolverlo antes de que se vuelva público.",
  },
  {
    q: "¿Necesito tener web o Instagram?",
    a: (
      <div className="space-y-3">
        <p>
          No. Si no tenés web o Instagram, te lo diseñamos y creamos.* Y si
          tampoco tenés tu ficha de Google Business Profile, también te ayudamos
          a dejarla pronta durante el setup.
        </p>
        <p className="text-sm text-neutral-400">* Por un precio aparte.</p>
      </div>
    ),
  },
  {
    q: "¿Es legal pedir reseñas por WhatsApp?",
    a: "Sí. Siempre que la persona haya dejado su número para contacto comercial o de atención, podés escribirle. Flikker además suma un opt-out visible en cada mensaje.",
  },
  {
    q: "¿Qué pasa con los datos de mis clientes?",
    a: "Están en servidores seguros, cifrados, y nunca se comparten con terceros. Cumplimos con la Ley 18.331 de Protección de Datos Personales de Uruguay.",
  },
  {
    q: "¿Cuánto tarda en configurarse?",
    a: "Entre 24 y 48 horas. Vos nos pasás una primera lista o fuente de clientes. El resto lo hacemos nosotros.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. No hay contratos mínimos ni cláusulas raras. Si querés pausar o cancelar, mandás un WhatsApp y listo.",
  },
];

export function FAQ() {
  const handleOpenChange = (value: string) => {
    if (!value) return;
    const idx = Number(value.replace("faq-", ""));
    const question = faqs[idx]?.q;
    if (question) trackEvent("FAQ Open", { question });
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#f4f4f6] px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">

        {/* Left — header */}
        <div className="lg:sticky lg:top-28">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-periwinkle">
            Soporte
          </span>
          <h2 className="font-display mt-3 text-[30px] font-black leading-[1.1] tracking-[-0.02em] text-neutral-900 md:text-[38px]">
            Preguntas frecuentes sobre Flikker
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500">
            Todo lo que necesitás saber antes de empezar.{" "}
            <a
              href={`https://wa.me/`}
              className="font-medium text-periwinkle hover:underline"
            >
              Escribinos →
            </a>
          </p>
        </div>

        {/* Right — accordion */}
        <Accordion
          type="single"
          collapsible
          onValueChange={handleOpenChange}
          className="flex flex-col gap-2"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="rounded-2xl border border-neutral-200 bg-white px-5"
            >
              <AccordionTrigger className="text-[15px] font-semibold text-neutral-900 hover:text-neutral-900 [&>svg]:text-neutral-400">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-neutral-500">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
