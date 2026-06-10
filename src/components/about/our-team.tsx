// "use client";

// import Image from "next/image";
// import RevealAnimation from "../animation/RevealAnimation"; // Verify your folder path structure

// // Dynamic images fetched directly from your local assets path directory
// import leaderImg from "@/assets/about/blockChain.jpeg"; // Big main highlighted team member
// import member1 from "@/assets/about/ceo.jpeg";
// import member2 from "@/assets/about/cofounder.png";
// import member3 from "@/assets/about/ux.png";

// const teamData = [
//   {
//     name: "Habib Rehman",
//     role: "Ceo & Founder",
//     image: member1,
//   },
//   {
//     name: "Neil Gibson",
//     role: "Co-Founder & CMO",
//     image: member2,
//   },
//   {
//     name: "Abdullah",
//     role: "Graphic Web Designer",
//     image: member3,
//   },
// ];

// export function OurTeam() {
//   return (
//     <section className="relative bg-white text-slate-900 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
//       <div className="mx-auto max-w-[1140px]">
        
//         {/* --- HEADER TITLE ZONE --- */}
//         <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
//           <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={25} animationType="from">
//             <span className="text-lg font-bold text-[#104cba] tracking-widest uppercase block">
//               Team Member
//             </span>
//           </RevealAnimation>
          
//           <RevealAnimation direction="down" duration={1.1} delay={0.12} offset={30} animationType="from">
//             <h2 className="text-3xl font-bold tracking-tight text-[#08112a] sm:text-4xl leading-tight">
//               Our Proficient Team
//             </h2>
//           </RevealAnimation>
//         </div>

//         {/* --- 1. MAIN FEATURED LEADER (1st Member) --- */}
//         <div className="flex justify-center mb-16">
//           <RevealAnimation direction="up" duration={1.2} delay={0.2} offset={40} animationType="from">
//             <div className="group relative w-[380px] h-[380px] rounded-full bg-[#fefe43] overflow-hidden shadow-lg border-4 border-white transition-all duration-300 hover:scale-[1.02] cursor-pointer">
//               <Image
//                 src={leaderImg}
//                 alt="Habib Rehman - CEO & Founder"
//                 fill
//                 className="object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-110"
//                 priority
//               />
              
//               {/* SLIDE UP OVERLAY */}
//               <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 p-6 text-center">
//                 <h3 className="text-2xl font-bold text-white tracking-wide">
//                   Mohsin Ali Solangi
//                 </h3>
//                 <p className="text-sm font-bold text-orange-400 tracking-widest uppercase mt-2">
//                   Blockchain Developer
//                 </p>
//               </div>
//             </div>
//           </RevealAnimation>
//         </div>

//         {/* --- 2. LOWER ROW GRID MAPPING (Remaining 3 Members) --- */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
//           {teamData.map((member, index) => (
//             <RevealAnimation
//               key={member.name}
//               direction="up"
//               duration={1.0}
//               delay={0.3 + index * 0.12}
//               offset={45}
//               animationType="from"
//             >
//               {/* Box framing utilizing image_f5ef58 layout styling rules */}
//               <div className="group relative w-full aspect-square max-w-[340px] mx-auto overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
//                 <Image
//                   src={member.image}
//                   alt={`${member.name} - ${member.role}`}
//                   fill
//                   className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
//                 />
                
//                 {/* SLIDE UP OVERLAY */}
//                 <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 p-6 text-center">
//                   <h3 className="text-xl font-bold text-white tracking-wide">
//                     {member.name}
//                   </h3>
//                   <p className="text-xs font-bold text-orange-400 tracking-widest uppercase mt-1.5">
//                     {member.role}
//                   </p>
//                 </div>
//               </div>
//             </RevealAnimation>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import RevealAnimation from "../animation/RevealAnimation";

// // Dynamic images fetched directly from your local assets path directory
// import leaderImg from "@/assets/about/blockChain.jpeg"; 
// import member1 from "@/assets/about/ceo.jpeg";
// import member2 from "@/assets/about/cofounder.png";
// import member3 from "@/assets/about/ux.png";
// import saudImg from "@/assets/about/saud.jpeg";

// const teamData = [
//   {
//     name: "Habib Rehman",
//     role: "CEO & Founder",
//     image: member1,
//     socials: { linkedin: "#", github: "#" }
//   },
//   {
//     name: "Neil Gibson",
//     role: "Co-Founder & CMO",
//     image: member2,
//     socials: { linkedin: "#", github: "#" }
//   },
//   {
//     name: "Abdullah",
//     role: "Graphic Web Designer",
//     image: member3,
//     socials: { linkedin: "#", github: "#" }
//   },
//   {
//     name: "Saud Gul",
//     role: "Full Stack Developer",
//     image: saudImg,
//     socials: { linkedin: "#", github: "#" }
//   },
//   {
//     name: "Mohsin Ali Solangi",
//     role: "Blockchain Developer",
//     image: leaderImg,
//     socials: { linkedin: "#", github: "#" }
//   },
// ];

