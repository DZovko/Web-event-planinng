import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solene Events — Refined Event Planning",
  description:
    "Solene Events designs and produces galas, weddings, and private celebrations across Croatia, with an eye for restraint and detail.",
  keywords: ["event planning", "wedding planner", "corporate events", "Croatia", "gala"],
  openGraph: {
    title: "Solene Events — Refined Event Planning",
    description:
      "Galas, weddings, and private celebrations, designed with restraint and precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
