"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

export function ServiceCTA() {
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
        <section className="py-14 sm:py-16 bg-transparent text-center relative select-none w-full">
            {/* 
        Maximum structural container width matching your global boundaries 
        to fill out any empty space beautifully.
      */}
            <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 relative z-10 flex flex-col items-center">
                <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 flex flex-col items-center">

                    {/* Top Tag - Clean layout variant matching the image page look */}
                    <ConditionalReveal direction="down" delay={0.1} offset={12} animationType="from">
                        <span className="text-base sm:text-lg font-bold tracking-widest text-[#104cba] uppercase flex items-center justify-center gap-2">
                            <Sparkles className="h-4 w-4 text-[#ff6036] animate-pulse" /> Architecture Audit
                        </span>
                    </ConditionalReveal>

                    {/* Main Direct Title */}
                    <ConditionalReveal direction="up" delay={0.25} offset={20} animationType="from">
                        <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-bold text-[#08112a] tracking-tight leading-[1.1]">
                            Claim Your Free Cyber Resilience & Architecture Consultation
                        </h2>
                    </ConditionalReveal>

                    {/* Clean Explainer Paragraph */}
                    <ConditionalReveal direction="up" delay={0.4} offset={15} animationType="from">
                        <p className="text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                            Speak directly with our technical architects to evaluate your existing platform,
                            map out an AI integration strategy, and harden your defenses from the root execution layers.
                        </p>
                    </ConditionalReveal>

                    {/* Premium Conversion Action Center */}
                    <ConditionalReveal direction="up" delay={0.55} offset={15} animationType="from">
                        <div className="pt-2">
                            <Link
                                href="/contact-us"
                                className="group bg-linear-to-r from-[#ff6b4a] to-[#ff3b2d]  inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm shadow-[0_6px_20px_rgba(255,96,54,0.2)] hover:shadow-[0_10px_25px_rgba(255,96,54,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"

                            >
                                <span>Get A Free Quote !</span>
                                <ArrowRight className="h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </ConditionalReveal>

                </div>
            </div>
        </section>
    );
}