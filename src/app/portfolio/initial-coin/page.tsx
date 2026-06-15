
import { CryptoAppDetail } from "@/components/portfolio/crypto-app-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initial Coin Offering - DevInnovative Portfolio",
  description: "Explore our Initial Coin Offering (ICO) project. Learn about the features, technologies, and blockchain solutions we implemented for this cryptocurrency fundraising platform.",
  keywords: ["ICO", "initial coin offering", "cryptocurrency", "blockchain", "fundraising", "portfolio", "token sale", "crypto platform"],
  openGraph: {
    title: "Initial Coin Offering - DevInnovative Portfolio",
    description: "Explore our Initial Coin Offering (ICO) project. Learn about the features, technologies, and blockchain solutions we implemented for this cryptocurrency fundraising platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initial Coin Offering - DevInnovative Portfolio",
    description: "Explore our Initial Coin Offering (ICO) project. Learn about the features, technologies, and blockchain solutions we implemented for this cryptocurrency fundraising platform.",
  },
};

export default function InitialCoinPage() {
  return (
    <main className="min-h-screen p-8">
     <CryptoAppDetail/>
    </main>
  );
}
