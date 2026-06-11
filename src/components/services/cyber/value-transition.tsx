"use client";

import React, { useEffect, useState } from "react";
import { ShieldX, ShieldCheck, ArrowRight } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

export function ValueTransition() {
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
        <section className="py-6 sm:py-8 bg-transparent relative">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-8">

                {/* ================= ASYMMETRICAL MARKETING LAYOUT GRID ================= */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-start">

                    {/* Left Column: Heading and Context Anchor */}
                    <div className="lg:col-span-5 space-y-4 text-left lg:sticky lg:top-24">
                        <ConditionalReveal direction="down" delay={0.1} offset={12} animationType="from">
                            <span className="text-base md:text-lg font-bold  tracking-wider text-[#104cba] block">
                                Why You Need Cyber Resilience !
                            </span>
                        </ConditionalReveal>

                        <ConditionalReveal direction="down" delay={0.22} offset={15} animationType="from">
                            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#08112a] leading-tight">
                                Why Cyber Security Is Crucial For Your Business
                            </h2>
                        </ConditionalReveal>

                        <ConditionalReveal direction="up" delay={0.35} offset={20} animationType="from">
                            <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed pt-2">
                                In today's fast-paced digital world, basic applications face complex systemic bottlenecks.
                                Here is how we restructure standard systems into uncompromised infrastructure environments.
                            </p>
                        </ConditionalReveal>
                    </div>

                    {/* Right Column: Clean Marketing Bullet Matrix */}
                    <div className="lg:col-span-7 space-y-10 text-left md:pt-6">

                        {/* Element 1: Vulnerability Matrix */}
                        <ConditionalReveal direction="left" delay={0.3} offset={25} animationType="from">
                            <div className="flex gap-5 items-start group">
                                {/* Enlarged Icon Badge Container */}
                                <div className="h-14 w-14 rounded-2xl bg-rose-50 border border-rose-100/70 flex items-center justify-center text-rose-500 shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-rose-100/30 group-hover:border-rose-200">
                                    <ShieldX className="h-6 w-6 stroke-[1.8]" />
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    <h3 className="text-base md:text-lg font-bold text-[#08112a] group-hover:text-rose-600 transition-colors">
                                        The Vulnerability Matrix
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed">
                                        Traditional web and software solutions focus only on superficial features and interfaces—leaving your enterprise fully exposed to shifting threat landscapes, unexpected data leaks, and critical algorithmic vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </ConditionalReveal>

                        {/* Element 2: Engineered Resolution */}
                        <ConditionalReveal direction="left" delay={0.45} offset={25} animationType="from">
                            <div className="flex gap-5 items-start group">
                                {/* Enlarged Icon Badge Container */}
                                <div className="h-14 w-14 rounded-2xl bg-blue-50 border border-blue-100/70 flex items-center justify-center text-[#104cba] shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-100/30 group-hover:border-blue-200">
                                    <ShieldCheck className="h-6 w-6 stroke-[1.8]" />
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    <h3 className="text-base md:text-lg font-bold text-[#08112a] group-hover:text-[#104cba] transition-colors">
                                        The Engineered Resolution
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed">
                                        We bridge the exact gap between frictionless front-end experiences and deeply hardened, cryptographically secured backends. We inject preemptive threat defenses directly into your core code logic, ensuring long-term scalability.
                                    </p>
                                </div>
                            </div>
                        </ConditionalReveal>

                        {/* Element 3: Continuous Infrastructure Monitoring */}
                        <ConditionalReveal direction="left" delay={0.55} offset={25} animationType="from">
                            <div className="flex gap-5 items-start group">
                                {/* Enlarged Icon Badge Container */}
                                <div className="h-14 w-14 rounded-2xl bg-emerald-50 border border-emerald-100/70 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100/30 group-hover:border-emerald-200">
                                    <ArrowRight className="h-6 w-6 stroke-[1.8] transform -rotate-45" />
                                </div>
                                <div className="space-y-1.5 pt-1">
                                    <h3 className="text-base md:text-lg font-bold text-[#08112a] group-hover:text-emerald-600 transition-colors">
                                        Total Data & Protocol Integrity
                                    </h3>
                                    <p className="text-sm sm:text-[15px] text-slate-500 font-medium leading-relaxed">
                                        By hard-coding validation guardrails directly at the server level, your database operations and API communication layers maintain absolute stability and complete cross-origin runtime compliance under intense real-world traffic loads.
                                    </p>
                                </div>
                            </div>
                        </ConditionalReveal>

                    </div>

                </div>

            </div>
        </section>
    );
}