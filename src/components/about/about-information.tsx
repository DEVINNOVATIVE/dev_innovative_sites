// "use client";

// import Image from "next/image";
// import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// // Image assets from your local project folder as specified
// import innovativeApproachIcon from "@/assets/about/innovative_approch.png"; 
// import qualityAssuranceIcon from "@/assets/about/quality_assurance.png";
// import innovativeSolutionsIcon from "@/assets/about/i_solution.png";
// import { useEffect, useState } from "react";

// const infoCards = [
//   {
//     title: "Innovative Approach",
//     description:
//       "We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth. We offer competitive pricing for our services, without compromising on quality.",
//     icon: innovativeApproachIcon,
//   },
//   {
//     title: "Quality Assurance",
//     description:
//       "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our standards. We value our clients and prioritize building strong relationships with them.",
//     icon: qualityAssuranceIcon,
//   },
//   {
//     title: "Innovative Solutions",
//     description:
//       "We are committed to delivering high-quality, customized solutions that meet the unique needs and goals of each client. Our team of experts is dedicated to helping businesses succeed achieve their full potential.",
//     icon: innovativeSolutionsIcon,
//   },
// ];

// export function AboutInformation() {

//     const [isLargeScreen, setIsLargeScreen] = useState(false);

//   useEffect(() => {
//     // Check screen size on mount
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
//     };

//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // Helper component to conditionally wrap children with RevealAnimation
//   const ConditionalReveal = ({ 
//     children, 
//     ...props 
//   }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
//     if (!isLargeScreen) {
//       return <>{children}</>;
//     }
//     return <RevealAnimation {...props}>{children}</RevealAnimation>;
//   };
//   return (
//     <section className="mx-auto w-full px-4 py-16 sm:px-12 lg:px-18 bg-[#f8fafc]">
//       <div className="mx-auto max-w-[1240px] grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-6">
        
//         {infoCards.map((card, index) => {
//           // Dynamic directional assembly cascade for an engaging frame composition
//           let cardDirection: 'left' | 'up' | 'right' = 'up';
//           if (index === 0) cardDirection = 'left';
//           if (index === 2) cardDirection = 'right';

//           return (
//             <ConditionalReveal 
//               key={card.title} 
//               direction={cardDirection} 
//               duration={1.2}
//               delay={index * 0.15} 
//               offset={50} 
//               animationType="from"
//             >
//               {/* --- DYNAMIC INTERACTIVE CARD WRAPPER ---
//                   All cards start as uniform white blocks and switch perfectly to deep blue on hover 
//               */}
//               <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white p-8 md:p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-slate-900 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] cursor-pointer hover:bg-[#1145ca] hover:text-white">
                
//                 <div className="flex flex-col gap-5 items-start">
                  
//                   {/* Icon Frame Block with seamless brightness inversion on hover */}
//                   <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
//                     <Image 
//                       src={card.icon} 
//                       alt={card.title} 
//                       fill 
//                       className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
//                     />
//                   </div>

//                   {/* Text Copy blocks layout */}
//                   <div className="space-y-3">
//                     <h3 className="text-xl font-bold tracking-tight text-[#08112a] transition-colors duration-200 group-hover:text-white">
//                       {card.title}
//                     </h3>
                    
//                     <p className="text-[14px] leading-6 font-normal text-slate-500 transition-colors duration-200 group-hover:text-white/90">
//                       {card.description}
//                     </p>
//                   </div>

//                 </div>

//               </article>
//             </ConditionalReveal>
//           );
//         })}

//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation";

// Image assets from project folder tree mapping
import innovativeApproachIcon from "@/assets/about/innovative_approch.png"; 
import qualityAssuranceIcon from "@/assets/about/quality_assurance.png";
import innovativeSolutionsIcon from "@/assets/about/i_solution.png";

const infoCards = [
  {
    title: "Pure Innovation over Iteration",
    description:
      "We don't just replicate what's already on the market. Whether we are training a custom Large Language Model (LLM) or designing a responsive SaaS platform, we actively look for ways to make your software faster, smarter, and more efficient than your competitors'.",
    icon: innovativeApproachIcon,
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Data is a company’s most volatile asset. We enforce a strict, security-first engineering methodology. Every architecture we design is built from the ground up to protect your proprietary data, uphold user privacy, and align with strict global compliance standards.",
    icon: qualityAssuranceIcon,
  },
  {
    title: "Radical Transparency",
    description:
      'We have eliminated the \"agency black box.\" We operate in highly collaborative, 2-week agile sprints. With direct Slack/Teams access to your dedicated engineering team and weekly live demos, you are always in complete control of your product’s evolution.',
    icon: innovativeSolutionsIcon,
  },
];

export function AboutInformation() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) return <>{children}</>;
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="mx-auto w-full px-4 py-8 md:py-16 sm:px-12 lg:px-18 bg-[#f8fafc] overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px] space-y-16">
        
        {/* ================= CARD HEADER OVERVIEW BAR ================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-base md:text-lg font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
              Our Core Principles
            </span>
          </ConditionalReveal>
          
          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
              Our Core Values That Drive Us
            </h2>
          </ConditionalReveal>

          <ConditionalReveal direction="up" duration={0.9} delay={0.1} offset={15} animationType="from">
            <p className="text-lg font-medium italic text-slate-500 max-w-2xl mx-auto pt-1">
              "We measure our success entirely by the commercial and operational metrics of our clients."
            </p>
          </ConditionalReveal>
        </div>

        {/* ================= BENTO GRID EXECUTION LAYOUT ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-4">
          {infoCards.map((card, index) => {
            let cardDirection: 'left' | 'up' | 'right' = 'up';
            if (index === 0) cardDirection = 'left';
            if (index === 2) cardDirection = 'right';

            return (
              <ConditionalReveal 
                key={card.title} 
                direction={cardDirection} 
                duration={1.2}
                delay={index * 0.15} 
                offset={50} 
                animationType="from"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-8 md:p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] text-slate-900 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(17,69,202,0.15)] cursor-pointer hover:bg-[#1145ca] hover:text-white">
                  
                  <div className="flex flex-col gap-6 items-start h-full justify-between">
                    <div className="space-y-5 w-full">
                      
                      {/* Icon Frame Block with custom brightness filters */}
                      <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                        <Image 
                          src={card.icon} 
                          alt={card.title} 
                          fill 
                          className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                        />
                      </div>

                      {/* Text Copy Section */}
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#08112a] transition-colors duration-200 group-hover:text-white">
                          {card.title}
                        </h3>
                        
                        <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-normal text-slate-500 transition-colors duration-200 group-hover:text-white/90">
                          {card.description}
                        </p>
                      </div>

                    </div>
                  </div>

                </article>
              </ConditionalReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}