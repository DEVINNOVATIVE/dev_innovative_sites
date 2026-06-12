"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BrainCircuit, Cpu, ShieldCheck, BarChart3, Users, Infinity, Milestone, Sparkles, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const domainSquads = [
  {
    title: "Solutions & AI Architecture Team",
    do: "Design the underlying blueprint of your software systems, specialize in custom Large Language Model (LLM) fine-tuning, vector database integrations, and predictive machine learning models.",
    mindset: "Secure, explainable, and scalable AI that optimizes workflows without exposing proprietary data.",
    accent: "hover:shadow-[0_15px_30px_rgba(37,99,235,0.03)] hover:border-blue-200/60",
    icon: BrainCircuit,
    iconColor: "text-blue-500 bg-blue-50 border-blue-100/70"
  },
  {
    title: "Full-Stack & Cloud Engineering Hub",
    do: "Write clean, modular, and maintainable production code using modern tech stacks like Next.js, Node.js, and Python. They manage cloud infrastructure (AWS, Azure, GCP) and continuous deployment (CI/CD) pipelines.",
    mindset: "99.9% uptime, responsive UI/UX execution, and microservices built to handle massive user scaling.",
    accent: "hover:shadow-[0_15px_30px_rgba(255,96,54,0.03)] hover:border-orange-200/60",
    icon: Cpu,
    iconColor: "text-[#ff6036] bg-[#ff6036]/5 border-[#ff6036]/10"
  },
  {
    title: "Cybersecurity & Cryptographic Engineers",
    do: "Implement defensive digital infrastructure, data encryption, role-based access controls, and strict compliance layers (GDPR, SOC2 baseline practices) across all digital platforms.",
    mindset: "Security is never an afterthought; it is baked directly into the initial architecture.",
    accent: "hover:shadow-[0_15px_30px_rgba(16,185,129,0.03)] hover:border-emerald-200/60",
    icon: ShieldCheck,
    iconColor: "text-emerald-500 bg-emerald-50 border-emerald-100/70"
  },
  {
    title: "Product Management & Quality Assurance (QA)",
    do: "Act as your strategic partners. Our Scrum Masters and Product Managers keep delivery timelines locked in 2-week agile sprints, while our QA testers run automated and manual test suites to ensure zero-bug deployments.",
    mindset: "Complete transparency, regular live demos, and a product-first approach to maximizing client ROI.",
    accent: "hover:shadow-[0_15px_30px_rgba(245,158,11,0.03)] hover:border-amber-200/60",
    icon: BarChart3,
    iconColor: "text-amber-500 bg-amber-50 border-amber-100/70"
  }
];

const culturePrinciples = [
  {
    title: "Direct Collaboration",
    desc: "We eliminate the friction of traditional agency middlemen. Our clients enjoy direct access to senior technical minds via dedicated Slack, Microsoft Teams, and Jira workspaces.",
    icon: Users
  },
  {
    title: "Continuous Evolution",
    desc: "The technology landscape changes every week. Our team undergoes continuous upskilling in emerging AI parameters, cloud-native frameworks, and advanced defensive engineering to keep your business ahead of the curve.",
    icon: Infinity
  },
  {
    title: "Global Security Standards",
    desc: "Every team member operates under strict Intellectual Property (IP) protections and data handling protocols, guaranteeing your corporate secrets are perfectly guarded.",
    icon: Milestone
  }
];

export function CoreEcosystemAndCulture() {
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
    <section className="w-full bg-[#f8fafc] text-slate-900 py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px] space-y-8 md:space-y-14">
        
        {/* ================= SQUAD GRID HEADER ================= */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-block">
              ⚡ Targeted Specialization
            </span>
          </ConditionalReveal>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
            Our Engineering & Core Ecosystem
          </h2>
          <p className="text-sm text-slate-500 font-medium max-w-xl mx-auto">
            We don't rely on generalists. We deploy targeted, deep-domain experts to ensure your project architecture is flawless from day one.
          </p>
        </div>

        {/* ================= 4-COLUMN BENTO GRID ================= */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          {domainSquads.map((squad, index) => {
            const SquadIcon = squad.icon;
            return (
              <ConditionalReveal key={index} direction="up" duration={0.8} delay={index * 0.05} offset={20} animationType="from">
                <div className={`h-full bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${squad.accent}`}>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                      <div className={`h-9 w-9 rounded-xl border flex items-center justify-center shrink-0 ${squad.iconColor}`}>
                        <SquadIcon size={16} />
                      </div>
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-[#08112a] tracking-tight">{squad.title}</h4>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">What They Do:</span>
                      <p className="text-[13.5px] text-slate-500 font-medium leading-relaxed">{squad.do}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold text-[#ff6036] uppercase tracking-wider block">The Mindset:</span>
                    <p className="text-[13px] text-slate-600 font-semibold leading-relaxed">{squad.mindset}</p>
                  </div>

                </div>
              </ConditionalReveal>
            );
          })}
        </div>

        {/* ================= WORK CULTURE TRACKS ================= */}
        <div className="pt-12 md:pt-16 border-t border-slate-200 grid gap-10 lg:grid-cols-12 lg:items-start max-w-5xl mx-auto">
          
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6036] bg-orange-50 border border-orange-100/50 px-3 py-1 rounded-full inline-block">
              Internal Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#08112a] tracking-tight leading-tight">
              The DevInnovative Culture: <br className="hidden sm:block" />How We Work Together
            </h3>
            <p className="text-[13.5px] leading-relaxed text-slate-400 font-medium italic border-l-2 border-slate-200 pl-3">
              "Elite code is a byproduct of absolute transparency and relentless execution."
            </p>
          </div>

          {/* Placed timeline tracks with precise left positioning markers for narrow touch views */}
          <div className="lg:col-span-8 relative border-l border-slate-200 pl-6 sm:pl-10 ml-2.5 sm:ml-3 space-y-10">
            {culturePrinciples.map((item, index) => {
              const TrackIcon = item.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute -left-[29px] sm:-left-[39px] top-1 h-3.5 w-3.5 rounded-full border-2 border-[#104cba] bg-white group-hover:scale-110 transition-transform shadow-2xs" />
                  
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#08112a] flex items-center gap-2">
                      <TrackIcon size={16} className="text-[#104cba] shrink-0" /> {item.title}
                    </h4>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-500 font-medium max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= CALL TO ACTION FOOTER BANNER ================= */}
        <div className="max-w-5xl mx-auto pt-4 md:pt-8">
          <div className="bg-[#071033] text-white p-6 sm:p-10 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />
            
            <div className="space-y-2 relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest text-[#ff6036] uppercase flex items-center justify-center gap-1.5">
                <Sparkles size={12} className="text-[#ff6036]" /> Delivery Optimization Process
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Want to Know More About Our Delivery Process?
              </h3>
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-slate-300 font-normal">
                Our engineering teams are ready to map out a clear technical blueprint for your next milestone. Let’s build something exceptional.
              </p>
            </div>
            
            <div className="pt-2 relative z-10">
              <Link
                href="/contact-us"
                className="group inline-flex items-center justify-center gap-2 font-bold text-white rounded-full px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#e0532b] hover:shadow-md active:scale-[0.98] cursor-pointer w-full sm:w-auto text-center"
                style={{ 
                  backgroundColor: "#ff6036",
                  boxShadow: "0 4px 14px rgba(255, 96, 54, 0.15)"
                }}
              >
                <span>Consult with our Engineering Leads</span>
                <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}