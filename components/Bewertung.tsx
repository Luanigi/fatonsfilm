"use client";

import BewertungsKarte from "./BewertungsKarte"
import { Autoplay } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"

const testimonials = [
  {
    name: "Sarah B.",
    review:
      "Ein absoluter Profi, der jeden Moment perfekt einfängt. Ich bin jedes Mal begeistert von den Ergebnissen. Freundlich und sehr kompetent!",
  },
  {
    name: "Sophie K.",
    review:
      "Seit Jahren arbeite ich mit ihm zusammen, und die Qualität ist immer top! Sehr professionell und zuverlässig, kreative Ideen und super Umsetzung 🎥👍",
  },
  {
    name: "Kathrin S.",
    review:
      "Erstklassige Videos, die Emotionen und Momente so gut einfangen! Ein sehr netter und talentierter Videograph, absolut empfehlenswert!",
  },
  {
    name: "Jonas W.",
    review:
      "Ein Videograph, der wirklich sein Handwerk versteht. Fantastische Bildqualität, schnelle Lieferung und super freundlich. Sehr empfehlenswert!",
  },
  {
    name: "Lisa M.",
    review:
      "Super Zusammenarbeit! Er versteht sofort, was man möchte, und setzt es perfekt um. Sympathisch und sehr engagiert, klare Empfehlung.",
  },
];

function Testimonials() {
  return (
    <div id="testimonial" className="w-full h-fit py-20 relative bg-cover bg-center">
      <div className="max-w-[1400px] w-[91%] mx-auto">
        <div className="text-center justify-center">
          <div className="text-[#1c4c74] px-2 text-xl font-extrabold uppercase rounded-md mb-5" data-aos="fade-up-left">
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
