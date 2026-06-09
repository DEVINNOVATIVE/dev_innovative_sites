// // import Image from "next/image";
// // import { Clock, Cloud, LayoutDashboard, Settings, Check } from "lucide-react";

// // import bgDigital from "@/assets/bg_digital.webp";
// // import transformBg from "@/assets/transform.webp";

// // const features = [
// //   {
// //     title: "Cloud Services",
// //     description:
// //       "We offer a range of cloud solutions, including cloud migration, cloud integration, and cloud-based software development.",
// //     Icon: Cloud,
// //   },
// //   {
// //     title: "Highly Customizable",
// //     description:
// //       "Our team of experts is dedicated to understanding your business and its unique challenges and developing solutions that are customized to your needs.",
// //     Icon: Settings,
// //   },
// //   {
// //     title: "UI / UX Experience",
// //     description:
// //       "We offer a range of UI/UX design solutions, including wireframing, prototyping, and user testing.",
// //     Icon: LayoutDashboard,
// //   },
// //   {
// //     title: "Time Management",
// //     description:
// //       "We offer a range of time management solutions, including project management software, task tracking tools, and time tracking software.",
// //     Icon: Clock,
// //   },
// // ];

// // const solutions = [
// //   {
// //     title: "Innovative Approach",
// //     description:
// //       "Our team is committed to staying up-to-date with the latest technologies and trends in web development, software solutions, and digital marketing. We leverage our expertise to provide innovative solutions that help businesses succeed in today's competitive marketplace.",
// //   },
// //   {
// //     title: "Tailored Solutions",
// //     description:
// //       "We believe in providing tailored solutions to each of our clients, based on their unique business needs and goals. Our team of experts works closely with clients to understand their requirements and design solutions that address their specific challenges.",
// //   },
// //   {
// //     title: "Quality Assurance",
// //     description:
// //       "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our quality standards before delivery.",
// //   },
// // ];

// // export function HomeDigital() {
// //   return (
// //     <section className="relative bg-[#0a0f24] text-white pt-32 pb-24 mt-32">
      
// //       {/* FIXED: Main Section Background Wrapper */}
// //       <div className="absolute inset-0 z-0">
// //         <Image 
// //           src={bgDigital} 
// //           alt="Digital section background decoration" 
// //           fill 
// //           className="object-cover object-center opacity-40 mix-blend-screen" 
// //           priority
// //         />
// //         {/* Deep navy overlay gradient to make text readable over the background lines/dots */}
// //         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/70 via-[#0a0f24]/90 to-[#0a0f24]" />
// //       </div>

// //       {/* 1. FLOATING TOP BANNER (Half on white section above, half on blue) */}
// //       <div className="absolute top-0 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1240px" }}>
// //         <div className="relative overflow-hidden rounded-md p-8 shadow-2xl md:p-10 min-h-[160px] flex items-center bg-[#111836]">
          
// //           {/* Banner Background Image */}
// //           <div className="absolute inset-0 z-0">
// //             <Image 
// //               src={transformBg} 
// //               alt="Transform banner background" 
// //               fill 
// //               className="object-cover"
// //               priority
// //             />
// //           </div>

