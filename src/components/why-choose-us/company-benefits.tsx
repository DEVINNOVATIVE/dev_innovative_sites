// "use client";

// import React, { useEffect, useState } from "react";
// import RevealAnimation from "../animation/RevealAnimation";

// const benefitsTimelineData = [
//   {
//     title: "Experienced Team",
//     description: "Our team is composed of highly skilled and experienced professionals who have been in the web hosting industry for many years.",
//     glow: "hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.03)]",
//     nodeColor: "group-hover:border-blue-500 group-hover:ring-blue-100"
//   },
//   {
//     title: "24/7 Support",
//     description: "We understand that technical issues can occur at any time, which is why we offer 24/7 support to our clients. You can reach out to us at any time, and we will be there to assist you.",
//     glow: "hover:border-rose-500/40 hover:shadow-[0_20px_40px_rgba(244,63,94,0.03)]",
//     nodeColor: "group-hover:border-rose-500 group-hover:ring-rose-100"
//   },
//   {
//     title: "Cutting Edge Technology",
//     description: "We use the latest and most advanced technology to ensure that your website is fast, secure, and reliable. We regularly update our servers and software to keep up with the latest trends and best practices.",
//     glow: "hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.03)]",
//     nodeColor: "group-hover:border-amber-500 group-hover:ring-amber-100"
//   },
//   {
//     title: "Easy To Use Control Panel",
//     description: "Our web hosting control panel is user-friendly and intuitive, making it easy for you to manage your website, files, databases, and server configurations cleanly without complexity.",
//     glow: "hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(99,102,241,0.04)]",
//     nodeColor: "group-hover:border-indigo-500 group-hover:ring-indigo-100"
//   },
//   {
//     title: "Competitive Pricing",
//     description: "We offer affordable pricing plans that are competitive in the industry. Our plans are designed to fit the needs of businesses of all sizes and budgets perfectly.",
//     glow: "hover:border-emerald-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.03)]",
//     nodeColor: "group-hover:border-emerald-500 group-hover:ring-emerald-100"
//   }
// ];

// export function CompanyBenefitsTimeline() {

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
//     <section className="relative bg-[#ffffff] text-neutral-900 py-8  md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
//       {/* Dynamic Ambient Blur Orbs */}
//       <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
//       <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

//       <div className="mx-auto max-w-[1140px] space-y-24">
        
//         {/* ================= SECTION HEADER ================= */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
//             <span className="text-lg font-bold text-[#104cba] tracking-wider  uppercase block">
//               Why Choose Us ?
//             </span>
//           </ConditionalReveal>
          
//           <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] max-w-2xl mx-auto leading-tight">
//               The Benefits Of Partnering With Our Company
//             </h2>
//           </ConditionalReveal>

//           <ConditionalReveal direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
//             <p className="text-base leading-7 text-neutral-400 font-normal pt-2 max-w-4xl mx-auto">
//               Looking for reliable and top-quality services for your web and app development needs? Choose our company and experience a seamless and hassle-free process, from the initial consultation to the final delivery. We provide innovative solutions tailored to meet your specific requirements.
//             </p>
//           </ConditionalReveal>
//         </div>

//         {/* ================= TIMELINE TRACK GRID ================= */}
//         <div className="relative max-w-5xl mx-auto pt-6">
          
//           {/* CONNECTING SPINE RAIL: Configured explicitly to #cacdd4 */}
//           <div 
//             className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px]" 
//             style={{ backgroundColor: "#cacdd4" }}
//           />

//           <div className="space-y-8 md:space-y-12 relative">
//             {benefitsTimelineData.map((benefit, index) => {
//               const isRight = index % 2 === 0;

//               return (
//                 <div 
//                   key={index} 
//                   className={`group flex flex-col md:flex-row relative items-start ${
//                     isRight ? "md:justify-end" : "md:justify-start"
//                   }`}
//                 >
                  
//                   {/* 
//                     CENTER NODE PINPOINT: 
//                     Concentric ring structure that safely transitions on card interaction loops.
//                   */}
//                   <div className={`absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 z-20 flex items-center justify-center bg-white h-[12px] w-[12px] rounded-full border-[3px] border-neutral-300 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125 ring-0 group-hover:ring-4 mt-6 ${benefit.nodeColor}`} />

//                   {/* Layout Box Splitter */}
//                   <div className="w-full md:w-[calc(50%-32px)] pl-12 md:pl-0">
//                     <ConditionalReveal 
//                       direction={isRight ? "right" : "left"} 
//                       duration={0.85} 
//                       delay={index * 0.05} 
//                       offset={25} 
//                       animationType="from"
//                     >
//                       {/* Premium Card layout with content balancing typography */}
//                       <div className={`flex flex-col space-y-3.5 p-6 sm:p-8 bg-white border border-neutral-200/60 rounded-3xl hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${benefit.glow} ${
//                         !isRight ? "md:text-right md:items-end" : "md:text-left md:items-start"
//                       }`}>
                        
