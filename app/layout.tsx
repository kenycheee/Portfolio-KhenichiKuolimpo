/**
 * RootLayout — Portfolio Website
 *
 * Description:
 *  - The global layout wrapper for the entire application.
 *  - Loads global styles, fonts, and shared components.
 *  - Injects the background, navigation bar, and footer on every page.
 *
 * Components Included:
 *  • Background — Animated particles / dynamic backdrop
 *  • NavBar — Floating center navigation menu
 *  • Footer — Contact & social network section
 *
 * Notes:
 *  - `children` represents all pages rendered inside the layout.
 *  - Google fonts (Geist & Geist Mono) are loaded using next/font.
 *  - Metadata controls the website title and SEO description.
 *
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Background from "./components/Background";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Khenichi Kuolimpo",
  description: "Website portfolio pribadi Khenichi Kuolimpo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Background />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
