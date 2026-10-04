import Link from "next/link";
import { addressLine, site } from "@/lib/site";
import { alfaModels } from "@/lib/models";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-charcoal text-cream">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl">Nikos Alfa Romeo Parts</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
            Εξειδικευμένο κατάστημα μεταχειρισμένων ανταλλακτικών Alfa Romeo
            στην Καλαμαριά, Θεσσαλονίκη. Ζωντανός κατάλογος στο car.gr,
            παραλαβή από το κατάστημα και τηλεφωνική εξυπηρέτηση.
          </p>
        </div>
        <address className="text-sm leading-7 not-italic">
          <p className="font-semibold text-white">Διεύθυνση &amp; τηλέφωνο</p>
          <p>{addressLine}</p>
          <p>{site.address.region}</p>
          <p>
            <a
              className="font-semibold text-rosso-light hover:underline"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              className="hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </address>
        <div>
          <p className="font-semibold text-white">Σελίδες</p>
          <ul className="mt-2 space-y-2 text-sm text-cream/85">
            <li>
              <Link className="hover:text-white hover:underline" href="/antallaktika">
                Κατάλογος ανταλλακτικών
              </Link>
            </li>
            <li>
              <Link className="hover:text-white hover:underline" href="/alfa-romeo">
                Μοντέλα Alfa Romeo
              </Link>
            </li>
            <li>
              <Link className="hover:text-white hover:underline" href="/fiat-lancia">
                Fiat &amp; Lancia
              </Link>
            </li>
            <li>
              <Link className="hover:text-white hover:underline" href="/epikoinonia">
                Επικοινωνία &amp; χάρτης
              </Link>
            </li>
            <li>
              <a className="hover:text-white hover:underline" href={site.carGrParts}>
                Κατάλογος στο car.gr
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-4 text-xs text-cream/55">
          Ανταλλακτικά Alfa Romeo Θεσσαλονίκη · Καλαμαριά · MiTo · Giulietta ·
          159 · 147 · 156 · Giulia · Stelvio
        </p>
        <ul className="container-page flex flex-wrap gap-x-3 gap-y-2 pb-6 text-xs text-cream/60">
          {alfaModels.map((model) => (
            <li key={model.slug}>
              <Link
                className="hover:text-cream"
                href={`/alfa-romeo/${model.slug}`}
              >
                {model.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-white/10 pb-8 pt-4 text-xs leading-relaxed text-cream/45 sm:flex-row sm:items-start sm:justify-between">
        <p>
          Φωτογραφίες μοντέλων: Wikimedia Commons (CC BY-SA, CC BY, CC0).
          Φωτογραφίες ανταλλακτικών: αγγελίες του καταστήματος στο car.gr.
        </p>
        <p className="shrink-0">
          Κατασκευή:{" "}
          <a
            href="https://blueslide.gr"
            className="font-medium text-cream/65 hover:text-cream hover:underline"
          >
            blueslide.gr
          </a>
        </p>
      </div>
    </footer>
  );
}
