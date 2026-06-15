import React from "react";
import Link from "next/link";
import { DigitalMarketingDetail } from "@/components/portfolio/digital-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Platform - DevInnovative Portfolio",
  description: "Explore our digital marketing platform project. Learn about the features, technologies, and marketing solutions we implemented for this comprehensive digital marketing system.",
  keywords: ["digital marketing", "marketing platform", "marketing automation", "SEO", "portfolio", "marketing software", "digital solutions"],
  openGraph: {
    title: "Digital Marketing Platform - DevInnovative Portfolio",
    description: "Explore our digital marketing platform project. Learn about the features, technologies, and marketing solutions we implemented for this comprehensive digital marketing system.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Platform - DevInnovative Portfolio",
    description: "Explore our digital marketing platform project. Learn about the features, technologies, and marketing solutions we implemented for this comprehensive digital marketing system.",
  },
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen p-8 ">
    <DigitalMarketingDetail/>
    </main>
  );
}
