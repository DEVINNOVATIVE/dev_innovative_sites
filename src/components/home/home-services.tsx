// // "use client";

// // import Image from "next/image";

// // import software_development from "@/assets/software_development.jpg";
// // import blockchainDevelopmentImage from "@/assets/blockchain_development.png";
// // import artifical_intelligence from "@/assets/artifical_intelligence.jpg";

// // const services = [
// //   {
// //     title: "Blockchain Solutions",
// //     description:
// //       "Our Blockchain solutions leverage the power of this revolutionary technology to help businesses streamline operations, increase security & enhance transparency.",
// //     image: blockchainDevelopmentImage,
// //   },
// //   {
// //     title: "Artificial Intelligence",
// //     description:
// //       "Our AI services empower businesses to leverage the latest advances in machine learning and data analysis to gain insights, optimize operations, and improve customer experience.",
// //     image: artifical_intelligence,
// //   },
// //   {
// //     title: "Software Development",
// //     description:
// //       "Our software development services help businesses create custom software solutions that meet their unique needs and requirements, from web and mobile apps to enterprise software and more.",
// //     image: software_development,
// //   },
// // ];

// // export function HomeServices() {
// //   return (
// //     <section
// //       className="mx-auto w-full px-4 py-16 sm:px-12 lg:px-18"
    
// //     >
// //       <div className="mx-auto mb-10 text-center animate-fadeInDown" style={{ maxWidth: '980px' }}>
// //         <p className="text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
// //         <h2 className="mt-4 text-3xl font-bold text-[#08112a] sm:text-4xl">innovative Solutions for Businesses</h2>
       
// //       </div>

// //       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
// //         {services.map((service, index) => (
// //           <article
// //             key={service.title}
// //             className="group relative flex h-full flex-col overflow-visible rounded-xl   bg-white shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.12)] animate-fadeInUp"
// //           >
// //             <div className="relative h-50 w-full overflow-hidden bg-white" >
// //               <Image src={service.image} alt={service.title} fill className="object-contain p-4" />
// //             </div>

// //             <div className="flex flex-1 h-full flex-col items-center justify-between gap-6 px-4 pt-4 pb-20 text-center">
// //               <div className="flex flex-1 flex-col gap-4">
// //                 <h3 className="text-2xl font-bold text-[#102a43]">{service.title}</h3>
// //                 <p className="text-base leading-6 text-[#475569]">{service.description}</p>
// //               </div>
// //             </div>

// //             <div
// //               className={` absolute -bottom-8 left-1/2  -translate-x-1/2 transition-opacity ${
// //                 index === 1 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
// //               }`}
// //             >
// //               <button className="inline-flex cursor-pointer font-extrabold h-16 w-16 items-center justify-center rounded-full bg-[#ff5c3d] text-2xl text-white shadow-lg transition hover:scale-110 hover:bg-[#e84c2e]">
// //                 {`>`}
// //               </button>
// //             </div>
// //           </article>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation'; // Path matching your folder structure

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
//     <section className="mx-auto w-full px-4 py-16 sm:px-12 lg:px-18 bg-slate-50/50">
      
//       {/* 1. HEADER SECTION */}
//       <RevealAnimation direction="down" duration={1.2} delay={0.1} offset={30} animationType="from">
//         <div className="mx-auto mb-16 text-center" style={{ maxWidth: '980px' }}>
//           <p className="text-lg font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
//           <h2 className="mt-4 text-3xl font-bold text-[#08112a] sm:text-4xl">Innovative Solutions for Businesses</h2>
//         </div>
//       </RevealAnimation>

//       {/* 2. GRID CARDS LOOP SECTION */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-6">
//         {services.map((service, index) => {
//           // Dynamic directional logic:
//           // Card 1 comes from Left
//           // Card 2 comes from Bottom (Up)
//           // Card 3 comes from Right
//           let cardDirection: 'left' | 'up' | 'right' = 'up';
//           if (index === 0) cardDirection = 'left';
//           if (index === 2) cardDirection = 'right';

//           return (
//             <RevealAnimation 
//               key={service.title} 
//               direction={cardDirection} 
//               duration={1.2}
//               delay={index * 0.25} 
//               offset={80} 
//               animationType="from"
//             >
//               <article className="group relative flex h-full flex-col overflow-visible rounded-xl bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
                
