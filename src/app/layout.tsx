import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "wght"],
  style: ["normal", "italic"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ligeff Agency — Operational Machines, Visual Assets, Market Dominance",
    template: "%s — Ligeff Agency",
  },
  description:
    "Ligeff Agency builds the three assets that move money in a modern business: operational machines that buy back time, photorealistic visual assets that close the imagination gap, and a market presence that owns the answer when buyers ask the question.",
  keywords: [
    "Ligeff Agency",
    "AI automation",
    "autonomous agents",
    "3D rendering",
    "property walkthrough",
    "AI video",
    "AI SEO",
    "GEO",
    "generative engine optimization",
    "high-end web development",
  ],
  authors: [{ name: "Ligeff Agency" }],
  openGraph: {
    title: "Ligeff Agency",
    description:
      "Operational machines that buy back time. Photorealistic visual assets that close the imagination gap. Market presence that owns the answer.",
    siteName: "Ligeff Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ligeff Agency",
    description:
      "Operational machines that buy back time. Photorealistic visual assets that close the imagination gap. Market presence that owns the answer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${sora.variable} antialiased bg-bg text-ink`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
