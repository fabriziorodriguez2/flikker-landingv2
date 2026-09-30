"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { type Plan } from "@/lib/checkout";
import { SubscribeModal } from "@/components/ui/SubscribeModal";

/* ─────────────────────────────────────────────────────────────────
   Context
───────────────────────────────────────────────────────────────── */

interface SubscribeModalContextValue {
  /** Abre el modal de suscripción, opcionalmente con un plan pre-seleccionado */
  openSubscribeModal: (plan?: Plan) => void;
}

const SubscribeModalContext =
  createContext<SubscribeModalContextValue | null>(null);

export function useOpenSubscribeModal(): (plan?: Plan) => void {
  const ctx = useContext(SubscribeModalContext);
  if (!ctx) {
    throw new Error(
      "useOpenSubscribeModal must be used inside <Providers>"
    );
  }
  return ctx.openSubscribeModal;
}

/* ─────────────────────────────────────────────────────────────────
   Provider
───────────────────────────────────────────────────────────────── */

export function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultPlan, setDefaultPlan] = useState<Plan>("YEARLY");

  const openSubscribeModal = useCallback((plan: Plan = "YEARLY") => {
    setDefaultPlan(plan);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openSubscribeModal }),
    [openSubscribeModal]
  );

  return (
    <SubscribeModalContext.Provider value={value}>
      {children}
      <SubscribeModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultPlan={defaultPlan}
      />
    </SubscribeModalContext.Provider>
  );
}
