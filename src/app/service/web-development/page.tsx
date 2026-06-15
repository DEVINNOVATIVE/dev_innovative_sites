import { PageHeader } from "@/components/PageHeader";
import { RoutePage } from "@/components/route-page";
import { FeaturedServices } from "@/components/services/web-developement/featured-services";
import { HeroSection } from "@/components/services/web-developement/hero-section";
import { NeedAssistanceSection } from "@/components/services/web-developement/need-assistance-section";
import { OurProcess } from "@/components/services/web-developement/our-process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - DevInnovative",
  description: "Build modern, responsive websites with DevInnovative's expert web development services. Custom solutions using latest technologies for optimal performance and user experience.",
  keywords: ["web development", "website development", "custom websites", "responsive design", "frontend", "backend", "full stack", "web solutions"],
  openGraph: {
    title: "Web Development Services - DevInnovative",
    description: "Build modern, responsive websites with DevInnovative's expert web development services. Custom solutions using latest technologies for optimal performance and user experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services - DevInnovative",
    description: "Build modern, responsive websites with DevInnovative's expert web development services. Custom solutions using latest technologies for optimal performance and user experience.",
  },
};

export default function WebDevelopmentPage() {
  return (
      <main className="bg-background text-foreground">
          <PageHeader title="Web Development" />
          <HeroSection/>
          <OurProcess/>
          <FeaturedServices/>
          <NeedAssistanceSection/>
        </main>

  );
}