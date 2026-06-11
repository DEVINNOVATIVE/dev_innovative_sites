// "use client";

// import React, { useEffect, useState } from "react";
// import { CheckCircle2 } from "lucide-react";
// import RevealAnimation from "../animation/RevealAnimation";

// const servicesData = [
//   {
//     title: "Flexible plans",
//     description: "We offer a range of hosting plans that are flexible and customizable to meet your specific needs. Whether you need a shared hosting plan or a dedicated server, we have the right solution for you"
//   },
//   {
//     title: "Free domain registration",
//     description: "We offer a free domain registration with our hosting plans, making it easy for you to get started with your website"
//   },
//   {
//     title: "Security:",
//     description: "We take security seriously and implement various measures to protect your website from cyber threats and attacks."
//   },
//   {
//     title: "Money-back guarantee",
//     description: "We stand behind our services and offer a 30-day money-back guarantee. If you are not satisfied with our services, you can cancel your account within the first 30 days and receive a full refund"
//   }
// ];

// export function ProminentITServices() {
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
//     <section className="relative w-full bg-gradient-to-br from-[#0c0533] via-[#0b1040] to-[#104cba] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      
//       {/* Decorative background ambient lighting effects */}
//       <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="mx-auto max-w-[1140px] space-y-16 relative z-10">
        
//         {/* ================= SECTION HEADER ================= */}
//         <div className="text-center space-y-3">
//           <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
//             <span className="text-xl font-bold tracking-wider text-white uppercase block">
//               Services We offer
//             </span>
//           </ConditionalReveal>
          
//           <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
//               Prominent IT Services
//             </h2>
//           </ConditionalReveal>
//         </div>

//         {/* ================= SERVICE GRID LAYOUT ================= */}
//         <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto pt-4">
//           {servicesData.map((service, index) => (
//             <ConditionalReveal
//               key={index}
//               direction="up"
//               duration={0.85}
//               delay={index * 0.08}
//               offset={25}
//               animationType="from"
//             >
//               {/* 
//                 PREMIUM UPGRADE: Abstracted into premium, dark glass-morphic nodes 
//                 with interactive glowing transformations on pointer hover cycles.
//               */}
//               <div className="group relative h-full w-full bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] rounded-2xl p-6 sm:p-8 flex items-start gap-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                
//                 {/* Custom Gradient-Linked Glowing Check Icon wrapper */}
//                 <div className="shrink-0 mt-1 relative flex items-center justify-center">
//                   <div className="absolute inset-0 scale-70 bg-cyan-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <CheckCircle2 className="h-6 w-6 text-cyan-400 stroke-[2] relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
//                 </div>

//                 {/* Content block */}
//                 <div className="space-y-2.5">
//                   <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-cyan-300">
//                     {service.title}
//                   </h3>
//                   <p className="text-[14.5px] leading-relaxed text-slate-300/90 font-normal">
//                     {service.description}
//                   </p>
//                 </div>

//               </div>
//             </ConditionalReveal>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";



import React, { useEffect, useState } from "react";

import { CheckCircle2, TrendingUp, Sparkles, Trophy, ShieldAlert, Layers } from "lucide-react";

import RevealAnimation from "../animation/RevealAnimation";



const servicesData = [

  {

    title: "98% Client Retention & Satisfaction Rate",

    description: "When you choose us, you are not hiring a temporary vendor—you are investing in an elite team dedicated to your long-term market leadership.",

    icon: Trophy,

    accent: "group-hover:text-amber-400 group-hover:bg-amber-400/5"

  },

  {

    title: "2x Faster Time-to-Market with Agile Delivery",

    description: "We eliminate traditional development friction and operate in structured 2-week sprints, showcasing complete transparency and live weekly demos.",

    icon: TrendingUp,

    accent: "group-hover:text-[#ff6036] group-hover:bg-[#ff6036]/5"

  },

  {

    title: "100% On-Time, Within-Budget Project Trajectory",

    description: "Our strict architectural design processes and clear scope guidelines ensure secure software product pipelines with no unpredicted cost surprises.",

    icon: Sparkles,

    accent: "group-hover:text-blue-400 group-hover:bg-blue-400/5"

  },

  {

    title: "24/7 Proactive System Monitoring & Post-Launch Support",

    description: "Continuous enterprise infrastructure protection hardening, diagnostic health reports, and live backend maintenance overhead management.",

    icon: ShieldAlert,

    accent: "group-hover:text-emerald-400 group-hover:bg-emerald-400/5"

  }

];



