import { PageHeader } from "@/components/PageHeader";
import { EcommerceCallToAction } from "@/components/services/ecommerce/ecommerce-call-toAction";
import { EcommerceHero } from "@/components/services/ecommerce/ecommerce-hero";
import { EcommercePlatformDetails } from "@/components/services/ecommerce/ecommerce-platform-details";
import { EcommerceStrategies } from "@/components/services/ecommerce/ecommerce-strategies";
import { EcommerceWideStrategy } from "@/components/services/ecommerce/ecommerce-wide-strategy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Development Services - DevInnovative",
  description: "Build powerful online stores with DevInnovative's e-commerce development services. Expert solutions for Shopify, custom platforms, and scalable shopping experiences.",
  keywords: ["ecommerce", "e-commerce development", "online store", "Shopify", "custom ecommerce", "shopping platform", "ecommerce solutions", "online business"],
  openGraph: {
    title: "E-commerce Development Services - DevInnovative",
    description: "Build powerful online stores with DevInnovative's e-commerce development services. Expert solutions for Shopify, custom platforms, and scalable shopping experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Development Services - DevInnovative",
    description: "Build powerful online stores with DevInnovative's e-commerce development services. Expert solutions for Shopify, custom platforms, and scalable shopping experiences.",
  },
};

export default function EcommercePage() {
  return (
    <main className="bg-background text-foreground">
      <PageHeader title="Ecommerce Developement" />
      <EcommerceHero/>
      <EcommerceStrategies/>
      <EcommercePlatformDetails/>
      <EcommerceWideStrategy/>
      <EcommerceCallToAction/>
     
    </main>

  );
}