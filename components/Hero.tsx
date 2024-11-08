import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="h-[100dvh] bg-cover bg-center flex items-center justify-center">
      <div className="text-center text-white md:mt-0 mt-40">
      <p className="mt-4 text-xl" data-aos="zoom-in">Directed by Faton</p>
        <h1 className="text-6xl font-bold" data-aos="zoom-in">Erfolg durch Video</h1>
      <Link href="/#projekte">
          <div data-aos="zoom-in">
              <button className="flex m-auto bg-blue-500 p-2.5 md:w-2/6 rounded-lg mt-4 hover:-translate-y-2 hover:bg-blue-600 transition duration-200 hover:bcktst">
              <p className="md:ml-3 ">Meine Projekte</p>
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
