"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Logo } from "@/components/ui/Logo";
import { type Plan, type CheckoutIntentPayload, submitCheckoutIntent } from "@/lib/checkout";
import { PLAN_PRICES } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { navigateTo } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────────── */

interface FormValues {
  name: string;
  businessName: string;
  phone: string;
  email: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = "idle" | "loading" | "error";

/* ─────────────────────────────────────────────────────────────────
   Validation
───────────────────────────────────────────────────────────────── */

function validate(values: FormValues): FormErrors {
  const errs: FormErrors = {};

  if (!values.name.trim()) {
    errs.name = "Tu nombre es requerido.";
  }
  if (!values.businessName.trim()) {
    errs.businessName = "El nombre del negocio es requerido.";
  }
  if (!values.phone.trim()) {
    errs.phone = "El WhatsApp es requerido.";
  } else if (values.phone.replace(/\D/g, "").length < 7) {
    errs.phone = "Ingresá un número válido (mínimo 7 dígitos).";
  }
  if (!values.email.trim()) {
    errs.email = "El email es requerido.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errs.email = "Ingresá un email válido.";
  }

  return errs;
}

const EMPTY: FormValues = { name: "", businessName: "", phone: "", email: "" };

/* ─────────────────────────────────────────────────────────────────
   Focus trap
───────────────────────────────────────────────────────────────── */

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function useFocusTrap(ref: React.RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const el = ref.current;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    // Focus the first tabbable element immediately
    requestAnimationFrame(() => first?.focus());

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
    }

    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [active, ref]);
}

/* ─────────────────────────────────────────────────────────────────
   Mobile detection (for sheet vs centered animation)
───────────────────────────────────────────────────────────────── */

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setMobile(mq.matches);
    const h = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return mobile;
}

/* ─────────────────────────────────────────────────────────────────
   Plan card
───────────────────────────────────────────────────────────────── */

