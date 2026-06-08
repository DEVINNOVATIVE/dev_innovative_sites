
// "use client";

// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation'; // Adjust path based on your exact tree folder

// import chart from "@/assets/chart.svg";
// import dollar from "@/assets/price.svg";
// import ourSolutionImage from "@/assets/our_solution.png";

// const features = [
//   {
//     title: "Dedicated Developers",
//     description:
//       "Hire a remote web developer with the required skillset and proven record to work alongside your existing in-house team or as a stand-alone unit. Save time on hiring and cut additional costs.",
//     Icon: chart,
//   },
//   {
//     title: "Affordable Prices",
//     description:
//       "Our pricing is transparent and competitive, and we always strive to offer flexible pricing models that can be customized to meet the unique needs of each client. We understand that every project and client is different, which is why we work closely with each client to develop a pricing plan that fits their specific requirements and budget.",
//     Icon: dollar,
//   },
// ];

// export function HomeSolutions() {
//   return (
//     <section className="mx-auto w-full px-4 py-20 sm:px-6 lg:px-8 bg-white" style={{ maxWidth: '1400px' }}>
//       <div className="grid gap-12 items-center lg:grid-cols-[minmax(360px,1.2fr)_minmax(420px,1fr)]">
        
//         {/* --- LEFT COLUMN: CONTENT TEXT & LIST ENTRIES --- */}
//         <RevealAnimation direction="left" duration={1.2} delay={0.1} offset={60} animationType="from">
//           <div className="space-y-6">
//             <p className="text-lg font-bold tracking-wider text-[#104cba] uppercase">
//               Our Solutions
//             </p>
//             <h2 className="text-4xl font-extrabold tracking-tight text-[#08112a] sm:text-5xl leading-tight">
//               Web & Software
//             </h2>
//             <p className="max-w-xl text-base leading-8 text-[#7f8081] sm:text-lg">
//               We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
//             </p>

//             {/* Feature lists rows box wrapper */}
//             <div className="grid gap-6 pt-4">
//               {features.map(({ title, description, Icon }, index) => (
//                 /* Staggering the interior items manually inside the main side container */
//                 <RevealAnimation 
//                   key={title}
//                   direction="up" 
//                   duration={1.0} 
//                   delay={0.3 + index * 0.15} 
//                   offset={40} 
//                   animationType="from"
//                 >
//                   <div className="group flex gap-5 bg-slate-50/50 rounded-xl p-6 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-[0_15px_45px_rgba(15,23,42,0.06)] hover:border-blue-500/20">
//                     <div className="h-16 w-20 shrink-0 relative bg-white rounded-lg p-2 shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-105">
//                       <Image src={Icon} alt={title} fill className="object-contain p-2" />
//                     </div>
//                     <div className="space-y-1.5">
//                       <h3 className="text-lg font-bold text-[#08112a] transition-colors duration-200 group-hover:text-[#104cba]">
//                         {title}
//                       </h3>
//                       <p className="text-sm leading-6 text-[#7f8081] font-normal">
//                         {description}
//                       </p>
//                     </div>
//                   </div>
//                 </RevealAnimation>
//               ))}
//             </div>
//           </div>
//         </RevealAnimation>

//         {/* --- RIGHT COLUMN: VISUAL ARTWORK CANVAS (Slides from Right) --- */}
//         <RevealAnimation direction="right" duration={1.2} delay={0.2} offset={80} animationType="from">
//           <div className="flex justify-center w-full">
//             <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 p-4" style={{ maxWidth: '500px' }}>
//               <div className="relative w-full" style={{ aspectRatio: '9 / 10' }}>
                
//                 {/* The initial entrance position is managed by the RevealAnimation wrapper.
//                   Once inside, the CSS water keyframe routine loops fluidly on scale thresholds.
//                 */}
//                 <Image
//                   src={ourSolutionImage}
//                   alt="Web and software custom strategy illustration"
//                   fill
//                   className="object-contain"
//                   style={{
//                     transform: 'scale(1.15)',
//                     animation: 'water 6s ease-in-out infinite',
//                   }}
//                   priority
//                 />

//                 {/* Seamless clean organic loop parameters */}
//                 <style>{`
//                   @keyframes water {
//                     0%, 100% { transform: scale(1.1) translate(0px, 0px); }
//                     25% { transform: scale(1.12) translate(-8px, 5px); }
//                     50% { transform: scale(1.1) translate(7px, -5px); }
//                     75% { transform: scale(1.12) translate(-5px, -7px); }
//                   }
//                 `}</style>

//               </div>
//             </div>
//           </div>
//         </RevealAnimation>

//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation';

// import chart from "@/assets/chart.svg";
// import dollar from "@/assets/price.svg";
// import ourSolutionImage from "@/assets/our_solution.png";

