"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Cloud, Settings, LayoutDashboard, Clock, Check, Shield, Zap, Mail, Phone, MapPin } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// ======================================================================
// IMAGES MAPPING REFERENCE DIRECTORY ASSETS
// ======================================================================
import demoImg2 from "@/assets/services/web_hosting/demo15-img2.png";
import demoImg4 from "@/assets/services/web_hosting/demo15-img4.png";
import demoImg5 from "@/assets/services/web_hosting/demo15-img5.png";
import demoImg11 from "@/assets/services/web_hosting/demo15-img11.png";
import demoImg12 from "@/assets/services/web_hosting/demo15-img12.png";
import demoImg13 from "@/assets/services/web_hosting/demo15-img13.png";
import demoImg15 from "@/assets/services/web_hosting/demo15-img15.png";
import demoImg1  from "@/assets/services/web_hosting/demo15-img1.png";

// Icons reference sets
import iconFast from "@/assets/services/web_hosting/demo15-Grow-up.svg";
import iconEasy from "@/assets/services/web_hosting/demo15-img1.png";
import iconAffordable from "@/assets/services/web_hosting/demo15-income.svg";
import iconSupport from "@/assets/services/web_hosting/call.svg";

import ser06 from "@/assets/services/web_hosting/Ser06.png";
import ser07 from "@/assets/services/web_hosting/Ser07.png";
import ser08 from "@/assets/services/web_hosting/Ser08.png";

