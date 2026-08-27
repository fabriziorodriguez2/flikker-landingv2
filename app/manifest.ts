import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flikker",
    short_name: "Flikker",
    description: "Retención, reseñas y clientes que vuelven para negocios físicos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#9188f5",
    icons: [
      {
        src: "/brand/flikker-isotype.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
