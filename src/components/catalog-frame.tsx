import { site } from "@/lib/site";

export function CatalogFrame() {
  return (
    <iframe
      src={site.carGrParts}
      title="Κατάλογος μεταχειρισμένων ανταλλακτικών του Nikos στο car.gr"
      className="h-[1200px] w-full rounded-xl border border-border bg-surface shadow-[var(--shadow-card)]"
      loading="lazy"
    />
  );
}
