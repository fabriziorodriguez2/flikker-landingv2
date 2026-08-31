"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

type FAQItem = {
  q: string;
  a: string;
};

const PRIMARY_FAQS: FAQItem[] = [
  {
    q: "¿Qué es Flikker?",
    a: "Flikker ayuda a que los clientes de tu negocio vuelvan más seguido. Cada visita puede sumar un punto hacia una recompensa y, si un cliente deja de venir, Flikker puede intentar recuperarlo automáticamente.",
  },
  {
    q: "¿Cómo funciona?",
    a: "Ponés un QR o NFC de Flikker en tu local. El cliente lo escanea cuando visita el negocio, registra su visita y ve su progreso hacia la próxima recompensa.",
  },
  {
    q: "¿Mis clientes tienen que descargar una app?",
    a: "No. Todo funciona desde el navegador del teléfono. El cliente escanea el QR o acerca su teléfono al NFC y continúa desde ahí.",
  },
  {
    q: "¿Cómo funcionan las recompensas?",
    a: "Vos definís la recompensa y cuántos puntos hacen falta para alcanzarla. Puede ser un café, un producto, un descuento, un 2×1 o cualquier beneficio que tenga sentido para tu negocio.",
  },
  {
    q: "¿Cómo se canjea una recompensa?",
    a: "Cuando el cliente acumula sus puntos, la recompensa se desbloquea y recibe un QR de canje. El empleado lo escanea con la cámara de su teléfono y confirma el beneficio.",
  },
  {
    q: "¿Qué pasa si un cliente deja de venir?",
    a: "Flikker puede detectar que un cliente que antes visitaba el negocio dejó de aparecer y contactarlo por WhatsApp para intentar traerlo de vuelta.",
  },
  {
    q: "¿Cuál es la diferencia con una tarjeta de puntos tradicional?",
    a: "Una tarjeta de papel solo muestra cuántos puntos tiene alguien. Flikker además registra visitas, muestra quién vuelve, gestiona el canje y puede actuar cuando un cliente deja de venir.",
  },
  {
    q: "¿Para qué tipo de negocios funciona mejor?",
    a: "Especialmente para negocios donde un mismo cliente puede volver varias veces al mes: cafeterías, panaderías, heladerías, peluquerías, comida rápida y otros comercios de alta recurrencia.",
  },
];

const ADDITIONAL_FAQS: FAQItem[] = [
  {
    q: "¿El cliente tiene que registrarse cada vez?",
    a: "No. La primera vez deja sus datos y Flikker puede reconocerlo en las siguientes visitas desde ese dispositivo.",
  },
  {
    q: "¿Cada visita suma un punto?",
    a: "Sí, cuando la visita cumple las reglas configuradas por el negocio. Flikker evita que varios escaneos seguidos generen visitas o puntos duplicados.",
  },
  {
    q: "¿Puedo elegir cuántos puntos necesita una recompensa?",
    a: "Sí. Podés definir, por ejemplo, que cada cinco puntos se desbloquee una recompensa.",
  },
  {
    q: "¿Se pueden conseguir puntos extra?",
    a: "Sí. El negocio puede activar un punto extra por completar el feedback después de una visita.",
  },
  {
    q: "¿Tengo que regalar un premio por dejar una reseña positiva?",
    a: "No. El punto extra se entrega por compartir la experiencia con el negocio, independientemente de la puntuación. Dejar una reseña en Google es opcional y nunca genera puntos adicionales.",
  },
  {
    q: "¿Flikker también ayuda a conseguir reseñas de Google?",
    a: "Sí. Después de una buena experiencia, Flikker puede ofrecerle al cliente la posibilidad de compartirla también en Google. Las reseñas acompañan al sistema de recurrencia, pero no son el centro del producto.",
  },
  {
    q: "¿Mis empleados tienen que aprender a usar otro sistema?",
    a: "Prácticamente no. Para operar las recompensas, su tarea principal es escanear el QR del cliente y confirmar el canje.",
  },
  {
    q: "¿Tengo que mandar los mensajes de reactivación manualmente?",
    a: "No necesariamente. La reactivación puede funcionar automáticamente una vez configurada.",
  },
  {
    q: "¿Qué puedo ver como dueño?",
    a: "Podés ver visitas, clientes recurrentes, recompensas y canjes para entender mejor quién está volviendo a tu negocio.",
  },
  {
    q: "¿Flikker es una tarjeta de fidelidad digital?",
    a: "No exactamente. Los puntos son la parte que ve el cliente. Flikker además registra recurrencia, permite medir quién vuelve y puede actuar cuando un cliente deja de venir.",
  },
  {
    q: "¿Flikker es un CRM?",
    a: "No. No está pensado para gestionar pipelines, oportunidades o procesos comerciales. Está enfocado específicamente en visitas, recurrencia, recompensas y recuperación de clientes.",
  },
  {
    q: "¿Sirve para negocios donde el cliente vuelve cada varios meses?",
    a: "No es donde Flikker tiene más sentido hoy. El producto está pensado principalmente para negocios donde volver con frecuencia forma parte natural del comportamiento del cliente.",
  },
  {
    q: "¿Necesito tener un programa de fidelización actualmente?",
    a: "No. Flikker puede convertirse en tu sistema de recurrencia desde cero.",
  },
  {
    q: "¿Necesito comprar equipos especiales?",
    a: "No necesitás un dispositivo especial para operar Flikker. El punto de entrada puede ser un QR y, cuando corresponda, también puede utilizarse NFC.",
  },
  {
    q: "¿Qué pasa si el cliente escanea dos veces?",
    a: "Flikker tiene controles para evitar que varios escaneos consecutivos se conviertan artificialmente en más visitas o recompensas.",
  },
  {
    q: "¿Puedo decidir qué recompensa ofrecer?",
    a: "Sí. El beneficio lo define tu negocio. Flikker no funciona como un marketplace de descuentos ni te obliga a ofrecer una promoción específica.",
  },
  {
    q: "¿Tengo que configurar todo yo?",
    a: "No. Flikker funciona con una implementación asistida: configuramos juntos el check-in, las recompensas y el QR o NFC para dejar el sistema pronto para usar.",
  },
  {
    q: "¿Cuál es la idea detrás de Flikker?",
    a: "Que una compra no termine cuando el cliente sale por la puerta. Flikker convierte esa visita en el comienzo de la siguiente.",
  },
];

const ALL_FAQS = [...PRIMARY_FAQS, ...ADDITIONAL_FAQS];

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? ALL_FAQS : PRIMARY_FAQS;

  const handleOpenChange = (value: string) => {
    if (!value) return;
    const idx = Number(value.replace("faq-", ""));
    const question = ALL_FAQS[idx]?.q;
    if (question) trackEvent("FAQ Open", { question });
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-[#f4f4f6] px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
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
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-periwinkle hover:underline"
            >
              Escribinos →
            </a>
          </p>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            onValueChange={handleOpenChange}
            className="flex flex-col gap-2"
          >
            {visibleFaqs.map((item, i) => (
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

          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((current) => !current)}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-neutral-200 bg-white px-5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            {showAll ? "Ver menos preguntas" : "Ver todas las preguntas"}
          </button>
        </div>
      </div>
    </section>
  );
}
