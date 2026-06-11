
// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

// import Logo from "@/assets/logo.webp";

// interface NavChild {
//   label: string;
//   href: string;
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
//       { label: "About Us", href: "/about" },
//       { label: "Our Team", href: "/our-team" },
//       { label: "Our Portfolio", href: "/our-portfolio" },
//       { label: "Our Blog", href: "/blog" },
//     ],
//   },
//   {
//     label: "Our Services",
//     href: "/service",
//     children: [
//       { label: "Web Development", href: "/service/web-development" },
//       { label: "Web Hosting", href: "/service/web-hosting" },
//       { label: "Application Development", href: "/service/application-development" },
//       { label: "Blockchain Development", href: "/service/blockchain-development" },
//       { label: "Digital Marketing", href: "/service/digital-marketing" },
//       { label: "Ecommerce Development", href: "/service/ecommerce-development" },
//       { label: "Cyber Resilience Engineering", href: "/service/cyber-resilience-engineering" },
//     ],
//   },
//   { label: "Hire Developer", href: "/hire-developer" },
//   { label: "Why Choose Us", href: "/why-choose-us" },
//   { label: "Contact Us", href: "/contact-us" },
// ];

// export function Header() {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

//   // Automatically close menu when path shifts
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

//   const isActive = (href: string) => pathname === href;
//   const isServiceActive = pathname === "/service" || pathname.startsWith("/service/");
//   const isAboutActive = pathname === "/about" || ["/our-team", "/our-portfolio", "/blog"].includes(pathname);

//   const toggleExpand = (label: string) => {
//     setExpandedItems((prev) => ({ ...prev, [label]: !prev[label] }));
//   };

//   return (
//     /* 
//       BULLETPROOF SOLUTION: 
//       Removed 'overflow-hidden' and fixed height limits. On mobile devices, 
//       the header expands vertically directly inside the document flow. 
//       Touch coords map natively, meaning mobile Chrome can never block clicks.
//     */
//     <header className="sticky top-0 z-[999] w-full bg-[#071033] text-white   transition-all duration-300" suppressHydrationWarning>
      
//       {/* Upper Main Row Brand Line */}
//       <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-10">
        
//         {/* Brand Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <Image src={Logo} alt="DEV INN" className="h-10 w-auto object-contain" priority />
//         </Link>

//         {/* ================= DESKTOP NAVIGATION VIEWPORT ================= */}
//         <nav className="hidden items-center gap-2 lg:flex h-full">
//           {navItems.map((item) => {
//             let itemActive = isActive(item.href);
//             if (item.label === "Our Services") itemActive = isServiceActive;
//             if (item.label === "About") itemActive = isAboutActive;

//             const hasChildren = Array.isArray(item.children) && item.children.length > 0;

