import Image from "next/image";

export default function About() {
    return (
      <section id="about" className="py-16 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/4 border-2 border-white">
            <Image className="w-full h-auto rounded shadow-lg" src={"/Faton.jpg"} width={900} height={900} alt={" "}/>   
          </div>


          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="mt-4 text-lg">
              I'm a professional videographer with over 10 years of experience in capturing beautiful moments. My passion is to tell stories through the lens, creating memorable experiences for my clients.
            </p>
          </div>
        </div>
      </section>
    );
  }
  