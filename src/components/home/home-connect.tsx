// import Image from "next/image";

// // Background map pattern asset
// import connectBg from "@/assets/connect_bg.webp";

// // User avatar assets from your project folder
// import user1 from "@/assets/user1.png";
// import user2 from "@/assets/user2.png";
// import user3 from "@/assets/user3.png";
// import user4 from "@/assets/user4.png";
// import user5 from "@/assets/user5.png";
// import user6 from "@/assets/user6.png";

// export function ConnectWithUs() {
//   return (
//     <section className="relative overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-8 text-slate-900 min-h-[460px] flex items-center">
      
//       {/* --- 1. BACKGROUND PATTERN MAP IMAGE --- */}
//       <div className="absolute inset-0 z-0 opacity-45 pointer-events-none">
//         <Image
//           src={connectBg}
//           alt="World connect background map grid"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>

//       {/* --- 2. FLOATING RANDOM AVATARS MATRIX (Spatially positioned like image_8e27b9.jpg) --- */}
//       <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-[1400px] mx-auto">
//         {/* Left Side Avatars */}
//         <div className="absolute top-[18%] left-[12%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_6s_ease-in-out_infinite]">
//           <Image src={user1} alt="User connection avatar 1" fill className="object-cover" />
//         </div>
//         <div className="absolute bottom-[35%] left-[8%] w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_8s_ease-in-out_infinite_reverse]">
//           <Image src={user2} alt="User connection avatar 2" fill className="object-cover" />
//         </div>
//         <div className="absolute bottom-[10%] left-[24%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_7s_ease-in-out_infinite]">
//           <Image src={user3} alt="User connection avatar 3" fill className="object-cover" />
//         </div>

//         {/* Right Side Avatars */}
//         <div className="absolute top-[12%] right-[14%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_7.5s_ease-in-out_infinite_reverse]">
//           <Image src={user4} alt="User connection avatar 4" fill className="object-cover" />
//         </div>
//         <div className="absolute bottom-[32%] right-[10%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_6.5s_ease-in-out_infinite]">
//           <Image src={user5} alt="User connection avatar 5" fill className="object-cover" />
//         </div>
//         <div className="absolute bottom-[12%] right-[22%] w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md animate-[float_9s_ease-in-out_infinite_reverse]">
//           <Image src={user6} alt="User connection avatar 6" fill className="object-cover" />
//         </div>

//         {/* --- 3. GEOMETRIC SCATTER ELEMENTS (Shapes matching image_8e27b9.jpg) --- */}
//         {/* Green Solid Circle (Top Left-Center) */}
//         <span className="absolute top-[20%] left-[36%] w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-80 animate-pulse duration-[3000ms]" />
        
//         {/* Pink Ring Circle (Bottom Center-Left) */}
//         <span className="absolute bottom-[18%] left-[40%] w-5 h-5 rounded-full border-4 border-pink-400 opacity-75 animate-bounce duration-[5000ms]" />
        
//         {/* Yellow Solid Circle (Bottom Right-Center) */}
//         <span className="absolute bottom-[16%] right-[38%] w-2 h-2 rounded-full bg-amber-400 opacity-80 animate-pulse duration-[2500ms]" />
        
//         {/* Cyan Hollow Triangle (Top Right-Center) */}
//         <div className="absolute top-[10%] right-[26%] opacity-60 animate-spin duration-[15000ms]">
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-cyan-400 stroke-[3]">
//             <polygon points="12,2 22,22 2,22" />
//           </svg>
//         </div>
//       </div>

//       {/* --- 4. CENTRAL TEXT TYPOGRAPHY CONTAINER --- */}
//       <div className="relative z-20 mx-auto max-w-[1100px] w-full text-center">
//         <div className="space-y-6 max-w-4xl mx-auto px-4">
          
//           <span className="text-sm font-bold tracking-wide text-blue-600 block">
//             Connect With Us
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.25]">
//             Claim Your Free Consultancy And Start <br className="hidden md:inline" />
//             Your <span className="text-[#ff5c3d]">Journey To Success With Us</span>
//           </h2>

//           <div className="pt-4">
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#ff4722] to-[#ff733b] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,92,61,0.25)] transition-all duration-200 hover:scale-[1.02] hover:opacity-95"
//             >
//               Get a Free Quote !
//             </a>
//           </div>

//         </div>
//       </div>

