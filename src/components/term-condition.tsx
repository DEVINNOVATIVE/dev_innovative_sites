

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { PageHeader } from "@/components/PageHeader";
// import { 
//   FileText, 
//   AlertCircle, 
//   Lock, 
//   Link2, 
//   ShieldCheck, 
//   Scale, 
//   RefreshCw, 
//   Mail, 
//   MapPin,
//   Building2,
//   Calendar,
//   Globe,
//   Sparkles,
//   ArrowRight,
//   ChevronRight,
//   Layers,
//   Cpu,
//   CheckCircle2,
//   Clock,
//   Copy,
//   Check,
//   Printer
// } from "lucide-react";

// const navigationSections = [
//   { id: "general-disclaimer", num: "01", label: "General Website Disclaimer", icon: FileText },
//   { id: "professional-advice", num: "02", label: "No Engineering / Advice", icon: AlertCircle },
//   { id: "software-blockchain", num: "03", label: "Blockchain & Code Disclaimer", icon: Cpu },
//   { id: "intellectual-property", num: "04", label: "Intellectual Property", icon: Lock },
//   { id: "external-links", num: "05", label: "Third-Party Links & Services", icon: Link2 },
//   { id: "liability-limitation", num: "06", label: "Limitation of Liability", icon: ShieldCheck },
//   { id: "indemnification", num: "07", label: "Indemnification", icon: Scale },
//   { id: "governing-law", num: "08", label: "Revisions & Governing Law", icon: RefreshCw },
//   { id: "contact-inquiries", num: "09", label: "Contact & Inquiries", icon: Mail },
// ];

// export default function TermsAndConditions() {
//   const [activeSection, setActiveSection] = useState<string>("general-disclaimer");
//   const [scrollProgress, setScrollProgress] = useState<number>(0);
//   const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

//   // --- 1. Reading Progress Bar & Active Section Scroll-Spy ---
//   useEffect(() => {
//     const handleScroll = () => {
//       const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
//       if (totalScroll > 0) {
//         setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntry = entries.find((entry) => entry.isIntersecting);
//         if (visibleEntry) {
//           setActiveSection(visibleEntry.target.id);
//         }
//       },
//       {
//         rootMargin: "-15% 0px -70% 0px",
//         threshold: 0,
//       }
//     );

//     navigationSections.forEach((section) => {
//       const element = document.getElementById(section.id);
//       if (element) observer.observe(element);
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 90;
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: "smooth",
//       });
//       setActiveSection(id);
//     }
//   };

//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText("Info@devinnovative.com");
//     setCopiedEmail(true);
//     setTimeout(() => setCopiedEmail(false), 2000);
//   };

//   return (
//     <main className="min-h-screen bg-slate-50/70 text-slate-900 font-sans selection:bg-blue-600 selection:text-white relative">
      
//       {/* Top Reading Progress Bar */}
//       <div 
//         className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-[#38bdf8] to-[#ff5733] z-[100] transition-all duration-150 ease-out"
//         style={{ width: `${scrollProgress}%` }}
//       />

//       <PageHeader title="Terms & Conditions" />

//       {/* --- HERO SECTION --- */}
//       <section className="relative border-b border-slate-200/80 bg-white py-14 lg:py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
//         <div className="absolute top-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <div className="flex flex-wrap items-center gap-2.5 mb-5">
//               <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
//                 <Sparkles className="h-3.5 w-3.5 text-[#104cba]" />
//                 <span>Legal Framework</span>
//               </div>
//               <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
//                 <Clock className="h-3.5 w-3.5 text-slate-400" />
//                 <span>5 min read</span>
//               </div>
//             </div>
            
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
//               Terms of Service & <span className="text-[#104cba]">Legal Policy</span>
//             </h1>
            
//             <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
//               These terms define the operating boundaries, intellectual property protections, and service level disclaimers for all users accessing Dev INN systems and codebases.
//             </p>
//           </div>

