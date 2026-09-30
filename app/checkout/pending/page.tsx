import type { Metadata } from "next";
import { CheckoutResultPage } from "@/components/ui/CheckoutResultPage";

export const metadata: Metadata = {
  title: "Pago pendiente — Flikker",
  robots: { index: false },
};

export default function PendingPage() {
  return <CheckoutResultPage variant="pending" />;
}
