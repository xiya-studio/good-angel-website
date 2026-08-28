import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://good-angel.com"),

  title: {
    default: "好天使不動產財商團隊",
    template: "%s｜好天使不動產財商團隊",
  },

  description:
    "好天使不動產財商團隊結合不動產實務、財商教育與人才培育，透過專業學習、實務經驗與團隊交流，陪伴夥伴建立自己的專業方向。",

  applicationName: "好天使不動產財商團隊",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "好天使不動產財商團隊",
    description:
      "結合不動產實務、財商教育與人才培育，透過學習、交流與實務經驗，建立屬於自己的專業方向。",
    url: "/",
    siteName: "好天使不動產財商團隊",
    locale: "zh_TW",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
