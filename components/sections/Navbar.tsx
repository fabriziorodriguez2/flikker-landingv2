"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, WHATSAPP_MESSAGES, buildWhatsAppUrl, CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const PAGES_WITH_LOCAL_ANCHORS = ["/", "/blog"];

export function Navbar() {
  const scrolled = useScrolled(20);
  const pathname = usePathname();

  const resolveHref = (hash: string) =>
    PAGES_WITH_LOCAL_ANCHORS.includes(pathname) ? hash : `/${hash}`;

  const logoHref = pathname === "/" ? "#top" : "/";

  return (
    <div className="fixed top-0 inset-x-0 z-40 px-4 pt-3">
      <nav
        aria-label="Principal"
        className={cn(
          "mx-auto max-w-5xl rounded-2xl border px-6 transition-all duration-200",
          scrolled
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
                href="/blog"
                className="inline-flex min-h-[44px] items-center px-1 text-sm font-semibold text-neutral-500 tracking-wide transition-colors hover:text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle rounded-sm"
              >
                Blog
              </Link>
            </li>
          </ul>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-periwinkle px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(145,136,245,0.5)] transition-all hover:bg-periwinkle/85 hover:shadow-[0_4px_18px_rgba(145,136,245,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-periwinkle focus-visible:ring-offset-2"
          >
            Agendar Demo
          </a>
        </div>
      </nav>
    </div>
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
