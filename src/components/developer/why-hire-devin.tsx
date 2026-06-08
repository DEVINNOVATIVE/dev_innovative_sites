"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPANDED ASSET PATH IMPORTS MATCHING YOUR SCHEME (image_a5b5a6.png) ---
import techSolutionsHero from "@/assets/hire_developer/hire.jpg";

export function WhyHireDevInn() {
  return (
    <section className="relative bg-white text-neutral-900 pt-4 pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-285">
        
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* ================= LEFT COLUMN: MARKETING GRAPHIC ANALYSIS ================= */}
          <div className="lg:col-span-5 flex justify-center w-full relative order-2 lg:order-1">
            <RevealAnimation direction="left" duration={1.1} delay={0.1} offset={30} animationType="from">
              <div className="relative w-full max-w-110 aspect-square transform-gpu">
                <Image
                  src={techSolutionsHero}
                  alt="Laptop deployment workstation launching digital software scaling solutions illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </RevealAnimation>
          </div>

          {/* ================= RIGHT COLUMN: EXPLICIT VERBATIM COPY NARRATIVE ================= */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-2xl mx-auto lg:mx-0 order-1 lg:order-2">
            
            {/* Minimal Kicker Tag */}
            <RevealAnimation direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
              <span className=" tracking-wider text-lg font-bold text-[#104cba] uppercase block">
                Technology Solutions
              </span>
            </RevealAnimation>

            {/* Core Header Copy - Set to standard bold as requested */}
            <RevealAnimation direction="right" duration={1.0} delay={0.05} offset={25} animationType="from">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#08112a] leading-snug">
                Why Hiring Developers From Dev INN Is Best Decision{" "}<br/>
                <span className="text-[#ff4b2b]">For You ?</span>
              </h2>
            </RevealAnimation>

            {/* Content Abstracts Block */}
            <div className="space-y-4 pt-1">
              <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={20} animationType="from">
                <p className="text-base leading-6 text-neutral-400 font-normal">
                  We provides dedicated developers who are experts in their respective fields and can provide a wide range of services to meet the specific needs of your business.
                </p>
              </RevealAnimation>

              <RevealAnimation direction="up" duration={1.0} delay={0.15} offset={20} animationType="from">
                <p className="text-base leading-6 text-neutral-400 font-normal">
                  Our developers are trained to work in close collaboration with your team, ensuring seamless integration and a high level of communication throughout the development process.
                </p>
              </RevealAnimation>
            </div>

            {/* Premium Bullet Checklist Stack */}
            <div className="space-y-5 pt-3">
              
              {/* Checklist Point 01 */}
              <RevealAnimation direction="up" duration={0.9} delay={0.2} offset={20} animationType="from">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-5 w-5 rounded-full bg-rose-50 flex items-center justify-center mt-0.5 border border-rose-100">
                    <Check className="h-3 w-3 text-[#ff4b2b] stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base leading-6 text-neutral-400 font-normal">
                      Access to top-notch talent without investing in additional resources or infrastructure. Dedicated developers with expertise in their respective fields
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              {/* Checklist Point 02 */}
              <RevealAnimation direction="up" duration={0.9} delay={0.25} offset={20} animationType="from">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-5 w-5 rounded-full bg-rose-50 flex items-center justify-center mt-0.5 border border-rose-100">
                    <Check className="h-3 w-3 text-[#ff4b2b] stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base leading-6 text-neutral-400 font-normal">
                      Seamless collaboration and communication throughout the development process. Dedicated developers with expertise in their respective fields
                    </p>
                  </div>
                </div>
              </RevealAnimation>

            </div>

            {/* Interactive Lower Redirectional Trigger Hook */}
            <RevealAnimation direction="up" duration={1.0} delay={0.3} offset={15} animationType="from">
              <div className="pt-6">
                <Link
                  href="/quote"
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-neutral-400 hover:text-[#104cba] transition-colors duration-300"
                >
                  <span>Get A Free Quote</span>
                  <ArrowRight className="h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealAnimation>

          </div>

        </div>

      </div>
    </section>
  );
}