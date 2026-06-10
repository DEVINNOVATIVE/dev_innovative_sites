"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Integrated Next.js Link component for client-side routing
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- IMAGES PATH MAPPING ---
import mainBanner from "@/assets/diana_ai/main.jpeg"; // Note the explicit .jpg file format extension
import loanAsset from "@/assets/diana_ai/loan.png";
import cryptoAsset from "@/assets/diana_ai/crypto.png";

export function DeanaDetail() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Helper component to conditionally wrap children with RevealAnimation
  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };
  return (
    <section className="relative bg-white text-slate-900 py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-12">
        
        {/* ================= 1. TOP MAIN TECH HEADER BANNER ================= */}
        <div className="w-full">
          <ConditionalReveal direction="down" duration={1.1} delay={0.0} offset={35} animationType="from">
            <div className="relative w-full aspect-[2.6/1] rounded-2xl overflow-hidden bg-[#070b19] shadow-xl border border-slate-100">
              <Image
                src={mainBanner}
                alt="Deana AI tech platform neural automation touch interface illustration network mesh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ConditionalReveal>
        </div>


        {/* ================= 2. ANALYSIS LOGICAL READ DOCUMENTATION WRAPPERS ================= */}
        <div className="max-w-4xl space-y-10 pt-4">
          
          <ConditionalReveal direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
            <p className="text-[15px] leading-7 text-slate-500 font-normal">
              <strong className="text-[#08112a] font-extrabold">Deana.AI®</strong> is a virtual assistant that uses GTP-3 and a custom NLP model behind the scenes to understand and execute user commands. Users communicate with Deana.AI® using simple text by email and in messengers and web chatbots.
            </p>
          </ConditionalReveal>

          {/* Section Block: Idea Narrative */}
          <div className="space-y-4">
            <ConditionalReveal direction="down" duration={0.9} delay={0.15} offset={20} animationType="from">
              <h2 className="text-2xl font-black tracking-tight text-[#08112a]">
                Idea
              </h2>
            </ConditionalReveal>

            <ConditionalReveal direction="up" duration={1.0} delay={0.25} offset={30} animationType="from">
              <div className="space-y-4 text-[14px] leading-7 text-slate-400 font-normal">
                <p>
                  Email is a traditional way of digital communication between people in business and everyday life. Services like Gmail and Outlook help us exchange sensitive information and plan activities in advance.
                </p>
                <p>
                  Our idea was to use email to interact with artificial intelligence (AI) and give it commands. Email acts as a communication interface between the user and AI.
                </p>
                <p className="bg-slate-50/70 border-l-2 border-blue-500 p-4 rounded-r-lg text-slate-500 italic text-[13.5px]">
                  For example, you send the AI an email, "lunch with Dave at 5 pm," to have your schedule updated and the invitation sent to Dave. After business lunch with Dave, you email the AI a photo of the restaurant receipt. Then the system automatically recognises the items and amounts on the bill and adds this information to your online expense report. In the end, sending these text commands to the AI takes just 5-10 seconds, saving you much time as you don't have to update your schedule and report yourself.
                </p>
                <p className="text-[#08112a] font-semibold pt-1">
                  Here are a few more use cases for our email-first AI assistant:
                </p>
              </div>
            </ConditionalReveal>
          </div>

          {/* Section Block: Key Features Parameter Deck */}
          <div className="space-y-4 pt-2">
            <ConditionalReveal direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
              <h3 className="text-xl font-black tracking-tight text-[#08112a]">
                Key Features
              </h3>
            </ConditionalReveal>

            <ConditionalReveal direction="up" duration={1.0} delay={0.3} offset={25} animationType="from">
              <div className="space-y-2.5 text-[14px] font-medium text-slate-400 pl-1">
                {[
                  "Plan events and tasks",
                  "Track expenses, bills, invoices, and more",
                  "Manage files stored locally and in the cloud",
                  "Find necessary information on the web (white papers, articles, news)",
                  "Summarise and paraphrase documents",
                  "Find routes and locations on the map"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold tracking-tighter shrink-0 w-4">{idx + 1}.</span>
                    <span className="leading-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </ConditionalReveal>
          </div>

          {/* Section Block: Team Structure Allocations */}
          <div className="space-y-4 pt-2">
            <ConditionalReveal direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
              <h3 className="text-xl font-black tracking-tight text-[#08112a]">
                Team
              </h3>
            </ConditionalReveal>

            <ConditionalReveal direction="up" duration={1.0} delay={0.32} offset={25} animationType="from">
              <div className="space-y-4">
                <p className="text-[14px] leading-relaxed text-slate-400 font-normal">
                  As Dev iNN already had a sufficient experience in AI development, we quickly formed a team that included these roles:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] font-medium text-slate-400 pl-1">
                  {[
                    "Project manager",
                    "Backend AI developer",
                    "Frontend developer",
                    "Data scientist",
                    "Web designer",
                    "QA engineer"
                  ].map((role, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-blue-500 font-bold shrink-0">{idx + 1}.</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ConditionalReveal>
          </div>

          {/* Section Block: NLP Model Details */}
          <div className="space-y-4 pt-2">
            <ConditionalReveal direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
              <h3 className="text-xl font-black tracking-tight text-[#08112a]">
                NLP Model
              </h3>
            </ConditionalReveal>

            <ConditionalReveal direction="up" duration={1.1} delay={0.35} offset={30} animationType="from">
              <div className="space-y-4 text-[14px] leading-7 text-slate-400 font-normal">
                <p>
                  We chose between several NLP models to find the one best fitting our technical expertise and project requirements. After some experiments, we decided on GPT-3 (Generative Pre-trained Transformer 3), which demonstrated the best results in our tests. We programmed in Python and Node.js. We fine-tuned the GPT-3 model in our knowledge domain.
                </p>
                <p>
                  As a result, we created a custom NLP model that ran on Nvidia's GeForce 3000 series GPU. Our model required both automatic and manual correction. Humans analysed the answers generated by the model, found errors, and corrected them to improve the model further. In this way, we minimised errors and improved the model's functioning.
                </p>
              </div>
            </ConditionalReveal>
          </div>

        </div>


        {/* ================= 3. BASELINE NEXT/PREV ROUTER DOCKS ================= */}
        <div className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Portfolio Router Link Container */}
          <ConditionalReveal direction="left" duration={1.0} delay={0.4} offset={25} animationType="from">
            <Link 
              href="/portfolio/loan-app" 
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/50 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-white shadow-inner rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={loanAsset}
                  alt="Loan App Development project snapshot preview card display panel node"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Loan App Development
                </h4>
              </div>
            </Link>
          </ConditionalReveal>

          {/* Next Portfolio Router Link Container */}
          <ConditionalReveal direction="right" duration={1.0} delay={0.4} offset={25} animationType="from">
            <Link 
              href="/portfolio/crypto-app" 
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/50 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="space-y-0.5 text-left order-1 sm:order-none pl-4 sm:pl-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  Next Portfolio <ArrowRight className="h-3 w-3" />
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Crypto App Development
                </h4>
              </div>
              <div className="relative w-16 h-14 bg-white shadow-inner rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={cryptoAsset}
                  alt="Crypto App Development portfolio analytics asset block metric layout data element"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          </ConditionalReveal>

        </div>

      </div>
    </section>
  );
}