import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lovespecialistastrologer.com"),
  title: {
    default:
      "Love Problem Specialist & Vashikaran Specialist | Pandit Naitik Ji",
    template: "%s | Love Specialist Astrologer",
  },
  description:
    "Pandit Naitik Ji — trusted Love Problem Specialist & Vashikaran Specialist offering confidential Vedic remedies for love marriage problems, breakups, husband-wife disputes and ex love back. Call 96600 07699.",
  keywords: [
    "Love Problem Specialist",
    "Vashikaran Specialist",
    "Love Marriage Problem Solution",
    "Ex Love Back",
    "Husband Wife Dispute Solution",
    "Inter Caste Love Marriage",
    "Vedic Astrologer",
    "Pandit Naitik Ji",
  ],
  authors: [{ name: "Pandit Naitik Ji" }],
  openGraph: {
    title:
      "Love Problem Specialist & Vashikaran Specialist | Pandit Naitik Ji",
    description:
      "Confidential, honest Vedic guidance for love and relationship problems. Call or WhatsApp 96600 07699.",
    type: "website",
    locale: "en_IN",
    siteName: "Love Specialist Astrologer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#8B1E2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
