
import { AboutHero } from "@/components/about/about-hero";

import { PageHeader } from "@/components/PageHeader";
import {TeamHero} from "@/components/team/team-hero"
import {BrandSlider} from "@/components/team/brand-slider"
import { OurTeam } from "@/components/about/our-team";
import {SubscribeNewsletter} from "@/components/team/subscribe";
import { MeetTheInnovators } from "@/components/team/meet-the-innovators";
import { CoreEcosystemAndCulture } from "@/components/team/core-ecosystem-and-culture";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Our Team - Meet the DevInnovative Experts",
  description: "Meet the talented team behind DevInnovative. Learn about our innovators, culture, ecosystem, and the experts who deliver exceptional web development solutions.",
  keywords: ["team", "our team", "developers", "experts", "company culture", "innovators", "web development team"],
  openGraph: {
    title: "Our Team - Meet the DevInnovative Experts",
    description: "Meet the talented team behind DevInnovative. Learn about our innovators, culture, ecosystem, and the experts who deliver exceptional web development solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Meet the DevInnovative Experts",
    description: "Meet the talented team behind DevInnovative. Learn about our innovators, culture, ecosystem, and the experts who deliver exceptional web development solutions.",
  },
};

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
