export const site = {
  name: "Nikos Alfa Romeo Parts",
  shortName: "Nikos",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "698 986 8665",
  phoneTel: "+306989868665",
  email: "chachopoulosn@gmail.com",
  carGrParts: "https://nikos-alfa-romeo-parts.car.gr/parts/",
  carGrShop: "https://nikos-alfa-romeo-parts.car.gr/",
  /** Seller id on car.gr. Make filters stay scoped to this shop. */
  carGrSellerId: "1002486277",
  whatsapp: "https://wa.me/306989868665",
  address: {
    street: "Μεσολογγίου 3",
    locality: "Καλαμαριά",
    region: "Θεσσαλονίκη",
    postalCode: "55133",
    country: "GR",
  },
} as const;

export const addressLine = `${site.address.street}, ${site.address.locality}, ${site.address.postalCode}`;

/** Home & default `<title>` (layout template adds `| Nikos Alfa Parts`). */
export const defaultTitle = "Ανταλλακτικά Alfa Romeo Θεσσαλονίκη";

/** Full home title tag (no template suffix). */
export const homeTitleAbsolute = `${defaultTitle} | Nikos · Καλαμαριά`;

export const defaultDescription =
  "Μεταχειρισμένα ανταλλακτικά Alfa Romeo στην Καλαμαριά, Θεσσαλονίκη. Ζωντανός κατάλογος car.gr, παραλαβή Μεσολογγίου 3. MiTo, Giulietta, 159, Giulia. Τηλ. 698 986 8665.";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
