import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/business";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Abu Dhabi Pharmacy | Pharmacy in Abu Dhabi – Al Danah",
    template: "%s | Abu Dhabi Pharmacy",
  },
  description:
    "Abu Dhabi Pharmacy on Najdah Street, Al Danah, Zone 1, Abu Dhabi. Call +971 2 886 5628 for pharmacy information and healthcare product inquiries.",
  keywords: [
    "Abu Dhabi Pharmacy",
    "Pharmacy in Abu Dhabi",
    "Pharmacy Al Danah",
    "Pharmacy Najdah Street",
    "Healthcare Products Abu Dhabi",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: business.siteUrl,
    siteName: business.name,
    title: "Abu Dhabi Pharmacy | Pharmacy in Abu Dhabi – Al Danah",
    description:
      "Visit Abu Dhabi Pharmacy on Najdah Street in Al Danah for pharmacy assistance and healthcare product inquiries.",
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Abu Dhabi Pharmacy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Dhabi Pharmacy | Pharmacy in Abu Dhabi",
    description:
      "Pharmacy information and healthcare product inquiries on Najdah Street, Al Danah, Abu Dhabi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F4EE] text-[#2A2E32]">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
