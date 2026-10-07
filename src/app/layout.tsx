import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import { SiteGraphJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeaderShell } from "@/components/site-header-shell";
import { OG_DEFAULT } from "@/lib/seo";
import { defaultDescription, defaultTitle, site } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "greek"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin", "greek"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | Nikos Alfa Parts`,
  },
  description: defaultDescription,
  applicationName: site.name,
  authors: [{ name: site.shortName, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: OG_DEFAULT.url,
        width: OG_DEFAULT.width,
        height: OG_DEFAULT.height,
        alt: OG_DEFAULT.alt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [OG_DEFAULT.url],
  },
  category: "automotive",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el-GR"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col"
        suppressHydrationWarning
      >
        <SiteGraphJsonLd />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <SiteHeaderShell />
        <div id="content" className="flex flex-1 flex-col">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
