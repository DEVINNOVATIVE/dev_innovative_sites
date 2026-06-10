"use client";

import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation"; // Verify path matches your folder tree structure

// Image assets from your local project paths as specified
import teamHeroImg from "@/assets/team/team.png"; 
import videoPlayBtn from "@/assets/team/video.png"; 

export function TeamHero() {
  return (
    <section className="relative bg-white text-slate-900 pt-8 md:pt-16 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 items-center lg:grid-cols-12">
          
          {/* --- LEFT COLUMN: TEXT LAYOUT & INTERACTIVE VIDEO LINK --- */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={25} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wider  block">
                  Why Choose Our Team ?
                </span>
              </RevealAnimation>

              <RevealAnimation direction="down" duration={1.1} delay={0.15} offset={35} animationType="from">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-[#08112a] leading-tight">
                  Meet Our Team !
                </h1>
              </RevealAnimation>

              <RevealAnimation direction="up" duration={1.1} delay={0.3} offset={30} animationType="from">
                <p className="text-[15px] leading-7 text-slate-400 font-normal max-w-2xl pt-2">
                  we take pride in our team of dedicated professionals who are committed to delivering innovative technology solutions to our clients. Our team is comprised of experts in various fields who bring a wealth of knowledge and experience to every project we undertake.
                </p>
              </RevealAnimation>
            </div>

            {/* Presentation Video Link Action Row */}
            <div className="pt-4">
              <RevealAnimation direction="up" duration={1.0} delay={0.5} offset={30} animationType="from">
                <div className="inline-flex items-center gap-4 group cursor-pointer">
                  
                  {/* Decorative Play Button Container Layering */}
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full">
                    
                    {/* Concentric Pulsing Style Ring Layer Effects */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping opacity-75 scale-110" />
                    <div className="absolute inset-2 rounded-full bg-orange-500/5 animate-pulse" />
                    
                    {/* Static Button Asset */}
                    <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={videoPlayBtn}
                        alt="Play presentation video button graphic"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Action Link Text */}
                  <span className="text-sm font-bold text-slate-500 tracking-wide transition-colors group-hover:text-orange-500">
                    Our Presentation
                  </span>
                  
                </div>
              </RevealAnimation>
            </div>

          </div>

          {/* --- RIGHT COLUMN: VECTOR GRAPHIC ILLUSTRATION (Continuous Float Animation) --- */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <RevealAnimation direction="right" duration={1.2} delay={0.3} offset={50} animationType="from">
              <div 
                className="relative w-full overflow-hidden max-w-[480px] aspect-[1.25/1] transform-gpu"
                style={{ animation: "teamHeroImageFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={teamHeroImg}
                  alt="Team collaboration vector graphics layout"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>

      {/* --- INLINE KEYFRAMES FOR PERSISTENT LOOP MOTIONS --- */}
      <style jsx>{`
        @keyframes teamHeroImageFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}