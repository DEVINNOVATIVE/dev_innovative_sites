

// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { 
//   ChevronDown, 
//   Menu, 
//   X, 
//   Plus, 
//   Minus,
//   Code,
//   Server,
//   Smartphone,
//   Cpu,
//   TrendingUp,
//   ShoppingCart,
//   ShieldAlert,
//   BrainCircuit,
//   ArrowRight
// } from "lucide-react";

// import Logo from "@/assets/logo.webp";

// interface NavChild {
//   label: string;
//   href: string;
//   description?: string;
//   icon?: React.ComponentType<{ className?: string }>;
// }

// interface NavItem {
//   label: string;
//   href: string;
//   children?: NavChild[];
// }

// const navItems: NavItem[] = [
//   { label: "Home", href: "/" },
//   {
//     label: "About",
//     href: "/about",
//     children: [
//       { label: "About Us", href: "/about", description: "Learn about our corporate values and engineering history." },
//       { label: "Our Team", href: "/our-team", description: "Meet our professional software architects and data developers." },
//       { label: "Our Portfolio", href: "/our-portfolio", description: "Explore the live platforms and software systems we have built." },
//       { label: "Our Blog", href: "/blog", description: "Weekly tactical tech updates and operational industry analysis." },
//     ],
//   },
//   {
//     label: "Our Services",
//     href: "/service",
//     children: [
//       { label: "Web Development", href: "/service/web-development", description: "Get a better understanding of your traffic", icon: Code },
//       { label: "Web Hosting", href: "/service/web-hosting", description: "Speak directly to your customers", icon: Server },
//       { label: "Application Development", href: "/service/application-development", description: "Your customers' data will be safe and secure", icon: Smartphone },
//       { label: "Artificial Intelligence", href: "/ai-solutions", description: "Automate, predict, and scale with custom AI/ML frameworks", icon: BrainCircuit },
//       { label: "Blockchain Development", href: "/service/blockchain-development", description: "Connect with third-party tools", icon: Cpu },
//       { label: "Digital Marketing", href: "/service/digital-marketing", description: "Build strategic funnels that will convert", icon: TrendingUp },
//       { label: "Ecommerce Development", href: "/service/ecommerce-development", description: "Automated scaling storefront architectures", icon: ShoppingCart },
//       { label: "Cyber Resilience Engineering", href: "/service/cyber-resilience-engineering", description: "Zero-trust system defense logic hardening", icon: ShieldAlert },
//     ],
//   },
//   { label: "Hire Developer", href: "/hire-developer" },
//   { label: "Why Choose Us", href: "/why-choose-us" },
// ];

// export function Header() {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

//   const isActive = (href: string) => pathname === href;
//   const isServiceActive = pathname === "/service" || pathname.startsWith("/service/") || pathname === "/ai-solutions";
//   const isAboutActive = pathname === "/about" || ["/our-team", "/our-portfolio", "/blog"].includes(pathname);

//   const toggleExpand = (label: string) => {
//     setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
//   };

//   return (
//     <header className="sticky top-0 z-[999] w-full bg-[#071033] text-white border-b border-white/[0.04] transition-all duration-300" suppressHydrationWarning>
      
//       {/* Navbar Container */}
//       <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-10">
        
//         {/* Brand Logo */}
//         <Link href="/" className="flex items-center gap-3 shrink-0">
//           <Image src={Logo} alt="DEV INN" className="h-10 w-auto object-contain" priority />
//         </Link>

//         {/* ================= DESKTOP NAVIGATION ================= */}
//         <nav className="hidden items-center gap-1 lg:flex h-full">
//           {navItems.map((item) => {
//             let itemActive = isActive(item.href);
//             if (item.label === "Our Services") itemActive = isServiceActive;
//             if (item.label === "About") itemActive = isAboutActive;

//             const hasChildren = Array.isArray(item.children) && item.children.length > 0;
//             const isServicesDropdown = item.label === "Our Services";

