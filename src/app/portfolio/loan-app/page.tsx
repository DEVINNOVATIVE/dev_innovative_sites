import {LoanAppDetail} from "@/components/portfolio/loan-app-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Application - DevInnovative Portfolio",
  description: "Explore our loan application project. Learn about the features, technologies, and financial solutions we implemented for this secure and user-friendly lending platform.",
  keywords: ["loan app", "loan application", "lending platform", "fintech", "finance", "portfolio", "financial software", "lending"],
  openGraph: {
    title: "Loan Application - DevInnovative Portfolio",
    description: "Explore our loan application project. Learn about the features, technologies, and financial solutions we implemented for this secure and user-friendly lending platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Application - DevInnovative Portfolio",
    description: "Explore our loan application project. Learn about the features, technologies, and financial solutions we implemented for this secure and user-friendly lending platform.",
  },
};

export default function LoanAppPage() {
  return (
    <main className="min-h-screen p-8">
      <LoanAppDetail />
   
    </main>
  );
}
