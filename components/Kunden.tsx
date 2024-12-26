import React from 'react'
import Bewertungen from "./Bewertung"
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import Marquee from "react-fast-marquee";

interface Kunden {
  id: number;
  img: string;
  name: string;
}
export default function Kunden() {
  const kunden: Kunden[] = [
    { id: 1, img: "/kunden/kunde4.png", name: "Landesvereinigung Kulturelle Jugendarbeit NRW e.V."},
    { id: 2, img: "/kunden/kunde18.png", name: "Kurve Kriegen",},
    { id: 3, img: "/kunden/kunde3.png", name: "Deutsche Vermögensberatung"},
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
  ];

  return (
    <div id="kunden" className="bg-black h-auto md:pt-0 pt-20">
       <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5" data-aos="fade-up-left">
            Partner
      </div>
      <h1 className=' text-white text-4xl text-center pb-10 px-3' data-aos="fade-up-right">Erfolgreiche Zusammenarbeit 🤝</h1>
      
      <div className="flex md:w-6/12 w-11/12 mx-auto m-auto mb-20 px-10 backdrop-blur-lg rounded-lg">
        <div className="grid grid-cols-1 gap-6 text-white text-center mx-auto py-5">
        <Marquee className='m-auto' direction="right" pauseOnHover={true} autoFill={true} gradient={true} gradientColor="#000" gradientWidth={150}>
              {kunden.map((kunde) => (
                <div
                  key={kunde.id}
                  className=" rounded m-auto px-5 hover:scale-110 transition ease-in-out"
                  data-aos= "zoom-in"
                  data-aos-duration="500"
                >
                  <Image
                    src={kunde.img}
                    alt={kunde.name}
                    width={150}
                    height={150}
                    className="rounded hover:scale-120 transition ease-in-out bg-transparent
                    w-100 h-100 md:w-150 md:h-150"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </div>

    
    </div>
  )
}
