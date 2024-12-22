import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Faton Cakaj',
    short_name: 'fatoncakaj',
    description: "Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen.",
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}