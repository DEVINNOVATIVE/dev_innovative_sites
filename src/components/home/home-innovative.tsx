// // import Image from "next/image";
// // import { Briefcase, Settings, BrainCircuit, BarChart3 } from "lucide-react";

// // import innovativeImg from "@/assets/innovative_service.png";

// // const innovativeFeatures = [
// //   {
// //     title: "End-To-End Solutions",
// //     description:
// //       "We offer end-to-end software and IT solutions that cover every aspect of our clients' businesses. From software development to network management, we provide a comprehensive range of services that help businesses succeed.",
// //     Icon: Briefcase,
// //     iconColor: "text-purple-500",
// //     iconBg: "bg-purple-50",
// //   },
// //   {
// //     title: "Innovative Approach",
// //     description:
// //       "Our team of experts is committed to staying up-to-date with the latest technologies and trends in software and IT. We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth.",
// //     Icon: Settings,
// //     iconColor: "text-orange-500",
// //     iconBg: "bg-orange-50",
// //   },
// //   {
// //     title: "Passion For Innovation",
// //     description:
// //       "Our team of experts is passionate about exploring new ideas and developing innovative solutions that help businesses succeed. We believe that creativity is essential to driving growth and staying ahead of the competition.",
// //     Icon: BrainCircuit,
// //     iconColor: "text-emerald-500",
// //     iconBg: "bg-emerald-50",
// //   },
// //   {
// //     title: "Focus On ROI",
// //     description:
// //       "We understand that businesses need to see a return on their investment in software and IT solutions. That's why we focus on developing solutions that deliver measurable results, whether it's improved efficiency, cost savings, or increased revenue.",
// //     Icon: BarChart3,
// //     iconColor: "text-pink-500",
// //     iconBg: "bg-pink-50",
// //   },
// // ];

// // export function HomeInnovative() {
// //   return (
// //     <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 text-slate-900">
      
// //       {/* --- AUTOMATIC WATER WAVE BACKGROUND DECORATIONS --- */}
// //       {/* Top Left Liquid Blob */}
// //       <div 
// //         className="absolute -top-10 -left-20 w-112.5 h-112.5 rounded-full bg-blue-50/60 opacity-70 blur-2xl animate-[water_12s_ease-in-out_infinite]"
// //         style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
// //       />
// //       {/* Bottom Right Liquid Blob */}
// //       <div 
// //         className="absolute -bottom-20 -right-20 w-137.5 h-137.5 rounded-full bg-blue-50/40 opacity-80 blur-3xl animate-[water_16s_ease-in-out_infinite_reverse]"
// //         style={{ borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%" }}
// //       />

// //       <div className="relative z-10 mx-auto max-w-300">
        
// //         {/* --- HEADER SECTION --- */}
// //         <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
// //           <span className="text-lg font-bold  text-[#104cba]">
// //             Our Innovative Services
// //           </span>
// //           <h2 className="text-3xl mt-5 font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
// //             Innovative IT Solutions For Business <br className="hidden sm:inline" /> Transformation
// //           </h2>
// //           <p className="text-base leading-7 font-normal text-slate-500 max-w-2xl mx-auto">
// //             Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
// //           </p>
// //         </div>

// //         {/* --- CENTRAL MAIN IMAGE WITH DRIFTING WATER/DOTS/STARS TRANSITION --- */}
// //         <div className="relative w-full max-w-170 mx-auto aspect-4/3 mb-20 flex items-center justify-center">
          
// //           {/* Background Liquid Aura Ring (Behind Image) */}
// //           <div className="absolute inset-10 bg-linear-to-tr from-blue-100/50 to-purple-100/30 rounded-full mix-blend-multiply blur-xl animate-[water_3s_ease-in-out_infinite]" />

// //           {/* Floating Clouds Left (Animated) */}
// //           <div className="absolute top-[15%] left-[-5%] w-24 h-12 bg-sky-100/70 rounded-full blur-[2px] animate-[float_7s_ease-in-out_infinite]" />
// //           {/* Floating Clouds Right (Animated) */}
// //           <div className="absolute bottom-[35%] right-[-8%] w-28 h-14 bg-sky-100/60 rounded-full blur-[1px] animate-[float_9s_ease-in-out_infinite_reverse]" />

// //           {/* Twinkling Vector Star Backdrop 1 */}
// //           <div className="absolute top-[5%] right-[15%] text-amber-400 font-serif text-2xl opacity-70 animate-pulse duration-1000">✦</div>
// //           {/* Twinkling Vector Star Backdrop 2 */}
// //           <div className="absolute bottom-[15%] left-[10%] text-blue-400 font-serif text-xl opacity-60 animate-pulse duration-700">✦</div>