//           {/* Quick Info Grid */}
//           <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#104cba] border border-blue-100 group-hover:scale-105 transition-transform">
//                 <Calendar className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="text-xs font-medium text-slate-500">Effective Date</p>
//                 <p className="text-sm font-bold text-slate-900">August 17, 2026</p>
//               </div>
//             </div>

//             <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 transition-transform">
//                 <Globe className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="text-xs font-medium text-slate-500">Official Portal</p>
//                 <p className="text-sm font-bold text-slate-900">devinnovative.com</p>
//               </div>
//             </div>

//             <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all hover:border-orange-300 hover:shadow-md">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#ff5733] border border-orange-100 group-hover:scale-105 transition-transform">
//                 <Building2 className="h-5 w-5" />
//               </div>
//               <div>
//                 <p className="text-xs font-medium text-slate-500">Corporate Entity</p>
//                 <p className="text-sm font-bold text-slate-900">Dev Innovative LLC</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CONTENT LAYOUT WITH ENHANCED SIDEBAR --- */}
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          
//           {/* Enhanced Sticky Table of Contents */}
//           <aside className="hidden lg:col-span-4 lg:block">
//             <div className="sticky top-24 space-y-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
//               <div className="flex items-center justify-between pb-4 border-b border-slate-100">
//                 <div className="flex items-center gap-2">
//                   <Layers className="h-4 w-4 text-[#104cba]" />
//                   <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">On This Page</h3>
//                 </div>
//                 <button 
//                   onClick={() => window.print()} 
//                   className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-[#104cba] transition-colors"
//                   title="Print Terms"
//                 >
//                   <Printer className="h-3.5 w-3.5" />
//                   <span>Print</span>
//                 </button>
//               </div>
              
//               <nav className="space-y-1">
//                 {navigationSections.map((section) => {
//                   const Icon = section.icon;
//                   const isActive = activeSection === section.id;
//                   return (
//                     <a
//                       key={section.id}
//                       href={`#${section.id}`}
//                       onClick={(e) => scrollToSection(e, section.id)}
//                       className={`group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 ${
//                         isActive
//                           ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
//                           : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
//                       }`}
//                     >
//                       <span className="flex items-center gap-2.5 truncate">
//                         <span className={`font-mono text-[10px] ${isActive ? "text-blue-200" : "text-slate-400"}`}>
//                           {section.num}
//                         </span>
//                         <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`} />
//                         <span className="truncate">{section.label}</span>
//                       </span>
//                       <ChevronRight className={`h-3.5 w-3.5 transition-transform ${
//                         isActive ? "text-white translate-x-0.5 opacity-100" : "text-slate-300 opacity-0 group-hover:opacity-100"
//                       }`} />
//                     </a>
//                   );
//                 })}
//               </nav>

//               <div className="pt-4 border-t border-slate-100 space-y-2">
//                 <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-100">
//                   <p className="text-xs text-slate-500 font-medium">Quick Legal Inquiry</p>
//                   <div className="mt-2 flex items-center justify-between gap-2">
//                     <span className="text-xs font-bold text-slate-800 truncate">Info@devinnovative.com</span>
//                     <button 
//                       onClick={handleCopyEmail}
//                       className="p-1 rounded-md hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
//                       title="Copy Email"
//                     >
//                       {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Main Legal Clauses */}
//           <div className="space-y-8 lg:col-span-8">
            
//             {/* Section 1 */}
//             <article id="general-disclaimer" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#104cba] border border-blue-100">
//                   <FileText className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#104cba]">Clause 01</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">General Website Disclaimer & Terms of Use</h2>
//                 </div>
//               </div>
//               <p className="text-sm sm:text-base leading-relaxed text-slate-600">
//                 The information provided by Dev Innovative Private Limited and its parent company, Development Innovative LLC (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;), on devinnovative.com (the &quot;Site&quot;) is intended strictly for general informational, educational, and promotional purposes. All information on the Site is provided in good faith; however, we make no representation, warranty, or guarantee of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, performance, or completeness of any information, code, or content published on the Site.
//               </p>
//             </article>