// //           {/* Banner Content */}
// //           <div className="relative z-10 flex flex-col items-start justify-around gap-2 md:flex-row md:items-center w-full">
// //             <div className="space-y-2 max-w-3xl">
// //               <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
// //                 Transform Your Vision Into Reality With Dev !
// //               </h2>
// //               <p className="text-lg font-semibold text-slate-200/90 sm:text-sm">
// //                 We are dedicated to helping you bring your vision to life with our top-quality web & IT solutions services.
// //               </p>
// //             </div>
// //             <a
// //               href="/contact"
// //               className="inline-flex items-center justify-center rounded-md bg-[#ff5c3d] px-6 py-3.5 text-base font-bold text-white shadow-md transition-colors duration-200 hover:bg-orange-600 shrink-0"
// //             >
// //               Start a Project
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 2. MAIN SPLIT CONTENT GRID */}
// //       <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-12" style={{ maxWidth: "1240px" }}>
// //         <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
// //           {/* Left Column: Staggered Features Grid */}
// //           <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
// //             {features.map(({ title, description, Icon }, index) => (
// //               <div 
// //                 key={title} 
// //                 className={`rounded-xl bg-[#0d1533]/90 p-8 text-center border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 shadow-lg
// //                   ${index % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"}`}
// //               >
// //                 <div className="mx-auto mb-5 inline-flex cursor-pointer h-14 w-14 items-center justify-center rounded-full bg-[#1b2761] hover:bg-[#ff5c3d]  text-white">
// //                   <Icon className="h-8 w-8 text-white" />
// //                 </div>
// //                 <h3 className="text-base font-bold text-white mb-2">{title}</h3>
// //                 <p className="text-base leading-6 text-slate-400 max-w-[240px] mx-auto">{description}</p>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Right Column: Text Layout & Checklist */}
// //           <div className="space-y-8 lg:col-span-5 lg:pt-4">
// //             <div className="space-y-3">
// //               <span className="text-xl  font-bold  text-blue-500 ">
// //                 Discover Our Range of Services
// //               </span>
// //               <h2 className="text-4xl mt-4 font-bold tracking-tight sm:text-4xl text-white leading-tight">
// //                 Digital Creativity <br /> Solutions
// //               </h2>
// //             </div>

// //             {/* Checklist items mapping */}
// //             <div className="space-y-6">
// //               {solutions.map((item) => (
// //                 <div key={item.title} className="flex gap-4 items-start">
// //                   <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[#ff5c3d]">
// //                     <Check className="h-5 w-5 stroke-[3.5]" />
// //                   </div>
// //                   <div className="space-y-1">
// //                     <h4 className="text-lg font-semibold text-white">{item.title}</h4>
// //                     <p className="text-sm leading-5 text-slate-400">{item.description}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Free Quote Button */}
// //             <div className="pt-2 mt-5">
// //               <a
// //                 href="/contact"
// //                 className="inline-flex items-center justify-center rounded-md bg-[#ff5c3d] px-7 py-3.5 text-lg font-bold text-white shadow-md transition-colors duration-200 hover:bg-orange-600"
// //               >
// //                 Get A Free Quote
// //               </a>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import { Clock, Cloud, LayoutDashboard, Settings, Check } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// import bgDigital from "@/assets/bg_digital.webp";
// import transformBg from "@/assets/transform.webp";

// const features = [
//   {
//     title: "Cloud Services",
//     description:
//       "We offer a range of cloud solutions, including cloud migration, cloud integration, and cloud-based software development.",
//     Icon: Cloud,
//   },
//   {
//     title: "Highly Customizable",
//     description:
//       "Our team of experts is dedicated to understanding your business and its unique challenges and developing solutions that are customized to your needs.",
//     Icon: Settings,
//   },
//   {
//     title: "UI / UX Experience",
//     description:
//       "We offer a range of UI/UX design solutions, including wireframing, prototyping, and user testing.",
//     Icon: LayoutDashboard,
//   },
//   {
//     title: "Time Management",
//     description:
//       "We offer a range of time management solutions, including project management software, task tracking tools, and time tracking software.",
//     Icon: Clock,
//   },
// ];

// const solutions = [
//   {
//     title: "Innovative Approach",
//     description:
//       "Our team is committed to staying up-to-date with the latest technologies and trends in web development, software solutions, and digital marketing. We leverage our expertise to provide innovative solutions that help businesses succeed in today's competitive marketplace.",
//   },
//   {
//     title: "Tailored Solutions",
//     description:
//       "We believe in providing tailored solutions to each of our clients, based on their unique business needs and goals. Our team of experts works closely with clients to understand their requirements and design solutions that address their specific challenges.",
//   },
//   {
//     title: "Quality Assurance",
//     description:
//       "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our quality standards before delivery.",
//   },
// ];

// export function HomeDigital() {
//   return (
//     <section className="relative bg-[#0a0f24] text-white pt-32 pb-24 mt-32">
      
//       {/* FIXED: Main Section Background Wrapper */}
//       <div className="absolute inset-0 z-0">
//         <Image 
//           src={bgDigital} 
//           alt="Digital section background decoration" 
//           fill 
//           className="object-cover object-center opacity-40 mix-blend-screen" 
//           priority
//         />
//         {/* Deep navy overlay gradient to make text readable over the background lines/dots */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/70 via-[#0a0f24]/90 to-[#0a0f24]" />
//       </div>

