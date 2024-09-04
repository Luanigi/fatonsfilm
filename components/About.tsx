import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-16 bg-[#93762b] h-screen grid  text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/4">
            <Image className="w-full h-auto rounded-lg shadow-2xl" src={"/Faton.jpg"} width={900} height={900} alt={" "} data-aos="fade-up"/>   
          </div>


          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold" data-aos="fade-up" data-aos-delay="300">Deine Geschichte, deine Leidenschaft</h2>
            <p className="mt-4 text-lg" data-aos="fade-up" data-aos-delay="500">
              I&apos;m a professional videographer with over 10 years of experience in capturing beautiful moments. My passion is to tell stories through the lens, creating memorable experiences for my clients.
            </p>
          </div>
        </div>
      </section>
    );
  }
  