"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Gift,
  LayoutDashboard,
  MapPin,
  Repeat2,
  TicketCheck,
  UserRoundCheck,
  Users,
} from "lucide-react";

import { Logo } from "@/components/ui/Logo";

// Demo-only sample data. These values are illustrative and are not customer claims.
const DEMO_METRICS = {
  recurrentCustomers: 184,
  returnRate: "38%",
  confirmedVisits: 612,
  rewardsRedeemed: 47,
  recoveredCustomers: 23,
  period: "Últimos 30 días",
} as const;

const DEMO_WEEKLY_VISITS = [
  { week: "Sem 1", recurrent: 78, firstVisit: 42 },
  { week: "Sem 2", recurrent: 96, firstVisit: 48 },
  { week: "Sem 3", recurrent: 112, firstVisit: 51 },
  { week: "Sem 4", recurrent: 126, firstVisit: 59 },
] as const;

export function Comparison() {
  return (
    <section
      id="resultados"
      aria-labelledby="results-title"
      className="bg-white py-24 text-[#211e24] sm:py-32"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-6 xl:px-0">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
            Resultados del local
          </p>
          <h2
            id="results-title"
            className="mt-5 font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[70px]"
          >
            No midas mensajes. Medí gente que volvió.
          </h2>
          <p className="mx-auto mt-6 max-w-[690px] text-[17px] leading-[1.65] text-[#6d6671] sm:text-lg">
            El panel pone primero las visitas recurrentes, las recompensas
            utilizadas y los clientes que regresaron al local.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[26px] border border-[#dcd8df] bg-[#f5f5f7] shadow-[0_28px_80px_rgba(32,24,40,0.12)] sm:mt-18 sm:rounded-[34px]">
          <DashboardHeader />

          <div className="grid md:grid-cols-[190px_minmax(0,1fr)]">
            <DashboardSidebar />
            <DashboardContent />
          </div>
        </div>

        <p className="mt-4 text-center text-[10px] leading-5 text-[#928b95]">
          Datos de demostración. Las cifras ilustran la jerarquía del panel y
          no representan resultados de un cliente real.
        </p>
      </div>
    </section>
  );
}

function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#dedbe1] bg-white px-5 sm:px-7">
      <div className="flex items-center gap-4">
        <Logo variant="wordmark" className="h-5 w-auto" />
        <span className="hidden h-5 w-px bg-[#dedbe1] sm:block" />
        <div className="hidden items-center gap-2 sm:flex">
          <MapPin className="h-3.5 w-3.5 text-[#7767db]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#514b56]">La Stampa Centro</span>
        </div>
      </div>
      <span className="rounded-full bg-[#eeeafd] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#5d48b4]">
        Demo
      </span>
    </header>
  );
}

