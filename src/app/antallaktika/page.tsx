import { CatalogFrame } from "@/components/catalog-frame";
import { MakeSwitcher } from "@/components/make-catalog";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Κατάλογος ανταλλακτικών Alfa Romeo Θεσσαλονίκη";
const description =
  "Ζωντανός κατάλογος μεταχειρισμένων ανταλλακτικών Alfa Romeo στη Θεσσαλονίκη. Αγγελίες car.gr, παραλαβή Καλαμαριά Μεσολογγίου 3. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/antallaktika",
  ogImage: {
    url: "/images/part-mito-wheels.jpg",
    alt: "Ζάντα Alfa Romeo MiTo — κατάλογος ανταλλακτικών Nikos",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Ανταλλακτικά", path: "/antallaktika" },
];

export default function PartsPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/antallaktika" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Κατάλογος"
        title="Ανταλλακτικά Alfa Romeo στη Θεσσαλονίκη"
        lede="Οι αγγελίες ενημερώνονται στο car.gr και εμφανίζονται εδώ. Ανοίξτε ένα κομμάτι για τιμή και φωτογραφίες, ή καλέστε αν αυτό που θέλετε δεν είναι στη λίστα."
        image="/images/part-mito-wheels.jpg"
        imageAlt="Ζάντα Alfa Romeo MiTo από τον κατάλογο"
      />
      <div className="container-page py-8 max-md:py-4">
        <div className="mb-6 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-ink-muted shadow-[var(--shadow-card)] max-md:mb-4 max-md:p-3 max-md:text-xs">
          <p>
            Τηλέφωνο{" "}
            <a
              className="font-semibold text-rosso underline-offset-2 hover:underline"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
            . Ο κατάλογος περιλαμβάνει Alfa Romeo, Fiat και Lancia. Για μία
            μάρκα, διαλέξτε φίλτρο από κάτω.{" "}
            <a
              className="font-semibold text-ink underline-offset-2 hover:underline"
              href={site.carGrParts}
            >
              Άνοιγμα απευθείας στο car.gr
            </a>
            .
          </p>
        </div>
        <MakeSwitcher />
        <CatalogFrame />
      </div>
      <CtaBand />
    </main>
  );
}
