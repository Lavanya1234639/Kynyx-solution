"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/*const ParticleBackground = dynamic(() => import("@/components/animations/ParticleBackground"), { ssr: false });*/
const CursorSpotlight = dynamic(() => import("@/components/animations/CursorSpotlight"), { ssr: false });

export default function Home() {
  return (
    <>
     
      <CursorSpotlight />
      <Navbar />
      <main className="relative z-10 page-bg">
        <Hero />
        <div className="section-divider mx-auto max-w-5xl" />
        <TrustedBy />
        <div className="section-divider mx-auto max-w-5xl" />
        <Statistics />
        <div className="section-divider mx-auto max-w-5xl" />
        <Services />
        <div className="section-divider mx-auto max-w-5xl" />
        <WhyChooseUs />
        <div className="section-divider mx-auto max-w-5xl" />
        <Portfolio />
        <div className="section-divider mx-auto max-w-5xl" />
        <Testimonials />
        <div className="section-divider mx-auto max-w-5xl" />
        <FAQ />
        <div className="section-divider mx-auto max-w-5xl" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
