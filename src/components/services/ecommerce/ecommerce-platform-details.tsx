"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Check, CheckCircle } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped from your e-commerce repository folder lists
import imgSection1Hero from "@/assets/services/ecommerce/MicrosoftTeams-image.png"; 
import imgSection2Hero from "@/assets/services/ecommerce/MicrosoftTeams-image-5.png"; 
import imgSection3Hero from "@/assets/services/ecommerce/MicrosoftTeams-image-2.png"; 

export function EcommercePlatformDetails() {


  return (
    <div className="w-full bg-white text-slate-900 select-none overflow-hidden">

      {/* ======================================================================
          BLOCK ROW 1: REVOLUTIONIZE YOUR ONLINE BUSINESS (Top Section)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Column Content Block */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-[540px] mx-auto lg:mx-0">
            <div className="hidden lg:block space-y-4">
              <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Ecommerce Solutions
                </span>
              </RevealAnimation>
              <RevealAnimation direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Revolutionize Your Online <br /> Business With Our Expert !
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-base leading-relaxed text-slate-500 font-normal">
                  Our comprehensive e-commerce development solutions build custom, lightweight setups tailored to extend your brand reach. Our team of expert developers and designers works closely with clients to ensure setups match business operational metrics.
                </p>
              </RevealAnimation>
            </div>

            {/* Mobile Fallback Header */}
            <div className="block lg:hidden text-center sm:text-left space-y-3">
              <span className="text-xs font-bold text-[#104cba] uppercase tracking-wider block">Ecommerce Solutions</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08112a] leading-tight">Revolutionize Your Online Business</h2>
              <p className="text-[14px] leading-relaxed text-slate-500">Our comprehensive e-commerce development solutions build custom, lightweight setups tailored to extend your brand reach.</p>
            </div>

            {/* Core Checkmark Capability List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {[
                "Website design and development",
                "E-commerce platform integration",
                "Mobile commerce",
                "Maintenance and support",
              ].map((item, idx) => (
                <div key={item} className="h-full">
                  <div className="hidden lg:block">
                    <RevealAnimation direction="up" duration={0.8} delay={0.3 + idx * 0.08} offset={15} animationType="from">
                      <div className="flex gap-2.5 items-center group">
                        <Check className="h-[18px] w-[18px] text-[#ff5c3d] stroke-[3px] shrink-0" />
                        <span className="text-[14px] font-bold text-[#08112a] group-hover:text-[#104cba] transition-colors">{item}</span>
                      </div>
                    </RevealAnimation>
                  </div>
                  <div className="block lg:hidden flex gap-2.5 items-center">
                    <Check className="h-4 w-4 text-[#ff5c3d] stroke-[3px] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Isometric Floating Mobile Artwork Layer */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[320px] sm:h-[420px] w-full">
            <div className="relative w-full max-w-[460px] aspect-[1.2/1]" style={{ animation: "subtleFloat 6s ease-in-out infinite" }}>
              <Image src={imgSection1Hero} alt="E-commerce web store wireframe optimization presentation illustration" fill className="object-contain" priority />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          BLOCK ROW 2: INNOVATIVE AND CREATIVE DESIGNS (Middle Section)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-slate-50/50 border-y border-slate-100/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Column Graphic Core Phone Mockup Asset Frame */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[340px] sm:h-[440px] order-2 lg:order-1">
            <div className="relative w-full max-w-[400px] aspect-[1/1]" style={{ animation: "subtleFloat 6s ease-in-out infinite 1s" }}>
              <Image src={imgSection2Hero} alt="Mobile layout ui designer workflow viewport asset" fill className="object-contain" />
            </div>
          </div>

          {/* Right Column Context Content Block */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-[540px] mx-auto lg:mx-0 order-1 lg:order-2">
            <div className="hidden lg:block space-y-4">
              <RevealAnimation direction="right" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Creative E-Com App Design
                </span>
              </RevealAnimation>
              <RevealAnimation direction="right" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Innovative And Creative <br /> Designs For Ecommerce Apps
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="right" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-base leading-relaxed text-slate-500 font-normal">
                  We believe that the design of your e-commerce storefront app is crucial to its success. That's why our experienced UI/UX setup creates modern interfaces built to increase retention channels.
                </p>
              </RevealAnimation>
            </div>

            {/* Mobile Fallback Header */}
            <div className="block lg:hidden text-center sm:text-left space-y-3">
              <span className="text-xs font-bold text-[#104cba] uppercase tracking-wider block">Creative E-Com App Design</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08112a] leading-tight">Innovative & Creative Designs</h2>
              <p className="text-[14px] leading-relaxed text-slate-500">We believe that the design of your e-commerce storefront app is crucial to its success.</p>
            </div>

            {/* Circular Checked Highlight Point Rows */}
            <div className="space-y-4 pt-2">
              {[
                "An attractive and friendly ecommerce app design can initial user engagement and retention, ultimately leading to increased sales and revenue.",
                "With the increasing trend towards mobile shopping, having a mobile application responds to alternative device views to protect system authority.",
              ].map((text, idx) => (
                <div key={idx} className="w-full">
                  <div className="hidden lg:block">
                    <RevealAnimation direction="up" duration={0.85} delay={0.35 + idx * 0.1} offset={15} animationType="from">
                      <div className="flex gap-3.5 items-start bg-white p-4 rounded-2xl border border-slate-100/60 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-sm transition-all">
                        <CheckCircle className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5" />
                        <p className="text-base leading-relaxed text-slate-400 font-normal">{text}</p>
                      </div>
                    </RevealAnimation>
                  </div>
                  <div className="block lg:hidden flex gap-3.5 items-start bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5" />
                    <p className="text-base leading-relaxed text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          BLOCK ROW 3: WE STRIVE TO MAKE HIGH CONVERSION (Bottom Section)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Column Structured Sequential Content Steps Container */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-[620px] mx-auto lg:mx-0">
            <div className="hidden lg:block space-y-4">
              <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Ecommerce Conversion
                </span>
              </RevealAnimation>
              <RevealAnimation direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  We Strive To Make Your <br /> Business Get High Conversion !
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-base leading-relaxed text-slate-500 font-normal">
                  Optimization elements inside checkout tunnels turn visitors into loyal buyers. We inject data tracking components into strategic framework paths to expand order frequency parameters cleanly.
                </p>
              </RevealAnimation>
            </div>

            {/* Mobile Fallback Header */}
            <div className="block lg:hidden text-center sm:text-left space-y-3">
              <span className="text-xs font-bold text-[#104cba] uppercase tracking-wider block">Ecommerce Conversion</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#08112a] leading-tight">We Strive For High Conversion !</h2>
              <p className="text-[14px] leading-relaxed text-slate-500">Optimization elements inside checkout tunnels turn visitors into loyal buyers.</p>
            </div>

            {/* Numbered Instruction Sequences */}
            <div className="space-y-4 pt-2 text-left">
              {[
                "Optimizing checkout pipeline maps lowers friction hurdles, preventing cart abandonment rates before transaction logs fire.",
                "Responsive item grid filtering matches exact customer intents instantly, optimizing user interaction flow parameters.",
                "High-quality content displays offer visual clarity, helping clients make secure decisions during procurement sessions.",
              ].map((text, idx) => (
                <div key={idx} className="w-full">
                  <div className="hidden lg:block">
                    <RevealAnimation direction="up" duration={0.85} delay={0.3 + idx * 0.08} offset={15} animationType="from">
                      <div className="flex gap-4 items-start text-left group">
                        <span className="text-lg font-bold text-[#104cba] transition-colors pt-0.5 select-none">{idx + 1}.</span>
                        <p className="text-base leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">{text}</p>
                      </div>
                    </RevealAnimation>
                  </div>
                  <div className="block lg:hidden flex gap-3 items-start text-left">
                    <span className="text-lg font-bold text-[#104cba] pt-0.5">{idx + 1}.</span>
                    <p className="text-base leading-relaxed text-slate-500">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Customer Counter Matrix Blueprint Image Frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[320px] sm:h-[420px] w-full">
            <div className="relative w-full max-w-[440px] aspect-[1.12/1]" style={{ animation: "subtleFloat 6s ease-in-out infinite" }}>
              <Image src={imgSection3Hero} alt="Analytics reporting interface tracking framework matrix visualization layout" fill className="object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* Hardware Accelerated Floating Context Animations */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </div>
  );
}