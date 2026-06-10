"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const servicesData = [
  {
    title: "Flexible plans",
    description: "We offer a range of hosting plans that are flexible and customizable to meet your specific needs. Whether you need a shared hosting plan or a dedicated server, we have the right solution for you"
  },
  {
    title: "Free domain registration",
    description: "We offer a free domain registration with our hosting plans, making it easy for you to get started with your website"
  },
  {
    title: "Security:",
    description: "We take security seriously and implement various measures to protect your website from cyber threats and attacks."
  },
  {
    title: "Money-back guarantee",
    description: "We stand behind our services and offer a 30-day money-back guarantee. If you are not satisfied with our services, you can cancel your account within the first 30 days and receive a full refund"
  }
];

export function ProminentITServices() {
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
    <section className="relative w-full bg-gradient-to-br from-[#0c0533] via-[#0b1040] to-[#104cba] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Decorative background ambient lighting effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1140px] space-y-16 relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center space-y-3">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xl font-bold tracking-wider text-white uppercase block">
              Services We offer
            </span>
          </ConditionalReveal>
          
          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Prominent IT Services
            </h2>
          </ConditionalReveal>
        </div>

        {/* ================= SERVICE GRID LAYOUT ================= */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto pt-4">
          {servicesData.map((service, index) => (
            <ConditionalReveal
              key={index}
              direction="up"
              duration={0.85}
              delay={index * 0.08}
              offset={25}
              animationType="from"
            >
              {/* 
                PREMIUM UPGRADE: Abstracted into premium, dark glass-morphic nodes 
                with interactive glowing transformations on pointer hover cycles.
              */}
              <div className="group relative h-full w-full bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] rounded-2xl p-6 sm:p-8 flex items-start gap-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                
                {/* Custom Gradient-Linked Glowing Check Icon wrapper */}
                <div className="shrink-0 mt-1 relative flex items-center justify-center">
                  <div className="absolute inset-0 scale-70 bg-cyan-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CheckCircle2 className="h-6 w-6 text-cyan-400 stroke-[2] relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                </div>

                {/* Content block */}
                <div className="space-y-2.5">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-cyan-300">
                    {service.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-slate-300/90 font-normal">
                    {service.description}
                  </p>
                </div>

              </div>
            </ConditionalReveal>
          ))}
        </div>

      </div>
    </section>
  );
}