//       {/* 1. FLOATING TOP BANNER CONTAINER (Animate Down) */}
//       <div className="absolute top-0 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1240px" }}>
//         <RevealAnimation direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
//           <div className="relative overflow-hidden rounded-md p-8 shadow-2xl md:p-10 min-h-[160px] flex items-center bg-[#111836]">
            
//             {/* Banner Background Image */}
//             <div className="absolute inset-0 z-0">
//               <Image 
//                 src={transformBg} 
//                 alt="Transform banner background" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Banner Content Elements */}
//             <div className="relative z-10 flex flex-col items-start justify-around gap-2 md:flex-row md:items-center w-full">
//               <div className="space-y-2 max-w-3xl">
//                 <RevealAnimation direction="left" duration={1.0} delay={0.2} offset={30} animationType="from">
//                   <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl lg:text-4xl text-white">
//                     Transform Your Vision Into Reality With Dev !
//                   </h2>
//                 </RevealAnimation>
                
//                 <RevealAnimation direction="left" duration={1.0} delay={0.3} offset={20} animationType="from">
//                   <p className="text-lg font-semibold text-slate-200/90 sm:text-sm">
//                     We are dedicated to helping you bring your vision to life with our top-quality web & IT solutions services.
//                   </p>
//                 </RevealAnimation>
//               </div>

//               <RevealAnimation direction="right" duration={1.0} delay={0.4} offset={30} animationType="from">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center rounded-md bg-[#ff5c3d] px-6 py-3.5 text-base font-bold text-white shadow-md transition-colors duration-200 hover:bg-orange-600 shrink-0"
//                 >
//                   Start a Project
//                 </a>
//               </RevealAnimation>
//             </div>

//           </div>
//         </RevealAnimation>
//       </div>

//       {/* 2. MAIN SPLIT CONTENT GRID */}
//       <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-12" style={{ maxWidth: "1240px" }}>
//         <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          
//           {/* Left Column: Staggered Features Grid */}
//           <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
//             {features.map(({ title, description, Icon }, index) => {
//               // Alternating horizontal slide-ins to match your staggered flow layout
//               const featureDirection = index % 2 === 0 ? "left" : "right";

//               return (
//                 <RevealAnimation 
//                   key={title} 
//                   direction={featureDirection} 
//                   duration={1.2} 
//                   delay={0.2 + index * 0.12} 
//                   offset={50} 
//                   animationType="from"
//                 >
//                   <div 
//                     className={`rounded-xl bg-[#0d1533]/90 p-8 text-center border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 shadow-lg
//                       ${index % 2 === 0 ? "lg:-translate-y-4" : "lg:translate-y-4"}`}
//                   >
//                     <div className="mx-auto mb-5 inline-flex cursor-pointer h-14 w-14 items-center justify-center rounded-full bg-[#1b2761] hover:bg-[#ff5c3d]  text-white">
//                       <Icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-base font-bold text-white mb-2">{title}</h3>
//                     <p className="text-base leading-6 text-slate-400 max-w-[240px] mx-auto">{description}</p>
//                   </div>
//                 </RevealAnimation>
//               );
//             })}
//           </div>

//           {/* Right Column: Text Layout & Checklist */}
//           <div className="space-y-8 lg:col-span-5 lg:pt-4">
            
//             {/* Headers wrapped independently for staggered lines entry */}
//             <div className="space-y-3">
//               <RevealAnimation direction="left" duration={1.1} delay={0.2} offset={40} animationType="from">
//                 <span className="text-xl font-bold text-blue-500 block">
//                   Discover Our Range of Services
//                 </span>
//               </RevealAnimation>

//               <RevealAnimation direction="left" duration={1.1} delay={0.35} offset={40} animationType="from">
//                 <h2 className="text-4xl mt-4 font-bold tracking-tight sm:text-4xl text-white leading-tight">
//                   Digital Creativity <br /> Solutions
//                 </h2>
//               </RevealAnimation>
//             </div>

