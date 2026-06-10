"use client";

import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// Image assets from your local project folder as specified
import historyImg from "@/assets/about/history.png"; // Replace with your actual vector image name
import { useEffect, useState } from "react";

export function AboutHistory() {

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
    <section className="relative bg-white text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-16 items-center lg:grid-cols-12">
          
          {/* --- LEFT COLUMN: TEXT LAYOUT & JOURNEY TIMELINE --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Block Group */}
            <div className="space-y-4">
              <ConditionalReveal direction="down" duration={1.0} delay={0.0} offset={30} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase block">
                  Our History
                </span>
              </ConditionalReveal>

              <ConditionalReveal direction="down" duration={1.1} delay={0.15} offset={40} animationType="from">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#08112a] leading-[1.25]">
                  Our Journey Of <br /> Innovation & Excellence
                </h2>
              </ConditionalReveal>

              <ConditionalReveal direction="up" duration={1.1} delay={0.3} offset={30} animationType="from">
                <p className="text-[15px] leading-7 text-slate-400 font-normal max-w-2xl">
                  We take pride in our rich and diverse history. Over the years, we have evolved into a leading provider of top-notch web and IT solutions, catering to the ever-changing needs of businesses worldwide.
                </p>
              </ConditionalReveal>
            </div>

            {/* Timeline Sections Row Blocks */}
            <div className="space-y-8 pt-2">
              
              {/* Item 1: Our Journey */}
              <ConditionalReveal direction="up" duration={1.0} delay={0.45} offset={30} animationType="from">
                <div className="flex gap-4 items-start group">
                  {/* Clean styled cyan/blue stroke ring circle element */}
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[3px] border-cyan-400 bg-white transition-transform duration-300 group-hover:scale-110 shadow-sm" />
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#08112a]">
                      Our Journey
                    </h3>
                    <p className="text-[14px] leading-6 text-slate-400 font-normal max-w-xl">
                      In our early years, we focused on building a strong foundation by assembling a team of talented professionals and creating a customer-centric culture.
                    </p>
                  </div>
                </div>
              </ConditionalReveal>

              {/* Item 2: Our Pride */}
              <ConditionalReveal direction="up" duration={1.0} delay={0.6} offset={30} animationType="from">
                <div className="flex gap-4 items-start group">
                  {/* Clean styled cyan/blue stroke ring circle element */}
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[3px] border-cyan-400 bg-white transition-transform duration-300 group-hover:scale-110 shadow-sm" />
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#08112a]">
                      Our Pride
                    </h3>
                    <p className="text-[14px] leading-6 text-slate-400 font-normal max-w-xl">
                      As we look to the future, we are excited to continue pushing the boundaries of what's possible in the world of web and IT, and to help our clients achieve their goals in the digital realm.
                    </p>
                  </div>
                </div>
              </ConditionalReveal>

            </div>
          </div>

          {/* --- RIGHT COLUMN: VECTOR GRAPHIC ILLUSTRATION (Slides from Right + Continuous Float) --- */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ConditionalReveal direction="right" duration={1.2} delay={0.3} offset={60} animationType="from">
              {/* 
                Animate the graphic container automatically using a gentle translate loop. 
                Using transform-gpu prevents standard text/element anti-aliasing flickering.
              */}
              <div 
                className="relative w-full overflow-hidden max-w-[480px] aspect-[1.1/1] transform-gpu"
                style={{ animation: "historyImageFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={historyImg}
                  alt="Our history timeline team collaboration vector art"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </ConditionalReveal>
          </div>

        </div>
      </div>

      {/* --- INLINE SCOPED KEYFRAMES FOR REPEAT TIMELINE ENTRY --- */}
      <style jsx>{`
        @keyframes historyImageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}