import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { pageMetadata } from "@/lib/seo";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { alfaModels, getAlfaModel, modelImages } from "@/lib/models";
import { partForModel } from "@/lib/parts";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return alfaModels.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata(
  props: PageProps<"/alfa-romeo/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const model = getAlfaModel(slug);
  if (!model) return {};

  const title = `Ανταλλακτικά Alfa Romeo ${model.name} Θεσσαλονίκη`;
  const image = modelImages[slug];
  return pageMetadata({
    title,
    description: model.metaDescription,
    path: `/alfa-romeo/${model.slug}`,
    ogImage: image
      ? { url: image.src, alt: image.alt }
      : undefined,
  });
}

export default async function ModelPage(props: PageProps<"/alfa-romeo/[slug]">) {
  const { slug } = await props.params;
  const model = getAlfaModel(slug);
  if (!model) notFound();

  const others = alfaModels.filter((item) => item.slug !== model.slug).slice(0, 4);
  const photo = modelImages[model.slug];
  const partShot = partForModel(model.slug);

  const breadcrumbs = [
    { name: "Αρχική", path: "/" },
    { name: "Alfa Romeo", path: "/alfa-romeo" },
    { name: model.name, path: `/alfa-romeo/${model.slug}` },
  ];

  const pageTitle = `Ανταλλακτικά Alfa Romeo ${model.name} Θεσσαλονίκη`;

  return (
    <main>
      <WebPageJsonLd
        name={pageTitle}
        description={model.metaDescription}
        path={`/alfa-romeo/${model.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHeader
        breadcrumbs={breadcrumbs}
        eyebrow={`${model.years} · ${model.body}`}
        title={`Μεταχειρισμένα ανταλλακτικά Alfa Romeo ${model.name} στη Θεσσαλονίκη`}
        lede={model.intro}
        image={photo?.src}
        imageAlt={photo?.alt}
      />
      <article className="container-page grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="prose-body space-y-4">
          {model.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Η παραλαβή γίνεται από τη Μεσολογγίου 3 στην Καλαμαριά. Για να
            δείτε τι είναι διαθέσιμο αυτή τη στιγμή, ανοίξτε τον{" "}
            <Link
              href="/alfa-romeo#diathesima"
              className="font-semibold text-rosso underline-offset-2 hover:underline"
            >
              κατάλογο Alfa Romeo
            </Link>
            .
          </p>
        </div>
        <aside className="h-fit space-y-4">
          {partShot ? (
            <a href={partShot.href} className="card block overflow-hidden">
              <span className="relative block aspect-[4/3] bg-cream-muted">
                <Image
                  src={partShot.src}
                  alt={partShot.title}
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </span>
              <span className="block p-4 text-sm leading-snug text-ink-muted">
                <span className="font-semibold text-ink">{partShot.title}</span>
                <br />
                {partShot.price}
              </span>
            </a>
          ) : null}
          <div className="rounded-xl border border-charcoal bg-surface p-5 shadow-[var(--shadow-card)]">
            <h2 className="text-xl">Συχνά ζητούνται</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
              {model.requests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              href={`tel:${site.phoneTel}`}
              className="btn btn-primary mt-6 w-full"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </article>
      <section className="border-t border-border bg-surface-muted">
        <div className="container-page py-10">
          <h2 className="text-2xl">Άλλα μοντέλα Alfa Romeo</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/alfa-romeo/${item.slug}`}
                  className="card group block"
                >
                  <span className="relative block aspect-[16/10] bg-charcoal">
                    <Image
                      src={modelImages[item.slug].src}
                      alt={modelImages[item.slug].alt}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </span>
                  <span className="block px-3 py-2 text-sm font-semibold group-hover:text-rosso">
                    {item.name}
                  </span>
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
