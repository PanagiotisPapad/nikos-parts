import Link from "next/link";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Ανταλλακτικά Fiat και Lancia Θεσσαλονίκη";
const description =
  "Μεταχειρισμένα ανταλλακτικά Fiat και Lancia από τον Nikos στην Καλαμαριά. Ξεχωριστοί ζωντανοί κατάλογοι από το car.gr. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/fiat-lancia",
  ogImage: {
    url: "/images/part-panda-radio.jpg",
    alt: "Ραδιόφωνο Fiat Panda — ανταλλακτικά Fiat και Lancia Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Fiat και Lancia", path: "/fiat-lancia" },
];

const brands = [
  {
    href: "/fiat",
    name: "Fiat",
    text: "Αγγελίες Fiat του καταστήματος, όπως ανεβαίνουν στο car.gr.",
  },
  {
    href: "/lancia",
    name: "Lancia",
    text: "Αγγελίες Lancia του καταστήματος, όπως ανεβαίνουν στο car.gr.",
  },
];

export default function FiatLanciaPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/fiat-lancia" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Fiat και Lancia"
        title="Μεταχειρισμένα ανταλλακτικά Fiat και Lancia"
        lede="Το βάρος του καταστήματος είναι η Alfa Romeo. Fiat και Lancia έχουν δικό τους ζωντανό κατάλογο, από τις ίδιες αγγελίες στο car.gr."
        image="/images/part-panda-radio.jpg"
        imageAlt="Ραδιόφωνο CD Fiat Panda από τον κατάλογο"
      />
      <div className="container-page max-w-3xl space-y-5 py-10">
        <p className="prose-body">
          Δεν κρατάμε ξεχωριστή λίστα εκτός car.gr. Ανοίξτε τη μάρκα που σας
          ενδιαφέρει. Αν το κομμάτι πουληθεί, φεύγει από τον κατάλογο.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {brands.map((brand) => (
            <li key={brand.href}>
              <Link href={brand.href} className="card block h-full p-6">
                <h2 className="text-2xl">{brand.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {brand.text}
                </p>
                <p className="mt-4 text-sm font-semibold text-rosso">
                  Κατάλογος {brand.name} →
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="flex flex-wrap gap-4 pt-2">
          <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </p>
      </div>
      <CtaBand />
    </main>
  );
}
