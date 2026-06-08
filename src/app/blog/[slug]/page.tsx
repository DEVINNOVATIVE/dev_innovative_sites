import React from "react";
import BlogDetail from "@/components/blog/blog-detail";
import { LeaveReplyForm } from "@/components/blog/leave-reply-from";

interface BlogShowProps {
  params: Promise<{ slug: string }>;
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