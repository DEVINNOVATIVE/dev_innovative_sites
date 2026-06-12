"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, LineChart, Eye, MessageCircleCode } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const capabilityCards = [
  {
    title: "Generative AI & Large Language Models (LLMs)",
    desc: "Harness the power of GPT-4, Llama 3, and custom-trained models. We build enterprise-grade generative AI applications, including context-aware internal knowledge bases, automated content engines, and intelligent code assistants tailored to your data privacy rules.",
    icon: MessageCircleCode,
    badge: "LLM Systems",
    color: "hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]",
    iconColor: "text-blue-400 bg-white/[0.04] border-white/10"
  },
  {
    title: "Predictive Analytics & Machine Learning",
    desc: "Stop reacting to the market and start anticipating it. Our ML algorithms analyze historical trends to predict customer churn, optimize supply chains, forecast sales, and detect fraudulent activity before it impacts your bottom line.",
    icon: LineChart,
    badge: "Predictive ML",
    color: "hover:border-orange-400 hover:shadow-[0_20px_50px_rgba(255,96,54,0.15)]",
    iconColor: "text-[#ff6036] bg-white/[0.04] border-white/10"
  },
  {
    title: "Computer Vision & Image Processing",
    desc: "Enable your software to see and understand. We build custom computer vision models for automated quality inspection in manufacturing, facial and object recognition, medical imaging analysis, and geospatial data processing.",
    icon: Eye,
    badge: "Vision Systems",
    color: "hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-400 bg-white/[0.04] border-white/10"
  },
  {
    title: "Conversational AI & Advanced NLP",
    desc: "Move beyond rigid, rule-based chatbots. We engineer sophisticated Natural Language Processing (NLP) solutions, creating multi-lingual virtual assistants and sentiment analysis tools that truly understand human intent, context, and emotion.",
    icon: MessageSquare,
    badge: "Advanced NLP",
    color: "hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]",
    iconColor: "text-amber-400 bg-white/[0.04] border-white/10"
  }
];

export function AiCapabilities() {
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
    <section className="w-full bg-white text-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6036] bg-orange-50 border border-orange-100/60 px-4 py-1.5 rounded-full inline-block shadow-2xs">
              Capabilities Matrix
            </span>
          </ConditionalReveal>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a]">
            Our AI Capabilities
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            We help you navigate the complex AI landscape, delivering everything from intelligent workflow automation to cutting-edge generative models.
          </p>
        </div>

        {/* ================= CARDS ASYMMETRIC GRID LAYER ================= */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {capabilityCards.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <ConditionalReveal key={index} direction="up" duration={0.8} delay={index * 0.05} offset={20} animationType="from">
                {/* Updated background container color tokens below to use #0c194a */}
                <div className={`h-full bg-[#0c194a] border-t-4 border-transparent border-x border-b border-slate-200/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transform-gpu transition-all duration-300 hover:-translate-y-2 ${card.color}`}>
                  
                  <div className="space-y-5">
                    
                    {/* Card Meta Indicator Row */}
                    <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/[0.06]">
                      <div className={`h-10 w-10 rounded-xl border flex items-center justify-center shadow-3xs shrink-0 transition-transform duration-300 ${card.iconColor}`}>
                        <CardIcon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-300/70 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md shadow-3xs select-none">
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Content Core Layout - Upgraded contrast states for dark bg visibility */}
                    <div className="space-y-2 text-left">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300/80 font-medium">
                        {card.desc}
                      </p>
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