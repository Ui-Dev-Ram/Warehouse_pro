import HeaderTop from "@/components/home/header/HeaderTop";
import Header from "@/components/home/header/Header";
import Footer from "@/components/home/footer/Footer";
import Head from 'next/head';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "warehouzez.com",
  description: "Warehouzez is Warehouse and logistics company and is most well-known logistics and warehousing service providers in the country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <body className="">
        <HeaderTop />
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}
