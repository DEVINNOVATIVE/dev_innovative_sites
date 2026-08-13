"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped with your original filenames
import uiScreenPurple from "@/assets/services/application_developement/home-18-2x-06-min.png";
import uiScreenWhite from "@/assets/services/application_developement/home-18-2x-07-min.png";
import imgStatsTeam1 from "@/assets/services/application_developement/home-18-2x-08-min.png";
import imgStatsTeam2 from "@/assets/services/application_developement/sounds-like-softek.png";
import cryptoCardBadge from "@/assets/services/application_developement/home-18-2x-09-min.png";
import trustedPeopleBadge from "@/assets/services/application_developement/home-18-2x-10-min.png";
import worldBrandsBadge from "@/assets/services/application_developement/world-class-brands.png";
import dotPattern from "@/assets/services/application_developement/dot-18.png";
import Link from "next/link";

export function AppDevelopmentTechAndOS() {
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
    <div className="w-full bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          SECTION 1: ANDROID & IOS DEVELOPMENT SECTION (image_5ce97f.png)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Column: Context Content Blocks */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-[540px] mx-auto lg:mx-0">
            
            {/* Desktop Reveal Paths */}
            <div className="hidden lg:block space-y-4">
              <ConditionalReveal direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Let's Collaborate to Build Your App
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Android & IOS Development
                </h2>
              </ConditionalReveal>
              
              <ConditionalReveal direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-[14.5px] leading-relaxed text-slate-500 font-normal">
                  Our company provides custom mobile application development services for both Android and iOS frameworks. We have a proven track record of creating customer-centric, lightweight apps that match your exact business operational metrics.
                </p>
              </ConditionalReveal>
            </div>

            {/* Mobile Title View Block */}
            <div className="block lg:hidden text-center sm:text-left space-y-3">
              <span className="text-xs font-bold tracking-wider text-[#104cba] uppercase block">
                Let's Collaborate to Build Your App
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#08112a] leading-tight">
                Android & IOS Development
              </h2>
              <p className="text-[14px] leading-relaxed text-slate-500 font-normal">
                Our company provides custom mobile application development services for both Android and iOS frameworks.
              </p>
            </div>

            {/* Structured Process List Row Elements */}
            <div className="space-y-6 pt-2">
              
              {/* Process Row 1 */}
              <div className="h-full">
                <div className="hidden lg:block">
                  <ConditionalReveal direction="up" duration={0.85} delay={0.35} offset={15} animationType="from">
                    <div className="flex gap-4 items-start group">
                      <div className="h-9 w-9 shrink-0 rounded-full bg-[#104cba] text-white flex items-center justify-center font-bold text-xs shadow-sm shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110">
                        1
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors">Design UI & UX</h4>
                        <p className="text-[13.5px] leading-relaxed text-slate-400">Experienced designers craft intuitive interfaces that align with your business branding rules across all device viewports.</p>
                      </div>
                    </div>
                  </ConditionalReveal>
                </div>
                
                <div className="block lg:hidden">
                  <div className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-transform duration-200 active:scale-[0.98]">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-[#104cba] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      1
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Design UI & UX</h4>
                      <p className="text-[13px] leading-relaxed text-slate-400">Experienced designers craft intuitive interfaces that align with your business branding rules.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Row 2 */}
              <div className="h-full">
                <div className="hidden lg:block">
                  <ConditionalReveal direction="up" duration={0.85} delay={0.45} offset={15} animationType="from">
                    <div className="flex gap-4 items-start group">
                      <div className="h-9 w-9 shrink-0 rounded-full bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center font-bold text-xs transition-transform duration-300 group-hover:scale-110">
                        2
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-[#08112a] tracking-tight group-hover:text-[#104cba] transition-colors">High Security</h4>
                        <p className="text-[13.5px] leading-relaxed text-slate-400">We incorporate native encryption protocols into backend connection logic, ensuring user confidential data is well protected.</p>
                      </div>
                    </div>
                  </ConditionalReveal>
                </div>

                <div className="block lg:hidden">
                  <div className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-2xl border border-slate-100 transition-transform duration-200 active:scale-[0.98]">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm sm:text-base font-bold text-[#08112a]">High Security</h4>
                      <p className="text-[13px] leading-relaxed text-slate-400">We incorporate native encryption protocols into backend connection logic, ensuring user confidential data is well protected.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Layered Device Mockup App UI Layouts */}
          <div className="lg:col-span-6 flex justify-center items-center relative h-[420px] sm:h-[480px] w-full mt-8 lg:mt-0">
            <div className="absolute inset-0 m-auto w-72 h-72 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* White App Screen Layer */}
            <div className="absolute left-[8%] sm:left-[15%] bottom-[5%] w-[190px] sm:w-[220px] aspect-[0.52/1] z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.05)] transform -rotate-[6deg] origin-bottom-left transition-transform duration-500 lg:hover:rotate-0">
              <Image src={uiScreenWhite} alt="White application component mock preview" fill className="object-contain" priority />
            </div>

            {/* Purple App Screen Layer */}
            <div className="absolute right-[8%] sm:right-[15%] top-[5%] w-[190px] sm:w-[220px] aspect-[0.52/1] z-20 drop-shadow-[0_20px_45px_rgba(8,17,42,0.12)] transform rotate-[4deg] transition-transform duration-500 lg:hover:rotate-0 animate-[subtleTiltFloat_6s_ease-in-out_infinite]">
              <Image src={uiScreenPurple} alt="Purple payment application mockup screen view" fill className="object-contain" priority />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================================
          SECTION 2: CUTTING-EDGE TECHNOLOGY & STATS BLOCK (image_5ce9a7.png)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Graphic Layer Component Split */}
          <div className="lg:col-span-6 flex justify-center relative w-full h-[400px] sm:h-[460px]">
            <div className="absolute top-[10%] right-[15%] w-20 h-20 opacity-30 pointer-events-none hidden sm:block">
              <Image src={dotPattern} alt="Dot matrix graphic pattern texture" fill className="object-contain" />
            </div>

            <div 
              className="absolute left-[5%] top-0 w-[240px] sm:w-[280px] aspect-square overflow-hidden shadow-md"
              style={{ clipPath: "polygon(30% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%, 0% 30%)", borderRadius: "32px" }}
            >
              <Image src={imgStatsTeam1} alt="Application builders programming layout workflow" fill className="object-cover" />
            </div>

            <div className="absolute left-[2%] top-[8%] z-30 w-[110px] sm:w-[130px] h-[55px] drop-shadow-md animate-[badgeFloat_5s_ease-in-out_infinite]">
              <Image src={cryptoCardBadge} alt="Crypto validation tracking ledger micro element" fill className="object-contain" />
            </div>

            <div className="absolute left-[18%] bottom-[28%] sm:bottom-[32%] lg:bottom-[28%] z-30 w-[90px] sm:w-[100px] h-[100px] drop-shadow-md">
              <Image src={trustedPeopleBadge} alt="Five star customer approval status card badge" fill className="object-contain" />
            </div>

            <div 
              className="absolute right-[5%] bottom-2 w-[240px] sm:w-[280px] aspect-square overflow-hidden shadow-md"
              style={{ clipPath: "polygon(0% 20%, 80% 0%, 100% 30%, 100% 100%, 20% 100%, 0% 70%)", borderRadius: "32px" }}
            >
              <Image src={imgStatsTeam2} alt="App UI interface audit analysis session group" fill className="object-cover" />
            </div>

            <div className="absolute right-[30%] bottom-[2%] sm:bottom-[8%] lg:bottom-[2%] z-30 w-[110px] sm:w-[120px] h-[75px] drop-shadow-md animate-[badgeFloat_5s_ease-in-out_infinite_1s]">
              <Image src={worldBrandsBadge} alt="Fifteen thousand world class brands counter marker layer" fill className="object-contain" />
            </div>
          </div>

          {/* Right Text Data & Statistics Grid Layer */}
          <div className="lg:col-span-6 space-y-8 text-left max-w-[540px] mx-auto lg:mx-0">
            
            {/* Desktop Header Reveal Elements */}
            <div className="hidden lg:block space-y-4">
              <ConditionalReveal direction="right" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase block">
                  Application Technology Solutions
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="right" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
                  Cutting-Edge Technology Solutions For Application Development
                </h2>
              </ConditionalReveal>
              
              <ConditionalReveal direction="right" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal">
                  We are dedicated to providing our clients with the best technology solution frameworks. Our multi-tiered engineering setups are authorized on state-of-the-art server arrays.
                </p>
              </ConditionalReveal>
            </div>

            {/* Mobile Typography Flow */}
            <div className="block lg:hidden text-center sm:text-left space-y-3">
              <span className="text-xs font-bold text-[#104cba] uppercase tracking-wider block">
                Application Technology Solutions
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-[#08112a] tracking-tight leading-tight">
                Cutting-Edge Technology Solutions For Application Development
              </h2>
              <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">
                We are dedicated to providing our clients with the best technology solution frameworks.
              </p>
            </div>

            {/* Dual Column Statistics Card Grid Block */}
            <div className="w-full">
              <div className="hidden lg:block">
                <ConditionalReveal direction="up" duration={1.0} delay={0.4} offset={25} animationType="from">
                  <div className="grid grid-cols-2 gap-6 bg-white border border-slate-100/70 rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(15,23,42,0.02)]">
                    <div className="space-y-2 border-r border-slate-100 pr-2 text-left">
                      <div className="text-3xl sm:text-4xl font-black text-[#ff5c3d] tracking-tight">09+</div>
                      <h5 className="text-sm font-bold text-[#08112a] tracking-tight">Years Of Experience</h5>
                      <p className="text-[12.5px] leading-relaxed text-slate-400 font-normal">Delivering high-quality systems for client business setups globally.</p>
                    </div>
                    <div className="space-y-2 pl-2 text-left">
                      <div className="text-3xl sm:text-4xl font-black text-[#104cba] tracking-tight">98%</div>
                      <h5 className="text-sm font-bold text-[#08112a] tracking-tight">Positive Feedback</h5>
                      <p className="text-[12.5px] leading-relaxed text-slate-400 font-normal">Focus on absolute client satisfaction and long-term tech support pipelines.</p>
                    </div>
                  </div>
                </ConditionalReveal>
              </div>

              <div className="block lg:hidden">
                <div className="grid grid-cols-2 gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm text-left">
                  <div className="space-y-1 border-r border-slate-100 pr-2">
                    <div className="text-2xl font-black text-[#ff5c3d]">09+</div>
                    <h5 className="text-xs font-bold text-[#08112a]">Years Of Experience</h5>
                  </div>
                  <div className="space-y-1 pl-2">
                    <div className="text-2xl font-black text-[#104cba]">98%</div>
                    <h5 className="text-xs font-bold text-[#08112a]">Positive Feedback</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          SECTION 3: TWO-COLUMN SIDE-BY-SIDE CONTACT BANNER SECTION (image_5c8eed.png)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 bg-white select-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Column Content Wrapper: Text and Direct Telephone Row */}
          <div className="space-y-6 text-center lg:text-left max-w-[520px] mx-auto lg:mx-0">
            <div className="hidden lg:block space-y-4">
              <ConditionalReveal direction="left" duration={1.0} delay={0.1} offset={30} animationType="from">
                <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-[#08112a] leading-tight">
                  Are Your Ready To Build <br /> Stunning App Today ?
                </h3>
              </ConditionalReveal>

              <ConditionalReveal direction="left" duration={1.1} delay={0.2} offset={20} animationType="from">
                <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                  <div className="h-11 w-11 rounded-xl bg-red-50 text-[#ff5c3d] flex items-center justify-center shrink-0 shadow-sm animate-pulse">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <a href="tel:+923070761555" className="text-2xl font-black text-slate-700 hover:text-[#104cba] transition-colors tracking-tight">
                    +923070761555
                  </a>
                </div>
              </ConditionalReveal>
            </div>

            {/* Mobile Native Output Configuration */}
            <div className="block lg:hidden space-y-4">
              <h3 className="text-2xl font-black tracking-tight text-[#08112a]">
                Are Your Ready To Build <br /> Stunning App Today ?
              </h3>
              <a href="tel:+923070761555" className="inline-flex items-center gap-3 justify-center px-6 h-12 rounded-xl bg-slate-50 border border-slate-100 text-xl font-black text-[#ff5c3d] w-full max-w-sm">
                <PhoneCall className="h-5 w-5 text-[#ff5c3d]" />
                +923070761555
              </a>
            </div>
          </div>

          {/* Right Column Content Wrapper: Fluid Team Photo with Counter Bubble */}
          <div className="flex flex-col items-center relative w-full pt-4">
            
            {/* Fluid Shape Container Mask */}
            <div 
              className="relative w-[85vw] sm:w-[420px] aspect-[1.1/1] z-10 overflow-hidden shadow-lg animate-[subtleTiltFloat_7s_ease-in-out_infinite]"
              style={{ clipPath: "polygon(0% 15%, 85% 0%, 100% 30%, 100% 100%, 15% 100%, 0% 75%)", borderRadius: "36px" }}
            >
              <Image 
                src={imgStatsTeam2} 
                alt="App solution planning layout meeting group viewport preview" 
                fill 
                className="object-cover object-center scale-105"
              />
            </div>

            {/* Red Floating Brand Bubble Overlay Layer */}
            <div className="absolute left-[5%] sm:left-[12%] bottom-[12%] z-20 w-[115px] sm:w-[125px] h-[75px] drop-shadow-xl animate-[badgeFloat_5s_ease-in-out_infinite]">
              <Image src={worldBrandsBadge} alt="15,000 plus global class brand counter bubble asset" fill className="object-contain" />
            </div>

            {/* Bottom Form Redirect Anchor Button */}
            <div className="mt-8 z-10 w-full max-w-xs sm:max-w-sm flex justify-center lg:justify-end lg:pr-10">
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-xl bg-[#ff5c3d] lg:hover:bg-[#e84c2e] px-8 text-sm font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.97] transition-all"
              >
                Contact Us Today
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Hardware Accelerated Floating CSS Layout Configurations */}
      <style jsx global>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-5px) translateX(-1px); }
        }
        @keyframes subtleTiltFloat {
          0%, 100% { transform: rotate(4deg) translateY(0px); }
          50% { transform: rotate(3deg) translateY(-6px); }
        }
      `}</style>
    </div>
  );
}