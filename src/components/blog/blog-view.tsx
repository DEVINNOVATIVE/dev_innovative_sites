"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";
import { blogPosts } from "@/utils/blogData";

export function BlogView() {
  const postsArray = Object.values(blogPosts);
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
    <section className="relative bg-[#fafafa] text-neutral-900 py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1140px] space-y-12">
        
        {/* ================= UNIFORM GRID LAYOUT (ALL AS STANDARD CARDS) ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {postsArray.map((post, index) => (
            <ConditionalReveal
              key={post.slug}
              direction="up"
              duration={1.0}
              delay={0.05 + (index % 3) * 0.08}
              offset={40}
              animationType="from"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col w-full bg-white rounded-3xl p-4 border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-neutral-300/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] block cursor-pointer"
              >
                
                {/* 1. Thumbnail Container Frame */}
                <div className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden bg-neutral-50 shadow-inner">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    priority={index < 3}
                  />
                  
                  {/* Floating Modern Category Pill */}
                  {post.categories?.[0] && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/80 backdrop-blur-md text-neutral-800 border border-white/20 shadow-sm">
                      {post.categories[0]}
                    </span>
                  )}

                  {/* Clean Slate Glass Hover Mask */}
                  <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="h-11 w-11 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                      <ArrowUpRight className="h-4 w-4 text-neutral-800 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* 2. Content Info Shell */}
                <div className="flex flex-col justify-between space-y-3.5 pt-4">
                  
                  <div className="space-y-2">
                    {/* Meta Context Header */}
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-wider uppercase text-neutral-400">
                      <span className="text-neutral-800 font-bold lowercase bg-neutral-100 px-2 py-0.5 rounded-md">
                        @{post.publishedBy}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-neutral-300" />
                        <span>{post.publishedOn}</span>
                      </div>
                    </div>

                    {/* Title Typography - Using Font-Bold As Requested */}
                    <h3 className="font-bold text-[16px] leading-snug tracking-tight text-neutral-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  {/* Explicit Interactive Call to Action Hook */}
                  <div className="flex items-center gap-1 text-[12px] font-bold text-neutral-800 pt-1 group-hover:text-blue-600 transition-colors duration-300">
                    <span>Read Article</span>
                    <ChevronRight className="h-3.5 w-3.5 transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                  </div>

                </div>

              </Link>
            </ConditionalReveal>
          ))}
        </div>

      </div>
    </section>
  );
}