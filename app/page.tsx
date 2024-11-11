"use client";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Zitat from '../components/Zitat';
import Dienstleistungen from '../components/Dienstleistungen';
import Portfolio from '../components/Portfolio';
import Kunden from '../components/Kunden';
import About from '../components/About';
import Contact from '../components/Contact';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const innerCursor = innerCursorRef.current;
    const outerCursor = outerCursorRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (innerCursor && outerCursor) {
        innerCursor.style.left = `${e.clientX}px`;
        innerCursor.style.top = `${e.clientY}px`;
        outerCursor.style.left = `${e.clientX}px`;
        outerCursor.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = () => {
      if (innerCursor) {
        innerCursor.classList.add("grow");
        innerCursor.style.opacity = "0.5";
      }
    };

    const handleMouseLeave = () => {
      if (innerCursor) {
        innerCursor.classList.remove("grow");
        innerCursor.style.opacity = "1";
      }
    };

    const handleClick = () => {
      if (innerCursor) {
        innerCursor.classList.toggle("grow");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    const links = Array.from(document.querySelectorAll("a"));
    links.forEach(link => {
      link.addEventListener("mouseover", handleMouseOver);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    AOS.init({
      duration: 800,
      once: false,
    });

    // Cleanup function to remove event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
      links.forEach(link => {
        link.removeEventListener("mouseover", handleMouseOver);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="inner-cursor" ref={innerCursorRef}></div>
      <div className="outer-cursor" ref={outerCursorRef}></div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional Videographer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-black">
        <Hero />
        <Zitat />
        <About />
        <Dienstleistungen />
        <Portfolio />
        <Kunden />
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
}
