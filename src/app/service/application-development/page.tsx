import { PageHeader } from "@/components/PageHeader";
import { AppDevelopmentBenefits } from "@/components/services/app-development/app-development-benefits";
import { AppDevelopmentFeatures } from "@/components/services/app-development/app-development-features";
import { AppDevelopmentHero } from "@/components/services/app-development/app-development-hero";
import { AppDevelopmentTechAndOS } from "@/components/services/app-development/tech-ios";


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