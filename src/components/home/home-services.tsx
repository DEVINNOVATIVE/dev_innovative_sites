


// "use client";

// import React from "react";
// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation';

// import software_development from "@/assets/software_development.jpg";
// import blockchainDevelopmentImage from "@/assets/blockchain_development.png";
// import artifical_intelligence from "@/assets/artifical_intelligence.jpg";

// const services = [
//   {
//     title: "Blockchain Solutions",
//     description:
//       "Our Blockchain solutions leverage the power of this revolutionary technology to help businesses streamline operations, increase security & enhance transparency.",
//     image: blockchainDevelopmentImage,
//   },
//   {
//     title: "Artificial Intelligence",
//     description:
//       "Our AI services empower businesses to leverage the latest advances in machine learning and data analysis to gain insights, optimize operations, and improve customer experience.",
//     image: artifical_intelligence,
//   },
//   {
//     title: "Software Development",
//     description:
//       "Our software development services help businesses create custom software solutions that meet their unique needs and requirements, from web and mobile apps to enterprise software and more.",
//     image: software_development,
//   },
// ];

// export function HomeServices() {
//   return (
//     <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-8 md:py-16 bg-slate-50/50 overflow-hidden select-none">
      
//       {/* ======================================================================
//           1. DESKTOP LAYER SYSTEM (GSAP STAGGERED TRANSLATIONS)
//           ====================================================================== */}
//       <div className="hidden lg:block w-full">
        
//         {/* Header Block Container */}
//         <ConditionalReveal direction="down" duration={1.0} delay={0.1} offset={25} animationType="from">
//           <div className="mx-auto mb-16 text-center max-w-[980px]">
//             <p className="text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
//             <h2 className="mt-3 text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
//               Innovative Solutions for Businesses
//             </h2>
//           </div>
//         </ConditionalReveal>

//         {/* 3-Column Desktop Grid Matrix Layout */}
//         <div className="grid gap-10 lg:grid-cols-3 pt-4">
//           {services.map((service, index) => {
//             let cardDirection: 'left' | 'up' | 'right' = 'up';
//             if (index === 0) cardDirection = 'left';
//             if (index === 2) cardDirection = 'right';

//             return (
//               <ConditionalReveal 
//                 key={service.title} 
//                 direction={cardDirection} 
//                 duration={1.0}
//                 delay={index * 0.15}
//                 offset={40}
//                 animationType="from"
//               >
//                 <article className="group relative flex h-full flex-col overflow-visible rounded-2xl bg-white shadow-[0_4px_25px_rgba(15,23,42,0.03)] border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
                  
//                   {/* Image Showcase Box */}
//                   <div className="relative h-52 w-full overflow-hidden bg-white rounded-t-2xl px-6 pt-6">
//                     <Image 
//                       src={service.image} 
//                       alt={service.title} 
//                       fill 
//                       className="object-contain p-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
//                       sizes="33vw"
//                     />
//                   </div>

//                   {/* Text Description Box */}
//                   <div className="flex flex-1 flex-col justify-between p-6 pb-20 text-center">
//                     <div className="space-y-3">
//                       <h3 className="text-2xl font-bold text-[#102a43] group-hover:text-[#104cba] transition-colors duration-300 tracking-tight">
//                         {service.title}
//                       </h3>
//                       <p className="text-[15px] leading-6 text-[#475569] font-normal">
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Centered Floating Action Indicator Button */}
//                   <div
//                     className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//                       index === 1 
//                         ? "opacity-100 scale-100" 
//                         : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
//                     }`}
//                   >
//                     <button 
//                       aria-label={`Learn more about our ${service.title}`}
//                       className="inline-flex cursor-pointer font-extrabold h-16 w-16 items-center justify-center rounded-full bg-[#ff5c3d] text-2xl text-white shadow-[0_8px_25px_rgba(255,92,61,0.3)] transition-all duration-300 hover:scale-110 hover:bg-[#e84c2e] hover:shadow-[0_12px_30px_rgba(255,92,61,0.45)] active:scale-95"
//                     >
//                       {`>`}
//                     </button>
//                   </div>

//                 </article>
//               </ConditionalReveal>
//             );
//           })}
//         </div>
//       </div>

//       {/* ======================================================================
//           2. MOBILE LAYER SYSTEM (INSTANT STATIC PAINT)
//           ====================================================================== */}
//       {/* Bypasses layout script computation parameters completely to eliminate frame stutters on touch screens */}
//       <div className="block lg:hidden w-full">
        
//         {/* Header Block Container */}
//         <div className="mx-auto mb-12 text-center max-w-[980px]">
//           <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
//           <h2 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#08112a] tracking-tight leading-tight">
//             Innovative Solutions for Businesses
//           </h2>
//         </div>

//         {/* Fluid Stack / Double-Column Row Matrix Grid */}
//         <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 pt-2">
//           {services.map((service, index) => (
//             <article key={service.title} className="group relative flex flex-col overflow-visible rounded-2xl bg-white shadow-md border border-slate-100">
              
//               {/* Image Showcase Box */}
//               <div className="relative h-48 w-full overflow-hidden bg-white rounded-t-2xl px-4 pt-4">
//                 <Image 
//                   src={service.image} 
//                   alt={service.title} 
//                   fill 
//                   className="object-contain p-6" 
//                   sizes="(max-width: 640px) 100vw, 50vw"
//                   priority={index === 0}
//                 />
//               </div>

