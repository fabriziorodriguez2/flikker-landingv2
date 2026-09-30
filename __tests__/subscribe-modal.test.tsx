/**
 * Tests — Flikker subscription funnel (PARTE 1 + PARTE 3B)
 *
 * Cubren:
 * - CTAs abren el mismo modal
 * - Validación de cada campo
 * - Selector de plan (MONTHLY / YEARLY)
 * - Copy anual correcto
 * - Payload correcto al submit (incluyendo idempotency key)
 * - Redirect a checkoutUrl tras submit exitoso
 * - Error state cuando submitCheckoutIntent falla
 * - Mismo idempotency key en retry, nuevo al reabrir
 * - NO hay llamadas a MP directas
 */

import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SubscribeModal } from "@/components/ui/SubscribeModal";
import * as checkoutModule from "@/lib/checkout";
import * as navigationModule from "@/lib/navigation";

// ── Mocks ──────────────────────────────────────────────────────────

vi.mock("next/font/google", () => ({
  Plus_Jakarta_Sans: () => ({ variable: "--font-jakarta", className: "" }),
}));

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img {...props} />
  ),
}));

vi.mock("@/components/ui/Logo", () => ({
  Logo: ({ className }: { className?: string }) => (
    <span className={className} data-testid="logo">
      Flikker
    </span>
  ),
}));

vi.mock("@/lib/analytics", () => ({
  trackEvent: vi.fn(),
}));

import type { MockInstance } from "vitest";
let submitSpy: MockInstance;
let navigateSpy: MockInstance;
const MOCK_CHECKOUT_URL = "https://www.mercadopago.com.uy/checkout/v1/redirect?pref_id=test-123";

// ── Helpers ────────────────────────────────────────────────────────

function renderModal(
  props: Partial<React.ComponentProps<typeof SubscribeModal>> = {}
) {
  const onClose = vi.fn();
  const result = render(
    <SubscribeModal isOpen={true} onClose={onClose} {...props} />
  );
  return { ...result, onClose };
}

async function fillForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Nombre"), "Ana García");
  await user.type(screen.getByLabelText("Negocio"), "Cafetería La Palma");
  await user.type(screen.getByLabelText("WhatsApp"), "+598 91 234 567");
  await user.type(screen.getByLabelText("Email"), "ana@lapalma.uy");
}

// ── Suite ──────────────────────────────────────────────────────────

