// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Eye, Link2, X, Maximize2, Share2 } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation";
// import Link from "next/link";

// // --- FIXED IMPORTS MATCHING image_4fc3e3.png EXACTLY ---
// import cryptoApp from "@/assets/portfolio/crypto_app.png";
// import customeCrm from "@/assets/portfolio/custome_crm.jpeg"; // Note the .jpeg extension
// import deanaAi from "@/assets/portfolio/deana_ai.png";
// import digitalMarketing from "@/assets/portfolio/digital_marketing.png";
// import ecommerce from "@/assets/portfolio/ecommerce.png";
// import finance from "@/assets/portfolio/finance.jpeg"; // Note the .jpeg extension
// import initialCoin from "@/assets/portfolio/initial_coin.png";
// import loanApp from "@/assets/portfolio/loan_app.png";
// import webDevelopment from "@/assets/portfolio/web_development.png";

// const portfolioData = [
//     { id: 1, slug: "initial-coin", img: initialCoin, title: "Initial Coin Offering", category: "Web3 Blockchain" },
//     { id: 2, slug: "loan-app", img: loanApp, title: "Loan App Development", category: "Mobile App Development" },
//     { id: 3, slug: "deana-ai", img: deanaAi, title: "Deana.AI Technology", category: "Product Infrastructure" },
//     { id: 4, slug: "crypto-app", img: cryptoApp, title: "Crypto App Development", category: "Mobile UI/UX" },
//     { id: 5, slug: "ecommerce-web-app", img: ecommerce, title: "E commerce Web & App Development", category: "E-Commerce Web" },
//     { id: 6, slug: "finance-website", img: finance, title: "Finance Website", category: "Mobile FinTech" },
//     { id: 7, slug: "web-development", img: webDevelopment, title: "Web Development", category: "Cloud Dashboard" },
//     { id: 8, slug: "custom-crm", img: customeCrm, title: "Custom CRM Development", category: "Web Application" },
//     { id: 9, slug: "digital-marketing", img: digitalMarketing, title: "Digital Marketing Services", category: "Marketing Suite" },
// ];

// export function PortfolioView() {
//     const [lightboxImage, setLightboxImage] = useState<any | null>(null);
//     const [lightboxTitle, setLightboxTitle] = useState("");

//     const openLightbox = (img: any, title: string) => {
//         setLightboxImage(img);
//         setLightboxTitle(title);
//     };

//     const closeLightbox = () => {
//         setLightboxImage(null);
//         setLightboxTitle("");
//     };

//     return (
//         <section className="relative text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
//             <div className="mx-auto max-w-[1240px]">


//                 {/* --- DUAL INTERACTIVE PORTFOLIO ACTIONS GRID --- */}
//                 <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
//                     {portfolioData.map((project, index) => (
//                         <RevealAnimation
//                             key={project.id}
//                             direction="up"
//                             duration={1.0}
//                             delay={0.1 + (index % 3) * 0.12}
//                             offset={45}
//                             animationType="from"
//                         >
//                             <div className="group relative w-full aspect-[1.12/1] max-w-[370px] mx-auto overflow-hidden rounded-xl bg-[#131c31] border border-slate-800/40 shadow-2xl transition-all duration-300">

//                                 {/* Graphics Mockup Asset Wrapper */}
//                                 <div className="relative w-full h-full flex items-center justify-center p-6 bg-[#0f172a]">
//                                     <Image
//                                         src={project.img}
//                                         alt={project.title}
//                                         fill
//                                         className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
//                                         priority={index < 3}
//                                     />
//                                 </div>

//                                 {/* --- HOVER MASK DECK: MATCHES DESIGN image_502215.png --- */}
//                                 <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-6">

//                                     {/* Dynamic Action Circle Controls Container */}
//                                     <div className="flex items-center gap-6 mb-8 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">

//                                         {/* View Button Token triggers preview Lightbox directly */}
//                                         <button
//                                             onClick={() => openLightbox(project.img, project.title)}
//                                             className="h-14 w-14 rounded-full cursor-pointer bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-95 shadow-lg"
//                                             title="View Showcase"
//                                         >
//                                             <Eye className="h-6 w-6" />
//                                         </button>

//                                         {/* Detail Destination Redirect Token */}
//                                         <Link
//                                             href={`/portfolio/${project.slug}`}
//                                             className="h-14 w-14 rounded-full cursor-pointer bg-slate-900/80 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all active:scale-95 shadow-lg"
//                                             title="View Case Studies"
//                                         >
//                                             <Link2 className="h-5 w-5" />
//                                         </Link>

//                                     </div>

