"use client";

import Image from "next/image";

// Import asset pairs based on folder list from image_da4b38.png
import ideaLogo from "@/assets/team/idea.png";
import ideaLogoB from "@/assets/team/ideab.png";

import technologyLogo from "@/assets/team/technology.png";
import technologyLogoB from "@/assets/team/technologyb.png";

import pixelLogo from "@/assets/team/pixel.png";
import pixelLogoB from "@/assets/team/pixelb.png";

import dynamicLogo from "@/assets/team/dynamic.png";
import dynamicLogoB from "@/assets/team/dynamicb.png";

import techgLogo from "@/assets/team/techg.png"; 
import techbLogo from "@/assets/team/techb.png"; 

const brandLogos = [
  { id: "ideatech", normal: ideaLogo, hover: ideaLogoB, alt: "Ideatech Logo" },
  { id: "technology", normal: technologyLogo, hover: technologyLogoB, alt: "Technology Systems Logo" },
  { id: "pixel", normal: pixelLogo, hover: pixelLogoB, alt: "Pixelabs Premium Logo" },
  { id: "dynamic", normal: dynamicLogo, hover: dynamicLogoB, alt: "Dynamicmind Logo" },
  { id: "techlogo", normal: techgLogo, hover: techbLogo, alt: "Techlogo" },
];

export function BrandSlider() {
  return (
    <section className="w-full pt-8  pb-18 bg-white  overflow-hidden select-none">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Mask Overlay Gradient edges to give it a high-end fade out effect on left & right sides */}
        <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          
          {/* We render the track list TWICE. 
            When the first track slides fully left by -100%, the cloned track snaps smoothly into its place invisibly.
            'hover:[animation-play-state:paused]' completely pauses the sliding motion when a user hovers.
          */}
          <div className="flex gap-16 shrink-0 animate-marqueeRightToLeft hover:[animation-play-state:paused] pr-16">
            {brandLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-track1-${idx}`}
                className="group relative w-[200px] h-[65px] cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full">
                  {/* Normal Gray/Silver Baseline State */}
                  <Image
                    src={logo.normal}
                    alt={logo.alt}
                    fill
                    className="object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                    priority
                  />
                  {/* Hover Blue/Colored State */}
                  <Image
                    src={logo.hover}
                    alt={logo.alt}
                    fill
                    className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          {/* DUPLICATE TRACK 2: Creates the seamless infinite connection loop bridge */}
          <div className="flex gap-16 shrink-0 animate-marqueeRightToLeft hover:[animation-play-state:paused] pr-16" aria-hidden="true">
            {brandLogos.map((logo, idx) => (
              <div
                key={`${logo.id}-track2-${idx}`}
                className="group relative w-[200px] h-[65px] cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.normal}
                    alt={logo.alt}
                    fill
                    className="object-contain absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <Image
                    src={logo.hover}
                    alt={logo.alt}
                    fill
                    className="object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* --- HARDWARE ACCELERATED INFINITE TICKER KEYFRAMES --- */}
      <style jsx global>{`
        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marqueeRightToLeft {
          /* Adjust the speed loop (e.g., 20s) to make it scroll faster or slower */
          animation: marqueeRightToLeft 20s linear infinite;
        }
      `}</style>
    </section>
  );
}