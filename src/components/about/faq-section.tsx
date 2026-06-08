"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation"; // Verify path matching your folder tree structure

// Vector support graphic illustration asset matching your template layout mapping
import faqHeroImg from "@/assets/about/query.png"; 

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export function FAQSection() {
  // Controlled indexing framework state initializing item 1 open as requested in screenshots
  const [openId, setOpenId] = useState<string | null>("services");

  const faqs: FAQItem[] = [
    {
      id: "services",
      question: "What Services Do We Offer ?",
      answer: "We offer a wide range of web and IT solutions including web design and development, e-commerce, digital marketing, mobile app development, IT consulting, cloud computing, cybersecurity, software development, content management, and website maintenance and support. We have the expertise and experience to deliver solutions that meet your specific needs and help your business thrive.",
    },
    {
      id: "tenure",
      question: "How Long Has Our Company Been In Business?",
      answer: "We have been in business for 9 years. During this time, we have provided our clients with innovative web and IT solutions to help them achieve their business goals. Our team of experts is dedicated to delivering high-quality services that exceed our clients' expectations and contribute to their success in the digital realm. We are committed to continuing to grow and evolve as a company to meet the changing needs of our clients and the digital landscape.",
    },
    {
      id: "differentiation",
      question: "What Makes Us Different From Other Web & IT Solutions Providers?",
      answer: "We offer a unique and exceptional experience for web and IT solutions. We provide customized solutions, personalized attention, high-quality services, innovative solutions, and competitive pricing. Our team of experts is dedicated to ensuring that every project is completed to the highest standards and tailored to our clients' specific needs and goals.",
    },
    {
      id: "quality",
      question: "How Do We Ensure The Quality Of Its Services?",
      answer: "we ensure the quality of our services through our experienced team, thorough planning, rigorous testing, regular communication, and commitment to continuous improvement. Our goal is to deliver high-quality solutions that meet our clients' needs and exceed their expectations.",
    },
    {
      id: "maintenance",
      question: "Do We Offer Ongoing Support And Maintenance For Its Solutions",
      answer: "We offer ongoing support and maintenance for all of the solutions we provide. Our team of experts is dedicated to ensuring that our clients' solutions are functioning properly and meeting their needs over time. We offer various support and maintenance packages that are designed to fit our clients' specific needs and requirements.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* ================= LEFT COLUMN: DECORATIVE HERO ART ================= */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <RevealAnimation direction="left" duration={1.1} delay={0.1} offset={50} animationType="from">
              <div 
                className="relative w-full max-w-[500px] aspect-[1.15/1] transform-gpu"
                style={{ animation: "faqHeroFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={faqHeroImg}
                  alt="Customer support assistant operator answering queries vector art illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </RevealAnimation>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE ACCORDION GRID ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context Heading Group block titles */}
            <div className="space-y-3 mb-8">
              <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={20} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase block">
                  Any Query
                </span>
              </RevealAnimation>
              
              <RevealAnimation direction="down" duration={1.1} delay={0.15} offset={30} animationType="from">
                <h2 className="text-3xl font-bold tracking-tight text-[#08112a] sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </RevealAnimation>
            </div>

            {/* Accordion List Collection Container */}
            <div className="space-y-4">
              {faqs.map((item, index) => {
                const isOpen = openId === item.id;
                
                return (
                  <RevealAnimation
                    key={item.id}
                    direction="up"
                    duration={0.8}
                    delay={0.2 + index * 0.08}
                    offset={30}
                    animationType="from"
                  >
                    <div className="overflow-hidden rounded-md bg-white border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300">
                      
                      {/* Accordion Toggle Bar Controller */}
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 font-bold select-none border-b ${
                          isOpen 
                            ? "bg-gradient-to-r from-[#ff3838] to-[#ff7338] text-white border-transparent" 
                            : "bg-white font-bold text-[#08112a] border-slate-100/50 hover:bg-slate-50/50"
                        }`}
                      >
                        <span className="text-sm sm:text-base tracking-tight leading-tight">
                          {item.question}
                        </span>
                        
                        <ChevronDown 
                          className={`h-5 w-5 shrink-0 transition-transform duration-300 transform-gpu ${
                            isOpen ? "rotate-180 text-white" : "text-slate-400"
                          }`} 
                        />
                      </button>

                      {/* Content Panel Box container using native css slide heights mapping rules */}
                      <div 
                        className={`transition-all duration-300 ease-in-out grid ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="p-6 text-[14px] leading-7 text-slate-500 font-normal bg-white">
                            {item.answer}
                          </p>
                        </div>
                      </div>

                    </div>
                  </RevealAnimation>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* --- INLINE COMPONENT HOVER BACKGROUND TRANSLATIONS ACCENTS FLOATING KEYFRAMES --- */}
      <style jsx>{`
        @keyframes faqHeroFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}