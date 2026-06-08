// import Image from "next/image";
// import comprehensiveImg from "@/assets/comprehensive.webp"; // Picked from your assets folder

// const metrics = [
//   { label: "Business Goal", percentage: "65%" },
//   { label: "Traffic Growth", percentage: "90%" },
//   { label: "Competitor Research", percentage: "75%" },
// ];

// export function ComprehensiveSolution() {
//   return (
//     <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 text-slate-900">
//       <div className="relative z-10 mx-auto max-w-[1240px]">
//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
//           {/* --- LEFT COLUMN: IMAGE WITH LIQUID WATER RIPPLE ANIMATION --- */}
//           <div className="relative flex justify-center lg:justify-start">
//             {/* 
//               This outer wrapper replicates the exact organic, fluid circular cut-out ring 
//               from image_8eba42.jpg using a complex border-radius and water wave animation 
//             */}
//             <div 
//               className="relative w-full max-w-[480px] aspect-[1/1] overflow-hidden p-3 bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-400 shadow-[0_20px_50px_rgba(59,130,246,0.15)] animate-[water_14s_ease-in-out_infinite]"
//               style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//             >
//               {/* Inner container that follows the same liquid mask shape */}
//               <div 
//                 className="relative w-full h-full overflow-hidden bg-slate-100"
//                 style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//               >
//                 <Image
//                   src={comprehensiveImg}
//                   alt="Empowering businesses team discussion solutions"
//                   fill
//                   className="object-cover object-center scale-110"
//                   priority
//                 />
//               </div>
//             </div>

//             {/* Blurred background glow accent to intensify the water shape depth */}
//             <div 
//               className="absolute -inset-4 bg-blue-400/20 mix-blend-multiply blur-2xl -z-10 animate-[water_14s_ease-in-out_infinite_reverse]"
//               style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//             />
//           </div>

//           {/* --- RIGHT COLUMN: COPY CONTENT & PROGRESS TRACKS --- */}
//           <div className="space-y-6 max-w-xl">
//             <div className="space-y-3">
//               <span className="text-xl font-bold  text-[#104cba]">
//                 Comprehensive Suite of Solutions
//               </span>
//               <h2 className="text-2xl mt-4 font-semibold  text-slate-900 sm:text-3xl lg:text-4xl leading-12">
//                 Empowering Businesses With Perfect Technology Solutions
//               </h2>
//             </div>

//             <p className="text-base leading-8 text-slate-500 font-normal">
//               We understand businesses have unique needs and challenges. That’s why we
//               specialize in providing perfect technology solutions that help these businesses
//               succeed.
//             </p>

//             {/* Progress Bars Container */}
//             <div className="pt-4 space-y-6">
//               {metrics.map((item) => (
//                 <div key={item.label} className="space-y-2">
//                   <div className="flex justify-between text-lg font-bold ">
//                     <span className="font-semibold text-slate-500">{item.label}</span>
//                     <span className="font-normal text-slate-500">{item.percentage}</span>
//                   </div>
                  
//                   {/* Progress bar track line */}
//                   <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
//                     {/* Active progress color matching the exact shade from image_8eba42.jpg */}
//                     <div 
//                       className="h-full rounded-full bg-gradient-to-r from-[#ff5c3d] to-orange-500 transition-all duration-1000 ease-out"
//                       style={{ width: item.percentage }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* --- INLINE KEYFRAMES FOR THE AUTOMATIC WATER LIQUID ROTATION --- */}
//       <style>{`
//         @keyframes water {
//           0%, 100% {
//             border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
//             transform: rotate(0deg) scale(1);
//           }
//           34% {
//             border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%;
//             transform: rotate(2deg) scale(1.01);
//           }
//           66% {
//             border-radius: 50% 50% 30% 70% / 40% 60% 40% 60%;
//             transform: rotate(-2deg) scale(0.99);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation';

// import comprehensiveImg from "@/assets/comprehensive.webp";

// const metrics = [
//   { label: "Business Goal", percentage: "65%" },
//   { label: "Traffic Growth", percentage: "90%" },
//   { label: "Competitor Research", percentage: "75%" },
// ];

// export function ComprehensiveSolution() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Parse layout coordinate thresholds cleanly during initialization mount phases
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024); // Maps neatly to Tailwind's 'lg' breakpoint
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-white px-4 sm:px-8 lg:px-10 py-20 text-slate-900 select-none">
//       <div className="relative z-10 mx-auto max-w-[1240px]">
        
//         {/* FIXED RESPONSIVENESS: Grid stacks cleanly on mobile viewports and transitions to side-by-side above lg */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* ================= LEFT COLUMN: IMAGE WITH LIQUID WATER RIPPLE ANIMATION ================= */}
//           <div className="relative flex justify-center lg:justify-start w-full order-first">
//             <RevealAnimation direction={isDesktop ? "left" : "up"} duration={1.0} delay={0.1} offset={40} animationType="from">
              