// //           {/* Red Grid Cross Dots (Left Side) - Moves gently like water */}
// //           <div className="absolute left-[-16%] bottom-[20%] grid grid-cols-4 gap-2 opacity-80 animate-[float_6s_ease-in-out_infinite]">
// //             {[...Array(16)].map((_, i) => (
// //               <span key={i} className="w-3 h-3 p-2 font-bold text-xl text-[#fe0a09]">X</span>
// //             ))}
// //           </div>

// //           {/* Classic Slate Grid Dots (Right Side) - Moves opposite direction */}
// //           <div className="absolute right-[-4%] top-[40%] grid grid-cols-6 gap-2 opacity-60 animate-[float_8s_ease-in-out_infinite_reverse]">
// //             {[...Array(24)].map((_, i) => (
// //               <span key={i} className="w-1 h-1 rounded-full bg-slate-400" />
// //             ))}
// //           </div>

// //           {/* The Main Illustration Asset Wrapper */}
// //           <div className="relative w-full h-full z-10 transition-transform duration-1000 animate-[water_14s_ease-in-out_infinite]">
// //             <Image
// //               src={innovativeImg}
// //               alt="Innovative business team collaboration illustration"
// //               fill
// //               className="object-contain"
// //               priority
// //             />
// //           </div>
// //         </div>

// //         {/* --- 4-COLUMN BOTTOM FEATURE CARDS --- */}
// //         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
// //           {innovativeFeatures.map((feat) => {
// //             const IconComponent = feat.Icon;
// //             return (
// //               <div 
// //                 key={feat.title}
// //                 className="group rounded-xl border text-black border-slate-100 bg-white  hover:bg-[#103ab1] hover:text-white cursor-pointer p-8 shadow-xl transition-all duration-300 hover:-translate-y-1"
// //               >
// //                 <div className="flex flex-col sm:flex-row gap-5 items-start  ">
// //                   {/* Clean styled icon container matching image_998957.png */}
// //                   <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feat.iconBg} ${feat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
// //                     <IconComponent className="h-6 w-6 stroke-[2]" />
// //                   </div>
                  
// //                   <div className="space-y-2">
// //                     <h3 className="text-lg font-bold   transition-colors">
// //                       {feat.title}
// //                     </h3>
// //                     <p className="text-base leading-9 text-slate-500 font-normal">
// //                       {feat.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //       </div>

// //       {/* --- INLINE GLOBAL KEYFRAMES FOR TRANSITIONS (No config changes needed!) --- */}
// //       <style>{`
// //         @keyframes water {
// //           0%, 100% { transform: translate(0px, 0px) scale(1); }
// //           33% { transform: translate(4px, -6px) scale(1.02); borderRadius: 45% 55% 60% 40% / 50% 45% 55% 50%; }
// //           66% { transform: translate(-5px, 4px) scale(0.98); borderRadius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
// //         }
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0px) translateX(0px); }
// //           50% { transform: translateY(-8px) translateX(4px); }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


// "use client";

// import Image from "next/image";
// import { Briefcase, Settings, BrainCircuit, BarChart3 } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// import innovativeImg from "@/assets/innovative_service.png";

// const innovativeFeatures = [
//   {
//     title: "End-To-End Solutions",
//     description:
//       "We offer end-to-end software and IT solutions that cover every aspect of our clients' businesses. From software development to network management, we provide a comprehensive range of services that help businesses succeed.",
//     Icon: Briefcase,
//     iconColor: "text-purple-500",
//     iconBg: "bg-purple-50",
//   },
//   {
//     title: "Innovative Approach",
//     description:
//       "Our team of experts is committed to staying up-to-date with the latest technologies and trends in software and IT. We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth.",
//     Icon: Settings,
//     iconColor: "text-orange-500",
//     iconBg: "bg-orange-50",
//   },
//   {
//     title: "Passion For Innovation",
//     description:
//       "Our team of experts is passionate about exploring new ideas and developing innovative solutions that help businesses succeed. We believe that creativity is essential to driving growth and staying ahead of the competition.",
//     Icon: BrainCircuit,
//     iconColor: "text-emerald-500",
//     iconBg: "bg-emerald-50",
//   },
//   {
//     title: "Focus On ROI",
//     description:
//       "We understand that businesses need to see a return on their investment in software and IT solutions. That's why we focus on developing solutions that deliver measurable results, whether it's improved efficiency, cost savings, or increased revenue.",
//     Icon: BarChart3,
//     iconColor: "text-pink-500",
//     iconBg: "bg-pink-50",
//   },
// ];