// const features = [
//   {
//     title: "Dedicated Developers",
//     description:
//       "Hire a remote web developer with the required skillset and proven record to work alongside your existing in-house team or as a stand-alone unit. Save time on hiring and cut additional costs.",
//     Icon: chart,
//   },
//   {
//     title: "Affordable Prices",
//     description:
//       "Our pricing is transparent and competitive, and we always strive to offer flexible pricing models that can be customized to meet the unique needs of each client. We understand that every project and client is different, which is why we work closely with each client to develop a pricing plan that fits their specific requirements and budget.",
//     Icon: dollar,
//   },
// ];

// export function HomeSolutions() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   // Detect layout scale context cleanly on component initialization mounting phases
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024); // Matching Tailwind's 'lg' standard breakpoint
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-20 bg-white select-none overflow-hidden" style={{ maxWidth: '1400px' }}>
      
//       {/* FIXED RESPONSIVENESS: Stacks perfectly on mobile and splits cleanly starting at lg screens */}
//       <div className="grid grid-cols-1 lg:grid-cols-[minmax(360px,1.2fr)_minmax(420px,1fr)] gap-12 lg:gap-16 items-center">
        
//         {/* ================= LEFT COLUMN: CONTENT TEXT & LIST ENTRIES ================= */}
//         <div className="w-full max-w-3xl mx-auto lg:mx-0">
//           <RevealAnimation direction={isDesktop ? "left" : "up"} duration={1.0} delay={0.1} offset={40} animationType="from">
//             <div className="space-y-6">
//               <p className="text-sm sm:text-base font-bold tracking-wider text-[#104cba] uppercase block">
//                 Our Solutions
//               </p>
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08112a] leading-tight">
//                 Web & Software
//               </h2>
//               <p className="text-[15px] sm:text-base leading-7 sm:leading-8 text-[#7f8081] font-normal">
//                 We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
//               </p>

//               {/* Feature Box Wrap Loop */}
//               <div className="grid gap-6 pt-4 w-full">
//                 {features.map(({ title, description, Icon }, index) => (
//                   <RevealAnimation 
//                     key={title}
//                     direction="up" 
//                     duration={0.9} 
//                     delay={isDesktop ? 0.25 + index * 0.15 : index * 0.1} 
//                     offset={30} 
//                     animationType="from"
//                   >
//                     {/* FIXED RESPONSIVENESS: Flex column on mobile transforms into horizontal row starting at sm screens */}
//                     <div className="group flex flex-col sm:flex-row gap-5 bg-slate-50/60 hover:bg-white rounded-xl p-5 sm:p-6 border border-slate-100/80 hover:border-blue-500/20 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out">
                      
//                       {/* Icon Carrier Box */}
//                       <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 relative bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
//                         <Image src={Icon} alt={title} fill className="object-contain p-2.5" />
//                       </div>

//                       {/* Content block */}
//                       <div className="space-y-1.5 flex-1">
//                         <h3 className="text-[17px] font-bold text-[#08112a] transition-colors duration-300 group-hover:text-[#104cba] tracking-tight">
//                           {title}
//                         </h3>
//                         <p className="text-[14px] leading-6 text-[#7f8081] font-normal">
//                           {description}
//                         </p>
//                       </div>

//                     </div>
//                   </RevealAnimation>
//                 ))}
//               </div>
//             </div>
//           </RevealAnimation>
//         </div>

//         {/* ================= RIGHT COLUMN: VISUAL ARTWORK CANVAS ================= */}
//         <div className="w-full flex justify-center items-center">
//           <RevealAnimation direction={isDesktop ? "right" : "up"} duration={1.0} delay={0.2} offset={40} animationType="from">
            
//             {/* FIXED RESPONSIVENESS: Proportional bounding box adjusts perfectly across devices */}
//             <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 via-slate-50/50 to-blue-50/20 p-4 w-[85vw] sm:w-[420px] lg:w-[480px] aspect-[9/10]">
//               <div className="relative w-full h-full">
//                 <Image
//                   src={ourSolutionImage}
//                   alt="Web and software custom strategy illustration"
//                   fill
//                   className="object-contain"
//                   style={{
//                     transform: 'scale(1.06)',
//                     animation: 'waterFluidMotion 6s ease-in-out infinite',
//                   }}
//                   sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 480px"
//                   priority
//                 />
//               </div>
//             </div>

//           </RevealAnimation>
//         </div>

//       </div>

//       {/* Embedded style elements for layout movement paths */}
//       <style jsx global>{`
//         @keyframes waterFluidMotion {
//           0%, 100% { transform: scale(1.04) translateY(0px) translateX(0px); }
//           33% { transform: scale(1.06) translateY(-6px) translateX(4px); }
//           66% { transform: scale(1.04) translateY(4px) translateX(-4px); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import RevealAnimation from '../animation/RevealAnimation';

import chart from "@/assets/chart.svg";
import dollar from "@/assets/price.svg";
import ourSolutionImage from "@/assets/our_solution.png";

