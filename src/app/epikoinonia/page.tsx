import Image from "next/image";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { pageMetadata } from "@/lib/seo";
import { addressLine, site } from "@/lib/site";

const title = "Επικοινωνία Καλαμαριά";
const description =
  "Nikos Alfa Parts, Μεσολογγίου 3, Καλαμαριά, Θεσσαλονίκη 55133. Ανταλλακτικά Alfa Romeo, Fiat και Lancia. Τηλ. 698 986 8665, email, WhatsApp.";

const mapSrc =
  "https://maps.google.com/maps?q=Mesologiou%203%20Kalamaria%20Thessaloniki%2055133&z=16&output=embed";

export const metadata = pageMetadata({
  title,
  description,
  path: "/epikoinonia",
  ogImage: {
    url: "/images/part-mito-wheels.jpg",
    alt: "Ζάντες Alfa Romeo MiTo — επικοινωνία Nikos Θεσσαλονίκη",
  },
});

const breadcrumbs = [
  { name: "Αρχική", path: "/" },
  { name: "Επικοινωνία", path: "/epikoinonia" },
];

export default function ContactPage() {
  return (
    <main>
      <WebPageJsonLd name={title} description={description} path="/epikoinonia" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow="Καλαμαριά"
        title="Επικοινωνία"
        lede="Καλέστε ή στείλτε μήνυμα για ανταλλακτικά Alfa Romeo, Fiat ή Lancia. Πείτε μοντέλο, έτος και το κομμάτι που ψάχνετε. Η παραλαβή γίνεται από το κατάστημα στη Μεσολογγίου 3."
        image="/images/part-mito-wheels.jpg"
        imageAlt="Ζάντες Alfa Romeo MiTo 16 ιντσών από τον κατάλογο"
      />
      <div className="container-page grid gap-6 py-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)_minmax(240px,0.8fr)]">
        <div className="relative min-h-64 overflow-hidden rounded-xl bg-charcoal lg:min-h-full">
          <Image
            src="/images/part-fiat-doors.jpg"
            alt="Πόρτες Fiat 500L από τον κατάλογο"
            fill
            sizes="(min-width: 1024px) 28vw, 100vw"
            className="object-cover"
          />
        </div>
        <address className="card p-6 text-base leading-8 not-italic">
          <p className="font-display text-4xl font-extrabold tracking-tight text-ink">
            Nikos
          </p>
          <p className="mt-1 text-sm text-ink-muted">Alfa Parts</p>
          <p className="mt-4 text-ink-muted">{addressLine}</p>
          <p className="text-ink-muted">{site.address.region}</p>
          <p className="mt-4">
            <a
              className="btn btn-primary inline-flex"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              className="font-semibold text-rosso underline-offset-2 hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <p>
            <a
              className="font-semibold text-rosso underline-offset-2 hover:underline"
              href={site.whatsapp}
            >
              WhatsApp
            </a>
          </p>
        </address>
        <iframe
          title="Χάρτης: Μεσολογγίου 3, Καλαμαριά"
          src={mapSrc}
          className="h-[360px] w-full rounded-xl border border-border bg-surface shadow-[var(--shadow-card)] lg:h-auto lg:min-h-[320px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <CtaBand />
    </main>
  );
}
