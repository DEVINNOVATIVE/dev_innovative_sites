"use client";

import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation"; // Verify your folder path structure

// Dynamic images fetched directly from your local assets path directory
import leaderImg from "@/assets/about/blockChain.jpeg"; // Big main highlighted team member
import member1 from "@/assets/about/ceo.jpeg";
import member2 from "@/assets/about/cofounder.png";
import member3 from "@/assets/about/ux.png";

const teamData = [
  {
    name: "Habib Rehman",
    role: "Ceo & Founder",
    image: member1,
  },
  {
    name: "Neil Gibson",
    role: "Co-Founder & CMO",
    image: member2,
  },
  {
    name: "Abdullah",
    role: "Graphic Web Designer",
    image: member3,
  },
];

export function OurTeam() {
  return (
    <section className="relative bg-white text-slate-900 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px]">
        
        {/* --- HEADER TITLE ZONE --- */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <RevealAnimation direction="down" duration={1.0} delay={0.0} offset={25} animationType="from">
            <span className="text-lg font-bold text-[#104cba] tracking-widest uppercase block">
              Team Member
            </span>
          </RevealAnimation>
          
          <RevealAnimation direction="down" duration={1.1} delay={0.12} offset={30} animationType="from">
            <h2 className="text-3xl font-bold tracking-tight text-[#08112a] sm:text-4xl leading-tight">
              Our Proficient Team
            </h2>
          </RevealAnimation>
        </div>

        {/* --- 1. MAIN FEATURED LEADER (1st Member) --- */}
        <div className="flex justify-center mb-16">
          <RevealAnimation direction="up" duration={1.2} delay={0.2} offset={40} animationType="from">
            <div className="group relative w-[380px] h-[380px] rounded-full bg-[#fefe43] overflow-hidden shadow-lg border-4 border-white transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <Image
                src={leaderImg}
                alt="Habib Rehman - CEO & Founder"
                fill
                className="object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-110"
                priority
              />
              
              {/* SLIDE UP OVERLAY */}
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 p-6 text-center">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Mohsin Ali Solangi
                </h3>
                <p className="text-sm font-bold text-orange-400 tracking-widest uppercase mt-2">
                  Blockchain Developer
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* --- 2. LOWER ROW GRID MAPPING (Remaining 3 Members) --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
          {teamData.map((member, index) => (
            <RevealAnimation
              key={member.name}
              direction="up"
              duration={1.0}
              delay={0.3 + index * 0.12}
              offset={45}
              animationType="from"
            >
              {/* Box framing utilizing image_f5ef58 layout styling rules */}
              <div className="group relative w-full aspect-square max-w-[340px] mx-auto overflow-hidden rounded-xl bg-slate-50 border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* SLIDE UP OVERLAY */}
                <div className="absolute inset-0 bg-black/95 flex flex-col items-center justify-center opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 p-6 text-center">
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-orange-400 tracking-widest uppercase mt-1.5">
                    {member.role}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}