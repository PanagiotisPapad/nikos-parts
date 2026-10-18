import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { MakeCatalog } from "@/components/make-catalog";
import { PageHeader } from "@/components/page-header";
import { getCatalogMake } from "@/lib/makes";
import { pageMetadata } from "@/lib/seo";

const make = getCatalogMake("fiat");

const title = "Ανταλλακτικά Fiat Θεσσαλονίκη";
const description =
  "Ζωντανός κατάλογος μεταχειρισμένων ανταλλακτικών Fiat στη Θεσσαλονίκη, από τον Nikos στην Καλαμαριά. Αγγελίες car.gr, παραλαβή Μεσολογγίου 3. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/fiat",
  ogImage: {
    url: "/images/part-panda-radio.jpg",
    alt: "Ραδιόφωνο Fiat Panda — ανταλλακτικά Fiat Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Fiat", path: "/fiat" },
];

export default function FiatPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/fiat" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Fiat"
        title="Μεταχειρισμένα ανταλλακτικά Fiat στη Θεσσαλονίκη"
        lede="Ο κατάλογος δείχνει τις τρέχουσες αγγελίες Fiat του καταστήματος στο car.gr. Όταν μια αγγελία ανέβει ή πουληθεί, η σελίδα ακολουθεί μόνη της."
        image="/images/part-fiat-bumper.jpg"
        imageAlt="Πίσω προφυλακτήρας Fiat Grande Punto Evo από τον κατάλογο"
      />
      <MakeCatalog make={make} />
      <CtaBand />
    </main>
  );
}
