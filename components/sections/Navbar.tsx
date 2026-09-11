"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, CALENDLY_URL, APP_LOGIN_URL, APP_REGISTER_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PAGES_WITH_LOCAL_ANCHORS = ["/"];

export function Navbar() {
  const scrolled = useScrolled(20);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const resolveHref = (hash: string) =>
    PAGES_WITH_LOCAL_ANCHORS.includes(pathname) ? hash : `/${hash}`;

  const logoHref = pathname === "/" ? "#top" : "/";

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-40 px-4 pt-3">
        <nav
          aria-label="Principal"
          className={cn(
            "mx-auto max-w-5xl rounded-2xl border px-6 transition-all duration-200",
            scrolled || mobileOpen
              ? "border-midnight/10 bg-white/90 shadow-md backdrop-blur-md"
              : "border-white/40 bg-transparent shadow-sm backdrop-blur-md backdrop-saturate-200"
          )}
        >
          <div className="flex h-16 items-center justify-between">
            <Link
              href={logoHref}
              aria-label="Flikker — Ir al inicio"
              className="flex items-center rounded-sm transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle"
            >
              <Logo variant="wordmark" className="h-7 w-auto" />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={resolveHref(href)}
                    className="inline-flex min-h-[44px] items-center px-1 text-sm font-semibold text-neutral-500 tracking-wide transition-colors hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/como-empezar"
                  className="inline-flex min-h-[44px] items-center px-1 text-sm font-semibold text-neutral-500 tracking-wide transition-colors hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle rounded-sm"
                >
                  Cómo empezar
                </Link>
              </li>
            </ul>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-4 md:flex">
              <a
                href={APP_LOGIN_URL}
                className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle rounded-sm"
              >
                Iniciar sesión
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-periwinkle px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(145,136,245,0.5)] transition-all hover:bg-periwinkle/85 hover:shadow-[0_4px_18px_rgba(145,136,245,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2"
              >
                Agendar Demo
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 flex flex-col pt-[84px] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div className="relative mx-4 rounded-2xl border border-neutral-200 bg-white shadow-2xl overflow-y-auto max-h-[calc(100vh-100px)]">
            <nav aria-label="Menú móvil" className="p-5">
              <ul className="space-y-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={resolveHref(href)}
                      onClick={() => setMobileOpen(false)}
                      className="flex min-h-[48px] items-center rounded-xl px-4 text-[15px] font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/como-empezar"
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[48px] items-center rounded-xl px-4 text-[15px] font-semibold text-[#7767db] transition-colors hover:bg-[#f0eeff]"
                  >
                    Cómo empezar
                  </Link>
                </li>
              </ul>

              <div className="mt-4 border-t border-neutral-100 pt-4 space-y-2.5">
                <a
                  href={APP_LOGIN_URL}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-center rounded-xl border border-neutral-200 px-4 text-[15px] font-semibold text-neutral-600 transition-colors hover:bg-neutral-50"
                >
                  Iniciar sesión
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-center rounded-xl bg-[#7767db] px-4 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(119,103,219,0.4)] transition-all hover:bg-[#6658c5]"
                >
                  Agendar Demo
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
