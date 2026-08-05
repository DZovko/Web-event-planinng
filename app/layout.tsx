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
  title: "Solene Events — Profinjeno planiranje eventa",
  description:
    "Solene Events osmišljava i producira gala večeri, vjenčanja i privatne proslave diljem Hrvatske, s okom za suzdržanost i detalje.",
  keywords: [
    "planiranje eventa",
    "organizacija vjenčanja",
    "korporativni eventi",
    "Hrvatska",
    "gala večer",
  ],
  openGraph: {
    title: "Solene Events — Profinjeno planiranje eventa",
    description:
      "Gala večeri, vjenčanja i privatne proslave, osmišljene sa suzdržanošću i preciznošću.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
