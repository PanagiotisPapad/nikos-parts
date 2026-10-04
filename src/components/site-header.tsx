"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Αρχική" },
  { href: "/antallaktika", label: "Κατάλογος" },
  { href: "/alfa-romeo", label: "Μοντέλα Alfa" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const menuId = useId();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  const mobileMenu =
    menuOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Κύριο μενού"
            className="fixed inset-0 z-[200] flex flex-col bg-charcoal text-cream md:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex min-w-0 items-center gap-3"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rosso font-serif text-lg font-bold text-white"
                  aria-hidden
                >
                  N
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-serif text-xl leading-tight tracking-tight">
                    Nikos Alfa Parts
                  </span>
                  <span className="block truncate text-[11px] font-medium text-cream/70">
                    Μεταχειρισμένα ανταλλακτικά · Καλαμαριά
                  </span>
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-cream hover:bg-white/10"
                aria-label="Κλείσιμο μενού"
                onClick={closeMenu}
              >
                <CloseIcon />
              </button>
            </div>

            <nav
              aria-label="Κύρια πλοήγηση"
              className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-8"
            >
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-4 text-2xl font-semibold transition-colors ${
                      active
                        ? "bg-rosso text-white"
                        : "text-cream hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-3 border-t border-white/10 px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <a
                href={`tel:${site.phoneTel}`}
                className="btn btn-primary w-full py-3.5 text-base"
                onClick={closeMenu}
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsapp}
                className="btn btn-on-dark w-full py-3.5 text-base"
                onClick={closeMenu}
              >
                WhatsApp
              </a>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 text-cream backdrop-blur-md">
        <div className="container-page flex items-center justify-between gap-3 py-3 md:py-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rosso font-serif text-lg font-bold text-white"
              aria-hidden
            >
              N
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-xl leading-tight tracking-tight">
                Nikos Alfa Parts
              </span>
              <span className="block truncate text-[11px] font-medium text-cream/70">
                Μεταχειρισμένα ανταλλακτικά · Καλαμαριά
              </span>
            </span>
          </Link>

          <nav aria-label="Κύρια" className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-rosso text-white"
                      : "text-cream/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={`tel:${site.phoneTel}`}
              className="btn btn-primary hidden px-4 py-2 text-sm md:inline-flex"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="btn btn-primary px-3 py-2 text-sm md:hidden"
              aria-label={`Κλήση ${site.phoneDisplay}`}
            >
              Κλήση
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-cream hover:bg-white/10 md:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
