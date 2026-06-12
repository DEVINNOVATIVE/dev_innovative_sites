"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldAlert, EyeOff, ToyBrick, Milestone, Sparkles, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const stackCategories = [
  { 
    cap: "Core AI / ML Frameworks", 
    tools: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras"],
    accent: "hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,0.03)]"
  },
  { 
    cap: "Generative AI & LLMs", 
    tools: ["OpenAI API", "Claude (Anthropic)", "Hugging Face", "LangChain", "LlamaIndex"],
    accent: "hover:border-purple-200 hover:shadow-[0_12px_30px_rgba(147,51,234,0.03)]"
  },
  { 
    cap: "Data & MLOps", 
    tools: ["Apache Spark", "Databricks", "MLflow", "Kubeflow", "Weights & Biases"],
    accent: "hover:border-orange-200 hover:shadow-[0_12px_30px_rgba(255,96,54,0.03)]"
  },
  { 
    cap: "Vector Databases", 
    tools: ["Pinecone", "Milvus", "Weaviate", "Chroma"],
    accent: "hover:border-emerald-200 hover:shadow-[0_12px_30px_rgba(16,185,129,0.03)]"
  },
  { 
    cap: "Cloud AI Infrastructure", 
    tools: ["AWS SageMaker", "Google Vertex AI", "Azure Machine Learning"],
    accent: "hover:border-indigo-200 hover:shadow-[0_12px_30px_rgba(79,70,229,0.03)]"
  }
];

const partnershipDifferentiators = [
  {
    title: "Enterprise-Grade Data Security",
    desc: "Your data belongs to you. We ensure that any AI model we deploy complies with strict privacy standards (GDPR, HIPAA) and that your proprietary data is never used to train public models.",
    icon: ShieldAlert
  },
  {
    title: "Focus on Explainable AI (XAI)",
    desc: "We believe you should trust your software. Our models are designed to provide clear reasoning behind their predictions and decisions, giving your team complete confidence.",
    icon: EyeOff
  },
  {
    title: "Seamless Integration",
    desc: "You don’t need to rip and replace your current tech stack. We design our AI engines to integrate smoothly into your existing CRM, ERP, or custom web/mobile applications via lightweight APIs.",
    icon: ToyBrick
  }
];

const implementationRoadmap = [
  { step: "Data Audit & Strategy", details: "We assess your existing data infrastructure to determine AI readiness and define high-impact use cases." },
  { step: "Proof of Concept (PoC) & Training", details: "We build a prototype, clean your datasets, and train/fine-tune the optimal machine learning models to prove the business value early." },
  { step: "MLOps & Integration", details: "We transition the model from the lab to production, setting up robust MLOps pipelines for continuous deployment and seamless software integration." },
  { step: "Monitoring & Optimization", details: "AI models evolve. We continuously monitor your system for \"model drift\" to ensure accuracy, safety, and performance remain peak over time." }
];

export function AiTechStackAndRoadmap() {
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
    <section className="w-full bg-[#fcfdfe] text-slate-900 pb-14 pt-4 md:pt-8 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-28 md:space-y-36">
        
        {/* ================= OVERHAULED SECTION 1: AI TECH STACK GRID MATRIX ================= */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
              <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-block shadow-3xs">
                ⚡ Production Ecosystem
              </span>
            </ConditionalReveal>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a]">Our AI Tech Stack</h3>
            <p className="text-sm text-slate-400 font-medium max-w-md mx-auto">
              Built on battle-tested frameworks to guarantee enterprise scalability.
            </p>
          </div>

          {/* Premium Grid Cards instead of the previous image layout style */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {stackCategories.map((category, idx) => (
              <div 
                key={idx} 
                className={`bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between gap-6 transition-all duration-300 transform-gpu hover:-translate-y-1 ${category.accent}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-[#104cba]">
                    <Layers size={16} />
                    <h4 className="text-[15px] sm:text-base font-bold text-[#08112a] tracking-tight">{category.cap}</h4>
                  </div>
                  <div className="h-[1px] w-full bg-slate-100" />
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {category.tools.map((tool, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[12px] font-semibold bg-slate-50/60 border border-slate-200/50 px-3 py-1 rounded-lg text-slate-600 transition-colors hover:bg-slate-100/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: ETHICAL PARTNERSHIP DIFFERENTIATORS ================= */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-xl sm:text-4xl font-bold tracking-tight text-[#08112a]">Why Partner with DevInnovative for AI?</h3>
            <p className="text-sm font-semibold italic text-slate-400 border-l-2 border-slate-200 max-w-md mx-auto px-4 py-0.5 leading-relaxed">
              "We build ethical, secure, and explainable AI—not black boxes."
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {partnershipDifferentiators.map((item, idx) => {
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

        {/* ================= OVERHAULED SECTION 3: ASYMMETRIC SPLIT ROADMAP ================= */}
        <div className="pt-5 md:pt-10 border-t border-slate-200/60 max-w-5xl mx-auto grid gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column Headers */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6036] bg-orange-50 border border-orange-100/50 px-4 py-1.5 rounded-full inline-block shadow-3xs">
              Lifecycle Roadmap
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-[1.15]">
              Our AI Implementation <br className="hidden md:block" />Roadmap
            </h3>
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              <span>Audit</span> ➔ <span>Prototype</span> ➔ <span>MLOps</span> ➔ <span>Scale</span>
            </div>
          </div>

          {/* Right Column Custom Timeline Node System */}
          <div className="lg:col-span-7 relative border-l border-slate-200/80 pl-8 sm:pl-12 ml-3 space-y-12">
            {implementationRoadmap.map((item, index) => (
              <div key={index} className="relative group">
                
                {/* Clean Geometric Ring Nodes */}
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

        {/* ================= SECTION 4: CONVERTING CLOSING CTA BANNER ================= */}
        <div className="max-w-5xl mx-auto pt-4">
          <div className="bg-[#071033] text-white p-8 sm:p-12 rounded-2xl text-center space-y-6 relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />
            
            <div className="space-y-2 relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-widest text-[#ff6036] uppercase flex items-center justify-center gap-1.5">
                <Sparkles size={12} className="text-[#ff6036]" /> Competitive Advantage Strategy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                Ready to Turn Your Data Into a Competitive Weapon?
              </h3>
              <p className="text-xs sm:text-[14px] leading-relaxed text-slate-300 font-normal opacity-90">
                The future belongs to intelligent, metrics-driven businesses. Let our technical engineers help you build smarter software frameworks today. Let's build the future together.
              </p>
            </div>
            
            <div className="pt-3 relative z-10">
              <Link
                href="/contact-us"
                className="group inline-flex bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] items-center justify-center gap-2 font-bold text-white rounded-full px-6 sm:px-7 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#e0532b] hover:shadow-md active:scale-[0.98] cursor-pointer w-full sm:w-auto text-center"
               
              >
                <span>Consult with an AI Architect</span>
                <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}