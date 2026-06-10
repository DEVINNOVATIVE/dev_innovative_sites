

// "use client";


// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation';

// import dummyHeroImage from "@/assets/hero.webp";

// export function HomeHero() {
//     const [activeAccent, setActiveAccent] = useState<"blue" | "orange" | null>(null);

//     return (
//         <section className="relative pb-18 mx-auto flex justify-center overflow-hidden bg-gradient-to-b from-[#071033] to-[#0b1630] text-white">
//             <div className="absolute left-0 top-0 h-full w-full bg-[url('/src/assets/hero.webp')] bg-cover bg-center opacity-6 mix-blend-overlay pointer-events-none" />

//             {/* decorative circuit lines and dots */}
//             <div className="absolute inset-0 pointer-events-none">
//                 <svg className="w-full h-full mix-blend-screen" viewBox="0 0 1400 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                         <linearGradient id="g1" x1="0" x2="1">
//                             <stop offset="0%" stopColor="#4fd1c5" stopOpacity="1" />
//                             <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
//                         </linearGradient>
//                         <linearGradient id="g2" x1="0" x2="1">
//                             <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
//                             <stop offset="100%" stopColor="#ff6b4a" stopOpacity="1" />
//                         </linearGradient>
//                     </defs>

//                     <g opacity="0.32">
//                         <rect x="0" y="0" width="1400" height="720" fill="none" />
//                         {/* denser vertical nodes */}
//                         <line x1="40" y1="20" x2="40" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="40" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="120" y1="40" x2="120" y2="680" stroke="url(#g1)" strokeWidth="2" />
//                         <circle cx="120" cy="40" r="5" fill="#60a5fa" />

//                         <line x1="200" y1="10" x2="200" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="200" cy="10" r="4" fill="#34d399" />

//                         <line x1="280" y1="80" x2="280" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="280" cy="80" r="4" fill="#60a5fa" />

//                         <line x1="360" y1="30" x2="360" y2="660" stroke="url(#g1)" strokeWidth="2" />
//                         <circle cx="360" cy="30" r="5" fill="#4fd1c5" />

//                         <line x1="440" y1="20" x2="440" y2="700" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="440" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="520" y1="100" x2="520" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="520" cy="100" r="4" fill="#60a5fa" />

//                         <line x1="600" y1="10" x2="600" y2="720" stroke="url(#g2)" strokeWidth="2" />
//                         <circle cx="600" cy="10" r="5" fill="#ff7a59" />

//                         <line x1="680" y1="60" x2="680" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="680" cy="60" r="4" fill="#34d399" />

//                         <line x1="760" y1="30" x2="760" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="760" cy="30" r="4" fill="#60a5fa" />

//                         <line x1="840" y1="90" x2="840" y2="700" stroke="url(#g1)" strokeWidth="1.8" />
//                         <circle cx="840" cy="90" r="5" fill="#4fd1c5" />

//                         <line x1="920" y1="20" x2="920" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="920" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="1000" y1="140" x2="1000" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="1000" cy="140" r="4" fill="#60a5fa" />

//                         <line x1="1080" y1="40" x2="1080" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="1080" cy="40" r="4" fill="#34d399" />

//                         <line x1="1160" y1="60" x2="1160" y2="720" stroke="url(#g2)" strokeWidth="2" />
//                         <circle cx="1160" cy="60" r="5" fill="#ff6b4a" />

//                         <line x1="1240" y1="20" x2="1240" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="1240" cy="20" r="4" fill="#60a5fa" />

//                         <line x1="1320" y1="80" x2="1320" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="1320" cy="80" r="4" fill="#7dd3fc" />
//                     </g>
//                 </svg>
//             </div>

//             <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 px-10 pt-32 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:items-start">

//                 {/* Left Column Text content wrapped in a RevealAnimation */}
//                 <RevealAnimation direction="left" delay={0.1} offset={60} animationType="from">
//                     <div className="max-w-[720px] space-y-6 self-start">
//                         <div className="text-2xl font-medium text-white font-extrabold ">Technology & software Development</div>

//                         <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//                             Web & Software
//                             <br />
//                             Solutions
//                         </h1>

//                         <p className="max-w-[560px] text-sm text-[#cbd5e1]">
//                             With our expertise and innovative approach, we empower businesses to reach new heights of success in the digital realm. From web design and development to IT consulting and support, we have you covered.
//                         </p>

