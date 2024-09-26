import { IoIosArrowForward } from "react-icons/io";

export default function Portfolio() {
    return (
      <>
      <section id="portfolio" className="py-16 bg-black text-white pt-[600px] md:pt-0">
        <h1 className="text-4xl bold text-center tracking-widest md:pt-5 pt-16" data-aos="fade-up">Projekte</h1>
        <h3 className="text-2xl bold text-center pb-16 text-[#4741bf]" data-aos="fade-up">Wir lassen unsere Projekte für uns sprechen!</h3>
        
        {/* Main */}
        <div className="w-full text-center flex mb-10">
          <iframe className="mx-auto xl:w-5/12 md:w-8/12 w-10/12 lg:h-[450px] md:h-[300px] h-[200px]" width="800" height="512" src="https://www.youtube.com/embed/tqWXHpQYxYQ" title="Why Dostoevsky would HATE Nietzsche" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        {/* sideprojs */}

        <h1 className="text-2xl bold text-center tracking-widest py-16" data-aos="fade-up">Weiteres...</h1>

        <div className="h-[30dvh] md:mx-40 mx-10 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">


          <div className="relative group h-full w-full overflow-hidden rounded-3xl" data-aos="fade-right">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/hero-bg.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Filme 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>
            
          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testeins.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Serien 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testzwei.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Trailer 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testdrei.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Hochzeit
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

          <div className="relative group h-full w-full overflow-hidden rounded-3xl" data-aos="fade-right">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/hero-bg.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Filme 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>
            
          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testeins.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Serien 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testzwei.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Trailer 
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

          <div className="relative group h-full w-full overflow-hidden rounded-3xl">
              
              {/* The image background with hover scale effect */}
              <div
                className="absolute inset-0 bg-[url('/testdrei.gif')] bg-cover bg-center grid transition-transform duration-500 group-hover:scale-110"
              ></div>

              <div className="absolute inset-0 bg-black bg-opacity-80"></div>

              {/* Centered text */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3">
                  Hochzeit
                  <div className="pt-1">
                    <IoIosArrowForward />  
                  </div>
                </h1>
              </div>

              
          </div>

        </div>
        
      </section>
      <div className="ubergang h-[30vh]"></div>
      </>
    );
  }
  