//                                     {/* Title Frame Stack positioned at baseline coordinates */}
//                                     <div className="text-center space-y-1.5 transform translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0 mt-2">
//                                         <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
//                                             {project.category}
//                                         </p>
//                                         <h3 className="text-lg font-black tracking-wide text-white">
//                                             {project.title}
//                                         </h3>
//                                     </div>

//                                 </div>

//                             </div>
//                         </RevealAnimation>
//                     ))}
//                 </div>

//             </div>

//             {/* ================= LIGHTBOX POPUP MODAL: MATCHES DESIGN image_502123.png ================= */}
//             {lightboxImage && (
//                 <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center select-none animate-fadeIn">

//                     {/* Header Action Control Bar Positioning */}
//                     <div className="absolute top-0 right-0 left-0 h-16 bg-black/40 backdrop-blur-md px-6 flex items-center justify-between z-50 text-slate-400 text-sm font-semibold">
//                         <span className="truncate max-w-md tracking-wide text-slate-300 font-medium">
//                             {lightboxTitle}
//                         </span>

//                         {/* Top Right Control System Buttons */}
//                         <div className="flex items-center gap-5">
//                             <button className="hover:text-white transition-colors" title="Toggle Fullscreen">
//                                 <Maximize2 className="h-4 w-4" />
//                             </button>
//                             <button className="hover:text-white transition-colors" title="Share Project">
//                                 <Share2 className="h-4 w-4" />
//                             </button>
//                             <div className="h-4 w-[1px] bg-slate-800" />
//                             <button
//                                 onClick={closeLightbox}
//                                 className="hover:text-white transition-colors text-white font-bold flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded"
//                                 title="Close Showcase"
//                             >
//                                 <X className="h-4 w-4" /> Close
//                             </button>
//                         </div>
//                     </div>

//                     {/* Central Immersive Media Visual Canvas Area */}
//                     <div className="relative w-[90vw] h-[80vh] max-w-6xl flex items-center justify-center p-4 animate-scaleUp">
//                         <Image
//                             src={lightboxImage}
//                             alt={lightboxTitle}
//                             fill
//                             className="object-contain rounded-lg drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
//                             priority
//                         />
//                     </div>

//                 </div>
//             )}

//             {/* --- INLINE KEYFRAMES ANIMATION DIALECTS --- */}
//             <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleUp {
//           from { transform: scale(0.96); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.25s ease-out forwards;
//         }
//         .animate-scaleUp {
//           animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//       `}</style>
//         </section>
//     );
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Link2, X, Maximize2, Share2 } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";
import Link from "next/link";

// --- FIXED IMPORTS MATCHING YOUR MOCKUP ASSETS ---
import cryptoApp from "@/assets/portfolio/crypto_app.png";
import customeCrm from "@/assets/portfolio/custome_crm.jpeg"; 
import deanaAi from "@/assets/portfolio/deana_ai.png";
import digitalMarketing from "@/assets/portfolio/digital_marketing.png";
import ecommerce from "@/assets/portfolio/ecommerce.png";
import finance from "@/assets/portfolio/finance.jpeg"; 
import initialCoin from "@/assets/portfolio/initial_coin.png";
import loanApp from "@/assets/portfolio/loan_app.png";
import webDevelopment from "@/assets/portfolio/web_development.png";

const portfolioData = [
    { id: 1, slug: "initial-coin", img: initialCoin, title: "Initial Coin Offering", category: "Web3 Blockchain" },
    { id: 2, slug: "loan-app", img: loanApp, title: "Loan App Development", category: "Mobile App Development" },
    { id: 3, slug: "deana-ai", img: deanaAi, title: "Deana.AI Technology", category: "Product Infrastructure" },
    { id: 4, slug: "crypto-app", img: cryptoApp, title: "Crypto App Development", category: "Mobile UI/UX" },
    { id: 5, slug: "ecommerce-web-app", img: ecommerce, title: "E commerce Web & App Development", category: "E-Commerce Web" },
    { id: 6, slug: "finance-website", img: finance, title: "Finance Website", category: "Mobile FinTech" },
    { id: 7, slug: "web-development", img: webDevelopment, title: "Web Development", category: "Cloud Dashboard" },
    { id: 8, slug: "custom-crm", img: customeCrm, title: "Custom CRM Development", category: "Web Application" },
    { id: 9, slug: "digital-marketing", img: digitalMarketing, title: "Digital Marketing Services", category: "Marketing Suite" },
];

