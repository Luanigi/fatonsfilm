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
    { id: 1, img: "/kunden/kunde.png", name: "Cola", fade: "fade-up-right" },
    { id: 2, img: "/kunden/kunde.png", name: "Pepsi", fade: "fade-up-left" },
    { id: 3, img: "/kunden/kunde.png", name: "Mcdonalds", fade: "fade-up-right" },
    { id: 4, img: "/kunden/kunde.png", name: "KFC", fade: "fade-up-left" },
    { id: 5, img: "/kunden/kunde.png", name: "Fortnite", fade: "fade-up-right" },
    { id: 6, img: "/kunden/kunde.png", name: "Asus", fade: "fade-up-left" },
  ];

  return (
    <div id="kunden" className="bg-gradient-to-b from-[#001b51] from-10% to-[#000] to-60% pt-20">
      <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5" data-aos="fade-up-left">
            Partner
      </div>
      <h1 className=' text-white text-4xl text-center pb-10' data-aos="fade-up-right">Unsere Kunden 🤝</h1>
      
      <div className="flex w-1/2 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-white text-center mx-auto py-5">
              {kunden.map((kunde) => (
                <div
                  key={kunde.id}
                  className="bg-black/20 rounded m-auto  hover:scale-110 transition ease-in-out"
                  data-aos= "zoom-in"
                  data-aos-duration="500"
                >
                  <Image
                    src={kunde.img}
                    alt={" "}
                    width={300}
                    height={300}
                    className="rounded hover:scale-120 transition ease-in-out bg-transparent"
                  />
                    {kunde.name}
                </div>
              ))}
        </div>
      </div>
      <Bewertungen/>
    
    </div>
  )
}
