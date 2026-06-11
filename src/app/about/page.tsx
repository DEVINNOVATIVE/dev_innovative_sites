// import { RoutePage } from "@/components/route-page";

// export default function AboutPage() {
//   return (
//     <RoutePage
//       eyebrow="About"
//       title="A focused team building web products, hosting, and marketing systems."
//       description="This page is connected to the About nav item, so the active state now follows the route you open."
//     />
//   );
// }

import { AboutHero } from "@/components/about/about-hero";

import { PageHeader } from "@/components/PageHeader";
import {AboutInformation} from "@/components/about/about-information"
import { AboutHistory } from "@/components/about/about-history";
import {AboutNumbers} from "@/components/about/about-number"
import { OurTeam } from "@/components/about/our-team";
import { FAQSection } from "@/components/about/faq-section";
import { DevInnovativeEcosystem } from "@/components/about/dev-innovative-ecosystem";


export default function About() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="About Company" />
      <AboutHero />
      <AboutInformation/>
      <AboutHistory/>
      <DevInnovativeEcosystem/>
      <AboutNumbers/>
      <OurTeam/>
      <FAQSection/>


    
    </main>
  );
}
