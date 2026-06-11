"use client";

import React, { useEffect, useState, useActionState, useRef, useMemo } from "react";
import RevealAnimation from "../animation/RevealAnimation"; // Verify your folder path configuration matches
import { subscribeToNewsletter } from "../../app/action/newsletter"; // Verify your file path matches

export function SubscribeNewsletter() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hooking up Next.js Server Action States
  const initialState = { success: false, message: "" };
  const [state, formAction, isPending] = useActionState(subscribeToNewsletter, initialState);

  // Clear fields natively if the server completes successfully
  useEffect(() => {
    if (state.success && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state.success]);

  // Isolate the animation configurations so they don't re-compute during form submission re-renders
  const revealConfig = useMemo(() => {
    return {
      isLarge: isLargeScreen,
    };
  }, [isLargeScreen]);

  // Helper component to conditionally wrap children with RevealAnimation safely
  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!revealConfig.isLarge) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden select-none">
      
      {/* --- 1. MODERN AMBIENT BACKDROP GLOWS & FLOATING ACCENTS --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/5 via-orange-500/5 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Design Geometric Rings with entry physics + organic loop animations */}
      <div className="absolute top-12 left-[15%] md:left-[22%] z-10 text-xl font-bold select-none pointer-events-none transform-gpu">
        <ConditionalReveal key="ring-left" direction="up" duration={1.2} delay={0.4} offset={40} animationType="from">
          <div style={{ animation: "accentFloatLeft 7s ease-in-out infinite" }}>
            <span className="text-pink-500 font-black">〇</span>
            <span className="text-cyan-400 text-xs ml-[-6px] absolute top-[-4px]">●</span>
          </div>
        </ConditionalReveal>
      </div>

      <div className="absolute top-16 right-[15%] md:right-[22%] z-10 text-xl font-bold select-none pointer-events-none transform-gpu">
        <ConditionalReveal key="ring-right" direction="up" duration={1.2} delay={0.5} offset={40} animationType="from">
          <div style={{ animation: "accentFloatRight 6s ease-in-out infinite" }}>
            <span className="text-pink-500 font-black">〇</span>
            <span className="text-indigo-600 text-xs ml-[-4px] absolute bottom-[-4px]">●</span>
          </div>
        </ConditionalReveal>
      </div>


      {/* --- 2. MAIN NEWSLETTER CARD AND CONTENT AREA --- */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
        
        {/* Copy text branding stack with reveal sequence */}
        <div className="space-y-3 max-w-xl mx-auto">
          <ConditionalReveal key="title-heading" direction="down" duration={1.0} delay={0.0} offset={25} animationType="from">
            <h2 className="text-4xl font-bold sm:text-5xl tracking-tight text-[#08112a] leading-tight">
              Subscribe To Our <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3636] via-[#ff5b26] to-[#ff7e40]">
                Newsletter
              </span>
            </h2>
          </ConditionalReveal>
          
          <ConditionalReveal key="title-desc" direction="down" duration={1.1} delay={0.15} offset={20} animationType="from">
            <p className="text-[15px] leading-7 text-slate-400 font-normal">
              Sign up to stay updated with our latest news and promotions
            </p>
          </ConditionalReveal>
        </div>

        {/* --- 3. HIGH-END DRIBBBLE-STYLE INTEGRATED FORM FIELD --- */}
        <div className="max-w-xl mx-auto w-full">
          {/* CRITICAL FIX: Removed ConditionalReveal wrapper from around the form.
            This stops the input bar from flashing or sliding down again during database calls.
          */}
          <form 
            action={formAction}
            className="w-full transition-all duration-300 focus-within:scale-[1.01] space-y-3"
          >
            <div className="relative flex items-center p-2 rounded-full bg-slate-50 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.02)] focus-within:border-orange-500/40 focus-within:bg-white focus-within:shadow-[0_20px_40px_rgba(255,91,38,0.06)] transition-all">
              
              <input
                ref={inputRef}
                type="email"
                name="email"
                placeholder="Your Mail Address"
                required
                disabled={isPending}
                className="w-full bg-transparent pl-6 pr-3 py-3.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-0 disabled:opacity-50"
              />
              
              <button
                type="submit"
                disabled={isPending}
                className="shrink-0 inline-flex items-center justify-center font-bold text-white rounded-full bg-gradient-to-r from-[#ff3333] to-[#ff733b] px-8 py-3.5 text-sm shadow-[0_6px_20px_rgba(255,51,51,0.25)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_10px_25px_rgba(255,51,51,0.35)] active:scale-98 disabled:opacity-50"
              >
                {isPending ? "Subscribing..." : "Subscribe"}
              </button>

            </div>

            {/* Server Action Feedback Message Nodes */}
            {state.message && (
              <div className={`text-xs font-bold pt-1 pl-4 text-left ${state.success ? "text-emerald-600" : "text-rose-600"}`}>
                {state.message}
              </div>
            )}
          </form>
        </div>

      </div>

      {/* --- FLOATING DECORATIVE ACCENTS KEYFRAMES SYSTEM --- */}
      <style jsx global>{`
        @keyframes accentFloatLeft {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(20deg); }
        }
        @keyframes accentFloatRight {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-15deg); }
        }
      `}</style>
    </section>
  );
}