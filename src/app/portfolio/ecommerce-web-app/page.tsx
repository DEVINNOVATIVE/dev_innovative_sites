import { EcommerceDetail } from "@/components/portfolio/ecommerce-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Web App - DevInnovative Portfolio",
  description: "Explore our e-commerce web application project. Learn about the features, technologies, and online store solutions we implemented for this comprehensive shopping platform.",
  keywords: ["ecommerce", "e-commerce", "online store", "web app", "shopping platform", "portfolio", "online business"],
  openGraph: {
    title: "E-commerce Web App - DevInnovative Portfolio",
    description: "Explore our e-commerce web application project. Learn about the features, technologies, and online store solutions we implemented for this comprehensive shopping platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Web App - DevInnovative Portfolio",
    description: "Explore our e-commerce web application project. Learn about the features, technologies, and online store solutions we implemented for this comprehensive shopping platform.",
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen p-8">
     <EcommerceDetail/>
    </main>
  );
}
