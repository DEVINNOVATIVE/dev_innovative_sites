import { BlogView } from "@/components/blog/blog-view";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevInnovative Blog - Web Development, Hosting & Marketing Insights",
  description: "Stay updated with the latest insights on web development, hosting solutions, and digital marketing strategies from the DevInnovative team.",
  keywords: ["blog", "web development", "hosting", "marketing", "tutorials", "insights", "technology"],
  openGraph: {
    title: "DevInnovative Blog - Web Development, Hosting & Marketing Insights",
    description: "Stay updated with the latest insights on web development, hosting solutions, and digital marketing strategies from the DevInnovative team.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevInnovative Blog - Web Development, Hosting & Marketing Insights",
    description: "Stay updated with the latest insights on web development, hosting solutions, and digital marketing strategies from the DevInnovative team.",
  },
};

export default function Blog() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Blog" />
      <BlogView/>
     
    </main>
  );
}
