"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Layers, ShieldCheck, Zap, HeartHandshake, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

const techStackGrid = [
  { cap: "Frontend Core Layers", tools: ["React.js", "Next.js", "Angular", "Vue.js", "HTML5 / CSS3"], fx: "hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.03)]" },
  { cap: "Backend Architecture", tools: ["Node.js", "Python (Django / FastAPI)", "Go Lang", ".NET Core", "Java Core"], fx: "hover:border-purple-200 hover:shadow-[0_12px_30px_rgba(147,51,234,0.03)]" },
  { cap: "Mobile Frameworks", tools: ["Flutter", "React Native", "Swift", "Kotlin Platforms"], fx: "hover:border-rose-200 hover:shadow-[0_12px_30px_rgba(244,63,94,0.03)]" },
  { cap: "Database & Cloud Infrastructure", tools: ["PostgreSQL", "MongoDB Engine", "AWS Global", "Microsoft Azure", "Google Cloud"], fx: "hover:border-emerald-200 hover:shadow-[0_12px_30px_rgba(16,185,129,0.03)]" },
  { cap: "DevOps & Pipeline Automation", tools: ["Docker Containers", "Kubernetes Clusters", "Jenkins CI", "GitHub Actions Automation"], fx: "hover:border-indigo-200 hover:shadow-[0_12px_30px_rgba(79,70,229,0.03)]" }
];

const teamDifferentiators = [
  { title: "Agile & Transparent Delivery", desc: "You will always know exactly where your roadmap progress sits. We build inside structured 2-week active sprints backed by automated live milestone demos and open Slack environments.", icon: Zap },
  { title: "Security-First Coding Baseline", desc: "We bake user data privacy configurations, encryption logic, and zero-trust parameter architecture patterns directly into source modules to align with GDPR, SOC2, and HIPAA regulations.", icon: ShieldCheck },
  { title: "Product-Centric Consultation", desc: "We don't just mechanically accept tickets; we question product workflow assumptions. Our software architects deliberate interactively with your leads to ensure feature releases capture business ROI.", icon: HeartHandshake }
];

const lifecycleRoadmap = [
  { step: "Discovery & Blueprinting", details: "We deep-dive into your operational requirements, systematically isolate structural user map journeys, and formulate the comprehensive code framework before a line of code is committed." },
  { step: "Agile Engineering", details: "Our developers construct codebase targets within short iterative sprint intervals, supplying your product team with clear working application nodes at every cycle close." },
  { step: "Rigorous QA Verification", details: "Comprehensive automatic unit validation test frameworks run in lockstep alongside manual diagnostic logic sweeps to guarantee codebase builds arrive bug-free." },
  { step: "Deployment & Evolution", details: "We execute clean system migration paths into live production containers while supporting your stack with ongoing maintenance telemetry monitoring hooks." }
];

export function CustomSoftwareTechAndProcess() {
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
    <section className="w-full bg-[#f8fafc] text-slate-900 py-14 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-28 md:space-y-36">
        
        {/* ================= STACK GRID MATRIX CONTAINER ================= */}
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
              <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-block shadow-3xs">
                ⚡ Development Stack
              </span>
            </ConditionalReveal>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08112a]">Our Technology Stack</h3>
            <p className="text-sm text-slate-400 font-medium max-w-md mx-auto">Optimal compilation matrices configured for long-term project viability.</p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {techStackGrid.map((category, idx) => (
              <div key={idx} className={`bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-all duration-300 transform-gpu hover:-translate-y-1 ${category.fx}`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#104cba]">
                    <Layers size={16} />
                    <h4 className="text-[15px] sm:text-base font-bold text-[#08112a] tracking-tight">{category.cap}</h4>
                  </div>
                  <div className="h-[1px] w-full bg-slate-100" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="text-[12px] font-semibold bg-slate-50/60 border border-slate-200/50 px-3 py-1 rounded-lg text-slate-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PARTNERSHIP DIFFERENTIATORS ================= */}
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-4xl font-bold tracking-tight text-[#08112a]">Why Choose DevInnovative?</h3>
            <p className="text-sm font-semibold italic text-slate-400 border-l-2 border-slate-200 max-w-md mx-auto px-4 py-0.5">
              "Innovation is in our name because it’s embedded in our process."
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {teamDifferentiators.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-100 p-6 rounded-2xl space-y-4 hover:border-slate-200 hover:shadow-sm transition-all duration-300 transform-gpu hover:-translate-y-1">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-[#104cba] shadow-3xs">
                    <ItemIcon size={16} />
                  </div>
                  <h4 className="text-[16px] font-bold text-[#08112a] tracking-tight">{item.title}</h4>
                  <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= ASYMMETRIC PROCESS ROADMAP TIMELINE ================= */}
        <div className="md:pt-4   max-w-5xl mx-auto grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6036] bg-orange-50 border border-orange-100/50 px-4 py-1.5 rounded-full inline-block shadow-3xs">
              Execution Frame
            </span>
            <h3 className="text-xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-[1.15]">
              Our 4-Step Development <br />Process
            </h3>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span>Blueprint</span> ➔ <span>Sprint</span> ➔ <span>Verify</span> ➔ <span>Evolve</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative border-l border-slate-200/80 pl-8 sm:pl-12 ml-3 space-y-12">
            {lifecycleRoadmap.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[43px] sm:-left-[59px] top-1 h-[24px] w-[24px] rounded-full border-2 border-[#104cba] bg-white group-hover:scale-110 transition-transform shadow-3xs flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[#104cba]" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#08112a] flex items-center gap-2.5 tracking-tight group-hover:text-[#104cba] transition-colors duration-200">
                    <CheckCircle2 size={15} className="text-[#104cba] shrink-0" /> {item.step}
                  </h4>
                  <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-slate-500 font-medium max-w-xl">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CLOSING CTA CONVERSION BANNER ================= */}
        <div className="max-w-5xl mx-auto pt-4">
          <div className="bg-[#071033] text-white p-8 sm:p-12 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />
            <div className="space-y-2 relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest text-[#ff6036] uppercase flex items-center justify-center gap-1.5">
                <Sparkles size={12} className="text-[#ff6036]" /> Global Delivery Protocol
              </span>
              <h3 className="text-base sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Ready to Build Something Extraordinary?
              </h3>
              <p className="text-xs sm:text-[14px] leading-relaxed text-slate-300 font-normal opacity-90">
                Let's talk about your project. Our experts are ready to map out a clear technical roadmap to bring your ideas to life. Let's innovate together.
              </p>
            </div>
            <div className="pt-3 relative z-10">
              <Link
                href="/contact-us"
                className="group inline-flex bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] items-center justify-center gap-2 font-bold text-white rounded-full px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#e0532b] hover:shadow-md active:scale-[0.98] cursor-pointer w-full sm:w-auto text-center"
               
              >
                <span>Contact Our Engineering Team</span>
                <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}