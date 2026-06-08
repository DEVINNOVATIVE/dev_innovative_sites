import React from "react";
import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation";
import { ContactFormCard } from "@/components/contact-us"; // Import your new component
import industriesHero from "@/assets/hire_developer/industries.png";

export function IndustrySolutionsSection() {
  return (
    <section className="relative bg-white text-neutral-900 pt-10 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* LEFT SIDE COPY & ART */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="tracking-wider text-lg font-bold text-[#104cba] uppercase block">
                We Serve All Industries
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                Industry Focused Solutions For <span className="text-[#ff4b2b]">Your Business Needs !</span>
              </h2>
              <p className="text-sm sm:text-base leading-7 text-neutral-400 font-normal pt-2">
               At Dev iNN, we understand that every industry has unique requirements and challenges. That's why we offer custom solutions tailored to meet the specific needs of your business. Our team of experts has experience working with clients from various industries, including:
              </p>
            </div>

            <div className="relative w-full max-w-[420px] aspect-[0.95/1] mx-auto lg:mx-0">
              <Image src={industriesHero} alt="Industries illustration" fill className="object-contain" />
            </div>
          </div>

          {/* RIGHT SIDE: REUSABLE DYNAMIC FORM CALL */}
          <div className="lg:col-span-6 lg:mt-14">
            <ContactFormCard 
              badgeText="Need Assistance"
              title="Our Dedication Is To Exceed Our Clients' Expectations !"
             
              showLiveIndicator={true}
            />
          </div>

        </div>
      </div>
    </section>
  );
}