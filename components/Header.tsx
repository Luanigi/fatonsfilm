"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { FaInstagram, FaFacebookF  } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LuMailPlus } from "react-icons/lu";
import NavLinks from './NavLinks'


export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      {/* Sidebar for Desktop */}
      <div 
        className={`fixed flex justify-center shadow-2xl translate-y-1/2 h-2/4 bg-black/10 backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out z-[50] ${
            isHovered ? 'translate-x-0' : '-translate-x-full'
        } lg:block hidden`}
        style={{ width: '256px' }} 
      
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <nav className="flex flex-col h-full justify-center">
        <h5 className="text-3xl font-bold flex">
            <Image className="mr-3 rounded-md ml-3 mb-4" src={"/Logo.png"} width={40} height={30} alt={" "}/>
            Faton&apos;s Film
        </h5>
          <Link href="/#home">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Home</p>
          </Link>
          <Link href="/#about">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Über mich</p>
          </Link>
          <Link href="/#projekte">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Projekte</p>
          </Link>
          <Link href="/#contact">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Kontakt</p>
          </Link>
          <hr className='w-1/2 text-center mx-auto my-3 text-white'/>
          <div className="grid grid-cols-4 mx-auto mt-3">
            <Link href="https://www.instagram.com/faton.ca/" target="_blank" className="font-bold flex">
              <FaInstagram className="text-5xl py-2 text-[#849cc8]  hover:bg-white/20 transition duration-20 ease-in-out rounded-md" />            
            </Link>
            <Link href="mailto:post@fatonsfilmproduction.de" className="font-bold flex ">
              <LuMailPlus className="text-5xl py-2 text-[#2596be] hover:bg-white/20 transition duration-20 ease-in-out rounded-md" />            
            </Link>
            <Link href="https://www.facebook.com/p/fatonca-100066291680163/" target="_blank" className="font-bold flex ">
              <FaFacebookF className="text-5xl py-2 text-[#d4bb47]  hover:bg-white/20 transition duration-20 ease-in-out rounded-md" />            
            </Link>
            <Link href="tel:+4923313422243" className="font-bold flex ">
              <FiPhoneCall className="text-5xl py-2 text-[#d87474] hover:bg-white/20 transition duration-20 ease-in-out rounded-md" />            
            </Link>
          </div>
        </nav>

        
      </div>

      {/* Button to toggle Sidebar */}
      <div className="fixed top-1/2 transform transition-transform z-50 -translate-y-1/2"             
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        <button
            className={`fixed top-1/2 h-[455px]  shadow-2xl text-center bg-black/10  text-white text-xl transform -translate-y-1/2 p-2 transition-transform duration-300 ease-in-out lg:block hidden ${
                isHovered ? 'translate-x-64 backdrop-blur-lg' : 'backdrop-blur-lg translate-x-0'
            }`}

        >
            <div className='ml-3.5 text-3xl'>
                	<FaBars/>
            </div>
            <p className='text-center'>MENU</p>
        </button>
      </div>


      {/* Responsive Navbar for iPad or Smaller */}
      <nav className="w-full h-[65px] fixed top-0 left-0 right-0 z-[60] lg:hidden" data-aos="fade-down">
      <div className="backdrop-blur-md bg-black/20 p-4 shadow-lg">
        <div className="flex justify-between items-center">
        <h5 className="text-3xl font-bold flex text-white">
            <Image className="mr-3 rounded-md " src={"/Logo.png"} width={40} height={30} alt={" "}/>
            Faton.ca
        </h5>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none focus:text-gray-500"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="backdrop-blur-md bg-black/20 shadow-lg"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}