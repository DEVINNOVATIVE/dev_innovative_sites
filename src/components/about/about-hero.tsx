"use client";

import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation"; // Verify your folder structure path

// Image assets from your project folder
import aboutImg from "@/assets/about/about_hero.png"; 
import roundTick from "@/assets/about/round_tick.png"; // Dynamic custom check icon asset

const solutions = [
  {
    title: "End-To-End Solutions:",
    description:
      "We offer end-to-end software and IT solutions that cover every aspect of our clients' businesses. From software development to network management, we provide a comprehensive range of services that help businesses succeed.",
  },
  {
    title: "Quality Assurance",
    description:
      "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our quality standards before delivery.",
  },
];

export function AboutHero() {
  return (
    <section className="relative bg-white text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-310">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          
          {/* --- LEFT COLUMN: ILLUSTRATIVE GRAPHIC CANVAS (Slides from Left + Auto float) --- */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <RevealAnimation direction="left" duration={1.2} delay={0.1} offset={60} animationType="from">
              {/* Injected custom hardware-accelerated float keyframe layout utility */}
              <div 
                className="relative w-full max-w-135 aspect-[1.15/1] transform-gpu"
                style={{ animation: "imageFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={aboutImg}
                  alt="Transforming your business dashboard illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </RevealAnimation>
          </div>

          {/* --- RIGHT COLUMN: TEXT LAYOUT & CHECKLIST (Slides from Right) --- */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header Text Group Animations */}
            <div className="space-y-4">
              <RevealAnimation direction="right" duration={1.1} delay={0.2} offset={40} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase  block">
                  About Company
                </span>
              </RevealAnimation>

              <RevealAnimation direction="right" duration={1.1} delay={0.3} offset={40} animationType="from">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#08112a] leading-[1.25]">
                  Transforming Your Business <br /> With Innovative Software & <br /> IT Solutions
                </h2>
              </RevealAnimation>

              <RevealAnimation direction="right" duration={1.1} delay={0.4} offset={30} animationType="from">
                <p className="text-[15px] leading-7 text-slate-400 font-normal max-w-2xl">
                  Our company specializes in providing innovative software and IT solutions to businesses of all sizes, across a range of industries. We understand that every business is unique, and we work closely with our clients to develop customized solutions that meet their specific needs and goals.
                </p>
              </RevealAnimation>
            </div>

            {/* Checklist Items: Staggered upward transitions */}
            <div className="space-y-6">
              {solutions.map((item, index) => (
                <RevealAnimation 
                  key={item.title} 
                  direction="up" 
                  duration={1.0} 
                  delay={0.5 + index * 0.12} 
                  offset={30} 
                  animationType="from"
                >
                  <div className="flex gap-4 items-start group">
                    {/* Render custom tick image file instead of Lucide component icon */}
                    <div className="mt-1 relative h-6 w-6 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src={roundTick} 
                        alt="Verification Check" 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a]">
                        {item.title}
                      </h4>
                      <p className="text-[14px] leading-6 text-slate-400 font-normal">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* Company Profile Action CTA Button */}
            <RevealAnimation direction="up" duration={1.1} delay={0.75} offset={25} animationType="from">
              <div className="pt-2">
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#ff4722] to-[#ff733b] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,92,61,0.2)] transition-all duration-300 hover:scale-[1.03] hover:opacity-95 active:scale-98"
                >
                  Company Profile
                </a>
              </div>
            </RevealAnimation>

          </div>

        </div>
      </div>

      {/* --- INLINE COMPONENT ANIMATIONS --- */}
      <style jsx>{`
        @keyframes imageFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}