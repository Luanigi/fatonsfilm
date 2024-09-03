export default function Portfolio() {
    return (
      <section id="portfolio" className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <img src="/portfolio1.jpg" alt="Portfolio Item 1" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <img src="/portfolio2.jpg" alt="Portfolio Item 2" className="w-full h-48 object-cover"/>
            </div>
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <img src="/portfolio3.jpg" alt="Portfolio Item 3" className="w-full h-48 object-cover"/>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>
    );
  }
  