//             {/* Checklist Items: Each item animates upwards sequentially */}
//             <div className="space-y-6">
//               {solutions.map((item, index) => (
//                 <RevealAnimation 
//                   key={item.title} 
//                   direction="up" 
//                   duration={1.0} 
//                   delay={0.45 + index * 0.12} 
//                   offset={30} 
//                   animationType="from"
//                 >
//                   <div className="flex gap-4 items-start">
//                     <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[#ff5c3d]">
//                       <Check className="h-5 w-5 stroke-[3.5]" />
//                     </div>
//                     <div className="space-y-1">
//                       <h4 className="text-lg font-semibold text-white">{item.title}</h4>
//                       <p className="text-sm leading-5 text-slate-400">{item.description}</p>
//                     </div>
//                   </div>
//                 </RevealAnimation>
//               ))}
//             </div>

//             {/* Free Quote Action Link Button */}
//             <RevealAnimation direction="up" duration={1.1} delay={0.8} offset={25} animationType="from">
//               <div className="pt-2 mt-5">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center rounded-md bg-[#ff5c3d] px-7 py-3.5 text-lg font-bold text-white shadow-md transition-colors duration-200 hover:bg-orange-600"
//                 >
//                   Get A Free Quote
//                 </a>
//               </div>
//             </RevealAnimation>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { Clock, Cloud, LayoutDashboard, Settings, Check } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation";

// import bgDigital from "@/assets/bg_digital.webp";
// import transformBg from "@/assets/transform.webp";

// const features = [
//   {
//     title: "Cloud Services",
//     description:
//       "We offer a range of cloud solutions, including cloud migration, cloud integration, and cloud-based software development.",
//     Icon: Cloud,
//   },
//   {
//     title: "Highly Customizable",
//     description:
//       "Our team of experts is dedicated to understanding your business and its unique challenges and developing solutions that are customized to your needs.",
//     Icon: Settings,
//   },
//   {
//     title: "UI / UX Experience",
//     description:
//       "We offer a range of UI/UX design solutions, including wireframing, prototyping, and user testing.",
//     Icon: LayoutDashboard,
//   },
//   {
//     title: "Time Management",
//     description:
//       "We offer a range of time management solutions, including project management software, task tracking tools, and time tracking software.",
//     Icon: Clock,
//   },
// ];

// const solutions = [
//   {
//     title: "Innovative Approach",
//     description:
//       "Our team is committed to staying up-to-date with the latest technologies and trends in web development, software solutions, and digital marketing. We leverage our expertise to provide innovative solutions that help businesses succeed in today's competitive marketplace.",
//   },
//   {
//     title: "Tailored Solutions",
//     description:
//       "We believe in providing tailored solutions to each of our clients, based on their unique business needs and goals. Our team of experts works closely with clients to understand their requirements and design solutions that address their specific challenges.",
//   },
//   {
//     title: "Quality Assurance",
//     description:
//       "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our quality standards before delivery.",
//   },
// ];

// export function HomeDigital() {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     /* 
//       FIXED CLIPPING BUG: 
//       Removed overflow-hidden from the main parent container so the top floating card 
//       can render cleanly outside the upper border frame without being sliced off.
//     */
//     <section className="relative bg-[#0a0f24] text-white pt-40 pb-20 sm:pb-24 mt-40 select-none">
      
//       {/* 
//         FIXED CLIPPING LAYER: 
//         Isolated the grid backdrop graphic image and gradient system into its own separate 
//         overflow-hidden capsule so background vector elements don't spill horizontally.
//       */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-inherit">
//         <Image 
//           src={bgDigital} 
//           alt="Digital section background decoration map scheme lattice pattern" 
//           fill 
//           className="object-cover object-center opacity-30 mix-blend-screen" 
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/80 via-[#0a0f24]/95 to-[#0a0f24]" />
//       </div>

//       {/* ================= 1. FLOATING TOP BANNER CONTAINER ================= */}
//       <div className="absolute top-0 left-1/2 z-30 w-full -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8" style={{ maxWidth: "1240px" }}>
//         <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={30} animationType="from">
//           <div className="relative overflow-hidden rounded-2xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.45)] bg-[#111836] border border-white/[0.04]">
            
//             {/* Banner Background Image */}
//             <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
//               <Image 
//                 src={transformBg} 
//                 alt="Transform vision banner backing graphic configuration layer" 
//                 fill 
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Banner Content Elements */}
//             <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 w-full text-left">
//               <div className="space-y-2 max-w-3xl">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
//                   Transform Your Vision Into Reality With Dev !
//                 </h2>
//                 <p className="text-sm sm:text-[14.5px] font-normal text-slate-300/90 leading-relaxed">
//                   We are dedicated to helping you bring your vision to life with our top-quality web & IT solutions services.
//                 </p>
//               </div>

