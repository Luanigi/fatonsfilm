import React from 'react'
// import { PiFilmReel } from "react-icons/pi";
import { FaCommentDots, FaLightbulb, FaFilm, FaTools } from 'react-icons/fa';

export default function Dienstleistungen() {
  return (
    <section className="dienstbg text-white pt-40 h-screen">
      <div className="container mx-auto text-center w-5/6">
        <h3 className="text-3xl md:text-4xl font-bold mb-20 tracking-wider" data-aos="fade-up">
          Die 4 Schritte zu Ihrem Erfolg
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Schritt 1 */}
          <div className="flex flex-col items-center" data-aos="fade-in"  data-aos-delay="200">
            <FaCommentDots className="text-5xl mb-4" />
            <h4 className="text-xl font-bold mb-4">Kommunikation</h4>
            <p className="text-md">
              Der erste Eindruck zählt. Damit Sie wissen, mit wem Sie es 
              zu tun haben und wir Ihre Vision nachvollziehen können, ist 
              ein Vorabgespräch sehr nützlich. In diesem Gespräch können 
              wir alle wichtigen Details besprechen, um sicherzustellen, 
              dass wir Ihre Erwartungen genau verstehen.
            </p>
          </div>

          {/* Schritt 2 */}
          <div className="flex flex-col items-center" data-aos="fade-in" data-aos-delay="300">
            <FaLightbulb className="text-5xl mb-4" />
            <h4 className="text-xl font-bold mb-4">Konzept</h4>
            <p className="text-md">
              Das Konzept ist das Herz jeder Produktion und die Grundvoraussetzung, 
              um einen wirkungsvollen Film zu erhalten. Hier legen wir den kreativen 
              Rahmen fest, der den gesamten Produktionsprozess leiten wird.
            </p>
          </div>

          {/* Schritt 3 */}
          <div className="flex flex-col items-center" data-aos="fade-in" data-aos-delay="400">
            <FaFilm className="text-5xl mb-4" />
            <h4 className="text-xl font-bold mb-4">Dreh</h4>
            <p className="text-md">
              Das Konzept erwacht zum Leben. Durch unser professionelles 
              Equipment lassen sich einzigartige Aufnahmen erstellen, die 
              genau auf Ihre Vision abgestimmt sind und das geplante Konzept 
              umsetzen.
            </p>
          </div>

          {/* Schritt 4 */}
          <div className="flex flex-col items-center" data-aos="fade-in" data-aos-delay="500">
            <FaTools className="text-5xl mb-4" />
            <h4 className="text-xl font-bold mb-4">Postproduktion</h4>
            <p className="text-md">
              In der Postproduktion führen wir alle Puzzleteile zusammen. 
              Durch Color Grading wird Ihrem Film ein einzigartiger Look 
              verliehen, der das Endprodukt auf das nächste Level hebt und 
              einen bleibenden Eindruck hinterlässt.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
