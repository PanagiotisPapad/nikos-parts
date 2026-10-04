import Link from "next/link";
import { addressLine, site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-y border-white/10 bg-charcoal text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-rosso-light uppercase">
            Επικοινωνία
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl">
            Βρήκατε κάτι στον κατάλογο ή ψάχνετε συγκεκριμένο κομμάτι;
          </h2>
          <p className="mt-2 text-sm text-cream/80">
            {addressLine} · {site.address.region}
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
          <a
            href={`tel:${site.phoneTel}`}
            className="btn btn-primary flex-1 md:flex-none"
          >
            {site.phoneDisplay}
          </a>
          <Link href="/antallaktika" className="btn btn-secondary flex-1 md:flex-none">
            Κατάλογος
          </Link>
        </div>
      </div>
    </section>
  );
}
