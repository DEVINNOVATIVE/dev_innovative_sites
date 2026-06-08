"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPLICIT PATH IMPORTS MATCHING YOUR ASSETS SCHEME (image_b5a604.png) ---
import img1 from "@/assets/web/img1.jpeg";
import img2 from "@/assets/web/img2.jpeg";
import img3 from "@/assets/web/img3.png";   // Note the .png extension
import img4 from "@/assets/web/img4.jpeg";
import img5 from "@/assets/web/img5.gif";    // Note the .gif extension
import img6 from "@/assets/web/img6.png";   // Note the .png extension
import financeAsset from "@/assets/web/finance.jpeg";
import crmAsset from "@/assets/web/crm.jpeg";

const showcaseWebsites = [
  { id: "voyageur", img: img6, alt: "The Adventure of a Lifetime Awaits You - Voyageur Lodge" },
  { id: "minnesota", img: img2, alt: "Minnesota Residential & Commercial Electric Company" },
  { id: "journey", img: img1, alt: "Your Extraordinary Journey Begins Here" },
  { id: "gonyea", img: img4, alt: "Custom Home Builder - Gonyea" },
  { id: "instinct", img: img5, alt: "We Help Dogs and Humans Live Happier Lives Together - Instinct" },
  { id: "casario", img: img3, alt: "Casa Rio Exceptional Tex-Mex Cuisine" },
];

export function WebDetail() {
  return (
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* ================= 1. MULTI-PROJECT WEB DISPLAY GRID ================= */}
        <div className="grid gap-8 sm:grid-cols-2 items-center">
          {showcaseWebsites.map((site, index) => (
            <RevealAnimation 
              key={site.id}
              direction={index % 2 === 0 ? "left" : "right"} 
              duration={1.1} 
              delay={index * 0.1} 
              offset={40} 
              animationType="from"
            >
              <div className="relative w-full aspect-[1.48/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={site.img}
                  alt={site.alt}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* ================= 2. VERBATIM TEXT NARRATIVE DESCRIPTION ================= */}
        <div className="max-w-4xl space-y-6 pt-4">
          <RevealAnimation direction="up" duration={1.0} delay={0.2} offset={30} animationType="from">
            <div className="space-y-6 text-base leading-7 text-slate-400 font-normal">
              <p>
                Our company has a rich portfolio of web development projects for numerous companies. We have been providing top-notch web development services to our clients for several years, and our expertise in the field is unmatched. Some of the notable companies for which we have provided web development solutions include
              </p>
              <p>
                At our company, we are committed to delivering high-quality web development solutions that meet the specific needs of our clients. We work closely with our clients to understand their requirements and create custom web solutions that are tailored to their unique business needs. Contact us today to discuss your web development project and see how we can help your business grow.
              </p>
            </div>
          </RevealAnimation>
        </div>

        {/* ================= 3. BASELINE BILATERAL NEXT/PREV ROUTER DOCKS ================= */}
        <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Portfolio Link Container */}
          <RevealAnimation direction="left" duration={1.0} delay={0.3} offset={25} animationType="from">
            <Link 
              href="/portfolio/finance-website"
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={financeAsset}
                  alt="Finance Website case study thumbnail"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Finance Website
                </h4>
              </div>
            </Link>
          </RevealAnimation>

          {/* Next Portfolio Link Container */}
          <RevealAnimation direction="right" duration={1.0} delay={0.3} offset={25} animationType="from">
            <Link 
              href="/portfolio/custom-crm"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block text-right"
            >
              <div className="space-y-0.5 text-left order-1 sm:order-0 pl-4 sm:pl-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  Next Portfolio <ArrowRight className="h-3 w-3" />
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Custom CRM Development
                </h4>
              </div>
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={crmAsset}
                  alt="Custom CRM Development interface panel node"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>
          </RevealAnimation>

        </div>

      </div>
    </section>
  );
}