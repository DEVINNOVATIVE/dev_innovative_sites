import { HireDeveloperHero } from "@/components/developer/hero-section";
import { IndustrySolutionsSection } from "@/components/developer/industries-solution";
import { TrustMetricsSection } from "@/components/developer/trust-metric";
import { WhyChooseUsFeatures } from "@/components/developer/why-choose-use";
import { WhyHireDevInn } from "@/components/developer/why-hire-devin";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Expert Developers - DevInnovative",
  description: "Hire skilled developers from DevInnovative for your web development projects. Expert team specializing in modern technologies, industry solutions, and trusted delivery.",
  keywords: ["hire developer", "web development", "software development", "expert developers", "hire developers", "development team", "tech solutions"],
  openGraph: {
    title: "Hire Expert Developers - DevInnovative",
    description: "Hire skilled developers from DevInnovative for your web development projects. Expert team specializing in modern technologies, industry solutions, and trusted delivery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Developers - DevInnovative",
    description: "Hire skilled developers from DevInnovative for your web development projects. Expert team specializing in modern technologies, industry solutions, and trusted delivery.",
  },
};

export default function HireDeveloper() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Hire Developer"/>
      
     <HireDeveloperHero/>
     <WhyChooseUsFeatures/>
     <WhyHireDevInn/>
     <TrustMetricsSection/>
     <IndustrySolutionsSection/>
    </main>
  );
}
