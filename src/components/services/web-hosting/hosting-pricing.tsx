"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise image assets imports matching your files directory from image_5e46ff.png
import imgBasic from "@/assets/services/web_hosting/Ser06.png";
import imgPro from "@/assets/services/web_hosting/Ser07.png";
import imgAdvance from "@/assets/services/web_hosting/Ser08.png";

const plans = [
  {
    title: "Basic Plan",
    subtitle: "The Most Basic Plan",
    price: "$ 1.99",
    period: "/ Month",
    image: imgBasic,
    features: [
      "1 Website",
      "50 GB SSD Storage",
      "100 GB Bandwidth",
      "Unlimited Free SSL",
      "Weekly Backups",
      "Cloud Flare Protected Nameservers",
      "Malware Scanner",
      "Only 1 Email"
    ],
    buttonText: "Purchase Basic",
    isFeatured: false
  },
  {
    title: "Professional Plan",
    subtitle: "The Most Professional Plan",
    price: "$ 2.99",
    period: "/ Month",
    image: imgPro,
    features: [
      "100 Websites",
      "150 GB SSD Storage",
      "Balanced Bandwidth",
      "Free Domain ($9.99 Value)",
      "Unlimited Free SSL",
      "Weekly Backups",
      "Cloud Flare Protected Nameservers",
      "Malware Scanner",
      "Free Email"
    ],
    buttonText: "Purchase Professional",
    isFeatured: true
  },
  {
    title: "Advance Plan",
    subtitle: "The Most Advance Plan",
    price: "$ 3.99",
    period: "/ Month",
    image: imgAdvance,
    features: [
      "200 Websites",
      "200 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain ($9.99 Value)",
      "Unlimited Free SSL",
      "Weekly Backups",
      "Cloud Flare Protected Nameservers",
      "Malware Scanner",
      "Free Email"
    ],
    buttonText: "Purchase Advance",
    isFeatured: false
  }
];

export function HostingPricing() {
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
    <section id="pricing" className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 bg-white text-slate-900 select-none overflow-hidden">
      
      {/* Title Header Block */}
      <div className="text-center space-y-3 mb-16 lg:mb-24">
        <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase tracking-wider block">
          Pricing Plan
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight">
          Choose Your Web Hosting Plan
        </h2>
      </div>

      {/* ======================================================================
          1. DESKTOP LAYER SYSTEM (GSAP STAGGERED ENTRANCES)
          ====================================================================== */}
      <div className="hidden lg:grid gap-8 grid-cols-3 items-stretch max-w-6xl mx-auto pt-4">
        {plans.map((plan, index) => (
          <ConditionalReveal 
            key={plan.title}
            direction="up" 
            duration={0.9} 
            delay={0.15 + index * 0.12} 
            offset={30} 
            animationType="from"
          >
            <div 
              className={`h-full rounded-3xl p-8 flex flex-col justify-between text-center relative transition-all duration-500 shadow-md border
                ${plan.isFeatured 
                  ? "bg-[#111836] text-white transform -translate-y-4 shadow-2xl border-blue-500/10 scale-[1.02] z-10" 
                  : "bg-white border-slate-100/80 text-slate-900 hover:shadow-xl hover:-translate-y-1"
                }`}
            >
              <div className="space-y-5">
                {/* Vector Thumbnail Asset */}
                <div className={`mx-auto w-16 h-16 relative rounded-full p-2 flex items-center justify-center ${plan.isFeatured ? "bg-white/5" : "bg-slate-50"}`}>
                  <Image src={plan.image} alt={plan.title} fill className="object-contain p-2.5" sizes="64px" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight">{plan.title}</h3>
                  <p className={`text-[11px] font-medium ${plan.isFeatured ? "text-slate-400" : "text-slate-400"}`}>{plan.subtitle}</p>
                </div>

                <div className="text-3xl font-black">
                  {plan.price} <span className={`text-xs font-normal ${plan.isFeatured ? "text-slate-400" : "text-slate-400"}`}>{plan.period}</span>
                </div>

                <div className={`h-px w-full ${plan.isFeatured ? "bg-white/10" : "bg-slate-100"}`} />

                {/* Features Plain Text Stack */}
                <ul className={`space-y-3 text-xs font-medium ${plan.isFeatured ? "text-slate-300" : "text-slate-500"}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="tracking-tight">{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Purchase Button */}
              <button 
                className={`mt-8 w-full h-11 inline-flex items-center justify-center rounded-xl text-xs font-bold text-white shadow-md transition-all duration-300 active:scale-[0.98]
                  ${plan.isFeatured 
                    ? "bg-gradient-to-r from-[#ff4722] to-[#ff733b] hover:brightness-110 shadow-orange-500/10" 
                    : "bg-[#ff5c3d] hover:bg-[#e84c2e] shadow-orange-500/5"
                  }`}
              >
                {plan.buttonText}
              </button>
            </div>
          </ConditionalReveal>
        ))}
      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC HARDWARE INJECTION)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-8 max-w-md mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.title}
            className={`rounded-2xl p-6 border text-center flex flex-col justify-between shadow-sm
              ${plan.isFeatured 
                ? "bg-[#111836] text-white border-blue-500/10 shadow-md" 
                : "bg-white border-slate-100 text-slate-900"
              }`}
          >
            <div className="space-y-4">
              <div className={`mx-auto w-14 h-14 relative rounded-full p-2 flex items-center justify-center ${plan.isFeatured ? "bg-white/5" : "bg-slate-50"}`}>
                <Image src={plan.image} alt={plan.title} fill className="object-contain p-2" sizes="56px" />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-center tracking-tight">{plan.title}</h3>
                <p className="text-[10.5px] font-medium text-slate-400">{plan.subtitle}</p>
              </div>

              <div className="text-2xl font-black">
                {plan.price} <span className="text-xs font-normal text-slate-400">{plan.period}</span>
              </div>

              <div className={`h-px w-full ${plan.isFeatured ? "bg-white/10" : "bg-slate-100"}`} />

              <ul className={`space-y-2.5 text-xs font-medium ${plan.isFeatured ? "text-slate-300" : "text-slate-500"}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <button 
              className={`mt-6 w-full h-11 inline-flex items-center justify-center rounded-xl text-xs font-bold text-white
                ${plan.isFeatured 
                  ? "bg-gradient-to-r from-[#ff4722] to-[#ff733b]" 
                  : "bg-[#ff5c3d]"
                }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}