"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- CORE SYSTEM ASSETS ---
import connectBg from "@/assets/connect_bg.webp";
import user1 from "@/assets/user1.png"; // Anie Gomez (Active Center Variant 1)
import user2 from "@/assets/user2.png"; // Julia Miller (Active Center Variant 2)
import user3 from "@/assets/user3.png"; // Anie Gomez Alternative (Variant 3)
import user4 from "@/assets/user4.png";
import user5 from "@/assets/user5.png";
import user6 from "@/assets/user6.png";

const testimonialsDataset = [
  {
    name: "Anie Gomez",
    role: "Customer",
    avatar: user1,
    quote: '"Really appreciate Russel\'s help to get my website up again - he was patient as I found all the login information and it was a quick turn around !"'
  },
  {
    name: "Julia Miller",
    role: "Customer",
    avatar: user2,
    quote: '"Landon has been amazing. I came to him with a problem with coding, he dug right in, and found multiple threats with malware. Not only did he fix my problem quickly, he provided solutions to prevent it from happening again in the future. He is currently working on that ticket right now, but I couldn\'t be happier with his service"'
  },
  {
    name: "Anie Gomez",
    role: "Customer",
    avatar: user3,
    quote: '"Every time I have an issue with either of my websites I have received such quick resolutions from Landen at WP Fixit. It makes such a difference to know the support is there when I need it! The hosting service as a whole is excellent and I would recommend it 100% Thank you so much"'
  }
];

export function WorldTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonialsDataset[activeIndex];
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
    <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 text-slate-900 min-h-[680px] flex items-center select-none">

      {/* ================= 1. WORLD CONNECT MAP CANVAS LAYER ================= */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src={connectBg}
          alt="World connection map lattice background structure"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ================= 2. SPATIAL PERIPHERAL BACKGROUND AVATARS MATRIX ================= */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-[1400px] mx-auto">

        {/* Left Peripheral Clusters */}
        <div className="absolute top-[26%] left-[15%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_7s_ease-in-out_infinite] opacity-75">
          <Image src={user4} alt="Network node user 4" fill className="object-cover" />
        </div>
        <div className="absolute top-[52%] left-[8%] w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_9s_ease-in-out_infinite_reverse] opacity-65">
          <Image src={user5} alt="Network node user 5" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[16%] left-[14%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_8s_ease-in-out_infinite] opacity-75">
          <Image src={user6} alt="Network node user 6" fill className="object-cover" />
        </div>

        {/* Right Peripheral Clusters */}
        <div className="absolute top-[28%] right-[16%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_8.5s_ease-in-out_infinite_reverse] opacity-75">
          <Image src={user4} alt="Network node user alpha" fill className="object-cover" />
        </div>
        <div className="absolute top-[50%] right-[9%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_6.5s_ease-in-out_infinite] opacity-65">
          <Image src={user5} alt="Network node user beta" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[18%] right-[15%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-[float_10s_ease-in-out_infinite_reverse] opacity-75">
          <Image src={user6} alt="Network node user gamma" fill className="object-cover" />
        </div>

        {/* ================= GEOMETRIC DECORATIVE MICRONODES (image_0ee1a1.jpg) ================= */}
        <span className="absolute top-[32%] left-[22%] w-2 h-2 rounded-full bg-rose-500 opacity-60 animate-pulse duration-[3000ms]" />
        <span className="absolute top-[24%] right-[25%] w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 animate-ping duration-[4000ms]" />

        {/* Floating Pink Micro-donut Ring */}
        <div className="absolute top-[42%] right-[28%] w-5 h-5 rounded-full border-[3.5px] border-rose-400/80 opacity-75 animate-bounce duration-[6000ms] flex items-center justify-center" />

      </div>

      {/* ================= 3. CENTRAL CAROUSEL INTERACTION ENGINE ================= */}
      <div className="relative z-20 mx-auto max-w-[1140px] w-full text-center space-y-12">

        {/* Static Header Group block */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className=" tracking-wider text-lg font-bold text-[#104cba] uppercase block">
              Client Testimonials
            </span>
          </ConditionalReveal>

          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={25} animationType="from">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
              What People Say About Us
            </h2>
          </ConditionalReveal>

          <ConditionalReveal direction="up" duration={1.0} delay={0.1} offset={20} animationType="from">
            <p className="text-sm sm:text-base leading-6 text-neutral-400 max-w-2xl mx-auto font-normal">
              We believe that the feedback from our clients and customers is invaluable. That&apos;s why we&apos;re proud to share what people have to say about our services.
            </p>
          </ConditionalReveal>
        </div>

        {/* Dynamic Display Target Sandbox Area */}
        <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">

          {/* Animated Main Image Core Framework Node */}
          <div className="relative h-32 w-32 rounded-full border-4 border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex shrink-0 group transition-all duration-500">
            <Image
              src={current.avatar}
              alt={`${current.name} dynamic validation avatar review profile`}
              fill
              className="object-cover rounded-full"
              priority
            />
            {/* 
              ORANGE QUOTE TOKEN LAYER:
              Positions perfectly at the bottom right intersection boundary point 
              to seamlessly match the requested design theme frame.
            */}
            <div
              className="absolute bottom-[-2px] right-[-2px] h-9 w-9 rounded-full flex items-center justify-center text-white shadow-md transform scale-100 group-hover:scale-105 transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, #ff4b2b 0%, #ff6a00 100%)" }}
            >
              <Quote className="h-3.5 w-3.5 fill-white stroke-none" />
            </div>
          </div>

          {/* Narrative Content Quote Area - Increased font viewability parameters applied */}
          <div className="space-y-4 px-4 min-h-[100px] flex flex-col justify-center">
            <p className="text-[15.5px] sm:text-[17px] leading-relaxed text-neutral-400 font-normal italic max-w-2xl mx-auto transition-all duration-500">
              {current.quote}
            </p>
          </div>

          {/* User Signatures Details Header */}
          <div className="space-y-1">
            <h4 className="text-[17px] font-bold text-[#08112a] tracking-tight transition-all">
              {current.name}
            </h4>
            <span className="text-sm font-bold uppercase tracking-widest text-[#104cba] block">
              {current.role}
            </span>
          </div>

          {/* ================= 4. CAROUSEL DOT SLIDER NAV NAVIGATOR INDICATORS ================= */}
          <div className="flex items-center justify-center gap-2.5 pt-4">
            {testimonialsDataset.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Navigate testimonial slide slot track context index position node ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${activeIndex === dotIdx
                    ? "w-6 bg-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.4)]"
                    : "w-2.5 bg-neutral-200 hover:bg-neutral-300"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* --- FLOATING MATRIX KEYFRAME ENGINES --- */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-12px) translateX(4px); }
        }
      `}</style>
    </section>
  );
}