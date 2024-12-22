import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Faton Cakaj",
    template: "%s | Faton Cakaj",
  },
  description: "Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen.",
  metadataBase: new URL("https://www.fatonsfilmproduction.de/"),
  keywords: ["Faton Cakaj", "fatoncakaj", "director", "videographer"],
  openGraph: {
    title: "Faton Cakaj",
    description: "Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen.",
    url: "https://www.fatonsfilmproduction.de/",
    siteName: "Faton Cakaj",
    locale: "de_GER",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
