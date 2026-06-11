
import { PageHeader } from "@/components/PageHeader";
import { CompanyBenefitsTimeline } from "@/components/why-choose-us/company-benefits";
import { ProminentITServices } from "@/components/why-choose-us/prominent";
import { WorldTestimonials } from "@/components/why-choose-us/world-testimonials";
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