//             {/* Section 2 */}
//             <article id="professional-advice" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
//                   <AlertCircle className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">Clause 02</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">No Professional, Engineering, or Financial Advice</h2>
//                 </div>
//               </div>
              
//               <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
//                 The materials, case studies, software architectures, code snippets, framework designs, and articles provided on this Site do not constitute formal technical, engineering, legal, tax, or financial advice.
//               </p>

//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-5">
//                   <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
//                     <CheckCircle2 className="h-4 w-4 text-[#104cba] shrink-0" />
//                     Architecture Concepts
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//                     Browsing code samples or architectural prototypes does not establish a formal engineering, consulting, or software development agreement.
//                   </p>
//                 </div>

//                 <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-5">
//                   <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
//                     <CheckCircle2 className="h-4 w-4 text-[#104cba] shrink-0" />
//                     No Client Relationship
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
//                     Submitting inquiries does not constitute an engagement. Engagements are governed exclusively by executed Master Services Agreements (MSAs).
//                   </p>
//                 </div>
//               </div>
//             </article>

//             {/* Section 3 */}
//             <article id="software-blockchain" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 border border-purple-100">
//                   <Cpu className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-600">Clause 03</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Software, Blockchain & Cryptocurrency Disclaimer</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
//                 To the extent that this Site references software code, blockchain architecture, smart contracts, Web3 protocols, or algorithmic systems:
//               </p>

//               <div className="space-y-3.5">
//                 <div className="flex gap-4 rounded-xl border border-purple-100 bg-purple-50/40 p-4">
//                   <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">1</span>
//                   <div>
//                     <h4 className="text-sm font-bold text-slate-900">Experimental Technologies</h4>
//                     <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
//                       Blockchain networks and decentralized systems carry inherent technical and regulatory risks. References to tokens or contracts exist solely for architectural demonstrations.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4 rounded-xl border border-purple-100 bg-purple-50/40 p-4">
//                   <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">2</span>
//                   <div>
//                     <h4 className="text-sm font-bold text-slate-900">No Financial Solicitation</h4>
//                     <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
//                       Content does not constitute an offer to trade digital assets or securities. Dev Innovative does not provide financial advice or investment management.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Section 4 */}
//             <article id="intellectual-property" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#104cba] border border-blue-100">
//                   <Lock className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#104cba]">Clause 04</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property & Brand Ownership</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600">
//                 Unless otherwise explicitly indicated, all materials, software code, source files, platform architecture designs, website graphics, branding elements, corporate identity assets, text, and media displayed on devinnovative.com are the exclusive intellectual property of Dev Innovative Private Limited and Development Innovative LLC.
//               </p>

//               <div className="mt-6 rounded-xl border-l-4 border-blue-600 bg-blue-50/40 p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
//                 <strong className="text-slate-900">Strict Prohibition:</strong> You may not copy, reverse-engineer, frame, mirror, or redistribute any proprietary assets from this platform without explicit prior written authorization.
//               </div>
//             </article>

//             {/* Section 5 */}
//             <article id="external-links" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
//                   <Link2 className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-600">Clause 05</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links, Software & External Content</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600">
//                 This Site may contain links to third-party websites, external platforms, open-source repositories, or external content provided solely for convenience. We do not investigate, monitor, verify, or endorse the accuracy, security, or legal compliance of any third-party resources.
//               </p>
//             </article>

//             {/* Section 6 */}
//             <article id="liability-limitation" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
//                   <ShieldCheck className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600">Clause 06</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Limitation of Liability</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
//                 To the maximum extent permitted by applicable law, in no event shall Dev Innovative, its founders, officers, or engineering contractors be liable for any direct, indirect, incidental, or consequential damages resulting from:
//               </p>

