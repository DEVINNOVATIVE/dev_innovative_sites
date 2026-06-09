
import { AboutNumbers } from "@/components/services/block-chain/about-numbers";
import { AppDevelopmentContact } from "@/components/services/block-chain/app-contact";
import { BlockchainAndroidOS } from "@/components/services/block-chain/blockchain-androidOS";
import { BlockchainFeatures } from "@/components/services/block-chain/blockchain-features";
import { CryptoICOServices } from "@/components/services/block-chain/crypto-hero";
export default function BlockChainPage() {
  return (
      <main className="bg-background text-foreground">
        <BlockchainFeatures/>
        <CryptoICOServices/>
        <AboutNumbers/>
        <BlockchainAndroidOS/>
        <AppDevelopmentContact/>
        </main>

  );
}