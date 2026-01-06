"use client"

import React from "react";
import { Button } from "@/components/ui/button";

import { Youtube,Instagram ,Linkedin ,Globe ,Cpu ,KeyRound  } from 'lucide-react';


import MapScroll from "./MapScroll";
import { Inter,Khand,Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})
const khandFont = Khand({
  subsets: ['latin'],
  weight: ['700']
})
const Map = () => {
  return (
    <section className=" max-w-7xl pt-8 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] justify-center gap-0 items-center">
<div className="bg-black h-full pb-0 lg:p-10 space-y-6 flex flex-col justify-center">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-red-700/30" />
            </div>

            <div className="relative p-8 md:p-0 z-10 pt-8 text-white space-y-5">
  {/* Main Content Stack */}
  <div className="space-y-2">
    <h1 className={`text-3xl lg:text-4xl xl:text-4xl  text-center md:text-left md:block text-[#ff0000] tracking-tight ${khandFont.className}`}>
      Engineering Students from across India participate
    </h1>
    <p className={`text-lg lg:text-xl text-white text-center md:text-left md:block ${poppins.className}`}>
      Gain Real-World Experience Through Industry-Oriented Summer Training 2026 Programs with Live Projects
    </p>
  </div>

  {/* Apply Now Button - Centered on Mobile */}


  <div className="hidden md:block">
    <MapScroll />
  </div>
  <div className="flex pt-6 hidden justify-center md:flex md:w-full md:max-w-[50%] md:mx-auto">
    <a href="/application-form" className="w-full md:w-auto">
    <Button
                size="lg"
                className={`w-full md:w-auto bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-bold text-base md:text-lg py-6 px-10 md:px-12 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md`}
               
              >
               Apply Now
              </Button>
              </a>
  </div>

  
</div>
</div>


<div className="w-full h-full flex items-center justify-center min-h-[600px] lg:min-h-[800px] xl:min-h-[900px]">
  <img src="/assets/map/map.png" className="w-full h-[600px] lg:h-[800px] xl:h-[900px] object-contain"/>
  <div className=" md:hidden md:mt-4 pt-4">
             <MapScroll/>
             </div>
</div>


<div className="flex lg:hidden mt-8 justify-center md:hidden px-4">
    <a href="/application-form" className="w-full max-w-md">
    <Button
                size="lg"
                className={`w-full bg-[#ff0000] hover:bg-[#ff0000]/90 text-white font-bold text-base py-6 px-10 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md`}
               
              >
               Apply Now
              </Button>
              </a>
  </div>

      </div>
     
    
    </section>
  );
};

export default Map;