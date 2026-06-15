"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, X, ArrowRight } from "lucide-react";

export function CookieConsent() {
  const [isRendered, setIsPaidRendered] = useState(false);
  const [isAnimateIn, setIsAnimateIn] = useState(false);

  useEffect(() => {
    const consentStatus = localStorage.getItem("devinn_cookie_consent");
    
    if (!consentStatus) {
      setIsPaidRendered(true);
      // Wait a micro-second for the DOM element to mount, then trigger native Tailwind slide-up
      const timer = setTimeout(() => setIsAnimateIn(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status: "accepted" | "declined") => {
    localStorage.setItem("devinn_cookie_consent", status);
    setIsAnimateIn(false);
    // Wait for slide-down transition to complete before unmounting from DOM completely
    setTimeout(() => setIsPaidRendered(false), 500);

    window.dispatchEvent(new Event("cookieConsentUpdated"));
  };

  if (!isRendered) return null;

  return (
    <div 
      /* Uses standard built-in duration-500, ease-out, opacity, and translate values */
      className={`fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-[420px] bg-[#0c194a] text-white rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(3,6,22,0.4)] border border-blue-500/10 z-[9999] transition-all duration-500 ease-out ${
        isAnimateIn 
          ? "opacity-100 translate-y-0 text-white" 
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5 text-blue-400">
            <div className="h-8 w-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <ShieldCheck size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Cookie Privacy</span>
          </div>
          <button 
            onClick={() => handleConsent("declined")}
            className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="space-y-2 text-left">
          <h4 className="text-base font-bold text-white tracking-tight">We value your data privacy</h4>
          <p className="text-[13px] leading-relaxed text-slate-300/90 font-medium">
            We use cookies to analyze site traffic, optimize performance parameters, and personalize marketing funnels. Accepting helps us build a more fluid operational ecosystem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
          <button
            onClick={() => handleConsent("accepted")}
            className="w-full sm:flex-1 group inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white bg-[#ff6036] uppercase rounded-xl py-3 shadow-md hover:bg-[#e0532b] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
          >
            <span>Accept All</span>
            <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => handleConsent("declined")}
            className="w-full sm:w-auto px-5 py-3 text-xs font-bold tracking-wider text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all duration-200 cursor-pointer text-center uppercase"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}