"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";
import { ContactFormCard } from "../../contact-us";

// Precise asset import matching image_5dec6c.png
import imgPlant from "@/assets/services/web_hosting/demo15-img14.png";

export function HostingContact() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 bg-white text-slate-900 select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1240px] mx-auto">
        
        {/* ======================================================================
            LEFT COLUMN: TEXT INFORMATION & CONTACT DETAILS
            ====================================================================== */}
        <div className="lg:col-span-5 space-y-6 text-left lg:pt-4">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase block tracking-wider">
              Contact Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
              Get In Touch With Us Today!
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-400 font-normal">
              Fill out the form below, and we will get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Details Stack with Soft Background Icons */}
          <div className="space-y-4 pt-2">
            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center shadow-sm">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-slate-600 leading-snug">
                22354 New York City, Global Core Headquarters Office Row, Building 4
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 shrink-0 rounded-full bg-green-50 text-[#22c55e] flex items-center justify-center shadow-sm">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-slate-600">
                support@devinnovative.com
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-10 w-10 shrink-0 rounded-full bg-cyan-50 text-[#0ea5e9] flex items-center justify-center shadow-sm">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-sm font-bold text-[#08112a]">
                +923070761555
              </div>
            </div>
          </div>
          
          {/* Decorative Plant Image placement matching the base layout split */}
          <div className="relative w-24 h-24 pt-4 hidden lg:block">
            <Image src={imgPlant} alt="Contact details flora visual decoration asset" className="object-contain" />
          </div>
        </div>

        {/* ======================================================================
            RIGHT COLUMN: REUSED CONTACT FORM CARD COMPONENT
            ====================================================================== */}
        <div className="lg:col-span-7 w-full flex flex-col sm:flex-row gap-6 items-end relative">
          
          {/* Desktop Responsive Split Implementation */}
          <div className="hidden lg:block flex-1 w-full">
            <ConditionalReveal direction="right" duration={1.0} delay={0.2} offset={40} animationType="from">
              <div className="w-full mx-auto max-w-xl lg:max-w-none text-left">
                <ContactFormCard
                  badgeText="Get in Touch"
                  title="Fill Out The Form & We Will Get To You !"
                  showLiveIndicator={true}
                />
              </div>
            </ConditionalReveal>
          </div>

          {/* Mobile Safe Instant Hardware Rendering Fallback */}
          <div className="block lg:hidden w-full mx-auto max-w-xl text-left">
            <ContactFormCard
              badgeText="Get in Touch"
              title="Fill Out The Form & We Will Get To You !"
              showLiveIndicator={true}
            />
          </div>

        </div>

      </div>
    </section>
  );
}