function PlanCard({
  plan,
  selected,
  onSelect,
}: {
  plan: Plan;
  selected: boolean;
  onSelect: () => void;
}) {
  const isYearly = plan === "YEARLY";
  const price = PLAN_PRICES[plan];

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "relative flex flex-1 flex-col rounded-2xl border-2 p-4 text-left transition-all duration-150",
        selected
          ? isYearly
            ? "border-[#7767db] bg-[#f8f6ff]"
            : "border-[#17151d] bg-[#fafafa]"
          : "border-[#e8e6ed] bg-white hover:border-[#c5c0d0]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2"
      )}
    >
      {isYearly && (
        <span
          aria-label="Mejor opción"
          className="absolute -top-3 left-3 rounded-full bg-[#7767db] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
        >
          Mejor opción
        </span>
      )}

      <p className="text-[13px] font-bold text-[#17151d]">
        {isYearly ? "Anual" : "Mensual"}
      </p>

      <p
        className={cn(
          "mt-2 text-[20px] font-bold leading-none tracking-tight",
          selected && isYearly ? "text-[#7767db]" : "text-[#17151d]"
        )}
      >
        {PLAN_PRICES.CURRENCY} {price.toLocaleString("es-UY")}
        <span className="ml-1 text-[12px] font-normal text-[#9691a0]">
          {isYearly ? "/año" : "/mes"}
        </span>
      </p>

      {isYearly ? (
        <div className="mt-2 space-y-0.5">
          <p className="text-[12px] font-semibold text-[#5d5963]">
            Pagás 10 meses y usás 12
          </p>
          <p className="text-[11px] text-[#9691a0]">2 meses incluidos</p>
        </div>
      ) : (
        <p className="mt-2 text-[12px] text-[#9691a0]">Pagás mes a mes.</p>
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Field
───────────────────────────────────────────────────────────────── */

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-[#17151d]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(
          "w-full rounded-xl border bg-white px-4 py-2.5 text-[14px] text-[#17151d]",
          "outline-none transition-all placeholder:text-[#c5c0d0]",
          "focus:ring-2 focus:ring-offset-0",
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-200"
            : "border-[#e8e6ed] hover:border-[#c5c0d0] focus:border-[#7767db] focus:ring-[#7767db]/20"
        )}
      />
      {error && (
        <p
          id={`${id}-err`}
          role="alert"
          className="mt-1 text-[12px] text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Spinner
───────────────────────────────────────────────────────────────── */

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Success state
───────────────────────────────────────────────────────────────── */

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f0eeff]">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#7767db"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>

      <h3 className="mt-5 font-display text-[20px] font-bold text-[#17151d]">
        ¡Ya casi!
      </h3>
      <p className="mt-2 max-w-[280px] text-[14px] leading-relaxed text-[#5d5963]">
        Recibimos tu información. En breve te contactamos para completar el
        proceso de pago.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-6 rounded-full border border-[#e8e6ed] px-6 py-2.5 text-[13px] font-semibold text-[#5d5963] transition-colors hover:border-[#c5c0d0] hover:text-[#17151d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db]"
      >
        Volver a la landing
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main modal
───────────────────────────────────────────────────────────────── */

export interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: Plan;
}

export function SubscribeModal({
  isOpen,
  onClose,
  defaultPlan = "YEARLY",
}: SubscribeModalProps) {
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const idempotencyKeyRef = useRef<string>("");

  const [values, setValues] = useState<FormValues>(EMPTY);
  const [plan, setPlan] = useState<Plan>(defaultPlan);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  // Sync defaultPlan when a different CTA opens the modal
  useEffect(() => {
    if (isOpen) setPlan(defaultPlan);
  }, [isOpen, defaultPlan]);

  // Reset on every open and generate a fresh idempotency key
  useEffect(() => {
    if (isOpen) {
      setValues(EMPTY);
      setErrors({});
      setStatus("idle");
      setErrorMsg("");
      idempotencyKeyRef.current = crypto.randomUUID();
    }
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useFocusTrap(dialogRef, isOpen);

  // Generic field setter — also clears that field's error on change
  const set = useCallback(
    (field: keyof FormValues) =>
      (v: string) => {
        setValues((prev) => ({ ...prev, [field]: v }));
        setErrors((prev) => {
          if (!prev[field]) return prev;
          const next = { ...prev };
          delete next[field];
          return next;
        });
      },
    []
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0] as keyof FormValues;
      dialogRef.current
        ?.querySelector<HTMLElement>(`#modal-field-${firstKey}`)
        ?.focus();
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    trackEvent("checkout_form_submitted", { plan });

    try {
      const payload: CheckoutIntentPayload = { ...values, plan };
      const result = await submitCheckoutIntent(payload, idempotencyKeyRef.current);
      trackEvent("checkout_created", { plan });
      navigateTo(result.checkoutUrl);
    } catch (err) {
      const code = err instanceof Error ? err.message : "unknown";
      trackEvent("checkout_creation_failed", { plan, code });

      let msg = "Ocurrió un error al procesar el pago. Intentá de nuevo.";
      if (code === "too_many_requests") {
        msg = "Demasiados intentos. Esperá un momento e intentá de nuevo.";
      } else if (code === "invalid_request") {
        msg = "Los datos ingresados no son válidos. Revisá el formulario.";
      } else if (code === "upstream_unavailable" || code === "upstream_error") {
        msg = "El servicio no está disponible en este momento. Intentá en unos minutos.";
      }

      setErrorMsg(msg);
      setStatus("error");
    }
  }

  // Animation variants — slide from bottom on mobile, fade+scale on desktop
  const initial = isMobile
    ? { opacity: 1, y: "100%" }
    : { opacity: 0, y: 24, scale: 0.97 };
  const animate = isMobile
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0, scale: 1 };
  const exit = isMobile
    ? { opacity: 1, y: "100%" }
    : { opacity: 0, y: 12, scale: 0.98 };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            key="dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed z-50 bg-white",
              // Desktop: centered modal
              "md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
              "md:w-full md:max-w-lg md:rounded-3xl",
              "md:shadow-[0_32px_80px_rgba(0,0,0,0.22)]",
              // Mobile: bottom sheet
              "inset-x-0 bottom-0 max-h-[92dvh] rounded-t-3xl",
              "shadow-[0_-8px_40px_rgba(0,0,0,0.14)]"
            )}
          >
            {/* Inner scroll area */}
            <div className="overflow-y-auto overscroll-contain md:max-h-[90vh]">
              {/* Drag handle (mobile only) */}
              <div className="flex justify-center pt-3 md:hidden" aria-hidden="true">
                <div className="h-1 w-10 rounded-full bg-[#e0dce8]" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-5 pb-0">
                <Logo variant="wordmark" className="h-6 w-auto" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#9691a0] transition-colors hover:bg-[#f0eeed] hover:text-[#17151d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 pb-7 pt-4">
                <form onSubmit={handleSubmit} noValidate data-testid="subscribe-form">
                    {/* Title + description */}
                    <div className="mb-5">
                      <h2
                        id={titleId}
                        className="font-display text-[22px] font-bold tracking-[-0.025em] text-[#17151d]"
                      >
                        Empezá con Flikker
                      </h2>
                      <p
                        id={descId}
                        className="mt-1.5 text-[14px] leading-relaxed text-[#5d5963]"
                      >
                        Dejanos tus datos y elegí cómo querés pagar.
                      </p>
                    </div>

                    {/* Fields */}
                    <div className="space-y-3.5">
                      <Field
                        id="modal-field-name"
                        label="Nombre"
                        value={values.name}
                        onChange={set("name")}
                        error={errors.name}
                        placeholder="Tu nombre"
                        autoComplete="given-name"
                      />
                      <Field
                        id="modal-field-businessName"
                        label="Negocio"
                        value={values.businessName}
                        onChange={set("businessName")}
                        error={errors.businessName}
                        placeholder="Nombre de tu negocio"
                        autoComplete="organization"
                      />
                      <Field
                        id="modal-field-phone"
                        label="WhatsApp"
                        type="tel"
                        value={values.phone}
                        onChange={set("phone")}
                        error={errors.phone}
                        placeholder="+598 9X XXX XXX"
                        autoComplete="tel"
                      />
                      <Field
                        id="modal-field-email"
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={set("email")}
                        error={errors.email}
                        placeholder="tu@email.com"
                        autoComplete="email"
                      />
                    </div>

                    {/* Plan selector */}
                    <div className="mt-5">
                      <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#9691a0]">
                        Elegí tu plan
                      </p>
                      <div
                        role="radiogroup"
                        aria-label="Plan de suscripción"
                        className="flex gap-3 pt-2"
                      >
                        <PlanCard
                          plan="MONTHLY"
                          selected={plan === "MONTHLY"}
                          onSelect={() => setPlan("MONTHLY")}
                        />
                        <PlanCard
                          plan="YEARLY"
                          selected={plan === "YEARLY"}
                          onSelect={() => setPlan("YEARLY")}
                        />
                      </div>
                    </div>

                    {/* Error banner */}
                    {status === "error" && errorMsg && (
                      <p
                        role="alert"
                        className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[13px] leading-relaxed text-red-700"
                      >
                        {errorMsg}
                      </p>
                    )}

                    {/* CTA */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={cn(
                        "mt-6 w-full rounded-full py-3.5 text-[15px] font-bold",
                        "bg-[#17151d] text-white",
                        "shadow-[0_4px_16px_rgba(23,21,29,0.22)]",
                        "transition-all duration-200",
                        "hover:bg-[#2d2a35] hover:-translate-y-0.5",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7767db] focus-visible:ring-offset-2",
                        "disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
                      )}
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2.5">
                          <Spinner />
                          Preparando pago…
                        </span>
                      ) : (
                        "Continuar al pago →"
                      )}
                    </button>

                    {/* Legal */}
                    <p className="mt-4 text-center text-[12px] leading-relaxed text-[#9691a0]">
                      Al continuar aceptás los{" "}
                      <a
                        href="/legal/terminos-y-condiciones.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors hover:text-[#5d5963]"
                      >
                        Términos y Condiciones
                      </a>{" "}
                      y la{" "}
                      <a
                        href="/legal/politica-de-privacidad.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors hover:text-[#5d5963]"
                      >
                        Política de privacidad
                      </a>
                      .
                    </p>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
