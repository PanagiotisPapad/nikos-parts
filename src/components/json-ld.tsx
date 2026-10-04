import { mapsSearchUrl } from "@/lib/seo";
import { absoluteUrl, defaultDescription, site } from "@/lib/site";

const storeId = absoluteUrl("/#store");
const websiteId = absoluteUrl("/#website");

export function SiteGraphJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: defaultDescription,
        inLanguage: "el-GR",
        publisher: { "@id": storeId },
      },
      {
        "@type": "AutoPartsStore",
        "@id": storeId,
        name: site.name,
        description: defaultDescription,
        url: site.url,
        telephone: site.phoneTel,
        email: site.email,
        image: [absoluteUrl("/icon"), absoluteUrl("/images/car-giulia.jpg")],
        logo: absoluteUrl("/icon"),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.5822,
          longitude: 22.9504,
        },
        hasMap: mapsSearchUrl,
        areaServed: [
          { "@type": "City", name: "Θεσσαλονίκη" },
          { "@type": "AdministrativeArea", name: "Καλαμαριά" },
          { "@type": "Country", name: "Ελλάδα" },
        ],
        sameAs: [site.carGrParts, site.carGrShop, site.whatsapp],
        currenciesAccepted: "EUR",
        priceRange: "€",
        knowsAbout: [
          "μεταχειρισμένα ανταλλακτικά Alfa Romeo",
          "ανταλλακτικά Alfa Romeo Θεσσαλονίκη",
          "ανταλλακτικά Alfa Romeo Καλαμαριά",
          "ανταλλακτικά Alfa Romeo MiTo",
          "ανταλλακτικά Alfa Romeo Giulietta",
          "ανταλλακτικά Alfa Romeo Giulia",
          "used Alfa Romeo parts Thessaloniki",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: { name: string; url: string; image?: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      ...(item.image ? { image: item.image } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "el-GR",
    isPartOf: { "@id": websiteId },
    about: { "@id": storeId },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
