import React from "react";
import Link from "next/link";
import { FinanceDetail } from "@/components/portfolio/finance-detail";

export default function FinanceWebsitePage() {
  return (
    <main className="min-h-screen p-8">
     <FinanceDetail />
    </main>
  );
}
