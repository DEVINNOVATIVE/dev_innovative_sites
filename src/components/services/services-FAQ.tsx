"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceFaqs = [
  {
    q: "How are your software engineering sprint teams structured?",
    a: "We form dedicated product pod frameworks. Each active group contains a specialized solution architect, full-stack developers mapping your target tech layers, an automated QA validation tester, and a technical Scrum lead to communicate statuses transparently over standard Slack networks."
  },
  {
    q: "Who owns the software code repositories at delivery close?",
    a: "You retain 100% full intellectual property ownership. Upon milestone cycle verification sign-offs, all underlying code configurations, database models, infrastructure maps, and pipeline scripts are securely transferred over to your corporate Github or Gitlab organizational vaults under strict NDA protocols."
  },
  {
    q: "Do you integrate seamlessly into our existing internal platforms?",
    a: "Absolutely. Our engineering pipelines are crafted around loosely coupled API microservices. We build robust integration layers that hook smoothly into standard ERP frameworks, enterprise CRM nodes, or legacy data warehouses without risking production downtime."
  },
  {
    q: "What does your post-deployment support structure look like?",
    a: "Every product launch includes 30 days of complimentary hyper-care telemetry monitoring. We continuously track performance metrics, guard against third-party dependency updates, and verify cloud scalability to ensure your platform maintains peak infrastructure uptime over time."
  }
];

export function ServicesFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-white text-slate-900  pt-8 pb-24 px-4 sm:px-8 lg:px-12 select-none border-t border-slate-100">
      <div className="mx-auto max-w-[1240px] space-y-16">
        
        {/* ================= RE-VOCABULIZED FAQ HEADER ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
        
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a]">
            Frequently Answered Engagements
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Clear, transparent metrics covering code transition delivery protocols, repository security controls, and scrum integration guidelines.
          </p>
        </div>

        {/* ================= MINIMALIST UNDERLINE ACCORDION STREAM ================= */}
        <div className="w-full border-t border-slate-200/60 mx-auto">
          {serviceFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="w-full border-b border-slate-200/60 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left font-bold text-[#08112a] text-[15px] sm:text-[17px] cursor-pointer transition-colors group gap-4"
                >
                  <span className={`tracking-tight leading-snug transition-colors duration-200 ${isOpen ? "text-[#104cba]" : "group-hover:text-slate-700"}`}>
                    {item.q}
                  </span>
                  <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-blue-50 text-[#104cba] rotate-180" : "text-slate-400 group-hover:text-slate-600"}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                
                {/* Expandable Panel Block */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden flex ${
                    isOpen ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Left Brand Aesthetic Accent Line Focus */}
                  <div className="w-1 bg-[#104cba] rounded-full shrink-0 mr-4 my-1" />
                  
                  <div className="text-[14px] sm:text-[14.5px] leading-relaxed text-slate-500 font-medium text-left max-w-3xl">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}