import Image from "next/image";

export default function Portfolio() {
    return (
      <section id="portfolio" className="py-16 bg-black text-white pt-[600px] md:pt-0">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Meine Arbeit spricht für sich</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <Image src={"/hero-bg.gif"} width={24} height={30} alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>
    );
  }
  