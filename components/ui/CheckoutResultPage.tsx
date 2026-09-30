import Link from "next/link";

export type ResultVariant = "success" | "pending" | "failure";

interface Props {
  variant: ResultVariant;
}

function ClockIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

const CONTENT = {
  success: {
    icon: <ClockIcon />,
    iconColor: "text-[#7767db]",
    iconBg: "bg-[#f0eeff]",
    title: "Estamos confirmando tu pago",
    description:
      "Recibimos tu solicitud. En cuanto confirmemos el pago te enviamos los próximos pasos por email.",
    cta: "Volver al inicio",
    ctaHref: "/",
  },
  pending: {
    icon: <ClockIcon />,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    title: "Tu pago está pendiente",
    description:
      "El pago aún no fue acreditado. Esto puede tardar unos minutos. Si el problema persiste, contactanos.",
    cta: "Volver al inicio",
    ctaHref: "/",
  },
  failure: {
    icon: <AlertIcon />,
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
    title: "No pudimos procesar el pago",
    description:
      "Algo salió mal con el pago. Podés intentarlo de nuevo o contactarnos para que te ayudemos.",
    cta: "Intentar de nuevo",
    ctaHref: "/#pricing",
  },
} satisfies Record<
  ResultVariant,
  {
    icon: React.ReactNode;
    iconColor: string;
    iconBg: string;
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  }
>;

export function CheckoutResultPage({ variant }: Props) {
  const c = CONTENT[variant];

  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#f7f6f2] px-5 py-16">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white px-8 py-10 shadow-[0_4px_32px_rgba(23,21,29,0.08)]">
        <div
          className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${c.iconBg} ${c.iconColor}`}
        >
          {c.icon}
        </div>

        <h1 className="mt-6 font-display text-[24px] font-bold leading-tight tracking-[-0.025em] text-[#17151d]">
          {c.title}
        </h1>

        <p className="mt-3 text-[15px] leading-relaxed text-[#5d5963]">
          {c.description}
        </p>

        <Link
          href={c.ctaHref}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#17151d] py-3.5 text-[15px] font-bold text-white shadow-[0_4px_16px_rgba(23,21,29,0.18)] transition-all duration-200 hover:bg-[#2d2a35] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
        >
          {c.cta}
        </Link>
      </div>
    </main>
  );
}
