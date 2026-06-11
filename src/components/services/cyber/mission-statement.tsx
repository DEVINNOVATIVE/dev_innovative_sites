"use client";

import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

export function MissionStatement() {

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
        <section className="relative py-6 sm:py-12 bg-transparent select-none w-full">
            {/* Container aligned with the global 1240px layout boundaries */}
            <div className="mx-auto w-full max-w-310 px-5 sm:px-8 relative z-10">

                <ConditionalReveal direction="up" delay={0.15} offset={30} animationType="from">
                    {/* 
            Premium Editorial Quote Container:
            Uses an ultra-subtle background and clean typographic weight reductions 
            to create a sharp, high-end editorial appearance.
          */}
                    <div className="w-full rounded-3xl bg-neutral-50/40 border border-neutral-200/40 p-4 sm:p-8 md:p-10 text-left relative overflow-hidden">

                        {/* Elegant Left Border Accent Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#104cba]/80 to-[#ff4b2b]/80" />

                        <div className="max-w-4xl space-y-5 flex flex-col items-start">

                            {/* Refined Minimal Icon Frame */}
                            <div className="h-10 w-10 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center text-[#104cba]/80 shadow-xs">
                                <Quote className="h-4 w-4 transform rotate-180 fill-current opacity-70" />
                            </div>

                            {/* Light Gray Editorial Typography */}
                            <blockquote className="space-y-5 w-full">
                                <p className="text-xl sm:text-2xl font-medium tracking-wide text-slate-600 leading-[1.55]">
                                    &ldquo;We don&apos;t just write code; we architect sovereign digital environments.
                                    Through the precise trinity of high-fidelity web development, predictive machine
                                    intelligence, and uncompromising cybersecurity, Dev Innovative provides the definitive
                                    foundation for secure, future-proof enterprise scale.&rdquo;
                                </p>

                                {/* Thin, Soft Divider */}
                                <div className="h-px w-12 bg-slate-200" />

                                {/* Subdued Signature Track */}
                                <footer className="flex items-center gap-2">
                                    <span className="h-1 w-1 rounded-full bg-[#ff4b2b]" />
                                    <span className="text-xs font-bold tracking-widest text-[#104cba] uppercase opacity-90">
                                        Dev Innovative Corporate Manifesto
                                    </span>
                                </footer>
                            </blockquote>

                        </div>

                    </div>
                </ConditionalReveal>

            </div>
        </section>
    );
}