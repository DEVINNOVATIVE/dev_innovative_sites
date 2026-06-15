// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { 
//   Code, 
//   Server, 
//   Smartphone, 
//   BrainCircuit, 
//   Cpu, 
//   TrendingUp, 
//   ShoppingCart, 
//   ShieldAlert, 
//   Layers,
//   ArrowLeft, 
//   ArrowRight 
// } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation";

// const specializedServices = [
//   {
//     title: "Custom Software Development",
//     desc: "Turn complex business visions into scalable digital realities with bespoke full-cycle platforms engineered for your unique operational DNA.",
//     href: "/service/custom-software-development",
//     icon: Layers,
//     tag: "Bespoke Architectures",
//     colorAccent: "border-t-sky-500 hover:border-sky-400 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] text-sky-400"
//   },
//   {
//     title: "Artificial Intelligence",
//     desc: "Automate, predict, and scale with custom fine-tuned LLMs, predictive models, vector databases, and scalable enterprise MLOps infrastructure.",
//     href: "/service/ai-solutions",
//     icon: BrainCircuit,
//     tag: "Next-Gen Data",
//     colorAccent: "border-t-blue-500 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] text-blue-400"
//   },
//   {
//     title: "Web Development",
//     desc: "Get a clear understanding of your traffic with robust, high-performance web applications built on clean, production-ready tech stacks.",
//     href: "/service/web-development",
//     icon: Code,
//     tag: "MERN & Next.js",
//     colorAccent: "border-t-indigo-500 hover:border-indigo-400 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] text-indigo-400"
//   },
//   {
//     title: "Web Hosting",
//     desc: "Deploy on resilient environments with low latency. Speak directly to your global customers without worrying about platform downtime.",
//     href: "/service/web-hosting",
//     icon: Server,
//     tag: "Cloud Infrastructure",
//     colorAccent: "border-t-slate-400 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] text-slate-400"
//   },
//   {
//     title: "Application Development",
//     desc: "Ensure your users' core metrics and confidential data remain safe, fluid, and locked down tightly across modern cross-platform mobile environments.",
//     href: "/service/application-development",
//     icon: Smartphone,
//     tag: "iOS & Android",
//     colorAccent: "border-t-rose-500 hover:border-rose-400 hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)] text-rose-400"
//   },
//   {
//     title: "Blockchain Development",
//     desc: "Incorporate robust cryptography, smart contract auditing, and clear consensus layers integrated cleanly into third-party web tools.",
//     href: "/service/blockchain-development",
//     icon: Cpu,
//     tag: "Web3 Ledger",
//     colorAccent: "border-t-purple-500 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)] text-purple-400"
//   },
//   {
//     title: "Digital Marketing",
//     desc: "Build highly calibrated, conversion-oriented growth funnels designed to scale user retention models automatically over time.",
//     href: "/service/digital-marketing",
//     icon: TrendingUp,
//     tag: "Conversion Funnels",
//     colorAccent: "border-t-amber-500 hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] text-amber-400"
//   },
//   {
//     title: "Ecommerce Development",
//     desc: "Automated storefront solutions engineered to handle massive horizontal traffic spikes without processing logic breakdown.",
//     href: "/service/ecommerce-development",
//     icon: ShoppingCart,
//     tag: "High-Scale Sales",
//     colorAccent: "border-t-orange-500 hover:border-orange-400 hover:shadow-[0_20px_50px_rgba(255,96,54,0.15)] text-orange-400"
//   },
//   {
//     title: "Cyber Resilience Engineering",
//     desc: "Bake zero-trust configuration access controls and strict defensive posture frameworks directly into initial codebase lines.",
//     href: "/service/cyber-resilience-engineering",
//     icon: ShieldAlert,
//     tag: "System Hardening",
//     colorAccent: "border-t-emerald-500 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] text-emerald-400"
//   }
// ];

// export function ServicesCarouselHero() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth >= 1024);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   const updateScrollButtons = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setCanScrollLeft(scrollLeft > 5);
//       setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (scrollContainerRef.current && !isPaused) {
//         const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
//         }
//       }
//     }, 2800);

//     return () => clearInterval(timer);
//   }, [isPaused]);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("scroll", updateScrollButtons);
//       window.addEventListener("resize", updateScrollButtons);
//       updateScrollButtons();
//     }
//     return () => {
//       if (container) container.removeEventListener("scroll", updateScrollButtons);
//       window.removeEventListener("resize", updateScrollButtons);
//     };
//   }, []);

//   const handleScroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const { clientWidth } = scrollContainerRef.current;
//       const scrollAmount = clientWidth * 0.75;
//       scrollContainerRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <section className="relative w-full bg-[#f8fafc] text-slate-900 py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden select-none flex-1 flex flex-col justify-center">
//       {/* Precision Digital Lighting Masks */}
//       <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-blue-500/[0.015] rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
//       <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none transform translate-y-1/3" />

