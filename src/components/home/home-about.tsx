import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TickIcon from "@/components/icons/tick";

import dummyAboutImage from "@/assets/hero.webp";

const features = [
  "Innovative Solutions",
  "User-Friendly Interface",
  "Secure Transactions",
  "Real-Time Analytics",
];

export function HomeAbout() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
         <div className=" flex justify-center  lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[20px] bg-[#d9d9d9] shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
            <Image
              src={dummyAboutImage}
              alt="Dummy about visual"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className=" max-w-[540px] space-y-6">
          <div className="relative inline-flex items-center rounded-[6px] border border-secondary/40 bg-white px-3 py-1.5 text-[13px] font-medium text-foreground shadow-[0_6px_18px_rgba(12,90,219,0.08)]">
            <span className="pointer-events-none absolute left-0 top-0 h-2.5 w-8 rounded-tl-[6px] border-l-4 border-t-4 border-secondary" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-2.5 w-8 rounded-br-[6px] border-b-4 border-r-4 border-secondary" />
            <span className="relative z-10">About Company</span>
          </div>

          <h2 className="max-w-[500px] text-3xl font-bold leading-[1.08] tracking-tight text-[#0f172a] sm:text-5xl">
            Elevate Your Business Growth Through Technology Innovation
          </h2>

          <p className="max-w-[470px] text-sm leading-6 text-muted-foreground sm:text-base">
            We’re a forward-thinking software agency turning ideas into powerful digital
            solutions. From development to branding and IT strategy, we help businesses
            grow, scale, and innovate.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-[#1f2937]">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <TickIcon className="h-3 w-3" />
                  </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-7 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-secondary/90"
          >
            More About Us
           <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

       
      </div>
    </section>
  );
}