//               <div className="w-full lg:w-auto shrink-0">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all duration-300 shrink-0"
//                 >
//                   Start a Project
//                 </a>
//               </div>
//             </div>

//           </div>
//         </RevealAnimation>
//       </div>

//       {/* ================= 2. MAIN SPLIT CONTENT GRID ================= */}
//       <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24" style={{ maxWidth: "1240px" }}>
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">
          
//           {/* LEFT COLUMN: FEATURES GRID LAYOUT */}
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:col-span-7 order-last lg:order-first">
//             {features.map(({ title, description, Icon }, index) => {
//               let featureDirection: 'left' | 'right' | 'up' = 'up';
//               if (isDesktop) {
//                 featureDirection = index % 2 === 0 ? "left" : "right";
//               }

//               return (
//                 <RevealAnimation 
//                   key={title} 
//                   direction={featureDirection} 
//                   duration={0.9} 
//                   delay={isDesktop ? 0.15 + index * 0.1 : index * 0.08} 
//                   offset={35} 
//                   animationType="from"
//                 >
//                   <div 
//                     className={`group rounded-2xl bg-[#0d1533]/60 p-6 sm:p-8 text-center border border-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 shadow-lg hover:-translate-y-1 hover:bg-[#0d1533]/80
//                       ${isDesktop ? (index % 2 === 0 ? "-translate-y-4" : "translate-y-4") : "translate-y-0"}`}
//                   >
//                     <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-[#ff5c3d] group-hover:border-transparent text-white transition-all duration-300 ease-out group-hover:scale-105">
//                       <Icon className="h-6 w-6 text-white" />
//                     </div>
//                     <h3 className="text-base font-bold text-white mb-2 tracking-tight">{title}</h3>
//                     <p className="text-[14px] leading-relaxed text-slate-400 max-w-[260px] mx-auto font-normal">{description}</p>
//                   </div>
//                 </RevealAnimation>
//               );
//             })}
//           </div>

//           {/* RIGHT COLUMN: SOLUTIONS ACCORDION LIST */}
//           <div className="space-y-8 lg:col-span-5 lg:pt-6 text-left">
//             <div className="space-y-3">
//               <RevealAnimation direction={isDesktop ? "left" : "up"} duration={0.9} delay={0.1} offset={30} animationType="from">
//                 <span className="text-sm font-bold tracking-wider text-blue-500 uppercase block">
//                   Discover Our Range of Services
//                 </span>
//               </RevealAnimation>

//               <RevealAnimation direction={isDesktop ? "left" : "up"} duration={0.9} delay={0.18} offset={30} animationType="from">
//                 <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight pt-1">
//                   Digital Creativity <br /> Solutions
//                 </h2>
//               </RevealAnimation>
//             </div>

//             {/* Checklist Mapping */}
//             <div className="space-y-6">
//               {solutions.map((item, index) => (
//                 <RevealAnimation 
//                   key={item.title} 
//                   direction="up" 
//                   duration={0.85} 
//                   delay={0.25 + index * 0.1} 
//                   offset={25} 
//                   animationType="from"
//                 >
//                   <div className="flex gap-4 items-start group">
//                     <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[#ff5c3d] transition-transform duration-300 group-hover:scale-110">
//                       <Check className="h-5 w-5 stroke-[3.5]" />
//                     </div>
//                     <div className="space-y-1">
//                       <h4 className="text-[16.5px] font-bold text-white tracking-tight">{item.title}</h4>
//                       <p className="text-[14px] leading-relaxed text-slate-400 font-normal">{item.description}</p>
//                     </div>
//                   </div>
//                 </RevealAnimation>
//               ))}
//             </div>