//       <div className="mx-auto w-full max-w-[1240px] space-y-12 relative z-10">
        
//         {/* ================= CAROUSEL CENTERED HEADER CONTROL BAR ================= */}
//         <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
//           <RevealAnimation direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
//             <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-block shadow-3xs">
//               ⚡ Capabilities Spectrum
//             </span>
//           </RevealAnimation>
          
//           <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
//             Our Specialized Services
//           </h2>
          
//           <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
//             Click on any domain cluster to access its technical operational frame, tech stacks, and specialized workflows.
//           </p>

//           {/* Symmetrical Controls Row Centered Under Headers */}
//           <div className="flex items-center gap-3 pt-2">
//             <button
//               onClick={() => handleScroll("left")}
//               disabled={!canScrollLeft}
//               className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
//                 canScrollLeft 
//                   ? "bg-white border-slate-200 text-slate-700 shadow-3xs hover:bg-slate-50" 
//                   : "bg-slate-100/50 border-slate-100 text-slate-300 cursor-not-allowed"
//               }`}
//               title="Scroll Left"
//             >
//               <ArrowLeft size={15} />
//             </button>
//             <button
//               onClick={() => handleScroll("right")}
//               disabled={!canScrollRight}
//               className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
//                 canScrollRight 
//                   ? "bg-white border-slate-200 text-slate-700 shadow-3xs hover:bg-slate-50" 
//                   : "bg-slate-100/50 border-slate-100 text-slate-300 cursor-not-allowed"
//               }`}
//               title="Scroll Right"
//             >
//               <ArrowRight size={15} />
//             </button>
//           </div>
//         </div>

//         {/* ================= HORIZONTAL AUTO-PLAY CAROUSEL MAIN STREAM ================= */}
//         <div 
//           ref={scrollContainerRef}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           onTouchStart={() => setIsPaused(true)}
//           onTouchEnd={() => setIsPaused(false)}
//           className="w-full overflow-x-auto flex gap-6 pb-8 pt-2 scroll-smooth hide-scrollbar snap-x snap-mandatory touch-pan-x transform-gpu"
//           style={{ scrollbarWidth: "none" }}
//         >
//           {specializedServices.map((service, index) => {
//             const ServiceIcon = service.icon;
//             return (
//               <div 
//                 key={index}
//                 onClick={() => router.push(service.href)}
//                 className={`w-[290px] sm:w-[340px] shrink-0 snap-start bg-[#0c194a] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8 cursor-pointer transform-gpu transition-all duration-300 border-t-4 border-transparent group hover:-translate-y-2 ${service.colorAccent}`}
//               >
//                 <div className="space-y-5">
//                   <div className="flex items-center justify-between gap-4 pb-1">
//                     <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
//                       <ServiceIcon size={18} />
//                     </div>
//                     <span className="text-[10px] font-mono font-bold text-slate-300/70 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md shadow-3xs select-none">
//                       {service.tag}
//                     </span>
//                   </div>

//                   <div className="space-y-2 text-left">
//                     <h3 className="text-base sm:text-md font-bold text-white tracking-tight transition-colors duration-200">
//                       {service.title}
//                     </h3>
//                     <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300/80 font-medium">
//                       {service.desc}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider pt-3 border-t border-white/[0.06]">
//                   <span>Explore Solutions</span>
//                   <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>

//       <style jsx global>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Code, 
  Server, 
  Smartphone, 
  BrainCircuit, 
  Cpu, 
  TrendingUp, 
  ShoppingCart, 
  ShieldAlert, 
  Layers,
  ArrowLeft, 
  ArrowRight 
} from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

