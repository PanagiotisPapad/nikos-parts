import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-sm text-ink-muted">{eyebrow}</p>
        ) : null}
        <h2 className="mt-1 text-3xl text-ink md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className="text-sm font-semibold text-rosso underline decoration-rosso/40 underline-offset-4 hover:decoration-rosso"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