export default function WebHostingOverView() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-white text-slate-900 overflow-x-hidden">
      
      {/* ======================================================================
          SECTION 1: HERO BANNER & MAIN GRID ATTRIBUTES (Top of image_5ec662.jpg)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 bg-white select-none">
        <div className="hidden lg:grid items-center gap-12 grid-cols-2 lg:gap-16 mb-20">
          <div className="flex justify-center lg:justify-start">
            <RevealAnimation direction="left" duration={1.0} delay={0.1} offset={40} animationType="from">
              <div className="relative w-full max-w-[540px] aspect-[1.15/1]">
                <Image src={demoImg2} alt="Web hosting top illustration" fill className="object-contain" priority />
              </div>
            </RevealAnimation>
          </div>
          <div className="max-w-[560px] space-y-6 text-left">
            <RevealAnimation direction="right" duration={0.9} delay={0.1} offset={20} animationType="from">
              <span className="text-sm font-bold tracking-wider text-[#104cba] uppercase block">Cloud & Web Hosting Services</span>
            </RevealAnimation>
            <RevealAnimation direction="right" duration={1.0} delay={0.15} offset={25} animationType="from">
              <h1 className="text-5xl font-black tracking-tight text-[#08112a] leading-tight">Welcome to our <br /> web hosting services</h1>
            </RevealAnimation>
            <RevealAnimation direction="right" duration={1.1} delay={0.2} offset={20} animationType="from">
              <p className="text-base leading-relaxed text-slate-500">Provide reliable, fast, and secure web hosting solutions tailored to ensure your website is always open to your potential clients. Expand parameters smoothly.</p>
            </RevealAnimation>
            <RevealAnimation direction="up" duration={1.0} delay={0.3} offset={15} animationType="from">
              <div className="flex items-center gap-6 pt-2">
                <a href="#pricing" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-7 text-[15px] font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-200">Contact Us</a>
                <div className="text-left"><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call us for details</p><a href="tel:+1234567890" className="text-sm font-bold text-[#08112a] hover:text-[#104cba]">+1 (234) 567-890</a></div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Mobile Viewport Header Alternative */}
        <div className="block lg:hidden w-full text-center space-y-5 mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase block">Cloud & Web Hosting Services</span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#08112a] leading-tight">Welcome to our <br /> web hosting services</h1>
          <p className="text-sm text-slate-500">Provide reliable, fast, and secure web hosting solutions tailored to ensure your website is always open to your potential clients.</p>
          <div className="flex justify-center"><a href="#pricing" className="inline-flex h-11 items-center rounded-xl bg-[#ff5c3d] px-6 text-sm font-bold text-white shadow-md">Contact Us</a></div>
          <div className="flex justify-center pt-2"><div className="relative w-[85vw] sm:w-[360px] aspect-[1.15/1]"><Image src={demoImg2} alt="Hero mobile view" fill className="object-contain" priority /></div></div>
        </div>

        {/* 4 Quadrant Core Feature Block Mapping Matrix */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-4">
          {[
            { title: "Fast And Reliable", desc: "Our high traffic servers are optimized for enterprise applications to ensure continuous uptime metrics.", icon: iconFast },
            { title: "Easy To Use", desc: "Our intuitive framework platforms make it smooth to deploy configurations and manage directories easily.", icon: iconEasy },
            { title: "Affordable Prices", desc: "Transparent billing models and tiers designed perfectly to match scaling architectures without surprises.", icon: iconAffordable },
            { title: "24/7 Support", desc: "Our specialist remote support structure remains awake across all timezones to handle configuration repairs.", icon: iconSupport },
          ].map((feat, index) => (
            <div key={feat.title} className="bg-white rounded-xl p-6 border border-slate-100 shadow-[0_4px_25px_rgba(15,23,42,0.02)] text-center flex flex-col items-center">
              <div className="h-14 w-14 rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-4 border border-slate-100"><Image src={feat.icon} alt={feat.title} className="object-contain" /></div>
              <h3 className="text-base font-bold text-[#08112a] mb-2 tracking-tight">{feat.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================================
          SECTION 2: WHY CHOOSE US INFORMATION ROWS (Second Layer of image)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 bg-white select-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-left max-w-[540px]">
            <span className="text-sm font-bold text-[#104cba] tracking-wider uppercase block">Why Choose our web hosting?</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-tight">Best Reliable Web Hosting Services</h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-500">We provide optimized cloud solutions packed with modern infrastructure capabilities to keep operations streamlined and running flawlessly at scale.</p>
            
            <div className="space-y-5 pt-2">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-sm">01</div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#08112a]">High Performance Servers</h4>
                  <p className="text-sm text-slate-400">Equipped with lightning-fast data throughput interfaces to maintain extreme render performance tracking indices.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-sm">02</div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#08112a]">Security And Backups</h4>
                  <p className="text-sm text-slate-400">Automated redundant isolation layers protect directories natively along with end-to-end SSL keys configuration.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full">
            <div className="relative w-[85vw] sm:w-[460px] aspect-[1.15/1]">
              <Image src={demoImg4} alt="Why choose layout scheme display" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3: NEWSLETTER NEWS SUBSCRIPTION (Third Row of image)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 relative z-10 select-none">
        <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-8 sm:p-12 text-center max-w-[1240px] mx-auto">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"><Image src={demoImg5} alt="deco backdrop link" fill className="object-contain" /></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold text-[#104cba] tracking-wider uppercase block">Affordable pricing hosting !</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08112a] tracking-tight">We Offer Competitive Pricing Plans That Fit <br className="hidden sm:inline" /> Any Budget !</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">Sign up with your structural primary communication coordinates to let our server onboarding architecture match you.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input type="text" placeholder="Your Full Name" className="flex-1 px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-white shadow-sm" />
              <input type="email" placeholder="Your Email Address" className="flex-1 px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-white shadow-sm" />
              <button type="submit" className="px-6 py-3 text-sm font-bold text-white bg-[#ff5c3d] hover:bg-[#e84c2e] rounded-xl shadow-md transition-colors shrink-0">Contact Us</button>
            </form>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4: TRUSTED SERVICES BLUE BANNER STRIP (Fourth Layer of image)
          ====================================================================== */}
      <section className="bg-[#0a0f24] text-white pt-24 pb-48 -mb-32 relative z-0 select-none mt-12">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-blue-500 uppercase tracking-widest block">More Services all around the world</span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Website Hosting Trusted By Thousands</h2>
            <p className="text-xs sm:text-sm text-slate-400">Maximize platform conversion footprints globally inside zero latency servers maps nodes.</p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-slate-950">
            {[
              { title: "24/7 Live Support", image: demoImg11 },
              { title: "Advanced Technologies", image: demoImg12 },
              { title: "Website Migration", image: demoImg13 },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 border border-white/[0.04] shadow-xl flex flex-col items-center">
                <div className="relative w-full h-40 bg-slate-50 rounded-xl mb-4 p-4"><Image src={card.image} alt={card.title} fill className="object-contain p-2" /></div>
                <h4 className="text-base font-bold text-[#08112a] mb-1">{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5: DETAILED PRICING MATRIX PLANS (Fifth Row of image)
          ====================================================================== */}
      <section id="pricing" className="mx-auto max-w-[1240px] px-4 py-16 relative z-10 select-none">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase tracking-wider block">Pricing Plan</span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight">Choose Your Web Hosting Plan</h2>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-stretch max-w-6xl mx-auto">
          {/* Basic Tier Plan */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md flex flex-col justify-between text-center relative">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 relative bg-slate-50 rounded-full p-2"><Image src={ser06} alt="tier pricing basic blueprint marker link" fill className="object-contain p-2" /></div>
              <h3 className="text-xl font-bold text-[#08112a]">Basic Plan</h3>
              <div className="text-3xl font-black text-[#08112a]">$ 1.99 <span className="text-xs text-slate-400 font-normal">/ Month</span></div>
              <div className="h-px bg-slate-100 w-full" />
              <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                <li>1 Website</li><li>50 GB SSD Storage</li><li>Unmetered Bandwidth</li><li>Free SSL Certificate</li><li>1 Domain Registration</li><li>Automated Daily Backups</li><li>Standard Support Channels</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#ff5c3d] hover:bg-[#e84c2e] transition-colors shadow-md">Purchase Basic</button>
          </div>

          {/* Professional Featured Tier Plan */}
          <div className="bg-[#111836] text-white rounded-3xl p-6 shadow-2xl flex flex-col justify-between text-center relative transform lg:-translate-y-4 border border-blue-500/20">
            <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#ff5c3d] text-white font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Popular Choice</span>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 relative bg-white/5 rounded-full p-2"><Image src={ser07} alt="featured configuration matrix icon" fill className="object-contain p-2" /></div>
              <h3 className="text-xl font-bold text-white">Professional Plan</h3>
              <div className="text-3xl font-black text-white">$ 2.99 <span className="text-xs text-slate-400 font-normal">/ Month</span></div>
              <div className="h-px bg-white/10 w-full" />
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li>10 Websites</li><li>150 GB NVMe Storage</li><li>Unlimited Bandwidth parameters</li><li>Free Wildcard SSL Certificate</li><li>Free Domain Registration</li><li>Automated Hourly Backups</li><li>Priority Remote Live chat</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff4722] to-[#ff733b] shadow-md">Purchase Professional</button>
          </div>

          {/* Advanced Extended Tier Plan */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md flex flex-col justify-between text-center relative">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 relative bg-slate-50 rounded-full p-2"><Image src={ser08} alt="advanced service asset track icon marker link" fill className="object-contain p-2" /></div>
              <h3 className="text-xl font-bold text-[#08112a]">Advanced Plan</h3>
              <div className="text-3xl font-black text-[#08112a]">$ 3.99 <span className="text-xs text-slate-400 font-normal">/ Month</span></div>
              <div className="h-px bg-slate-100 w-full" />
              <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                <li>Unlimited Websites</li><li>Unlimited NVMe Storage Matrices</li><li>Unlimited Core Bandwidth</li><li>Free Wildcard SSL Key</li><li>Free Premium Domain</li><li>Continuous Disaster Recovery</li><li>Dedicated On-Call Engineer</li>
              </ul>
            </div>
            <button className="mt-8 w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#ff5c3d] hover:bg-[#e84c2e] transition-colors shadow-md">Purchase Advanced</button>
          </div>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6: INTERACTIVE CONTACT FORM FOOT ROW (Bottom of image)
          ====================================================================== */}
      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8 bg-white select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Detail Segment Column */}
          <div className="lg:col-span-5 space-y-6 text-left lg:pt-4">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase block tracking-wider">Contact Us</span>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight">Get In Touch With Us Today!</h2>
              <p className="text-sm text-slate-400 leading-relaxed">Fill out the coordinate inputs panel matrix box to connect directly with an onboarding technician.</p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3.5 items-center">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-50 text-[#ff5c3d] flex items-center justify-center shadow-sm"><MapPin className="h-5 w-5" /></div>
                <div className="text-sm font-semibold text-slate-600">22354 New York City, Global Core Headquarters Office Row, Building 4</div>
              </div>
              <div className="flex gap-3.5 items-center">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-50 text-[#ff5c3d] flex items-center justify-center shadow-sm"><Mail className="h-5 w-5" /></div>
                <div className="text-sm font-semibold text-slate-600">support@devinnovative.com</div>
              </div>
              <div className="flex gap-3.5 items-center">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-red-50 text-[#ff5c3d] flex items-center justify-center shadow-sm"><Phone className="h-5 w-5" /></div>
                <div className="text-sm font-bold text-[#08112a]">+1 (234) 567-890</div>
              </div>
            </div>
          </div>

          {/* Right Input Mapping Container Card Column */}
          <div className="lg:col-span-7 w-full flex flex-col sm:flex-row gap-6 items-end relative">
            <div className="absolute left-[-40px] bottom-10 z-0 opacity-40 pointer-events-none hidden sm:block"><Image src={demoImg15} alt="deco visual" width={140} className="object-contain" /></div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-xl flex-1 relative z-10 text-left w-full">
              <p className="text-xs font-bold text-[#104cba] uppercase tracking-wider mb-1">Fast Onboarding</p>
              <h3 className="text-xl font-bold text-[#08112a] mb-6">Fill Out The Form & <br /> We Will Get To You !</h3>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-slate-50/50" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-slate-50/50" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-slate-50/50" />
                <textarea rows={3} placeholder="Message" className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] text-slate-800 bg-slate-50/50 resize-none" />
                <button type="submit" className="w-full h-12 inline-flex items-center justify-center rounded-xl bg-[#ff5c3d] text-sm font-bold text-white shadow-md">Contact Us</button>
              </form>
            </div>

            {/* Illustration Graphic aligned cleanly along the base side of form card */}
            <div className="relative w-40 h-56 shrink-0 z-10 hidden sm:block">
              <Image src={demoImg15} alt="Team support character panel vector asset tracking display layout" fill className="object-contain object-bottom" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}