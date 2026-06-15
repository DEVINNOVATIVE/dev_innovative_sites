
import { AboutHero } from "@/components/about/about-hero";

import { PageHeader } from "@/components/PageHeader";
import {PortfolioView} from "@/components/portfolio/portfolio-view"
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Our Portfolio - DevInnovative Projects & Case Studies",
  description: "Explore DevInnovative's portfolio of successful web development projects, case studies, and client success stories. See our expertise in action.",
  keywords: ["portfolio", "projects", "case studies", "web development", "client work", "success stories", "showcase"],
  openGraph: {
    title: "Our Portfolio - DevInnovative Projects & Case Studies",
    description: "Explore DevInnovative's portfolio of successful web development projects, case studies, and client success stories. See our expertise in action.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio - DevInnovative Projects & Case Studies",
    description: "Explore DevInnovative's portfolio of successful web development projects, case studies, and client success stories. See our expertise in action.",
  },
};

export default function Portifolio() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Portfolio" />
      <PortfolioView/>
      
      
    
    </main>
  );
}
