import { DigitalMarketingRevamp } from "@/components/services/marketing/marketing-Revamp";
import { DigitalMarketingServices } from "@/components/services/marketing/marketing-services";
import { WhyDigitalMarketing } from "@/components/services/marketing/why-marketing";

export default function MarketingPage() {
  return (
    <main className="bg-background text-foreground">
      <DigitalMarketingServices />
      <WhyDigitalMarketing/>
      <DigitalMarketingRevamp/>
    </main>

  );
}