"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";

/** Remount header on route change so an open mobile menu never sticks across pages. */
export function SiteHeaderShell() {
  const pathname = usePathname();
  return <SiteHeader key={pathname} />;
}
