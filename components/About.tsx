import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-40 md:py-16 bg-[#000b21] h-screen grid  text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-0">
          <div className="md:w-1/4 w-3/4">
            <Image className="w-full h-auto rounded-lg shadow-2xl" src={"/Faton.jpg"} layout="responsive" width={900} height={900} alt={" "} data-aos="fade-up"/>   
          </div>

          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="300">Faton Cakaj, Hagen📍</h2>
            <p className="mt-4 text-lg text-justify" data-aos="fade-up" data-aos-delay="500">
                Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im
                Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch 
                die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu 
                schaffen.
            </p>
          </div>
        </div>
      </section>
    );
  }
  