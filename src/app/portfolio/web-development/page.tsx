import { WebDetail } from "@/components/portfolio/web-detail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Project - DevInnovative Portfolio",
  description: "Explore our web development project. Learn about the features, technologies, and solutions we implemented for this modern and responsive web application.",
  keywords: ["web development", "web app", "custom website", "frontend", "backend", "portfolio", "web solutions", "full stack"],
  openGraph: {
    title: "Web Development Project - DevInnovative Portfolio",
    description: "Explore our web development project. Learn about the features, technologies, and solutions we implemented for this modern and responsive web application.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Project - DevInnovative Portfolio",
    description: "Explore our web development project. Learn about the features, technologies, and solutions we implemented for this modern and responsive web application.",
  },
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen p-8 ">
      <WebDetail/>
    </main>
  );
}
