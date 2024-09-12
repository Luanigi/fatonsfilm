import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function Kunden() {
  return (
    <div className="bg-[#000b21] pt-20">
    <h1 className=' text-white text-4xl text-center pb-10 '>Unsere Kunden</h1>
    <div className="flex w-1/2 mx-auto">
    
    <Marquee style={{width: '100%', margin: '0 auto', background: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(16,8,16,0) 32%)"}}>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
    </Marquee>  

    <Image src={"/camera.png"} width={150} height={150} alt={" "} />
    </div>

    <h1 className="text-white md:text-3xl  transition ease-in-out text-lg font-bold flex gap-3"></h1>
    
    </div>
  )
}
