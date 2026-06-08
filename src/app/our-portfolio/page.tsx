
import { AboutHero } from "@/components/about/about-hero";

import { PageHeader } from "@/components/PageHeader";
import {PortfolioView} from "@/components/portfolio/portfolio-view"





export default function Portifolio() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Portfolio" />
      <PortfolioView/>
      
      
    
    </main>
  );
}
