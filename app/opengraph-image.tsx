import { ImageResponse } from "next/og";

export const alt =
  "Flikker — Retención, reseñas y clientes que vuelven para negocios físicos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0916",
          color: "#dce2f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "400px",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(119,103,219,0.35) 0%, transparent 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            color: "#9188f5",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Flikker
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Hacé que tus clientes
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#9188f5",
              marginTop: 4,
            }}
          >
            quieran volver.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(220, 226, 240, 0.68)",
              marginTop: 36,
              maxWidth: 860,
            }}
          >
            Retención, reseñas y reactivación automática para negocios físicos.
            Sin app. Con QR o NFC.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(220, 226, 240, 0.50)",
          }}
        >
          <span style={{ display: "flex" }}>flikker.uy</span>
          <span style={{ display: "flex" }}>
            Para negocios físicos · Uruguay
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
