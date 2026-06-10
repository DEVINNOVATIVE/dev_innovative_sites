"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from image_5c7181.png workspace directory listing
import iconLock from "@/assets/services/block_chain/icons8-lock.png";
import iconAPI from "@/assets/services/block_chain/EngineeringServices-2.svg";
import iconMaterial from "@/assets/services/block_chain/icons8-idea.png";
import iconGateway from "@/assets/services/block_chain/side-icon-2.png";

const featureCards = [
  { title: "Data Security", icon: iconLock, offsetClass: "lg:translate-y-0" },
  { title: "API Integration", icon: iconAPI, offsetClass: "lg:translate-y-8" },
  { title: "Material Design", icon: iconMaterial, offsetClass: "lg:-translate-y-4" },
  { title: "Payment Gateways", icon: iconGateway, offsetClass: "lg:translate-y-4" },
];

export function BlockchainAndroidOS() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-2 sm:px-6 lg:px-8 lg:py-4 bg-white text-slate-900 select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
    
        {/* ======================================================================
            LEFT COLUMN: Asymmetric 2x2 Grid Features Matrix (5/12 Columns)
            ====================================================================== */}
        <div className="lg:col-span-5 order-2 lg:order-1 w-full">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10 max-w-md mx-auto lg:max-w-none">
            {featureCards.map((card, index) => (
              <React.Fragment key={card.title}>
                
                {/* Desktop Layer Layout Grid Boxes (Staggered Translations matching blueprint blueprint) */}
                <div className={`hidden lg:block h-full ${card.offsetClass}`}>
                  <ConditionalReveal 
                    direction="up" 
                    duration={0.85} 
                    delay={0.1 + index * 0.12} 
                    offset={25} 
                    animationType="from"
                  >
                    <div className="bg-white rounded-2xl border border-slate-100/70 p-6 shadow-[0_4px_25px_rgba(15,23,42,0.01)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.04)] transition-all duration-500 flex flex-col items-center justify-center text-center aspect-square group hover:-translate-y-1">
                      <div className="h-12 w-12 relative mb-4 transition-transform duration-300 group-hover:scale-110">
                        <Image src={card.icon} alt={`${card.title} vector utility element layout`} fill className="object-contain" />
                      </div>
                      <h4 className="text-[15px] font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                        {card.title}
                      </h4>
                    </div>
                  </ConditionalReveal>
                </div>

                {/* Mobile View Flat Grid Blocks (Built-In Tailwind Touch Accelerators) */}
                <div className="block lg:hidden h-full">
                  <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex flex-col items-center justify-center text-center aspect-square transition-transform duration-200 active:scale-[0.98]">
                    <div className="h-10 w-10 relative mb-3">
                      <Image src={card.icon} alt={card.title} fill className="object-contain" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#08112a] tracking-tight">
                      {card.title}
                    </h4>
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ======================================================================
            RIGHT COLUMN: Section Typography Headers & Checkbox Rows (7/12 Columns)
            ====================================================================== */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left max-w-[620px] mx-auto lg:mx-0">
          
          {/* Desktop Content Entrance Paths */}
          <div className="hidden lg:block space-y-4">
            <ConditionalReveal direction="right" duration={0.9} delay={0.1} offset={25} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                Let's Collaborate to Build Your App
              </span>
            </ConditionalReveal>
            
            <ConditionalReveal direction="right" duration={1.0} delay={0.18} offset={30} animationType="from">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                Blockchain Android & IOS <br /> Development
              </h2>
            </ConditionalReveal>
            
            <ConditionalReveal direction="right" duration={1.1} delay={0.25} offset={20} animationType="from">
              <p className="text-base leading-relaxed text-slate-500 font-normal">
                Our company specializes in providing agile blockchain mobile application development services, including both Android and iOS platforms. Our team of experienced developers works closely with clients to understand their unique requirements and design apps that meet their business needs.
              </p>
            </ConditionalReveal>
          </div>

          {/* Mobile Text Output Structure */}
          <div className="block lg:hidden text-center sm:text-left space-y-3">
            <span className="text-xs font-bold text-[#104cba] uppercase tracking-wider block">
              Let's Collaborate to Build Your App
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#08112a] tracking-tight leading-tight">
              Blockchain Android & IOS Development
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-500 font-normal">
              Our company specializes in providing agile blockchain mobile application development services, including both Android and iOS platforms.
            </p>
          </div>

          {/* Detailed Row Information Lists */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            
            {/* Checked Item Row 1 */}
            <div className="w-full">
              <div className="hidden lg:block">
                <ConditionalReveal direction="up" duration={0.85} delay={0.35} offset={15} animationType="from">
                  <div className="flex gap-4 items-start group">
                    <CheckCircle2 className="h-5 w-5 text-[#104cba] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors">
                        Ensuring Reliable And User-Friendly Apps
                      </h4>
                      <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">
                        We use the latest tools and technologies to ensure that our apps are scalable, secure, and user-friendly. Our development process includes comprehensive testing and quality assurance to ensure that the final product is free of bugs and glitches.
                      </p>
                    </div>
                  </div>
                </ConditionalReveal>
              </div>

              <div className="block lg:hidden">
                <div className="flex gap-3.5 items-start bg-slate-50/50 p-4 border border-slate-100 rounded-2xl transition-transform duration-200 active:scale-[0.98]">
                  <CheckCircle2 className="h-5 w-5 text-[#104cba] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Ensuring Reliable And User-Friendly Apps</h4>
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">We use the latest tools and technologies to ensure that our apps are scalable, secure, and user-friendly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Checked Item Row 2 */}
            <div className="w-full">
              <div className="hidden lg:block">
                <ConditionalReveal direction="up" duration={0.85} delay={0.45} offset={15} animationType="from">
                  <div className="flex gap-4 items-start group">
                    <CheckCircle2 className="h-5 w-5 text-[#104cba] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors">
                        Data Privacy In Mobile App Development
                      </h4>
                      <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">
                        We also understand the importance of security and data privacy in custom apps. That's why we emphasize modern protection measures and follow industry best practices to ensure that our applications are secure and protect user data.
                      </p>
                    </div>
                  </div>
                </ConditionalReveal>
              </div>

              <div className="block lg:hidden">
                <div className="flex gap-3.5 items-start bg-slate-50/50 p-4 border border-slate-100 rounded-2xl transition-transform duration-200 active:scale-[0.98]">
                  <CheckCircle2 className="h-5 w-5 text-[#104cba] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-left">
                    <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Data Privacy In Mobile App Development</h4>
                    <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">We understand the importance of security and data privacy, emphasizing modern protection protocols inside our application builds.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}