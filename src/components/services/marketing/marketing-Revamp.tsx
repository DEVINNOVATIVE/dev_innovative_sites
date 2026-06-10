"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import NumberAnimation from "../../animation/NumberAnimation"; 
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped from your digital marketing workspace configurations
import bgWorldMap from "@/assets/services/digital_marketing/map1.png";
import bannerBgImage from "@/assets/services/digital_marketing/19-1.png";

const tacticalPoints = [
  {
    title: "Search Engine Optimization",
    description: "Our SEO experts use the latest techniques to Improve Your Website's Search Engine driving more traffic to your site and increasing your online visibility.",
    accent: "group-hover:border-blue-500/30",
    iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
  },
  {
    title: "Pay-Per-Click (PPC)",
    description: "We create and manage effective PPC campaigns to help you reach your target audience and drive more traffic to your website.",
    accent: "group-hover:border-cyan-500/30",
    iconBg: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white"
  },
  {
    title: "Social Media Marketing",
    description: "Our team of social media experts helps you to establish a strong social media presence, engage with your followers, and build your brand awareness.",
    accent: "group-hover:border-indigo-500/30",
    iconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
  },
  {
    title: "Email Marketing",
    description: "We design and implement email marketing campaigns to help you build relationships with your customers, increase customer retention, and drive sales.",
    accent: "group-hover:border-purple-500/30",
    iconBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
  },
  {
    title: "Content Marketing",
    description: "Our content marketing services include developing high-quality, engaging content that resonates with your target audience and drives traffic to your website.",
    accent: "group-hover:border-pink-500/30",
    iconBg: "bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
  },
  {
    title: "Digital Marketing Strategies",
    description: "We tailor our digital marketing services to meet your specific business needs and goals. Our team works closely with you to develop a digital marketing strategy that delivers results and helps your business grow.",
    accent: "group-hover:border-orange-500/30",
    iconBg: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
  },
];

const analyticMetrics = [
  { number: 2531, rooms: 4, suffix: "", symbol: true, label: "Project Finished" },
  { number: 15, rooms: 2, suffix: "+", symbol: false, label: "Years Experience" },
  { number: 280, rooms: 3, suffix: "", symbol: false, label: "Happy Clients" },
  { number: 3587, rooms: 4, suffix: "", symbol: true, label: "Recognition" },
];

