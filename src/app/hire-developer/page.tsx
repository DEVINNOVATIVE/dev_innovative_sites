import { HireDeveloperHero } from "@/components/developer/hero-section";
import { IndustrySolutionsSection } from "@/components/developer/industries-solution";
import { TrustMetricsSection } from "@/components/developer/trust-metric";
import { WhyChooseUsFeatures } from "@/components/developer/why-choose-use";
import { WhyHireDevInn } from "@/components/developer/why-hire-devin";

export default function HireDeveloper() {
  return (
    <main className="bg-background text-foreground">
      
     <HireDeveloperHero/>
     <WhyChooseUsFeatures/>
     <WhyHireDevInn/>
     <TrustMetricsSection/>
     <IndustrySolutionsSection/>
    </main>
  );
}