//                         <div className="flex items-center gap-4">
//                             <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] px-5 py-3 text-sm font-semibold text-white shadow-lg">Contact Us</Link>
//                             <Link href="/service" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white">Our Services</Link>
//                         </div>
//                     </div>
//                 </RevealAnimation>

//                 {/* Right Column Canvas graphic wrapped in a RevealAnimation */}
//                 <RevealAnimation direction="right" delay={0.3} offset={60} animationType="from">
//                     <div className="relative h-[420px] w-[420px] justify-self-center lg:justify-self-start">
//                         {/* blue curved shape (behind) */}
//                         <div
//                             className="absolute -left-12 -top-12 h-[520px] w-[520px] rounded-[40%] bg-[#3557ff] opacity-90"
//                             onMouseEnter={() => setActiveAccent("blue")}
//                             onMouseLeave={() => setActiveAccent(null)}
//                             style={{ transformOrigin: "50% 50%", animation: "blueFloat 6s ease-in-out infinite, blueMorph 8s ease-in-out infinite", willChange: "transform, borderRadius" }}
//                         />

//                         {/* orange curved shape (behind) */}
//                         <div
//                             className="absolute -right-12 -bottom-12 h-[480px] w-[480px] rounded-[40%] bg-[#ff4b34] opacity-90"
//                             onMouseEnter={() => setActiveAccent("orange")}
//                             onMouseLeave={() => setActiveAccent(null)}
//                             style={{ transformOrigin: "50% 50%", animation: "orangeFloat 7s ease-in-out infinite, orangeMorph 9s ease-in-out infinite", willChange: "transform, borderRadius" }}
//                         />

//                         {/* image tint overlay (appears when hovering color shapes) */}
//                         <div
//                             className={
//                                 activeAccent === "blue"
//                                     ? "absolute inset-0 z-40 rounded-full bg-[#3557ff]/18 transition-opacity duration-300 pointer-events-none"
//                                     : activeAccent === "orange"
//                                         ? "absolute inset-0 z-40 rounded-full bg-[#ff4b34]/18 transition-opacity duration-300 pointer-events-none"
//                                         : "absolute inset-0 z-40 rounded-full bg-transparent transition-opacity duration-300 pointer-events-none"
//                             }
//                         />

//                         {/* decorative blur behind image */}
//                         <div className="absolute left-0 top-1/4 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1b2b68] opacity-60 blur-2xl -z-10" />

//                         {/* hero image (on top) */}
//                         <div className="relative z-10 overflow-hidden rounded-full">
//                             <div className="relative h-[420px] w-[420px] rounded-full bg-[#fff]">
//                                 <Image src={dummyHeroImage} alt="Hero" fill className="object-cover" priority />
//                             </div>
//                         </div>

//                         <div className="absolute inset-0 z-20 rounded-full border border-white/5 pointer-events-none" />
//                     </div>
//                 </RevealAnimation>

//             </div>

//             {/* bottom white curve */}
//             <svg className="absolute left-0 bottom-0 w-full" viewBox="0 0 1400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M0,80 C200,20 400,20 700,80 C1000,140 1200,60 1400,80 L1400,120 L0,120 Z" fill="#fff" />
//             </svg>

//             <style jsx>{`
//                 /* Fluid, water-like float + morph animations */
//                 @keyframes blueFloat {
//                     0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                     25% { transform: translate(-8px, 6px) rotate(6deg) scale(1.02); }
//                     50% { transform: translate(0px, 12px) rotate(12deg) scale(1.04); }
//                     75% { transform: translate(8px, 6px) rotate(6deg) scale(1.02); }
//                     100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                 }

//                 @keyframes blueMorph {
//                     0% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
//                     25% { border-radius: 55% 45% 60% 40% / 45% 60% 30% 55%; }
//                     50% { border-radius: 42% 58% 52% 48% / 35% 55% 65% 45%; }
//                     75% { border-radius: 60% 40% 45% 55% / 55% 35% 45% 65%; }
//                     100% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
//                 }

//                 @keyframes orangeFloat {
//                     0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                     25% { transform: translate(10px, -6px) rotate(-6deg) scale(1.02); }
//                     50% { transform: translate(0px, -12px) rotate(-10deg) scale(1.04); }
//                     75% { transform: translate(-10px, -6px) rotate(-6deg) scale(1.02); }
//                     100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                 }

