"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise image assets imports mapping from your repository structure
import iconFast from "@/assets/services/web_hosting/demo15-Grow-up.svg"; 
import iconEasy from "@/assets/services/web_hosting/demo15-img1.png";
import iconAffordable from "@/assets/services/web_hosting/demo15-income.svg";
import iconSupport from "@/assets/services/web_hosting/call.svg";

const featureData = [
  {
    title: "Fast And Reliable",
    description: "Our web hosting servers are optimized for business applications to ensure your website is always up and running.",
    icon: iconFast,
    iconGlow: "group-hover:bg-cyan-50/80 group-hover:border-cyan-200/50",
  },
  {
    title: "Easy To Use",
    description: "Our web hosting platform is user-friendly and fully intuitive, making it easy for you to manage your website.",
    icon: iconEasy,
    iconGlow: "group-hover:bg-purple-50/80 group-hover:border-purple-200/50",
  },
  {
    title: "Affordable Prices",
    description: "At our company, we believe that everyone should have access to high-quality web hosting services at an affordable price.",
    icon: iconAffordable,
    iconGlow: "group-hover:bg-rose-50/80 group-hover:border-rose-200/50",
  },
  {
    title: "24/7 Support",
    description: "Our customer support team is available round-the-clock to assist you with any questions or issues you may have.",
    icon: iconSupport,
    iconGlow: "group-hover:bg-green-50/80 group-hover:border-green-200/50",
  },
];

export function HostingFeatures() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8 bg-white select-none">
      
      {/* 4-Quadrant Responsive Matrix Box Wrapper */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-2">
        {featureData.map((feat, index) => (
          <React.Fragment key={feat.title}>
            
            {/* ================= DESKTOP SIDE: GSAP SCROLLTRIGGER ENTRY ================= */}
            <div className="hidden lg:block h-full">
              <ConditionalReveal 
                direction="up" 
                duration={0.8} 
                delay={0.1 + index * 0.12} 
                offset={25} 
                animationType="from"
              >
                <div className="group h-full bg-white rounded-2xl p-6 border border-slate-100/80 shadow-xl hover:shadow-[0_22px_45px_rgba(15,23,42,0.06)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-center flex flex-col items-center justify-center">
                  
                  {/* Circular Icon Container matching the soft circular backdrop theme shapes */}
                  <div className={`h-16 w-16 rounded-full bg-slate-50/50 border border-slate-100/50 flex items-center justify-center p-3.5 mb-5 transition-all duration-500 group-hover:scale-105 ${feat.iconGlow}`}>
                    <Image 
                      src={feat.icon} 
                      alt={`${feat.title} blueprint matrix marker`} 
                      className="object-contain max-h-full max-w-full" 
                    />
                  </div>
                  
                  <h3 className="text-[17px] font-bold text-[#08112a] mb-3 tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                    {feat.title}
                  </h3>
                  
                  <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal max-w-[250px]">
                    {feat.description}
                  </p>
                  
                </div>
              </ConditionalReveal>
            </div>

            {/* ================= MOBILE SIDE: INSTANT HARDWARE PAINT ================= */}
            <div className="block lg:hidden h-full">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center">
                
                <div className="h-14 w-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center p-3 mb-4">
                  <Image 
                    src={feat.icon} 
                    alt={feat.title} 
                    className="object-contain max-h-full max-w-full" 
                  />
                </div>
                
                <h3 className="text-base font-bold text-[#08112a] mb-2 tracking-tight">
                  {feat.title}
                </h3>
                
                <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-400 font-normal max-w-[250px]">
                  {feat.description}
                </p>
                
              </div>
            </div>

          </React.Fragment>
        ))}
      </div>
      
    </section>
  );
}