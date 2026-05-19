import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Política de Privacidad · Flikker",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white px-6 pt-32 pb-24 md:px-8">
        <div className="mx-auto max-w-3xl">

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-periwinkle">
            Legal
          </span>
          <h1 className="font-display mt-3 text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[54px]">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-neutral-400">Última actualización: 18 de mayo de 2026</p>

          <div className="mt-10 space-y-10 text-[15px] leading-[1.8] text-neutral-600">

            <p>
              Esta Política de Privacidad describe cómo{" "}
              <span className="font-semibold text-neutral-800">[RAZÓN SOCIAL / NOMBRE]</span>,
              RUT <span className="font-semibold text-neutral-800">[NÚMERO DE RUT]</span>, con domicilio en{" "}
              <span className="font-semibold text-neutral-800">[DOMICILIO, Montevideo, Uruguay]</span>{" "}
              ("Flikker", "nosotros") trata los datos personales en el marco del servicio Flikker (el "Servicio"),
              de conformidad con la <strong className="font-semibold text-neutral-800">Ley N° 18.331 de Protección
              de Datos Personales y Acción de Habeas Data</strong>, su decreto reglamentario y normas concordantes
              de la República Oriental del Uruguay.
            </p>

            <hr className="border-neutral-100" />

            <Section title="1. Dos tipos de personas, dos roles">
              <p>Esta política distingue entre dos grupos de personas:</p>
              <p>
                <strong>a) Visitantes y clientes de Flikker.</strong> Personas que visitan nuestro sitio, nos
                contactan o contratan el Servicio para su negocio. Respecto de estos datos, Flikker actúa como{" "}
                <strong>Responsable de la base de datos</strong>.
              </p>
              <p>
                <strong>b) Clientes finales de nuestros clientes.</strong> Personas (clientes, pacientes o usuarios)
                que el negocio cliente incorpora al Servicio para que reciban solicitudes de reseña o mensajes de
                reactivación. Respecto de estos datos, <strong>el negocio cliente es el Responsable</strong> y{" "}
                <strong>Flikker actúa únicamente como Encargado del tratamiento</strong>, tratando los datos por
                cuenta y según las instrucciones de dicho negocio.
              </p>
            </Section>

            <Section title="2. Qué datos tratamos">
              <p><strong>De visitantes y clientes de Flikker:</strong></p>
              <ul>
                <li>Datos de contacto: nombre, email, teléfono, nombre del negocio.</li>
                <li>Datos de la cuenta y de facturación.</li>
                <li>Datos de navegación y métricas de uso del sitio y del panel (de forma agregada y/o mediante herramientas de analítica respetuosas de la privacidad).</li>
                <li>Comunicaciones que mantenemos con vos (por WhatsApp, email u otros canales).</li>
              </ul>
              <p><strong>De clientes finales (en carácter de Encargado):</strong></p>
              <ul>
                <li>Datos de contacto necesarios para el envío de mensajes: nombre y número de teléfono.</li>
                <li>Información sobre la interacción: si el mensaje fue entregado, si dejó una reseña, fecha de última visita o compra cuando el negocio la proporciona.</li>
              </ul>
              <p>
                Flikker <strong>no solicita ni necesita datos clínicos, de salud ni otros datos sensibles</strong> de
                los clientes finales. El negocio cliente se compromete a no incorporar ese tipo de datos al Servicio.
              </p>
            </Section>

            <Section title="3. Para qué usamos los datos y con qué base legal">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-[14px]">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50">
                      <th className="px-4 py-3 text-left font-semibold text-neutral-800">Finalidad</th>
                      <th className="px-4 py-3 text-left font-semibold text-neutral-800">Base legal (Ley 18.331)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {[
                      ["Prestar y operar el Servicio", "Ejecución del contrato con el cliente"],
                      ["Responder consultas y dar soporte", "Consentimiento / interés legítimo"],
                      ["Facturación y obligaciones legales", "Cumplimiento de obligaciones legales"],
                      ["Mejorar y medir el Servicio", "Interés legítimo, con datos minimizados"],
                      ["Envío de mensajes a clientes finales", "Por instrucción del negocio cliente, que es el Responsable y debe contar con base legal frente a esas personas"],
                    ].map(([fin, base]) => (
                      <tr key={fin}>
                        <td className="px-4 py-3 align-top text-neutral-700">{fin}</td>
                        <td className="px-4 py-3 align-top text-neutral-500">{base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                No utilizamos los datos de los clientes finales para fines propios, ni los vendemos, ni los usamos
                para construir bases de datos comerciales propias.
              </p>
            </Section>

            <Section title="4. Mensajería por WhatsApp">
              <p>
                El Servicio envía mensajes a través de WhatsApp utilizando proveedores de mensajería habilitados.
                El negocio cliente declara y garantiza que cuenta con base legítima para contactar a sus clientes
                finales y que estos fueron informados. Cualquier persona que reciba un mensaje puede solicitar no
                volver a ser contactada, solicitud que será atendida.
              </p>
            </Section>

            <Section title="5. Con quién compartimos datos">
              <p>Compartimos datos únicamente con:</p>
              <ul>
                <li>
                  <strong>Proveedores tecnológicos</strong> que nos permiten operar el Servicio (mensajería
                  WhatsApp, hosting, analítica, procesamiento de pagos), que actúan como subencargados bajo
                  obligaciones de confidencialidad y seguridad.
                </li>
                <li>
                  <strong>Google</strong>, en la medida en que el flujo de reseñas dirige a los clientes finales
                  a dejar su reseña en el perfil de Google del negocio cliente.
                </li>
                <li><strong>Autoridades</strong>, cuando exista obligación legal de informar.</li>
              </ul>
              <p>No vendemos ni cedemos datos personales a terceros con fines comerciales.</p>
            </Section>

            <Section title="6. Transferencias internacionales">
              <p>
                Algunos proveedores pueden almacenar o procesar datos fuera de Uruguay. En esos casos, Flikker
                adopta resguardos razonables (cláusulas contractuales y proveedores con estándares adecuados de
                protección) conforme al artículo 23 de la Ley N° 18.331.
              </p>
            </Section>

            <Section title="7. Plazo de conservación">
              <p>
                Conservamos los datos mientras el cliente mantenga el Servicio activo y durante los plazos exigidos
                por obligaciones legales (por ejemplo, fiscales). Finalizada la relación, los datos de los clientes
                finales se eliminan o anonimizan dentro de un plazo razonable, salvo obligación legal de
                conservarlos. El cliente puede solicitar la devolución o eliminación de los datos al finalizar el
                Servicio.
              </p>
            </Section>

            <Section title="8. Seguridad">
              <p>
                Aplicamos medidas técnicas y organizativas razonables para proteger los datos, incluyendo control
                de accesos, cifrado de las comunicaciones y principios de mínimo privilegio. Ninguna medida es
                infalible, pero trabajamos para mantener un nivel de protección acorde a la naturaleza de los datos
                tratados, y revisamos periódicamente nuestras prácticas conforme al principio de responsabilidad
                proactiva.
              </p>
            </Section>

            <Section title="9. Derechos de los titulares">
              <p>
                Toda persona tiene derecho a{" "}
                <strong>acceder, rectificar, actualizar, incluir y suprimir</strong> sus datos personales, así como
                a oponerse a su tratamiento en los casos previstos por la ley.
              </p>
              <ul>
                <li>
                  Si sos <strong>visitante o cliente de Flikker</strong>, podés ejercer estos derechos
                  escribiéndonos a los contactos de la sección 11.
                </li>
                <li>
                  Si sos <strong>cliente final de un negocio</strong> que usa Flikker, el Responsable de tus datos
                  es ese negocio: dirigí tu solicitud a él. Si nos contactás a nosotros, trasladaremos la solicitud
                  al negocio cliente correspondiente y colaboraremos en su atención.
                </li>
              </ul>
              <p>
                El titular también puede presentar reclamos ante la{" "}
                <strong>Unidad Reguladora y de Control de Datos Personales (URCDP)</strong> de Uruguay.
              </p>
            </Section>

            <Section title="10. Cookies y analítica">
              <p>
                El sitio utiliza herramientas de analítica orientadas a la privacidad para entender el uso de la
                página de forma agregada. En caso de utilizar cookies que requieran consentimiento, se solicitará
                el mismo conforme a la normativa aplicable.
              </p>
            </Section>

            <Section title="11. Contacto">
              <p>Para ejercer derechos o realizar consultas sobre privacidad:</p>
              <ul>
                <li><strong>Email:</strong> fabrizio.rodriguez7274@gmail.com</li>
                <li><strong>WhatsApp:</strong> +598 91 624 988</li>
                <li>
                  <strong>Domicilio:</strong>{" "}
                  <span className="font-semibold text-neutral-800">[DOMICILIO, Montevideo, Uruguay]</span>
                </li>
              </ul>
            </Section>

            <Section title="12. Cambios en esta Política">
              <p>
                Podemos actualizar esta Política. Publicaremos la versión vigente en esta página, indicando la
                fecha de última actualización. Los cambios sustanciales serán notificados a los clientes.
              </p>
            </Section>

            <hr className="border-neutral-100" />

            <div className="rounded-2xl border border-amber-100 bg-amber-50 px-6 py-5 text-[13px] leading-[1.7] text-amber-800">
              Este documento es una plantilla de base. Antes de publicarlo, completá los campos indicados. Dado
              que el Servicio trata datos personales de terceros y opera con rubros que pueden involucrar datos de
              salud, se recomienda una revisión por un abogado especializado en protección de datos en Uruguay y,
              según el caso, evaluar la inscripción de bases de datos ante la URCDP.
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
