import React from "react";
import BlogDetail from "@/components/blog/blog-detail";
import { LeaveReplyForm } from "@/components/blog/leave-reply-from";
import { Metadata } from "next";

interface BlogShowProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogShowProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Format slug for display (replace hyphens with spaces, capitalize)
  const formattedTitle = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${formattedTitle} - DevInnovative Blog`,
    description: `Read our latest article: ${formattedTitle}. Discover insights on web development, hosting solutions, and digital marketing strategies.`,
    keywords: ["blog", "article", "web development", "hosting", "marketing", slug],
    openGraph: {
      title: `${formattedTitle} - DevInnovative Blog`,
      description: `Read our latest article: ${formattedTitle}. Discover insights on web development, hosting solutions, and digital marketing strategies.`,
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} - DevInnovative Blog`,
      description: `Read our latest article: ${formattedTitle}. Discover insights on web development, hosting solutions, and digital marketing strategies.`,
    },
  };
}

export default async function BlogShow({ params }: BlogShowProps) {
  const { slug } = await params;

  return (
    <main className="bg-background text-foreground">
      <BlogDetail slug={slug} />
       <LeaveReplyForm/>
    </main>
  );
}