import type { Metadata } from "next";
import { CheckoutResultPage } from "@/components/ui/CheckoutResultPage";

export const metadata: Metadata = {
  title: "Pago en proceso — Flikker",
  robots: { index: false },
};

export default function SuccessPage() {
  return <CheckoutResultPage variant="success" />;
}
