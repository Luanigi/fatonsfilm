import React from 'react'
// import { PiFilmReel } from "react-icons/pi";
import { FaCommentDots, FaLightbulb, FaFilm, FaTools } from 'react-icons/fa';

export default function Dienstleistungen() {
  return (
    <section className="dienstbg text-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block text-muted-foreground text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2" data-aos="fade-up-left">
          prozess
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 lg:mb-20 tracking-wider" data-aos="fade-up">
          Die 4 Schritte zu Ihrem Erfolg
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Schritt 1 */}
          <div className="flex flex-col items-center px-4" data-aos="fade-in" data-aos-delay="200">
            <FaCommentDots className="text-4xl sm:text-5xl mb-4 text-[#849cc8]" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Kommunikation</h4>
            <p className="text-sm sm:text-base leading-relaxed">
              Der erste Eindruck zählt. Damit Sie wissen, mit wem Sie es 
              zu tun haben und wir Ihre Vision nachvollziehen können, ist 
              ein Vorabgespräch sehr nützlich. In diesem Gespräch können 
              wir alle wichtigen Details besprechen, um sicherzustellen, 
              dass wir Ihre Erwartungen genau verstehen.
            </p>
          </div>

          {/* Schritt 2 */}
          <div className="flex flex-col items-center px-4" data-aos="fade-in" data-aos-delay="300">
            <FaLightbulb className="text-4xl sm:text-5xl mb-4 text-[#2596be]" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Konzept</h4>
            <p className="text-sm sm:text-base leading-relaxed">
              Das Konzept ist das Herz jeder Produktion und die Grundvoraussetzung, 
              um einen wirkungsvollen Film zu erhalten. Hier legen wir den kreativen 
              Rahmen fest, der den gesamten Produktionsprozess leiten wird.
            </p>
          </div>

          {/* Schritt 3 */}
          <div className="flex flex-col items-center px-4" data-aos="fade-in" data-aos-delay="400">
            <FaFilm className="text-4xl sm:text-5xl mb-4 text-[#d4bb47]" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Dreh</h4>
            <p className="text-sm sm:text-base leading-relaxed">
              Das Konzept erwacht zum Leben. Durch unser professionelles 
              Equipment lassen sich einzigartige Aufnahmen erstellen, die 
              genau auf Ihre Vision abgestimmt sind und das geplante Konzept 
              umsetzen.
            </p>
          </div>

          {/* Schritt 4 */}
          <div className="flex flex-col items-center px-4" data-aos="fade-in" data-aos-delay="500">
            <FaTools className="text-4xl sm:text-5xl mb-4 text-[#d87474]" />
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Postproduktion</h4>
            <p className="text-sm sm:text-base leading-relaxed">
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
