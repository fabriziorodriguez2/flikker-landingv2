import { ImageResponse } from "next/og";

export const alt =
  "Flikker — Más reseñas de Google para tu negocio, automático";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000441",
          color: "#dce2f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
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
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Tenés clientes felices.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#9188f5",
              marginTop: 4,
            }}
          >
            Google no lo está mostrando.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(220, 226, 240, 0.72)",
              marginTop: 36,
              maxWidth: 900,
            }}
          >
            Reseñas por WhatsApp después de cada compra, visita o servicio. Las
            buenas van a Google. Las malas te avisan primero.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(220, 226, 240, 0.55)",
          }}
        >
          <span style={{ display: "flex" }}>flikker.website</span>
          <span style={{ display: "flex" }}>
            Para negocios y marcas locales · Uruguay
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