//                 @keyframes orangeMorph {
//                     0% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
//                     25% { border-radius: 50% 50% 40% 60% / 40% 65% 35% 60%; }
//                     50% { border-radius: 42% 58% 52% 48% / 30% 50% 70% 40%; }
//                     75% { border-radius: 60% 40% 55% 45% / 60% 30% 50% 50%; }
//                     100% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
//                 }
//             `}</style>
//         </section>
//     );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import RevealAnimation from '../animation/RevealAnimation';

// import dummyHeroImage from "@/assets/hero.webp";

// export function HomeHero() {
//     const [activeAccent, setActiveAccent] = useState<"blue" | "orange" | null>(null);

//     return (
//         <section className="relative pb-18 mx-auto flex justify-center overflow-hidden bg-gradient-to-b from-[#071033] to-[#0b1630] text-white">
//             <div className="absolute left-0 top-0 h-full w-full bg-[url('/src/assets/hero.webp')] bg-cover bg-center opacity-6 mix-blend-overlay pointer-events-none" />

//             {/* decorative circuit lines and dots */}
//             <div className="absolute inset-0 pointer-events-none">
//                 <svg className="w-full h-full mix-blend-screen" viewBox="0 0 1400 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
//                     <defs>
//                         <linearGradient id="g1" x1="0" x2="1">
//                             <stop offset="0%" stopColor="#4fd1c5" stopOpacity="1" />
//                             <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
//                         </linearGradient>
//                         <linearGradient id="g2" x1="0" x2="1">
//                             <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
//                             <stop offset="100%" stopColor="#ff6b4a" stopOpacity="1" />
//                         </linearGradient>
//                     </defs>

//                     <g opacity="0.32">
//                         <rect x="0" y="0" width="1400" height="720" fill="none" />
//                         <line x1="40" y1="20" x2="40" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="40" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="120" y1="40" x2="120" y2="680" stroke="url(#g1)" strokeWidth="2" />
//                         <circle cx="120" cy="40" r="5" fill="#60a5fa" />

//                         <line x1="200" y1="10" x2="200" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="200" cy="10" r="4" fill="#34d399" />

//                         <line x1="280" y1="80" x2="280" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="280" cy="80" r="4" fill="#60a5fa" />

//                         <line x1="360" y1="30" x2="360" y2="660" stroke="url(#g1)" strokeWidth="2" />
//                         <circle cx="360" cy="30" r="5" fill="#4fd1c5" />

//                         <line x1="440" y1="20" x2="440" y2="700" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="440" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="520" y1="100" x2="520" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="520" cy="100" r="4" fill="#60a5fa" />

//                         <line x1="600" y1="10" x2="600" y2="720" stroke="url(#g2)" strokeWidth="2" />
//                         <circle cx="600" cy="10" r="5" fill="#ff7a59" />

//                         <line x1="680" y1="60" x2="680" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="680" cy="60" r="4" fill="#34d399" />

//                         <line x1="760" y1="30" x2="760" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="760" cy="30" r="4" fill="#60a5fa" />

//                         <line x1="840" y1="90" x2="840" y2="700" stroke="url(#g1)" strokeWidth="1.8" />
//                         <circle cx="840" cy="90" r="5" fill="#4fd1c5" />

//                         <line x1="920" y1="20" x2="920" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="920" cy="20" r="4" fill="#7dd3fc" />

//                         <line x1="1000" y1="140" x2="1000" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="1000" cy="140" r="4" fill="#60a5fa" />

//                         <line x1="1080" y1="40" x2="1080" y2="700" stroke="#34d399" strokeWidth="1.8" />
//                         <circle cx="1080" cy="40" r="4" fill="#34d399" />

//                         <line x1="1160" y1="60" x2="1160" y2="720" stroke="url(#g2)" strokeWidth="2" />
//                         <circle cx="1160" cy="60" r="5" fill="#ff6b4a" />

//                         <line x1="1240" y1="20" x2="1240" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
//                         <circle cx="1240" cy="20" r="4" fill="#60a5fa" />

//                         <line x1="1320" y1="80" x2="1320" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
//                         <circle cx="1320" cy="80" r="4" fill="#7dd3fc" />
//                     </g>
//                 </svg>
//             </div>

