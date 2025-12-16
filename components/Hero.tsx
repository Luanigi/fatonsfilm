"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { CiPlay1 } from "react-icons/ci"
import { X } from "lucide-react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Kunden {
  id: number
  img: string
  name: string
}

interface Movie {
  id: number
  title: string
  category: string
  thumbnail: string
  video: string
}

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)

  const movies: Movie[] = [
    {
      id: 1,
      title: "Abiball 2024",
      category: "Moment Capture",
      thumbnail: "/thumbnails/abiballthumb.png",
      video: "https://www.youtube.com/embed/hs_iSmaI_DY",
    },
    {
      id: 2,
      title: "Jekyll and Hyde - Hagen",
      category: "Werbung",
      thumbnail: "/thumbnails/jekyllandhydethumb.png",
      video: "https://player.vimeo.com/video/690455956?h=aa02fb345e",
    },
    {
      id: 3,
      title: "Kurve Kriegen 2024",
      category: "Musik Video",
      thumbnail: "/thumbnails/kurvekriegenthumb.png",
      video: "https://www.youtube.com/embed/keq6qGO227o",
    },
    {
      id: 4,
      title: "youtaste Advertisement",
      category: "Werbung",
      thumbnail: "/thumbnails/youtastethumb.png",
      video: "https://player.vimeo.com/video/689201130?h=7cc52c1521",
    },
    {
      id: 5,
      title: "Hochzeit",
      category: "Hochzeits Video",
      thumbnail: "/thumbnails/hochzeitthumb.png",
      video: "https://www.youtube.com/embed/MtQ4TKOBOrQ",
    },
    {
      id: 6,
      title: "Auto Showcase",
      category: "showcase",
      thumbnail: "/thumbnails/carshowcasethumb.png",
      video: "https://www.youtube.com/embed/7QrTjrm8U6Y",
    },
  ]

  const kunden: Kunden[] = [
    { id: 1, img: "/kunden/kunde4.png", name: "Landesvereinigung Kulturelle Jugendarbeit NRW e.V." },
    { id: 2, img: "/kunden/kunde18.png", name: "Kurve Kriegen" },
    { id: 3, img: "/kunden/kunde3.png", name: "Deutsche Vermögensberatung" },
    { id: 4, img: "/kunden/kunde1.png", name: "Ministerium für Kinder Nordrhein-Westfalen" },
    { id: 5, img: "/kunden/kunde5.webp", name: "You taste" },
    { id: 6, img: "/kunden/kunde6.png", name: "Dream Lounge Hagen" },
    { id: 7, img: "/kunden/kunde2.png", name: "AZ" },
    { id: 8, img: "/kunden/kunde8.png", name: "CATWALK Hagen" },
    { id: 9, img: "/kunden/kunde9.png", name: "Zen Taurus" },
    { id: 10, img: "/kunden/kunde10.png", name: "Urbanize" },
    { id: 11, img: "/kunden/kunde11.png", name: "Pizzeria Engel" },
    { id: 12, img: "/kunden/kunde12.png", name: "La Candela" },
    { id: 13, img: "/kunden/kunde13.png", name: "Barber Club" },
    { id: 14, img: "/kunden/kunde14.png", name: "Traumringhaus" },
    { id: 15, img: "/kunden/kunde15.png", name: "Lag Tanz NRW" },
    { id: 16, img: "/kunden/kunde16.jpg", name: "La grange" },
    { id: 17, img: "/kunden/kunde17.jpg", name: "Fm Cakaj" },
    { id: 18, img: "/kunden/kunde7.png", name: "DOOSTI" },
    { id: 19, img: "/kunden/kunde19.png", name: "Stadt Bäckerei Kamp" },
    { id: 20, img: "/kunden/kunde20.jpg", name: "m stage tanzart" },
  ]

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <section id="home" className="flex flex-col gap-0">
        <div className="h-[100dvh] bg-cover bg-center flex items-center justify-center">
          <div className="text-center text-white max-w-[550px]">
            <div className="mt-40 text-xl flex items-center justify-center md:justify-start gap-1" data-aos="zoom-in">
              <CiPlay1 className="text-lg mt-1 text-center" />
              <p className="tracking-wider">DIRECTED BY FATON CAKAJ</p>
            </div>
            <h3 className="text-6xl font-bold md:py-0 py-5" data-aos="fade-in">
              Erfolg durch Video
            </h3>

            {!isExpanded && (
              <div data-aos="fade-in">
                <button
                  id="hero-btn"
                  onClick={handleExpand}
                  className="flex md:ml-auto text-white backdrop-blur bg-black/50 hover:bg-white/10 border-2 border-white p-2.5 md:w-2/6 rounded-lg mt-4 hover:-translate-y-2 transition duration-200"
                >
                  <p className="md:ml-3">Meine Projekte</p>
                  <div className="pt-[4px] pl-2">
                    <FaArrowAltCircleRight className="text-lg" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 py-8">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/60 text-center text-sm mb-6 tracking-wide animate-fade-in">VERTRAUT VON</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8 items-center justify-items-center">
              {kunden.slice(0, 16).map((kunde) => (
                <div
                  key={kunde.id}
                  className="group relative flex items-center justify-center animate-fade-in"
                  style={{ animationDelay: `${kunde.id * 50}ms` }}
                >
                  <Image
                    src={kunde.img || "/placeholder.svg"}
                    alt={kunde.name}
                    width={80}
                    height={80}
                    className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out w-16 h-16 md:w-20 md:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Modal Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2 animate-in fade-in duration-300"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="relative flex h-full w-full max-w-6xl overflow-y-auto backdrop-blur bg-black/50 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16">
              <div className="flex flex-col w-full h-full">
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight mb-3">
                    Meine Projekte
                  </h2>
                  <p className="text-base sm:text-lg text-white/80">Eine Auswahl meiner besten Arbeiten</p>
                </div>

                {/* Video Gallery Grid - same behavior as Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 custom-scroll overflow-y-auto pr-2">
                  {movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="relative w-full group overflow-hidden rounded-xl backdrop-blur-md bg-slate-500/20 shadow-xl transition-all duration-300 ease-in-out"
                    >
                      <Image
                        src={movie.thumbnail || "/placeholder.svg"}
                        alt={movie.title}
                        className="h-20 w-20 object-cover"
                        layout="responsive"
                        width={20}
                        height={20}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white"
                          onClick={() => setSelectedMovie(movie)}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-1">{movie.title}</h3>
                        <p className="text-gray-300 text-sm">{movie.category}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Dialog open={selectedMovie !== null} onOpenChange={() => setSelectedMovie(null)}>
                  <DialogContent className="bg-black/60 backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out sm:max-w-[600px] w-11/12 rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>{selectedMovie?.title}</DialogTitle>
                      <DialogDescription>{selectedMovie?.category}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <div className="rounded-lg overflow-hidden">
                        {selectedMovie && (
                          <iframe
                            src={selectedMovie.video}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title={selectedMovie.title}
                            width={560}
                            height={315}
                            className="w-full aspect-video"
                          />
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center text-white bg-transparent transition-colors hover:bg-white/10 rounded-full"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
