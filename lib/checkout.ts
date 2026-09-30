export type Plan = "MONTHLY" | "YEARLY";

export interface CheckoutIntentPayload {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  plan: Plan;
}

export interface CheckoutIntentResult {
  checkoutUrl: string;
}

export class CheckoutError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string
  ) {
    super(message);
    this.name = "CheckoutError";
  }
}

export async function submitCheckoutIntent(
  payload: CheckoutIntentPayload,
  idempotencyKey: string
): Promise<CheckoutIntentResult> {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res
      .json()
      .catch(() => ({ error: "unknown" })) as { error?: string };
    throw new CheckoutError(
      data.error ?? "checkout_error",
      res.status,
      data.error ?? "unknown"
    );
  }

  return res.json() as Promise<CheckoutIntentResult>;
}
