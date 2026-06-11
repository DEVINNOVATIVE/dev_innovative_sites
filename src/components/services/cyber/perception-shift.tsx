"use client";

import React, { useEffect, useState } from "react";
import { ShieldAlert, ShieldCheck, HelpCircle } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

const shifts = [
    {
        label: "Core Architecture",
        old: "Building vulnerable, disjointed applications.",
        dev: "Engineering intelligent, autonomous touchpoints."
    },
    {
        label: "Security Approach",
        old: "Waiting for a security breach to apply patches.",
        dev: "Deploying preemptive threat defense and cyber resilience."
    },
    {
        label: "Integration Quality",
        old: "Tacking on basic API integrations as an afterthought.",
        dev: "Hardening cryptographic infrastructures from the root layer."
    }
];

export function PerceptionShift() {
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
        <section className="py-6 sm:py-12 bg-transparent relative select-none w-full">
            <div className="mx-auto w-full max-w-310 px-5 sm:px-8">

                {/* ================= HEADER INTRO SECTION ================= */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                    <ConditionalReveal direction="down" delay={0.1} offset={12} animationType="from">
                        <span className="text-base sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                            The Structural Shift !
                        </span>
                    </ConditionalReveal>
                    <ConditionalReveal direction="down" delay={0.22} offset={15} animationType="from">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
                            Why Enterprise Leaders Choose Dev Innovative
                        </h2>
                    </ConditionalReveal>
                    <ConditionalReveal direction="up" delay={0.35} offset={15} animationType="from">
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
                            A direct architectural contrast between outdated, reactive development workflows
                            and our high-fidelity engineering methodologies.
                        </p>
                    </ConditionalReveal>
                </div>

                {/* ================= PREMIUM 3-COLUMN SIDE-BY-SIDE CARDS ================= */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch w-full">
                    {shifts.map((item, idx) => (
                        <ConditionalReveal key={idx} direction="up" delay={0.15 + idx * 0.12} offset={30} animationType="from">
                            <div className="group h-full bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] flex flex-col justify-between text-left">

                                {/* Top Section: Category Label Asset */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100/70 flex items-center justify-center text-[#104cba] shrink-0 shadow-sm transition-colors group-hover:bg-[#104cba] group-hover:text-white">
                                            <HelpCircle className="h-5 w-5 stroke-[1.8]" />
                                        </div>
                                        <h3 className="text-base sm:text-lg font-bold text-[#08112a] tracking-tight leading-snug">
                                            {item.label}
                                        </h3>
                                    </div>

                                    <div className="h-px w-full bg-slate-100 pt-1" />
                                </div>

                                {/* Bottom Section: Stacked Comparison Panels */}
                                <div className="space-y-4 mt-6">

                                    {/* The Old Way Box */}
                                    <div className="space-y-1.5 p-4 rounded-xl bg-slate-50/60 border border-slate-100/80 transition-colors group-hover:bg-slate-50">
                                        <div className="flex items-center gap-1.5 text-sm md:text-base font-bold uppercase tracking-wider text-rose-500">
                                            <ShieldAlert className="h-3.5 w-3.5" />
                                            <span>The Old Vendor Way</span>
                                        </div>
                                        <p className="text-[15px] text-slate-400 font-medium leading-relaxed">
                                            {item.old}
                                        </p>
                                    </div>

                                    {/* The Dev Innovative Way Box */}
                                    <div className="space-y-1.5 p-4 rounded-xl bg-blue-50/30 border border-blue-100/40 transition-all duration-300 group-hover:bg-blue-50/50 group-hover:border-blue-300/50">
                                        <div className="flex items-center gap-1.5 text-sm md:text-base font-bold uppercase tracking-wider text-[#104cba]">
                                            <ShieldCheck className="h-3.5 w-3.5" />
                                            <span>The Dev Innovative Way</span>
                                        </div>
                                        <p className="text-[15px] text-[#08112a] font-semibold leading-relaxed">
                                            {item.dev}
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </ConditionalReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}