import React from 'react'
import Bewertungen from "./Bewertung"
import Image from 'next/image';


export default function Kunden() {
  return (
    <div className="bg-[#000b21] pt-20">
      <div className="text-[#1c4c74] text-center px-2 text-xl font-extrabold uppercase rounded-md mb-5">
            Partner
      </div>
      <h1 className=' text-white text-4xl text-center pb-10'>Unsere Kunden 🤝</h1>
      <div className="flex w-1/2 mx-auto">
      
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 text-white text-center mx-auto py-5 kndn">
          <div className= 'bg-black/20 rounded hover:scale-110 transition ease-in-out'>
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Cola
          </div>
          
          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Pepsi
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Mcdonalds
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            KFC
          </div>


          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Fortnite
          </div>


          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Asus
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Logitech
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Ryzer
          </div>
        </div>
      </div>


    <Bewertungen/>
    
    </div>
  )
}
