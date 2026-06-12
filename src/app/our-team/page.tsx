
import { AboutHero } from "@/components/about/about-hero";

import { PageHeader } from "@/components/PageHeader";
import {TeamHero} from "@/components/team/team-hero"
import {BrandSlider} from "@/components/team/brand-slider"
import { OurTeam } from "@/components/about/our-team";
import {SubscribeNewsletter} from "@/components/team/subscribe";
import { MeetTheInnovators } from "@/components/team/meet-the-innovators";
import { CoreEcosystemAndCulture } from "@/components/team/core-ecosystem-and-culture";




export default function About() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Team" />
      {/* <TeamHero /> */}
      <MeetTheInnovators/>
      <CoreEcosystemAndCulture/>
      <BrandSlider/>
      <OurTeam/>
      <SubscribeNewsletter/>

    
    </main>
  );
}
