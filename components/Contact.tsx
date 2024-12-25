import Link from "next/link"
import { Facebook, Instagram, Youtube, MailPlus, PhoneCall } from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#000b21] text-gray-300" id="contact">
      <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Über mich</h3>
            <p className="text-sm">
                Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im
                Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch 
                die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu 
                schaffen.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home 🏠
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Über mich 📍
                </Link>
              </li>
              <li>
                <Link href="/#projekte" className="hover:text-white transition-colors">
                  Projekte 🎥
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Kontakt ✉️
                </Link>
              </li>
              <li>
                <Link href={"/impressum"} className="text-blue-300">
                  Impressum 📄
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Bleib im Kontakt!</h3>
            <div className="grid space-y-2 mt-4">
              <div className="flex gap-1">
                <Link href="mailto:post@fatonsfilmproduction.de" className="hover:text-white flex transition-colors py-2 px-4 w-2/6 border-white border-2  rounded">
                  <MailPlus className="h-5 w-5"/>
                  <span className="ml-auto">Mail</span>
                </Link>
                <Link href="tel:+4923313422243" className="hover:text-white flex transition-colors py-2 px-4 w-4/6 border-white border-2  rounded">
                  <PhoneCall  className="h-5 w-5"/>
                  <span className="ml-auto">Mobil Nummer</span>
                </Link>
              </div>

              <Link href="https://www.instagram.com/faton.ca/" className="hover:text-white transition-colors py-2 px-4 w-6/6 flex border-white border-2 rounded">
                <Instagram className="h-5 w-5" />
                <span className="ml-auto">Instagram</span>
              </Link>

              <div className="flex gap-1">
              <Link href="https://www.facebook.com/p/fatonca-100066291680163/" className="hover:text-white transition-colors py-2 px-4 flex w-3/6 bg-transparent border-white border-2 rounded">
                <Facebook className="h-5 w-5" />
                <span className="ml-auto">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors py-2 px-4 flex w-3/6 bg-transparent border-white border-2 rounded">
                <FaWhatsapp  className="h-5 w-5" />
                <span className="ml-auto">Whatsapp</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} | Faton Cakaj | All rights reserved.</p>
        </div>
        <Image src={"/icon2.png"} alt="Logo" width={100} height={100} className="flex m-auto opacity-40"/>
      </div>
    </footer>
  )
}