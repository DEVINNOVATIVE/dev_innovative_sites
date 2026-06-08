"use client";

import React from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// --- IMPORTS MATCHING YOUR WORKSPACE PATH STRUCTURE ---
import crossPlatformIcon from "@/assets/services/web_developement/Content-Strategy1.png"; // Database style icon
import secureDataIcon from "@/assets/services/web_developement/Visual-Interface1.png";    // Monitor layout icon
import streamlinedIcon from "@/assets/services/web_developement/Creative-Minds.png";      // Head gear icon
import optimizationIcon from "@/assets/services/web_developement/Engineering-Services.png"; // Microchip icon

const servicesGrid = [
  {
    title: "Cross Platform",
    description: "Our cross-platform developers have vast experience creating apps for different industries and can assist you in achieving your goals.",
    img: crossPlatformIcon,
  },
  {
    title: "Secure Live Data",
    description: "Live Data is a critical aspect of modern business. We provide comprehensive solutions to help businesses safeguard their valuable data in real-time.",
    img: secureDataIcon,
  },
  {
    title: "Streamlined Solutions",
    description: "We simplify complex technology for our clients, providing customized solutions that meet their unique needs and allow them to focus on their core business activities.",
    img: streamlinedIcon,
  },
  {
    title: "Content Optimization",
    description: "Our solutions are easily deployable and integrate seamlessly with your existing systems, ensuring a smooth transition with minimal disruptions.",
    img: optimizationIcon,
  },
];

export function FeaturedServices() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 text-slate-900 select-none overflow-hidden">
      
      {/* Optional: Right corner glowing background abstraction hint visible in design */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-red-500/20 to-orange-500/0 rounded-tl-full pointer-events-none z-0" />

      <div className="mx-auto max-w-[1240px] relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <RevealAnimation direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
            <span className="text-lg font-bold text-[#104cba] tracking-wide uppercase block">
              Featured Services
            </span>
          </RevealAnimation>
          
          <RevealAnimation direction="up" duration={0.9} delay={0.15} offset={25} animationType="from">
            <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold tracking-tight text-[#08112a] leading-tight px-2">
              Unleashing The Potential Of <br className="hidden sm:inline" /> Technology
            </h2>
          </RevealAnimation>
        </div>

        {/* ================= SERVICES ROW GRID ================= */}
        {/* PURE TAILWIND RESPONSIVENESS: 
          Stacks as 1 column on phones, 2 columns on tablets (sm), 4 columns on large monitors (lg/xl).
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 items-start">
          {servicesGrid.map((service, idx) => (
            <RevealAnimation 
              key={service.title}
              direction="up" 
              duration={0.9} 
              delay={0.2 + idx * 0.08} 
              offset={20} 
              animationType="from"
            >
              <div className="w-full">
                {/* Interactive Card Core: 
                  Utilizes 'group' to enable simultaneous child vector shifts on desktop hovering.
                */}
                <div className="group flex flex-col items-start text-left space-y-4 cursor-pointer p-2 rounded-xl transition-all duration-300">
                  
                  {/* Icon Frame: Scales and micro-rotates slightly when container row is hovered */}
                  <div className="h-14 w-14 relative shrink-0 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-translate-y-1">
                    <Image 
                      src={service.img} 
                      alt={`${service.title} line graphic vector icon metadata`} 
                      fill 
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>

                  {/* Copy Details Block */}
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                      {service.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-400 font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}