//             {/* Free Quote Button */}
//             <RevealAnimation direction="up" duration={0.9} delay={0.5} offset={20} animationType="from">
//               <div className="pt-3">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all duration-300"
//                 >
//                   Get A Free Quote
//                 </a>
//               </div>
//             </RevealAnimation>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, Cloud, LayoutDashboard, Settings, Check } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

import bgDigital from "@/assets/bg_digital.webp";
import transformBg from "@/assets/transform.webp";
import Link from "next/link";

const features = [
  {
    title: "Cloud Services",
    description:
      "We offer a range of cloud solutions, including cloud migration, cloud integration, and cloud-based software development.",
    Icon: Cloud,
  },
  {
    title: "Highly Customizable",
    description:
      "Our team of experts is dedicated to understanding your business and its unique challenges and developing solutions that are customized to your needs.",
    Icon: Settings,
  },
  {
    title: "UI / UX Experience",
    description:
      "We offer a range of UI/UX design solutions, including wireframing, prototyping, and user testing.",
    Icon: LayoutDashboard,
  },
  {
    title: "Time Management",
    description:
      "We offer a range of time management solutions, including project management software, task tracking tools, and time tracking software.",
    Icon: Clock,
  },
];

const solutions = [
  {
    title: "Innovative Approach",
    description:
      "Our team is committed to staying up-to-date with the latest technologies and trends in web development, software solutions, and digital marketing. We leverage our expertise to provide innovative solutions that help businesses succeed in today's competitive marketplace.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We believe in providing tailored solutions to each of our clients, based on their unique business needs and goals. Our team of experts works closely with clients to understand their requirements and design solutions that address their specific challenges.",
  },
  {
    title: "Quality Assurance",
    description:
      "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our quality standards before delivery.",
  },
];

