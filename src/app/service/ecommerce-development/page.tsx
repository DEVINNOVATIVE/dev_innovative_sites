import { PageHeader } from "@/components/PageHeader";
import { EcommerceCallToAction } from "@/components/services/ecommerce/ecommerce-call-toAction";
import { EcommerceHero } from "@/components/services/ecommerce/ecommerce-hero";
import { EcommercePlatformDetails } from "@/components/services/ecommerce/ecommerce-platform-details";
import { EcommerceStrategies } from "@/components/services/ecommerce/ecommerce-strategies";
import { EcommerceWideStrategy } from "@/components/services/ecommerce/ecommerce-wide-strategy";


export default function EcommercePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Ecommerce Developement" />
      <EcommerceHero/>
      <EcommerceStrategies/>
      <EcommercePlatformDetails/>
      <EcommerceWideStrategy/>
      <EcommerceCallToAction/>
     
    </main>

  );
}