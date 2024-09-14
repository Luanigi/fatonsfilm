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
      
        <div className="grid grid-cols-4 gap-6 text-white text-center mx-auto py-5 kndn">
          <div className= 'bg-black/20 rounded hover:scale-110 transition ease-in-out'>
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>
          
          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>


          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>


          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>

          <div className="bg-black/20 rounded hover:scale-110 transition ease-in-out">
            <Image src={"/kunden/anonym.jpg"} width={300} height={300} alt={" "} className='rounded'/>
            Michel
          </div>
        </div>
      </div>


    <Bewertungen/>
    
    </div>
  )
}
