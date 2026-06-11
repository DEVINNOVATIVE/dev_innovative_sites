"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, Cpu, Layers, Check } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

const capabilities = [
    {
        icon: <ShieldCheck className="h-6 w-6 stroke-[1.8] text-blue-600" />,
        badgeBg: "bg-blue-50 border-blue-100/70 text-blue-600",
        hoverBorder: "hover:border-blue-500/30 hover:shadow-blue-500/[0.03]",
        title: "Preemptive Cyber Engineering & Architecture",
        desc: "We replace reactive security patches with preemptive, zero-trust architecture. From core codebase hardening to immutable data schemas, we secure your enterprise platforms against modern threat vectors before they ever manifest.",
        features: ["Zero-Trust Frameworks", "Cryptographic Protection", "Code Hardening & Audits"]
    },
    {
        icon: <Cpu className="h-6 w-6 stroke-[1.8] text-purple-600" />,
        badgeBg: "bg-purple-50 border-purple-100/70 text-purple-600",
        hoverBorder: "hover:border-purple-500/30 hover:shadow-purple-500/[0.03]",
        title: "Consensus AI & Intelligent Logic Layers",
        desc: "Deploy self-healing, predictive software ecosystems. We build highly structured AI layers backed by consensus mechanisms, ensuring your automated processes, data models, and backend calculations remain unmanipulated and highly optimized.",
        features: ["Coordinated Algorithmic Logic", "Automated Threat ID", "Machine-Intelligent Optimization"]
    },
    {
        icon: <Layers className="h-6 w-6 stroke-[1.8] text-cyan-600" />,
        badgeBg: "bg-cyan-50 border-cyan-100/70 text-cyan-600",
        hoverBorder: "hover:border-cyan-500/30 hover:shadow-cyan-500/[0.03]",
        title: "Full-Spectrum Digital Resilience",
        desc: "Complete security for your entire digital supply chain. We transition standard web frontends into elite backend architectures, protecting your user touchpoints, database integrations, APIs, and cloud deployments under a unified defense matrix.",
        features: ["Secure Front-to-Back Sync", "Immutable API Architectures", "Resilient Cloud Deployments"]
    }
];

export function CoreCapabilities() {

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
        <section id="capabilities" className="py-8 sm:py-16 bg-transparent select-none">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-8">

                {/* ================= SECTION HEADINGS ================= */}
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                    <ConditionalReveal direction="down" delay={0.1} offset={12} animationType="from">
                        <span className="text-base sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                            Services To Build Your Brand !
                        </span>
                    </ConditionalReveal>
                    <ConditionalReveal direction="down" delay={0.22} offset={15} animationType="from">
                        <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
                            Revamp Your Infrastructure With Our Core Capabilities
                        </h2>
                    </ConditionalReveal>
                    <ConditionalReveal direction="up" delay={0.35} offset={15} animationType="from">
                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed max-w-xl mx-auto">
                            Our engineering team provides a comprehensive range of defensive software deployments
                            designed to keep your frameworks highly scalable and secure.
                        </p>
                    </ConditionalReveal>
                </div>

                {/* ================= MODERN THREE-COLUMN CARD GRID ================= */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch w-full">
                    {capabilities.map((item, i) => (
                        <ConditionalReveal key={i} direction="up" delay={0.15 + i * 0.12} offset={30} animationType="from">
                            <div className={`group h-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-xl transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl ${item.hoverBorder} flex flex-col justify-between text-left`}>

                                <div className="space-y-5">
                                    {/* Enlarged Icon Frame Asset */}
                                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105 shadow-sm ${item.badgeBg}`}>
                                        {item.icon}
                                    </div>

                                    {/* Card Content Text Group */}
                                    <div className="space-y-2.5">
                                        <h3 className="text-lg font-bold text-[#08112a] tracking-tight leading-snug group-hover:text-[#104cba] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Micro Bullet Inline Lists */}
                                <div className="pt-6 mt-8 border-t border-slate-100 space-y-2.5">
                                    {item.features.map((feat, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-[#08112a]">
                                            <span className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200/60 shrink-0">
                                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                                            </span>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </ConditionalReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}