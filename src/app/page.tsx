"use client"
import About from "@/sections/About/About";
import Clients from "@/sections/Clients/Clients";
import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Services from "@/sections/Services/Services";
import WhyUs from "@/sections/WhyUs/WhyUs";
import Yt from "@/sections/Yt/Yt";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-16 px-4 max-w-[1280px]">
      <Hero/>
      <About/>
      <Yt/>
      <Services/>
      <WhyUs/>
      <Clients/>
      <Contact/>
    </main>
  );
}
