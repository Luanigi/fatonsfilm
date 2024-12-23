import React from 'react'
import Bewertungen from "./Bewertung"
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import { Play } from 'lucide-react';

interface Kunden {
  id: number;
  img: string;
  name: string;
  fade: string;
}
export default function Kunden() {
  const kunden: Kunden[] = [
    { id: 1, img: "/kunden/kunde4.png", name: "Landesvereinigung Kulturelle Jugendarbeit NRW e.V.", fade: "fade-up-right" },
    { id: 2, img: "/kunden/kunde2.png", name: "404", fade: "fade-up-left" },
    { id: 3, img: "/kunden/kunde3.png", name: "Lag Tanz NRW", fade: "fade-up-right" },
    { id: 4, img: "/kunden/kunde1.png", name: "Ministerium für Kinder Nordrhein-Westfalen", fade: "fade-up-left" },
    { id: 5, img: "/kunden/kunde5.webp", name: "You taste", fade: "fade-up-right" },
    { id: 6, img: "/kunden/kunde6.png", name: "Dream Lounge Hagen", fade: "fade-up-left" },
  ];

  return (
    <div id="kunden" className="bg-gradient-to-b h-auto from-[#000] from-0% via-[#081530] via-80% to-[#000] to-100% pt-20"> {/**/}
       <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5" data-aos="fade-up-left">
            Partner
      </div>
      <h1 className=' text-white text-4xl text-center pb-10 px-3' data-aos="fade-up-right">Erfolgreiche Zusammenarbeit 🤝</h1>
      
      <div className="flex w-10/12 mx-auto m-auto mb-20 px-10 bg-blue-900/50 backdrop-blur-lg rounded-lg">
        <div className="grid lg:flex md:grid-cols-2 grid-cols-1 gap-6 text-white text-center mx-auto py-5">
              {kunden.map((kunde) => (
                <div
                  key={kunde.id}
                  className=" rounded m-auto  hover:scale-110 transition ease-in-out"
                  data-aos= "zoom-in"
                  data-aos-duration="500"
                >
                  <Image
                    src={kunde.img}
                    alt={kunde.name}
                    width={280}
                    height={180}
                    className="rounded hover:scale-120 transition ease-in-out bg-transparent"
                  />
                </div>
              ))}
        </div>
      </div>

    
    </div>
  )
}