//             return (
//               <div key={item.label} className="relative group flex items-center h-full">
//                 {hasChildren ? (
//                   /* Re-engineered to use Link element tags enabling instant route dispatching on parent click triggers */
//                   <Link
//                     href={item.href}
//                     className={`px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-all inline-flex items-center gap-1.5 rounded-lg cursor-pointer select-none ${
//                       itemActive ? "text-blue-400 bg-white/[0.04]" : "text-white/80 hover:text-white hover:bg-white/[0.03]"
//                     }`}
//                   >
//                     <span>{item.label}</span>
//                     <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" size={14} />
//                   </Link>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-all inline-flex items-center rounded-lg ${
//                       itemActive ? "text-blue-400 bg-white/[0.04]" : "text-white/80 hover:text-white hover:bg-white/[0.03]"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}

//                 {/* Dropdown Menu Panel */}
//                 {hasChildren && (
//                   <div 
//                     className={`absolute top-[calc(100%-4px)] origin-top-left rounded-2xl bg-[#0c194a] text-white p-4 shadow-[0_30px_70px_rgba(3,6,22,0.6)] border border-blue-500/10 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 ${
//                       isServicesDropdown ? "left-1/2 -translate-x-1/2 w-[680px]" : "left-0 w-80"
//                     }`}
//                   >
//                     <div className={`grid gap-1 ${isServicesDropdown ? "grid-cols-2" : "grid-cols-1"}`}>
//                       {item.children!.map((child) => {
//                         const childActive = pathname === child.href;
//                         const IconComponent = child.icon;

//                         return (
//                           <Link
//                             key={child.label}
//                             href={child.href}
//                             className={`flex items-start gap-4 p-3 rounded-xl transition-all text-left ${
//                               childActive 
//                                 ? "bg-white/[0.06] text-blue-400" 
//                                 : "hover:bg-white/[0.03] text-gray-100"
//                             }`}
//                           >
//                             {IconComponent && (
//                               <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 bg-white/[0.04] border border-white/10 text-blue-400 ${
//                                 childActive ? "bg-blue-500 text-white border-blue-400" : ""
//                               }`}>
//                                 <IconComponent className="h-5 w-5" />
//                               </div>
//                             )}

//                             <div className="space-y-0.5">
//                               <div className="text-[15px] font-semibold tracking-tight">
//                                 {child.label}
//                               </div>
//                               {child.description && (
//                                 <p className="text-[13px] font-normal text-slate-400 leading-normal">
//                                   {child.description}
//                                 </p>
//                               )}
//                             </div>
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </nav>

//         {/* Right Side Call To Action Area */}
//         <div className="flex items-center gap-4">
//           <Link
//             href="/contact-us?source=header-cta"
//             className="hidden sm:inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl px-5 py-3 transition-all duration-200 shadow-lg active:scale-[0.98] cursor-pointer"
//             style={{ 
//               backgroundColor: "#ff6036",
//               boxShadow: "0 4px 15px rgba(255, 96, 54, 0.25)"
//             }}
//           >
//             <span>Get in Touch</span>
//             <ArrowRight size={13} />
//           </Link>

//           {/* Mobile Hamburger Trigger */}
//           <button
//             type="button"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.05] transition-all lg:hidden cursor-pointer"
//           >
//             {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
//           </button>
//         </div>

//       </div>

//       {/* ================= MOBILE EXPANSION BLOCK ================= */}
//       <div
//         className={`w-full bg-[#050b24] border-t border-white/[0.02] transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
//           isMobileMenuOpen ? "max-h-[90vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
//         }`}
//       >
//         <div className="px-5 py-5 space-y-1 max-h-[75vh] overflow-y-auto">
//           {navItems.map((item) => {
//             let itemActive = isActive(item.href);
//             if (item.label === "Our Services") itemActive = isServiceActive;
//             if (item.label === "About") itemActive = isAboutActive;

//             const hasChildren = Array.isArray(item.children) && item.children.length > 0;
//             const isExpanded = !!expandedItems[item.label];

