"use client";

import Image from "next/image";
import Link from "next/link";
import RevealAnimation from "./animation/RevealAnimation"; // Verify your folder structure path

// Using the connect map texture from your assets for the background design context
import connectBg from "@/assets/connect_bg.webp";
import { useEffect, useState } from "react";

interface PageHeaderProps {
  title: string;
  currentPage?: string;
  parentPage?: {
    name: string;
    link: string;
  };
}
export function PageHeader({ title, currentPage, parentPage }: PageHeaderProps) {
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
    <section className="relative overflow-hidden bg-[#071033] py-8 md:py-14 text-center flex items-center justify-center min-h-60 md:min-h-80 border-b border-white/5">
      
      {/* --- 1. GEOMETRIC BACKGROUND PATTERN LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-15 select-none pointer-events-none mix-blend-screen transform scale-105">
        <Image
          src={connectBg}
          alt="Geometric map grid pattern background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Futuristic Center Glow Radial Accent for Premium Contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-44 md:h-62.5 bg-linear-to-r from-[#104cba]/20 to-[#ff5c3d]/10 rounded-full blur-[80px] z-0 pointer-events-none" />

      {/* --- 2. DYNAMIC CONTENT INNER CONTAINER --- */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
        <div className="space-y-5">
          
          {/* Main Title Animation (Reveals Smoothly Downwards) */}
          <ConditionalReveal direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
            <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm capitalize">
              {title}
            </h1>
          </ConditionalReveal>

          {/* Breadcrumb Links Navigation Animation (Reveals Smoothly Upwards) */}
          <ConditionalReveal direction="up" duration={1.1} delay={0.2} offset={30} animationType="from">
            <nav className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md text-sm font-medium text-slate-400 shadow-inner">
              
              <Link 
                href="/" 
                className="text-slate-300 hover:text-[#ff5c3d] transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Clean minimal chevron divider */}
              <span className="text-white/20 text-xs font-normal select-none">&#10095;</span>

              {/* Dynamic Parent Route (If supplied e.g. Services -> Blockchain) */}
              {parentPage && (
                <>
                  <Link 
                    href={parentPage.link} 
                    className="text-slate-300 hover:text-[#ff5c3d] transition-colors duration-200"
                  >
                    {parentPage.name}
                  </Link>
                  <span className="text-white/20 text-xs font-normal select-none">&#10095;</span>
                </>
              )}

              {/* Active Current Page Terminal Label */}
              <span className="text-[#ff5c3d] font-semibold capitalize">
                {currentPage || title}
              </span>

            </nav>
          </ConditionalReveal>

        </div>
      </div>
    </section>
  );
}