//             {/* Main Layout Content Grid Container */}
//             <div className="mx-auto flex flex-col md:grid w-full max-w-[1400px] md:grid-cols-12 gap-16 px-6 pt-8 lg:pt-32 pb-12 sm:px-8 lg:px-10 lg:items-center">

//                 {/* Left Column Text content wrapped in a RevealAnimation */}
//                 <div className="w-full md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left mx-auto max-w-[720px]">
//                     <RevealAnimation direction="left" delay={0.1} offset={60} animationType="from">
//                         <div className="space-y-6 flex flex-col items-center md:items-start w-full">
//                             <div className="text-xl sm:text-2xl font-medium text-white font-extrabold">Next-Gen Elite Engineering</div>

//                             <h1 className="text-[22px] whitespace-nowrap leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl sm:whitespace-normal">
//                                 Consensus AI &   <br className="hidden sm:block" />Cryptographic Decentralized  Engineering
//                             </h1>
//                             <p className="max-w-[560px] text-sm text-[#cbd5e1] font-normal">
//                                 With our expertise and innovative approach, we empower businesses to reach new heights of success in the digital realm. From web design and development to IT consulting and support, we have you covered.
//                             </p>
//                             <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
//                                 <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] px-5 py-3 text-sm font-semibold text-white shadow-lg">Contact Us</Link>
//                                 <Link href="/service/web-development" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white">Our Services</Link>
//                             </div>
//                         </div>
//                     </RevealAnimation>
//                 </div>

//                 {/* Right Column Canvas graphic wrapped in a RevealAnimation */}
//                 <div className="w-full md:col-span-5 flex justify-center items-center relative pt-8 md:pt-0">
//                     <RevealAnimation direction="right" delay={0.3} offset={60} animationType="from">

//                         {/* Fluid Graphic container that switches sizing scale constraints across breakpoints */}
//                         <div className="relative w-[75vw] h-[75vw] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] justify-self-center lg:justify-self-start shrink-0">

//                             {/* blue curved shape (behind) */}
//                             <div
//                                 className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%] rounded-[40%] bg-[#3557ff] opacity-90"
//                                 onMouseEnter={() => setActiveAccent("blue")}
//                                 onMouseLeave={() => setActiveAccent(null)}
//                                 style={{ transformOrigin: "50% 50%", animation: "blueFloat 6s ease-in-out infinite, blueMorph 8s ease-in-out infinite", willChange: "transform, borderRadius" }}
//                             />

//                             {/* orange curved shape (behind) */}
//                             <div
//                                 className="absolute -right-[10%] -bottom-[10%] h-[115%] w-[115%] rounded-[40%] bg-[#ff4b34] opacity-90"
//                                 onMouseEnter={() => setActiveAccent("orange")}
//                                 onMouseLeave={() => setActiveAccent(null)}
//                                 style={{ transformOrigin: "50% 50%", animation: "orangeFloat 7s ease-in-out infinite, orangeMorph 9s ease-in-out infinite", willChange: "transform, borderRadius" }}
//                             />

//                             {/* image tint overlay (appears when hovering color shapes) */}
//                             <div
//                                 className={`absolute inset-0 z-40 rounded-full transition-opacity duration-300 pointer-events-none ${activeAccent === "blue"
//                                         ? "bg-[#3557ff]/18"
//                                         : activeAccent === "orange"
//                                             ? "bg-[#ff4b34]/18"
//                                             : "bg-transparent"
//                                     }`}
//                             />

//                             {/* decorative blur behind image */}
//                             <div className="absolute left-0 top-1/4 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1b2b68] opacity-60 blur-2xl -z-10" />

//                             {/* hero image (on top) */}
//                             <div className="relative z-10 overflow-hidden rounded-full w-full h-full">
//                                 <div className="relative w-full h-full rounded-full bg-[#fff]">
//                                     <Image src={dummyHeroImage} alt="Hero" fill className="object-cover" priority />
//                                 </div>
//                             </div>

//                             <div className="absolute inset-0 z-20 rounded-full border border-white/5 pointer-events-none" />
//                         </div>
//                     </RevealAnimation>
//                 </div>

//             </div>