//             return (
//               <div key={item.label} className="w-full flex flex-col border-b border-white/[0.02]">
//                 <div className="flex items-center justify-between w-full">
//                   {hasChildren ? (
//                     <button
//                       type="button"
//                       onClick={() => toggleExpand(item.label)}
//                       className={`w-full text-left py-3.5 text-[15px] font-semibold tracking-wide flex items-center justify-between ${
//                         itemActive ? "text-blue-400" : "text-white/80"
//                       }`}
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-white/40 pr-1">
//                         {isExpanded ? <Minus size={15} /> : <Plus size={15} />}
//                       </span>
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className={`w-full py-3.5 text-[15px] font-semibold tracking-wide block ${
//                         itemActive ? "text-blue-400" : "text-white/80"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>

//                 {/* Mobile Accordion Drawer Items */}
//                 {hasChildren && (
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col bg-white/[0.01] rounded-xl border-l-2 border-white/5 ${
//                       isExpanded ? "max-h-[600px] py-2 my-1" : "max-h-0"
//                     }`}
//                   >
//                     {item.children!.map((child) => {
//                       const childActive = pathname === child.href;
//                       return (
//                         <Link
//                           key={child.label}
//                           href={child.href}
//                           className={`block py-2.5 text-[14px] font-medium transition-colors ${
//                             childActive ? "text-blue-400 font-bold" : "text-white/60 hover:text-white"
//                           }`}
//                         >
//                           {child.label}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           <div className="pt-5 sm:hidden">
//             <Link
//               href="/contact-us?source=header-mobile-cta"
//               className="w-full inline-flex bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl py-3.5 text-center"
//             >
//               <span>Get in Touch</span>
//               <ArrowRight size={14} />
//             </Link>
//           </div>
//         </div>
//         <div className="py-4 border-t border-white/[0.03] text-center bg-[#030617]">
//           <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
//             © {new Date().getFullYear()} Dev Inn • Premium Solutions
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Plus, 
  Minus,
  Code,
  Server,
  Smartphone,
  Cpu,
  TrendingUp,
  ShoppingCart,
  ShieldAlert,
  BrainCircuit,
  Layers,
  ArrowRight
} from "lucide-react";

import Logo from "@/assets/logo.webp";

interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Learn about our corporate values and engineering history." },
      { label: "Our Team", href: "/our-team", description: "Meet our professional software architects and data developers." },
      { label: "Our Portfolio", href: "/our-portfolio", description: "Explore the live platforms and software systems we have built." },
      { label: "Our Blog", href: "/blog", description: "Weekly tactical tech updates and operational industry analysis." },
    ],
  },
  {
    label: "Our Services",
    href: "/service",
    children: [
      { label: "Custom Software", href: "/service/custom-software-development", description: "Turn complex business visions into scalable realities", icon: Layers },
      { label: "Web Development", href: "/service/web-development", description: "Get a better understanding of your traffic", icon: Code },
      { label: "Web Hosting", href: "/service/web-hosting", description: "Speak directly to your customers", icon: Server },
      { label: "Application Development", href: "/service/application-development", description: "Your customers' data will be safe and secure", icon: Smartphone },
      { label: "Artificial Intelligence", href: "/service/ai-solutions", description: "Automate, predict, and scale with custom AI/ML frameworks", icon: BrainCircuit },
      { label: "Blockchain Development", href: "/service/blockchain-development", description: "Connect with third-party tools", icon: Cpu },
      { label: "Digital Marketing", href: "/service/digital-marketing", description: "Build strategic funnels that will convert", icon: TrendingUp },
      { label: "Ecommerce Development", href: "/service/ecommerce-development", description: "Automated scaling storefront architectures", icon: ShoppingCart },
      { label: "Cyber Resilience Engineering", href: "/service/cyber-resilience-engineering", description: "Zero-trust system defense logic hardening", icon: ShieldAlert },
    ],
  },
  { label: "Hire Developer", href: "/hire-developer" },
  { label: "Why Choose Us", href: "/why-choose-us" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServiceActive = pathname === "/service" || pathname.startsWith("/service/") || pathname === "/ai-solutions" || pathname === "/custom-software-development";
  const isAboutActive = pathname === "/about" || ["/our-team", "/our-portfolio", "/blog"].includes(pathname);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="sticky top-0 z-[999] w-full bg-[#071033] text-white border-b border-white/[0.04] transition-all duration-300" suppressHydrationWarning>
      
      {/* Navbar Container */}
      <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-10">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src={Logo} alt="DEV INN" className="h-10 w-auto object-contain" priority />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-1 lg:flex h-full">
          {navItems.map((item) => {
            let itemActive = isActive(item.href);
            if (item.label === "Our Services") itemActive = isServiceActive;
            if (item.label === "About") itemActive = isAboutActive;

            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isServicesDropdown = item.label === "Our Services";

            return (
              <div key={item.label} className="relative group flex items-center h-full">
                {hasChildren ? (
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-all inline-flex items-center gap-1.5 rounded-lg cursor-pointer select-none ${
                      itemActive ? "text-blue-400 bg-white/[0.04]" : "text-white/80 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" size={14} />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-all inline-flex items-center rounded-lg ${
                      itemActive ? "text-blue-400 bg-white/[0.04]" : "text-white/80 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu Panel */}
                {hasChildren && (
                  <div 
                    className={`absolute top-[calc(100%-4px)] origin-top-left rounded-2xl bg-[#0c194a] text-white p-4 shadow-[0_30px_70px_rgba(3,6,22,0.6)] border border-blue-500/10 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 ${
                      isServicesDropdown ? "left-1/2 -translate-x-1/2 w-[720px]" : "left-0 w-80"
                    }`}
                  >
                    <div className={`grid gap-1 ${isServicesDropdown ? "grid-cols-2" : "grid-cols-1"}`}>
                      {item.children!.map((child) => {
                        const childActive = pathname === child.href;
                        const IconComponent = child.icon;

                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`flex items-start gap-4 p-3 rounded-xl transition-all text-left ${
                              childActive 
                                ? "bg-white/[0.06] text-blue-400" 
                                : "hover:bg-white/[0.03] text-gray-100"
                            }`}
                          >
                            {IconComponent && (
                              <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 bg-white/[0.04] border border-white/10 text-blue-400 ${
                                childActive ? "bg-blue-500 text-white border-blue-400" : ""
                              }`}>
                                <IconComponent className="h-5 w-5" />
                              </div>
                            )}

                            <div className="space-y-0.5">
                              <div className="text-[15px] font-semibold tracking-tight">
                                {child.label}
                              </div>
                              {child.description && (
                                <p className="text-[13px] font-normal text-slate-400 leading-normal">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side Call To Action Area */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact-us?source=header-cta"
            className="hidden bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] sm:inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl px-5 py-3 transition-all duration-200 shadow-lg active:scale-[0.98] cursor-pointer"
          
          >
            <span>Get in Touch</span>
            <ArrowRight size={13} />
          </Link>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.05] transition-all lg:hidden cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

      </div>

      {/* ================= MOBILE EXPANSION BLOCK ================= */}
      <div
        className={`w-full bg-[#050b24] border-t border-white/[0.02] transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[90vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-5 py-5 space-y-1 max-h-[75vh] overflow-y-auto">
          {navItems.map((item) => {
            let itemActive = isActive(item.href);
            if (item.label === "Our Services") itemActive = isServiceActive;
            if (item.label === "About") itemActive = isAboutActive;

            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isExpanded = !!expandedItems[item.label];

            return (
              <div key={item.label} className="w-full flex flex-col border-b border-white/[0.02]">
                <div className="flex items-center justify-between w-full">
                  {hasChildren ? (
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.label)}
                      className={`w-full text-left py-3.5 text-[15px] font-semibold tracking-wide flex items-center justify-between ${
                        itemActive ? "text-blue-400" : "text-white/80"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-white/40 pr-1">
                        {isExpanded ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`w-full py-3.5 text-[15px] font-semibold tracking-wide block ${
                        itemActive ? "text-blue-400" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>

                {/* Mobile Accordion Drawer Items */}
                {hasChildren && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col bg-white/[0.01] rounded-xl border-l-2 border-white/5 ${
                      isExpanded ? "max-h-[600px] py-2 my-1" : "max-h-0"
                    }`}
                  >
                    {item.children!.map((child) => {
                      const childActive = pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block py-2.5 text-[14px] font-medium transition-colors ${
                            childActive ? "text-blue-400 font-bold" : "text-white/60 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-5 sm:hidden">
            <Link
              href="/contact-us?source=header-mobile-cta"
              className="w-full inline-flex bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl py-3.5 text-center"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="py-4 border-t border-white/[0.03] text-center bg-[#030617]">
          <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
            © {new Date().getFullYear()} Dev Inn • Premium Solutions
          </p>
        </div>
      </div>

    </header>
  );
}