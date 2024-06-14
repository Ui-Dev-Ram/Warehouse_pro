import HeaderTop from "@/components/home/header/HeaderTop";
import Header from "@/components/home/header/Header";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warehouzez",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className}  ${process.env.NODE_ENV == "development" ? "debug-screens" : "" }`}>
        <HeaderTop />
        <Header />
        {children}
      </body>
    </html>
  );
}
