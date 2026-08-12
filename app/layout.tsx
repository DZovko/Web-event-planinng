import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saico — Profinjeno planiranje eventa",
  description:
    "Saico osmišljava i producira gala večeri, vjenčanja i privatne proslave diljem Hrvatske, s okom za suzdržanost i detalje.",
  keywords: [
    "planiranje eventa",
    "organizacija vjenčanja",
    "korporativni eventi",
    "Hrvatska",
    "gala večer",
  ],
  openGraph: {
    title: "Saico — Profinjeno planiranje eventa",
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
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
