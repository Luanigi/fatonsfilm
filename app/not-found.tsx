import Link from "next/link"
import Navbar from "../components/Header"
import Contact from "@/components/Contact"

export default function NotFound() {
  return (
    <>
    <Navbar />
    <main className="text-center text-white h-[100dvh] bg-cover bg-center flex flex-col items-center justify-center" id="not-found">
        
        <h2 className="text-3xl">Es gibt ein <b className="text-red-500">Problem</b>.</h2>
        <p>Wir konnten die gesuchte Seite nicht finden!</p>
        <p>Gehe zurück zur <Link href="/" className="text-blue-500 drop-shadow-lg">Startseite</Link></p>
    </main>
    <Contact />
    </>
  )
}