//               <ul className="space-y-3 rounded-xl border border-rose-100 bg-rose-50/30 p-5 text-xs sm:text-sm text-slate-700">
//                 <li className="flex items-start gap-3">
//                   <span className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0" />
//                   <span>Your access to, use of, or inability to access or use the platform;</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0" />
//                   <span>Any technical inaccuracies, server interruptions, or code anomalies;</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="h-2 w-2 rounded-full bg-rose-500 mt-2 shrink-0" />
//                   <span>Unauthorized electronic access to or alteration of your data transmissions.</span>
//                 </li>
//               </ul>
//             </article>

//             {/* Section 7 */}
//             <article id="indemnification" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
//                   <Scale className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">Clause 07</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Indemnification</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600">
//                 You agree to defend, indemnify, and hold harmless Dev Innovative and its affiliates from and against any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your misuse of the Site or violation of these Terms.
//               </p>
//             </article>

//             {/* Section 8 */}
//             <article id="governing-law" className="scroll-mt-28 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
//               <div className="flex items-center gap-3.5 mb-5">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
//                   <RefreshCw className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-600">Clause 08</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Revisions & Governing Law</h2>
//                 </div>
//               </div>

//               <p className="text-sm sm:text-base leading-relaxed text-slate-600">
//                 We reserve the right to revise or update this disclaimer at any time without prior notice. Continued use of the Site following updates constitutes explicit acceptance. This document is governed by applicable commercial and statutory laws.
//               </p>
//             </article>

//             {/* Section 9: Executive Contact Box */}
//             <article id="contact-inquiries" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white shadow-xl relative overflow-hidden">
//               <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

//               <div className="flex items-center gap-3.5 mb-6">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20">
//                   <Mail className="h-5 w-5" />
//                 </div>
//                 <div>
//                   <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400">Clause 09</span>
//                   <h2 className="text-xl sm:text-2xl font-bold text-white">Contact & Legal Inquiries</h2>
//                 </div>
//               </div>

//               <p className="text-sm leading-relaxed text-slate-300 mb-8">
//                 For official inquiries regarding this Legal Disclaimer, licensing requests, or formal agreements:
//               </p>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div className="rounded-2xl bg-white/5 p-5 border border-white/10 backdrop-blur-sm">
//                   <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Operating Entity</p>
//                   <p className="mt-1 text-base font-bold text-white">Dev Innovative Private Limited</p>
//                   <p className="text-xs text-slate-400 mt-0.5">Development Innovative LLC</p>
//                 </div>

//                 <div className="rounded-2xl bg-white/5 p-5 border border-white/10 backdrop-blur-sm">
//                   <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Inquiries</p>
//                   <a 
//                     href="mailto:Info@devinnovative.com" 
//                     className="mt-1 inline-flex items-center gap-2 text-base font-bold text-blue-400 hover:text-blue-300 transition-colors"
//                   >
//                     Info@devinnovative.com <ArrowRight className="h-4 w-4" />
//                   </a>
//                 </div>

//                 <div className="sm:col-span-2 rounded-2xl bg-white/5 p-5 border border-white/10 backdrop-blur-sm flex items-start gap-3.5">
//                   <MapPin className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Registered Office</p>
//                     <p className="mt-1 text-sm text-slate-300 leading-relaxed">
//                       Shop 1 & 2 First Floor, Alpha Tower, Business District North, Phase 8 Bahria Town, Rawalpindi, 46000, Pakistan
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Document Revision Note */}
//             {/* <div className="rounded-2xl border border-slate-200/80 bg-white p-5 text-center text-xs text-slate-500 shadow-sm">
//               Last modified on <strong className="text-slate-800">August 17, 2026</strong>. All rights reserved by Dev Innovative.
//             </div> */}

//           </div>
//         </div>
//       </div>