//               {/* Text Description Box */}
//               <div className="flex flex-1 flex-col justify-between p-5 pb-16 text-center">
//                 <div className="space-y-2.5">
//                   <h3 className="text-xl sm:text-2xl font-bold text-[#102a43]">
//                     {service.title}
//                   </h3>
//                   <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#475569] font-normal">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Centered Floating Action Indicator Button - Stays fully visible and interactive on touch displays */}
//               <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
//                 <button 
//                   aria-label={`Learn more about our ${service.title}`}
//                   className="inline-flex font-extrabold h-14 w-14 items-center justify-center rounded-full bg-[#ff5c3d] text-xl text-white shadow-lg shadow-orange-500/20"
//                 >
//                   {`>`}
//                 </button>
//               </div>

//             </article>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Imported Next.js Router Link Linkage Block
import { ArrowRight } from "lucide-react";
import RevealAnimation from '../animation/RevealAnimation';

import software_development from "@/assets/software_development.jpg";
import blockchainDevelopmentImage from "@/assets/blockchain_development.png";
import artifical_intelligence from "@/assets/artifical_intelligence.jpg";

const services = [
  {
    title: "Blockchain Solutions",
    description:
      "Our Blockchain solutions leverage the power of this revolutionary technology to help businesses streamline operations, increase security & enhance transparency.",
    image: blockchainDevelopmentImage,
    href: "/service/blockchain-development", // Target navigation endpoints
  },
  {
    title: "Artificial Intelligence",
    description:
      "Our AI services empower businesses to leverage the latest advances in machine learning and data analysis to gain insights, optimize operations, and improve customer experience.",
    image: artifical_intelligence,
    href: "/service/ai-solutions",
  },
  {
    title: "Software Development",
    description:
      "Our software development services help businesses create custom software solutions that meet their unique needs and requirements, from web and mobile apps to enterprise software and more.",
    image: software_development,
    href: "/service/custom-software-development",
  },
];

export function HomeServices() {
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
    <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-8 md:py-16 bg-slate-50/50 overflow-hidden select-none">
      
      {/* ======================================================================
          1. DESKTOP LAYER SYSTEM (GSAP STAGGERED TRANSLATIONS)
          ====================================================================== */}
      <div className="hidden lg:block w-full">
        
        {/* Header Block Container */}
        <ConditionalReveal direction="down" duration={1.0} delay={0.1} offset={25} animationType="from">
          <div className="mx-auto mb-16 text-center max-w-[980px]">
            <p className="text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
            <h2 className="mt-3 text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
              Innovative Solutions for Businesses
            </h2>
          </div>
        </ConditionalReveal>

        {/* 3-Column Desktop Grid Matrix Layout */}
        <div className="grid gap-10 lg:grid-cols-3 pt-4">
          {services.map((service, index) => {
            let cardDirection: 'left' | 'up' | 'right' = 'up';
            if (index === 0) cardDirection = 'left';
            if (index === 2) cardDirection = 'right';

            return (
              <ConditionalReveal 
                key={service.title} 
                direction={cardDirection} 
                duration={1.0}
                delay={index * 0.15}
                offset={40}
                animationType="from"
              >
                <article className="group relative flex h-full flex-col overflow-visible rounded-2xl bg-white shadow-[0_4px_25px_rgba(15,23,42,0.03)] border border-slate-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
                  
                  {/* Image Showcase Box */}
                  <div className="relative h-52 w-full overflow-hidden bg-white rounded-t-2xl px-6 pt-6">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-contain p-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
                      sizes="33vw"
                    />
                  </div>

                  {/* Text Description Box */}
                  <div className="flex flex-1 flex-col justify-between p-6 pb-20 text-center">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-[#102a43] group-hover:text-[#104cba] transition-colors duration-300 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-[15px] leading-6 text-[#475569] font-normal">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Centered Floating Link Button wrapper */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 z-20">
                    <Link 
                      href={service.href}
                      aria-label={`Learn more about our ${service.title}`}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5c3d] text-white shadow-[0_8px_25px_rgba(255,92,61,0.3)] transition-all duration-300 hover:scale-110 hover:bg-[#e84c2e] hover:shadow-[0_12px_30px_rgba(255,92,61,0.45)] active:scale-95 cursor-pointer"
                    >
                      <ArrowRight className="h-6 w-6 stroke-[2.5]" />
                    </Link>
                  </div>

                </article>
              </ConditionalReveal>
            );
          })}
        </div>
      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC PAINT)
          ====================================================================== */}
      <div className="block lg:hidden w-full">
        
        {/* Header Block Container */}
        <div className="mx-auto mb-12 text-center max-w-[980px]">
          <p className="text-base sm:text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
          <h2 className="mt-2.5 text-2xl sm:text-3xl font-extrabold text-[#08112a] tracking-tight leading-tight">
            Innovative Solutions for Businesses
          </h2>
        </div>

        {/* Fluid Stack Matrix Grid */}
        <div className="grid gap-14 grid-cols-1 sm:grid-cols-2 pt-2">
          {services.map((service, index) => (
            <article key={service.title} className="group relative flex flex-col overflow-visible rounded-2xl bg-white shadow-md border border-slate-100">
              
              {/* Image Showcase Box */}
              <div className="relative h-48 w-full overflow-hidden bg-white rounded-t-2xl px-4 pt-4">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-6" 
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>

              {/* Text Description Box */}
              <div className="flex flex-1 flex-col justify-between p-5 pb-16 text-center">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#102a43]">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#475569] font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Centered Floating Link Button - Fully exposed for seamless mobile touch trigger logs */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
                <Link 
                  href={service.href}
                  aria-label={`Learn more about our ${service.title}`}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5c3d] text-white shadow-lg shadow-orange-500/20 active:scale-95"
                >
                  <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                </Link>
              </div>

            </article>
          ))}
        </div>
      </div>

    </section>
  );
}