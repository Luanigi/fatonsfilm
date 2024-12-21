import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

export default function Hero() {
  return (
    <section id="home" className="h-[100dvh] bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mt-4 text-xl flex items-center justify-center md:justify-start gap-1" data-aos="zoom-in">
          <CiPlay1 className="text-lg mt-1 text-center" /> 
          <p className="tracking-wider">DIRECTED BY FATON CAKAJ</p>
        </div>
        <h3 className="text-6xl font-bold md:py-0 py-5" data-aos="zoom-in">Erfolg durch Video</h3>
        <Link href="/#projekte">
          <div data-aos="zoom-in">
            <button
              id="hero-btn"
              className="flex md:ml-auto text-white backdrop-blur bg-black/50 hover:bg-white/10 border-2 border-white p-2.5 md:w-2/6 rounded-lg mt-4 hover:-translate-y-2 transition duration-200"
            >
              <p className="md:ml-3">Meine Projekte</p>
              <div className="pt-[4px] pl-2">
                <FaArrowAltCircleRight className="text-lg" />
              </div>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}