//                 {/* Image Box */}
//                 <div className="relative h-52 w-full overflow-hidden bg-white rounded-t-xl">
//                   <Image 
//                     src={service.image} 
//                     alt={service.title} 
//                     fill 
//                     className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105" 
//                   />
//                 </div>

//                 {/* Text Description Box */}
//                 <div className="flex flex-1 h-full flex-col items-center justify-between gap-6 px-6 pt-4 pb-20 text-center">
//                   <div className="flex flex-1 flex-col gap-3">
//                     <h3 className="text-2xl font-bold text-[#102a43] group-hover:text-[#104cba] transition-colors duration-200">
//                       {service.title}
//                     </h3>
//                     <p className="text-sm leading-6 text-[#475569]">
//                       {service.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Centered Floating Action Button */}
//                 <div
//                   className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 ${
//                     index === 1 
//                       ? "opacity-100 scale-100" 
//                       : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
//                   }`}
//                 >
//                   <button className="inline-flex cursor-pointer font-extrabold h-16 w-16 items-center justify-center rounded-full bg-[#ff5c3d] text-2xl text-white shadow-[0_8px_25px_rgba(255,92,61,0.35)] transition-transform duration-200 hover:scale-110 hover:bg-[#e84c2e]">
//                     {`>`}
//                   </button>
//                 </div>

//               </article>
//             </RevealAnimation>
//           );
//         })}
//       </div>

//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
  },
  {
    title: "Artificial Intelligence",
    description:
      "Our AI services empower businesses to leverage the latest advances in machine learning and data analysis to gain insights, optimize operations, and improve customer experience.",
    image: artifical_intelligence,
  },
  {
    title: "Software Development",
    description:
      "Our software development services help businesses create custom software solutions that meet their unique needs and requirements, from web and mobile apps to enterprise software and more.",
    image: software_development,
  },
];

export function HomeServices() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Safely evaluate window viewport boundaries on client mount
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Matching Tailwind's 'lg' breakpoint
    };
    
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-20 bg-slate-50/50 overflow-hidden select-none">
      
      {/* 1. HEADER SECTION */}
      <RevealAnimation direction="down" duration={1.0} delay={0.1} offset={25} animationType="from">
        <div className="mx-auto mb-12 lg:mb-16 text-center max-w-[980px]">
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.35em] text-[#104cba]">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-[#08112a] sm:text-4xl tracking-tight leading-tight">
            Innovative Solutions for Businesses
          </h2>
        </div>
      </RevealAnimation>

      {/* 2. GRID CARDS LOOP SECTION */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-4">
        {services.map((service, index) => {
          
          /* FIXED SMOOTH ANCHORING:
            If screen width is below lg (tablet/mobile), all elements rise up uniformly.
            Asymmetric horizontal translations trigger safely on desktop displays only.
          */
          let cardDirection: 'left' | 'up' | 'right' = 'up';
          if (isDesktop) {
            if (index === 0) cardDirection = 'left';
            if (index === 2) cardDirection = 'right';
          }

          return (
            <RevealAnimation 
              key={service.title} 
              direction={cardDirection} 
              duration={1.0}
              delay={isDesktop ? index * 0.15 : index * 0.1} // Tightened stagger timing to keep loops fast
              offset={40} // Brought down offset from 80px to eliminate mobile lag/stutter
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Text Description Box */}
                <div className="flex flex-1 flex-col justify-between p-6 pb-20 text-center">
                  <div className="space-y-3">
                    <h3 className="text-[20px] sm:text-2xl font-bold text-[#102a43] group-hover:text-[#104cba] transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] leading-6 text-[#475569] font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Centered Floating Action Indicator Button */}
                <div
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    index === 1 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                >
                  <button 
                    aria-label={`Learn more about our ${service.title}`}
                    className="inline-flex cursor-pointer font-extrabold h-16 w-16 items-center justify-center rounded-full bg-[#ff5c3d] text-2xl text-white shadow-[0_8px_25px_rgba(255,92,61,0.3)] transition-all duration-300 hover:scale-110 hover:bg-[#e84c2e] hover:shadow-[0_12px_30px_rgba(255,92,61,0.45)] active:scale-95"
                  >
                    {`>`}
                  </button>
                </div>

              </article>
            </RevealAnimation>
          );
        })}
      </div>

    </section>
  );
}