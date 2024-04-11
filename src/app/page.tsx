"use client"
import About from "@/sections/About/About";
import Clients from "@/sections/Clients/Clients";
import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Projects from "@/sections/Projects/Projects";
import Services from "@/sections/Services/Services";
import WhyUs from "@/sections/WhyUs/WhyUs";
import Yt from "@/sections/Yt/Yt";


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-20 md:gap-28 px-6">
      <Hero/>
      <About/>
      <Yt/>
      <Services/>
      <Clients/>
      <WhyUs/>
      <Contact/>
    </main>
  );
}
