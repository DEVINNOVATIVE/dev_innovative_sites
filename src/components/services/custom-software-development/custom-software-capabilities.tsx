"use client";

import React, { useEffect, useState } from "react";
import { Globe, Smartphone, Cloud, RefreshCw } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

const dynamicCapabilities = [
  {
    title: "Custom Web Applications",
    desc: "From robust enterprise portals to dynamic SaaS platforms, we build secure, responsive, and high-performing web applications that scale seamlessly with your core user growth profiles over time.",
    icon: Globe,
    badge: "SaaS & Portals",
    colorFrame: "hover:bg-blue-50/5 hover:border-blue-400 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]",
    iconColor: "text-blue-400 bg-white/[0.03] border-white/10"
  },
  {
    title: "Native & Cross-Platform Mobile Apps",
    desc: "Reach your audience wherever they sit natively. We engineer intuitive, high-performance iOS and Android applications utilizing React Native, Flutter, Swift, and Kotlin architectures.",
    icon: Smartphone,
    badge: "iOS & Android",
    colorFrame: "hover:bg-rose-50/5 hover:border-rose-400 hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)]",
    iconColor: "text-rose-400 bg-white/[0.03] border-white/10"
  },
  {
    title: "Cloud-Native Solutions & DevOps",
    desc: "Migrate, optimize, and scale production builds with complete confidence. Our engineering teams design resilient cloud layouts (AWS, Azure, GCP) and implement rapid automated CI/CD pipelines.",
    icon: Cloud,
    badge: "99.9% Infrastructure",
    colorFrame: "hover:bg-emerald-50/5 hover:border-emerald-400 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]",
    iconColor: "text-emerald-400 bg-white/[0.03] border-white/10"
  },
  {
    title: "Legacy Software Modernization",
    desc: "Don't let legacy technical debt hold you back. We comprehensively refactor, migrate, and upgrade outdated installations into cloud-native microservices without interrupting daily live operations.",
    icon: RefreshCw,
    badge: "Microservices",
    colorFrame: "hover:bg-amber-50/5 hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)]",
    iconColor: "text-amber-400 bg-white/[0.03] border-white/10"
  }
];

export function CustomSoftwareCapabilities() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) return <>{children}</>;
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="w-full bg-white text-slate-900 py-8 md:py-12 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* Centered Heading Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6036] bg-orange-50 border border-orange-100/60 px-4 py-1.5 rounded-full inline-block shadow-2xs">
              Core Frameworks
            </span>
          </ConditionalReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a]">What We Do</h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            We deliver end-to-end software engineering, combining streamlined agile sprints with advanced tech stacks to capture market advantages.
          </p>
        </div>

        {/* Dark-Themed #0c194a Balanced Card Array */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {dynamicCapabilities.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <ConditionalReveal key={index} direction="up" duration={0.8} delay={index * 0.05} offset={20} animationType="from">
                <div className={`h-full bg-[#0c194a] border border-transparent rounded-2xl p-6 sm:p-8 flex flex-col justify-between transform-gpu transition-all duration-300 hover:bg-[#0c194a] hover:-translate-y-1.5 `}>
                  <div className="space-y-5">
                    
                    {/* Header Details */}
                    <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/[0.06]">
                      <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shadow-3xs shrink-0 ${card.iconColor}`}>
                        <CardIcon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-300/80 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md shadow-3xs">
                        {card.badge}
                      </span>
                    </div>

                    {/* Text Typography */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{card.title}</h3>
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300/80 font-medium">{card.desc}</p>
                    </div>

                  </div>
                </div>
              </ConditionalReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}