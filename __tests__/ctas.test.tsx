import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { APP_REGISTER_URL, APP_URL } from "@/lib/constants";

// ── framer-motion stub ──────────────────────────────────────────────────────
vi.mock("framer-motion", async () => {
  const React = require("react");
  const passThrough = ({ children, ...rest }: { children?: React.ReactNode; [k: string]: unknown }) =>
    React.createElement("div", rest, children);
  return {
    motion: new Proxy({}, {
      get: () => passThrough,
    }),
    AnimatePresence: passThrough,
    useReducedMotion: () => false,
    useMotionValue: (v: unknown) => ({ get: () => v, set: vi.fn(), onChange: vi.fn() }),
    useScroll: () => ({ scrollY: { get: () => 0, onChange: vi.fn() } }),
    useSpring: (v: unknown) => v,
    useTransform: () => 0,
  };
});

// ── next/image stub ─────────────────────────────────────────────────────────
vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const React = require("react");
    return React.createElement("img", props);
  },
}));

// ── next/link stub ──────────────────────────────────────────────────────────
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode } & React.HTMLAttributes<HTMLAnchorElement>) => {
    const React = require("react");
    return React.createElement("a", { href, ...rest }, children);
  },
}));

// ── components ──────────────────────────────────────────────────────────────
import { Hero } from "@/components/sections/Hero";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { Pricing } from "@/components/sections/Pricing";
import { CheckoutResultPage } from "@/components/ui/CheckoutResultPage";

// ── Hero ────────────────────────────────────────────────────────────────────
describe("Hero CTA", () => {
  it("links to APP_REGISTER_URL", () => {
    render(<Hero />);
    const link = screen.getByTestId("hero-cta");
    expect(link).toHaveAttribute("href", APP_REGISTER_URL);
  });

  it("does not contain any mpago.la link", () => {
    const { container } = render(<Hero />);
    expect(container.innerHTML).not.toContain("mpago.la");
  });
});

// ── CTAFinal ────────────────────────────────────────────────────────────────
describe("CTAFinal CTA", () => {
  it("links to APP_REGISTER_URL", () => {
    render(<CTAFinal />);
    const link = screen.getByTestId("cta-final-cta");
    expect(link).toHaveAttribute("href", APP_REGISTER_URL);
  });

  it("does not contain any mpago.la link", () => {
    const { container } = render(<CTAFinal />);
    expect(container.innerHTML).not.toContain("mpago.la");
  });
});

// ── Pricing ─────────────────────────────────────────────────────────────────
describe("Pricing CTAs", () => {
  it("Base CTA links to APP_REGISTER_URL", () => {
    render(<Pricing />);
    expect(screen.getByTestId("pricing-base-cta")).toHaveAttribute("href", APP_REGISTER_URL);
  });

  it("Pro CTA defaults to YEARLY billing", () => {
    render(<Pricing />);
    expect(screen.getByTestId("pricing-pro-cta")).toHaveAttribute(
      "href",
      `${APP_REGISTER_URL}?plan=PRO&billing=YEARLY`
    );
  });

  it("Pro CTA switches to MONTHLY after toggle", () => {
    render(<Pricing />);
    fireEvent.click(screen.getByTestId("billing-monthly"));
    expect(screen.getByTestId("pricing-pro-cta")).toHaveAttribute(
      "href",
      `${APP_REGISTER_URL}?plan=PRO&billing=MONTHLY`
    );
  });

  it("Pro CTA returns to YEARLY after toggling back", () => {
    render(<Pricing />);
    fireEvent.click(screen.getByTestId("billing-monthly"));
    fireEvent.click(screen.getByTestId("billing-yearly"));
    expect(screen.getByTestId("pricing-pro-cta")).toHaveAttribute(
      "href",
      `${APP_REGISTER_URL}?plan=PRO&billing=YEARLY`
    );
  });

  it("does not contain any mpago.la link", () => {
    const { container } = render(<Pricing />);
    expect(container.innerHTML).not.toContain("mpago.la");
  });

  it("does not call /api/checkout", () => {
    const { container } = render(<Pricing />);
    expect(container.innerHTML).not.toContain("/api/checkout");
  });
});

// ── Checkout result pages ────────────────────────────────────────────────────
describe("CheckoutResultPage", () => {
  it("success: CTA links to APP_URL", () => {
    render(<CheckoutResultPage variant="success" />);
    expect(screen.getByRole("link", { name: "Ir a Flikker" })).toHaveAttribute("href", APP_URL);
  });

  it("success: does not say 'confirmado' in CTA copy", () => {
    render(<CheckoutResultPage variant="success" />);
    const cta = screen.getByRole("link", { name: "Ir a Flikker" });
    expect(cta.textContent).not.toMatch(/confirmado/i);
  });

  it("pending: CTA links to APP_URL", () => {
    render(<CheckoutResultPage variant="pending" />);
    expect(screen.getByRole("link", { name: "Ir a Flikker" })).toHaveAttribute("href", APP_URL);
  });

  it("failure: CTA links to APP_URL", () => {
    render(<CheckoutResultPage variant="failure" />);
    expect(screen.getByRole("link", { name: "Volver a Flikker" })).toHaveAttribute("href", APP_URL);
  });

  it("no mpago.la links on any variant", () => {
    for (const variant of ["success", "pending", "failure"] as const) {
      const { container, unmount } = render(<CheckoutResultPage variant={variant} />);
      expect(container.innerHTML).not.toContain("mpago.la");
      unmount();
    }
  });
});
