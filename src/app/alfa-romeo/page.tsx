import Image from "next/image";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { MakeCatalog } from "@/components/make-catalog";
import { PageHeader } from "@/components/page-header";
import { getCatalogMake } from "@/lib/makes";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import { alfaModels, modelImages } from "@/lib/models";

const alfa = getCatalogMake("alfa-romeo");

const title = "Ανταλλακτικά Alfa Romeo Θεσσαλονίκη";
const description =
  "Ζωντανός κατάλογος μεταχειρισμένων ανταλλακτικών Alfa Romeo στη Θεσσαλονίκη, από τις αγγελίες car.gr. MiTo, Giulietta, 159, Giulia και άλλα. Τηλ. 698 986 8665.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/alfa-romeo",
  ogImage: {
    url: "/images/car-giulia.jpg",
    alt: "Alfa Romeo Giulia — ανταλλακτικά ανά μοντέλο Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Alfa Romeo", path: "/alfa-romeo" },
];

export default function ModelsPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/alfa-romeo" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ItemListJsonLd
        name="Μοντέλα Alfa Romeo με σελίδες ανταλλακτικών"
        items={alfaModels.map((model) => ({
          name: `Ανταλλακτικά Alfa Romeo ${model.name}`,
          url: absoluteUrl(`/alfa-romeo/${model.slug}`),
          image: absoluteUrl(modelImages[model.slug].src),
        }))}
      />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Alfa Romeo"
        title="Μεταχειρισμένα ανταλλακτικά Alfa Romeo στη Θεσσαλονίκη"
        lede="Οι διαθέσιμες αγγελίες Alfa Romeo φορτώνονται από το car.gr και αλλάζουν μόνες τους με το στοκ. Από κάτω, κάθε μοντέλο εξηγεί τι να πείτε στο τηλέφωνο."
        image="/images/car-giulia.jpg"
        imageAlt="Alfa Romeo Giulia σεντάν"
      />
      <MakeCatalog make={alfa} />
      <section className="border-t border-border bg-surface-muted">
        <div className="container-page py-10">
          <h2 className="text-3xl">Ανά μοντέλο</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Οι σελίδες μοντέλων εξηγούν τι να πείτε στο τηλέφωνο. Η
            διαθεσιμότητα είναι ο κατάλογος από πάνω.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {alfaModels.map((model) => (
          <li key={model.slug}>
            <Link
              href={`/alfa-romeo/${model.slug}`}
              className="card group flex h-full flex-col md:flex-row"
            >
              <span className="relative block aspect-[16/10] shrink-0 bg-charcoal md:aspect-auto md:min-h-full md:w-44">
                <Image
                  src={modelImages[model.slug].src}
                  alt={modelImages[model.slug].alt}
                  fill
                  sizes="176px"
                  className="object-cover md:rounded-l-xl"
                />
              </span>
              <div className="flex flex-col p-5">
                <h2 className="text-2xl group-hover:text-rosso md:text-3xl">
                  Alfa Romeo {model.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-accent-gold">
                  {model.years} · {model.body}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {model.intro}
                </p>
              </div>
            </Link>
          </li>
        ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
