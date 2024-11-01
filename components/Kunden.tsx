import React from 'react'
import Bewertungen from "./Bewertung"
import Image from 'next/image';
import { Button } from '@radix-ui/themes';
import { Play } from 'lucide-react';

interface Kunden {
  id: number;
  img: string;
  name: string;
}
export default function Kunden() {
  const kunden: Kunden[] = [
    { id: 1, img: "/kunden/anonym.jpg", name: "Cola" },
    { id: 2, img: "/kunden/anonym.jpg", name: "Pepsi" },
    { id: 3, img: "/kunden/anonym.jpg", name: "Mcdonalds" },
    { id: 4, img: "/kunden/anonym.jpg", name: "KFC" },
    { id: 5, img: "/kunden/anonym.jpg", name: "Fortnite" },
    { id: 6, img: "/kunden/anonym.jpg", name: "Asus" },

  ];

  return (
    <div className="bg-[#000b21] pt-20">
      <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5">
            Partner
      </div>
      <h1 className=' text-white text-4xl text-center pb-10'>Unsere Kunden 🤝</h1>
      
      <div className="flex w-1/2 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 text-white text-center mx-auto py-5">
              {kunden.map((kunde) => (
                <div
                  key={kunde.id}
                  className="bg-black/20 rounded m-auto  hover:scale-110 transition ease-in-out"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <Image
                    src={kunde.img}
                    alt={" "}
                    width={300}
                    height={300}
                    className="rounded hover:scale-120 transition ease-in-out"
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
