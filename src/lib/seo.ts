import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export const OG_DEFAULT = {
  url: "/images/car-giulia.jpg",
  width: 1280,
  height: 590,
  alt: "Alfa Romeo Giulia — μεταχειρισμένα ανταλλακτικά Nikos Θεσσαλονίκη",
} as const;

export const mapsSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Mesologiou+3+Kalamaria+Thessaloniki+55133+Greece";

type PageMetadataOptions = {
  /** Used with the root layout title template (`%s | Nikos Alfa Parts`). */
  title: string;
  description: string;
  /** Path starting with `/`. */
  path: string;
  ogImage?: { url: string; alt: string; width?: number; height?: number };
  noIndex?: boolean;
};

export function pageMetadata({
  title,
  description,
  path,
  ogImage = OG_DEFAULT,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "") || "/";
  const publicTitle =
    title.includes("Nikos") || title.includes("Nikos Alfa")
      ? title
      : `${title} | Nikos Alfa Parts`;
  const og = {
    url: ogImage.url,
    width: ogImage.width ?? OG_DEFAULT.width,
    height: ogImage.height ?? OG_DEFAULT.height,
    alt: ogImage.alt,
  };

  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined;

  return {
    title,
    description,
    ...(!noIndex
      ? {
          alternates: {
            canonical,
            languages: { "el-GR": canonical },
          },
        }
      : {}),
    openGraph: {
      type: "website",
      locale: "el_GR",
      siteName: site.name,
      title: publicTitle,
      description,
      url: canonical,
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title: publicTitle,
      description,
      images: [og.url],
    },
    ...(verification ? { verification } : {}),
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}

/** Full `<title>` without applying the layout template (home + long-tail model titles). */
export function absoluteTitle(fullTitle: string): Metadata["title"] {
  return { absolute: fullTitle };
}

export function absolutePageUrl(path: string) {
  return absoluteUrl(path.startsWith("/") ? path : `/${path}`);
}
