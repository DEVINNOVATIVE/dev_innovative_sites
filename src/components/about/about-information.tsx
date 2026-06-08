"use client";

import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// Image assets from your local project folder as specified
import innovativeApproachIcon from "@/assets/about/innovative_approch.png"; 
import qualityAssuranceIcon from "@/assets/about/quality_assurance.png";
import innovativeSolutionsIcon from "@/assets/about/i_solution.png";

const infoCards = [
  {
    title: "Innovative Approach",
    description:
      "We leverage our expertise to provide innovative solutions that help businesses transform their operations and drive growth. We offer competitive pricing for our services, without compromising on quality.",
    icon: innovativeApproachIcon,
  },
  {
    title: "Quality Assurance",
    description:
      "We take great pride in delivering high-quality solutions that meet our clients' expectations. Our team rigorously tests every solution to ensure that it meets our standards. We value our clients and prioritize building strong relationships with them.",
    icon: qualityAssuranceIcon,
  },
  {
    title: "Innovative Solutions",
    description:
      "We are committed to delivering high-quality, customized solutions that meet the unique needs and goals of each client. Our team of experts is dedicated to helping businesses succeed achieve their full potential.",
    icon: innovativeSolutionsIcon,
  },
];

export function AboutInformation() {
  return (
    <section className="mx-auto w-full px-4 py-16 sm:px-12 lg:px-18 bg-[#f8fafc]">
      <div className="mx-auto max-w-[1240px] grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-6">
        
        {infoCards.map((card, index) => {
          // Dynamic directional assembly cascade for an engaging frame composition
          let cardDirection: 'left' | 'up' | 'right' = 'up';
          if (index === 0) cardDirection = 'left';
          if (index === 2) cardDirection = 'right';

          return (
            <RevealAnimation 
              key={card.title} 
              direction={cardDirection} 
              duration={1.2}
              delay={index * 0.15} 
              offset={50} 
              animationType="from"
            >
              {/* --- DYNAMIC INTERACTIVE CARD WRAPPER ---
                  All cards start as uniform white blocks and switch perfectly to deep blue on hover 
              */}
              <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white p-8 md:p-10 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-slate-900 transition-all duration-300 transform-gpu hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)] cursor-pointer hover:bg-[#1145ca] hover:text-white">
                
                <div className="flex flex-col gap-5 items-start">
                  
                  {/* Icon Frame Block with seamless brightness inversion on hover */}
                  <div className="relative h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <Image 
                      src={card.icon} 
                      alt={card.title} 
                      fill 
                      className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  {/* Text Copy blocks layout */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-tight text-[#08112a] transition-colors duration-200 group-hover:text-white">
                      {card.title}
                    </h3>
                    
                    <p className="text-[14px] leading-6 font-normal text-slate-500 transition-colors duration-200 group-hover:text-white/90">
                      {card.description}
                    </p>
                  </div>

                </div>

              </article>
            </RevealAnimation>
          );
        })}

      </div>
    </section>
  );
}