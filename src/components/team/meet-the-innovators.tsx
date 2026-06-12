"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap, Binary, Milestone, Users } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// Production image path assignment
import habibImage from "@/assets/about/ceo.jpeg";

export function MeetTheInnovators() {
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
    <section className="relative w-full bg-white text-slate-900 py-8 md:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* ================= LEFT SIDE: MISSION CONTENT & CTA ================= */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-12">
            <div className="space-y-6">
              <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
                <span className="text-base md:text-lg font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                  <Users size={16} className="text-[#104cba]" /> Technical Brainpower
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={25} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Meet the Innovators <br />Behind Your Success
                </h2>
              </ConditionalReveal>
              
              <p className="text-base font-semibold uppercase tracking-widest text-slate-400 border-l-2 border-slate-200 pl-3">
                Elite Engineers • Strategic Architects • Visionary Builders
              </p>

              <ConditionalReveal direction="up" duration={0.9} delay={0.1} offset={15} animationType="from">
                <div className="space-y-4 text-[15px] leading-relaxed text-slate-500 font-medium">
                  <p>
                    At DevInnovative, our greatest asset isn’t just our cutting-edge technology—it’s the collective intelligence of our people. We have assembled a cross-border team of highly skilled software engineers, AI architects, data scientists, and product specialists who thrive on turning complex business friction into seamless code.
                  </p>
                  <p>
                    Operating under a unified global framework from our parent company in Colorado, USA to our specialized technical delivery branches, we bring a passion for cryptographic precision, architectural scalability, and defensive digital infrastructure to every deployment.
                  </p>
                </div>
              </ConditionalReveal>
            </div>

            <ConditionalReveal direction="up" duration={1.0} delay={0.15} offset={20} animationType="from">
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="group bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] inline-flex items-center justify-center gap-2 font-bold text-white rounded-full px-7 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#0c3da1] hover:shadow-md active:scale-[0.98] cursor-pointer"
                 
                >
                  <span>Partner With Our Team</span>
                  <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ConditionalReveal>
          </div>

          {/* ================= RIGHT SIDE: EXECUTIVE LEADERSHIP ================= */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pb-3 border-b border-slate-100 flex items-baseline justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-[#08112a] tracking-tight">Executive Leadership</h3>
              <span className="text-xs md:text-base font-medium uppercase tracking-widest text-slate-400">Boardroom Direction</span>
            </div>

            <ConditionalReveal direction="right" duration={1.0} delay={0.2} offset={30} animationType="from">
              <div className="w-full bg-slate-50/50 border border-slate-100 rounded-2xl p-6 sm:p-8 space-y-6 hover:bg-white hover:border-slate-200/60 hover:shadow-[0_15px_35px_rgba(15,23,42,0.02)] transition-all duration-300">
                
                {/* Profile Title Header Area */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60">
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-[#08112a] tracking-tight">Habib Ur Rehman</h4>
                    <span className="text-xs md:text-base font-semibold text-[#104cba] tracking-wide block">
                      Founder, Platform Architect & Technical Lead
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] gap-1.5 px-3 py-1 rounded-md text-base font-semibold text-white self-start sm:self-center shadow-2xs">
                    <GraduationCap size={16} className="text-white" />
                    <span>B.Tech Math & CS</span>
                  </div>
                </div>

                {/* Split Responsive Container Box (Image Left / Text Right) */}
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  
                  {/* Portrait Media Frame */}
                  <div className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 shrink-0 shadow-2xs">
                    <Image
                      src={habibImage}
                      alt="Habib Ur Rehman - Executive Portrait"
                      fill
                      className="object-cover"
                      priority
                    /> 
                  </div>

                  {/* Structural Paragraph Layout */}
                  <div className="space-y-4 text-[14px] leading-relaxed text-slate-500 font-medium flex-1">
                    <p>
                      Habib Ur Rehman is the driving force behind DevInnovative’s technical vision and cross-border operational blueprint. Holding a Bachelor of Technology in Mathematics and Computer Science, Habib bridges the gap between deep mathematical theory and high-end software implementation.
                    </p>
                    <p>
                      As a veteran Platform Architect and Tech Lead, he oversees the core engineering methodologies, smart contract auditing protocols, Consensus AI integrations, and high-performance Web3 infrastructures for our global enterprise clientele. 
                    </p>
                    <p>
                      Under his leadership, DevInnovative has evolved from a specialized development house into an integrated, multidisciplinary agency driving global software and infrastructure engineering.
                    </p>
                  </div>
                </div>

                {/* Bottom Core Focus Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400 block mr-2">Core Focus:</span>
                  <div className="flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] px-3 py-1.5 rounded-lg  text-white shadow-2xs">
                    <Binary size={14} className="text-white" /> Web3 Infrastructure
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg  text-white shadow-2xs">
                    <Milestone size={14} className="text-white" /> Consensus AI
                  </div>
                </div>

              </div>
            </ConditionalReveal>
          </div>

        </div>
      </div>
    </section>
  );
}