function DashboardSidebar() {
  return (
    <aside className="hidden border-r border-[#dedbe1] bg-[#fbfbfc] p-4 md:block">
      <nav aria-label="Navegación del panel" className="space-y-1.5">
        <SidebarItem icon={LayoutDashboard} label="Resumen" active />
        <SidebarItem icon={Users} label="Clientes" />
        <SidebarItem icon={Repeat2} label="Visitas" />
        <SidebarItem icon={Gift} label="Recompensas" />
      </nav>

      <div className="mt-8 border-t border-[#e4e1e6] pt-5">
        <p className="px-3 text-[9px] font-bold uppercase tracking-[0.14em] text-[#a19aa4]">
          Local
        </p>
        <div className="mt-3 flex items-center gap-2.5 px-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#171320] font-serif text-[8px] font-bold italic text-white">
            LS
          </div>
          <div>
            <p className="text-[11px] font-bold text-[#48424d]">La Stampa</p>
            <p className="mt-0.5 text-[9px] text-[#918a94]">Montevideo</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: typeof LayoutDashboard;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex h-10 items-center gap-2.5 rounded-xl px-3 text-[11px] font-semibold ${
        active ? "bg-[#ebe7fb] text-[#523eaa]" : "text-[#7a737e]"
      }`}
    >
      <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      {label}
    </div>
  );
}

function DashboardContent() {
  return (
    <main className="min-w-0 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#958e98]">
            Resumen
          </p>
          <h3 className="mt-1 text-lg font-bold tracking-[-0.025em] text-[#28242c] sm:text-xl">
            Recurrencia del negocio
          </h3>
        </div>
        <div className="inline-flex h-9 items-center gap-2 self-start rounded-full border border-[#d9d5dc] bg-white px-3 text-[10px] font-semibold text-[#655f69] sm:self-auto">
          <CalendarDays className="h-3.5 w-3.5 text-[#7767db]" aria-hidden="true" />
          {DEMO_METRICS.period}
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <PrimaryMetric />
        <MetricCard
          icon={Repeat2}
          label="Tasa de retorno"
          value={DEMO_METRICS.returnRate}
          detail="volvieron en el período"
        />
        <MetricCard
          icon={TicketCheck}
          label="Visitas confirmadas"
          value={DEMO_METRICS.confirmedVisits}
          detail="check-ins reales"
        />
        <MetricCard
          icon={Gift}
          label="Premios canjeados"
          value={DEMO_METRICS.rewardsRedeemed}
          detail="mostrados en el local"
        />
        <MetricCard
          icon={UserRoundCheck}
          label="Clientes recuperados"
          value={DEMO_METRICS.recoveredCustomers}
          detail="volvieron tras contacto"
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.75fr)]">
        <VisitsChart />
        <RecentReturns />
      </div>

      <p className="mt-4 text-[9px] leading-4 text-[#918a94]">
        “Clientes recuperados” registra una visita posterior a un contacto de
        reactivación. Es una secuencia temporal, no una atribución causal.
      </p>
    </main>
  );
}

function PrimaryMetric() {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion() === true;
  const [value, setValue] = useState(reducedMotion ? DEMO_METRICS.recurrentCustomers : 0);

  useEffect(() => {
    if (!isInView) return;

    const target = DEMO_METRICS.recurrentCustomers;

    if (reducedMotion) {
      const reducedMotionFrame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    const duration = 650;
    const startedAt = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reducedMotion]);

  return (
    <div className="relative overflow-hidden rounded-[18px] bg-[#2f176e] p-4 text-white sm:col-span-2 lg:col-span-2 lg:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/55">
            Métrica principal
          </p>
          <p className="mt-2 text-xs font-semibold text-white/80">Clientes recurrentes</p>
        </div>
        <Repeat2 className="h-5 w-5 text-[#b9abff]" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <p className="mt-6 flex items-baseline gap-2">
        <span
          ref={numberRef}
          className="font-display text-[40px] font-semibold leading-none tracking-[-0.05em] lg:text-[46px]"
        >
          {value}
        </span>
        <span className="text-[10px] text-white/50">personas</span>
      </p>
      <p className="mt-2 text-[9px] leading-4 text-white/55">
        Clientes con dos o más visitas confirmadas.
      </p>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Repeat2;
  label: string;
  value: string | number;
  detail: string;
}) {
  return (
    <div className="rounded-[18px] border border-[#dedbe1] bg-white p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eeeafd] text-[#5c46b4]">
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <p className="mt-5 font-display text-[25px] font-semibold leading-none tracking-[-0.04em] text-[#28232d]">
        {value}
      </p>
      <p className="mt-2 text-[10px] font-bold leading-4 text-[#504a55]">{label}</p>
      <p className="mt-1 text-[8px] leading-3.5 text-[#99929c]">{detail}</p>
    </div>
  );
}

function VisitsChart() {
  return (
    <div className="rounded-[18px] border border-[#dedbe1] bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold text-[#39333e]">Visitas por semana</p>
          <p className="mt-1 text-[9px] text-[#958e98]">Recurrentes antes que volumen total</p>
        </div>
        <div className="flex items-center gap-4 text-[8px] font-semibold text-[#77707a]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#654dc4]" /> Recurrentes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-[#d8d3dc]" /> Primera visita
          </span>
        </div>
      </div>

      <div className="mt-5 grid h-[155px] grid-cols-4 items-end gap-3 border-b border-[#dedbe1] px-2 sm:gap-5">
        {DEMO_WEEKLY_VISITS.map((item) => (
          <div key={item.week} className="flex h-full flex-col justify-end">
            <div className="flex items-end justify-center gap-1 sm:gap-2">
              <div
                className="w-3 rounded-t bg-[#654dc4] sm:w-5"
                style={{ height: `${item.recurrent}px` }}
                title={`${item.recurrent} visitas recurrentes`}
              />
              <div
                className="w-3 rounded-t bg-[#d8d3dc] sm:w-5"
                style={{ height: `${item.firstVisit}px` }}
                title={`${item.firstVisit} primeras visitas`}
              />
            </div>
            <p className="mt-2 pb-2 text-center text-[8px] font-semibold text-[#918a94]">
              {item.week}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecentReturns() {
  const rows = [
    { initials: "MM", name: "María M.", detail: "4.ª visita", time: "Hoy, 11:42" },
    { initials: "JR", name: "Joaquín R.", detail: "Volvió tras 36 días", time: "Hoy, 10:18" },
    { initials: "LS", name: "Lucía S.", detail: "Premio canjeado", time: "Ayer, 18:05" },
  ] as const;

  return (
    <div className="rounded-[18px] border border-[#dedbe1] bg-white p-4 sm:p-5">
      <p className="text-xs font-bold text-[#39333e]">Regresos recientes</p>
      <p className="mt-1 text-[9px] text-[#958e98]">Actividad confirmada en el local</p>

      <div className="mt-4 divide-y divide-[#ebe8ed]">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-3 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eeeafd] text-[8px] font-bold text-[#5c46b4]">
              {row.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-[#49434e]">{row.name}</p>
              <p className="mt-0.5 truncate text-[8px] text-[#918a94]">{row.detail}</p>
            </div>
            <span className="shrink-0 text-[7px] text-[#aaa4ac]">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