export function ProminentITServices() {

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

    <section className="relative w-full bg-[#071033] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">

     

      {/* Premium Ambient Background Mesh Glows */}

      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ff6036]/5 rounded-full blur-[140px] pointer-events-none" />



      <div className="mx-auto max-w-[1200px] space-y-28 relative z-10">

       

        {/* ================= SECTION HEADER ================= */}

        <div className="text-center space-y-4 max-w-3xl mx-auto">

          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">

            <span className="text-xs sm:text-sm font-black tracking-widest text-[#ff6036] uppercase bg-[#ff6036]/5 px-4 py-1.5 rounded-full inline-block border border-[#ff6036]/10">

              ⚡ By The Numbers

            </span>

          </ConditionalReveal>

         

          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={20} animationType="from">

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">

              The Dev Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white">Pillars of Excellence</span>

            </h2>

          </ConditionalReveal>

        </div>



        {/* ================= SERVICE GRID LAYOUT ================= */}

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto pt-4">

          {servicesData.map((service, index) => {

            const IconComponent = service.icon;

            return (

              <ConditionalReveal

                key={index}

                direction="up"

                duration={0.85}

                delay={index * 0.08}

                offset={25}

                animationType="from"

              >

                <div className="group relative h-full w-full bg-white/[0.01] border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.02] rounded-2xl p-6 sm:p-8 flex items-start gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">

                 

                  {/* Dynamic Icon Frame Box */}

                  <div className={`h-12 w-12 rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 flex items-center justify-center shrink-0 transition-all duration-500 shadow-md ${service.accent}`}>

                    <IconComponent className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />

                  </div>



                  <div className="space-y-2">

                    <h3 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight transition-colors duration-300 group-hover:text-blue-400">

                      {service.title}

                    </h3>

                    <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">

                      {service.description}

                    </p>

                  </div>



                </div>

              </ConditionalReveal>

            );

          })}

        </div>



        {/* ================= THE COMPETITOR MATRIX TABLE ================= */}

        <div className="space-y-10 pt-16 max-w-6xl mx-auto border-t border-white/[0.06]">

          <div className="text-center max-w-2xl mx-auto space-y-3">

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">

              The Competitor Matrix: <span className="text-[#ff6036]">How We Excel</span>

            </h3>

            <p className="text-sm text-slate-400 font-medium">

              To help you make an informed decision, here is how Dev innovative compares to typical development alternatives:

            </p>

          </div>



          <div className="w-full overflow-x-auto rounded-2xl border border-white/[0.06] shadow-3xl bg-[#0c143d]/40 backdrop-blur-md">

            <table className="w-full text-left border-collapse min-w-[768px]">

              <thead>

                <tr className="border-b border-white/[0.08] bg-[#050b24]/80">

                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">The Criteria</th>

                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Typical Agencies</th>

                  <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-400">Freelancer Networks</th>

                  <th className="p-5 text-xs font-black uppercase tracking-widest text-[#ff6036] bg-[#ff6036]/[0.02]">Dev innovative Private Limited</th>

                </tr>

              </thead>

              <tbody className="divide-y divide-white/[0.04]">

                <tr className="hover:bg-white/[0.01] transition-all duration-200 text-[14px]">

                  <td className="p-5 text-white font-bold bg-white/[0.005] tracking-tight">Communication</td>

                  <td className="p-5 text-slate-400 font-medium">Slow response, account managers act as barriers.</td>

                  <td className="p-5 text-slate-400 font-medium">Inconsistent availability, timezone friction.</td>

                  <td className="p-5 text-blue-300 font-semibold bg-[#ff6036]/[0.01]" style={{ borderLeft: '3px solid #ff6036' }}>

                    <div className="flex items-center gap-2.5">

                      <CheckCircle2 className="h-4 w-4 text-[#ff6036] shrink-0" />

                      <span>Direct Slack/Teams access to senior engineers.</span>

                    </div>

                  </td>

                </tr>

                <tr className="hover:bg-white/[0.01] transition-all duration-200 text-[14px]">

                  <td className="p-5 text-white font-bold bg-white/[0.005] tracking-tight">Code Quality</td>

                  <td className="p-5 text-slate-400 font-medium">Templated, rigid, hard to scale later.</td>

                  <td className="p-5 text-slate-400 font-medium">Highly variable, lacks unified QA testing.</td>

                  <td className="p-5 text-blue-300 font-semibold bg-[#ff6036]/[0.01]" style={{ borderLeft: '3px solid #ff6036' }}>

                    <div className="flex items-center gap-2.5">

                      <CheckCircle2 className="h-4 w-4 text-[#ff6036] shrink-0" />

                      <span>Clean, modular code built for ultimate scale.</span>

                    </div>

                  </td>

                </tr>

                <tr className="hover:bg-white/[0.01] transition-all duration-200 text-[14px]">

                  <td className="p-5 text-white font-bold bg-white/[0.005] tracking-tight">IP Ownership</td>

                  <td className="p-5 text-slate-400 font-medium">Ambiguous contracts, hidden licensing fees.</td>

                  <td className="p-5 text-slate-400 font-medium">High risk of data leaks and code plagiarism.</td>

                  <td className="p-5 text-blue-300 font-semibold bg-[#ff6036]/[0.01]" style={{ borderLeft: '3px solid #ff6036' }}>

                    <div className="flex items-center gap-2.5">

                      <CheckCircle2 className="h-4 w-4 text-[#ff6036] shrink-0" />

                      <span>100% Client Ownership from day one.</span>

                    </div>

                  </td>

                </tr>

                <tr className="hover:bg-white/[0.01] transition-all duration-200 text-[14px]">

                  <td className="p-5 text-white font-bold bg-white/[0.005] tracking-tight">Approach</td>

                  <td className="p-5 text-slate-400 font-medium">Simple order takers ("Feature Builders").</td>

                  <td className="p-5 text-slate-400 font-medium">Rely completely on client direction.</td>

                  <td className="p-5 text-blue-300 font-semibold bg-[#ff6036]/[0.01]" style={{ borderLeft: '3px solid #ff6036' }}>

                    <div className="flex items-center gap-2.5">

                      <CheckCircle2 className="h-4 w-4 text-[#ff6036] shrink-0" />

                      <span>Strategic partners who challenge assumptions for a better product.</span>

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>



      </div>

    </section>

  );

}