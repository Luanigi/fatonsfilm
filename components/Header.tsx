import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


  

  return (
    <>
      {/* Sidebar for Desktop */}
      <div 
        className={`fixed flex justify-center shadow-2xl translate-y-1/2 h-2/4 bg-white/200  backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out z-50 ${
            isHovered ? 'translate-x-0' : '-translate-x-full'
        } md:block hidden`}
        style={{ width: '260px' }} 
      
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <nav className="flex flex-col h-full justify-center">
        <h1 className="text-3xl font-bold flex">
            <Image className="mr-3 rounded-md ml-3 mb-4" src={"/Logo.jpg"} width={40} height={30} alt={" "}/>
            Faton.ca
        </h1>
          <Link href="#home">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Home</p>
          </Link>
          <Link href="#portfolio">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Portfolio</p>
          </Link>
          <Link href="#about">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">About</p>
          </Link>
          <Link href="#contact">
            <p className="py-2 px-4 hover:bg-white/20 transition duration-20">Contact</p>
          </Link>
        </nav>
      </div>

      {/* Button to toggle Sidebar */}
      <div className="bg-#324432 fixed top-1/2 transform -translate-y-1/2"             
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
        <button
            className={`fixed top-1/2 h-[455px] shadow-2xl text-center text-xl transform -translate-y-1/2 p-2  bg-white/200 backdrop-blur-lg text-white z-250 transition-transform duration-300 ease-in-out md:block hidden ${
                isHovered ? 'translate-x-64' : 'translate-x-0'
            }`}

        >
            <div className='ml-3.5 text-3xl'>
                	<FaBars/>
            </div>
            <p className='text-center'>MENU</p>
        </button>
      </div>


      {/* Responsive Navbar for iPad or Smaller */}
      <div className="w-full h-[65px] bg-black/20 backdrop-blur-lg text-white md:hidden absolute top-0 left-0 right-0 z-950" data-aos="fade-down">
        <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-3xl font-bold flex">
            <Image className="mr-3 rounded-md" src={"/Logo.jpg"} width={40} height={30} alt={" "}/>
            Faton.ca
        </h1>
          <button onClick={toggleSidebar} className="text-2xl">
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${
            isSidebarOpen ? 'scale-100' : 'scale-0'
          }   transition-transform duration-300 ease-in-out translate-x-0 z-[-2]`}
        >
          <nav className="flex flex-col items-center space-y-4 py-4 ">
            <Link href="#home" className='hover:bg-black/20 w-5/6 text-center p-3 drop-shadow-2xl rounded-lg bg-black/10 backdrop-blur-lg'>
              <p className="hover:text-gray-300  transition duration-300" onClick={toggleSidebar}>Home</p>
            </Link>
            <Link href="#portfolio" className='hover:bg-black/20 w-5/6 text-center p-3 drop-shadow-2xl rounded-lg bg-black/10 backdrop-blur-lg'>
              <p className="hover:text-gray-300 transition duration-300" onClick={toggleSidebar}>Portfolio</p>
            </Link>
            <Link href="#about" className='hover:bg-black/20 w-5/6 text-center p-3 drop-shadow-2xl rounded-lg bg-black/10 backdrop-blur-lg'>
              <p className="hover:text-gray-300  transition duration-300" onClick={toggleSidebar}>About</p>
            </Link>
            <Link href="#contact" className='hover:bg-black/20 w-5/6 text-center p-3 drop-shadow-2xl rounded-lg bg-black/10 backdrop-blur-lg'>
              <p className="hover:text-gray-300 transition duration-300" onClick={toggleSidebar}>Contact</p>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}