"use client";

import React from "react";

export function BlogDetailSkeleton() {
  return (
    <section className="relative bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 select-none overflow-hidden">
      <div className="mx-auto max-w-[1140px] space-y-12">
        
        {/* Banner Shimmer Viewport */}
        <div className="w-full relative min-h-[220px] sm:min-h-[360px] md:min-h-[420px] md:aspect-[2.45/1] rounded-2xl bg-slate-100 animate-pulse" />

        {/* Title Block Lines */}
        <div className="max-w-4xl mx-auto space-y-4 flex flex-col items-center">
          <div className="h-8 bg-slate-200/80 rounded-xl w-[85%] sm:w-[65%] animate-pulse" />
          <div className="h-8 bg-slate-200/80 rounded-xl w-[55%] sm:w-[40%] animate-pulse" />
        </div>

        {/* Metadata Metrics Row Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 border-t border-b border-slate-100 py-6 md:py-8">
          <div className="flex flex-col items-center space-y-2.5">
            <div className="h-3.5 bg-slate-100 rounded-md w-28 animate-pulse" />
            <div className="h-4 bg-slate-200/60 rounded-md w-20 animate-pulse" />
          </div>
          <div className="flex flex-col items-center space-y-2.5 md:border-l md:border-r md:border-slate-100">
            <div className="h-3.5 bg-slate-100 rounded-md w-28 animate-pulse" />
            <div className="h-4 bg-slate-200/60 rounded-md w-24 animate-pulse" />
          </div>
          <div className="flex flex-col items-center space-y-2.5">
            <div className="h-3.5 bg-slate-100 rounded-md w-28 animate-pulse" />
            <div className="h-4 bg-slate-200/60 rounded-md w-32 animate-pulse" />
          </div>
        </div>

        {/* Body Description Content Stacks */}
        <div className="max-w-3xl mx-auto space-y-6 pt-4">
          <div className="space-y-2">
            <div className="h-4 bg-slate-100 rounded-md w-full animate-pulse" />
            <div className="h-4 bg-slate-100 rounded-md w-full animate-pulse" />
            <div className="h-4 bg-slate-100 rounded-md w-[92%] animate-pulse" />
          </div>
          <div className="space-y-6 pt-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-slate-100 rounded-md w-[30%] animate-pulse mb-1.5" />
                <div className="h-4 bg-slate-100 rounded-md w-full animate-pulse" />
                <div className="h-4 bg-slate-100 rounded-md w-[85%] animate-pulse" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}