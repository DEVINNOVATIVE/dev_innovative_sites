import { PageHeader } from "@/components/PageHeader";
import { HostingBenefits } from "@/components/services/web-hosting/hosting-benefits";
import { HostingContact } from "@/components/services/web-hosting/hosting-contact";
import { HostingFeatures } from "@/components/services/web-hosting/hosting-features";
import { HostingHero } from "@/components/services/web-hosting/hosting-hero";
import { HostingPricing } from "@/components/services/web-hosting/hosting-pricing";
import { HostingTrustAndPricing } from "@/components/services/web-hosting/hosting-trust-and-pricing";
import WebHostingOverView from "@/components/services/web-hosting/web-hosting-overview";

export default function WebHostingPage() {
  return (
      <main className="bg-background text-foreground">
          <PageHeader title="Web Hosting" />
          <HostingHero/>
          <HostingFeatures/>
          <HostingBenefits/>
          <HostingTrustAndPricing/>
          <HostingPricing/>
          <HostingContact/>
          {/* <WebHostingOverView/> */}
         
        </main>

  );
}