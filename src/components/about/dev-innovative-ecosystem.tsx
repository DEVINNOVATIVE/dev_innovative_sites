"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Cpu, Code2, KanbanSquare, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation"; // Adjust path matching your folder tree structure

const ecosystemRoles = [
  {
    title: "Solutions & AI Architects",
    description: "Who design future-proof, highly secure blueprints for your software and data models.",
    icon: Cpu,
    accent: "group-hover:text-blue-500 group-hover:bg-blue-500/5 group-hover:border-blue-500/20"
  },
  {
    title: "Full-Stack & Mobile Engineers",
    description: "Experts in modern tech stacks (React, Node.js, Python, Flutter, Cloud-native systems) who write clean, modular, and maintainable code.",
    icon: Code2,
    accent: "group-hover:text-[#ff6036] group-hover:bg-[#ff6036]/5 group-hover:border-[#ff6036]/20"
  },
  {
    title: "Product Managers & Scrum Masters",
    description: "Who ensure your project is delivered on time, within budget, and completely aligned with your commercial goals.",
    icon: KanbanSquare,
    accent: "group-hover:text-amber-500 group-hover:bg-amber-500/5 group-hover:border-amber-500/20"
  },
  {
    title: "Rigorous QA Specialists",
    description: "Who meticulously run automated and manual testing to guarantee an optimal, bug-free user experience from day one.",
    icon: ShieldAlert,
    accent: "group-hover:text-emerald-500 group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20"
  }
];

export function DevInnovativeEcosystem() {
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
    <section className="relative w-full bg-white text-slate-900 py-4 md:py-8 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px] relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* ================= LEFT COLUMN: INTRO & HIGH-CONVERTING CTA CARD ================= */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4">
              <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
                <span className="text-base md:text-lg font-bold uppercase tracking-widest text-[#104cba]  inline-block">
                Elite Team Matrix
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={25} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Meet the Dev innovative <br />
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">Ecosystem</span>
                </h2>
              </ConditionalReveal>

              <ConditionalReveal direction="up" duration={0.9} delay={0.1} offset={15} animationType="from">
                <p className="text-[15px] leading-relaxed text-slate-500 font-medium">
                  Our multidisciplinary team bridges the gap between complex code and business strategy. When you partner with us, you gain immediate access to an aligned digital unit.
                </p>
              </ConditionalReveal>
            </div>

            {/* Closing Strategy Action Box Section */}
            <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={30} animationType="from">
              <div className="bg-[#071033] text-white p-6 sm:p-8 rounded-2xl space-y-5 shadow-xl relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] font-black tracking-widest text-[#ff6036] uppercase flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Transform Digital Landscape
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white leading-snug">
                    Ready to Transform Your Digital Landscape?
                  </h3>
                  <p className="text-xs text-slate-300 font-medium leading-relaxed">
                    Whether you need to build a disruptive MVP, transition to a cloud-native infrastructure, or integrate predictive AI into your daily workflows, Dev innovative has the legal credibility, engineering depth, and strategic vision to take you there.
                  </p>
                  <h4 className="text-sm font-extrabold text-blue-400 pt-1">
                    Let’s Build Something Remarkable.
                  </h4>
                </div>

                <div className="pt-1 relative z-10">
                  <Link
                    href="/contact-us"
                    className="group inline-flex items-center justify-center gap-2 font-black text-white rounded-full px-6 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-full sm:w-auto text-center"
                    style={{ 
                      backgroundColor: "#ff6036", 
                      boxShadow: "0 4px 15px rgba(255, 96, 54, 0.25)" 
                    }}
                  >
                    <span>Schedule Consultation Today</span>
                    <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </ConditionalReveal>
          </div>

          {/* ================= RIGHT COLUMN: ROLES BENTO STREAM ================= */}
          <div className="lg:col-span-7 space-y-4">
            {ecosystemRoles.map((role, index) => {
              const RoleIcon = role.icon;
              return (
                <ConditionalReveal
                  key={index}
                  direction="up"
                  duration={0.85}
                  delay={index * 0.08}
                  offset={20}
                  animationType="from"
                >
                  <div className="group relative w-full bg-slate-50 border border-slate-100/80 hover:border-slate-200 hover:bg-white rounded-2xl p-5 sm:p-6 flex gap-5 items-start transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]">
                    
                    {/* Icon Base box frame elements */}
                    <div className={`h-10 w-10 rounded-xl border border-slate-200/60 bg-white text-slate-400 flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs ${role.accent}`}>
                      <RoleIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors duration-200">
                        {role.title}
                      </h4>
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-500 font-medium">
                        {role.description}
                      </p>
                    </div>

                  </div>
                </ConditionalReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}