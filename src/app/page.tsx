import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqJsonLd, ItemListJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { homeFaq } from "@/lib/faq";
import { absoluteTitle, pageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  addressLine,
  defaultDescription,
  homeTitleAbsolute,
  site,
} from "@/lib/site";
import { alfaModels, modelImages } from "@/lib/models";
import { featuredParts } from "@/lib/parts";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitleAbsolute,
    description: defaultDescription,
    path: "/",
  }),
  title: absoluteTitle(homeTitleAbsolute),
};

const steps = [
  {
    n: "1",
    title: "Κατάλογος online",
    text: "Δείτε τις αγγελίες στο car.gr, ενσωματωμένες στη σελίδα ανταλλακτικών. Ό,τι εμφανίζεται είναι διαθέσιμο.",
  },
  {
    n: "2",
    title: "Κλήση ή μήνυμα",
    text: "Δεν το βρίσκετε; Καλέστε με μοντέλο, έτος, κινητήρα και εργοστασιακό κωδικό αν τον έχετε.",
  },
  {
    n: "3",
    title: "Παραλαβή Καλαμαριά",
    text: "Το κατάστημα είναι στη Μεσολογγίου 3. Για αποστολή, ρωτήστε τηλεφωνικά πριν κλείσετε το κομμάτι.",
  },
];

const highlights = [
  {
    title: "Εξειδίκευση Alfa Romeo",
    text: "MiTo, Giulietta, 159, 147, 156, Giulia, Stelvio — με σελίδες ανά μοντέλο για γρήγορη αναζήτηση.",
  },
  {
    title: "Ζωντανός κατάλογος",
    text: "Τιμές και φωτογραφίες από το car.gr. Χωρίς «κρυφή» διαθεσιμότητα: αν λείπει η αγγελία, έχει πουληθεί.",
  },
  {
    title: "Τοπικό κατάστημα",
    text: "Παραλαβή από Καλαμαριά, Θεσσαλονίκη. Τηλεφωνική εξυπηρέτηση και WhatsApp για ερωτήσεις.",
  },
];

