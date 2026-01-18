import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apex-consulting-iota.vercel.app'),
  title: "APEX Consulting | Strategy & Growth Partners",
  description: "Transforming businesses through strategic insight and operational excellence. Expert consulting services for business strategy, growth, and organizational transformation.",
  keywords: ["business consulting", "strategy consulting", "growth partners", "operational excellence", "business transformation", "strategic planning", "management consulting"],
  authors: [{ name: "APEX Consulting" }],
  openGraph: {
    title: "APEX Consulting | Strategy & Growth Partners",
    description: "Transforming businesses through strategic insight and operational excellence.",
    url: "https://apex-consulting-iota.vercel.app",
    siteName: "APEX Consulting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "APEX Consulting | Strategy & Growth Partners",
    description: "Transforming businesses through strategic insight and operational excellence.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://apex-consulting-iota.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