//                         <div className="space-y-2">
//                           {/* Heading Label */}
//                           <h4 className="text-[17px] sm:text-[18px] font-bold text-[#0f172a] tracking-tight group-hover:text-[#104cba] transition-colors duration-300">
//                             {benefit.title}
//                           </h4>
                          
//                           {/* Core Body Paragraph */}
//                           <p className="text-[14.5px] leading-relaxed text-neutral-500 font-normal">
//                             {benefit.description}
//                           </p>
//                         </div>

//                       </div>
//                     </ConditionalReveal>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import RevealAnimation from "../animation/RevealAnimation";

const benefitsTimelineData = [
  {
    title: "1. Absolute Alignment with Business Goals",
    description: "A visually stunning app or complex AI model is worthless if it doesn't move the needle for your business. Before our engineering team writes a single line of code, our business analysts dive deep into your industry, workflows, and growth targets. We ensure every technical decision we make serves a commercial or operational purpose.",
    glow: "hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.03)]",
    nodeColor: "group-hover:border-blue-500 group-hover:ring-blue-100"
  },
  {
    title: "2. Enterprise-Grade Security & Compliance",
    description: "In the modern digital era, security can never be an afterthought. Whether we are building a custom web platform or integrating advanced Artificial Intelligence, data privacy is baked directly into the DNA of our software blueprints. We adhere to rigorous global security baselines, ensuring your proprietary systems and user data remain impenetrable.",
    glow: "hover:border-rose-500/40 hover:shadow-[0_20px_40px_rgba(244,63,94,0.03)]",
    nodeColor: "group-hover:border-rose-500 group-hover:ring-rose-100"
  },
  {
    title: "3. Transparent, Frictionless Collaboration",
    description: "We eliminate the traditional 'black box' approach to agency development. We operate in clear, 2-week agile sprints, utilizing modern collaborative channels (Slack, Microsoft Teams, Jira). You will have real-time visibility into our progress through weekly live demos, ensuring complete clarity and zero unexpected surprises at launch.",
    glow: "hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.03)]",
    nodeColor: "group-hover:border-amber-500 group-hover:ring-amber-100"
  },
  {
    title: "4. Future-Proof Tech Stacks",
    description: "Technology evolves rapidly, and your software shouldn’t expire in two years. We completely avoid outdated architectures. By utilizing advanced frameworks (like Next.js, Node.js, PyTorch, and robust cloud microservices), we engineer highly scalable codebases that grow seamlessly alongside your enterprise.",
    glow: "hover:border-indigo-500/40 hover:shadow-[0_20px_40px_rgba(99,102,241,0.04)]",
    nodeColor: "group-hover:border-indigo-500 group-hover:ring-indigo-100"
  }
];

export function CompanyBenefitsTimeline() {
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
    if (!isLargeScreen) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="relative bg-[#ffffff] text-neutral-900 py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1140px] space-y-24">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase block">
              Why Choose Us?
            </span>
          </ConditionalReveal>
          
          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] max-w-2xl mx-auto leading-tight">
              Your Vision, Engineered to Perfection.
            </h2>
          </ConditionalReveal>

          <ConditionalReveal direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
            <p className="text-base leading-7 text-neutral-400 font-normal pt-2 max-w-4xl mx-auto">
              In a digital landscape crowded with agencies that simply take orders, Dev innovative Private Limited stands out as a strategic technology partner. We don't just write lines of code; we architect solutions that drive business growth, solve complex operations, and give your brand a decisive competitive edge.
            </p>
          </ConditionalReveal>
        </div>

        {/* ================= TIMELINE TRACK GRID ================= */}
        <div className="relative max-w-5xl mx-auto pt-6">
          
          <div 
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px]" 
            style={{ backgroundColor: "#cacdd4" }}
          />

          <div className="space-y-8 md:space-y-12 relative">
            {benefitsTimelineData.map((benefit, index) => {
              const isRight = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`group flex flex-col md:flex-row relative items-start ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-1/2 z-20 flex items-center justify-center bg-white h-[12px] w-[12px] rounded-full border-[3px] border-neutral-300 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125 ring-0 group-hover:ring-4 mt-6 ${benefit.nodeColor}`} />

                  <div className="w-full md:w-[calc(50%-32px)] pl-12 md:pl-0">
                    <ConditionalReveal 
                      direction={isRight ? "right" : "left"} 
                      duration={0.85} 
                      delay={index * 0.05} 
                      offset={25} 
                      animationType="from"
                    >
                      <div className={`flex flex-col space-y-3.5 p-6 sm:p-8 bg-white border border-neutral-200/60 rounded-3xl hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${benefit.glow} ${
                        !isRight ? "md:text-right md:items-end" : "md:text-left md:items-start"
                      }`}>
                        
                        <div className="space-y-2">
                          <h4 className="text-[17px] sm:text-[18px] font-bold text-[#0f172a] tracking-tight group-hover:text-[#104cba] transition-colors duration-300">
                            {benefit.title}
                          </h4>
                          
                          <p className="text-base leading-relaxed text-neutral-400 font-normal">
                            {benefit.description}
                          </p>
                        </div>

                      </div>
                    </ConditionalReveal>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}