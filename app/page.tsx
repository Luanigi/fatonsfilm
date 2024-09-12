"use client";

{/* Imports */}
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
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

{/* Page */}
export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
    <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional Videographer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='bg-black'>
        <Hero />
        <Zitat />
        <About />
        <Dienstleistungen />
        <Portfolio />
        <Kunden />
        {/*
        <Marquee />
        <Contact />
        */}
        <ScrollToTop />
      </main>
  </>
  );
}
