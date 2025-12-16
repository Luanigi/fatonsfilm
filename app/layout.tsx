import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Providers } from "@/components/Providers";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Faton Cakaj",
    template: "%s | Faton Cakaj",
  },
  description: "Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen.",
  metadataBase: new URL("https://fatonsfilmproduction.de/"),
  keywords: [
    "Faton Cakaj",
    "fatoncakaj",
    "director",
    "videographer",
    "Faton's Film Production",
    "Filmproduktion Faton Cakaj",
    "Filmregisseur Faton Cakaj",
    "Faton Cakaj Filme",
    "Filmproduktion",
    "Videoproduktion",
    "Werbefilme",
    "Musikvideos",
    "Imagefilme",
    "Eventfilme",
    "Dokumentarfilme",
    "Kurzfilme",
    "Albanische Filmproduktion",
    "Deutsche Filmproduktion",
    "Kreative Videoproduktion",
    "Professionelle Filmproduktion",
    "Filmproduktion Deutschland",
    "Filmproduktion Berlin",
    "Filmregisseur Berlin",
    "Videoproduktion Berlin",
    "Hochwertige Videoproduktion",
    "Professionelle Filmproduktion",
    "Kreative Filmarbeiten",
    "Videoproduktion für Unternehmen",
    "Filmproduktion Dienstleistungen"
  ],
  openGraph: {
    title: "Faton Cakaj",
    description: "Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen.",
    url: "https://fatonsfilmproduction.de/",
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
      <body className={noto.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />  
      </body>
    </html>
  );
}
