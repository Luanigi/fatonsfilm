"use client";

import BewertungsKarte from "./BewertungsKarte"
import { Autoplay } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"

const testimonials = [
  {
    name: "Karin Worgul",
    review:
      "Esat hat wieder sein absolutes Können gezeigt. Ich bin total zufrieden aus dem Salon gegangen. Meine Freundinnen haben mir 5 Sterne gegeben.",
  },
  {
    name: "Muzaffer Topal",
    review:
      "Seit 15 Jahren mein Friseur der esat. Ich kann ihn an jedem weiter empfehlen. Super nette Mitarbeiter sehr freundlich. Besonders die Aufklärung der Kunden 1a💇‍♂️ 💇‍♀️",
  },
  {
    name: "Kathrin S.",
    review:
      "Sehr guter Damenlanghaarschnitt und Herren Kurzhaarschnitt. Geben sich viel Mühe, Geschäft ist ruhig und nicht so ein unruhiges rein raus gerenne. Faire Preise. Super",
  },
  {
    name: "Rita Sohn",
    review:
      "Gehe schon sehr lange dort hin, nette Bedienung, freundlich, sehr sauber wird sehr auf Hygiene geachtet,fühle mich wohl dort, Preise ok komme gerne wieder",
  },
  {
    name: "ALEXANDRA Ida",
    review:
      "Super Haarschnitt. Toller Chef und super Mitarbeiterin. Beide haben den bestimmten Griff um die Haate zu schneiden, es sieht immer toll aus.",
  },
];

function Testimonials() {
  return (
    <div id="testimonial" className="w-full h-fit py-20 relative bg-[#000b21]">
      <div className="max-w-[1400px] w-[91%] mx-auto">
        <div className="text-center justify-center">
          <div className="text-[#1c4c74] px-2 text-xl font-extrabold uppercase rounded-md mb-5">
            Bewertungen
          </div>
          <h1 className="dark:text-white text-black text-[50px] mb-10" data-aos="fade-up">Was sagen unsere Kunden?</h1>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={500}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            770: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full "
          data-aos="zoom-in"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <BewertungsKarte testimonial={testimonial}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
