import { site } from "@/lib/site";

export type CatalogMake = {
  slug: "alfa-romeo" | "fiat" | "lancia";
  path: "/alfa-romeo" | "/fiat" | "/lancia";
  name: string;
  /** Stable car.gr make id. Listings themselves are not stored here. */
  carGrMakeId: string;
};

export const catalogMakes: CatalogMake[] = [
  { slug: "alfa-romeo", path: "/alfa-romeo", name: "Alfa Romeo", carGrMakeId: "32458" },
  { slug: "fiat", path: "/fiat", name: "Fiat", carGrMakeId: "13302" },
  { slug: "lancia", path: "/lancia", name: "Lancia", carGrMakeId: "13526" },
];

/** Live shop catalog filtered by make. Stock changes on car.gr, not in this repo. */
export function carGrMakeCatalogUrl(makeId: string) {
  const url = new URL(site.carGrParts);
  url.searchParams.set("category", "30");
  url.searchParams.set("dsite", "1");
  url.searchParams.set("make-models-strict-search", "0");
  url.searchParams.set("makes_ids", makeId);
  url.searchParams.set("pg", "1");
  url.searchParams.set("sort", "dm");
  url.searchParams.set("uid", site.carGrSellerId);
  return url.toString();
}

export function catalogUrlForMake(slug: CatalogMake["slug"]) {
  return carGrMakeCatalogUrl(getCatalogMake(slug).carGrMakeId);
}

export function getCatalogMake(slug: CatalogMake["slug"]) {
  const make = catalogMakes.find((item) => item.slug === slug);
  if (!make) throw new Error(`Unknown catalog make: ${slug}`);
  return make;
}