//             return (
//               <div key={item.label} className="relative group flex items-center h-full">
//                 {hasChildren ? (
//                   <div
//                     className={`px-4 py-2 text-base font-bold tracking-wide transition-colors inline-flex items-center gap-1.5 rounded-lg cursor-pointer ${
//                       itemActive ? "text-blue-400 bg-white/[0.03]" : "text-white/80 hover:text-white hover:bg-white/[0.02]"
//                     }`}
//                   >
//                     <span>{item.label}</span>
//                     <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" size={14} />
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`px-4 py-2 text-base font-bold tracking-wide transition-colors inline-flex items-center gap-1.5 rounded-lg ${
//                       itemActive ? "text-blue-400 bg-white/[0.03]" : "text-white/80 hover:text-white hover:bg-white/[0.02]"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 )}

//                 {/* Desktop dropdown menus */}
//                 {hasChildren && (
//                   <div className="absolute left-0 top-[calc(100%-8px)] w-60 origin-top-left rounded-2xl bg-white text-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-neutral-100 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
//                     <div className="flex flex-col space-y-0.5">
//                       {item.children!.map((child) => {
//                         const childActive = pathname === child.href;
//                         return (
//                           <Link
//                             key={child.label}
//                             href={child.href}
//                             className={`block px-4 py-2.5 text-nowrap text-[15px] font-bold rounded-xl transition-all ${
//                               childActive ? "text-blue-600 bg-blue-50/60" : "text-neutral-600 hover:text-blue-600 hover:bg-neutral-50"
//                             }`}
//                           >
//                             {child.label}
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

//         {/* ================= HAMBURGER MENU TRIGGER ================= */}
//         <button
//           type="button"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle structural menu"
//           className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.05] transition-all lg:hidden cursor-pointer"
//         >
//           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//       </div>

//       {/* ================= NATIVE ACCORDION EXPANSION BLOCK ================= */}
//       {/* 
//         This is the alternative layout container built natively for mobile. 
//         It scales height up smoothly right below the logo line without using 
//         fixed viewports, completely evading any mobile browser click bugs.
//       */}
//       <div
//         className={`w-full bg-[#090f29] border-t border-white/[0.02] transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
//           isMobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
//         }`}
//       >
//         <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
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
//                       className={`w-full text-left py-3.5 text-[15px] font-bold tracking-wide flex items-center justify-between ${
//                         itemActive ? "text-blue-400" : "text-white/80"
//                       }`}
//                     >
//                       <span>{item.label}</span>
//                       <span className="text-white/40 pr-1">
//                         {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
//                       </span>
//                     </button>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className={`w-full py-3.5 text-[15px] font-bold tracking-wide block ${
//                         itemActive ? "text-blue-400" : "text-white/80"
//                       }`}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>

//                 {/* Mobile Sub-Children Accordion Dropdown Links */}
//                 {hasChildren && (
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col bg-white/[0.01] rounded-xl border-l-2 border-white/5 ${
//                       isExpanded ? "max-h-[340px] py-2 my-1" : "max-h-0"
//                     }`}
//                   >
//                     {item.children!.map((child) => {
//                       const childActive = pathname === child.href;
//                       return (
//                         <Link
//                           key={child.label}
//                           href={child.href}
//                           className={`block py-2.5 text-[15px] font-medium transition-colors ${
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
//         </div>

//         {/* Small branding footer inside the drop down accordion layout */}
//         <div className="py-4 border-t border-white/[0.03] text-center bg-[#070c22]">
//           <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
//             © {new Date().getFullYear()} Dev Inn • Premium Solutions
//           </p>
//         </div>
//       </div>

//     </header>
//     //
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
      { label: "Web Development", href: "/service/web-development", description: "Get a better understanding of your traffic", icon: Code },
      { label: "Web Hosting", href: "/service/web-hosting", description: "Speak directly to your customers", icon: Server },
      { label: "Application Development", href: "/service/application-development", description: "Your customers' data will be safe and secure", icon: Smartphone },
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
  const isServiceActive = pathname === "/service" || pathname.startsWith("/service/");
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
                  <div
                    className={`px-3.5 py-2 text-[15px] font-semibold tracking-wide transition-all inline-flex items-center gap-1.5 rounded-lg cursor-pointer select-none ${
                      itemActive ? "text-blue-400 bg-white/[0.04]" : "text-white/80 hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" size={14} />
                  </div>
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

                {/* Dropdown Menu Panel (Color-matched to #071033 with an elevated tone) */}
                {hasChildren && (
                  <div 
                    className={`absolute top-[calc(100%-4px)] origin-top-left rounded-2xl bg-[#0c194a] text-white p-4 shadow-[0_30px_70px_rgba(3,6,22,0.6)] border border-blue-500/10 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-50 ${
                      isServicesDropdown ? "left-1/2 -translate-x-1/4 w-[600px]" : "left-0 w-80"
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
                            {/* Icon Frame Styling from image_2ddf04.png */}
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
            className="hidden sm:inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl px-5 py-3 transition-all duration-200 shadow-lg active:scale-[0.98] cursor-pointer"
            style={{ 
              backgroundColor: "#ff6036",
              boxShadow: "0 4px 15px rgba(255, 96, 54, 0.25)"
            }}
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
                      isExpanded ? "max-h-[500px] py-2 my-1" : "max-h-0"
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
              className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider text-white uppercase rounded-xl py-3.5 text-center"
              style={{ backgroundColor: "#ff6036" }}
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