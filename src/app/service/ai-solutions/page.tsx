import React from "react";
import type { Metadata } from "next";
import { AiHero } from "@/components/ai/ai-hero";
import { AiCapabilities } from "@/components/ai/ai-capabilities";
import { AiTechStackAndRoadmap } from "@/components/ai/ai-roadmap";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "Artificial Intelligence & Machine Learning Solutions | DevInnovative",
    description: "Transform raw data into actionable intelligence with custom Generative AI, LLMs, predictive analytics, and enterprise MLOps infrastructure.",
    keywords: ["AI", "artificial intelligence", "machine learning", "LLM", "generative AI", "MLOps", "predictive analytics", "enterprise AI"],
    openGraph: {
        title: "Artificial Intelligence & Machine Learning Solutions | DevInnovative",
        description: "Transform raw data into actionable intelligence with custom Generative AI, LLMs, predictive analytics, and enterprise MLOps infrastructure.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Artificial Intelligence & Machine Learning Solutions | DevInnovative",
        description: "Transform raw data into actionable intelligence with custom Generative AI, LLMs, predictive analytics, and enterprise MLOps infrastructure.",
    },
};

export default function AiSolutionsPage() {
    return (
        <main className="bg-background text-foreground">
            <PageHeader title="Artifical Intelligence" />
            {/* 1. Narrative Entry Hero Banner */}
            <AiHero />

            {/* 2. Custom Domain Cognitive AI Capabilities Grid */}
            <AiCapabilities />

            {/* 3. Specialized MLOps Stack, Partnership Protections, and Implementation Roadmap */}
            <AiTechStackAndRoadmap />
        </main>
    );
}