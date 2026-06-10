"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from image_5c7181.png workspace listing
import imgConsulting from "@/assets/services/block_chain/Ser02.png";
import imgSmartContract from "@/assets/services/block_chain/Ser03.png";
import imgIntegration from "@/assets/services/block_chain/Ser04.png";
import imgAppDev from "@/assets/services/block_chain/01-1.png";
import imgSecurity from "@/assets/services/block_chain/02-1.png";
import imgSupport from "@/assets/services/block_chain/04.png";

const blockchainCards = [
  {
    title: "Blockchain Consulting & Strategy",
    description: "We offer blockchain consulting and strategy services to help you understand the potential benefits of blockchain technology for your specific needs. Our team can assist with developing roadmaps, identifying use cases, and designing architectural approaches for integrating blockchain into existing systems.",
    image: imgConsulting,
    borderGlow: "hover:border-blue-500/20",
    bgGradient: "from-blue-50/5 via-transparent to-transparent",
  },
  {
    title: "Smart Contract Development",
    description: "Our team has extensive experience in developing smart contracts using various blockchain platforms, including Ethereum, Hyperledger, and more. We help businesses automate their operations, increase efficiency, and reduce costs through the use of smart contracts.",
    image: imgSmartContract,
    borderGlow: "hover:border-purple-500/20",
    bgGradient: "from-purple-50/5 via-transparent to-transparent",
  },
  {
    title: "Blockchain Integration",
    description: "We help businesses integrate blockchain technology into their existing systems and applications, including ERP, CRM, and other legacy software systems. Our process ensures seamless integration, compatibility, and scalability of the blockchain solution.",
    image: imgIntegration,
    borderGlow: "hover:border-indigo-500/20",
    bgGradient: "from-indigo-50/5 via-transparent to-transparent",
  },
  {
    title: "Blockchain Application Development",
    description: "Our team can develop custom blockchain applications to meet specific business needs. We can build decentralized applications (dApps) across various industries, including healthcare, logistics, finance, and supply chain management.",
    image: imgAppDev,
    borderGlow: "hover:border-amber-500/20",
    bgGradient: "from-amber-50/5 via-transparent to-transparent",
  },
  {
    title: "High Security",
    description: "We ensure that our clients can trust their application layers. We don't view security as a standard feature, but a fundamental aspect of any high-quality mobile app.",
    image: imgSecurity,
    borderGlow: "hover:border-cyan-500/20",
    bgGradient: "from-cyan-50/5 via-transparent to-transparent",
  },
  {
    title: "Maintenance & Support",
    description: "Our ongoing maintenance and support services ensure that applications remain optimized and handle changing needs. We monitor performance and analytics, identify areas for improvement, and provide regular updates to enhance custom security and loyalty.",
    image: imgSupport,
    borderGlow: "hover:border-emerald-500/20",
    bgGradient: "from-emerald-50/5 via-transparent to-transparent",
  },
];

export function BlockchainFeatures() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-white text-slate-900 select-none">
      
      {/* ======================================================================
          HEADER TYPOGRAPHY BLOCKS (Centering Layout Flow)
          ====================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
        <div className="hidden lg:block space-y-3">
          <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
            <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba]  block">
              Innovative Blockchain Solutions For Business Transformation
            </span>
          </ConditionalReveal>
          <ConditionalReveal direction="up" duration={0.9} delay={0.15} offset={25} animationType="from">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08112a]">
              Blockchain Development
            </h2>
          </ConditionalReveal>
          <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={20} animationType="from">
            <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal max-w-2xl mx-auto">
              We provide innovative and cutting-edge blockchain development services that help businesses handle challenges with absolute security metrics. Our developers complete customized projects across various sectors.
            </p>
          </ConditionalReveal>
        </div>

        {/* Mobile Safe Static Fallback Header Layer */}
        <div className="block lg:hidden space-y-2.5 px-2">
          <span className="text-base sm:text-lg font-bold tracking-wider text-[#104cba] block">
            Innovative Blockchain Solutions For Business Transformation
          </span>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#08112a]">
            Blockchain Development
          </h2>
          <p className="text-base sm:text-base leading-relaxed text-slate-400 font-normal">
            We provide innovative and cutting-edge blockchain development services that help businesses handle challenges with absolute security metrics.
          </p>
        </div>
      </div>

      {/* ======================================================================
          3-COLUMN PLATFORM SERVICES GRID MATRIX
          ====================================================================== */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto items-stretch">
        {blockchainCards.map((card, index) => (
          <React.Fragment key={card.title}>
            
            {/* Desktop View Map Grid Block (GSAP Directional Stagger Entrance) */}
            <div className="hidden lg:block h-full">
              <ConditionalReveal 
                direction="up" 
                duration={0.85} 
                delay={0.15 + (index % 3) * 0.12} 
                offset={30} 
                animationType="from"
              >
                <div className={`group h-full bg-gradient-to-b ${card.bgGradient} rounded-3xl border border-slate-100/80 p-7 text-center flex flex-col items-center justify-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:shadow-[0_22px_50px_rgba(15,23,42,0.05)] hover:-translate-y-2 border-t-2 border-t-transparent ${card.borderGlow}`}>
                  
                  {/* Fluid Illustrated Vector Asset Container Frame */}
                  <div className="relative w-full aspect-[1.5/1] mb-6 rounded-2xl bg-slate-50/50 border border-slate-100 p-4 overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:bg-white">
                    <Image 
                      src={card.image} 
                      alt={`${card.title} platform overview graphic representation`} 
                      fill 
                      className="object-contain p-2"
                      sizes="(max-w: 1200px) 33vw, 360px"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#08112a] mb-3 tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">
                    {card.description}
                  </p>
                </div>
              </ConditionalReveal>
            </div>

            {/* Mobile View Map Grid Block (Tailwind Hardware Touch Scale Optimizations) */}
            <div className="block lg:hidden h-full">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm text-center flex flex-col items-center justify-start transition-all duration-200 ease-out active:scale-[0.98]">
                
                <div className="relative w-full aspect-[1.6/1] bg-slate-50 border border-slate-100 rounded-xl mb-4">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 85vw, 45vw"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#08112a] mb-2 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-400 font-normal">
                  {card.description}
                </p>
              </div>
            </div>

          </React.Fragment>
        ))}
      </div>

    </section>
  );
}