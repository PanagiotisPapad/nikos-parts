import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FaqJsonLd, ItemListJsonLd, WebPageJsonLd } from "@/components/json-ld";
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
import { featuredParts, type CatalogPart } from "@/lib/parts";

export const metadata: Metadata = {
  ...pageMetadata({
    title: homeTitleAbsolute,
    description: defaultDescription,
    path: "/",
  }),
  title: absoluteTitle(homeTitleAbsolute),
};

const catalogAction = "Ανοίξτε τον κατάλογο";

const doors = [
  {
    title: "Κατάλογος",
    text: "Τιμές και φωτογραφίες από το car.gr. Ό,τι φαίνεται είναι διαθέσιμο.",
    href: "/antallaktika",
  },
  {
    title: "Μοντέλα Alfa",
    text: "MiTo, Giulietta, 159, Giulia και τα υπόλοιπα. Τι να πείτε στο τηλέφωνο.",
    href: "/alfa-romeo",
  },
  {
    title: "Κατάστημα",
    text: "Μεσολογγίου 3, Καλαμαριά. Παραλαβή κατόπιν συνεννόησης.",
    href: "/epikoinonia",
  },
];

const steps = [
  {
    n: "1",
    title: catalogAction,
    text: "Οι αγγελίες στο car.gr εμφανίζονται στη σελίδα ανταλλακτικών. Ό,τι βλέπετε υπάρχει.",
    href: "/antallaktika",
    action: catalogAction,
  },
  {
    n: "2",
    title: "Καλέστε αν λείπει",
    text: "Πείτε μοντέλο, έτος, κινητήρα και εργοστασιακό κωδικό, αν τον έχετε.",
    href: `tel:${site.phoneTel}`,
    action: site.phoneDisplay,
  },
  {
    n: "3",
    title: "Παραλαβή στην Καλαμαριά",
    text: "Το κατάστημα είναι στη Μεσολογγίου 3. Για αποστολή, ρωτήστε πριν κλείσετε το κομμάτι.",
    href: "/epikoinonia",
    action: "Διεύθυνση και χάρτης",
  },
];

