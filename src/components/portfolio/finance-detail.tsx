"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPLICIT PATH IMPORTS MATCHING YOUR ASSETS SCHEME (image_b5b61f.png) ---
import mainHero from "@/assets/finance/main.jpeg"; // Note the explicit .jpeg format
import recommerseAsset from "@/assets/finance/recommerce.png"; // Note the unique .png format
import webAsset from "@/assets/finance/web.jpeg"; // Note the explicit .jpeg format

export function FinanceDetail() {
  return (
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-12">
        
        {/* ================= 1. TOP MAIN FINANCE HERO BANNER ================= */}
        <div className="w-full">
          <RevealAnimation direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
            <div className="relative w-full aspect-[2.35/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
              <Image
                src={mainHero}
                alt="Finance website slider quick solutions layout preview banner"
                fill
                className="object-cover"
                priority
              />
            </div>
          </RevealAnimation>
        </div>

        {/* ================= 2. VERBATIM ANALYSIS CASE CORE WRAPPER ================= */}
        <div className="max-w-4xl space-y-8 pt-4 mx-auto">
          
          {/* Main Context Overview Intro */}
          <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
            <p className="text-base leading-7 text-slate-500 font-normal">
              Our team of experienced developers worked closely with our client to ensure that the website's design and functionality met their unique needs and requirements. We employed the latest technology and best practices in web development to create a seamless user experience that allows visitors to easily navigate the site and access the information they need.
            </p>
          </RevealAnimation>

          {/* Core Feature Matrix Log Block */}
          <div className="space-y-6">
            
            {/* Feature Item 1 */}
            <div className="space-y-1">
              <RevealAnimation direction="down" duration={0.9} delay={0.15} offset={20} animationType="from">
                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                  Customizable dashboard
                </h3>
              </RevealAnimation>
              <RevealAnimation direction="up" duration={1.0} delay={0.2} offset={20} animationType="from">
                <p className="text-base leading-7 text-slate-400 font-normal">
                  Users can personalize their dashboard with the information and tools that are most relevant to their needs.
                </p>
              </RevealAnimation>
            </div>

            {/* Feature Item 2 */}
            <div className="space-y-1">
              <RevealAnimation direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
                <h3 className="text-lg font-bold    tracking-tight text-[#08112a]">
                  Advanced search functionality
                </h3>
              </RevealAnimation>
              <RevealAnimation direction="up" duration={1.0} delay={0.25} offset={20} animationType="from">
                <p className="text-base leading-7 text-slate-400 font-normal">
                  Visitors can search for financial data and analysis by ticker symbol, company name, or keyword.
                </p>
              </RevealAnimation>
            </div>

            {/* Feature Item 3 */}
            <div className="space-y-1">
              <RevealAnimation direction="down" duration={0.9} delay={0.22} offset={20} animationType="from">
                <h3 className="text-lg font-bold    tracking-tight text-[#08112a]">
                  Real-time market data
                </h3>
              </RevealAnimation>
              <RevealAnimation direction="up" duration={1.0} delay={0.28} offset={20} animationType="from">
                <p className="text-base leading-7 text-slate-400 font-normal">
                  The site features real-time updates on stock prices, market trends, and economic indicators.
                </p>
              </RevealAnimation>
            </div>

            {/* Feature Item 4 */}
            <div className="space-y-1">
              <RevealAnimation direction="down" duration={0.9} delay={0.25} offset={20} animationType="from">
                <h3 className="text-lg font-bold    tracking-tight text-[#08112a]">
                  Interactive charts and graphs
                </h3>
              </RevealAnimation>
              <RevealAnimation direction="up" duration={1.0} delay={0.32} offset={20} animationType="from">
                <p className="text-base leading-7 text-slate-400 font-normal">
                  Users can easily visualize financial data with interactive charts and graphs that can be customized to their preferences.
                </p>
              </RevealAnimation>
            </div>

            {/* Feature Item 5 */}
            <div className="space-y-1">
              <RevealAnimation direction="down" duration={0.9} delay={0.28} offset={20} animationType="from">
                <h3 className="text-lg font-black tracking-tight text-[#08112a]">
                  News and analysis
                </h3>
              </RevealAnimation>
              <RevealAnimation direction="up" duration={1.0} delay={0.35} offset={20} animationType="from">
                <p className="text-base leading-7 text-slate-400 font-normal">
                  The site provides up-to-date news and analysis on the financial markets and individual companies.
                </p>
              </RevealAnimation>
            </div>

          </div>

          {/* Outro Summary Paragraph Context */}
          <RevealAnimation direction="up" duration={1.0} delay={0.4} offset={25} animationType="from">
            <p className="text-base leading-7 text-slate-500 font-normal pt-2">
              Our finance website has received positive feedback from users and industry experts alike, and we are proud to have played a role in its development. We look forward to continuing to provide top-quality website development services to businesses in a variety of industries.
            </p>
          </RevealAnimation>

        </div>

        {/* ================= 3. BASELINE BILATERAL NEXT/PREV ROUTER DOCKS ================= */}
        <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Case Study Link Container */}
          <RevealAnimation direction="left" duration={1.0} delay={0.45} offset={25} animationType="from">
            <Link 
              href="/portfolio/ecommerce-web-app"
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={recommerseAsset}
                  alt="E commerce Web App Development preview dashboard card"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  E commerce Web App Development
                </h4>
              </div>
            </Link>
          </RevealAnimation>

          {/* Next Case Study Link Container */}
          <RevealAnimation direction="right" duration={1.0} delay={0.45} offset={25} animationType="from">
            <Link 
              href="/portfolio/web-development"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block text-right"
            >
              <div className="space-y-0.5 text-left order-1 sm:order-none pl-4 sm:pl-0">
                <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={webAsset}
                  alt="Web Development responsive cross platform layouts representation"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  Next Portfolio <ArrowRight className="h-3 w-3" />
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Web Development
                </h4>
              </div>
             
            </Link>
          </RevealAnimation>

        </div>

      </div>
    </section>
  );
}