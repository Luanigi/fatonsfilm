import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the Movie interface outside the component
interface Movie {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  video: string;
}

export default function Portfolio() {
  // Use the Movie | null type for selectedMovie state
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movies: Movie[] = [
    { id: 1, title: "Video Titel", category: "Short Film", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
    { id: 2, title: "Video Titel", category: "Documentary", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
    { id: 3, title: "Video Titel", category: "Music Video", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
    { id: 4, title: "Video Titel", category: "Web Series", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
    { id: 5, title: "Video Titel", category: "Short Film", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
    { id: 6, title: "Video Titel", category: "Corporate", thumbnail: "/thumbnails/thumbnail.png", video: "/yurvideo.mp4" },
  ];

  return (
    <>
      <section className="py-20 px-4 md:mt-10 mt-[20rem] md:px-8 pt-[600px] md:pt-0" id="prjktBck">
        <div className="max-w-6xl mx-auto">
        <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5" data-aos="fade-up-left">
            Produkt
        </div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white" id="projekte" data-aos="fade-in">
            Meine Projekte
          </h2>

          <video src="/yurvideo.mp4" className="rounded-lg w-3/4 m-auto my-10 h-full object-cover" data-aos="fade-in" controls></video>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative md:w-full w-10/12 m-auto group overflow-hidden rounded-xl backdrop-blur-md bg-slate-500/20 shadow-xl transition-all duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                <Image
                  src={movie.thumbnail}
                  alt={movie.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover hover:bg-slate-800/20"
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
                  <p className="text-gray-300">{movie.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Dialog open={selectedMovie !== null} onOpenChange={() => setSelectedMovie(null)}>
          <DialogContent className="bg-black/10 backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out sm:max-w-[425px] w-5/6 rounded-lg">
            <DialogHeader>
              <DialogTitle>{selectedMovie?.title}</DialogTitle>
              <DialogDescription>{selectedMovie?.category}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <video
                src={selectedMovie?.video || "/placeholder.svg"}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                controls
              />
            </div>
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
}
