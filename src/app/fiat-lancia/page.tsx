import Link from "next/link";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const title = "Ανταλλακτικά Fiat και Lancia Θεσσαλονίκη";
const description =
  "Μεταχειρισμένα ανταλλακτικά Fiat και Lancia από τον Nikos στην Καλαμαριά. Ίδιος κατάλογος car.gr με Alfa Romeo. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/fiat-lancia",
  ogImage: {
    url: "/images/part-panda-radio.jpg",
    alt: "Ραδιόφωνο Fiat Panda — ανταλλακτικά Fiat Lancia Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Fiat και Lancia", path: "/fiat-lancia" },
];

export default function FiatLanciaPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/fiat-lancia" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Εκτός Alfa Romeo"
        title="Μεταχειρισμένα ανταλλακτικά Fiat και Lancia"
        lede="Το βάρος του καταστήματος είναι η Alfa Romeo. Στον ίδιο κατάλογο ανεβαίνουν και κομμάτια Fiat και Lancia, όταν υπάρχουν στην αποθήκη."
        image="/images/part-panda-radio.jpg"
        imageAlt="Ραδιόφωνο CD Fiat Panda 2012–2020 από τον κατάλογο"
      />
      <div className="container-page max-w-3xl space-y-5 py-10 prose-body">
        <p>
          Δεν κρατάμε ξεχωριστή λίστα Fiat εκτός car.gr. Αν ψάχνετε ραδιόφωνο,
          πόρτα, φανάρι ή μηχανικό για Fiat ή Lancia, κοιτάξτε πρώτα τον
          κατάλογο και μετά καλέστε με μοντέλο και έτος. Έχει εμφανιστεί, για
          παράδειγμα, ραδιόφωνο Fiat Panda 2012–2020. Τέτοιες αγγελίες μένουν
          online μόνο όσο το κομμάτι δεν έχει πουληθεί.
        </p>
        <p>
          Πείτε μας τον εργοστασιακό κωδικό αν τον έχετε. Πολλά ηλεκτρικά Fiat
          της ίδιας γενιάς μοιάζουν και δεν ταιριάζουν μεταξύ τους.
        </p>
        <p className="flex flex-wrap gap-4 pt-2">
          <Link href="/antallaktika" className="btn btn-primary">
            Κατάλογος ανταλλακτικών
          </Link>
          <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>
        </p>
      </div>
      <CtaBand />
    </main>
  );
}
