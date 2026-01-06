"use client"

import React from "react";
import { Button } from "@/components/ui/button";
// import { IndiaMap } from "@/components/ui/India-map";
import { Badge } from "@/components/ui/badge"

// import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { AiOutlineHourglass } from "react-icons/ai"
// import { HiShieldCheck } from "react-icons/hi2"
import { Album ,ShieldCheck} from "lucide-react";


const Hero = () => {
  return (
    <section className=" w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

{/* left section  */}

<div className="bg-black h-full p-6 lg:p-10">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-red-700/30" />
            </div>

            <div className="relative z-10 text-white space-y-5">
              {/* Main Content Stack */}
              <div className="space-y-2 ">
                   <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                      Summer Internship 2025
                    </h1>
                    <p className="text-2xl lg:text-4xl font-bold text-[#ff0000]">
                      Industrial Training Program
                    </p>
                  </div>



              {/* Target Audience */}
              <div className="space-y-2">
                <h2 className="text-lg lg:text-xl font-medium">
                  For Engineering Students
                </h2>
                <p className="text-base lg:text-lg text-[#ff0000]">
                  Open for B.Tech | M.Tech | BCA | MCA | B.SC IT
                </p>
              </div>

              {/* CTA Button */}
              <a href="/application-form">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#ff0000] hover:bg-red-200 font-semibold relative z-10 shadow-lg"
              >
                Applications Open
              </Button>
              </a>
            </div>
          </div>

{/* end left section  */}

{/* start right section */}

<div className="w-full h-full">
  <img src="/assets/Hero/HeroImage.png" className="w-full h-96"/>
</div>

{/* end right section  */}
      </div>
     
      <div className="relative md:-mt-12 lg:-mt-4 z-30">
  <div className="bg-black rounded-lg p-6 shadow-lg max-w-6xl border border-white mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Admission Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <BsCalendarCheck className="w-5 h-5 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              TENTATIVE START DATES
            </span>
            <span className="font-bold text-xs text-white mt-1">
              May 2026 / June 2026 / July 2026
            </span>
            <Badge variant="outline" className="text-[#ff0000] border-red-200 text-[10px] mt-2 w-fit">
              Limited seats
            </Badge>
          </div>
        </div>

        {/* Duration Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <AiOutlineHourglass className="w-5 h-5 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              DURATION SUMMER PROGRAM​
            </span>
            <span className="font-bold text-xs text-white mt-1">
              6 weeks / 8 weeks
            </span>
          </div>
        </div>

        {/* Internship Section */}
        <div className="flex items-start gap-2 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <Album className="w-6 h-6 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              Internship ​
            </span>
            <span className="font-bold text-xs text-white mt-1">
              Industry Recognised Internship (Project) Certificate
            </span>
          </div>
        </div>

        {/* Training Certificate Section */}
        <div className="flex items-start gap-3 justify-start min-w-[250px]">
          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-red-50 rounded-lg">
            <ShieldCheck className="w-6 h-6 text-[#ff0000]" />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className="text-white text-xs font-medium uppercase tracking-wide">
              Training Certificate
            </span>
            <span className="font-bold text-xs text-white mt-1">
              Training Certificate from 
              <br></br>
              LinuxWorld Informatics Pvt Ltd
            </span>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex items-center justify-center lg:border-l lg:pl-6 w-full lg:w-auto mt-6 lg:mt-0">
        <div className="flex flex-col items-center justify-center w-full lg:w-auto">
          <a href="/application-form" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
            <Button className="bg-[#ff0000] w-full lg:w-auto text-sm py-6 px-8 hover:bg-[#ff0000]/90 hover:shadow-lg transition-all duration-300">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;