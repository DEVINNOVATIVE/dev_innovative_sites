

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, AlertCircle, User, Calendar, Folder } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";
import { blogPosts } from "@/utils/blogData"; 
import { BlogDetailSkeleton } from "./blog-detail-skeleton"; // Importing your crisp new loading skeleton

interface BlogDetailProps {
  slug: string;
}

export default function BlogDetail({ slug }: BlogDetailProps) {
  const [isLoading, setIsLoading] = useState(true);
  const post = blogPosts[slug];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750); // Simulated delay matching server-side loading configurations
    return () => clearTimeout(timer);
  }, [slug]);

  // 1. Render Independent Skeleton Shell during loading states
  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  // 2. 404 Guard Route Location Check
  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4 bg-white animate-fade-in">
        <AlertCircle className="h-12 w-12 text-orange-500 animate-pulse" />
        <h2 className="text-xl font-bold text-[#08112a]">Article Not Found</h2>
        <p className="text-sm text-slate-400 max-w-sm">
          The requested article details could not be found or has been moved to a new route location index.
        </p>
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline gap-1 pt-2"
        >
          ← Return to Blog Feed
        </Link>
      </div>
    );
  }

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
  // 3. Main Data Mount Paint
  return (
    <section className="relative bg-white text-slate-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none animate-fade-in">
      <div className="mx-auto max-w-[1140px] space-y-8 sm:space-y-12">
        
        {/* ================= 1. BANNER IMAGE ZONE ================= */}
        <div className="w-full">
          <ConditionalReveal direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
            <div className="relative w-full min-h-[220px] sm:min-h-[360px] md:min-h-[420px] md:aspect-[2.45/1] rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-sm block">
              <Image
                src={post.bannerImage}
                alt={post.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1140px"
                className="object-cover"
                priority
              />
            </div>
          </ConditionalReveal>
        </div>

        {/* ================= 2. TITLE AND METADATA CARD HEADER ================= */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 pt-2">
          <ConditionalReveal direction="down" duration={1.0} delay={0.1} offset={20} animationType="from">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#08112a] max-w-3xl mx-auto leading-tight px-1">
              {post.title}
            </h1>
          </ConditionalReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-3xl mx-auto border-t border-b border-slate-100 py-6 md:py-8 text-[12px] uppercase tracking-widest text-slate-400">
            <div className="flex flex-col items-center justify-center space-y-1.5 pb-4 md:pb-0 border-b border-slate-100/60 md:border-b-0">
              <span className="text-xs text-slate-400 font-semibold tracking-normal normal-case inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-slate-300" /> Published By:
              </span>
              <span className="text-sm text-[#08112a] lowercase font-bold tracking-normal">
                {post.publishedBy}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1.5 pb-4 md:pb-0 border-b border-slate-100/60 md:border-b-0 md:border-l md:border-r md:border-slate-100">
              <span className="text-xs text-slate-400 font-semibold tracking-normal normal-case inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-slate-300" /> Published On:
              </span>
              <span className="text-sm text-slate-600 font-bold tracking-normal">
                {post.publishedOn}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center space-y-1.5">
              <span className="text-xs text-slate-400 font-semibold tracking-normal normal-case inline-flex items-center gap-1.5">
                <Folder className="h-4 w-4 text-slate-300" /> Published In:
              </span>
              <span className="text-sm text-slate-600 lowercase font-bold tracking-normal leading-relaxed text-center px-2 block max-w-[240px] line-clamp-2">
                {post.categories.join(", ")}
              </span>
            </div>
          </div>
        </div>

        {/* ================= 3. DYNAMIC BODY CONTENT PARSER ================= */}
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 pt-2 text-left">
          <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={25} animationType="from">
            <p className="text-[15px] sm:text-base leading-7 sm:leading-8 text-slate-500 font-normal">
              {post.introText}
            </p>
          </ConditionalReveal>

          <div className="space-y-6 sm:space-y-8">
            {post.points.map((point, idx) => (
              <ConditionalReveal 
                key={idx} 
                direction="up" 
                duration={1.0} 
                delay={0.2 + idx * 0.05} 
                offset={20} 
                animationType="from"
              >
                <div className="text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-neutral-600 font-normal">
                  <p>
                    <span className="text-[#08112a] font-bold block sm:inline mb-1 sm:mb-0 text-base sm:text-[17px]">
                      {idx + 1}. {point.title}:
                    </span>{" "}
                    {point.description}
                  </p>
                </div>
              </ConditionalReveal>
            ))}
          </div>

          <ConditionalReveal direction="up" duration={1.0} delay={0.35} offset={25} animationType="from">
            <p className="text-[15px] sm:text-base leading-7 sm:leading-8 text-slate-500 font-normal pt-6 border-t border-slate-100">
              {post.conclusionText}
            </p>
          </ConditionalReveal>
        </div>

        {/* ================= 4. POST RETRIEVAL NAV DOCK ================= */}
        <div className="pt-12 max-w-4xl mx-auto border-t border-slate-100 grid gap-8 sm:gap-6 sm:grid-cols-2 items-start text-sm">
          
          {/* Older Post Link */}
          {post.navigation.olderPost ? (
            <div className="w-full">
              <div className="hidden lg:block">
                <ConditionalReveal direction="left" duration={1.0} delay={0.4} offset={20} animationType="from">
                  <Link 
                    href={`/blog/${post.navigation.olderPost.slug}`}
                    className="group flex gap-4 items-start text-left p-3 rounded-2xl hover:bg-slate-50/50 border border-transparent hover:border-slate-100 transition-all block w-full"
                  >
                    <div className="h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center shrink-0 mt-1 group-hover:border-slate-400 group-hover:bg-slate-50 transition-all">
                      <ArrowLeft className="h-4 w-4 text-slate-600 transform group-hover:-translate-x-0.5 transition-transform" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Older Post</span>
                      <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-700 leading-snug group-hover:text-blue-600 transition-colors">{post.navigation.olderPost.title}</h4>
                    </div>
                  </Link>
                </ConditionalReveal>
              </div>

              <div className="block lg:hidden">
                <Link 
                  href={`/blog/${post.navigation.olderPost.slug}`}
                  className="group flex gap-4 items-start text-left p-3 rounded-2xl bg-slate-50/50 border border-slate-100 block w-full active:scale-[0.98] transition-all"
                >
                  <div className="h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center shrink-0 mt-1">
                    <ArrowLeft className="h-4 w-4 text-slate-600" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Older Post</span>
                    <h4 className="text-[14px] font-bold text-slate-700 leading-snug">{post.navigation.olderPost.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ) : <div className="hidden sm:block" />}

          {/* Newer Post Link */}
          {post.navigation.newerPost ? (
            <div className="w-full">
              <div className="hidden lg:block">
                <ConditionalReveal direction="right" duration={1.0} delay={0.4} offset={20} animationType="from">
                  <Link 
                    href={`/blog/${post.navigation.newerPost.slug}`}
                    className="group flex gap-4 items-start text-left sm:text-right justify-start sm:justify-end p-3 rounded-2xl hover:bg-slate-50/50 border border-transparent hover:border-slate-100 transition-all block w-full"
                  >
                    <div className="space-y-1 order-2 sm:order-none flex-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Newer Post</span>
                      <h4 className="text-[14px] sm:text-[15px] font-bold text-slate-700 leading-snug group-hover:text-blue-600 transition-colors text-left sm:text-right">{post.navigation.newerPost.title}</h4>
                    </div>
                    <div className="h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center shrink-0 mt-1 order-1 sm:order-none group-hover:border-slate-400 group-hover:bg-slate-50 transition-all">
                      <ArrowRight className="h-4 w-4 text-slate-600 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </ConditionalReveal>
              </div>

              <div className="block lg:hidden">
                <Link 
                  href={`/blog/${post.navigation.newerPost.slug}`}
                  className="group flex gap-4 items-start text-left justify-between p-3 rounded-2xl bg-slate-50/50 border border-slate-100 block w-full active:scale-[0.98] transition-all"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Newer Post</span>
                    <h4 className="text-[14px] font-bold text-slate-700 leading-snug">{post.navigation.newerPost.title}</h4>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center shrink-0 mt-1">
                    <ArrowRight className="h-4 w-4 text-slate-600" />
                  </div>
                </Link>
              </div>
            </div>
          ) : <div className="hidden sm:block" />}

        </div>

      </div>
      
      <style jsx global>{`
        .animate-fade-in {
          animation: mdBlogDetailFadeIn 0.4s ease-out forwards;
        }
        @keyframes mdBlogDetailFadeIn {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}