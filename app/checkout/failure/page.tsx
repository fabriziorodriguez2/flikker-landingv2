import type { Metadata } from "next";
import { CheckoutResultPage } from "@/components/ui/CheckoutResultPage";

export const metadata: Metadata = {
  title: "Pago fallido — Flikker",
  robots: { index: false },
};

export default function FailurePage() {
  return <CheckoutResultPage variant="failure" />;
}