// export function OurTeam() {
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
//     <section className="relative w-full bg-[#071033] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
//       <div className="mx-auto max-w-[1240px]">
        
//         {/* ======================================================================
//             HEADER TITLE ZONE (Clean Muted Dark Variant)
//             ====================================================================== */}
//         <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-24">
//           {/* Desktop Animating Path */}
//           <div className="hidden lg:block space-y-3">
//             <RevealAnimation direction="down" duration={0.8} delay={0.1} offset={20} animationType="from">
//               <span className="text-xs sm:text-sm font-extrabold tracking-widest text-cyan-400 uppercase block">
//                 Team Member
//               </span>
//             </RevealAnimation>
//             <RevealAnimation direction="down" duration={0.9} delay={0.18} offset={25} animationType="from">
//               <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white uppercase">
//                 Our Proficient Team
//               </h2>
//             </RevealAnimation>
//           </div>

//           {/* Mobile Static Path (No performance lag) */}
//           <div className="block lg:hidden space-y-2">
//             <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block">
//               Team Member
//             </span>
//             <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
//               Our Proficient Team
//             </h2>
//           </div>
//         </div>

//         {/* ======================================================================
//             TEAM MATRIX DOCK: CIRCULAR PROFILE GRID MAP
//             ====================================================================== */}
//         <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start justify-center w-full">
//           {teamData.map((member, index) => (
//             <React.Fragment key={member.name}>
              
//               {/* DESKTOP VIEW PROFILE CARD SYSTEM */}
//               <div className="hidden lg:block text-center relative">
//                 <RevealAnimation
//                   direction="up"
//                   duration={0.9}
//                   delay={0.12 + index * 0.08}
//                   offset={30}
//                   animationType="from"
//                 >
//                   <div className="flex flex-col items-center space-y-5 group cursor-pointer">
                    
//                     {/* Exact Circular Image Profile Frame From image_e2a1cf.jpg */}
//                     <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-slate-800 border-2 border-white/5 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-cyan-400/50 group-hover:scale-105">
//                       <Image
//                         src={member.image}
//                         alt={`${member.name} - ${member.role}`}
//                         fill
//                         className="object-cover object-center transform scale-[1.01] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
//                         sizes="200px"
//                       />
//                     </div>

//                     {/* Identity Typography Stack */}
//                     <div className="space-y-1">
//                       <h3 className="text-base font-black tracking-wider text-white uppercase transition-colors duration-300 group-hover:text-cyan-300">
//                         {member.name}
//                       </h3>
//                       <p className="text-[13px] font-medium text-slate-400">
//                         {member.role}
//                       </p>
//                     </div>

//                     {/* Isolated Bottom Circular Social Icons Dock */}
//                     <div className="flex gap-3 items-center pt-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
//                       {/* LinkedIn Icon */}
//                       <a href={member.socials.linkedin} className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-[#0c24b4] hover:scale-110 transition-all duration-200">
//                         <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
//                           <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                         </svg>
//                       </a>
                      
//                       {/* GitHub Icon */}
//                       <a href={member.socials.github} className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-white hover:text-slate-950 hover:scale-110 transition-all duration-200">
//                         <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
//                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                         </svg>
//                       </a>
//                     </div>

//                   </div>
//                 </RevealAnimation>
//               </div>

//               {/* MOBILE VIEW PROFILE CARD SYSTEM */}
//               <div className="block lg:hidden h-full text-center">
//                 <div className="flex flex-col items-center space-y-4 active:scale-[0.99] transition-transform">
                  
//                   <div className="relative w-40 h-40 rounded-full overflow-hidden bg-slate-800 border border-white/10 shadow-md">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       fill
//                       className="object-cover object-center"
//                       sizes="160px"
//                     />
//                   </div>

//                   <div className="space-y-0.5">
//                     <h3 className="text-base font-black tracking-wide text-white uppercase">{member.name}</h3>
//                     <p className="text-xs font-medium text-slate-400">{member.role}</p>
//                   </div>
                  
//                   <div className="flex gap-3 items-center pt-0.5">
//                     {/* LinkedIn */}
//                     <a href={member.socials.linkedin} className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
//                       <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
//                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//                       </svg>
//                     </a>
                    
//                     {/* GitHub */}
//                     <a href={member.socials.github} className="h-7 w-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
//                       <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
//                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                       </svg>
//                     </a>
//                   </div>

//                 </div>
//               </div>

//             </React.Fragment>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation";

// Dynamic images fetched directly from your local assets path directory
import leaderImg from "@/assets/about/blockChain.jpeg"; 
import member1 from "@/assets/about/ceo.jpeg";
import member2 from "@/assets/about/cofounder.png";
import member3 from "@/assets/about/ux.png";
import saudImg from "@/assets/about/saud.jpeg";
import asmaImg from "@/assets/about/asma.jpeg";
import Link from "next/link";