const features = [
  {
    title: "Dedicated Developers",
    description:
      "Hire a remote web developer with the required skillset and proven record to work alongside your existing in-house team or as a stand-alone unit. Save time on hiring and cut additional costs.",
    Icon: chart,
  },
  {
    title: "Affordable Prices",
    description:
      "Our pricing is transparent and competitive, and we always strive to offer flexible pricing models that can be customized to meet the unique needs of each client. We understand that every project and client is different, which is why we work closely with each client to develop a pricing plan that fits their specific requirements and budget.",
    Icon: dollar,
  },
];

export function HomeSolutions() {
  return (
    <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-20 bg-white select-none overflow-hidden" style={{ maxWidth: '1400px' }}>
      
      {/* ======================================================================
          1. DESKTOP LAYER: RICH ANIMATIONS VIA GSAP SCROLLTRIGGER
          ====================================================================== */}
      <div className="hidden lg:grid grid-cols-[minmax(360px,1.2fr)_minmax(420px,1fr)] gap-16 items-center">
        
        {/* Left Column Text Content */}
        <div className="w-full max-w-3xl">
          <RevealAnimation direction="left" duration={1.0} delay={0.1} offset={40} animationType="from">
            <div className="space-y-6">
              <p className="text-base font-bold tracking-wider text-[#104cba] uppercase block">
                Our Solutions
              </p>
              <h2 className="text-5xl font-bold tracking-tight text-[#08112a] leading-tight">
                Web & Software
              </h2>
              <p className="text-base leading-8 text-[#7f8081] font-normal">
                We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
              </p>

              {/* Animated Feature Box Loops */}
              <div className="grid gap-6 pt-4 w-full">
                {features.map(({ title, description, Icon }, index) => (
                  <RevealAnimation 
                    key={title}
                    direction="up" 
                    duration={0.9} 
                    delay={0.25 + index * 0.15} 
                    offset={30} 
                    animationType="from"
                  >
                    <div className="group flex gap-5 bg-slate-50/60 hover:bg-white rounded-xl p-6 border border-slate-100/80 hover:border-blue-500/20 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out">
                      <div className="h-16 w-16 shrink-0 relative bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image src={Icon} alt={title} fill className="object-contain p-2.5" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-[17px] font-bold text-[#08112a] transition-colors duration-300 group-hover:text-[#104cba] tracking-tight">
                          {title}
                        </h3>
                        <p className="text-[14px] leading-6 text-[#7f8081] font-normal">
                          {description}
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Right Column Artwork Canvas */}
        <div className="w-full flex justify-center items-center">
          <RevealAnimation direction="right" duration={1.0} delay={0.2} offset={40} animationType="from">
            <div className="relative w-[480px] aspect-[9/10] overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 via-slate-50/50 to-blue-50/20 p-4">
              <div className="relative w-full h-full">
                <Image
                  src={ourSolutionImage}
                  alt="Web and software custom strategy illustration"
                  fill
                  className="object-contain"
                  style={{
                    transform: 'scale(1.06)',
                    animation: 'waterFluidMotion 6s ease-in-out infinite',
                  }}
                  sizes="480px"
                />
              </div>
            </div>
          </RevealAnimation>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER: INSTANT STATIC PAINT WITH ZERO FLASHING
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-12">
        
        {/* Top Text Content Block */}
        <div className="w-full max-w-3xl mx-auto space-y-5 text-center sm:text-left">
          <p className="text-sm sm:text-base font-bold tracking-wider text-[#104cba] uppercase block">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#08112a] leading-tight">
            Web & Software
          </h2>
          <p className="text-[14.5px] sm:text-base leading-relaxed text-[#7f8081] font-normal">
            We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
          </p>

          {/* Instant Render Feature Cards Container */}
          <div className="grid gap-5 pt-2 w-full text-left">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 bg-slate-50/60 rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="h-14 w-14 shrink-0 relative bg-white rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                  <Image src={Icon} alt={title} fill className="object-contain p-2" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#08112a] tracking-tight">
                    {title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#7f8081] font-normal">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Static Artwork Frame */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-[85vw] sm:w-[400px] aspect-[9/10] overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/10 p-2">
            <div className="relative w-full h-full">
              <Image
                src={ourSolutionImage}
                alt="Web and software custom strategy illustration mobile context"
                fill
                className="object-contain"
                style={{
                  transform: 'scale(1.04)',
                  animation: 'waterFluidMotion 8s ease-in-out infinite',
                }}
                sizes="(max-width: 640px) 85vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Fluid Floating Global Transforms */}
      <style jsx global>{`
        @keyframes waterFluidMotion {
          0%, 100% { transform: scale(1.04) translateY(0px) translateX(0px); }
          33% { transform: scale(1.06) translateY(-5px) translateX(3px); }
          66% { transform: scale(1.04) translateY(3px) translateX(-3px); }
        }
      `}</style>
    </section>
  );
}