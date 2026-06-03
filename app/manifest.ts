import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flikker",
    short_name: "Flikker",
    description: "La plataforma de reputación local para negocios",
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
