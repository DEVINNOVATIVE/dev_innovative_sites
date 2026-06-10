"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// --- ASSET IMPORTS MATCHING YOUR WORKSPACE PATH STRUCTURE ---
import mainIllustration from "@/assets/services/web_developement/main.png";
import orangeCircleTick from "@/assets/services/web_developement/circle.png";

const featuresData = [
  {
    title: "Customized Development",
    description: "We offer tailored web application development services customized to meet our clients' specific needs and requirements.",
  },
  {
    title: "Agile Methodology",
    description: "We use agile methodologies that prioritize collaboration, flexibility, and rapid delivery to ensure high-quality solutions that meet our clients' needs.",
  },
  {
    title: "Scalability",
    description: "Our agile methodologies prioritize collaboration, flexibility, and rapid delivery to ensure high-quality solutions that meet our clients' needs.",
  },
  {
    title: "Maintenance & Support",
    description: "We offer ongoing maintenance and support for all our web applications to ensure continued proper functioning and meet our clients' needs.",
  },
];

export function HeroSection() {
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
    <section className="relative w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 text-slate-900 select-none overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Main Grid Wrapper: Stacks on mobile, splits side-by-side above lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: MAIN ILLUSTRATION CANVAS ================= */}
          {/* PURE TAILWIND RESPONSIVENESS: 
            Animations use unified vertical offsets ('up') across all viewports to remain fluid 
            and prevent any browser layout jittering without needing JavaScript screen queries.
          */}
          <div className="w-full flex justify-center items-center">
            <ConditionalReveal direction="up" duration={1.0} delay={0.1} offset={30} animationType="from">
              <div className="relative w-[85vw] sm:w-[460px] lg:w-[520px] xl:w-[560px] aspect-[1.12/1]">
                <Image
                  src={mainIllustration}
                  alt="Web application development project management illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 85vw, (max-width: 1280px) 520px, 560px"
                  priority
                />
              </div>
            </ConditionalReveal>
          </div>

          {/* ================= RIGHT COLUMN: CONTENT & FEATURE CARDS ================= */}
          <div className="w-full text-left space-y-8">
            
            {/* Header Labels */}
            <div className="space-y-3">
              <ConditionalReveal direction="up" duration={0.8} delay={0.15} offset={20} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wide uppercase block">
                  Services We Offer
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="up" duration={0.9} delay={0.2} offset={25} animationType="from">
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold tracking-tight text-[#08112a] leading-tight">
                  Web Application Development
                </h2>
              </ConditionalReveal>

              <ConditionalReveal direction="up" duration={1.0} delay={0.25} offset={20} animationType="from">
                <p className="text-[14px] sm:text-base xl:text-md leading-relaxed text-slate-500 font-normal pt-2">
                  Our Web Application Development service provides customized, agile, and user-friendly web applications that are designed to meet our clients' specific needs and requirements. We prioritize UX design and scalability, and we provide ongoing maintenance and support to ensure that our clients' web applications continue to function properly over time.
                </p>
              </ConditionalReveal>
            </div>

            {/* Features Sub-grid Layout Array: 1 column on mobile, 2 columns on tablet/desktop */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full pt-2">
              {featuresData.map((item, idx) => (
                <ConditionalReveal 
                  key={item.title}
                  direction="up" 
                  duration={0.9} 
                  delay={0.1 + idx * 0.08} 
                  offset={25} 
                  animationType="from"
                >
                  {/* Card Container Box */}
                  <div className="group w-full h-full bg-white rounded-xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:border-slate-200/60 transition-all duration-500 flex flex-col items-start gap-4">
                    
                    {/* Orange Check Circle Badge Icon */}
                    <div className="h-6 w-6 relative shrink-0">
                      <Image 
                        src={orangeCircleTick} 
                        alt="Checkmark feature validation index point" 
                        fill 
                        className="object-contain"
                      />
                    </div>

                    {/* Feature Descriptions */}
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-[16px] sm:text-[17px] font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-[13px] sm:text-base leading-relaxed text-slate-400 font-normal">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </ConditionalReveal>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}