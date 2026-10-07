import type { MetadataRoute } from "next";
import { alfaModels } from "@/lib/models";
import { absoluteUrl } from "@/lib/site";

const builtAt = new Date();

type SitemapEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticEntries: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/antallaktika", changeFrequency: "daily", priority: 0.95 },
  { path: "/alfa-romeo", changeFrequency: "daily", priority: 0.9 },
  { path: "/fiat", changeFrequency: "daily", priority: 0.85 },
  { path: "/lancia", changeFrequency: "daily", priority: 0.85 },
  { path: "/epikoinonia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/fiat-lancia", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const modelEntries: SitemapEntry[] = alfaModels.map((model) => ({
    path: `/alfa-romeo/${model.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...modelEntries].map(
    ({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      lastModified: builtAt,
      changeFrequency,
      priority,
    }),
  );
}
