"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Code2, 
  Smartphone, 
  BrainCircuit, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Layers, 
  Server, 
  TrendingUp, 
  ShoppingCart 
} from "lucide-react";

const categories = [
  { id: "software-web", label: "Software & Web Core", icon: Code2 },
  { id: "apps-mobile", label: "Applications & Storefronts", icon: Smartphone },
  { id: "ai-blockchain", label: "AI, Blockchain & Data", icon: BrainCircuit },
  { id: "security-infra", label: "Resilience & Hosting", icon: ShieldCheck },
];

const techItems = [
  // Cluster 1: Custom Software & Web Development
  { name: "Bespoke Enterprise Systems", cat: "software-web", type: "Custom Software", icon: Layers },
  { name: "Next.js & React Core Architectures", cat: "software-web", type: "Web Development", icon: Code2 },
  { name: "Microservices & Scalable Realities", cat: "software-web", type: "Custom Software", icon: Layers },
  { name: "Traffic & Analytics Funnel Optimization", cat: "software-web", type: "Web Development", icon: Code2 },
  { name: "TypeScript Strict Structure Frameworks", cat: "software-web", type: "Web Development", icon: Code2 },
  { name: "RESTful & GraphQL Legacy Refactoring", cat: "software-web", type: "Custom Software", icon: Layers },

  // Cluster 2: Application Development & Ecommerce Development
  { name: "Flutter & React Native Runtime Engines", cat: "apps-mobile", type: "Application Development", icon: Smartphone },
  { name: "Automated Scaling Storefront Blueprints", cat: "apps-mobile", type: "Ecommerce Development", icon: ShoppingCart },
  { name: "Safe & Secure Native Customer Vaults", cat: "apps-mobile", type: "Application Development", icon: Smartphone },
  { name: "High-Concurrency Checkout Architectures", cat: "apps-mobile", type: "Ecommerce Development", icon: ShoppingCart },
  { name: "Swift & Kotlin Native OS Integrations", cat: "apps-mobile", type: "Application Development", icon: Smartphone },
  { name: "Headless Commerce API Infrastructure", cat: "apps-mobile", type: "Ecommerce Development", icon: ShoppingCart },

  // Cluster 3: Artificial Intelligence, Blockchain Development & Digital Marketing
  { name: "Bespoke LLM & Custom AI/ML Frameworks", cat: "ai-blockchain", type: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Third-Party Tools & API Connectivity", cat: "ai-blockchain", type: "Blockchain Development", icon: Cpu },
  { name: "Automate, Predict & High-Scale Automation", cat: "ai-blockchain", type: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Strategic Converting Marketing Funnels", cat: "ai-blockchain", type: "Digital Marketing", icon: TrendingUp },
  { name: "Smart Contract Logic Arrays (Solidity)", cat: "ai-blockchain", type: "Blockchain Development", icon: Cpu },
  { name: "Vector Database Processing (Pinecone)", cat: "ai-blockchain", type: "Artificial Intelligence", icon: BrainCircuit },

  // Cluster 4: Cyber Resilience Engineering & Web Hosting
  { name: "Zero-Trust System Defense Logic Hardening", cat: "security-infra", type: "Cyber Resilience Engineering", icon: ShieldCheck },
  { name: "Direct Customer Telemetry Pipelines", cat: "security-infra", type: "Web Hosting", icon: Server },
  { name: "Identity & Access Management (IAM/OAuth)", cat: "security-infra", type: "Cyber Resilience Engineering", icon: ShieldCheck },
  { name: "High-Availability Edge-Cached Servers", cat: "security-infra", type: "Web Hosting", icon: Server },
  { name: "Automated Vulnerability Sweep Scans", cat: "security-infra", type: "Cyber Resilience Engineering", icon: ShieldCheck },
  { name: "AWS, Docker & Kubernetes Deployments", cat: "security-infra", type: "Web Hosting", icon: Server }
];

export function ServicesTechDashboard() {
  const [activeTab, setActiveTab] = useState("software-web");

  const filteredTech = techItems.filter((item) => item.cat === activeTab);

  return (
    <section className="relative w-full bg-[#fcfdfe] text-slate-900 pt-4 pb-14 px-4 sm:px-8 lg:px-12 select-none overflow-hidden border-t border-b border-slate-100">
      
      {/* Structural Minimalist Ambient Grid Dot Canvas Layout */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      
      {/* 1240px Horizon Constraint Layout Framework */}
      <div className="mx-auto w-full max-w-[1240px] space-y-12 relative z-10">
        
        {/* ================= HEADER SECTIONS ================= */}
        <div className="text-center space-y-3.5 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a]">
            Our Core Technology Matrix
          </h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Select a specialized core division below to view the verified tools, logic modules, and guidelines our engineering groups deploy.
          </p>
        </div>

        {/* ================= SMART RESPONSIVE CONTROL TAB MATRIX ================= */}
        {/* - flex-wrap forces items to gracefully drop onto separate lines below md screen limits
          - md:flex-nowrap instantly realigns all items into a single row on md viewports and above
        */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="p-2 bg-white/80 border border-slate-200/60 rounded-2xl flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-1.5 backdrop-blur-md">
            {categories.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer select-none shrink-0 transform-gpu active:scale-[0.98] ${
                    isSelected
                      ? "bg-[#0c194a] text-white shadow-[0_12px_25px_rgba(12,25,74,0.12)] scale-[1.01]"
                      : "text-slate-500 hover:text-[#08112a] hover:bg-slate-50"
                  }`}
                >
                  <Icon size={14} className={isSelected ? "text-blue-400" : "text-slate-400"} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 4-COLUMN RESPONSIVE LAYOUT MATRIX ================= */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full pt-2 min-h-[180px]">
          {filteredTech.map((item) => {
            const CustomIcon = item.icon;
            
            return (
              <div 
                key={item.name} 
                className="group relative transition-all duration-300 pr-1.5 pb-1.5"
              >
                {/* Offset Dark Navy Shadow Block */}
                <div className="absolute inset-0 bg-[#09153d] rounded-2xl opacity-100 transform translate-x-1.5 translate-y-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none z-0" />
                
                {/* Foreground Card Surface Canvas Layout */}
                <div className="relative w-full h-full bg-white border border-slate-200/80 rounded-2xl p-4.5 flex flex-col justify-between gap-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:border-slate-300 z-10 select-none">
                  
                  {/* Top Action Row Header Ribbon */}
                  <div className="flex items-center justify-between w-full">
                    <div className="h-8 w-8 rounded-xl bg-blue-50/80 border border-blue-100/40 flex items-center justify-center text-[#104cba]">
                      <CustomIcon size={14} />
                    </div>
                    <ArrowUpRight size={14} className="text-[#104cba]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Typography Identity Core */}
                  <div className="space-y-2.5 text-left w-full">
                    <span className="inline-block text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-blue-50/50 border border-blue-100/30 text-[#104cba] leading-none">
                      {item.type}
                    </span>
                    
                    <h4 className="text-[14.5px] font-bold text-[#08112a] tracking-tight leading-snug group-hover:text-[#104cba] transition-colors duration-200">
                      {item.name}
                    </h4>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}