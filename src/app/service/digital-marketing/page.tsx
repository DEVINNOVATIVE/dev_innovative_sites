import { PageHeader } from "@/components/PageHeader";
import { DigitalMarketingRevamp } from "@/components/services/marketing/marketing-Revamp";
import { DigitalMarketingServices } from "@/components/services/marketing/marketing-services";
import { WhyDigitalMarketing } from "@/components/services/marketing/why-marketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services - DevInnovative",
  description: "Boost your online presence with DevInnovative's comprehensive digital marketing services. Expert SEO, social media marketing, content strategy, and performance marketing solutions.",
  keywords: ["digital marketing", "SEO", "social media marketing", "content marketing", "performance marketing", "online advertising", "marketing strategy"],
  openGraph: {
    title: "Digital Marketing Services - DevInnovative",
    description: "Boost your online presence with DevInnovative's comprehensive digital marketing services. Expert SEO, social media marketing, content strategy, and performance marketing solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services - DevInnovative",
    description: "Boost your online presence with DevInnovative's comprehensive digital marketing services. Expert SEO, social media marketing, content strategy, and performance marketing solutions.",
  },
};

export default function MarketingPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Digital Marketing" />
      <DigitalMarketingServices />
      <WhyDigitalMarketing/>
      <DigitalMarketingRevamp/>
    </main>

  );
}