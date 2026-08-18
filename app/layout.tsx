import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://good-angel.com"),

  title: {
    default: "好天使不動產財商團隊",
    template: "%s｜好天使不動產財商團隊",
  },

  description:
    "好天使不動產財商團隊結合不動產實務、財商教育與人才培育，陪伴學員建立購屋判斷、稅務處理與財產規劃能力。",

  alternates: {
    canonical: "https://good-angel.com",
  },

  openGraph: {
    title: "好天使不動產財商團隊",
    description:
      "結合不動產實務、財商教育與人才培育，陪伴學員建立專業的不動產財商能力。",
    url: "https://good-angel.com",
    siteName: "好天使不動產財商團隊",
    locale: "zh_TW",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
