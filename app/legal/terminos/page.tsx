import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Términos y Condiciones · Flikker",
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-32 pb-24 md:px-8">
        <div className="mx-auto max-w-3xl">

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Legal
          </span>
          <h1 className="font-display mt-3 text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[54px]">
            Términos y Condiciones
          </h1>
          <p className="mt-3 text-sm text-neutral-400">Última actualización: 18 de mayo de 2026</p>

          <div className="prose-flikker mt-10 space-y-10 text-[15px] leading-[1.8] text-neutral-600">

            <p>
              Estos Términos y Condiciones (los "Términos") regulan el uso del servicio Flikker (el "Servicio"),
              operado por <span className="font-semibold text-neutral-800">[RAZÓN SOCIAL / NOMBRE]</span>,
              RUT <span className="font-semibold text-neutral-800">[NÚMERO DE RUT]</span>, con domicilio en{" "}
              <span className="font-semibold text-neutral-800">[DOMICILIO, Montevideo, Uruguay]</span> ("Flikker", "nosotros").
            </p>
            <p>
              Al contratar, acceder o utilizar el Servicio, el cliente (el "Cliente", "vos") acepta estos Términos
              en su totalidad. Si no estás de acuerdo, no utilices el Servicio.
            </p>

            <hr className="border-neutral-100" />

            <Section title="1. Qué es Flikker">
              <p>
                Flikker es un sistema automatizado de gestión de reputación para negocios locales. El Servicio
                incluye, según el plan contratado:
              </p>
              <ul>
                <li>Envío automático de solicitudes de reseña a los clientes finales del Cliente a través de WhatsApp.</li>
                <li>Derivación de experiencias positivas hacia Google y de experiencias negativas hacia el Cliente en privado.</li>
                <li>Un panel de control con métricas del negocio.</li>
                <li>Un widget de prueba social embebible en el sitio web del Cliente.</li>
                <li>Campañas de reactivación de clientes inactivos.</li>
              </ul>
              <p>
                Flikker se reserva el derecho de modificar, agregar o discontinuar funcionalidades del Servicio,
                notificando al Cliente con razonable antelación cuando los cambios sean sustanciales.
              </p>
            </Section>

            <Section title="2. Alta y uso del Servicio">
              <p>
                Para utilizar el Servicio, el Cliente debe ser una persona física mayor de 18 años o una persona
                jurídica, con un negocio legalmente establecido. El Cliente es responsable de la veracidad de los
                datos que proporciona y del uso que se haga del Servicio a través de su cuenta.
              </p>
              <p>
                El Cliente se compromete a proporcionar a Flikker únicamente datos de contacto de personas con las
                que mantiene una relación comercial real (clientes, pacientes o usuarios que efectivamente compraron,
                visitaron o recibieron un servicio).
              </p>
            </Section>

            <Section title="3. Obligaciones del Cliente">
              <p>El Cliente se obliga a:</p>
              <ul>
                <li>
                  Utilizar el Servicio conforme a la legislación uruguaya vigente, en especial la{" "}
                  <strong>Ley N° 18.331 de Protección de Datos Personales</strong> y normas concordantes.
                </li>
                <li>
                  Contar con base legítima (consentimiento u otra base habilitante) para comunicarse con sus clientes
                  finales por WhatsApp, y haber informado a estos sobre el tratamiento de sus datos.
                </li>
                <li>
                  No utilizar el Servicio para enviar spam, comunicaciones a personas que hayan solicitado no ser
                  contactadas, contenido ilícito, engañoso o fraudulento.
                </li>
                <li>
                  No solicitar, incentivar ni manipular reseñas falsas, ni ofrecer contraprestaciones a cambio de
                  reseñas positivas, respetando las políticas de Google y de WhatsApp.
                </li>
                <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
              </ul>
              <p>
                El incumplimiento de estas obligaciones habilita a Flikker a suspender o cancelar el Servicio sin
                derecho a reembolso, sin perjuicio de las responsabilidades legales del Cliente.
              </p>
            </Section>

            <Section title="4. Roles respecto de los datos personales">
              <p>
                Respecto de los datos personales de los clientes finales que el Cliente carga o integra al Servicio,{" "}
                <strong>el Cliente actúa como Responsable de la base de datos</strong> y{" "}
                <strong>Flikker actúa como Encargado del tratamiento</strong>, en los términos de la Ley N° 18.331
                y su decreto reglamentario.
              </p>
              <p>
                Flikker trata esos datos únicamente siguiendo las instrucciones del Cliente y para la prestación del
                Servicio. El detalle del tratamiento se describe en la{" "}
                <Link href="/legal/privacidad" className="font-semibold text-periwinkle hover:underline">
                  Política de Privacidad
                </Link>
                , que forma parte integrante de estos Términos.
              </p>
              <p>
                El Cliente es el único responsable de haber obtenido las bases legales necesarias frente a sus
                clientes finales y, cuando corresponda, de inscribir su base de datos ante la Unidad Reguladora y
                de Control de Datos Personales (URCDP).
              </p>
            </Section>

            <Section title="5. Datos sensibles">
              <p>
                Si el Cliente opera en rubros que implican tratamiento de datos sensibles (por ejemplo, datos
                relativos a la salud en clínicas o centros estéticos), reconoce que dichos datos gozan de
                protección reforzada bajo la Ley N° 18.331. Flikker no requiere ni debe recibir información
                clínica o de salud de los clientes finales: el Cliente se compromete a no incorporar al Servicio
                datos sensibles más allá de los datos de contacto estrictamente necesarios para el envío de los mensajes.
              </p>
            </Section>

            <Section title="6. Planes, precios y pagos">
              <p>
                El precio, el alcance y los límites del plan contratado son los publicados en el sitio de Flikker
                o los acordados por escrito con el Cliente al momento de la contratación. Los precios están
                expresados en pesos uruguayos y pueden actualizarse, notificando al Cliente con al menos 30 días
                de antelación; las actualizaciones no afectan períodos ya abonados.
              </p>
              <p>
                La facturación es mensual salvo acuerdo distinto. La falta de pago habilita a Flikker a suspender
                el Servicio hasta su regularización.
              </p>
            </Section>

            <Section title="7. Garantía">
              <p>
                Cuando el plan contratado incluya una garantía de resultados (por ejemplo, "20 reseñas nuevas en
                30 días o no pagás el primer mes"), dicha garantía aplica únicamente si el Cliente cumplió con sus
                obligaciones de carga de datos y colaboración descritas en estos Términos y en el onboarding. La
                garantía cubre exclusivamente lo expresamente indicado y no constituye una promesa de resultados
                comerciales o de facturación del negocio del Cliente.
              </p>
            </Section>

            <Section title="8. Cancelación">
              <p>
                El Cliente puede cancelar el Servicio en cualquier momento, sin penalidad, comunicándolo por los
                canales oficiales de Flikker. La cancelación surte efecto al finalizar el período ya facturado;
                no se realizan reembolsos por períodos en curso salvo lo previsto en la garantía aplicable.
              </p>
              <p>
                Flikker puede cancelar el Servicio ante incumplimiento del Cliente o por discontinuación del
                Servicio, con notificación previa razonable.
              </p>
            </Section>

            <Section title="9. Servicios y plataformas de terceros">
              <p>
                El Servicio se apoya en plataformas de terceros, incluyendo entre otras WhatsApp, Google y
                proveedores de mensajería. Flikker no controla dichas plataformas y no es responsable por cambios
                en sus políticas, interrupciones, suspensión de cuentas del Cliente por parte de esas plataformas,
                ni por la forma en que Google muestra o filtra reseñas. El Cliente acepta cumplir también con los
                términos de uso de esas plataformas.
              </p>
            </Section>

            <Section title="10. Limitación de responsabilidad">
              <p>
                El Servicio se presta "tal cual" y "según disponibilidad". En la máxima medida permitida por la
                ley, Flikker no será responsable por lucro cesante, pérdida de oportunidades comerciales, daños
                indirectos o consecuentes. La responsabilidad total de Flikker frente al Cliente, por cualquier
                concepto, no excederá el monto efectivamente abonado por el Cliente en los 3 meses anteriores al
                hecho que origina el reclamo.
              </p>
              <p>Nada en estos Términos limita responsabilidades que no puedan excluirse legalmente.</p>
            </Section>

            <Section title="11. Propiedad intelectual">
              <p>
                La marca Flikker, el software, el panel, el widget y todo material desarrollado por Flikker son
                de su exclusiva propiedad. El Cliente recibe una licencia de uso no exclusiva, intransferible y
                limitada a la vigencia del Servicio. Los datos del negocio y de los clientes finales pertenecen
                al Cliente.
              </p>
            </Section>

            <Section title="12. Modificaciones de estos Términos">
              <p>
                Flikker puede actualizar estos Términos. Los cambios sustanciales se notificarán al Cliente. El
                uso continuado del Servicio tras la notificación implica la aceptación de los Términos actualizados.
              </p>
            </Section>

            <Section title="13. Ley aplicable y jurisdicción">
              <p>
                Estos Términos se rigen por las leyes de la República Oriental del Uruguay. Para cualquier
                controversia, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad
                de Montevideo, sin perjuicio de los derechos del Cliente como consumidor cuando corresponda.
              </p>
            </Section>

            <Section title="14. Contacto">
              <p>Para cualquier consulta sobre estos Términos:</p>
              <ul>
                <li><strong>Email:</strong> fabrizio.rodriguez7274@gmail.com</li>
                <li><strong>WhatsApp:</strong> +598 91 624 988</li>
              </ul>
            </Section>

            <hr className="border-neutral-100" />

            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-5 text-[13px] leading-[1.7] text-amber-800">
              Este documento es una plantilla de base. Antes de publicarlo, completá los campos indicados y,
              dado que el Servicio trata datos personales de terceros, conviene una revisión por un abogado
              especializado en protección de datos en Uruguay.
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="font-display text-[20px] font-black tracking-tight text-neutral-900">
        {title}
      </h2>
      <div className="space-y-3 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_strong]:font-semibold [&_strong]:text-neutral-800">
        {children}
      </div>
    </section>
  );
}
