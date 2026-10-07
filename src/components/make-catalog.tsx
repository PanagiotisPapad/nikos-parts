import Link from "next/link";
import { CatalogFrame } from "@/components/catalog-frame";
import { catalogMakes, carGrMakeCatalogUrl, type CatalogMake } from "@/lib/makes";
import { site } from "@/lib/site";

export function MakeSwitcher({ current }: { current?: CatalogMake["slug"] }) {
  return (
    <nav aria-label="Κατάλογος ανά μάρκα" className="mb-6 flex flex-wrap gap-2">
      <Link
        href="/antallaktika"
        className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-ink hover:border-rosso hover:text-rosso"
      >
        Όλες οι μάρκες
      </Link>
      {catalogMakes.map((make) => {
        const active = make.slug === current;
        return (
          <Link
            key={make.slug}
            href={make.path}
            aria-current={active ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              active
                ? "border-rosso bg-rosso text-white"
                : "border-border bg-surface text-ink hover:border-rosso hover:text-rosso"
            }`}
          >
            {make.name}
          </Link>
        );
      })}
    </nav>
  );
}

export function MakeCatalog({ make }: { make: CatalogMake }) {
  const src = carGrMakeCatalogUrl(make.carGrMakeId);

  return (
    <div id="diathesima" className="container-page scroll-mt-24 py-8 max-md:py-4">
      <MakeSwitcher current={make.slug} />
      <div className="mb-6 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-ink-muted shadow-[var(--shadow-card)] max-md:mb-4 max-md:p-3 max-md:text-xs">
        <p>
          Οι αγγελίες {make.name} φορτώνονται απευθείας από το car.gr. Ό,τι
          προστεθεί ή πουληθεί εκεί εμφανίζεται εδώ, χωρίς ξεχωριστή λίστα στο
          site. Τηλέφωνο{" "}
          <a
            className="font-semibold text-rosso underline-offset-2 hover:underline"
            href={`tel:${site.phoneTel}`}
          >
            {site.phoneDisplay}
          </a>
          .{" "}
          <a
            className="font-semibold text-ink underline-offset-2 hover:underline"
            href={src}
          >
            Άνοιγμα στο car.gr
          </a>
          .
        </p>
      </div>
      <CatalogFrame
        src={src}
        title={`Κατάλογος ανταλλακτικών ${make.name} στο car.gr`}
      />
    </div>
  );
}
