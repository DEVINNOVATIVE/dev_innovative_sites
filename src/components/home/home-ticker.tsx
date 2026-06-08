import { Zap } from "lucide-react";

const tickerItems = [
  "WELCOME TO TECNEFY SOLUTIONS",
  "YOUR SATISFACTION IS OUR PRIORITY",
  "WE THRIVE ON CREATIVITY",
  "WE BELIEVE IN THE POWER OF COLLABORATION",
];

export default function HomeTicker() {
  return (
    <section className="overflow-hidden border-y border-white/20 bg-[#0a1f78] text-white">
      <div className="mx-auto max-w-[1400px] overflow-hidden px-3 py-2 sm:px-6 lg:px-8">
        <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-8 text-[11px] font-medium tracking-[0.22em] text-white/95 sm:text-[13px]">
              <span>{item}</span>
              <Zap className="h-3.5 w-3.5 shrink-0 text-[#ff8a00]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}