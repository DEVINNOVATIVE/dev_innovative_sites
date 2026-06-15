
import { AppDevelopmentDetail } from "@/components/portfolio/app-development-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto App Development - DevInnovative Portfolio",
  description: "Explore our crypto app development project. Learn about the features, technologies, and solutions we implemented for this innovative cryptocurrency application.",
  keywords: ["crypto app", "cryptocurrency", "blockchain", "app development", "portfolio", "crypto project", "web3"],
  openGraph: {
    title: "Crypto App Development - DevInnovative Portfolio",
    description: "Explore our crypto app development project. Learn about the features, technologies, and solutions we implemented for this innovative cryptocurrency application.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto App Development - DevInnovative Portfolio",
    description: "Explore our crypto app development project. Learn about the features, technologies, and solutions we implemented for this innovative cryptocurrency application.",
  },
};

export default function CryptoAppPage() {
  return (
    <main className="min-h-screen p-8">
     <AppDevelopmentDetail/>
    </main>
  );
}