//               {/* FIXED FLUID WIDTH MATRIX: Wrapped inside a single node structure */}
//               <div className="relative">
//                 <div 
//                   className="relative w-[80vw] h-[80vw] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] overflow-hidden p-2.5 sm:p-3 bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-400 shadow-[0_20px_50px_rgba(59,130,246,0.12)] animate-[waterFluidLoop_14s_ease-in-out_infinite] shrink-0"
//                   style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//                 >
//                   {/* Inner container that follows the same liquid mask shape */}
//                   <div 
//                     className="relative w-full h-full overflow-hidden bg-slate-100"
//                     style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//                   >
//                     <Image
//                       src={comprehensiveImg}
//                       alt="Empowering businesses team discussion solutions strategy viewport"
//                       fill
//                       className="object-cover object-center scale-110"
//                       sizes="(max-width: 640px) 80vw, (max-width: 1024px) 400px, 460px"
//                       priority
//                     />
//                   </div>
//                 </div>

//                 {/* Blurred background glow accent to intensify the water shape depth */}
//                 <div 
//                   className="absolute -inset-2 sm:-inset-4 bg-blue-400/20 mix-blend-multiply blur-2xl -z-10 animate-[waterFluidLoop_14s_ease-in-out_infinite_reverse]"
//                   style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//                 />
//               </div>

//             </RevealAnimation>
//           </div>

//           {/* ================= RIGHT COLUMN: COPY CONTENT & PROGRESS TRACKS ================= */}
//           <div className="w-full mx-auto max-w-xl lg:max-w-none text-left">
//             <RevealAnimation direction={isDesktop ? "right" : "up"} duration={1.0} delay={0.2} offset={40} animationType="from">
              
//               {/* FIXED PROPS EXPECTATION: Enclosed inside a single core parent div shell to safely receive class injection */}
//               <div className="space-y-6">
                
//                 {/* Unified header block containing descriptive elements */}
//                 <div className="space-y-3">
//                   <span className="text-sm sm:text-base font-bold text-[#104cba] tracking-wider uppercase block">
//                     Comprehensive Suite of Solutions
//                   </span>
//                   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-snug pt-1">
//                     Empowering Businesses With Perfect Technology Solutions
//                   </h2>
//                 </div>

//                 <p className="text-[14.5px] sm:text-base leading-7 sm:leading-8 text-slate-500 font-normal">
//                   We understand businesses have unique needs and challenges. That’s why we
//                   specialize in providing perfect technology solutions that help these businesses
//                   succeed.
//                 </p>

//                 {/* Progress Bars Container */}
//                 <div className="pt-2 space-y-5 w-full">
//                   {metrics.map((item, metricIdx) => (
//                     <RevealAnimation 
//                       key={item.label}
//                       direction="up" 
//                       duration={0.85} 
//                       delay={0.35 + metricIdx * 0.12} 
//                       offset={20} 
//                       animationType="from"
//                     >
//                       <div className="space-y-2 w-full">
//                         <div className="flex justify-between text-sm sm:text-base font-bold">
//                           <span className="font-bold text-slate-600 tracking-tight">{item.label}</span>
//                           <span className="font-semibold text-[#104cba]">{item.percentage}</span>
//                         </div>
                        
//                         {/* Progress bar track line */}
//                         <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200/20">
//                           <div 
//                             className="h-full rounded-full bg-gradient-to-r from-[#ff5c3d] to-orange-500 transition-all duration-1000 ease-out"
//                             style={{ width: item.percentage }}
//                           />
//                         </div>
//                       </div>
//                     </RevealAnimation>
//                   ))}
//                 </div>

//               </div>
//             </RevealAnimation>
//           </div>

//         </div>
//       </div>

//       {/* ================= INLINE ANIMATION PARAMETERS STYLES ================= */}
//       <style jsx global>{`
//         @keyframes waterFluidLoop {
//           0%, 100% {
//             border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
//             transform: rotate(0deg) scale(1);
//           }
//           34% {
//             border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%;
//             transform: rotate(1.5deg) scale(1.005);
//           }
//           66% {
//             border-radius: 50% 50% 30% 70% / 40% 60% 40% 60%;
//             transform: rotate(-1.5deg) scale(0.995);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import RevealAnimation from '../animation/RevealAnimation';

import comprehensiveImg from "@/assets/comprehensive.webp";

const metrics = [
  { label: "Business Goal", percentage: "65%" },
  { label: "Traffic Growth", percentage: "90%" },
  { label: "Competitor Research", percentage: "75%" },
];

