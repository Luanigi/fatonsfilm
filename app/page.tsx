"use client";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Zitat from '../components/Zitat';
import Dienstleistungen from '../components/Dienstleistungen';
import Portfolio from '../components/Portfolio';
import Kunden from '../components/Kunden';
import About from '../components/About';
import Bewertungen from "@/components/Bewertung"
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
        <title>Faton Cakaj</title>
        <meta name="description" content="Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen." />
        <meta property="og:title" content="Faton Cakaj" />
        <meta property="og:description" content="Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen." />
        <meta property="og:image" content="https://fatonsfilmproduction.de/_next/image?url=%2FFaton.jpg&w=1920&q=75" />
        <meta property="og:url" content="https://fatonsfilmproduction.de/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faton Cakaj" />
        <meta name="twitter:description" content="Ich bin ein professioneller Videofilmer mit über 10 Jahren Erfahrung im Festhalten schöner Momente. Meine Leidenschaft ist es, Geschichten durch die Linse zu erzählen und unvergessliche Erlebnisse für meine Kunden zu schaffen." />
        <meta name="twitter:image" content="https://fatonsfilmproduction.de/_next/image?url=%2FFaton.jpg&w=1920&q=75" />
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
        <Bewertungen/>
        <Contact />
        <ScrollToTop />
      </main>
    </>
  );
}
