import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function Kunden() {
  return (
    <>
    <h1 className='bg-black text-white text-4xl text-center pb-10'>Unsere Kunden</h1>
    <Marquee className="bg-black">
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <div></div>
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   
        <Image className="ml-10 mr-10" src={"/logo.png"} width={100} height={100} alt={" "}/>   

    </Marquee>  
    </>
  )
}
