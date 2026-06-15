import React from "react";
import Link from "next/link";
import { CrmDetail } from "@/components/portfolio/crm-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom CRM Development - DevInnovative Portfolio",
  description: "Explore our custom CRM development project. Learn about the features, technologies, and solutions we implemented for this tailored customer relationship management system.",
  keywords: ["CRM", "custom CRM", "customer relationship management", "business software", "portfolio", "CRM development", "enterprise software"],
  openGraph: {
    title: "Custom CRM Development - DevInnovative Portfolio",
    description: "Explore our custom CRM development project. Learn about the features, technologies, and solutions we implemented for this tailored customer relationship management system.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Development - DevInnovative Portfolio",
    description: "Explore our custom CRM development project. Learn about the features, technologies, and solutions we implemented for this tailored customer relationship management system.",
  },
};

export default function CustomCrmPage() {
  return (
    <main className="min-h-screen p-8 ">
     <CrmDetail/>
    </main>
  );
}
