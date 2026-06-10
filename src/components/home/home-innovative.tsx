

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Briefcase, Settings, BrainCircuit, BarChart3 } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

import innovativeImg from "@/assets/innovative_service.png";

const innovativeFeatures = [
  {
    title: "End-To-End Solutions",
    description:
      "We offer end-to-end software and IT solutions that cover every aspect of our clients' businesses. From software development to network management, we provide a comprehensive range of services that help businesses succeed.",
    Icon: Briefcase,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
  },
  {
    title: "Innovative Approach",
    description:
      "Our team of experts is committed to staying up-to-date with the latest technologies and trends in software and IT. We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth.",
    Icon: Settings,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    title: "Passion For Innovation",
    description:
      "Our team of experts is passionate about exploring new ideas and developing innovative solutions that help businesses succeed. We believe that creativity is essential to driving growth and staying ahead of the competition.",
    Icon: BrainCircuit,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Focus On ROI",
    description:
      "We understand that businesses need to see a return on their investment in software and IT solutions. That's why we focus on developing solutions that deliver measurable results, whether it's improved efficiency, cost savings, or increased revenue.",
    Icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-50",
  },
];

export function HomeInnovative() {
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
    <section className="relative overflow-hidden bg-white px-4 py-8 md:py-16 sm:px-8 lg:px-10 text-slate-900 select-none">
      
      {/* ================= BACKGROUND WATER AMBIENT BLOB CANVAS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute -top-10 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-50/60 opacity-70 blur-2xl animate-[water_12s_ease-in-out_infinite]"
          style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
        />
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-50/40 opacity-80 blur-3xl animate-[water_16s_ease-in-out_infinite_reverse]"
          style={{ borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* ======================================================================
            1. DESKTOP SYSTEM LAYER: GSAP SCROLLTRIGGER ROUTING (lg and above)
            ====================================================================== */}
        <div className="hidden lg:block w-full">
          {/* Header Rows */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <ConditionalReveal direction="down" duration={0.9} delay={0.0} offset={25} animationType="from">
              <span className="text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                Our Innovative Services
              </span>
            </ConditionalReveal>
            <ConditionalReveal direction="down" duration={0.9} delay={0.15} offset={30} animationType="from">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Innovative IT Solutions For Business <br /> Transformation
              </h2>
            </ConditionalReveal>
            <ConditionalReveal direction="up" duration={0.9} delay={0.3} offset={25} animationType="from">
              <p className="text-base leading-relaxed text-slate-500 max-w-2xl mx-auto font-normal">
                Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
              </p>
            </ConditionalReveal>
          </div>

          {/* Central Artwork Graphic */}
          <ConditionalReveal direction="up" duration={1.0} delay={0.4} offset={40} animationType="from">
            <div className="relative mx-auto aspect-[4/3] mb-20 flex items-center justify-center w-[600px]">
              <div className="absolute inset-10 bg-gradient-to-tr from-blue-100/40 to-purple-100/20 rounded-full mix-blend-multiply blur-xl animate-[water_6s_ease-in-out_infinite]" />
              <div className="absolute top-[15%] left-[-5%] w-24 h-12 bg-sky-100/50 rounded-full blur-[2px] animate-[float_7s_ease-in-out_infinite]" />
              <div className="absolute bottom-[35%] right-[-8%] w-28 h-14 bg-sky-100/40 rounded-full blur-[1px] animate-[float_9s_ease-in-out_infinite_reverse]" />
              <div className="absolute top-[5%] right-[10%] text-amber-400 font-serif text-2xl opacity-60 animate-pulse duration-1000">✦</div>
              <div className="absolute bottom-[15%] left-[8%] text-blue-400 font-serif text-xl opacity-50 animate-pulse duration-700">✦</div>
              
              <div className="absolute left-[-16%] bottom-[20%] grid grid-cols-4 gap-2 opacity-80 animate-[float_6s_ease-in-out_infinite]">
                {[...Array(16)].map((_, i) => (
                  <span key={i} className="w-6 h-6 font-bold text-sm text-[#fe0a09] flex items-center justify-center">X</span>
                ))}
              </div>
              <div className="absolute right-[-4%] top-[40%] grid grid-cols-6 gap-2 opacity-60 animate-[float_8s_ease-in-out_infinite_reverse]">
                {[...Array(24)].map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-slate-400" />
                ))}
              </div>

              <div className="relative w-full h-full z-10 animate-[water_14s_ease-in-out_infinite]">
                <Image src={innovativeImg} alt="Innovative business team collaboration illustration display map" fill className="object-contain" sizes="600px" />
              </div>
            </div>
          </ConditionalReveal>

          {/* Bottom Grid Features Grid */}
          <div className="grid gap-6 grid-cols-2 w-full">
            {innovativeFeatures.map((feat, index) => {
              const IconComponent = feat.Icon;
              const cardDirection = index % 2 === 0 ? "left" : "right";

              return (
                <ConditionalReveal key={feat.title} direction={cardDirection} duration={0.9} delay={0.15 + index * 0.1} offset={40} animationType="from">
                  <div className="group rounded-2xl border text-black border-slate-100 bg-white hover:bg-[#103ab1] hover:border-transparent cursor-pointer p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(16,58,177,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 h-full">
                    <div className="flex gap-5 items-start">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${feat.iconBg} ${feat.iconColor} group-hover:bg-white/10 group-hover:text-white group-hover:scale-105`}>
                        <IconComponent className="h-5 w-5 stroke-[2.5]" />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <h3 className="text-lg font-bold text-[#08112a] group-hover:text-white transition-colors duration-300">
                          {feat.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-slate-500 font-normal group-hover:text-slate-200/90 transition-colors duration-400">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ConditionalReveal>
              );
            })}
          </div>
        </div>

        {/* ======================================================================
            2. MOBILE LAYER SYSTEM: INSTANT STATIC PAINT (Under lg breakpoints)
            ====================================================================== */}
        <div className="block lg:hidden w-full space-y-12">
          {/* Header Rows Container */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-base sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
              Our Innovative Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Innovative IT Solutions For Business <br className="hidden sm:inline" /> Transformation
            </h2>
            <p className="text-[14px] sm:text-base leading-relaxed text-slate-500 font-normal pt-1">
              Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
            </p>
          </div>

          {/* Central Static Illustration Asset Box */}
          <div className="flex justify-center w-full">
            <div className="relative aspect-[4/3] w-[85vw] sm:w-[420px] flex items-center justify-center">
              <div className="absolute inset-6 bg-gradient-to-tr from-blue-100/30 to-purple-100/10 rounded-full blur-xl animate-[water_10s_ease-in-out_infinite]" />
              <div className="relative w-full h-full z-10 animate-[water_16s_ease-in-out_infinite]">
                <Image 
                  src={innovativeImg} 
                  alt="Innovative business team transformation framework dashboard mobile viewpoint preview" 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 640px) 85vw, 420px"
                  priority 
                />
              </div>
            </div>
          </div>

          {/* Feature Grid Blocks Stack */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 w-full text-left">
            {innovativeFeatures.map((feat) => {
              const IconComponent = feat.Icon;
              return (
                <div key={feat.title} className="rounded-2xl border text-black border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feat.iconBg} ${feat.iconColor}`}>
                      <IconComponent className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#08112a]">
                        {feat.title}
                      </h3>
                      <p className="text-[13.5px] leading-relaxed text-slate-500 font-normal">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Core Inline Layout Morph Timelines */}
      <style jsx global>{`
        @keyframes water {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
            transform: rotate(0deg);
          }
          50% {
            border-radius: 50% 50% 38% 62% / 55% 40% 60% 45%;
            transform: rotate(1.5deg);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}