export default function Home() {
  return (
    <main>
      <WebPageJsonLd
        name={homeTitleAbsolute}
        description={defaultDescription}
        path="/"
      />
      <FaqJsonLd items={homeFaq} />
      <ItemListJsonLd
        name="Δείγματα ανταλλακτικών Alfa Romeo από τον κατάλογο"
        items={featuredParts.map((part) => ({
          name: part.title,
          url: part.href,
          image: absoluteUrl(part.src),
        }))}
      />
      <ItemListJsonLd
        name="Μοντέλα Alfa Romeo — ανταλλακτικά Θεσσαλονίκη"
        items={alfaModels.map((model) => ({
          name: `Alfa Romeo ${model.name}`,
          url: absoluteUrl(`/alfa-romeo/${model.slug}`),
          image: absoluteUrl(modelImages[model.slug].src),
        }))}
      />

      <section className="relative isolate min-h-[min(92vh,760px)] overflow-hidden border-b border-charcoal">
        <Image
          src="/images/car-giulia.jpg"
          alt="Alfa Romeo Giulia — μεταχειρισμένα ανταλλακτικά Θεσσαλονίκη"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/92 to-charcoal/25" />
        <div className="relative container-page flex min-h-[min(92vh,760px)] flex-col justify-end py-12 md:justify-center md:py-16">
          <div className="flex flex-wrap gap-2">
            <span className="badge border-cream/20 bg-charcoal/40 text-cream">
              Καλαμαριά · Θεσσαλονίκη
            </span>
            <span className="badge border-cream/20 bg-charcoal/40 text-cream">
              Μεταχειρισμένα ανταλλακτικά
            </span>
          </div>
          <h1 className="mt-5 max-w-2xl text-4xl leading-[1.08] text-cream md:text-5xl lg:text-6xl">
            Ανταλλακτικά Alfa Romeo στη Θεσσαλονίκη
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
            Ο Νίκος διαθέτει μεταχειρισμένα ανταλλακτικά Alfa Romeo από το
            κατάστημα στη Μεσολογγίου 3. Δείτε τον κατάλογο online ή καλέστε
            για συγκεκριμένο κομμάτι — Fiat και Lancia όταν υπάρχουν στην
            αποθήκη.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/antallaktika" className="btn btn-primary">
              Δείτε τον κατάλογο
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn btn-on-dark">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface-muted p-5">
              <h2 className="text-xl text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad border-b border-border bg-surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Από τον κατάλογο"
            title="Δείγματα διαθέσιμων ανταλλακτικών"
            description="Οι φωτογραφίες και οι τιμές προέρχονται από ενεργές αγγελίες στο car.gr."
            action={{ href: "/antallaktika", label: "Όλος ο κατάλογος →" }}
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredParts.map((part) => (
              <li key={part.href} className="card group">
                <a href={part.href} className="block">
                  <span className="relative block aspect-[4/3] bg-cream-muted">
                    <Image
                      src={part.src}
                      alt={part.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </span>
                </a>
                <div className="p-5">
                  <h3 className="text-lg leading-snug">
                    <a
                      href={part.href}
                      className="hover:text-rosso"
                    >
                      {part.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm font-medium text-rosso">
                    {part.price}
                  </p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
                    <a
                      className="text-ink-muted underline-offset-2 hover:text-rosso hover:underline"
                      href={part.href}
                    >
                      Αγγελία car.gr
                    </a>
                    {part.models[0] ? (
                      <Link
                        className="text-ink-muted underline-offset-2 hover:text-rosso hover:underline"
                        href={`/alfa-romeo/${part.models[0]}`}
                      >
                        Alfa {alfaModels.find((m) => m.slug === part.models[0])?.name}
                      </Link>
                    ) : (
                      <Link
                        className="text-ink-muted underline-offset-2 hover:text-rosso hover:underline"
                        href="/fiat-lancia"
                      >
                        Fiat / Lancia
                      </Link>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="Διαδικασία"
            title="Πώς βρίσκετε το κομμάτι που χρειάζεστε"
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-card)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rosso/10 text-sm font-bold text-rosso">
                  {step.n}
                </span>
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad border-y border-border bg-surface-muted">
        <div className="container-page">
          <SectionHeading
            eyebrow="Alfa Romeo"
            title="Ανταλλακτικά ανά μοντέλο"
            description="Κάθε σελίδα εξηγεί τι να ζητήσετε στο τηλέφωνο. Η διαθεσιμότητα ελέγχεται μόνο στον κατάλογο."
            action={{ href: "/alfa-romeo", label: "Όλα τα μοντέλα →" }}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alfaModels.map((model) => (
              <li key={model.slug}>
                <Link
                  href={`/alfa-romeo/${model.slug}`}
                  className="card group flex h-full flex-col"
                >
                  <span className="relative block aspect-[16/10] bg-charcoal">
                    <Image
                      src={modelImages[model.slug].src}
                      alt={modelImages[model.slug].alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-4">
                    <span className="font-serif text-2xl group-hover:text-rosso">
                      {model.name}
                    </span>
                    <span className="mt-1 text-xs font-semibold text-accent-gold">
                      {model.years} · {model.body}
                    </span>
                    <span className="mt-2 line-clamp-2 text-sm text-ink-muted">
                      {model.intro}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl">Τι περιλαμβάνει ο κατάλογος</h2>
            <p className="prose-body mt-4">
              Φανοποιία, μηχανικά και ηλεκτρικά για Alfa Romeo, μαζί με
              επιλεγμένα Fiat και Lancia. Οι τιμές είναι αυτές του car.gr —
              χωρίς «κρυφές» προσφορές. Αν μια αγγελία φύγει, το κομμάτι έχει
              πουληθεί.
            </p>
            <Link href="/antallaktika" className="btn btn-primary mt-6">
              Άνοιγμα καταλόγου
            </Link>
          </div>
          <div className="rounded-xl border border-rosso/20 bg-rosso/[0.04] p-8">
            <h2 className="text-2xl">Πριν καλέσετε</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
              <li>Μοντέλο, έτος και αμάξωμα (σεντάν, Sportwagon, τρίθυρο).</li>
              <li>Κινητήρας — ιδίως σε 159, 156, Giulia και Stelvio.</li>
              <li>Εργοστασιακός κωδικός, αν τον έχει δώσει συνεργείο.</li>
              <li>Φωτογραφία του σημείου, για εξωτερικά κομμάτια.</li>
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              <strong className="text-ink">{site.phoneDisplay}</strong>
              <br />
              {addressLine}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-page max-w-3xl">
          <SectionHeading
            eyebrow="Συχνές ερωτήσεις"
            title="FAQ — ανταλλακτικά Alfa Romeo Θεσσαλονίκη"
          />
          <dl className="mt-8 divide-y divide-border">
            {homeFaq.map((item) => (
              <div key={item.question} className="py-5">
                <dt className="text-lg font-semibold text-ink">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