export function ComprehensiveSolution() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-8 lg:px-10 py-20 text-slate-900 select-none">
      <div className="relative z-10 mx-auto max-w-[1240px]">
        
        {/* ======================================================================
            1. DESKTOP LAYER: GSAP ANIMATED WITH DIRECTIONAL PATHS
            ====================================================================== */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Animated Liquid Water Image Canvas */}
          <div className="relative flex justify-center lg:justify-start w-full">
            <RevealAnimation direction="left" duration={1.0} delay={0.1} offset={40} animationType="from">
              <div className="relative">
                <div 
                  className="relative w-[460px] h-[460px] overflow-hidden p-3 bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-400 shadow-[0_20px_50px_rgba(59,130,246,0.12)] animate-[waterFluidLoop_14s_ease-in-out_infinite] shrink-0"
                  style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
                >
                  <div 
                    className="relative w-full h-full overflow-hidden bg-slate-100"
                    style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
                  >
                    <Image
                      src={comprehensiveImg}
                      alt="Empowering businesses team discussion solutions strategy viewport"
                      fill
                      className="object-cover object-center scale-110"
                      sizes="460px"
                    />
                  </div>
                </div>

                <div 
                  className="absolute -inset-4 bg-blue-400/20 mix-blend-multiply blur-2xl -z-10 animate-[waterFluidLoop_14s_ease-in-out_infinite_reverse]"
                  style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
                />
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Copywriting Content & Staggered Progress Bars */}
          <div className="w-full text-left space-y-6">
            <div className="space-y-3">
              <span className="text-base font-bold text-[#104cba] tracking-wider uppercase block">
                Comprehensive Suite of Solutions
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-snug pt-1">
                Empowering Businesses With Perfect Technology Solutions
              </h2>
            </div>

            <p className="text-base leading-8 text-slate-500 font-normal">
              We understand businesses have unique needs and challenges. That’s why we
              specialize in providing perfect technology solutions that help these businesses
              succeed.
            </p>

            {/* Progress Bars Stack */}
            <div className="pt-2 space-y-5 w-full">
              {metrics.map((item, metricIdx) => (
                <RevealAnimation 
                  key={item.label}
                  direction="up" 
                  duration={0.85} 
                  delay={0.25 + metricIdx * 0.1} 
                  offset={15} 
                  animationType="from"
                >
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between text-base font-bold">
                      <span className="text-slate-600 tracking-tight">{item.label}</span>
                      <span className="text-[#104cba]">{item.percentage}</span>
                    </div>
                    
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200/20">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-[#ff5c3d] to-orange-500 transition-all duration-1000 ease-out"
                        style={{ width: item.percentage }}
                      />
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

        </div>

        {/* ======================================================================
            2. MOBILE LAYER: INSTANT STATIC PAINT (Under lg Breakpoints)
            ====================================================================== */}
        {/* Avoids JS loop bottlenecks completely on smaller phones, eliminating any flash of white */}
        <div className="block lg:hidden w-full space-y-12">
          
          {/* Top Text Content & Metrics Wrapper */}
          <div className="w-full text-center sm:text-left space-y-5 mx-auto max-w-xl">
            <div className="space-y-2">
              <span className="text-sm sm:text-base font-bold text-[#104cba] tracking-wider uppercase block">
                Comprehensive Suite of Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Empowering Businesses With Perfect Technology Solutions
              </h2>
            </div>

            <p className="text-[14.5px] sm:text-base leading-relaxed text-slate-500 font-normal">
              We understand businesses have unique needs and challenges. That’s why we specialize in providing perfect technology solutions that help these businesses succeed.
            </p>

            {/* Flat Instant Metrics List */}
            <div className="pt-2 space-y-4 w-full">
              {metrics.map((item) => (
                <div key={item.label} className="space-y-1.5 w-full">
                  <div className="flex justify-between text-sm sm:text-base font-bold">
                    <span className="text-slate-600 tracking-tight">{item.label}</span>
                    <span className="text-[#104cba] font-semibold">{item.percentage}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden border border-slate-200/25">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-[#ff5c3d] to-orange-500"
                      style={{ width: item.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Native Floating Liquid Artwork Graphic */}
          <div className="flex justify-center w-full">
            <div className="relative">
              <div 
                className="relative w-[78vw] h-[78vw] sm:w-[350px] sm:h-[350px] overflow-hidden p-2 bg-gradient-to-tr from-blue-600 via-blue-400 to-purple-400 shadow-xl animate-[waterFluidLoop_18s_ease-in-out_infinite]"
                style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
              >
                <div 
                  className="relative w-full h-full overflow-hidden bg-slate-100"
                  style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
                >
                  <Image
                    src={comprehensiveImg}
                    alt="Empowering businesses solution dashboard layout preview"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 78vw, 350px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ================= INLINE ANIMATION PARAMETERS STYLES ================= */}
      <style jsx global>{`
        @keyframes waterFluidLoop {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
            transform: rotate(0deg) scale(1);
          }
          34% {
            border-radius: 70% 30% 52% 48% / 60% 40% 60% 40%;
            transform: rotate(1deg) scale(1.002);
          }
          66% {
            border-radius: 50% 50% 30% 70% / 40% 60% 40% 60%;
            transform: rotate(-1deg) scale(0.998);
          }
        }
      `}</style>
    </section>
  );
}