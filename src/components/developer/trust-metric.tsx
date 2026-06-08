"use client";

import React from "react";
import Image from "next/image";
import { Settings, Shield, BarChart3, Lightbulb } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPANDED ASSET PATH IMPORTS MATCHING YOUR SCHEME (image_1aafc7.png) ---
import trustStatsHero from "@/assets/hire_developer/trust.png";

const cardFeatures = [
  {
    title: "Customizable",
    description: "Allows flexibility customization",
    icon: Settings,
    borderColor: "hover:border-blue-500/40",
    glowColor: "group-hover:bg-blue-500/[0.04]",
    iconColor: "text-blue-400",
    iconBgHover: "group-hover:bg-blue-600 group-hover:border-blue-600"
  },
  {
    title: "Innovation",
    description: "New tech innovation development",
    icon: Lightbulb,
    borderColor: "hover:border-indigo-500/40",
    glowColor: "group-hover:bg-indigo-500/[0.04]",
    iconColor: "text-indigo-400",
    iconBgHover: "group-hover:bg-indigo-600 group-hover:border-indigo-600"
  },
  {
    title: "Reporting",
    description: "Real time reporting development",
    icon: BarChart3,
    borderColor: "hover:border-violet-500/40",
    glowColor: "group-hover:bg-violet-500/[0.04]",
    iconColor: "text-violet-400",
    iconBgHover: "group-hover:bg-violet-600 group-hover:border-violet-600"
  },
  {
    title: "Security",
    description: "High layered cyber security",
    icon: Shield,
    borderColor: "hover:border-emerald-500/40",
    glowColor: "group-hover:bg-emerald-500/[0.04]",
    iconColor: "text-emerald-400",
    iconBgHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600"
  },
];

const metricBars = [
  { label: "Business Goal", value: 65 },
  { label: "Traffic Growth", value: 90 },
  { label: "Competitor Research", value: 75 },
];

export function TrustMetricsSection() {
  return (
    <section className="relative bg-[#ffffff] text-neutral-900 pt-4 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      {/* Decorative ambient blurred orb behind reporting card track */}
      <div className="absolute right-[35%] top-[5%] w-72 h-72 bg-gradient-to-tr from-orange-500/10 to-rose-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="mx-auto max-w-[1140px] space-y-24">
        
        {/* ================= TOP ROW: RE-ENGINEERED BLUE CARDS ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {cardFeatures.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <RevealAnimation
                key={index}
                direction="up"
                duration={0.9}
                delay={index * 0.08}
                offset={30}
                animationType="from"
              >
                {/* UPGRADED: Added a rich backdrop blur canvas filter and subtle layout sizing fixes */}
                <div className={`group relative w-full bg-[#070d1e] backdrop-blur-md border border-neutral-800/50 rounded-2xl p-6 pt-7 pb-8 flex flex-col space-y-4 hover:-translate-y-2 shadow-[0_4px_30px_rgba(7,13,30,0.03)] hover:shadow-[0_24px_48px_rgba(7,13,30,0.16)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${card.borderColor}`}>
                  
                  {/* Subtle dynamic background glow color tracking mask */}
                  <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 pointer-events-none -z-10 ${card.glowColor}`} />

                  {/* Icon + Title Header Row */}
                  <div className="flex items-center gap-3.5">
                    {/* FIXED: Patched production build syntax compiler crash "group-hover:bg-bg-[#104cba]" */}
                    <div className={`h-10 w-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center ${card.iconColor} group-hover:text-white transition-all duration-300 ${card.iconBgHover}`}>
                      <IconComponent className="h-[18px] w-[18px] stroke-[2]" />
                    </div>
                    <h4 className="text-[16px] font-bold text-white tracking-tight">
                      {card.title}
                    </h4>
                  </div>

                  {/* Meta Description Area */}
                  <p className="text-[13.5px] leading-relaxed text-neutral-400 font-normal pl-0.5">
                    {card.description}
                  </p>

                </div>
              </RevealAnimation>
            );
          })}
        </div>

        {/* ================= BOTTOM ROW: CORE TRUST STATS CONTENT SPLIT ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-center pt-2">
          
          {/* LEFT SUB-GRID: VERBATIM TRANSLATION HEADERS & PROGRESS METRICS */}
          <div className="lg:col-span-6 space-y-4 max-w-xl mx-auto lg:mx-0">
            
            <div className="space-y-3">
              <RevealAnimation direction="down" duration={0.8} delay={0.1} offset={15} animationType="from">
                <span className="text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Trusted By Many
                </span>
              </RevealAnimation>

              <RevealAnimation direction="left" duration={1.0} delay={0.15} offset={30} animationType="from">
                <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Over <span className="text-[#ff4b2b]">1,000</span> Businesses Of All Size Trust Us
                </h3>
              </RevealAnimation>
            </div>

            <RevealAnimation direction="up" duration={1.0} delay={0.2} offset={20} animationType="from">
              <p className="text-sm sm:text-base leading-7 text-neutral-400 font-normal">
                Dev iNN have established ourselves as a reliable and reputable provider of technology solutions. Our commitment to quality and customer satisfaction has helped us build long-lasting relationships with our clients and consistently deliver successful projects. Let us help take your business to new heights.
              </p>
            </RevealAnimation>

            {/* Custom Interactive Linear Slider Progress Bar Elements */}
            <div className="space-y-6 pt-2">
              {metricBars.map((bar, idx) => (
                <RevealAnimation key={idx} direction="up" duration={0.9} delay={0.25 + idx * 0.05} offset={15} animationType="from">
                  <div className="space-y-2.5">
                    {/* Label Context Metadata Header - Increased font tracking balance */}
                    <div className="flex items-center justify-between text-[13px] font-bold text-neutral-500 px-0.5">
                      <span className="tracking-wide text-[#08112a]">{bar.label}</span>
                      <span className="text-[#104cba] font-extrabold">{bar.value}%</span>
                    </div>
                    {/* Track Rail Background Frame - UPGRADED SIZE: Increased thickness scale */}
                    <div className="w-full h-[18px] bg-neutral-100 rounded-full overflow-hidden p-[3px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] border border-neutral-200/20">
                      {/* Active Meter Slider Filament fill with complex linear gradient structure */}
                      <div 
                        className="relative h-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full shadow-[0_1px_2px_rgba(59,130,246,0.2),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-1000 ease-out origin-left group overflow-hidden"
                        style={{ width: `${bar.value}%` }}
                      >
                        {/* Shimmer overlay animation layer for luxury look */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 h-full -skew-x-12 translate-x-[-100%] animate-[shimmer_2.5s_infinite]" />
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

          </div>

          {/* RIGHT SUB-GRID: ISOMETRIC VECTOR TEAMWORK DEPLOYMENT ASSET */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <RevealAnimation direction="right" duration={1.2} delay={0.2} offset={40} animationType="from">
              <div className="relative w-full max-w-[480px] aspect-[1.33/1] transform-gpu hover:scale-[1.01] transition-transform duration-700 ease-out">
                <Image
                  src={trustStatsHero}
                  alt="Isometric business workflow interface visualization depicting dynamic company scaling charts"
                  fill
                  className="object-contain"
                />
              </div>
            </RevealAnimation>
          </div>

        </div>

      </div>

      {/* Embedded shimmer styling rule parameters for progress fills */}
      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(250%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  );
}