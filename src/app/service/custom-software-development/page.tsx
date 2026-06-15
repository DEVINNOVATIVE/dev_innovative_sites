import type { Metadata } from "next";
import { CustomSoftwareHero } from "@/components/services/custom-software-development/custom-software-hero";
import { CustomSoftwareCapabilities } from "@/components/services/custom-software-development/custom-software-capabilities";
import { CustomSoftwareTechAndProcess } from "@/components/services/custom-software-development/custom-tech";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "Custom Software Development Services | DevInnovative",
    description: "Turn complex business visions into scalable digital realities. Explore our custom web applications, native mobile apps, and cloud-native solutions.",
    keywords: ["custom software", "software development", "web applications", "mobile apps", "cloud-native", "custom solutions", "enterprise software", "scalable software"],
    openGraph: {
        title: "Custom Software Development Services | DevInnovative",
        description: "Turn complex business visions into scalable digital realities. Explore our custom web applications, native mobile apps, and cloud-native solutions.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Services | DevInnovative",
        description: "Turn complex business visions into scalable digital realities. Explore our custom web applications, native mobile apps, and cloud-native solutions.",
    },
};

export default function CustomSoftwareDevelopmentPage() {
    return (
        <main className="bg-background text-foreground">
            <PageHeader title="Custom Software" />
            {/* 1. Spacious Centered Hero Header */}
            <CustomSoftwareHero />
            {/* 2. Frosted Modern Matrix Capabilities Array */}
            <CustomSoftwareCapabilities />
            {/* 3. Technology Grid, Differentiators, and Asymmetric Process Timeline */}
            <CustomSoftwareTechAndProcess />
        </main>
    );
}