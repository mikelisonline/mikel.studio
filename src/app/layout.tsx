import type { Metadata, Viewport } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mikel Studio",
  description:
    "Designer & developer building thoughtful digital experiences.",
  metadataBase: new URL("https://mikel.studio"),
  openGraph: {
    title: "Mikel Studio",
    description:
      "Designer & developer building thoughtful digital experiences.",
    siteName: "Mikel Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikel Studio",
    description:
      "Designer & developer building thoughtful digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* DNS prefetch for external domains used in drawers */}
        <link rel="dns-prefetch" href="https://bandcamp.com" />
        <link rel="dns-prefetch" href="https://everyday-eye.com" />
      </head>
      <body
        className={`${inter.variable} ${firaMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
