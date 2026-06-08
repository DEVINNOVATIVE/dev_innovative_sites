import { PageHeader } from "@/components/PageHeader";
import { RoutePage } from "@/components/route-page";
import { FeaturedServices } from "@/components/services/web-developement/featured-services";
import { HeroSection } from "@/components/services/web-developement/hero-section";
import { NeedAssistanceSection } from "@/components/services/web-developement/need-assistance-section";
import { OurProcess } from "@/components/services/web-developement/our-process";

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