const specializedServices = [
  {
    title: "Custom Software Development",
    desc: "Turn complex business visions into scalable digital realities with bespoke full-cycle platforms engineered for your unique operational DNA.",
    href: "/service/custom-software-development",
    icon: Layers,
    tag: "Bespoke Architectures",
    colorAccent: "border-t-sky-500 hover:border-sky-400 hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] text-sky-400"
  },
  {
    title: "Artificial Intelligence",
    desc: "Automate, predict, and scale with custom fine-tuned LLMs, predictive models, vector databases, and scalable enterprise MLOps infrastructure.",
    href: "/service/ai-solutions",
    icon: BrainCircuit,
    tag: "Next-Gen Data",
    colorAccent: "border-t-blue-500 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] text-blue-400"
  },
  {
    title: "Web Development",
    desc: "Get a clear understanding of your traffic with robust, high-performance web applications built on clean, production-ready tech stacks.",
    href: "/service/web-development",
    icon: Code,
    tag: "MERN & Next.js",
    colorAccent: "border-t-indigo-500 hover:border-indigo-400 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] text-indigo-400"
  },
  {
    title: "Web Hosting",
    desc: "Deploy on resilient environments with low latency. Speak directly to your global customers without worrying about platform downtime.",
    href: "/service/web-hosting",
    icon: Server,
    tag: "Cloud Infrastructure",
    colorAccent: "border-t-slate-400 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] text-slate-400"
  },
  {
    title: "Application Development",
    desc: "Ensure your users' core metrics and confidential data remain safe, fluid, and locked down tightly across modern cross-platform mobile environments.",
    href: "/service/application-development",
    icon: Smartphone,
    tag: "iOS & Android",
    colorAccent: "border-t-rose-500 hover:border-rose-400 hover:shadow-[0_20px_50px_rgba(244,63,94,0.15)] text-rose-400"
  },
  {
    title: "Blockchain Development",
    desc: "Incorporate robust cryptography, smart contract auditing, and clear consensus layers integrated cleanly into third-party web tools.",
    href: "/service/blockchain-development",
    icon: Cpu,
    tag: "Web3 Ledger",
    colorAccent: "border-t-purple-500 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)] text-purple-400"
  },
  {
    title: "Digital Marketing",
    desc: "Build highly calibrated, conversion-oriented growth funnels designed to scale user retention models automatically over time.",
    href: "/service/digital-marketing",
    icon: TrendingUp,
    tag: "Conversion Funnels",
    colorAccent: "border-t-amber-500 hover:border-amber-400 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] text-amber-400"
  },
  {
    title: "Ecommerce Development",
    desc: "Automated storefront solutions engineered to handle massive horizontal traffic spikes without processing logic breakdown.",
    href: "/service/ecommerce-development",
    icon: ShoppingCart,
    tag: "High-Scale Sales",
    colorAccent: "border-t-orange-500 hover:border-orange-400 hover:shadow-[0_20px_50px_rgba(255,96,54,0.15)] text-orange-400"
  },
  {
    title: "Cyber Resilience Engineering",
    desc: "Bake zero-trust configuration access controls and strict defensive posture frameworks directly into initial codebase lines.",
    href: "/service/cyber-resilience-engineering",
    icon: ShieldAlert,
    tag: "System Hardening",
    colorAccent: "border-t-emerald-500 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] text-emerald-400"
  }
];

export function ServicesCarouselHero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current && !isPaused) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Dynamic scrolling adjust for mobile step counts
          const stepSize = window.innerWidth < 768 ? window.innerWidth - 32 : 340;
          scrollContainerRef.current.scrollBy({ left: stepSize, behavior: "smooth" });
        }
      }
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      window.addEventListener("resize", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full bg-[#f8fafc] text-slate-900 py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden select-none flex-1 flex flex-col justify-center">
      {/* Precision Digital Lighting Masks */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-blue-500/[0.015] rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none transform translate-y-1/3" />

      <div className="mx-auto w-full max-w-[1240px] space-y-12 relative z-10">
        
        {/* ================= CAROUSEL CENTERED HEADER CONTROL BAR ================= */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <RevealAnimation direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-block shadow-3xs">
              ⚡ Capabilities Spectrum
            </span>
          </RevealAnimation>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
            Our Specialized Services
          </h2>
          
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
            Click on any domain cluster to access its technical operational frame, tech stacks, and specialized workflows.
          </p>

          {/* Symmetrical Controls Row Centered Under Headers */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft 
                  ? "bg-white border-slate-200 text-slate-700 shadow-3xs hover:bg-slate-50" 
                  : "bg-slate-100/50 border-slate-100 text-slate-300 cursor-not-allowed"
              }`}
              title="Scroll Left"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight 
                  ? "bg-white border-slate-200 text-slate-700 shadow-3xs hover:bg-slate-50" 
                  : "bg-slate-100/50 border-slate-100 text-slate-300 cursor-not-allowed"
              }`}
              title="Scroll Right"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* ================= HORIZONTAL AUTO-PLAY CAROUSEL MAIN STREAM ================= */}
        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="w-full overflow-x-auto flex gap-4 md:gap-6 pb-8 pt-2 scroll-smooth hide-scrollbar snap-x snap-mandatory touch-pan-x transform-gpu"
          style={{ scrollbarWidth: "none" }}
        >
          {specializedServices.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div 
                key={index}
                onClick={() => router.push(service.href)}
                /* Sizing Optimization:
                  - w-[calc(100vw-32px)] guarantees exactly one card fills the viewport frame on mobile.
                  - md:w-[340px] snaps back gracefully to multi-card viewports on larger panels.
                */
                className={`w-[calc(100vw-32px)] md:w-[340px] shrink-0 snap-start bg-[#0c194a] rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-8 cursor-pointer transform-gpu transition-all duration-300 border-t-4 border-transparent group hover:-translate-y-2 ${service.colorAccent}`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4 pb-1">
                    <div className="h-10 w-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                      <ServiceIcon size={18} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-300/70 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md shadow-3xs select-none">
                      {service.tag}
                    </span>
                  </div>

                  <div className="space-y-2 text-left">
                    <h3 className="text-base sm:text-md font-bold text-white tracking-tight transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-300/80 font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider pt-3 border-t border-white/[0.06]">
                  <span>Explore Solutions</span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}