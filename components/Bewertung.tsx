"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Leonie M.",
    review:
      "Ein unglaubliches Gespür für Atmosphäre und Details. Die Zusammenarbeit war angenehm und das Ergebnis übertraf all meine Erwartungen.",
  },
  {
    name: "Kumar R.",
    review:
      "Professionell, kreativ und immer mit dem Blick für das Wesentliche. Ich kann ihn nur wärmstens weiterempfehlen!",
  },
  {
    name: "Emilia W.",
    review:
      "Jedes Projekt mit ihm ist ein kleines Kunstwerk. Die Leidenschaft und Präzision, mit der gearbeitet wird, ist beeindruckend.",
  },
  {
    name: "Ali B.",
    review:
      "Ein absoluter Profi, der jeden Moment perfekt einfängt. Ich bin jedes Mal begeistert von den Ergebnissen. Freundlich und sehr kompetent!",
  },
  {
    name: "Nino G.",
    review:
      "Wir sind stolz, solch einen talentierten Künstler miterleben zu dürfen. Seine Filme sind einfach meisterhaft.",
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
    name: "Malik N.",
    review:
      "Noch nie habe ich einen Menschen getroffen, der nur durch Zuhören die Bilder so 1 zu 1 visualisieren kann. Die Tonqualität und Farben sind einfach fantastisch!",
  },
  {
    name: "Jonas W.",
    review:
      "Ein Videograph, der wirklich sein Handwerk versteht. Fantastische Bildqualität, schnelle Lieferung und super freundlich. Sehr empfehlenswert!",
  },
  {
    name: "José M.",
    review:
      "Super Zusammenarbeit! Er versteht sofort, was man möchte, und setzt es perfekt um. Sympathisch und sehr engagiert, klare Empfehlung.",
  },
  {
    name: "Maximilian E.",
    review: "Er versteht es, Emotionen durch seine Filme zu transportieren. Ein wahrer Meister seines Fachs!",
  },
  {
    name: "Jonas F.",
    review:
      "Seine Filme sind visuell beeindruckend und emotional packend. Man merkt, dass er ein wahres Gespür für die richtige Inszenierung hat.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonial" className="w-full py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3 sm:space-y-4">
          <div
            className="inline-block text-muted-foreground text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2"
            data-aos="fade-in"
          >
            Bewertungen
          </div>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 lg:mb-20 tracking-wider"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            Was sagen unsere Kunden?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-aos="fade-in" data-aos-delay="200">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <CardContent className="pt-6 space-y-4">
                {/* Quote Icon */}
                <div className="text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{testimonial.review}</p>

                {/* Divider */}
                <div className="w-12 h-px bg-border group-hover:bg-foreground/20 transition-colors duration-300" />

                {/* Name */}
                <p className="text-foreground font-semibold tracking-wide">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
