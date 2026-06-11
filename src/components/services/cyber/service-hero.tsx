"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldAlert, Cpu } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

export function ServiceHero() {
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
        <section className="relative pt-6  sm:pt-16 sm:pb-28 mx-auto flex flex-col items-center justify-center bg-transparent text-center select-none">
            <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 relative z-10 flex flex-col items-center">

                {/* Marketing Sub-heading */}
                <ConditionalReveal direction="down" delay={0.1} offset={12} animationType="from">
                    <span className="text-base sm:text-lg font-bold tracking-wider text-[#104cba]  block mb-3">
                        Discover Our Range Of Advanced Engineering Services
                    </span>
                </ConditionalReveal>

                {/* Main Centered Bold Title */}
                <ConditionalReveal direction="down" delay={0.22} offset={15} animationType="from">
                    <h1 className="text-2xl sm:text-4xl lg:text-[56px] font-bold tracking-tight text-[#08112a] leading-tight max-w-4xl">
                        Cyber Resilience & <span className="text-[#104cba]">Advanced Engineering</span>
                    </h1>
                </ConditionalReveal>

                {/* Center-Aligned Explainer Paragraph */}
                <ConditionalReveal direction="up" delay={0.35} offset={20} animationType="from">
                    <p className="mt-6 text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Moving businesses beyond vulnerable, standard web setups into iron-clad digital ecosystems.
                        At Dev Innovative, we fuse high-performance software engineering with predictive
                        Consensus AI and preemptive, zero-trust cybersecurity to build platforms that are
                        secure by design and resilient by default.
                    </p>
                </ConditionalReveal>

                {/* Premium Row Action Buttons (Guaranteed 1 Row on Mobile) */}
                <ConditionalReveal direction="up" delay={0.48} offset={15} animationType="from">
                    <div className="mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto px-2">

                        {/* Primary Action Button */}
                        <Link
                            href="/contact-us"
                            className="group flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d]  px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,75,43,0.15)] hover:shadow-[0_10px_25px_rgba(255,75,43,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
                        >
                            <span>Secure Now</span>
                            <ShieldAlert className="h-3.5 w-3.5 sm:h-4 sm:w-4 transform transition-transform group-hover:scale-110 shrink-0" />
                        </Link>

                        {/* Secondary Outline Link Button */}
                        <Link
                            href="#"
                            className="group flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-neutral-50/80 border border-slate-200/60 px-4 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-600 shadow-sm hover:bg-white hover:border-[#104cba] hover:text-[#104cba] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
                        >
                            <span>Our Architecture</span>
                            <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 transition-colors group-hover:text-[#104cba] shrink-0" />
                        </Link>

                    </div>
                </ConditionalReveal>

            </div>
        </section>
    );
}