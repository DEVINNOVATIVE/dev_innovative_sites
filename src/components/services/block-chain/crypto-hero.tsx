"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from image_5c7181.png workspace listing
import icoIllustration from "@/assets/services/block_chain/Ser05.jpg"; // Maps to your Ser05 artwork layer

const icoServices = [
  {
    title: "ICO Consulting",
    description: "We provide in-depth consulting services to help clients determine the best ICO strategy for their specific needs and goals.",
    bulletColor: "bg-[#104cba]",
  },
  {
    title: "Token Creation",
    description: "Our team helps clients create tokens that are tailored to their project's specific requirements and objectives.",
    bulletColor: "bg-[#ff5c3d]",
  },
  {
    title: "Whitepaper Development",
    description: "We can assist with creating a comprehensive whitepaper that accurately describes the project and its goals to potential investors.",
    bulletColor: "bg-[#104cba]",
  },
  {
    title: "Smart Contract Development",
    description: "Our developers can help create secure and reliable smart contracts that automate the process of buying and selling tokens during the ICO.",
    bulletColor: "bg-[#ff5c3d]",
  },
];

export function CryptoICOServices() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Helper component to conditionally wrap children with RevealAnimation
  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          1. DESKTOP SYSTEM LAYER (GSAP ACTIVE ABOVE 1024PX BREAKPOINT)
          ====================================================================== */}
      <div className="hidden lg:grid items-center gap-12 grid-cols-12 lg:gap-16 max-w-[1240px] mx-auto relative z-10">
        
        {/* Left Side: Text and Bulleted Content (7/12 Grid Columns) */}
        <div className="col-span-7 space-y-6 text-left max-w-[620px]">
          <div className="space-y-4">
            <ConditionalReveal direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                Crypto ICO Services !
              </span>
            </ConditionalReveal>
            
            <ConditionalReveal direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                Our Crypto ICO Services <br /> Include !
              </h2>
            </ConditionalReveal>
            
            <ConditionalReveal direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
              <p className="text-base leading-relaxed text-slate-500 font-normal">
                We provide end-to-end solutions for launching initial coin offerings (ICOs) and marketing campaigns. Our team of experts has extensive experience in the crypto industry, and we are well-versed in the latest trends and technologies.
              </p>
            </ConditionalReveal>
          </div>

          {/* Staggered Row Service Bullets */}
          <div className="space-y-5 pt-4 border-t border-slate-100">
            {icoServices.map((service, index) => (
              <ConditionalReveal 
                key={service.title} 
                direction="up" 
                duration={0.8} 
                delay={0.3 + index * 0.1} 
                offset={15} 
                animationType="from"
              >
                <div className="flex gap-4 items-start group">
                  <div className={`h-2 w-2 rounded-full shrink-0 mt-2 transition-transform duration-300 group-hover:scale-125 ${service.bulletColor}`} />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                      {service.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400 font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ConditionalReveal>
            ))}
          </div>
        </div>

        {/* Right Side: Fluid Isometric Crypto App Illustration (5/12 Grid Columns) */}
        <div className="col-span-5 flex justify-end w-full relative">
          <ConditionalReveal direction="right" duration={1.1} delay={0.2} offset={45} animationType="from">
            <div className="relative w-full max-w-[440px] aspect-[1.1/1]" style={{ animation: "subtleFloat 6s ease-in-out infinite" }}>
              <Image 
                src={icoIllustration} 
                alt="Crypto token ecosystem and mobile application interface illustration layout" 
                fill 
                className="object-contain" 
                sizes="440px"
              />
            </div>
          </ConditionalReveal>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC RE-ALIGNMENT / ZERO FLASH)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-10 text-center sm:text-left">
        
        {/* Texts Header Flow */}
        <div className="max-w-xl mx-auto space-y-3.5">
          <span className="text-xs font-bold text-[#104cba] tracking-wider uppercase block">
            Crypto ICO Services !
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#08112a] tracking-tight leading-tight">
            Our Crypto ICO Services Include !
          </h2>
          <p className="text-[14px] leading-relaxed text-slate-500 font-normal">
            We provide end-to-end solutions for launching initial coin offerings (ICOs) and marketing campaigns.
          </p>
        </div>

        {/* Central Static Illustration Preview for Phone Viewports */}
        <div className="flex justify-center w-full">
          <div className="relative w-[85vw] sm:w-[360px] aspect-[1.1/1]">
            <Image 
              src={icoIllustration} 
              alt="Crypto token interface blueprint mobile preview" 
              fill 
              className="object-contain" 
              sizes="(max-width: 640px) 85vw, 360px"
              priority
            />
          </div>
        </div>

        {/* Mobile Items Stack Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto pt-4 text-left">
          {icoServices.map((service) => (
            <div key={service.title} className="bg-slate-50/60 border border-slate-100 p-5 rounded-2xl transition-all duration-200 active:scale-[0.98] flex gap-3.5 items-start">
              <div className={`h-2 w-2 rounded-full shrink-0 mt-2 ${service.bulletColor}`} />
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-[#08112a]">{service.title}</h4>
                <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Hardware Accelerated Floating Context Accents */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </section>
  );
}