//             {/* bottom white curve */}
//             <svg className="absolute left-0 bottom-[-1px] w-full h-8 sm:h-16 md:h-24 lg:h-28" viewBox="0 0 1400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M0,80 C200,20 400,20 700,80 C1000,140 1200,60 1400,80 L1400,120 L0,120 Z" fill="#fff" />
//             </svg>

//             <style jsx>{`
//                 /* Fluid, water-like float + morph animations */
//                 @keyframes blueFloat {
//                     0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                     25% { transform: translate(-8px, 6px) rotate(6deg) scale(1.02); }
//                     50% { transform: translate(0px, 12px) rotate(12deg) scale(1.04); }
//                     75% { transform: translate(8px, 6px) rotate(6deg) scale(1.02); }
//                     100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                 }

//                 @keyframes blueMorph {
//                     0% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
//                     25% { border-radius: 55% 45% 60% 40% / 45% 60% 30% 55%; }
//                     50% { border-radius: 42% 58% 52% 48% / 35% 55% 65% 45%; }
//                     75% { border-radius: 60% 40% 45% 55% / 55% 35% 45% 65%; }
//                     100% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
//                 }

//                 @keyframes orangeFloat {
//                     0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                     25% { transform: translate(10px, -6px) rotate(-6deg) scale(1.02); }
//                     50% { transform: translate(0px, -12px) rotate(-10deg) scale(1.04); }
//                     75% { transform: translate(-10px, -6px) rotate(-6deg) scale(1.02); }
//                     100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
//                 }

//                 @keyframes orangeMorph {
//                     0% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
//                     25% { border-radius: 50% 50% 40% 60% / 40% 65% 35% 60%; }
//                     50% { border-radius: 42% 58% 52% 48% / 30% 50% 70% 40%; }
//                     75% { border-radius: 60% 40% 55% 45% / 60% 30% 50% 50%; }
//                     100% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
//                 }
//             `}</style>
//         </section>
//     );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealAnimation from '../animation/RevealAnimation';

import dummyHeroImage from "@/assets/hero.webp";

