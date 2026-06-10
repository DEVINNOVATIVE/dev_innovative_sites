

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation";
import Link from "next/link";

// Dynamic images fetched directly from your local assets path directory
import leaderImg from "@/assets/about/blockChain.jpeg"; 
import member1 from "@/assets/about/ceo.jpeg";
import member2 from "@/assets/about/cofounder.png";
import member3 from "@/assets/about/ux.png";
import saudImg from "@/assets/about/saud.jpeg";
import asmaImg from "@/assets/about/asma.jpeg";

const teamData = [
  {
    name: "Habib Rehman",
    role: "CEO & Founder",
    image: member1,
    socials: { linkedin: "https://www.linkedin.com/in/habib-rehman-6457a31a4?utm_source=share_via&utm_content=profile&utm_medium=member_ios", github: "#" }
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
    name: "Abdullah Rehman",
    role: "Graphic Web Designer",
    image: member3,
    socials: { linkedin: "https://www.linkedin.com/in/abdullah-rehman-16460a1a6/", github: "#" }
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
    <section className="relative w-full bg-[#f8f9fa] text-slate-900 py-10 sm:py-16 px-2.5 xs:px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px]">
        
        {/* ======================================================================
            HEADER TITLE ZONE
            ===================================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-20">
          {/* Desktop Animating Path */}
          <div className="hidden lg:block space-y-3">
            <ConditionalReveal direction="down" duration={0.8} delay={0.1} offset={20} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-widest text-[#104cba] uppercase block">
                Team Member
              </span>
            </ConditionalReveal>
            <ConditionalReveal direction="down" duration={0.9} delay={0.18} offset={25} animationType="from">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#08112a]">
                Our Proficient Team
              </h2>
            </ConditionalReveal>
          </div>

          {/* Mobile Static Path */}
          <div className="block lg:hidden space-y-2">
            <span className="text-sm font-bold text-[#104cba] tracking-wider uppercase block">
              Team Member
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a]">
              Our Proficient Team
            </h2>
          </div>
        </div>

        {/* ======================================================================
            TEAM MATRIX DOCK: FORCED 2-COLUMNS ON 320PX MOBILE ULTRA DOCK
            ====================================================================== */}
        <div className="grid gap-x-3 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-start justify-center w-full mx-auto">
          {teamData.map((member, index) => (
            <React.Fragment key={member.name}>
              
              {/* DESKTOP VIEW PROFILE CARD SYSTEM */}
              <div className="hidden lg:block text-center relative">
                <ConditionalReveal
                  direction="up"
                  duration={0.9}
                  delay={0.12 + index * 0.08}
                  offset={30}
                  animationType="from"
                >
                  <div className="flex flex-col items-center space-y-5 group cursor-pointer">
                    
                    {/* Circular Image Profile Frame */}
                    <div className="relative  w-48 h-48 rounded-full overflow-hidden bg-white border-2 border-slate-200/40 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#104cba] group-hover:scale-105">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        fill
                        className="object-cover object-center transform scale-[1.01] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                        sizes="200px"
                      />
                    </div>

                    {/* Identity Typography Stack */}
                    <div className="space-y-1 px-1">
                      <h3 className="text-base font-bold tracking-wider text-[#08112a] uppercase transition-colors duration-300 group-hover:text-[#104cba] line-clamp-2">
                        {member.name}
                      </h3>
                      <p className="text-base font-medium text-slate-500 line-clamp-1">
                        {member.role}
                      </p>
                    </div>

                    {/* Bottom Circular Social Icons Dock */}
                    <div className="flex gap-3 items-center pt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-slate-200/80 flex items-center justify-center bg-[#104cba] text-white hover:border-transparent hover:scale-110 transition-all duration-200 shadow-md">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                      
                      {/* GitHub Icon */}
                      <Link href={member.socials.github} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full border border-slate-200/80 flex items-center justify-center bg-slate-900 text-white hover:border-transparent hover:scale-110 transition-all duration-200 shadow-md">
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </Link>
                    </div>

                  </div>
                </ConditionalReveal>
              </div>

              {/* MOBILE VIEW PROFILE CARD SYSTEM (Guaranteed 2-columns side-by-side at 320px) */}
              <div className="block lg:hidden h-full text-center">
                <div className="flex flex-col items-center space-y-3 active:scale-[0.99] transition-transform">
                  
                  {/* Fluid scaling circles to fit 320px screens cleanly without overflow breaking */}
                  <div className="relative w-42 h-42 rounded-full overflow-hidden bg-white border border-slate-200 shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 360px) 112px, (max-width: 640px) 130px, 160px"
                    />
                  </div>

                  {/* Text Container Row */}
                  <div className="space-y-0.5 px-0.5">
                    <h3 className="text-sm sm:text-base font-bold tracking-wide text-[#08112a] uppercase line-clamp-2 leading-tight min-h-[2rem] flex items-center justify-center">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 line-clamp-1">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Touch Nodes */}
                  <div className="flex gap-2 items-center pt-0.5">
                    {/* LinkedIn */}
                    <Link href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-[#104cba] text-white border border-slate-200/50 flex items-center justify-center shadow-sm">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Link>
                    
                    {/* GitHub */}
                    <Link href={member.socials.github} target="_blank" rel="noopener noreferrer" className="h-6 w-6 xs:h-7 xs:w-7 rounded-full bg-slate-900 text-white border border-slate-200/50 flex items-center justify-center shadow-sm">
                      <svg className="h-3 w-3 xs:h-3 xs:w-3 fill-current" viewBox="0 0 24 24">
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