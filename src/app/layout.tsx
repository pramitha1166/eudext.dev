import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "eudext - Custom Software Solutions",
    template: "%s | eudext",
  },
  description: "We build the world's finest custom software. Working with startups and companies of all sizes to create innovative solutions that make a real difference.",
  keywords: ["custom software", "web development", "mobile apps", "cloud solutions", "startup", "enterprise software"],
  authors: [{ name: "eudext" }],
  creator: "eudext",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eudext.dev",
    title: "eudext - Custom Software Solutions",
    description: "We build the world's finest custom software. Working with startups and companies of all sizes to create innovative solutions that make a real difference.",
    siteName: "eudext",
  },
  twitter: {
    card: "summary_large_image",
    title: "eudext - Custom Software Solutions",
    description: "We build the world's finest custom software. Working with startups and companies of all sizes to create innovative solutions that make a real difference.",
    creator: "@eudext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}