export function HomeDigital() {
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
    /* 
      FIXED VISUAL LOOK: 
      - Removed the global negative margin from the main section so layout boundaries remain clean.
      - Added 'z-10 relative' to make sure the entire background wrapper stacks safely.
    */
    <section className="relative z-10 bg-[#0a0f24] text-white pt-24 lg:pt-32 pb-20 sm:pb-24 select-none">
      
      {/* Background Graphic Scheme Canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image 
          src={bgDigital} 
          alt="Digital section background decoration map scheme lattice pattern" 
          fill 
          className="object-cover object-center opacity-30 mix-blend-screen" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f24]/80 via-[#0a0f24]/95 to-[#0a0f24]" />
      </div>

      {/* ======================================================================
          1. DESKTOP SYSTEM LAYER (GSAP ACTIVE ABOVE LG BREAKPOINTS)
          ====================================================================== */}
      <div className="hidden lg:block w-full relative z-10">
        
        {/* 
          FIXED FLOATING LAYOUT (Matches image_b430e2.png):
          - Using 'relative z-30 -top-44 -mb-24' pulls the card exactly halfway out 
            of the container without clipping or overlay errors.
        */}
        <div className="mx-auto px-8 relative z-30 -top-44 -mb-24 w-full" style={{ maxWidth: "1240px" }}>
          <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={30} animationType="from">
            <div className="relative overflow-hidden rounded-2xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] bg-[#111836] border border-white/[0.04]">
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <Image src={transformBg} alt="Transform vision banner backing graphic configuration layer" fill className="object-cover" />
              </div>
              <div className="relative z-10 flex items-center justify-between gap-6 w-full text-left">
                <div className="space-y-2 max-w-3xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white leading-tight">
                    Transform Your Vision Into Reality With Dev !
                  </h2>
                  <p className="text-[14.5px] font-normal text-slate-300/90 leading-relaxed">
                    We are dedicated to helping you bring your vision to life with our top-quality web & IT solutions services.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-300">
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Main Split Grid */}
        <div className="mx-auto px-8 grid grid-cols-12 gap-16 items-start" style={{ maxWidth: "1240px" }}>
          
          {/* Features Cards Grid */}
          <div className="grid gap-6 grid-cols-2 col-span-7">
            {features.map(({ title, description, Icon }, index) => {
              const featureDirection = index % 2 === 0 ? "left" : "right";
              return (
                <RevealAnimation key={title} direction={featureDirection} duration={0.9} delay={0.15 + index * 0.1} offset={35} animationType="from">
                  <div className={`group rounded-2xl bg-[#0d1533]/60 p-8 text-center border border-white/[0.04] backdrop-blur-md transition-all duration-500 hover:border-blue-500/30 shadow-lg hover:-translate-y-1 hover:bg-[#0d1533]/80 ${index % 2 === 0 ? "-translate-y-4" : "translate-y-4"}`}>
                    <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-[#ff5c3d] group-hover:border-transparent text-white transition-all duration-300 ease-out group-hover:scale-105">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 tracking-tight">{title}</h3>
                    <p className="text-[14px] leading-relaxed text-slate-400 max-w-[260px] mx-auto font-normal">{description}</p>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>

          {/* Solutions Content Column */}
          <div className="space-y-8 col-span-5 pt-6 text-left">
            <div className="space-y-3">
              <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={30} animationType="from">
                <span className="text-sm font-bold tracking-wider text-blue-500 uppercase block">Discover Our Range of Services</span>
              </RevealAnimation>
              <RevealAnimation direction="left" duration={0.9} delay={0.18} offset={30} animationType="from">
                <h2 className="text-4xl font-bold tracking-tight text-white leading-tight pt-1">Digital Creativity <br /> Solutions</h2>
              </RevealAnimation>
            </div>

            <div className="space-y-6">
              {solutions.map((item, index) => (
                <RevealAnimation key={item.title} direction="up" duration={0.85} delay={0.25 + index * 0.1} offset={25} animationType="from">
                  <div className="flex gap-4 items-start group">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-[#ff5c3d] transition-transform duration-300 group-hover:scale-110">
                      <Check className="h-5 w-5 stroke-[3.5]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[16.5px] font-bold text-white tracking-tight">{item.title}</h4>
                      <p className="text-[14px] leading-relaxed text-slate-400 font-normal">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            <RevealAnimation direction="up" duration={0.9} delay={0.5} offset={20} animationType="from">
              <div className="pt-3">
                <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/10 transition-all duration-300">
                  Get A Free Quote
                </Link>
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC HARDWARE INJECTION)
          ====================================================================== */}
      {/* 
        Responsive mobile layout flow adjusts dynamically to match standard vertical spacing 
        rules, ensuring elements do not break bounds or overlay over header elements.
      */}
      <div className="block lg:hidden w-full relative z-10 px-4 sm:px-6 space-y-12">
        
        {/* Top Floating Banner Box */}
        <div className="w-full max-w-[1240px] mx-auto -mt-36 relative z-30">
          <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-[#111836] border border-white/[0.04] shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-35">
              <Image src={transformBg} alt="Transform vision banner backing layer" fill className="object-cover" priority />
            </div>
            <div className="relative z-10 flex flex-col gap-5 text-center sm:text-left">
              <div className="space-y-1.5">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                  Transform Your Vision Into Reality With Dev !
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  We are dedicated to helping you bring your vision to life with our top-quality web & IT solutions services.
                </p>
              </div>
              <Link href="/contact-us" className="inline-flex items-center justify-center rounded-xl bg-[#ff5c3d] px-5 py-3 text-sm font-bold text-white shadow-md">
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Content Stacking Block Container */}
        <div className="flex flex-col gap-12 w-full">
          
          <div className="space-y-6 text-center sm:text-left max-w-xl mx-auto w-full">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-500 uppercase block">Discover Our Range of Services</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">Digital Creativity <br /> Solutions</h2>
            </div>

            <div className="space-y-5 text-left">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-3.5 items-start">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#ff5c3d]">
                    <Check className="h-5 w-5 stroke-[3.5]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-[16px] font-bold text-white tracking-tight">{item.title}</h4>
                    <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/contact-us" className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-[#ff5c3d] px-6 py-3.5 text-sm font-bold text-white shadow-md">
                Get A Free Quote
              </Link>
            </div>
          </div>

          {/* Feature Blocks Stack */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="rounded-2xl bg-[#0d1533]/60 p-6 text-center border border-white/[0.04] backdrop-blur-md shadow-md">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-white">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 tracking-tight">{title}</h3>
                <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-400 max-w-[240px] mx-auto font-normal">{description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}