export function PortfolioView() {
    const [lightboxImage, setLightboxImage] = useState<any | null>(null);
    const [lightboxTitle, setLightboxTitle] = useState("");

    const openLightbox = (img: any, title: string) => {
        setLightboxImage(img);
        setLightboxTitle(title);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxTitle("");
    };

    return (
        <section className="relative text-white py-20 px-4 sm:px-8 lg:px-12 xl:px-16 overflow-hidden select-none">
            <div className="mx-auto max-w-[1240px]">

                {/* --- DUAL INTERACTIVE PORTFOLIO ACTIONS GRID --- */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                    {portfolioData.map((project, index) => (
                        <RevealAnimation
                            key={project.id}
                            direction="up"
                            duration={1.0}
                            delay={0.05 + (index % 3) * 0.08}
                            offset={30}
                            animationType="from"
                        >
                            <div className="w-full">
                                <div className="group relative w-full aspect-[1.12/1] max-w-[370px] mx-auto overflow-hidden rounded-2xl bg-[#131c31] border border-slate-800/40 shadow-2xl transition-all duration-500 flex flex-col justify-between">

                                    {/* Graphics Mockup Asset Wrapper */}
                                    <div className="relative w-full h-full flex items-center justify-center p-6 bg-[#0f172a]">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-contain p-4 transition-transform duration-700 ease-out lg:group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 370px"
                                            priority={index < 3}
                                        />
                                    </div>

                                    {/* --- HOVER MASK OVERLAY DESIGN: OPTIMIZED WITH RESPONSIVE UTILITIES ---
                                        - Below lg breakpoint (mobile/tablets): Opacity is naturally fixed to 80% so links tap instantly.
                                        - Above lg breakpoint (desktop): Activates the hover transition layers beautifully.
                                    */}
                                    <div className="absolute inset-0 bg-black/80 lg:bg-black/75 lg:opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100 flex flex-col items-center justify-center p-6 z-10">

                                        {/* Action Control Buttons */}
                                        <div className="flex items-center gap-6 mb-4 lg:mb-6 transform lg:translate-y-4 transition-transform duration-500 ease-out lg:group-hover:translate-y-0 relative z-20 pointer-events-auto">
                                            <button
                                                type="button"
                                                onClick={() => openLightbox(project.img, project.title)}
                                                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer bg-slate-900/90 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all active:scale-95 shadow-lg relative z-30"
                                            >
                                                <Eye className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </button>

                                            <Link
                                                href={`/portfolio/${project.slug}`}
                                                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full cursor-pointer bg-slate-900/90 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all active:scale-95 shadow-lg relative z-30"
                                            >
                                                <Link2 className="h-4 w-4 sm:h-5 sm:w-5" />
                                            </Link>
                                        </div>

                                        {/* Title Text Elements */}
                                        <div className="text-center space-y-1 transform lg:translate-y-4 transition-transform duration-500 ease-out lg:group-hover:translate-y-0 px-2">
                                            <p className="text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest uppercase">
                                                {project.category}
                                            </p>
                                            <h3 className="text-sm sm:text-base lg:text-lg font-bold tracking-wide text-white leading-snug">
                                                {project.title}
                                            </h3>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>

            </div>

            {/* ================= LIGHTBOX POPUP MODAL ================= */}
            {lightboxImage && (
                <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center select-none animate-fadeIn pointer-events-auto">
                    <div className="absolute top-0 right-0 left-0 h-16 bg-black/50 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between z-50 text-slate-400 text-sm font-semibold">
                        <span className="truncate max-w-[50vw] sm:max-w-md tracking-wide text-slate-200 font-medium text-xs sm:text-sm">
                            {lightboxTitle}
                        </span>

                        <div className="flex items-center gap-4 sm:gap-5">
                            <button type="button" className="hover:text-white transition-colors p-1 hidden sm:block">
                                <Maximize2 className="h-4 w-4" />
                            </button>
                            <button type="button" className="hover:text-white transition-colors p-1 hidden sm:block">
                                <Share2 className="h-4 w-4" />
                            </button>
                            <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />
                            <button
                                type="button"
                                onClick={closeLightbox}
                                className="hover:text-white transition-colors text-white font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-lg text-xs sm:text-sm cursor-pointer"
                            >
                                <X className="h-4 w-4" /> Close
                            </button>
                        </div>
                    </div>

                    <div className="relative w-[95vw] h-[75vh] sm:w-[90vw] sm:h-[80vh] max-w-6xl flex items-center justify-center p-2 sm:p-4 animate-scaleUp">
                        <Image
                            src={lightboxImage}
                            alt={lightboxTitle}
                            fill
                            className="object-contain rounded-xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                            priority
                        />
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleUp { from { transform: scale(0.97); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
                .animate-scaleUp { animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </section>
    );
}