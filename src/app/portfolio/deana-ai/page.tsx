import { DeanaDetail } from "@/components/portfolio/deana-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deana AI - DevInnovative Portfolio",
  description: "Explore our Deana AI project. Learn about the features, technologies, and AI solutions we implemented for this innovative artificial intelligence application.",
  keywords: ["AI", "artificial intelligence", "Deana AI", "machine learning", "portfolio", "AI project", "innovation"],
  openGraph: {
    title: "Deana AI - DevInnovative Portfolio",
    description: "Explore our Deana AI project. Learn about the features, technologies, and AI solutions we implemented for this innovative artificial intelligence application.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deana AI - DevInnovative Portfolio",
    description: "Explore our Deana AI project. Learn about the features, technologies, and AI solutions we implemented for this innovative artificial intelligence application.",
  },
};

export default function DeanaAiPage() {
  return (
    <main className="min-h-screen p-8  ">
     <DeanaDetail/>
    </main>
  );
}