export function HomeHero() {
    const [activeAccent, setActiveAccent] = useState<"blue" | "orange" | null>(null);
    const [currentWord, setCurrentWord] = useState("Architectural");
    const [animateText, setAnimateText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Kick off slide-out fade execution phase
            setAnimateText(false);

            setTimeout(() => {
                // 2. Toggle the string parameter values smoothly mid-transition
                setCurrentWord((prev) => 
                    prev === "Architectural" ? "Decentralized" : "Architectural"
                );
                // 3. Mount text slide-in animation sequence
                setAnimateText(true);
            }, 300); // Matches the midpoint of our 500ms transition curve
            
        }, 3000); // Trigger word swaps every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pb-18 mx-auto flex justify-center overflow-hidden bg-gradient-to-b from-[#071033] to-[#0b1630] text-white">
            <div className="absolute left-0 top-0 h-full w-full bg-[url('/src/assets/hero.webp')] bg-cover bg-center opacity-6 mix-blend-overlay pointer-events-none" />

            {/* decorative circuit lines and dots */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full mix-blend-screen" viewBox="0 0 1400 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0%" stopColor="#4fd1c5" stopOpacity="1" />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="g2" x1="0" x2="1">
                            <stop offset="0%" stopColor="#7c3aed" stopOpacity="1" />
                            <stop offset="100%" stopColor="#ff6b4a" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    <g opacity="0.32">
                        <rect x="0" y="0" width="1400" height="720" fill="none" />
                        <line x1="40" y1="20" x2="40" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="40" cy="20" r="4" fill="#7dd3fc" />

                        <line x1="120" y1="40" x2="120" y2="680" stroke="url(#g1)" strokeWidth="2" />
                        <circle cx="120" cy="40" r="5" fill="#60a5fa" />

                        <line x1="200" y1="10" x2="200" y2="700" stroke="#34d399" strokeWidth="1.8" />
                        <circle cx="200" cy="10" r="4" fill="#34d399" />

                        <line x1="280" y1="80" x2="280" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="280" cy="80" r="4" fill="#60a5fa" />

                        <line x1="360" y1="30" x2="360" y2="660" stroke="url(#g1)" strokeWidth="2" />
                        <circle cx="360" cy="30" r="5" fill="#4fd1c5" />

                        <line x1="440" y1="20" x2="440" y2="700" stroke="#7dd3fc" strokeWidth="1.8" />
                        <circle cx="440" cy="20" r="4" fill="#7dd3fc" />

                        <line x1="520" y1="100" x2="520" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="520" cy="100" r="4" fill="#60a5fa" />

                        <line x1="600" y1="10" x2="600" y2="720" stroke="url(#g2)" strokeWidth="2" />
                        <circle cx="600" cy="10" r="5" fill="#ff7a59" />

                        <line x1="680" y1="60" x2="680" y2="700" stroke="#34d399" strokeWidth="1.8" />
                        <circle cx="680" cy="60" r="4" fill="#34d399" />

                        <line x1="760" y1="30" x2="760" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="760" cy="30" r="4" fill="#60a5fa" />

                        <line x1="840" y1="90" x2="840" y2="700" stroke="url(#g1)" strokeWidth="1.8" />
                        <circle cx="840" cy="90" r="5" fill="#4fd1c5" />

                        <line x1="920" y1="20" x2="920" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
                        <circle cx="920" cy="20" r="4" fill="#7dd3fc" />

                        <line x1="1000" y1="140" x2="1000" y2="720" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="1000" cy="140" r="4" fill="#60a5fa" />

                        <line x1="1080" y1="40" x2="1080" y2="700" stroke="#34d399" strokeWidth="1.8" />
                        <circle cx="1080" cy="40" r="4" fill="#34d399" />

                        <line x1="1160" y1="60" x2="1160" y2="720" stroke="url(#g2)" strokeWidth="2" />
                        <circle cx="1160" cy="60" r="5" fill="#ff6b4a" />

                        <line x1="1240" y1="20" x2="1240" y2="700" stroke="#60a5fa" strokeWidth="1.8" />
                        <circle cx="1240" cy="20" r="4" fill="#60a5fa" />

                        <line x1="1320" y1="80" x2="1320" y2="720" stroke="#7dd3fc" strokeWidth="1.8" />
                        <circle cx="1320" cy="80" r="4" fill="#7dd3fc" />
                    </g>
                </svg>
            </div>

            {/* Main Layout Content Grid Container */}
            <div className="mx-auto flex flex-col md:grid w-full max-w-[1400px] md:grid-cols-12 gap-16 px-6 pt-8 lg:pt-32 pb-12 sm:px-8 lg:px-10 lg:items-center relative z-10">

                {/* Left Column Text content wrapped in a RevealAnimation */}
                <div className="w-full md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left mx-auto max-w-[720px]">
                    <RevealAnimation direction="left" delay={0.1} offset={60} animationType="from">
                        <div className="space-y-6 flex flex-col items-center md:items-start w-full">
                            <div className="text-xl sm:text-2xl font-extrabold text-white">Next-Gen Elite Engineering</div>

                            <h1 className="text-[20px] sm:text-3xl whitespace-nowrap leading-tight font-extrabold tracking-tight md:text-4xl lg:text-5xl sm:whitespace-normal">
                                Consensus AI &<br className="hidden sm:block" />
                                
                                {/* Responsive Text swapper block wrapper preventing string wrap collisions */}
                                <span className="inline-block relative overflow-hidden align-bottom">
                                    <span
                                        className={`inline-block transition-all w-[12ch] lg:w-[11ch]  duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                            animateText 
                                                ? "opacity-100 translate-y-0 text-[#50a2ff]" 
                                                : "opacity-0 -translate-y-2 text-orange-400"
                                        }`}
                                    >
                                        {currentWord}
                                    </span>
                                </span>
                                Engineering
                            </h1>
                            
                            <p className="max-w-[560px] text-sm text-[#cbd5e1] font-normal">
                               We build intelligent, secure, and highly scalable digital ecosystems using Consensus AI & Sovereign Systems Engineering. Moving businesses from standard web deployment to robust enterprise infrastructure.
                            </p>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] px-5 py-3 text-sm font-semibold text-white shadow-lg">Contact Us</Link>
                                <Link href="/service/web-development" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white">Our Services</Link>
                            </div>
                        </div>
                    </RevealAnimation>
                </div>

                {/* Right Column Canvas graphic wrapped in a RevealAnimation */}
                <div className="w-full md:col-span-5 flex justify-center items-center relative pt-8 md:pt-0">
                    <RevealAnimation direction="right" delay={0.3} offset={60} animationType="from">

                        {/* Fluid Graphic container that switches sizing scale constraints across breakpoints */}
                        <div className="relative w-[75vw] h-[75vw] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] justify-self-center lg:justify-self-start shrink-0">

                            {/* blue curved shape (behind) */}
                            <div
                                className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%] rounded-[40%] bg-[#3557ff] opacity-90"
                                onMouseEnter={() => setActiveAccent("blue")}
                                onMouseLeave={() => setActiveAccent(null)}
                                style={{ transformOrigin: "50% 50%", animation: "blueFloat 6s ease-in-out infinite, blueMorph 8s ease-in-out infinite", willChange: "transform, borderRadius" }}
                            />

                            {/* orange curved shape (behind) */}
                            <div
                                className="absolute -right-[10%] -bottom-[10%] h-[115%] w-[115%] rounded-[40%] bg-[#ff4b34] opacity-90"
                                onMouseEnter={() => setActiveAccent("orange")}
                                onMouseLeave={() => setActiveAccent(null)}
                                style={{ transformOrigin: "50% 50%", animation: "orangeFloat 7s ease-in-out infinite, orangeMorph 9s ease-in-out infinite", willChange: "transform, borderRadius" }}
                            />

                            {/* image tint overlay (appears when hovering color shapes) */}
                            <div
                                className={`absolute inset-0 z-40 rounded-full transition-opacity duration-300 pointer-events-none ${activeAccent === "blue"
                                        ? "bg-[#3557ff]/18"
                                        : activeAccent === "orange"
                                            ? "bg-[#ff4b34]/18"
                                            : "bg-transparent"
                                    }`}
                            />

                            {/* decorative blur behind image */}
                            <div className="absolute left-0 top-1/4 h-40 w-40 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1b2b68] opacity-60 blur-2xl -z-10" />

                            {/* hero image (on top) */}
                            <div className="relative z-10 overflow-hidden rounded-full w-full h-full">
                                <div className="relative w-full h-full rounded-full bg-[#fff]">
                                    <Image src={dummyHeroImage} alt="Hero" fill className="object-cover" priority />
                                </div>
                            </div>

                            <div className="absolute inset-0 z-20 rounded-full border border-white/5 pointer-events-none" />
                        </div>
                    </RevealAnimation>
                </div>

            </div>

            {/* bottom white curve */}
            <svg className="absolute left-0 bottom-[-1px] w-full h-8 sm:h-16 md:h-24 lg:h-28" viewBox="0 0 1400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,80 C200,20 400,20 700,80 C1000,140 1200,60 1400,80 L1400,120 L0,120 Z" fill="#fff" />
            </svg>

            <style jsx>{`
                /* Fluid, water-like float + morph animations */
                @keyframes blueFloat {
                    0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                    25% { transform: translate(-8px, 6px) rotate(6deg) scale(1.02); }
                    50% { transform: translate(0px, 12px) rotate(12deg) scale(1.04); }
                    75% { transform: translate(8px, 6px) rotate(6deg) scale(1.02); }
                    100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                }

                @keyframes blueMorph {
                    0% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
                    25% { border-radius: 55% 45% 60% 40% / 45% 60% 30% 55%; }
                    50% { border-radius: 42% 58% 52% 48% / 35% 55% 65% 45%; }
                    75% { border-radius: 60% 40% 45% 55% / 55% 35% 45% 65%; }
                    100% { border-radius: 42% 58% 52% 48% / 50% 40% 60% 50%; }
                }

                @keyframes orangeFloat {
                    0% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                    25% { transform: translate(10px, -6px) rotate(-6deg) scale(1.02); }
                    50% { transform: translate(0px, -12px) rotate(-10deg) scale(1.04); }
                    75% { transform: translate(-10px, -6px) rotate(-6deg) scale(1.02); }
                    100% { transform: translate(0px, 0px) rotate(0deg) scale(1); }
                }

                @keyframes orangeMorph {
                    0% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
                    25% { border-radius: 50% 50% 40% 60% / 40% 65% 35% 60%; }
                    50% { border-radius: 42% 58% 52% 48% / 30% 50% 70% 40%; }
                    75% { border-radius: 60% 40% 55% 45% / 60% 30% 50% 50%; }
                    100% { border-radius: 45% 55% 50% 50% / 48% 42% 62% 48%; }
                }
            `}</style>
        </section>
    );
}