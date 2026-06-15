import { PageHeader } from "@/components/PageHeader";
import { AppDevelopmentBenefits } from "@/components/services/app-development/app-development-benefits";
import { AppDevelopmentFeatures } from "@/components/services/app-development/app-development-features";
import { AppDevelopmentHero } from "@/components/services/app-development/app-development-hero";
import { AppDevelopmentTechAndOS } from "@/components/services/app-development/tech-ios";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Development Services - DevInnovative",
  description: "Build custom mobile and web applications with DevInnovative. Expert application development services featuring modern tech stacks, cross-platform solutions, and user-centric design.",
  keywords: ["application development", "app development", "mobile app", "web app", "custom software", "cross-platform", "iOS", "Android"],
  openGraph: {
    title: "Application Development Services - DevInnovative",
    description: "Build custom mobile and web applications with DevInnovative. Expert application development services featuring modern tech stacks, cross-platform solutions, and user-centric design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Application Development Services - DevInnovative",
    description: "Build custom mobile and web applications with DevInnovative. Expert application development services featuring modern tech stacks, cross-platform solutions, and user-centric design.",
  },
};

export default function ApplicationPage() {
  return (
      <main className="bg-background text-foreground">
          <PageHeader title="Application Development" />
        <AppDevelopmentHero/>
        <AppDevelopmentFeatures/>
        <AppDevelopmentBenefits/>
        <AppDevelopmentTechAndOS/>

          {/* <PageHeader title="Web Hosting" /> */}
         
          {/* <WebHostingOverView/> */}
         
        </main>

  );
}