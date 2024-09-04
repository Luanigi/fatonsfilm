import React from 'react'
import { PiFilmReel } from "react-icons/pi";

export default function Dienstleistungen() {
  return (
    <div className='pb-16 pt-16 flex flex-col bg-black'>
      <h1 className='text-4xl font-bold text-center tracking-wide text-[#ffffff]'>Was ich für dich tun kann</h1>
      <p className='text-md font-bold mb-8 text-center text-[#93762b]'>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
      <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            
            <div className="bg-[#93762b] text-center rounded shadow-lg overflow-hidden text-white">
              <div className="pl-50">
                <PiFilmReel size={40} />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias.</p>
            </div>

            <div className="bg-[#93762b] text-center rounded shadow-lg overflow-hidden text-white">
              <div className="pl-50">
                <PiFilmReel size={40} />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias.</p>
            </div>

            <div className="bg-[#93762b] text-center rounded shadow-lg overflow-hidden text-white">
              <div className="pl-50">
                <PiFilmReel size={40} />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, alias.</p>
            </div>
            
          </div>
      </div>
    </div>
  )
}
