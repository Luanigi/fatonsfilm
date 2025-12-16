import Link from "next/link"
import { Facebook, Instagram, Youtube, MailPlus, PhoneCall } from "lucide-react"
import Image from "next/image"
import Whatsappbtn from "./Whatsappbtn";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 overflow-x-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Über mich</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
                Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im
                Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch 
                die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu 
                schaffen.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors ml-0">
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
          <div className="max-w-[300px]">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Bleib im Kontakt!</h3>
            <div className="grid space-y-2 sm:space-y-3 mt-4 max-w-[300px]">
              <div className="flex flex-row sm:flex-row gap-2 w-full max-w-[300px] sm:max-w-[500px] sm:w-[500px]">
                <Link href="mailto:post@fatonsfilmproduction.de" className=" w-full sm:w-[44%] hover:text-white hover:bg-white/10 flex items-center justify-center sm:justify-start transition-colors py-2 px-4 border-white border-2 rounded">
                  <MailPlus className="h-4 w-4 sm:h-5 sm:w-5 mr-2"/>
                  <span>Mail</span>
                </Link>
                  <Link href="tel:+4923313422243" 
                    className="w-full sm:w-auto hover:text-white hover:bg-white/10 flex items-center justify-center sm:justify-start transition-colors py-2 px-4 border-white border-2 rounded text-xs sm:text-sm">
                  <PhoneCall className="h-4 w-4 sm:h-5 sm:w-5 mr-2"/>
                  <span className="truncate">Mobil Nummer</span>
                </Link>
              </div>

              <Link href="https://www.instagram.com/faton.ca/" target="_blank" className="max-w-[300px] md:max-w-full sm:w-[390px] w-full hover:text-white hover:bg-white/10 transition-colors py-2 px-4 flex items-center justify-center sm:justify-start border-white border-2 rounded">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span>Instagram</span>
              </Link>

              <div className="flex flex-row sm:flex-row gap-2 w-full sm:w-[500px] max-w-[300px] md:max-w-full">
                <Link href="https://www.facebook.com/p/fatonca-100066291680163/" target="_blank" className="hover:text-white hover:bg-white/10 transition-colors py-2 px-4 flex items-center justify-center sm:justify-start border-white border-2 rounded w-[300px] sm:w-auto">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>Facebook</span>
                </Link>
                <Whatsappbtn />
              </div>
            </div>

          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-xs sm:text-sm text-center">
          <p>&copy; {new Date().getFullYear()} | Faton Cakaj | All rights reserved.</p>
        </div>
        <div className="flex justify-center mt-6">
          <Image src={"/icon2.png"} alt="Logo" width={80} height={80} className="opacity-40" />
        </div>
      </div>
    </footer>
  )
}