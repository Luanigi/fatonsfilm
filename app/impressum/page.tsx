import Link from "next/link"
import Navbar from "@/components/Header"
import Contact from "@/components/Contact"

export default function Impressum() {
  return (
    <>
    <Navbar />
    <main className="text-center text-white bg-cover bg-center flex flex-col items-center justify-center" id="impressum">
        <div className="backdrop-blur-2xl p-10 rounded-lg md:mt-5 mt-20 md:w-3/6 w-11/12 text-wrap" data-aos="fade-up">
        <h1 className="text-3xl underline pb-2 font-bold">Impressum</h1>
        <h2 className="text-xl pb-5 font-bold">Angaben gemäß § 5 TMG</h2>
        <p>Faton Cakaj</p>
        <p>In der Hocksche 2</p>
        <p>58099 Hagen</p>

        <h2 className="text-xl pt-5 pb-1 font-bold">Kontakt</h2>
        <p>Telefon: +49 233 13422243</p>
        <p>E-Mail: <Link href="mailto:post@fatonsfilmproduction.de" className="text-blue-500 drop-shadow-lg">post@fatonsfilmproduction.de</Link></p>

        <h2 className="text-xl pt-5 pb-1 font-bold">EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
        <Link href={"https://ec.europa.eu/consumers/odr"} className="text-blue-500 drop-shadow-lg">https://ec.europa.eu/consumers/odr</Link>
        <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2 className="text-xl pt-5 pb-1 font-bold">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2 className="text-xl pt-5 pb-1 font-bold">Haftungsausschluss</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        <br />
        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h2 className="text-xl pt-5 pb-1 font-bold">Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
        <br />
        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        <p className="pt-5"><b>Quelle:</b> eRecht24</p>

        <p className="pt-6">Gehe zurück zur <Link href="/" className="text-blue-500 drop-shadow-lg">Startseite</Link></p>
    
        </div>
    </main>
    <Contact />
    </>
  )
}
