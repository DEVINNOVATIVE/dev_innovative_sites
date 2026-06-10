"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";
import { ContactFormCard } from "@/components/contact-us"; // Importing your existing dynamic form card component

// --- ASSET IMPORTS MATCHING YOUR WORKSPACE PATH STRUCTURE ---
import assistanceIllustration from "@/assets/services/web_developement/contact.png"; 

export function NeedAssistanceSection() {
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
    <section className="relative w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16 py-8 sm:py-16 text-slate-900 select-none overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Main Section Grid: 1 Column on mobile, balances into 2 side-by-side halves on desktop screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* ================= LEFT COLUMN: WORKSPACE DISCUSSIONS ILLUSTRATION ================= */}
          {/* NATIVE RESPONSIVENESS: 
              Using purely fluid percentages for the scaling artboard box container.
              Switches order on mobile devices to allow the header text and inputs to ride on top naturally.
          */}
          <div className="w-full flex justify-center items-center order-last lg:order-first">
            <ConditionalReveal direction="up" duration={1.1} delay={0.1} offset={35} animationType="from">
              <div className="group relative">
                
                {/* Illustration Wrapper Box: 
                  Subtle micro-levitation transition (-translate-y-2) when mouse cursor hovers on desktop screens.
                */}
                <div className="relative w-[85vw] sm:w-[460px] lg:w-[500px] xl:w-[540px] aspect-[1.18/1] transform transition-transform duration-700 cubic-bezier(0.16,1,0.3,1) group-hover:-translate-y-2 group-hover:scale-[1.005]">
                  <Image
                    src={assistanceIllustration}
                    alt="Dev Inn customer relationship and assistance support interaction vector"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 85vw, (max-width: 1280px) 500px, 540px"
                    priority
                  />
                </div>
                
              </div>
            </ConditionalReveal>
          </div>

          {/* ================= RIGHT COLUMN: SECURITY INTEGRATED CONTACT FORM ================= */}
          {/* This side leverages your reusable component structure directly. 
              The layout container wraps the card neatly, parsing custom parameters matching the image.
          */}
          <div className="w-full mx-auto max-w-xl lg:max-w-none text-left order-first lg:order-last relative">
            <div className="w-full relative z-10">
              <ContactFormCard 
                badgeText="Need assistance"
                title="Our Dedication Is To Exceed Our Clients' Expectations !"
                showLiveIndicator={false}
              />
            </div>

            {/* Geometric decorative red/pink triangle glyph element scattered underneath, visible in layout file blueprint */}
            <div className="absolute left-[20%] bottom-[-45px] hidden xl:block text-rose-500 font-bold opacity-60 text-lg rotate-45 pointer-events-none select-none">
              ◬
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}