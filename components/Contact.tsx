import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
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
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bleib im Kontakt!</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-slate-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <br />
              <button type="submit" className="bg-zinc-900 hover:bg-zinc-800 transition duration-200 ease-in-out rounded-lg p-2 w-full">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} | Faton.ca | All rights reserved.</p>

        </div>
        <Image src={"/icon2.png"} alt="Logo" width={100} height={100} className="flex m-auto opacity-40"/>
      </div>
    </footer>
  )
}