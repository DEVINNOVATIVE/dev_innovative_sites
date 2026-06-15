import React from "react";
import Link from "next/link";
import { FinanceDetail } from "@/components/portfolio/finance-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Website - DevInnovative Portfolio",
  description: "Explore our finance website project. Learn about the features, technologies, and financial solutions we implemented for this secure and professional financial platform.",
  keywords: ["finance", "financial website", "fintech", "banking", "portfolio", "financial platform", "secure finance"],
  openGraph: {
    title: "Finance Website - DevInnovative Portfolio",
    description: "Explore our finance website project. Learn about the features, technologies, and financial solutions we implemented for this secure and professional financial platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Website - DevInnovative Portfolio",
    description: "Explore our finance website project. Learn about the features, technologies, and financial solutions we implemented for this secure and professional financial platform.",
  },
};

export default function FinanceWebsitePage() {
  return (
    <main className="min-h-screen p-8">
     <FinanceDetail />
    </main>
  );
}
