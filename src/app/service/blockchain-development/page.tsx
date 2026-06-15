
import { PageHeader } from "@/components/PageHeader";
import { AboutNumbers } from "@/components/services/block-chain/about-numbers";
import { AppDevelopmentContact } from "@/components/services/block-chain/app-contact";
import { BlockchainAndroidOS } from "@/components/services/block-chain/blockchain-androidOS";
import { BlockchainFeatures } from "@/components/services/block-chain/blockchain-features";
import { CryptoICOServices } from "@/components/services/block-chain/crypto-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blockchain Development Services - DevInnovative",
  description: "Build secure and scalable blockchain solutions with DevInnovative. Expert blockchain development services including smart contracts, DApps, cryptocurrency, and ICO platforms.",
  keywords: ["blockchain", "blockchain development", "smart contracts", "cryptocurrency", "DApp", "decentralized", "web3", "crypto"],
  openGraph: {
    title: "Blockchain Development Services - DevInnovative",
    description: "Build secure and scalable blockchain solutions with DevInnovative. Expert blockchain development services including smart contracts, DApps, cryptocurrency, and ICO platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Development Services - DevInnovative",
    description: "Build secure and scalable blockchain solutions with DevInnovative. Expert blockchain development services including smart contracts, DApps, cryptocurrency, and ICO platforms.",
  },
};

export default function BlockChainPage() {
  return (
      <main className="bg-background text-foreground">
         <PageHeader title="BlockChain Developement" />
        <BlockchainFeatures/>
        <CryptoICOServices/>
        <AboutNumbers/>
        <BlockchainAndroidOS/>
        <AppDevelopmentContact/>
        </main>

  );
}