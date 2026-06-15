import React from "react";
import type { Metadata } from "next";
import { ServicesCarouselHero } from "@/components/services/services-carousel-hero";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Engineering Services | DevInnovative",
  description: "Explore our automated storefront architectures, zero-trust cybersecurity, custom AI systems, and high-performance full-stack ecosystem deployments.",
  keywords: ["engineering services", "web development", "AI solutions", "cybersecurity", "blockchain", "custom software", "ecommerce", "digital marketing"],
  openGraph: {
    title: "Our Engineering Services | DevInnovative",
    description: "Explore our automated storefront architectures, zero-trust cybersecurity, custom AI systems, and high-performance full-stack ecosystem deployments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Engineering Services | DevInnovative",
    description: "Explore our automated storefront architectures, zero-trust cybersecurity, custom AI systems, and high-performance full-stack ecosystem deployments.",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Our Services" />

      <ServicesCarouselHero />
    </main>
  );
}