export function DigitalMarketingRevamp() {
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
    <div className="w-full bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          PART 1: CAPABILITIES LAYOUT WITH WORLD MAP BACKGROUND
          ====================================================================== */}
      <section className="relative mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-white">
        
        {/* World Vector Blueprint Background Texture */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none flex items-center justify-center">
          <div className="relative w-full h-full max-w-[1140px]">
            <Image src={bgWorldMap} alt="Global vector communication layout background texture" fill className="object-contain object-center" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1140px] mx-auto space-y-12 sm:space-y-16">
          
          {/* Header Description Stack */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="hidden lg:block space-y-3">
              <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
                <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba]  block">
                  Services To Build Your Brand !
                </span>
              </ConditionalReveal>
              <ConditionalReveal direction="up" duration={0.9} delay={0.16} offset={25} animationType="from">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08112a] leading-tight">
                  Revamp Your Online Presence With Our <br /> Digital Marketing Services
                </h2>
              </ConditionalReveal>
              <ConditionalReveal direction="up" duration={1.0} delay={0.22} offset={20} animationType="from">
                <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal max-w-2xl mx-auto">
                  Our company provides a comprehensive range of digital marketing services to help businesses boost their online presence and reach their target audience. Here are some of the digital marketing services we offer:
                </p>
              </ConditionalReveal>
            </div>

            <div className="block lg:hidden space-y-2.5 px-2">
              <span className="text-[11px] sm:text-base font-bold text-[#104cba]  tracking-wider block">
                Services To Build Your Brand !
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a]">
                Revamp Your Online Presence With Our Digital Marketing Services
              </h2>
              <p className="text-base leading-relaxed text-slate-400 font-normal">
                Our company provides a comprehensive range of digital marketing services to help businesses boost their online presence and reach their target audience.
              </p>
            </div>
          </div>

          {/* 3-Column Premium Features Grid Matrix */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {tacticalPoints.map((point, index) => (
              <React.Fragment key={point.title}>
                
                {/* Desktop Premium Card Render Cell */}
                <div className="hidden lg:block h-full">
                  <ConditionalReveal 
                    direction="up" 
                    duration={0.85} 
                    delay={0.15 + (index % 3) * 0.1} 
                    offset={25} 
                    animationType="from"
                  >
                    <div className={`group h-full bg-gradient-to-br from-white to-slate-50/50 rounded-3xl border border-slate-100 p-7 text-left flex flex-col items-start justify-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:shadow-[0_22px_50px_rgba(15,23,42,0.05)] hover:-translate-y-2 border-l-2 border-l-transparent ${point.accent}`}>
                      
                      {/* Stylized Icon Box Wrapper */}
                      <div className={`h-11 w-11 rounded-2xl flex items-center justify-center border border-slate-100/50 mb-5 transition-all duration-500 ease-out shadow-sm group-hover:scale-110 group-hover:shadow-md ${point.iconBg}`}>
                        <CheckCircle2 className="h-5 w-5 transition-transform duration-500" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                          {point.title}
                        </h3>
                        <p className="text-base leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </ConditionalReveal>
                </div>

                {/* Mobile Tap Clean Framework Optimization Fallback */}
                <div className="block lg:hidden h-full">
                  <div className="flex gap-4 items-start text-left bg-gradient-to-br from-white to-slate-50 p-5 border border-slate-100 rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-sm">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#104cba] flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                      <CheckCircle2 className="h-[18px] w-[18px]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-[#08112a] tracking-tight">{point.title}</h3>
                      <p className="text-[12.5px] sm:text-base leading-relaxed text-slate-400 font-normal">{point.description}</p>
                    </div>
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================================
          PART 2: NUMBER METRICS ZONE USING 19-1.PNG BACKGROUND ASSET
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-[1140px] mx-auto relative overflow-hidden rounded-3xl text-white py-10 px-6 sm:px-10 shadow-xl border border-slate-100/10">
          
          {/* Static Background Image Placement */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={bannerBgImage}
              alt="Metrics layer statistics backdrop graphic texture layout"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Desktop Sync Grid Counters */}
          <div className="relative z-10 hidden lg:grid grid-cols-4 gap-4 text-center items-center divide-x divide-white/10">
            {analyticMetrics.map((item, index) => (
              <ConditionalReveal 
                key={`banner-desktop-${item.label}`}
                direction="up" 
                duration={1.0} 
                delay={0.1 + index * 0.08} 
                offset={25} 
                animationType="from"
              >
                <div className="space-y-1 py-1 group transition-transform duration-300 hover:scale-105">
                  <div className="text-3xl xl:text-4xl font-black tracking-tight text-white flex items-center justify-center min-h-[44px]">
                    <NumberAnimation number={item.number} rooms={item.rooms} symbol={item.symbol} speed={1300 + index * 100} />
                    {item.suffix && <span className="text-white font-black text-2xl ml-0.5">{item.suffix}</span>}
                  </div>
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">{item.label}</p>
                </div>
              </ConditionalReveal>
            ))}
          </div>

          {/* Mobile Sync Grid Counters */}
          <div className="relative z-10 block lg:hidden grid grid-cols-2 gap-y-8 gap-x-4 text-center items-center">
            {analyticMetrics.map((item) => (
              <div key={`banner-mobile-${item.label}`} className="space-y-0.5 transition-transform duration-200 active:scale-[0.98]">
                <div className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center justify-center min-h-[36px]">
                  <NumberAnimation number={item.number} rooms={item.rooms} symbol={item.symbol} speed={1000} />
                  {item.suffix && <span className="text-white font-black text-xl ml-0.5">{item.suffix}</span>}
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-white/75 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}