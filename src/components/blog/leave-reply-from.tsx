"use client"; // <--- ADD THIS LINE AT THE VERY TOP

import React from "react";
import { Send } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

export function LeaveReplyForm() {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted securely on the client!");
  };

  return (
    <section className="w-full bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-100 select-none">
      <div className="mx-auto max-w-205 bg-white rounded-3xl border border-neutral-200/50 p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
        
        {/* Form Header */}
        <div className="text-center space-y-2 mb-10">
          <RevealAnimation direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
              Leave A Reply
            </h2>
          </RevealAnimation>
          <RevealAnimation direction="down" duration={0.8} delay={0.05} offset={10} animationType="from">
            <p className="text-sm text-neutral-400">
              Your email address will not be published. Required fields are marked <span className="text-rose-500 font-bold">*</span>
            </p>
          </RevealAnimation>
        </div>

        {/* Form Body */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Comment Input */}
          <RevealAnimation direction="up" duration={0.9} delay={0.1} offset={20} animationType="from">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="comment" className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
                Your Comment <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="comment"
                rows={6}
                required
                placeholder="Share your thoughts or feedback about this article..."
                className="w-full rounded-2xl border border-neutral-200 bg-[#fdfdfe] px-4 py-3.5 text-base text-neutral-800 placeholder-neutral-300 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 resize-y min-h-[120px]"
              />
            </div>
          </RevealAnimation>

          {/* Grid Fields */}
          <div className="grid gap-6 md:grid-cols-3">
            <RevealAnimation direction="up" duration={0.9} delay={0.15} offset={20} animationType="from">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fdfdfe] px-4 py-3.5 text-base text-neutral-800 placeholder-neutral-300 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" duration={0.9} delay={0.2} offset={20} animationType="from">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="johndoe@example.com"
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fdfdfe] px-4 py-3.5 text-base text-neutral-800 placeholder-neutral-300 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </RevealAnimation>

            <RevealAnimation direction="up" duration={0.9} delay={0.25} offset={20} animationType="from">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="website" className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-1">
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  placeholder="https://example.com"
                  className="w-full rounded-2xl border border-neutral-200 bg-[#fdfdfe] px-4 py-3.5 text-base text-neutral-800 placeholder-neutral-300 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                />
              </div>
            </RevealAnimation>
          </div>

          {/* Cookie Save Checkbox */}
          <RevealAnimation direction="up" duration={0.9} delay={0.3} offset={15} animationType="from">
            <label className="flex items-start gap-3 group cursor-pointer pt-2">
              <div className="relative flex items-center h-5 mt-0.5">
                <input type="checkbox" defaultChecked className="peer sr-only" />
                <div className="h-4.5 w-4.5 rounded-md border border-neutral-300 bg-white transition-all duration-300 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 flex items-center justify-center" />
                <svg
                  className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[3px] top-[4px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-neutral-400 group-hover:text-neutral-500 transition-colors selection:bg-transparent">
                Save my name, email, and website in this browser for the next time I comment.
              </span>
            </label>
          </RevealAnimation>

          {/* Submit Button */}
          <RevealAnimation direction="up" duration={1.0} delay={0.35} offset={15} animationType="from">
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-[15px] shadow-[0_8px_24px_rgba(255,75,43,0.25)] hover:shadow-[0_12px_32px_rgba(255,75,43,0.35)] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer"
                style={{ background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)" }}
              >
                <span>Post Comment</span>
                <Send className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </RevealAnimation>

        </form>
      </div>
    </section>
  );
}