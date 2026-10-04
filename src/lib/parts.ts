export type CatalogPart = {
  title: string;
  price: string;
  src: string;
  href: string;
  models: string[];
};

export const catalogParts: CatalogPart[] = [
  {
    title: "Ζάντες Alfa Romeo MiTo 16\"",
    price: "250 €",
    src: "/images/part-mito-wheels.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/57119329/",
    models: ["mito"],
  },
  {
    title: "Πεταλούδα γκαζιού Alfa Romeo 159, Brera, Spider",
    price: "90 €",
    src: "/images/part-throttle.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/49018356/",
    models: ["159", "brera", "spider"],
  },
  {
    title: "Σασμάν Alfa Romeo Giulietta 1.4 Turbo MultiAir",
    price: "10 €",
    src: "/images/part-giulietta-gearbox.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53086144/",
    models: ["giulietta"],
  },
  {
    title: "Κομπρεσέρ κλιματισμού Alfa Romeo Giulietta",
    price: "5 €",
    src: "/images/part-giulietta-ac.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53070090/",
    models: ["giulietta"],
  },
  {
    title: "Μοτέρ καλοριφέρ Alfa Romeo MiTo",
    price: "10 €",
    src: "/images/part-mito-heater.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53086710/",
    models: ["mito"],
  },
  {
    title: "Φανάρια εμπρός Lancia Musa",
    price: "10 €",
    src: "/images/part-lancia-lights.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53070193/",
    models: [],
  },
  {
    title: "Πίσω προφυλακτήρας Fiat Grande Punto Evo",
    price: "5 €",
    src: "/images/part-fiat-bumper.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53065013/",
    models: [],
  },
  {
    title: "Πόρτες Fiat 500L",
    price: "5 €",
    src: "/images/part-fiat-doors.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53040255/",
    models: [],
  },
  {
    title: "Ραδιόφωνο CD Fiat Panda 2012–2020",
    price: "10 €",
    src: "/images/part-panda-radio.jpg",
    href: "https://nikos-alfa-romeo-parts.car.gr/parts/view/53200866/",
    models: [],
  },
];

export const featuredParts = catalogParts.slice(0, 6);

export function partForModel(slug: string) {
  return catalogParts.find((part) => part.models.includes(slug));
}
