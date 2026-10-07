import { site } from "@/lib/site";

export function CatalogFrame({
  src = site.carGrParts,
  title = "Κατάλογος μεταχειρισμένων ανταλλακτικών του Nikos στο car.gr",
}: {
  src?: string;
  title?: string;
}) {
  return (
    <iframe
      src={src}
      title={title}
      className="h-[1200px] w-full rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]"
      loading="lazy"
    />
  );
}
