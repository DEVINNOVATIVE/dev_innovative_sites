"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPLICIT PATH IMPORTS MATCHING YOUR ASSETS SCHEME (image_b53600.png) ---
import mainHero from "@/assets/crm/main.webp";     // Note the explicit .webp format extension
import digitalAsset from "@/assets/crm/digital.png"; // Note the unique .png format extension
import webAsset from "@/assets/crm/web.png";         // Note the unique .png format extension

export function CrmDetail() {
    return (
        <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
            <div className="mx-auto max-w-[1140px] space-y-16">

                {/* ================= 1. LARGE HERO PRESENTATION DASHBOARD SHOWCASE ================= */}
                <div className="w-full">
                    <RevealAnimation direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
                        <div className="relative w-full aspect-[2.18/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
                            <Image
                                src={mainHero}
                                alt="Orvito Dashboard admin panel customizable CRM management view system mockup"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </RevealAnimation>
                </div>

                {/* ================= 2. VERBATIM TEXT NARRATIVE ANALYSIS BLOCK ================= */}
                <div className="max-w-4xl space-y-10 mx-auto">

                    {/* Main Conceptual Abstract Narrative Intro */}
                    <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={25} animationType="from">
                        <div className="space-y-4">
                            <p className="text-base leading-7 text-slate-500 font-normal">
                                Admin panels allow website owners to easily manage content, user accounts, payment processing, analytics, and other important aspects of their website or application. They provide a simple and intuitive way for non-technical users to manage website data and make updates without requiring coding knowledge or access to the website's backend.
                            </p>
                            <p className="text-base leading-7 text-slate-500 font-normal">
                                Our company has extensive experience in developing customized admin panels tailored to meet the unique needs of our clients. We understand the importance of having a user-friendly and intuitive admin panel that can help businesses streamline their workflow and manage their operations more efficiently. Our team of developers works closely with our clients to understand their requirements and develop a robust admin panel that is easy to use, secure, and scalable.
                            </p>
                        </div>
                    </RevealAnimation>

                    {/* Detailed Feature Points Core List */}
                    <div className="space-y-6">

                        {/* Feature 01: User management */}
                        <div className="space-y-1">
                            <RevealAnimation direction="down" duration={0.9} delay={0.15} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    User management:
                                </h3>
                            </RevealAnimation>
                            <RevealAnimation direction="up" duration={1.0} delay={0.2} offset={20} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Admin panels allow website owners to manage user accounts, including creating new accounts, deleting accounts, and modifying user permissions.
                                </p>
                            </RevealAnimation>
                        </div>

                        {/* Feature 02: Content management */}
                        <div className="space-y-1">
                            <RevealAnimation direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    Content management:
                                </h3>
                            </RevealAnimation>
                            <RevealAnimation direction="up" duration={1.0} delay={0.25} offset={20} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Admin panels allow website owners to manage content on their website, including creating, editing, and deleting pages, blog posts, and other content.
                                </p>
                            </RevealAnimation>
                        </div>

                        {/* Feature 03: Analytics and reporting */}
                        <div className="space-y-1">
                            <RevealAnimation direction="down" duration={0.9} delay={0.22} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    Analytics and reporting:
                                </h3>
                            </RevealAnimation>
                            <RevealAnimation direction="up" duration={1.0} delay={0.28} offset={20} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Admin panels allow website owners to view and analyze website traffic data, sales data, and other important metrics.
                                </p>
                            </RevealAnimation>
                        </div>

                        {/* Feature 04: Payment processing */}
                        <div className="space-y-1">
                            <RevealAnimation direction="down" duration={0.9} delay={0.25} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    Payment processing:
                                </h3>
                            </RevealAnimation>
                            <RevealAnimation direction="up" duration={1.0} delay={0.32} offset={20} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Admin panels allow website owners to manage payment processing and track transactions, including issuing refunds and managing subscriptions.
                                </p>
                            </RevealAnimation>
                        </div>

                        {/* Feature 05: Security */}
                        <div className="space-y-1">
                            <RevealAnimation direction="down" duration={0.9} delay={0.28} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    Security:
                                </h3>
                            </RevealAnimation>
                            <RevealAnimation direction="up" duration={1.0} delay={0.35} offset={20} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Admin panels should be designed with security in mind, with features such as two-factor authentication, password hashing, and secure user authentication.
                                </p>
                            </RevealAnimation>
                        </div>

                    </div>

                </div>

                {/* ================= 3. BASELINE BILATERAL NEXT/PREV ROUTER DOCKS ================= */}
                <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Linked Target 1: Previous Case Study Link */}
                    <RevealAnimation direction="left" duration={1.0} delay={0.45} offset={25} animationType="from">
                        <Link
                            href="/portfolio/web-development"
                            className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
                        >
                            <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                                <Image
                                    src={webAsset}
                                    alt="Web Development responsive mockup display link preview thumbnail"
                                    className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-0.5">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                                </span>
                                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                                    Web Development
                                </h4>
                            </div>
                        </Link>
                    </RevealAnimation>

                    {/* Linked Target 2: Next Case Study Link */}
                    <RevealAnimation direction="right" duration={1.0} delay={0.45} offset={25} animationType="from">
                        <Link
                            href="/portfolio/digital-marketing"
                            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block text-right"
                        >
                            <div className="space-y-0.5 text-left order-1 sm:order-none pl-4 sm:pl-0">
                                <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                                    <Image
                                        src={digitalAsset}
                                        alt="Digital Marketing Services strategy overview matrix deck illustration token"
                                        className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    Next Portfolio <ArrowRight className="h-3 w-3" />
                                </span>
                                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                                    Digital Marketing Services
                                </h4>
                            </div>

                        </Link>
                    </RevealAnimation>

                </div>

            </div>
        </section>
    );
}