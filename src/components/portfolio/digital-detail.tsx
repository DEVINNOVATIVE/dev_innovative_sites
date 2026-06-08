"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPLICIT PATH IMPORTS MATCHING YOUR ASSETS SCHEME EXACTLY (image_a95599.png) ---
import mainHero from "@/assets/digital/main.jpeg"; // Note the verified .jpeg extension
import crmAsset from "@/assets/digital/crm.jpeg";   // Note the verified .jpeg extension

export function DigitalMarketingDetail() {
  return (
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* ================= 1. LARGE MARKETING HERO ANALYSIS SHOWCASE ================= */}
        <div className="w-full">
          <RevealAnimation direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
            <div className="relative w-full aspect-[2.1/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
              <Image
                src={mainHero}
                alt="Digital marketing strategy data presentation analytics desk consultation layout"
                fill
                className="object-cover"
                priority
              />
            </div>
          </RevealAnimation>
        </div>

        {/* ================= 2. VERBATIM NARRATIVE CASE STUDIES CONTENT ================= */}
        <div className="max-w-4xl space-y-8 mx-auto">
          
          {/* Main Conceptual Abstract Narrative Intro */}
          <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
            <div className="space-y-4">
              <p className="text-base leading-7 text-slate-500 font-normal">
                Our company has a proven track record of providing the best digital marketing services to our clients across industries. We help businesses to achieve their marketing goals by providing a comprehensive range of services including search engine optimization, social media marketing, pay-per-click advertising, content marketing, email marketing, and more.
              </p>
            </div>
          </RevealAnimation>

          {/* Detailed Project Case Records Stack */}
          <div className="space-y-8">
            
            {/* Case Study 01: Fashion E-Commerce */}
            <RevealAnimation direction="up" duration={1.0} delay={0.15} offset={25} animationType="from">
              <div className="space-y-2">
                <p className="text-base leading-7 text-slate-500 font-normal">
                  A fashion e-commerce brand approached us for increasing their online presence and sales. We developed a tailor-made digital marketing strategy for them that included a combination of SEO, social media marketing, and email marketing. As a result, their website traffic increased by 200% and their sales grew by 300%.
                </p>
              </div>
            </RevealAnimation>

            {/* Case Study 02: B2B Software Company */}
            <RevealAnimation direction="up" duration={1.0} delay={0.2} offset={25} animationType="from">
              <div className="space-y-2">
                <p className="text-base leading-7 text-slate-500 font-normal">
                  A B2B software company wanted to increase their visibility in the market and generate leads. We developed a targeted content marketing strategy for them that included blog posts, whitepapers, and case studies. This resulted in a 150% increase in website traffic and a 50% increase in lead generation.
                </p>
              </div>
            </RevealAnimation>

            {/* Case Study 03: Food Delivery Startup */}
            <RevealAnimation direction="up" duration={1.0} delay={0.25} offset={25} animationType="from">
              <div className="space-y-2">
                <p className="text-base leading-7 text-slate-500 font-normal">
                  A startup in the food delivery industry approached us for help with their social media marketing. We developed a strategy that included running paid ads on Facebook and Instagram, as well as influencer marketing. As a result, they were able to reach a wider audience and increase their customer base by 40%.
                </p>
              </div>
            </RevealAnimation>

          </div>

          {/* Outro Summary Conclusion Paragraph */}
          <RevealAnimation direction="up" duration={1.0} delay={0.3} offset={25} animationType="from">
            <div className="pt-2">
              <p className="text-base leading-7 text-slate-500 font-normal">
                Our team of experts uses the latest digital marketing tools and techniques to deliver measurable results to our clients. Contact us today to discuss your digital marketing needs and how we can help you achieve your business goals.
              </p>
            </div>
          </RevealAnimation>

        </div>

        {/* ================= 3. BASELINE PREVIOUS ROUTER NAVIGATION DOCK ================= */}
        <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-start gap-6">
          
          {/* Linked Target: Previous Case Study Link Container */}
          <RevealAnimation direction="left" duration={1.0} delay={0.35} offset={25} animationType="from">
            <Link 
              href="/portfolio/custom-crm"
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={crmAsset}
                  alt="Custom CRM Development interface analytical dashboard tracking preview thumbnail"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Custom CRM Development
                </h4>
              </div>
            </Link>
          </RevealAnimation>

        </div>

      </div>
    </section>
  );
}