// export function HomeInnovative() {
//   return (
//     <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 text-slate-900">
      
//       {/* --- AUTOMATIC WATER WAVE BACKGROUND DECORATIONS --- */}
//       {/* Top Left Liquid Blob */}
//       <div 
//         className="absolute -top-10 -left-20 w-112.5 h-112.5 rounded-full bg-blue-50/60 opacity-70 blur-2xl animate-[water_12s_ease-in-out_infinite]"
//         style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
//       />
//       {/* Bottom Right Liquid Blob */}
//       <div 
//         className="absolute -bottom-20 -right-20 w-137.5 h-137.5 rounded-full bg-blue-50/40 opacity-80 blur-3xl animate-[water_16s_ease-in-out_infinite_reverse]"
//         style={{ borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%" }}
//       />

//       <div className="relative z-10 mx-auto max-w-300">
        
//         {/* --- HEADER SECTION --- */}
//         <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
//           <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={30} animationType="from">
//             <span className="text-lg font-bold text-[#104cba] block">
//               Our Innovative Services
//             </span>
//           </RevealAnimation>

//           <RevealAnimation direction="down" duration={1.1} delay={0.15} offset={40} animationType="from">
//             <h2 className="text-3xl mt-5 font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight">
//               Innovative IT Solutions For Business <br className="hidden sm:inline" /> Transformation
//             </h2>
//           </RevealAnimation>

//           <RevealAnimation direction="up" duration={1.1} delay={0.3} offset={30} animationType="from">
//             <p className="text-base leading-7 font-normal text-slate-500 max-w-2xl mx-auto">
//               Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
//             </p>
//           </RevealAnimation>
//         </div>

//         {/* --- CENTRAL MAIN IMAGE WITH DRIFTING WATER/DOTS/STARS TRANSITION --- */}
//         <RevealAnimation direction="up" duration={1.2} delay={0.4} offset={50} animationType="from">
//           <div className="relative w-full max-w-170 mx-auto aspect-4/3 mb-20 flex items-center justify-center">
            
//             {/* Background Liquid Aura Ring (Behind Image) */}
//             <div className="absolute inset-10 bg-linear-to-tr from-blue-100/50 to-purple-100/30 rounded-full mix-blend-multiply blur-xl animate-[water_3s_ease-in-out_infinite]" />

//             {/* Floating Clouds Left (Animated) */}
//             <div className="absolute top-[15%] left-[-5%] w-24 h-12 bg-sky-100/70 rounded-full blur-[2px] animate-[float_7s_ease-in-out_infinite]" />
//             {/* Floating Clouds Right (Animated) */}
//             <div className="absolute bottom-[35%] right-[-8%] w-28 h-14 bg-sky-100/60 rounded-full blur-[1px] animate-[float_9s_ease-in-out_infinite_reverse]" />

//             {/* Twinkling Vector Star Backdrop 1 */}
//             <div className="absolute top-[5%] right-[15%] text-amber-400 font-serif text-2xl opacity-70 animate-pulse duration-1000">✦</div>
//             {/* Twinkling Vector Star Backdrop 2 */}
//             <div className="absolute bottom-[15%] left-[10%] text-blue-400 font-serif text-xl opacity-60 animate-pulse duration-700">✦</div>

//             {/* Red Grid Cross Dots (Left Side) */}
//             <div className="absolute left-[-16%] bottom-[20%] grid grid-cols-4 gap-2 opacity-80 animate-[float_6s_ease-in-out_infinite]">
//               {[...Array(16)].map((_, i) => (
//                 <span key={i} className="w-3 h-3 p-2 font-bold text-xl text-[#fe0a09]">X</span>
//               ))}
//             </div>

//             {/* Classic Slate Grid Dots (Right Side) */}
//             <div className="absolute right-[-4%] top-[40%] grid grid-cols-6 gap-2 opacity-60 animate-[float_8s_ease-in-out_infinite_reverse]">
//               {[...Array(24)].map((_, i) => (
//                 <span key={i} className="w-1 h-1 rounded-full bg-slate-400" />
//               ))}
//             </div>

//             {/* The Main Illustration Asset Wrapper */}
//             <div className="relative w-full h-full z-10 transition-transform duration-1000 animate-[water_14s_ease-in-out_infinite]">
//               <Image
//                 src={innovativeImg}
//                 alt="Innovative business team collaboration illustration"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </RevealAnimation>

