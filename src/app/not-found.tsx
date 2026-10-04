import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Η σελίδα δεν βρέθηκε",
  description:
    "Ο σύνδεσμος δεν αντιστοιχεί σε σελίδα του Nikos Alfa Romeo Parts. Μεταβείτε στον κατάλογο ανταλλακτικών ή στην αρχική.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="container-page section-pad">
      <p className="text-xs font-semibold tracking-[0.16em] text-rosso uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl">Η σελίδα δεν βρέθηκε</h1>
      <p className="mt-4 max-w-lg text-ink-muted">
        Ο σύνδεσμος δεν αντιστοιχεί σε σελίδα του καταστήματος. Ο κατάλογος
        ανταλλακτικών είναι στη θέση του.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/antallaktika" className="btn btn-primary">
          Κατάλογος ανταλλακτικών
        </Link>
        <Link href="/" className="btn btn-secondary">
          Αρχική
        </Link>
      </div>
    </main>
  );
}