//       {/* --- BOTTOM CTA --- */}
//       <section className="border-t border-slate-200/80 bg-white py-16">
//         <div className="mx-auto max-w-4xl px-4 text-center">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
//             Have Questions About Our Legal Terms?
//           </h2>
//           <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
//             Our engineering desk is available to assist with custom MSAs, SLAs, and technical compliance.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
//             <Link
//               href="/contact-us"
//               className="inline-flex items-center gap-2 rounded-full bg-[#ff5733] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-[#e04826] hover:scale-105"
//             >
//               Get in Touch <ArrowRight className="h-4 w-4" />
//             </Link>
         
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { 
  FileText, 
  AlertCircle, 
  Lock, 
  Link2, 
  ShieldCheck, 
  Scale, 
  RefreshCw, 
  Mail, 
  MapPin,
  Building2,
  Calendar,
  Globe,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Layers,
  Cpu,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  Printer,
  HelpCircle
} from "lucide-react";

const navigationSections = [
  { id: "general-disclaimer", num: "01", label: "General Disclaimer", icon: FileText, tag: "Scope" },
  { id: "professional-advice", num: "02", label: "No Advisory Contract", icon: AlertCircle, tag: "Engineering" },
  { id: "software-blockchain", num: "03", label: "Software & Web3 Protocols", icon: Cpu, tag: "Technology" },
  { id: "intellectual-property", num: "04", label: "Intellectual Property", icon: Lock, tag: "IP Rights" },
  { id: "external-links", num: "05", label: "Third-Party Services", icon: Link2, tag: "External" },
  { id: "liability-limitation", num: "06", label: "Limitation of Liability", icon: ShieldCheck, tag: "Liability" },
  { id: "indemnification", num: "07", label: "Indemnification", icon: Scale, tag: "Legal" },
  { id: "governing-law", num: "08", label: "Jurisdiction & Law", icon: RefreshCw, tag: "Statutory" },
  { id: "contact-inquiries", num: "09", label: "Legal Contacts", icon: Mail, tag: "Support" },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string>("general-disclaimer");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    navigationSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Info@devinnovative.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#104cba] selection:text-white relative">
      
      {/* Top Precision Reading Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#104cba] via-[#38bdf8] to-[#ff5733] z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <PageHeader title="Terms & Conditions" />

      {/* --- HERO HEADER SECTION --- */}
      <section className="relative border-b border-slate-200/80 bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:28px_28px] opacity-70 pointer-events-none" />
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-gradient-to-tr from-orange-100/30 via-slate-50/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">
            
            {/* <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-[#104cba] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#104cba]" />
                Compliance & Legal Governance
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-600">
                <Clock className="h-3.5 w-3.5 text-slate-500" />
                6 min read
              </span>
            </div> */}
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Terms of Service & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#104cba] via-[#0d6efd] to-[#0284c7] bg-clip-text text-transparent">
                Legal Disclaimer
              </span>
            </h1>
            
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              These terms define the operating boundaries, intellectual property protections, service level expectations, and legal liabilities for all users accessing Dev INN codebases, architectures, and digital services.
            </p>
          </div>

          {/* <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#104cba] border border-blue-100 transition-transform group-hover:scale-105">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Effective Date</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">August 17, 2026</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 transition-transform group-hover:scale-105">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Official Portal</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">devinnovative.com</p>
              </div>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#ff5733] border border-orange-100 transition-transform group-hover:scale-105">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Operating Entity</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">Dev Innovative LLC</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* --- CONTENT LAYOUT (items-start ensures sticky behavior works properly) --- */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start relative">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 z-20">
            <div className="max-h-[calc(100vh-7rem)] overflow-y-auto space-y-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#104cba]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Table of Contents</h3>
                </div>
                {/* <button 
                  onClick={() => window.print()} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#104cba] transition-colors rounded-lg px-2 py-1 hover:bg-slate-50"
                  title="Print Terms"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print</span>
                </button> */}
              </div>
              
              {/* Navigation Items */}
              <nav className="space-y-1">
                {navigationSections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[#104cba] text-white shadow-md shadow-blue-500/20 translate-x-1"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span className="flex items-center gap-3 truncate">
                        <span className={`font-mono text-[11px] ${isActive ? "text-blue-200" : "text-slate-400 group-hover:text-slate-500"}`}>
                          {section.num}
                        </span>
                        <Icon className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`} />
                        <span className="truncate">{section.label}</span>
                      </span>
                      
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                      }`}>
                        {section.tag}
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Sidebar Action Widget */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 p-4 border border-blue-100/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <HelpCircle className="h-4 w-4 text-[#104cba]" />
                    <span>Need Custom MSAs or SLAs?</span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">
                    We offer enterprise engineering agreements and tailored intellectual property terms.
                  </p>
                  
                  <div className="mt-3 flex items-center justify-between gap-2 bg-white rounded-xl p-2 border border-slate-200/80 shadow-inner">
                    <span className="text-xs font-bold text-slate-700 truncate pl-1">Info@devinnovative.com</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-[#104cba] transition-colors"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* Main Legal Clauses Stream */}
          <div className="space-y-8 lg:col-span-8">
            
            {/* Clause 01 */}
            <article id="general-disclaimer" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#104cba] border border-blue-100">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#104cba]">Clause 01</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">General Website Disclaimer</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  Site Access
                </span>
              </div>

              <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-600 space-y-4">
                <p>
                  The information provided by Dev Innovative Private Limited and its parent company, Development Innovative LLC (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;), on <strong className="text-slate-900">devinnovative.com</strong> (the &quot;Site&quot;) is intended strictly for general informational, educational, and promotional purposes.
                </p>
                <p>
                  All information on the Site is provided in good faith; however, we make no representation, warranty, or guarantee of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, performance, or completeness of any information, code, or content published on the Site.
                </p>
              </div>

              
            </article>

            {/* Clause 02 */}
            <article id="professional-advice" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600">Clause 02</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">No Engineering or Advisory Contract</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-700">
                  Advisory Disclaimer
                </span>
              </div>
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
                The materials, case studies, software architectures, code snippets, framework designs, and articles provided on this Site do not constitute formal technical, engineering, legal, tax, or financial advice.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 transition-all hover:bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <div className="h-2 w-2 rounded-full bg-[#104cba]" />
                    Technical Architecture
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Browsing code samples or architectural prototypes does not establish a formal engineering, consulting, or software development agreement.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 transition-all hover:bg-slate-50">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                    <div className="h-2 w-2 rounded-full bg-[#104cba]" />
                    Contractual Relationship
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Submitting inquiries does not constitute an engagement. Engagements are governed exclusively by executed Master Services Agreements (MSAs).
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 03 */}
            <article id="software-blockchain" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple-600">Clause 03</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Software, Blockchain & Web3 Disclaimer</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-700">
                  Emerging Tech
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
                To the extent that this Site references software code, blockchain architecture, smart contracts, Web3 protocols, or algorithmic systems:
              </p>

              <div className="space-y-3.5">
                <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/40 p-4.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-xs font-bold text-white shadow-sm">1</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Experimental Technologies</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Blockchain networks and decentralized systems carry inherent technical and regulatory risks. References to tokens or contracts exist solely for architectural demonstrations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-purple-100 bg-purple-50/40 p-4.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-xs font-bold text-white shadow-sm">2</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">No Financial Solicitation</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      Content does not constitute an offer to trade digital assets or securities. Dev Innovative does not provide financial advice or investment management.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Clause 04 */}
            <article id="intellectual-property" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#104cba] border border-blue-100">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#104cba]">Clause 04</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Intellectual Property & Brand Ownership</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  Proprietary Rights
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Unless otherwise explicitly indicated, all materials, software code, source files, platform architecture designs, website graphics, branding elements, corporate identity assets, text, and media displayed on devinnovative.com are the exclusive intellectual property of Dev Innovative Private Limited and Development Innovative LLC.
              </p>

              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50/40 p-5 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-950 font-semibold">Strict Prohibition:</strong> You may not copy, reverse-engineer, frame, mirror, or redistribute any proprietary assets from this platform without explicit prior written authorization from Dev Innovative.
                </div>
              </div>
            </article>

            {/* Clause 05 */}
            <article id="external-links" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-100">
                    <Link2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-600">Clause 05</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Third-Party Links & External Software</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 text-teal-700">
                  Integrations
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                This Site may contain links to third-party websites, external platforms, open-source repositories, or external content provided solely for convenience. We do not investigate, monitor, verify, or endorse the accuracy, security, or legal compliance of any third-party resources.
              </p>
            </article>

            {/* Clause 06 */}
            <article id="liability-limitation" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-100">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-rose-600">Clause 06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-700">
                  Indemnity Limits
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6">
                To the maximum extent permitted by applicable law, in no event shall Dev Innovative, its founders, officers, or engineering contractors be liable for any direct, indirect, incidental, or consequential damages resulting from:
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-rose-50/50 p-4 border border-rose-100 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-rose-950 mb-1">01. Site Outages</div>
                  Your access to, use of, or inability to access or use the platform.
                </div>
                <div className="rounded-2xl bg-rose-50/50 p-4 border border-rose-100 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-rose-950 mb-1">02. Data Anomalies</div>
                  Any technical inaccuracies, server interruptions, or code anomalies.
                </div>
                <div className="rounded-2xl bg-rose-50/50 p-4 border border-rose-100 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-rose-950 mb-1">03. Breaches</div>
                  Unauthorized electronic access or transmission tampering.
                </div>
              </div>
            </article>

            {/* Clause 07 */}
            <article id="indemnification" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-600">Clause 07</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Indemnification</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                  User Obligations
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                You agree to defend, indemnify, and hold harmless Dev Innovative and its affiliates from and against any claims, liabilities, damages, losses, or expenses (including legal fees) arising from your misuse of the Site or violation of these Terms.
              </p>
            </article>

            {/* Clause 08 */}
            <article id="governing-law" className="scroll-mt-28 rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 border border-slate-200">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600">Clause 08</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Revisions & Governing Law</h2>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  Jurisdiction
                </span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                We reserve the right to revise or update this disclaimer at any time without prior notice. Continued use of the Site following updates constitutes explicit acceptance. This document is governed by applicable commercial and statutory laws.
              </p>
            </article>

            {/* Clause 09: Contact Card */}
            <article id="contact-inquiries" className="scroll-mt-28 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-[#070e28] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-400">Clause 09</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Contact & Legal Inquiries</h2>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 mb-8">
                For official inquiries regarding this Legal Disclaimer, licensing requests, or formal Master Service Agreements:
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/10 backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Operating Entity</p>
                  <p className="mt-1 text-base font-bold text-white">Dev Innovative Private Limited</p>
                  <p className="text-xs text-slate-400 mt-0.5">Development Innovative LLC</p>
                </div>

                <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/10 backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Direct Inquiries</p>
                  <a 
                    href="mailto:Info@devinnovative.com" 
                    className="mt-1 inline-flex items-center gap-2 text-base font-bold text-[#38bdf8] hover:text-sky-300 transition-colors"
                  >
                    Info@devinnovative.com <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="sm:col-span-2 rounded-2xl bg-white/[0.04] p-5 border border-white/10 backdrop-blur-md flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-[#ff5733] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Registered Office</p>
                    <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                      Shop 1 & 2 First Floor, Alpha Tower, Business District North, Phase 8 Bahria Town, Rawalpindi, 46000, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </div>

      {/* --- BOTTOM CTA SECTION --- */}
      <section className="border-t border-slate-200/80 bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-50 text-[#ff5733] mb-4 border border-orange-100 shadow-sm">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have Questions About Our Legal Terms?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Our engineering desk is available to assist with custom MSAs, SLAs, and technical compliance.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff5733] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-[#e04826] hover:scale-105"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}