//         {/* --- 4-COLUMN BOTTOM FEATURE CARDS --- */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
//           {innovativeFeatures.map((feat, index) => {
//             const IconComponent = feat.Icon;
            
//             // Asymmetrical grid assembly: Left side cards sweep from left, right side cards from right
//             const cardDirection = index % 2 === 0 ? "left" : "right";

//             return (
//               <RevealAnimation 
//                 key={feat.title}
//                 direction={cardDirection}
//                 duration={1.2}
//                 delay={0.2 + index * 0.15} // Staggered entry timing sequence
//                 offset={60}
//                 animationType="from"
//               >
//                 <div className="group rounded-xl border text-black border-slate-100 bg-white hover:bg-[#103ab1] hover:text-white cursor-pointer p-8 shadow-xl transition-all duration-300 hover:-translate-y-1">
//                   <div className="flex flex-col sm:flex-row gap-5 items-start">
                    
//                     {/* Icon container container element layer */}
//                     <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feat.iconBg} ${feat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
//                       <IconComponent className="h-6 w-6 stroke-[2]" />
//                     </div>
                    
//                     <div className="space-y-2">
//                       <h3 className="text-lg font-bold transition-colors">
//                         {feat.title}
//                       </h3>
//                       <p className="text-base leading-9 text-slate-500 font-normal group-hover:text-slate-200 transition-colors">
//                         {feat.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </RevealAnimation>
//             );
//           })}
//         </div>

//       </div>

//       {/* --- INLINE GLOBAL KEYFRAMES FOR TRANSITIONS --- */}
//       <style>{`
//         @keyframes water {
//           0%, 100% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(4px, -6px) scale(1.02); borderRadius: 45% 55% 60% 40% / 50% 45% 55% 50%; }
//           66% { transform: translate(-5px, 4px) scale(0.98); borderRadius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-8px) translateX(4px); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Briefcase, Settings, BrainCircuit, BarChart3 } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

import innovativeImg from "@/assets/innovative_service.png";

const innovativeFeatures = [
  {
    title: "End-To-End Solutions",
    description:
      "We offer end-to-end software and IT solutions that cover every aspect of our clients' businesses. From software development to network management, we provide a comprehensive range of services that help businesses succeed.",
    Icon: Briefcase,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
  },
  {
    title: "Innovative Approach",
    description:
      "Our team of experts is committed to staying up-to-date with the latest technologies and trends in software and IT. We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth.",
    Icon: Settings,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    title: "Passion For Innovation",
    description:
      "Our team of experts is passionate about exploring new ideas and developing innovative solutions that help businesses succeed. We believe that creativity is essential to driving growth and staying ahead of the competition.",
    Icon: BrainCircuit,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Focus On ROI",
    description:
      "We understand that businesses need to see a return on their investment in software and IT solutions. That's why we focus on developing solutions that deliver measurable results, whether it's improved efficiency, cost savings, or increased revenue.",
    Icon: BarChart3,
    iconColor: "text-pink-500",
    iconBg: "bg-pink-50",
  },
];

