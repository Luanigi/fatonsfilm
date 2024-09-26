// export default function Contact() {
//     return (
//       <section id="contact" className="py-16 bg-gray-900 text-white">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-8">Lass uns zusammenarbeiten</h2>
//           <form className="max-w-lg mx-auto space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm">Name</label>
//               <input type="text" id="name" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm">Email</label>
//               <input type="email" id="email" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm">Message</label>
//               <textarea id="message" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 h-32"></textarea>
//             </div>
//             <button type="submit" className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700">Send Message</button>
//           </form>
//         </div>
//       </section>
//     );
//   }


import Image from "next/image"
import Logo from "../app/icon.png"
import { FaClock,FaLocationDot, FaPhoneFlip  } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter  } from "react-icons/fa6";


function Contact() {

    const handleClick = (targetUrl: string): void => {
        window.open(targetUrl, '_blank');
      };

  return (
    <div className="py-40 px-0 pb-5 bg-neutral-200 dark:bg-[#111] dark:text-white text-black relative">
        <Image src={Logo} alt="" className="footer-img bg-black dark:bg-transparent max-w-[350px] sm:max-w-[370px] dark:opacity-10 hidden dark:grid absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="title-text">
            <p>KONTAKTIERE UNS!</p>
            <h1>Besuche uns Heute!</h1>
        </div>
        <div className="footer-row">
        <div className="footer-left">
            <h1>Öffnungszeiten</h1>
            <p><FaClock className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/>Montag bis Freitag - 08:30 bis 18:30</p>
            <p><FaClock className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/>Samstags 08:00 - 16:00</p>
        </div>
        <div className="footer-right">
            <h1>Info</h1>
            <p>Weberstraße 50, 45879 Gelsenkirchen<FaLocationDot className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/></p>
            <p><a href="tel:+492091476264">+49 209 1476264</a><FaPhoneFlip className="text-[20px] text-yellow-500 mr-[10px] ml-[10px]"/></p>
        </div>
    </div>

    <div className="social-links">
        <FaFacebookF className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 dark:hover:text-[#111] hover:text-white hover:translate-y-[-7px]" onClick={() => handleClick('/404')}/>
        <FaInstagram className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 dark:hover:text-[#111] hover:text-white hover:translate-y-[-7px] insta" onClick={() => handleClick('https://www.instagram.com/artfriseur/')}/>
        <FaTiktok className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 dark:hover:text-[#111] hover:text-white hover:translate-y-[-7px] tiktok" onClick={() => handleClick('https://www.tiktok.com/@esatajeti')}/>
        <FaTwitter className="h-6 w-6 text-[20px] leading-10 border-2 border-solid border-yellow-500 text-yellow-500 cursor-pointer transition duration-500 mx-2 mt-10 p-1.5 hover:bg-yellow-500 dark:hover:text-[#111] hover:text-white hover:translate-y-[-7px]" onClick={() => handleClick('/404')}/>
        <p className="text-sm mt-5">© 2024 Art Friseur</p>
    </div>
    </div>
  )
}

export default Contact