function partContext(part: CatalogPart) {
  if (part.models[0]) {
    const model = alfaModels.find((item) => item.slug === part.models[0]);
    return {
      href: `/alfa-romeo/${part.models[0]}`,
      label: model ? `Alfa ${model.name}` : "Alfa Romeo",
    };
  }
  const isLancia = part.title.toLowerCase().includes("lancia");
  return {
    href: isLancia ? "/lancia" : "/fiat",
    label: isLancia ? "Lancia" : "Fiat",
  };
}

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
        name="Δείγματα από τον κατάλογο ανταλλακτικών"
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

      <section className="scroll-mt-24 border-b border-border bg-surface-muted">
        <div className="container-page grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-stretch">
          <div className="flex flex-col justify-end py-10 md:py-16 lg:py-20 lg:pr-10">
            <p className="text-sm text-ink-muted">
              Μεσολογγίου 3, Καλαμαριά
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.75rem,8.5vw,6.25rem)] font-extrabold leading-[0.82] tracking-[-0.045em] text-ink">
              <span className="block">Ανταλλακτικά</span>
              <span className="block">Alfa Romeo</span>
              <span className="block">Fiat, Lancia</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
              Μεταχειρισμένα κομμάτια από το κατάστημα στη Θεσσαλονίκη. Ο
              κατάλογος είναι οι αγγελίες στο car.gr — ό,τι φαίνεται, υπάρχει.
            </p>
            <nav aria-label="Μάρκες" className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/alfa-romeo"
                className="font-display text-2xl font-bold tracking-tight hover:text-rosso"
              >
                Alfa Romeo
              </Link>
              <Link
                href="/fiat"
                className="font-display text-2xl font-bold tracking-tight hover:text-rosso"
              >
                Fiat
              </Link>
              <Link
                href="/lancia"
                className="font-display text-2xl font-bold tracking-tight hover:text-rosso"
              >
                Lancia
              </Link>
            </nav>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/antallaktika" className="btn btn-primary">
                {catalogAction}
              </Link>
              <a href={`tel:${site.phoneTel}`} className="btn btn-secondary">
                {site.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
              Στον κατάλογο βλέπετε ό,τι υπάρχει τώρα. Αν λείπει, καλέστε με
              μοντέλο, έτος και κινητήρα, ή{" "}
              <a
                href={site.whatsapp}
                className="font-semibold text-ink underline-offset-2 hover:text-rosso hover:underline"
              >
                στείλτε στο WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="relative -mx-4 aspect-[16/10] border-t border-border lg:mx-0 lg:aspect-auto lg:min-h-[min(78vh,720px)] lg:border-t-0 lg:border-l">
            <Image
              src="/images/car-giulia.jpg"
              alt="Alfa Romeo Giulia — μεταχειρισμένα ανταλλακτικά Θεσσαλονίκη"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[72%_center]"
            />
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-b border-border bg-surface">
        <div className="container-page grid sm:grid-cols-3 sm:gap-0">
          {doors.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border-b border-border py-6 last:border-b-0 hover:text-rosso sm:border-b-0 sm:px-6 sm:py-8 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-border"} ${index === doors.length - 1 ? "sm:pr-0" : ""}`}
            >
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-pad scroll-mt-24 border-b border-border bg-surface">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl text-ink md:text-5xl">
                Μερικά διαθέσιμα κομμάτια
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                Ενδεικτικά από τον κατάλογο. Η πλήρης λίστα αλλάζει με το στοκ
                και ανοίγει στο car.gr.
              </p>
            </div>
            <Link
              href="/antallaktika"
              className="text-sm font-semibold text-rosso underline decoration-rosso/40 underline-offset-4 hover:decoration-rosso"
            >
              {catalogAction}
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {featuredParts.map((part) => {
              const context = partContext(part);
              return (
                <li key={part.href}>
                  <div className="grid gap-4 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)_auto] sm:items-center">
                    <a
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-hidden
                      className="relative block aspect-[4/3] overflow-hidden bg-cream-muted sm:aspect-auto sm:h-24"
                    >
                      <Image
                        src={part.src}
                        alt=""
                        fill
                        sizes="136px"
                        className="object-cover"
                      />
                    </a>
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-bold tracking-tight">
                        <a
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-rosso"
                        >
                          {part.title}
                        </a>
                      </h3>
                      <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
                        <a
                          className="text-ink-muted underline-offset-2 hover:text-rosso hover:underline"
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ανοίγει στο car.gr
                        </a>
                        <Link
                          className="text-ink-muted underline-offset-2 hover:text-rosso hover:underline"
                          href={context.href}
                        >
                          {context.label}
                        </Link>
                      </p>
                    </div>
                    <p className="font-display text-3xl font-bold tabular-nums tracking-tight text-rosso sm:text-right">
                      {part.price}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-pad scroll-mt-24 border-b border-border">
        <div className="container-page">
          <h2 className="text-4xl text-ink md:text-5xl">
            Πώς βρίσκετε το κομμάτι
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
            {steps.map((step, index) => (
              <li
                key={step.n}
                className={`md:px-8 ${index === 0 ? "md:pl-0" : "md:border-l md:border-border"} ${index === steps.length - 1 ? "md:pr-0" : ""}`}
              >
                <p className="font-display text-6xl font-extrabold leading-none tracking-tight text-ink">
                  {step.n}
                </p>
                <h3 className="mt-4 text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {step.text}
                </p>
                <p className="mt-4">
                  <a
                    href={step.href}
                    className="text-sm font-semibold text-rosso underline decoration-rosso/40 underline-offset-4 hover:decoration-rosso"
                  >
                    {step.action}
                  </a>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="models"
        className="section-pad scroll-mt-24 border-b border-border bg-surface"
      >
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-4xl text-ink md:text-5xl">Μοντέλα Alfa Romeo</h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-muted">
                Ανοίξτε το μοντέλο για να δείτε τι να πείτε στο τηλέφωνο. Τα
                διαθέσιμα κομμάτια είναι στον κατάλογο.
              </p>
            </div>
            <Link
              href="/alfa-romeo"
              className="text-sm font-semibold text-rosso underline decoration-rosso/40 underline-offset-4 hover:decoration-rosso"
            >
              Όλα τα μοντέλα Alfa
            </Link>
          </div>
          <nav
            aria-label="Μοντέλα Alfa Romeo"
            className="mt-10 grid grid-cols-2 border-t border-l border-border sm:grid-cols-5"
          >
            {alfaModels.map((model) => (
              <Link
                key={model.slug}
                href={`/alfa-romeo/${model.slug}`}
                className="border-b border-r border-border px-3 py-4 hover:text-rosso"
              >
                <span className="block font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {model.name}
                </span>
                <span className="mt-1 block text-sm text-ink-muted">
                  {model.years}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section id="store" className="section-pad scroll-mt-24 border-b border-border">
        <div className="container-page max-w-3xl">
          <h2 className="text-4xl md:text-5xl">Αν δεν είναι στον κατάλογο</h2>
          <p className="prose-body mt-4">
            Καλέστε ή στείλτε μήνυμα. Χρειάζεται μοντέλο, έτος και αμάξωμα
            (σεντάν, Sportwagon, τρίθυρο), κινητήρας — ιδίως σε 159, 156, Giulia
            και Stelvio — και εργοστασιακός κωδικός αν τον έχει δώσει
            συνεργείο. Για εξωτερικά κομμάτια βοηθάει φωτογραφία του σημείου.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="font-display text-3xl font-bold tracking-tight text-ink hover:text-rosso"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              className="text-sm font-semibold text-rosso underline decoration-rosso/40 underline-offset-4 hover:decoration-rosso"
            >
              WhatsApp
            </a>
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            <Link
              href="/epikoinonia"
              className="underline-offset-2 hover:text-rosso hover:underline"
            >
              {addressLine}
            </Link>
          </p>
        </div>
      </section>

      <section className="section-pad scroll-mt-24 bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="text-4xl text-ink md:text-5xl">Συχνές ερωτήσεις</h2>
          <div className="mt-8 border-t border-border">
            {homeFaq.map((item) => (
              <details
                key={item.question}
                className="group border-b border-border"
              >
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 py-5 text-lg font-semibold leading-snug text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    className="shrink-0 font-display text-3xl leading-none font-normal text-ink-muted group-open:hidden"
                    aria-hidden
                  >
                    +
                  </span>
                  <span
                    className="hidden shrink-0 font-display text-3xl leading-none font-normal text-ink-muted group-open:inline"
                    aria-hidden
                  >
                    −
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-ink-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
