import type { MetadataRoute } from "next";
import { defaultDescription, site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#101418",
    theme_color: "#c4002a",
    lang: "el",
    orientation: "portrait-primary",
    categories: ["automotive", "shopping"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