describe("SubscribeModal", () => {
  beforeEach(() => {
    submitSpy = vi
      .spyOn(checkoutModule, "submitCheckoutIntent")
      .mockResolvedValue({ checkoutUrl: MOCK_CHECKOUT_URL });

    // Spy on the navigation module — avoids touching jsdom's non-configurable window.location
    navigateSpy = vi
      .spyOn(navigationModule, "navigateTo")
      .mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // ── Rendering ───────────────────────────────────────────────────

  it("renders when isOpen=true", () => {
    renderModal();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Empezá con Flikker")).toBeInTheDocument();
  });

  it("does not render when isOpen=false", () => {
    render(<SubscribeModal isOpen={false} onClose={vi.fn()} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  // ── Close behaviour ─────────────────────────────────────────────

  it("calls onClose when the × button is clicked", async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();

    await user.click(screen.getByRole("button", { name: /cerrar/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when ESC is pressed", async () => {
    const user = userEvent.setup();
    const { onClose } = renderModal();

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("closing does NOT call navigateTo", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.click(screen.getByRole("button", { name: /cerrar/i }));
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  // ── Validation — Nombre ─────────────────────────────────────────

  it("shows error when Nombre is empty", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));
    expect(await screen.findByText(/tu nombre es requerido/i)).toBeInTheDocument();
  });

  // ── Validation — Negocio ────────────────────────────────────────

  it("shows error when Negocio is empty", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByText(/el nombre del negocio es requerido/i)
    ).toBeInTheDocument();
  });

  // ── Validation — WhatsApp ───────────────────────────────────────

  it("shows error when WhatsApp is empty", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Negocio"), "La Palma");
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByText(/el whatsapp es requerido/i)
    ).toBeInTheDocument();
  });

  it("shows error when WhatsApp has fewer than 7 digits", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Negocio"), "La Palma");
    await user.type(screen.getByLabelText("WhatsApp"), "123");
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByText(/número válido/i)
    ).toBeInTheDocument();
  });

  // ── Validation — Email ──────────────────────────────────────────

  it("shows error when Email is empty", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Negocio"), "La Palma");
    await user.type(screen.getByLabelText("WhatsApp"), "+598 912 345 67");
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByText(/el email es requerido/i)
    ).toBeInTheDocument();
  });

  it("shows error when Email format is invalid", async () => {
    const user = userEvent.setup();
    renderModal();

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Negocio"), "La Palma");
    await user.type(screen.getByLabelText("WhatsApp"), "+598 912 345 67");
    await user.type(screen.getByLabelText("Email"), "noesvalido");
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByText(/email válido/i)
    ).toBeInTheDocument();
  });

  // ── Plan selector ───────────────────────────────────────────────

  it("defaults to YEARLY plan", () => {
    renderModal({ defaultPlan: "YEARLY" });
    const yearlyCard = screen.getByRole("radio", { name: /anual/i });
    expect(yearlyCard).toHaveAttribute("aria-checked", "true");
  });

  it("allows selecting MONTHLY plan", async () => {
    const user = userEvent.setup();
    renderModal({ defaultPlan: "YEARLY" });

    await user.click(screen.getByRole("radio", { name: /mensual/i }));
    expect(screen.getByRole("radio", { name: /mensual/i })).toHaveAttribute(
      "aria-checked",
      "true"
    );
    expect(screen.getByRole("radio", { name: /anual/i })).toHaveAttribute(
      "aria-checked",
      "false"
    );
  });

  it("allows selecting YEARLY plan", async () => {
    const user = userEvent.setup();
    renderModal({ defaultPlan: "MONTHLY" });

    await user.click(screen.getByRole("radio", { name: /anual/i }));
    expect(screen.getByRole("radio", { name: /anual/i })).toHaveAttribute(
      "aria-checked",
      "true"
    );
  });

  it("shows 'Pagás 10 meses y usás 12' copy for the annual plan", () => {
    renderModal({ defaultPlan: "YEARLY" });
    expect(
      screen.getByText(/pagás 10 meses y usás 12/i)
    ).toBeInTheDocument();
  });

  it("shows 'Mejor opción' badge on the annual plan card", () => {
    renderModal();
    expect(screen.getByText(/mejor opción/i)).toBeInTheDocument();
  });

  it("shows 'Pagás mes a mes' copy for monthly plan", () => {
    renderModal({ defaultPlan: "MONTHLY" });
    expect(screen.getByText(/pagás mes a mes/i)).toBeInTheDocument();
  });

  // ── Payload ─────────────────────────────────────────────────────

  it("submits correct YEARLY payload with an idempotency key", async () => {
    const user = userEvent.setup();
    renderModal({ defaultPlan: "YEARLY" });

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    await waitFor(() =>
      expect(submitSpy).toHaveBeenCalledWith(
        {
          name: "Ana García",
          businessName: "Cafetería La Palma",
          phone: "+598 91 234 567",
          email: "ana@lapalma.uy",
          plan: "YEARLY",
        },
        expect.any(String)
      )
    );
  });

  it("submits correct MONTHLY payload", async () => {
    const user = userEvent.setup();
    renderModal({ defaultPlan: "MONTHLY" });

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    await waitFor(() =>
      expect(submitSpy).toHaveBeenCalledWith(
        expect.objectContaining({ plan: "MONTHLY" }),
        expect.any(String)
      )
    );
  });

  // ── Redirect on success ─────────────────────────────────────────

  it("calls navigateTo with checkoutUrl after successful submit", async () => {
    const user = userEvent.setup();
    renderModal();
    await fillForm(user);
    // fireEvent.submit bypasses pointer-event positioning issues in jsdom
    fireEvent.submit(screen.getByTestId("subscribe-form"));

    await waitFor(() => {
      expect(submitSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(MOCK_CHECKOUT_URL);
    });
  });

  it("does NOT navigate to a static mpago.la link", async () => {
    const user = userEvent.setup();
    renderModal();
    await fillForm(user);
    fireEvent.submit(screen.getByTestId("subscribe-form"));

    await waitFor(() => expect(navigateSpy).toHaveBeenCalled());
    const navigatedUrl = navigateSpy.mock.calls[0][0] as string;
    expect(navigatedUrl).not.toMatch(/mpago\.la/);
  });

  // ── Error state ─────────────────────────────────────────────────

  it("shows error message when submitCheckoutIntent throws", async () => {
    submitSpy.mockRejectedValueOnce(
      new checkoutModule.CheckoutError("checkout_error", 502, "upstream_error")
    );
    const user = userEvent.setup();
    renderModal();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(
      await screen.findByRole("alert")
    ).toBeInTheDocument();
  });

  it("keeps modal open after error", async () => {
    submitSpy.mockRejectedValueOnce(
      new checkoutModule.CheckoutError("checkout_error", 503, "upstream_unavailable")
    );
    const user = userEvent.setup();
    renderModal();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    // Error banner must appear
    await screen.findByRole("alert");
    // Must NOT redirect — staying on the page
    expect(navigateSpy).not.toHaveBeenCalled();
    // Form still visible (modal hasn't navigated away)
    expect(screen.getByRole("button", { name: /continuar al pago/i })).toBeInTheDocument();
  });

  it("shows rate-limit message for 429 error", async () => {
    submitSpy.mockRejectedValueOnce(
      new checkoutModule.CheckoutError("too_many_requests", 429, "too_many_requests")
    );
    const user = userEvent.setup();
    renderModal();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));

    expect(await screen.findByText(/demasiados intentos/i)).toBeInTheDocument();
  });

  // ── Idempotency key ─────────────────────────────────────────────

  it("reuses the same idempotency key on retry", async () => {
    submitSpy
      .mockRejectedValueOnce(
        new checkoutModule.CheckoutError("checkout_error", 503, "upstream_unavailable")
      )
      .mockResolvedValueOnce({ checkoutUrl: MOCK_CHECKOUT_URL });

    const user = userEvent.setup();
    renderModal();

    await fillForm(user);
    await user.click(screen.getByRole("button", { name: /continuar al pago/i }));
    await screen.findByRole("alert");

    // Retry — fireEvent.submit avoids jsdom pointer-event positioning after layout shift
    fireEvent.submit(screen.getByTestId("subscribe-form"));
    await waitFor(() => expect(navigateSpy).toHaveBeenCalled());

    const key1 = (submitSpy.mock.calls[0] as [unknown, string])[1];
    const key2 = (submitSpy.mock.calls[1] as [unknown, string])[1];
    expect(key1).toBe(key2);
  });

  it("generates a new idempotency key when modal is reopened", async () => {
    // First open: capture key from first submit
    const user1 = userEvent.setup();
    const { unmount } = renderModal();
    await fillForm(user1);
    await user1.click(screen.getByRole("button", { name: /continuar al pago/i }));
    await waitFor(() => expect(submitSpy).toHaveBeenCalled());
    const key1 = (submitSpy.mock.calls[0] as [unknown, string])[1];
    unmount();

    // Reset for second open
    submitSpy.mockClear();
    navigateSpy.mockClear();

    // Second open: must generate a different key
    const user2 = userEvent.setup();
    render(<SubscribeModal isOpen={true} onClose={vi.fn()} defaultPlan="YEARLY" />);
    await user2.type(screen.getByLabelText("Nombre"), "Bob");
    await user2.type(screen.getByLabelText("Negocio"), "Tienda Bob");
    await user2.type(screen.getByLabelText("WhatsApp"), "+598 91 000 001");
    await user2.type(screen.getByLabelText("Email"), "bob@tienda.uy");
    await user2.click(screen.getByRole("button", { name: /continuar al pago/i }));
    await waitFor(() => expect(submitSpy).toHaveBeenCalled());
    const key2 = (submitSpy.mock.calls[0] as [unknown, string])[1];

    expect(key1).not.toBe(key2);
    expect(typeof key1).toBe("string");
    expect(typeof key2).toBe("string");
  });

  // ── Accessibility ───────────────────────────────────────────────

  it("dialog has aria-labelledby pointing to the heading", () => {
    renderModal();
    const dialog = screen.getByRole("dialog");
    const labelId = dialog.getAttribute("aria-labelledby");
    expect(labelId).toBeTruthy();
    const heading = document.getElementById(labelId!);
    expect(heading?.textContent).toMatch(/empezá con flikker/i);
  });

  it("contains a link to Términos y Condiciones", () => {
    renderModal();
    const link = screen.getByRole("link", { name: /términos y condiciones/i });
    expect(link).toHaveAttribute("href", "/legal/terminos-y-condiciones.html");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("contains a link to Política de privacidad", () => {
    renderModal();
    const link = screen.getByRole("link", { name: /política de privacidad/i });
    expect(link).toHaveAttribute("href", "/legal/politica-de-privacidad.html");
  });
});

// ── Multiple CTAs open the same funnel ────────────────────────────

describe("Multiple CTAs — same modal identity", () => {
  it("all CTAs open a dialog with aria-modal=true", () => {
    const { unmount: u1 } = render(
      <SubscribeModal isOpen={true} onClose={vi.fn()} defaultPlan="YEARLY" />
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    u1();

    const { unmount: u2 } = render(
      <SubscribeModal isOpen={true} onClose={vi.fn()} defaultPlan="MONTHLY" />
    );
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
    u2();
  });
});
