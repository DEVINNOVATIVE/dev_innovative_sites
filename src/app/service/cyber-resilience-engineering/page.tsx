import type { Metadata } from "next";
import Script from "next/script";
import { ServiceHero } from "@/components/services/cyber/service-hero";
import { ValueTransition } from "@/components/services/cyber/value-transition";
import { CoreCapabilities } from "@/components/services/cyber/core-capabilities";
import { PerceptionShift } from "@/components/services/cyber/perception-shift";
import { MissionStatement } from "@/components/services/cyber/mission-statement";
import { ServiceCTA } from "@/components/services/cyber/service-CTA";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "Cyber Resilience & Advanced Software Engineering | Dev Innovative",
    description: "Move beyond standard web development. Dev Innovative builds AI-native, secure digital ecosystems using Consensus AI & zero-trust cyber resilience engineering.",
    keywords: ["Next-Gen Elite Engineering", "Consensus AI", "Cyber Resilience", "Secure Software Architecture", "Cryptographic Infrastructure", "Dev Innovative"],
    alternates: {
        canonical: "https://devinnovative.com/services/cyber-resilience-engineering",
    },
};

export default function CyberResiliencePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cyber Resilience & Advanced Engineering",
        "provider": {
            "@type": "Organization",
            "name": "Dev Innovative",
            "url": "https://devinnovative.com"
        },
        "description": "Fusing high-performance software engineering with predictive Consensus AI and preemptive, zero-trust cybersecurity to build platforms secure by design.",
        "category": "Software Engineering & Cybersecurity"
    };

    return (
        <>
            <Script
                id="cyber-service-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="bg-background text-foreground">
                <PageHeader title="Cyber Resilience Engineering" />
                <ServiceHero />
                <ValueTransition />
                <CoreCapabilities />
                <PerceptionShift />
                <MissionStatement />
                <ServiceCTA />
            </main>
        </>
    );
}