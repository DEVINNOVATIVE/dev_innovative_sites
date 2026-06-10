"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CreditCard, Layers, ShoppingBag } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

const strategyCards = [
  {
    title: "Payment Gateway",
    description: "We can help you choose the best payment option blocks for your e-commerce website, including credit cards, PayPal, and more.",
    href: "/services/ecommerce/payment",
    borderColor: "hover:border-pink-500/30",
    iconColor: "text-pink-500",
    circleAccent: "bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
    IconComponent: CreditCard,
  },
  {
    title: "Inventory Management",
    description: "We can help you monitor backend core products and stock levels, making it easy to manage your inventory and ensure that values don't run out of stock.",
    href: "/services/ecommerce/inventory",
    borderColor: "hover:border-purple-500/40",
    iconColor: "text-purple-500",
    circleAccent: "bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
    isFeatured: true, // Retains the highlighted structure from image_4383c2.png
    IconComponent: Layers,
  },
  {
    title: "Order Management",
    description: "We can help you track transaction flows and automate the process of order fulfillment, making it easy to keep track of orders and generate more custom customer loyalty.",
    href: "/services/ecommerce/orders",
    borderColor: "hover:border-emerald-500/30",
    iconColor: "text-emerald-500",
    circleAccent: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    IconComponent: ShoppingBag,
  },
];

export function EcommerceStrategies() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white text-slate-900 select-none">
      
      {/* ======================================================================
          HEADER BLOCK SECTION
          ====================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24">
        <div className="hidden lg:block space-y-3">
          <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
            <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba]  block">
              Our Innovative Strategies
            </span>
          </ConditionalReveal>
          <ConditionalReveal direction="up" duration={0.9} delay={0.16} offset={25} animationType="from">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08112a]">
              Discover Our Passion For Digital Innovation
            </h2>
          </ConditionalReveal>
        </div>

        <div className="block lg:hidden space-y-2 px-2">
          <span className="text-[11px] sm:text-lg font-bold tracking-wider text-[#104cba]  block">
            Our Innovative Strategies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a]">
            Discover Our Passion For Digital Innovation
          </h2>
        </div>
      </div>

      {/* ======================================================================
          STRATEGIES GRID WITH INCREASED ICON DIMENSIONS
          ====================================================================== */}
      <div className="grid gap-8 lg:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto items-stretch pt-4">
        {strategyCards.map((card, index) => {
          const Icon = card.IconComponent;
          return (
            <React.Fragment key={card.title}>
              
              {/* Desktop View Card System */}
              <div className="hidden lg:block h-full relative">
                <ConditionalReveal 
                  direction="up" 
                  duration={0.9} 
                  delay={0.15 + index * 0.12} 
                  offset={30} 
                  animationType="from"
                >
                  <div className={`group h-full bg-white rounded-3xl border p-8 pb-10 text-center flex flex-col items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    card.isFeatured 
                      ? "border-slate-200 shadow-[0_30px_70px_rgba(15,23,42,0.08)] lg:-translate-y-4 relative z-20" 
                      : "border-slate-100 shadow-[0_4px_25px_rgba(15,23,42,0.01)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.04)] hover:-translate-y-1 relative z-10"
                  } ${card.borderColor}`}>
                    
                    <div className="space-y-5 flex flex-col items-center w-full">
                      {/* Enriched & Enlarged Dynamic Icon Container */}
                      <div className={`h-20 w-20 rounded-2xl flex items-center justify-center border border-slate-100/70 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm group-hover:scale-110 group-hover:shadow-md ${card.circleAccent}`}>
                        <Icon className="h-9 w-9 stroke-[1.6] transition-transform duration-500 group-hover:rotate-[3deg]" />
                      </div>

                      <h3 className="text-lg font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                        {card.title}
                      </h3>

                      <p className="text-base leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">
                        {card.description}
                      </p>
                    </div>

                   

                  </div>
                </ConditionalReveal>
              </div>

              {/* Mobile View Card System */}
              <div className="block lg:hidden h-full pb-2">
                <div className={`bg-white rounded-2xl border p-6 text-center flex flex-col items-center justify-between transition-transform duration-200 active:scale-[0.98] ${
                  card.isFeatured ? "border-slate-200 shadow-md scale-[1.01]" : "border-slate-100 shadow-sm"
                }`}>
                  
                  <div className="space-y-4 flex flex-col items-center w-full">
                    <div className={`h-14 w-14 rounded-xl flex items-center justify-center border border-slate-100 ${card.circleAccent.split(" ")[0]} ${card.iconColor}`}>
                      <Icon className="h-7 w-7 stroke-[1.75]" />
                    </div>

                    <h3 className="text-base font-bold text-[#08112a] tracking-tight">
                      {card.title}
                    </h3>

                    <p className="text-base leading-relaxed text-slate-400 font-normal">
                      {card.description}
                    </p>
                  </div>

                

                </div>
              </div>

            </React.Fragment>
          );
        })}
      </div>

    </section>
  );
}