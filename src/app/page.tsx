import { HomeHero } from "@/components/home/home-hero";
import { HomeAbout } from "@/components/home/home-about";
import { HomeServices } from "@/components/home/home-services";
import { HomeSolutions } from "@/components/home/home-solutions";
import { HomeDigital } from "@/components/home/home-digital";
import { HomeInnovative } from "@/components/home/home-innovative";
import { ComprehensiveSolution } from "@/components/home/home-comprehensive";
import {ConnectWithUs} from "@/components/home/home-connect";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
     
      <HomeServices />
      <HomeSolutions />
       <HomeDigital />
       <HomeInnovative/>
        <ComprehensiveSolution />
        <ConnectWithUs />
    </main>
  );
}
