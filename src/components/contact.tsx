"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import RevealAnimation from "./animation/RevealAnimation";

// Assuming you have your custom illustration asset saved here
import contactIllustration from "@/assets/contact.png";
import { ContactFormCard } from "./contact-us";

const infoCards = [
    {
        title: "Our Location",
        content: "2020 N Academy Blvd, Colorado Springs, 80909 United States",
        Icon: MapPin,
        iconColor: "text-blue-500",
        iconBg: "bg-blue-50/50",
    },
    {
        title: "Phone Number",
        content: "+1 (689) 267-4506",
        Icon: Phone,
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50/50",
    },
    {
        title: "Email Address",
        content: "info@devinnovative.com",
        Icon: Mail,
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-50/50",
    },
];

export function ContactUsForm() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Submitted Data: ", formData);
    };
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
        <section className="relative w-full bg-white px-4 sm:px-8 lg:px-10 py-8 sm:py-16 text-slate-900 select-none overflow-hidden">
            <div className="mx-auto max-w-[1240px] space-y-24">

                {/* ================= TOP SECTION: ILLUSTRATION & CONTACT FORM ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Floating Floating Abstract Vector Art */}
                    <div className="w-full flex justify-center items-center relative order-last lg:order-first">
                        {/* <ConditionalReveal direction={isDesktop ? "left" : "up"} duration={1.0} delay={0.1} offset={40} animationType="from"> */}
                            <div className="relative w-full max-w-[500px] aspect-[1.15/1]">
                                <Image
                                    src={contactIllustration}
                                    alt="Contact support team interaction vector artwork layer"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 100vw, 500px"
                                    priority
                                />
                            </div>
                        {/* </ConditionalReveal> */}

                        {/* Geometric Decorative Scatter Ring Elements from image_03ae23.png */}
                        <div className="absolute top-[-5%] right-[25%] hidden lg:block text-cyan-400 text-3xl opacity-40 animate-pulse">○</div>
                        <div className="absolute bottom-[20%] right-[-5%] hidden lg:block text-orange-500 text-xs opacity-80">✦</div>
                    </div>

                    {/* Right Column: Text Layout & Active Contact Form Input Array */}
                    <div className="w-full mx-auto max-w-xl lg:max-w-none text-left">
                        <ContactFormCard
                            badgeText="Get in Touch"
                            title="Get in touch with us today !"
                            showLiveIndicator={true} />
                    </div>

                </div>

                {/* ================= BOTTOM SECTION: INFORMATIONAL DETAILS ROW ================= */}
                <div className="space-y-12 w-full pt-4">

                    {/* Section Subsection Headers */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <ConditionalReveal direction="down" duration={0.9} delay={0.1} offset={25} animationType="from">
                            <span className=" tracking-wider text-lg font-bold text-[#104cba] uppercase block">
                                Connect With Us Today
                            </span>
                        </ConditionalReveal>
                        <ConditionalReveal direction="down" duration={0.9} delay={0.2} offset={30} animationType="from">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                                Contact Us Via Our Email Or Phone Number!
                            </h3>
                        </ConditionalReveal>
                        <ConditionalReveal direction="up" duration={0.9} delay={0.35} offset={25} animationType="from">
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-normal max-w-2xl mx-auto">
                                Our team is always ready to help answer any questions you may have about our services or assist with any concerns you may encounter. Fill out the form below, and we'll get back to you as soon as possible.
                            </p>
                        </ConditionalReveal>
                    </div>

                    {/* Informational Connection Metric Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full pt-4">
                        {infoCards.map((card, idx) => {
                            const CardIcon = card.Icon;
                            return (
                                <ConditionalReveal
                                    key={card.title}
                                    direction="up"
                                    duration={0.9}
                                    delay={0.4 + idx * 0.12}
                                    offset={35}
                                    animationType="from"
                                >
                                    <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] h-full">
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl mb-4 border border-slate-200/20 ${card.iconBg} ${card.iconColor}`}>
                                            <CardIcon className="h-5 w-5 stroke-[2.5]" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-[15px] sm:text-[16px] font-bold text-slate-800 tracking-tight">
                                                {card.title}
                                            </h4>
                                            <p className="text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-medium max-w-[240px] mx-auto">
                                                {card.content}
                                            </p>
                                        </div>
                                    </div>
                                </ConditionalReveal>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}