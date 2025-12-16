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
      <section
        id="home"
        className="flex flex-col gap-0 min-h-screen bg-cover bg-center"
      >
        <div className="flex flex-1 items-center justify-center px-6 pt-24 pb-16 md:pt-40 md:pb-24 lg:pt-32">
          <div className="text-center md:text-left text-white max-w-[600px]">
            <div
              className="text-sm sm:text-base md:text-xl flex items-center justify-center md:justify-start gap-2 mb-4 mt-[120px]"
              data-aos="zoom-in"
            >
              <CiPlay1 className="text-lg mt-1 text-center" />
              <p className="tracking-wider uppercase">DIRECTED BY FATON CAKAJ</p>
            </div>
            <h3
              className="text-4xl sm:text-5xl md:text-6xl font-bold md:py-0 py-5 leading-tight"
              data-aos="fade-in"
            >
              Erfolg durch Video
            </h3>

            {!isExpanded && (
              <div data-aos="fade-in">
                <button
                  id="hero-btn"
                  onClick={handleExpand}
                  className="flex items-center justify-center md:justify-between md:ml-auto text-white backdrop-blur bg-black/50 hover:bg-white/10 border-2 border-white px-4 py-2.5 w-full sm:w-auto md:w-auto rounded-lg mt-4 hover:-translate-y-1 transition-transform duration-200"
                >
                  <p className="md:ml-3 text-sm sm:text-base">Meine Projekte</p>
                  <div className="pl-2">
                    <FaArrowAltCircleRight className="text-lg" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full px-6 md:px-12 lg:px-16 py-10 md:py-14">
          <div className="max-w-7xl mx-auto">
            <p className="text-white/60 text-center text-xs sm:text-sm mb-6 tracking-wide animate-fade-in">
              VERTRAUT VON
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-8 items-center justify-items-center">
              {kunden.slice(0, 16).map((kunde) => (
                <div
                  key={kunde.id}
                  className="group relative flex items-center justify-center animate-fade-in"
                  style={{ animationDelay: `${kunde.id * 50}ms` }}
                >
                  <Image
                    src={kunde.img || "/placeholder.svg"}
                    alt={kunde.name}
                    width={120}
                    height={60}
                    className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out max-h-10 sm:max-h-12 md:max-h-16 w-auto"
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          onClick={handleClose}
        >
          <div
            className="relative flex flex-col w-full max-w-6xl max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] overflow-hidden backdrop-blur bg-black/80 rounded-2xl sm:rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="flex items-start justify-between p-6 sm:p-8 pb-4 border-b border-white/10">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                  Meine Projekte
                </h2>
                <p className="text-sm sm:text-base text-white/70">Eine Auswahl meiner besten Arbeiten</p>
              </div>
              <button
                onClick={handleClose}
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors rounded-full shrink-0 ml-4"
                aria-label="Close"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scroll px-6 sm:px-8 py-6">
              {/* Video Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="relative w-full group overflow-hidden rounded-xl backdrop-blur-md bg-slate-500/20 shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={movie.thumbnail || "/placeholder.svg"}
                        alt={movie.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-white/20 hover:bg-white/40 text-white border-white/30"
                          onClick={() => setSelectedMovie(movie)}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{movie.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{movie.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Dialog open={selectedMovie !== null} onOpenChange={() => setSelectedMovie(null)}>
              <DialogContent className="bg-black/90 backdrop-blur-lg text-white border-white/20 sm:max-w-[90vw] md:max-w-[800px] w-[95vw] rounded-2xl p-4 sm:p-6">
                <DialogHeader className="mb-4">
                  <DialogTitle className="text-xl sm:text-2xl">{selectedMovie?.title}</DialogTitle>
                  <DialogDescription className="text-white/70 text-sm sm:text-base">{selectedMovie?.category}</DialogDescription>
                </DialogHeader>
                <div className="mt-2">
                  <div className="rounded-lg overflow-hidden bg-black">
                    {selectedMovie && (
                      <iframe
                        src={selectedMovie.video}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title={selectedMovie.title}
                        className="w-full aspect-video"
                      />
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </>
  )
}