export function HomeInnovative() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Parse window layout coordinates safely during client-side component initiation cycles
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Matching Tailwind's 'lg' standard breakpoint threshold
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-8 lg:px-10 text-slate-900 select-none">
      
      {/* ================= BACKGROUND WATER AMBIENT BLOB CANVAS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Liquid Blob */}
        <div 
          className="absolute -top-10 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-blue-50/60 opacity-70 blur-2xl animate-[water_12s_ease-in-out_infinite]"
          style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
        />
        {/* Bottom Right Liquid Blob */}
        <div 
          className="absolute -bottom-20 -right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-blue-50/40 opacity-80 blur-3xl animate-[water_16s_ease-in-out_infinite_reverse]"
          style={{ borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <RevealAnimation direction="down" duration={0.9} delay={0.0} offset={25} animationType="from">
            <span className="text-sm sm:text-base font-bold tracking-wider text-[#104cba] uppercase block">
              Our Innovative Services
            </span>
          </RevealAnimation>
          
          <RevealAnimation direction="down" duration={0.9} delay={0.15} offset={30} animationType="from">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Innovative IT Solutions For Business <br className="hidden sm:inline" /> Transformation
            </h2>
          </RevealAnimation>
          
          <RevealAnimation direction="up" duration={0.9} delay={0.3} offset={25} animationType="from">
            <p className="text-[14.5px] sm:text-base leading-relaxed text-slate-500 max-w-2xl mx-auto font-normal">
              Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
            </p>
          </RevealAnimation>
        </div>

        {/* ================= CENTRAL GRAPHIC CANVAS ================= */}
        <RevealAnimation direction="up" duration={1.0} delay={0.4} offset={40} animationType="from">
          <div className="relative mx-auto aspect-[4/3] mb-16 sm:mb-20 flex items-center justify-center w-[85vw] sm:w-[480px] lg:w-[600px]">
            
            {/* Background Liquid Aura Ring (Behind Image) */}
            <div className="absolute inset-6 sm:inset-10 bg-gradient-to-tr from-blue-100/40 to-purple-100/20 rounded-full mix-blend-multiply blur-xl animate-[water_6s_ease-in-out_infinite]" />

            {/* Floating Clouds Left */}
            <div className="absolute top-[15%] left-[-5%] w-16 sm:w-24 h-8 sm:h-12 bg-sky-100/50 rounded-full blur-[2px] animate-[float_7s_ease-in-out_infinite] hidden sm:block" />
            {/* Floating Clouds Right */}
            <div className="absolute bottom-[35%] right-[-8%] w-20 sm:w-28 h-10 sm:h-14 bg-sky-100/40 rounded-full blur-[1px] animate-[float_9s_ease-in-out_infinite_reverse] hidden sm:block" />

            {/* Twinkling Stars */}
            <div className="absolute top-[5%] right-[10%] text-amber-400 font-serif text-xl sm:text-2xl opacity-60 animate-pulse duration-1000">✦</div>
            <div className="absolute bottom-[15%] left-[8%] text-blue-400 font-serif text-lg sm:text-xl opacity-50 animate-pulse duration-700">✦</div>

            {/* Red Grid Cross Dots (Left Side) */}
            <div className="absolute left-[-10%] lg:left-[-16%] bottom-[20%] grid grid-cols-4 gap-1 sm:gap-2 opacity-50 sm:opacity-80 animate-[float_6s_ease-in-out_infinite] scale-75 sm:scale-100">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="w-6 h-6 font-bold text-xs sm:text-sm text-[#fe0a09] flex items-center justify-center">X</span>
              ))}
            </div>

            {/* Classic Slate Grid Dots (Right Side) */}
            <div className="absolute right-[-2%] lg:right-[-4%] top-[40%] grid grid-cols-6 gap-1.5 sm:gap-2 opacity-40 sm:opacity-60 animate-[float_8s_ease-in-out_infinite_reverse] scale-75 sm:scale-100">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-slate-400" />
              ))}
            </div>

            {/* Main Foreground Team Illustration Asset */}
            <div className="relative w-full h-full z-10 animate-[water_14s_ease-in-out_infinite]">
              <Image
                src={innovativeImg}
                alt="Innovative business team collaboration illustration display map"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 480px, 600px"
                priority
              />
            </div>
          </div>
        </RevealAnimation>

        {/* ================= CORE BOTTOM FEATURE CARDS ================= */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full">
          {innovativeFeatures.map((feat, index) => {
            const IconComponent = feat.Icon;
            
            // Fixed directional triggers to safely target mobile versus responsive sizing bounds
            let cardDirection: 'left' | 'right' | 'up' = 'up';
            if (isDesktop) {
              cardDirection = index % 2 === 0 ? "left" : "right";
            }

            return (
              <RevealAnimation 
                key={feat.title}
                direction={cardDirection}
                duration={0.9}
                delay={isDesktop ? 0.15 + index * 0.1 : index * 0.08}
                offset={40}
                animationType="from"
              >
                <div className="group rounded-2xl border text-black border-slate-100 bg-white hover:bg-[#103ab1] hover:border-transparent cursor-pointer p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(16,58,177,0.25)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 h-full">
                  <div className="flex flex-col sm:flex-row gap-5 items-start">
                    
                    {/* Icon Base Capsule */}
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${feat.iconBg} ${feat.iconColor} group-hover:bg-white/10 group-hover:text-white group-hover:scale-105`}>
                      <IconComponent className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    
                    {/* Text block element content wrapper container */}
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-[17px] sm:text-lg font-bold tracking-tight text-[#08112a] group-hover:text-white transition-colors duration-300">
                        {feat.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-slate-500 font-normal group-hover:text-slate-200/90 transition-colors duration-400">
                        {feat.description}
                      </p>
                    </div>

                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>

      </div>
    </section>
  );
}