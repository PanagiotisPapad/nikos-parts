import Link from "next/link";
import { addressLine, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-charcoal text-cream">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-end md:py-16">
        <div>
          <p className="text-sm text-cream/70">
            {addressLine}, {site.address.region}
          </p>
          <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">
            Βρήκατε κάτι στον κατάλογο ή ψάχνετε συγκεκριμένο κομμάτι;
          </h2>
          <p className="mt-3 max-w-xl text-sm text-cream/75">
            Καλέστε με μοντέλο, έτος και κινητήρα, ή ανοίξτε τον κατάλογο.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
          <a
            href={`tel:${site.phoneTel}`}
            className="btn btn-primary flex-1 md:flex-none"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/antallaktika"
            className="btn btn-on-dark flex-1 md:flex-none"
          >
            Ανοίξτε τον κατάλογο
          </Link>
        </div>
      </div>
    </section>
  );
}
