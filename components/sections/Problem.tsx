"use client";

import { useEffect, useRef, useState } from "react";

const CUSTOMERS = [
  { x: 72, y: 92 },
  { x: 166, y: 76 },
  { x: 258, y: 95 },
  { x: 352, y: 73 },
  { x: 450, y: 89 },
  { x: 548, y: 70 },
  { x: 646, y: 91 },
  { x: 740, y: 74 },
  { x: 834, y: 94 },
  { x: 928, y: 78 },
  { x: 91, y: 183 },
  { x: 186, y: 167 },
  { x: 280, y: 188 },
  { x: 376, y: 169 },
  { x: 472, y: 185 },
  { x: 568, y: 166 },
  { x: 664, y: 188 },
  { x: 758, y: 168 },
  { x: 850, y: 186 },
  { x: 930, y: 168 },
] as const;

const RETURNING_CUSTOMERS = new Set([1, 4, 7, 11, 15, 18]);

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    function updateProgress() {
      animationFrame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(
        section.offsetHeight - window.innerHeight,
        1,
      );
      const nextProgress = Math.min(
        Math.max(-rect.top / scrollableDistance, 0),
        1,
      );

      setScrollProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) < 0.001
          ? currentProgress
          : nextProgress,
      );
    }

    function scheduleUpdate() {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    }

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("load", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("load", scheduleUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const showFinalLabel = scrollProgress >= 0.72;
  const showQuestion = scrollProgress >= 0.94;

  return (
    <section
      ref={sectionRef}
      id="problema"
      aria-labelledby="problem-title"
      className="relative min-h-[190vh] bg-[#f2eee7] text-[#1d1a21]"
    >
      <div className="sticky top-0 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-5 py-24 sm:px-8 lg:px-6 xl:px-0">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#7767db] sm:text-[11px]">
          El costo invisible
        </p>

        <h2
          id="problem-title"
          className="mx-auto mt-5 max-w-[1040px] text-center font-display text-[42px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[58px] lg:text-[76px]"
        >
          Conseguir un cliente cuesta. Perderlo después de una compra cuesta
          más.
        </h2>

        <div className="mx-auto mt-14 w-full max-w-[970px] sm:mt-20">
          <div className="relative h-7 text-center sm:h-8">
            <p
              aria-live="polite"
              className={`absolute inset-x-0 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 sm:text-base ${
                showFinalLabel ? "text-[#38236f]" : "text-[#5f5963]"
              }`}
            >
              {showFinalLabel ? "6 volvieron" : "20 clientes entraron"}
            </p>
          </div>

          <svg
            viewBox="0 0 1000 260"
            role="img"
            aria-label="De veinte clientes iniciales, solamente seis regresaron"
            className="mt-2 h-auto w-full overflow-visible"
          >
            <path
              d="M46 130 C220 116 318 139 500 128 C682 117 790 140 954 126"
              fill="none"
              stroke="rgba(66, 54, 72, 0.09)"
              strokeWidth="1.5"
            />
            {CUSTOMERS.map((customer, index) => (
              <CustomerDot
                key={`${customer.x}-${customer.y}`}
                x={customer.x}
                y={customer.y}
                returning={RETURNING_CUSTOMERS.has(index)}
                index={index}
                progress={scrollProgress}
              />
            ))}
          </svg>

          <p
            aria-hidden={!showQuestion}
            className="mt-4 text-center font-display text-2xl font-semibold tracking-[-0.035em] text-[#242028] sm:mt-7 sm:text-3xl lg:text-[38px]"
            style={{
              opacity: showQuestion ? 1 : 0,
              transform: showQuestion ? "translateY(0)" : "translateY(14px)",
              visibility: showQuestion ? "visible" : "hidden",
              transition:
                "opacity 320ms ease, transform 320ms ease, visibility 320ms",
            }}
          >
            ¿Qué pasó con los otros 14?
          </p>
        </div>
      </div>
    </section>
  );
}

function CustomerDot({
  x,
  y,
  returning,
  index,
  progress,
}: {
  x: number;
  y: number;
  returning: boolean;
  index: number;
  progress: number;
}) {
  const fadeStart = 0.18 + (index % 7) * 0.025;
  const fadeEnd = fadeStart + 0.32;
  const fadeAmount = returning
    ? 0
    : Math.min(Math.max((progress - fadeStart) / (fadeEnd - fadeStart), 0), 1);

  return (
    <circle
      cx={x}
      cy={y}
      r={returning ? 12 : 10}
      fill={returning ? "#6048bd" : "#77707a"}
      style={{
        opacity: 1 - fadeAmount,
        transform: `scale(${1 - fadeAmount * 0.45})`,
        transformBox: "fill-box",
        transformOrigin: "center",
        transitionProperty: "opacity, transform",
        transitionDuration: "80ms",
        transitionTimingFunction: "linear",
      }}
    />
  );
}
