
import { PageHeader } from "@/components/PageHeader";
import { CompanyBenefitsTimeline } from "@/components/why-choose-us/company-benefits";
import { ProminentITServices } from "@/components/why-choose-us/prominent";
import { WorldTestimonials } from "@/components/why-choose-us/world-testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us - DevInnovative",
  description: "Discover why DevInnovative is the right choice for your digital transformation. Learn about our expertise, client success stories, and commitment to excellence.",
  keywords: ["why choose us", "company benefits", "IT services", "client testimonials", "expertise", "digital transformation", "success stories"],
  openGraph: {
    title: "Why Choose Us - DevInnovative",
    description: "Discover why DevInnovative is the right choice for your digital transformation. Learn about our expertise, client success stories, and commitment to excellence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Us - DevInnovative",
    description: "Discover why DevInnovative is the right choice for your digital transformation. Learn about our expertise, client success stories, and commitment to excellence.",
  },
};

export default function WhyChooseUs() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Why Choose Us" />
      <CompanyBenefitsTimeline/>
      <ProminentITServices/>
    
      <WorldTestimonials/>
    </main>
  );
}
