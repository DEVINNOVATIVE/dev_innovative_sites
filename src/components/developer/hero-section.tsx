
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPANDED ASSET PATH IMPORTS MATCHING YOUR SCHEME (image_a638ed.jpg) ---
import heroMainImg from "@/assets/hire_developer/hero.png";
import triangleIcon from "@/assets/hire_developer/triangle.png";

export function HireDeveloperHero() {
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
    <section className="relative w-full bg-white text-neutral-900 min-h-[90vh] sm:min-h-[80vh] flex items-center pt-6 md:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Decorative Minimal Floating Elements Layout */}
      <div className="absolute left-[12%] bottom-[8%] w-5 h-5 opacity-80 animate-pulse hidden sm:block">
        <Image 
          src={triangleIcon} 
          alt="Geometric abstract play triangle graphical node" 
          className="object-contain"
        />
      </div>
      <div className="absolute left-[38%] top-[12%] w-1.5 h-1.5 bg-blue-500 rounded-full opacity-60 animate-ping hidden md:block" />
      <div className="absolute left-[45%] bottom-[10%] w-1.5 h-1.5 bg-rose-400 rounded-full opacity-60 hidden md:block" />

      <div className="mx-auto max-w-[1140px] w-full grid gap-12 lg:grid-cols-12 items-center relative z-10">
        
        {/* ================= LEFT COLUMN: HERO INFORMATION COPY ================= */}
        <div className="lg:col-span-6 space-y-6 text-left max-w-xl mx-auto lg:mx-0">
          
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={20} animationType="from">
            <span className="text-base sm:text-xl font-bold tracking-wider text-[#104cba]  block bg-blue-50/50 px-3 py-1 rounded-md w-fit">
              Find Perfect Solutions
            </span>
          </ConditionalReveal>

          <ConditionalReveal direction="left" duration={1.0} delay={0.1} offset={30} animationType="from">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08112a] leading-[1.15]">
              Revolutionize Your Business with Our Innovative Solutions
            </h1>
          </ConditionalReveal>

          <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={25} animationType="from">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400 font-normal">
              Transform your online business with our custom solutions, designed to improve conversions and boost sales. Contact us today to learn more.
            </p>
          </ConditionalReveal>

          {/* Call to Action Triggers Container Row */}
          <ConditionalReveal direction="up" duration={1.0} delay={0.3} offset={20} animationType="from">
            <div className="flex flex-wrap items-center gap-6 pt-4 sm:pt-2">
              
              {/* Main Lead Action Button */}
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-bold text-white text-[15px] shadow-[0_8px_24px_rgba(255,75,43,0.25)] hover:shadow-[0_12px_32px_rgba(255,75,43,0.35)] transition-all duration-300 transform active:scale-[0.98] overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)"
                }}
              >
                <span>Start a Project</span>
              </Link>

              {/* Communication Channel Anchor Link node */}
              <a 
                href="tel:+16892674506" 
                className="group flex items-center gap-3.5 text-left transition-colors"
              >
                <div className="h-11 w-11 rounded-xl  flex items-center justify-center shrink-0   transition-colors">
                  <PhoneCall className="h-8 w-8 text-[#ff416c]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[#104cba] tracking-tight transition-colors group-hover:text-blue-700">
                    Call us +1 (689) 267-4506
                  </span>
                  <span className="text-base font-semibold text-neutral-500">
                    For any question
                  </span>
                </div>
              </a>

            </div>
          </ConditionalReveal>

        </div>

        {/* ================= RIGHT COLUMN: UNIQUE ORGANIC CONTURED PICTURE ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full relative">
          <ConditionalReveal direction="right" duration={1.2} delay={0.15} offset={40} animationType="from">
            
            {/* The structural wave mask mimics the asymmetric background profile precisely */}
            <div 
              className="relative w-full max-w-[500px] aspect-[1.08/1] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-neutral-100 bg-neutral-50"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                animation: "organicMorphHero 8s ease-in-out infinite alternate"
              }}
            >
              <div 
                className="absolute inset-0 overflow-hidden w-full h-full"
                style={{ borderRadius: "inherit" }}
              >
                <Image
                  src={heroMainImg}
                  alt="Collaborative engineer team crafting innovative full stack web designs"
                  fill
                  className="object-cover scale-[1.02]"
                  priority
                />
              </div>
              
              {/* Abstract decorative accent wave border layer simulation */}
              <div 
                className="absolute inset-[-4px] -z-10 border-[3px] border-indigo-600/40 opacity-70 pointer-events-none"
                style={{ 
                  borderRadius: "inherit",
                  animation: "organicMorphHero 8s ease-in-out infinite alternate-reverse" 
                }}
              />
            </div>

          </ConditionalReveal>
        </div>

      </div>

      {/* --- ORGANIC LAYER MOTION INJECTION STYLES --- */}
      <style jsx global>{`
        @keyframes organicMorphHero {
          0% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
          50% {
            border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%;
          }
          100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
        }
      `}</style>
    </section>
  );
}