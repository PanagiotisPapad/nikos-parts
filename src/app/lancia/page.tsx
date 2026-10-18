import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { MakeCatalog } from "@/components/make-catalog";
import { PageHeader } from "@/components/page-header";
import { getCatalogMake } from "@/lib/makes";
import { pageMetadata } from "@/lib/seo";

const make = getCatalogMake("lancia");

const title = "Ανταλλακτικά Lancia Θεσσαλονίκη";
const description =
  "Ζωντανός κατάλογος μεταχειρισμένων ανταλλακτικών Lancia στη Θεσσαλονίκη, από τον Nikos στην Καλαμαριά. Αγγελίες car.gr, παραλαβή Μεσολογγίου 3. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/lancia",
  ogImage: {
    url: "/images/part-lancia-lights.jpg",
    alt: "Φανάρια Lancia Musa — ανταλλακτικά Lancia Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Lancia", path: "/lancia" },
];

export default function LanciaPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/lancia" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Lancia"
        title="Μεταχειρισμένα ανταλλακτικά Lancia στη Θεσσαλονίκη"
        lede="Ο κατάλογος δείχνει τις τρέχουσες αγγελίες Lancia του καταστήματος στο car.gr. Όταν μια αγγελία ανέβει ή πουληθεί, η σελίδα ακολουθεί μόνη της."
        image="/images/part-lancia-lights.jpg"
        imageAlt="Φανάρια εμπρός Lancia Musa από τον κατάλογο"
      />
      <MakeCatalog make={make} />
      <CtaBand />
    </main>
  );
}
