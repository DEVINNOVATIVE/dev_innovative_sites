import React from "react";
import type { Metadata } from "next";
import { ServicesCarouselHero } from "@/components/services/services-carousel-hero";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Engineering Services | DevInnovative",
  description: "Explore our automated storefront architectures, zero-trust cybersecurity, custom AI systems, and high-performance full-stack ecosystem deployments.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Services" />

      <ServicesCarouselHero />
    </main>
  );
}