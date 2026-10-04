import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-rosso-hover bg-charcoal shadow-[0_-4px_24px_rgb(0_0_0_/0.2)] md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="btn btn-primary rounded-none py-3.5"
      >
        Κλήση
      </a>
      <a
        href={site.whatsapp}
        className="flex items-center justify-center py-3.5 text-sm font-semibold text-cream hover:bg-white/5"
      >
        WhatsApp
      </a>
    </div>
  );
}
