import { Mail, MessageCircle } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

import { NAV_LINKS, WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/constants";

const CONTACT_EMAIL = "fabrizio.rodriguez7274@gmail.com";

function formatWhatsApp(number: string) {
  const clean = number.replace(/[^0-9]/g, "");
  if (clean.startsWith("598") && clean.length >= 11) {
    return `+598 ${clean.slice(3, 5)} ${clean.slice(5, 8)} ${clean.slice(8)}`;
  }
  return `+${clean}`;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden px-6 pb-10 pt-20 text-white md:px-8"
      style={{
        background: "linear-gradient(to right, #0d0452 0%, #3d0fa8 40%, #7c28e8 72%, #9b3ff5 100%)",
      }}
    >
      {/* Watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/flikker-wordmark-white.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] max-w-4xl select-none"
        style={{ opacity: 0.07 }}
      />

      {/* Grid */}
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-4 md:gap-8">

        {/* Col 1 — marca */}
        <div className="md:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/flikker-wordmark-white.svg" alt="Flikker" className="h-7 w-auto" />
          <p className="mt-4 max-w-[22ch] text-sm leading-relaxed text-white/65">
            La plataforma de reputación local para negocios.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/flikker.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/flikker-uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl("Hola! Tengo una consulta sobre Flikker.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2 — Producto */}
        <nav aria-label="Producto">
          <h3 className="text-sm font-bold text-white">Producto</h3>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3 — Recursos */}
        <div>
          <h3 className="text-sm font-bold text-white">Recursos</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a href="#faq" className="text-sm text-white/65 transition-colors hover:text-white">
                Preguntas frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white/65 transition-colors hover:text-white">
                Centro de ayuda
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4 — Legal */}
        <div>
          <h3 className="text-sm font-bold text-white">Legal</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="/legal/terminos"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                href="/legal/privacidad"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Política de privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mx-auto mt-16 max-w-6xl pt-6">
        <p className="text-xs text-white/50">
          © {year} Flikker. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
