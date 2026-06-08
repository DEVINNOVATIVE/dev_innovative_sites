// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { ChevronDown } from "lucide-react";

// import Logo from "@/assets/logo.webp";
// // social icons removed (not used in condensed header)

// const navItems = [
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
//     icon: ChevronDown,
//     children: [
//       { label: "Web Development", href: "/service/web-development" },
//       { label: "Web Hosting", href: "/service/web-hosting" },
//       { label: "Application Development", href: "/service/application-development" },
//       { label: "Blockchain Development", href: "/service/blockchain-development" },
//       { label: "Digital Marketing", href: "/service/digital-marketing" },
//       { label: "Ecommerce Development", href: "/service/ecommerce-development" },
//     ],
//   },
//     { label: "Hire Developer", href: "/hire-developer" },
//   { label: "Why Choose Us", href: "/why-choose-us" },
//   { label: "Contact Us", href: "/contact" },
// ];

// export function Header() {
//   const pathname = usePathname();

//   const isActive = (href: string) => pathname === href;

//   const isServiceActive =
//     pathname === "/service" || pathname.startsWith("/service/");

//   return (
//     <header className="sticky top-0 z-60 bg-[#0b1230] text-white" suppressHydrationWarning>
//       <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-2 sm:px-8 lg:px-10">
//         <Link href="/" className="flex items-center gap-3">
//           <Image src={Logo} alt="DEV INN" className="h-10 w-auto" priority />
//         </Link>

//         <nav className="hidden items-center gap-6 lg:flex">
//           {navItems.map((item) => {
//             const itemActive = item.label === "Our Services" ? isServiceActive : isActive(item.href);
//             const hasChildren = Array.isArray(item.children) && item.children.length > 0;

//             return (
//               <div key={item.label} className="relative group">
//                 <Link
//                   href={item.href}
//                   className={
//                     itemActive
//                       ? "px-4 py-2 text-lg font-semibold text-white/100 inline-flex items-center gap-2"
//                       : "px-4 py-2 text-lg font-semibold text-white/80 hover:text-white inline-flex items-center gap-2"
//                   }
//                 >
//                   <span>{item.label}</span>
//                   {hasChildren ? <ChevronDown className="ml-1" size={14} /> : null}
//                 </Link>

//                 {hasChildren && (
//                   <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto z-50">
//                     <div className="py-2">
//                       {item.children!.map((child) => {
//                         const childActive = pathname === child.href;
//                         return (
//                           <Link
//                             key={child.label}
//                             href={child.href}
//                             className={
//                               childActive
//                                 ? "block px-4 py-3 text-sm text-blue-600 underline font-medium"
//                                 : "block px-4 py-3 text-sm text-black hover:text-blue-600 hover:bg-gray-50"
//                             }
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

    
//       </div>
//     </header>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";

import Logo from "@/assets/logo.webp";

interface NavChild {
  label: string;
  href: string;
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
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/our-team" },
      { label: "Our Portfolio", href: "/our-portfolio" },
      { label: "Our Blog", href: "/blog" },
    ],
  },
  {
    label: "Our Services",
    href: "/service",
    children: [
      { label: "Web Development", href: "/service/web-development" },
      { label: "Web Hosting", href: "/service/web-hosting" },
      { label: "Application Development", href: "/service/application-development" },
      { label: "Blockchain Development", href: "/service/blockchain-development" },
      { label: "Digital Marketing", href: "/service/digital-marketing" },
      { label: "Ecommerce Development", href: "/service/ecommerce-development" },
    ],
  },
  { label: "Hire Developer", href: "/hire-developer" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Automatically close menu when path shifts
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
    /* 
      BULLETPROOF SOLUTION: 
      Removed 'overflow-hidden' and fixed height limits. On mobile devices, 
      the header expands vertically directly inside the document flow. 
      Touch coords map natively, meaning mobile Chrome can never block clicks.
    */
    <header className="sticky top-0 z-[999] w-full bg-[#0b1230] text-white border-b border-white/[0.04] transition-all duration-300" suppressHydrationWarning>
      
      {/* Upper Main Row Brand Line */}
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-10">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="DEV INN" className="h-10 w-auto object-contain" priority />
        </Link>

        {/* ================= DESKTOP NAVIGATION VIEWPORT ================= */}
        <nav className="hidden items-center gap-2 lg:flex h-full">
          {navItems.map((item) => {
            let itemActive = isActive(item.href);
            if (item.label === "Our Services") itemActive = isServiceActive;
            if (item.label === "About") itemActive = isAboutActive;

            const hasChildren = Array.isArray(item.children) && item.children.length > 0;

            return (
              <div key={item.label} className="relative group flex items-center h-full">
                {hasChildren ? (
                  <div
                    className={`px-4 py-2 text-[15px] font-bold tracking-wide transition-colors inline-flex items-center gap-1.5 rounded-lg cursor-pointer ${
                      itemActive ? "text-blue-400 bg-white/[0.03]" : "text-white/80 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="transition-transform duration-300 group-hover:rotate-180 text-white/40 group-hover:text-white" size={14} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-[15px] font-bold tracking-wide transition-colors inline-flex items-center gap-1.5 rounded-lg ${
                      itemActive ? "text-blue-400 bg-white/[0.03]" : "text-white/80 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Desktop dropdown menus */}
                {hasChildren && (
                  <div className="absolute left-0 top-[calc(100%-8px)] w-60 origin-top-left rounded-2xl bg-white text-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-neutral-100 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                    <div className="flex flex-col space-y-0.5">
                      {item.children!.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-[14px] font-bold rounded-xl transition-all ${
                              childActive ? "text-blue-600 bg-blue-50/60" : "text-neutral-600 hover:text-blue-600 hover:bg-neutral-50"
                            }`}
                          >
                            {child.label}
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

        {/* ================= HAMBURGER MENU TRIGGER ================= */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle structural menu"
          className="inline-flex items-center justify-center p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.05] transition-all lg:hidden cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* ================= NATIVE ACCORDION EXPANSION BLOCK ================= */}
      {/* 
        This is the alternative layout container built natively for mobile. 
        It scales height up smoothly right below the logo line without using 
        fixed viewports, completely evading any mobile browser click bugs.
      */}
      <div
        className={`w-full bg-[#090f29] border-t border-white/[0.02] transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
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
                      className={`w-full text-left py-3.5 text-[15px] font-bold tracking-wide flex items-center justify-between ${
                        itemActive ? "text-blue-400" : "text-white/80"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-white/40 pr-1">
                        {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`w-full py-3.5 text-[15px] font-bold tracking-wide block ${
                        itemActive ? "text-blue-400" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>

                {/* Mobile Sub-Children Accordion Dropdown Links */}
                {hasChildren && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col bg-white/[0.01] rounded-xl border-l-2 border-white/5 ${
                      isExpanded ? "max-h-[340px] py-2 my-1" : "max-h-0"
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
        </div>

        {/* Small branding footer inside the drop down accordion layout */}
        <div className="py-4 border-t border-white/[0.03] text-center bg-[#070c22]">
          <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
            © {new Date().getFullYear()} Dev Inn • Premium Solutions
          </p>
        </div>
      </div>

    </header>
    //
  );
}