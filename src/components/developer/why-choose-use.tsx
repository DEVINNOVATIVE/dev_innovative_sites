"use client";

import React from "react";
import { Plus } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const featuresData = [
  {
    title: "Custom Solutions",
    description: "We offer tailor-made solutions that are specifically designed to meet your need.",
    badgeBg: "bg-[#10e38c]", // Crisp green badge
    shadowColor: "hover:shadow-[0_20px_40px_rgba(16,227,140,0.15)]",
  },
  {
    title: "Quality Assurance",
    description: "We ensure that our clients receive only the best products.",
    badgeBg: "bg-[#25cdff]", // Bright cyan badge
    shadowColor: "hover:shadow-[0_20px_40px_rgba(37,205,255,0.15)]",
  },
  {
    title: "Timely Delivery:",
    description: "We value our clients' time & always strive to deliver our projects before the deadline.",
    badgeBg: "bg-[#ff5b2e]", // Warm orange-red badge
    shadowColor: "hover:shadow-[0_20px_40px_rgba(255,91,46,0.15)]",
  },
  {
    title: "Competitive Pricing",
    description: "We offer our services at competitive prices without compromising on the quality.",
    badgeBg: "bg-[#502bfb]", // Vibrant indigo/purple badge
    shadowColor: "hover:shadow-[0_20px_40px_rgba(80,43,251,0.15)]",
  },
];

export function WhyChooseUsFeatures() {
  return (
    <section className="relative bg-white text-neutral-900 pb-20 pt-4 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-285">
        
        {/* ================= FOUR COLUMN FEATURE CARD LAYOUT ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
          {featuresData.map((feature, index) => (
            <RevealAnimation
              key={index}
              direction="up"
              duration={0.9}
              delay={0.05 + index * 0.08}
              offset={35}
              animationType="from"
            >
              {/* Feature Grid Item Container */}
              <div 
                className={`group flex flex-col items-center text-center p-6 rounded-3xl border border-transparent hover:border-neutral-100 bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${feature.shadowColor}`}
              >
                
                {/* 1. Enhanced Circular Icon Token Badge */}
                <div 
                  className={`h-12 w-12 rounded-full ${feature.badgeBg} flex items-center justify-center text-white shadow-md transform group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                >
                  <Plus className="h-5 w-5 stroke-[3]" />
                </div>

                {/* 2. Textual Header Component - Standard Bold Weight Applied */}
                <div className="mt-6 mb-3">
                  <h3 className="text-[18px] font-bold text-[#08112a] tracking-tight group-hover:text-neutral-800 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* 3. Narrative Copy Area */}
                <div className="px-2">
                  <p className="text-[14px] leading-6 text-neutral-400 font-normal">
                    {feature.description}
                  </p>
                </div>

              </div>
            </RevealAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}