//       {/* --- INLINE FLOATING KEYFRAMES --- */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-10px) translateX(3px); }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";

// Background map pattern asset
import connectBg from "@/assets/connect_bg.webp";

// User avatar assets from your project folder
import user1 from "@/assets/user1.png";
import user2 from "@/assets/user2.png";
import user3 from "@/assets/user3.png";
import user4 from "@/assets/user4.png";
import user5 from "@/assets/user5.png";
import user6 from "@/assets/user6.png";

export function ConnectWithUs() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-24 sm:px-6 lg:px-8 text-slate-900 min-h-[460px] flex items-center select-none">
      
      {/* --- 1. BACKGROUND PATTERN MAP IMAGE --- */}
      <div className="absolute inset-0 z-0 opacity-30 sm:opacity-45 pointer-events-none">
        <Image
          src={connectBg}
          alt="World connect background map grid"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* --- 2. FLOATING RANDOM AVATARS MATRIX (Spatially hidden under md screen to keep typography perfectly readable) --- */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden md:block max-w-[1400px] mx-auto">
        {/* Left Side Avatars */}
        <div className="absolute top-[18%] left-[8%] lg:left-[12%] w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 6s ease-in-out infinite" }}>
          <Image src={user1} alt="User connection avatar 1" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[35%] left-[4%] lg:left-[8%] w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 8s ease-in-out infinite_reverse" }}>
          <Image src={user2} alt="User connection avatar 2" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[10%] left-[18%] lg:left-[24%] w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 7s ease-in-out infinite" }}>
          <Image src={user3} alt="User connection avatar 3" fill className="object-cover" />
        </div>

        {/* Right Side Avatars */}
        <div className="absolute top-[12%] right-[10%] lg:right-[14%] w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 7.5s ease-in-out infinite_reverse" }}>
          <Image src={user4} alt="User connection avatar 4" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[32%] right-[6%] lg:right-[10%] w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 6.5s ease-in-out infinite" }}>
          <Image src={user5} alt="User connection avatar 5" fill className="object-cover" />
        </div>
        <div className="absolute bottom-[12%] right-[16%] lg:right-[22%] w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-white shadow-md" style={{ animation: "float 9s ease-in-out infinite_reverse" }}>
          <Image src={user6} alt="User connection avatar 6" fill className="object-cover" />
        </div>

        {/* --- 3. GEOMETRIC SCATTER ELEMENTS --- */}
        {/* Green Solid Circle */}
        <span className="absolute top-[20%] left-[36%] w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-80 animate-pulse duration-[3000ms]" />
        
        {/* Pink Ring Circle */}
        <span className="absolute bottom-[18%] left-[40%] w-5 h-5 rounded-full border-4 border-pink-400 opacity-75 animate-bounce duration-[5000ms]" />
        
        {/* Yellow Solid Circle */}
        <span className="absolute bottom-[16%] right-[38%] w-2 h-2 rounded-full bg-amber-400 opacity-80 animate-pulse duration-[2500ms]" />
        
        {/* Cyan Hollow Triangle */}
        <div className="absolute top-[10%] right-[26%] opacity-60 animate-spin duration-[15000ms]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-cyan-400 stroke-[3]">
            <polygon points="12,2 22,22 2,22" />
          </svg>
        </div>
      </div>

      {/* --- 4. CENTRAL TEXT TYPOGRAPHY CONTAINER --- */}
      <div className="relative z-20 mx-auto max-w-[1100px] w-full text-center">
        {/* FIXED RESPONSIVENESS: Fluid width constraints set to look flawless on mobile profiles */}
        <div className="space-y-5 max-w-4xl mx-auto px-2 sm:px-4">
          
          <span className="text-xs sm:text-sm font-bold tracking-wider text-blue-600 uppercase block">
            Connect With Us
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.3] sm:leading-[1.25]">
            Claim Your Free Consultancy And Start <br className="hidden md:inline" />
            Your <span className="text-[#ff5c3d]">Journey To Success With Us</span>
          </h2>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-[#ff4722] to-[#ff733b] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(255,92,61,0.2)] active:scale-[0.98] transition-all duration-200"
            >
              Get a Free Quote !
            </a>
          </div>

        </div>
      </div>

      {/* --- FLOATING MATRIX KEYFRAME ENGINES --- */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(3px); }
        }
      `}</style>
    </section>
  );
}