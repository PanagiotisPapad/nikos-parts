import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: { name: string; path: string }[];
}) {
  return (
    <header className="border-b border-border bg-surface">
      <div
        className={`container-page section-pad grid items-center gap-8 ${
          image ? "md:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.9fr)]" : ""
        }`}
      >
        <div>
          {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
          <p className="text-sm text-ink-muted">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.12] text-ink md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {lede}
          </p>
        </div>
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