const teamData = [
  {
    name: "Habib Rehman",
    role: "CEO & Founder",
    image: member1,
    socials: { linkedin: "#", github: "#" }
  },
    {
    name: "Asma Rehman",
    role: "CTO",
    image: asmaImg,
    socials: { linkedin: "https://www.linkedin.com/in/asma-rehman-363986335?utm_source=share_via&utm_content=profile&utm_medium=member_ios", github: "#" }
  },
  {
    name: "Neil Gibson",
    role: "Co-Founder & CMO",
    image: member2,
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Abdullah",
    role: "Graphic Web Designer",
    image: member3,
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Mohsin Ali Solangi",
    role: "Blockchain Developer",
    image: leaderImg,
    socials: { linkedin: "#", github: "#" }
  },
   {
    name: "Saud Gul",
    role: "Full Stack Developer",
    image: saudImg,
    socials: { linkedin: "https://www.linkedin.com/in/saud-gul-b7942323b/", github: "https://github.com/saudgul" }
  },
];

export function OurTeam() {
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
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-8 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px]">
        
        {/* ======================================================================
            HEADER TITLE ZONE (Sleek Muted Light Variant)
            ====================================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-16">
          {/* Desktop Animating Path */}
          <div className="hidden lg:block space-y-3">
            <RevealAnimation direction="down" duration={0.8} delay={0.1} offset={20} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-widest text-[#104cba] uppercase block">
                Team Member
              </span>
            </RevealAnimation>
            <RevealAnimation direction="down" duration={0.9} delay={0.18} offset={25} animationType="from">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#08112a] ">
                Our Proficient Team
              </h2>
            </RevealAnimation>
          </div>

          {/* Mobile Static Path (No animation overhead) */}
          <div className="block lg:hidden space-y-2">
            <span className="text-sm font-bold text-[#104cba] tracking-wider uppercase block">
              Team Member
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a] ">
              Our Proficient Team
            </h2>
          </div>
        </div>

        {/* ======================================================================
            TEAM MATRIX DOCK: CIRCULAR PROFILE GRID MAP
            ====================================================================== */}
        <div className="grid gap-x-8 gap-y-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start justify-center w-full">
          {teamData.map((member, index) => (
            <React.Fragment key={member.name}>
              
              {/* DESKTOP VIEW PROFILE CARD SYSTEM */}
              <div className="hidden lg:block text-center relative">
                <RevealAnimation
                  direction="up"
                  duration={0.9}
                  delay={0.12 + index * 0.08}
                  offset={30}
                  animationType="from"
                >
                  <div className="flex flex-col items-center space-y-5 group cursor-pointer">
                    
                    {/* Exact Circular Image Profile Frame From image_e2a1cf.jpg with refined shadow profiles */}
                    <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-white border-2 border-slate-200/40 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#104cba] group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover object-center transform scale-[1.01] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                        sizes="200px"
                      />
                    </div>

                    {/* Identity Typography Stack */}
                    <div className="space-y-1">
                      <h3 className="text-base font-bold tracking-wider text-[#08112a] uppercase transition-colors duration-300 group-hover:text-[#104cba]">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-slate-500">
                        {member.role}
                      </p>
                    </div>

                    {/* Isolated Bottom Circular Social Icons Dock */}
                    <div className="flex gap-3 items-center pt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {/* LinkedIn Icon */}
                      <Link href={member.socials.linkedin}  target="_blank"  rel="noopener noreferrer" className="h-8 w-8 rounded-full  border border-slate-200/80 flex items-center justify-center  bg-[#104cba] text-white hover:border-transparent hover:scale-110 transition-all duration-200 shadow-md">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                      
                      {/* GitHub Icon */}
                      <Link href={member.socials.github}  target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full  border border-slate-200/80 flex items-center justify-center bg-slate-900 text-white hover:border-transparent hover:scale-110 transition-all duration-200 shadow-md">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                    </div>

                  </div>
                </RevealAnimation>
              </div>

              {/* MOBILE VIEW PROFILE CARD SYSTEM */}
              <div className="block lg:hidden h-full text-center">
                <div className="flex flex-col items-center space-y-4 active:scale-[0.99] transition-transform">
                  
                  <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white border border-slate-200 shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="160px"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-base font-bold tracking-wide text-[#08112a] uppercase">{member.name}</h3>
                    <p className="text-sm font-medium text-slate-500">{member.role}</p>
                  </div>
                  
                  <div className="flex gap-3 items-center pt-0.5">
                    {/* LinkedIn */}
                    <Link href={member.socials.linkedin}  target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-[#104cba] text-white border border-slate-200 flex items-center justify-center  shadow-sm">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Link>
                    
                    {/* GitHub */}
                    <Link href={member.socials.github}  target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-slate-900 text-white border border-slate-200 flex items-center justify-center  shadow-sm">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}