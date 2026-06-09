"use client";

import Image from "next/image";
import { Send } from "lucide-react";

// Assuming you have your logo in assets folder
import Logo from "@/assets/logo.webp"; 
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-transparent text-white font-sans">
      
      {/* --- 1. TOP CURVED WAVE SEPARATOR --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[-99%] select-none pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[90px] text-[#22178f]"
          fill="currentColor"
        >
          <path d="M0,32 C300,110 600,10 900,110 L1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* --- MAIN FOOTER CANVAS CONTEXT --- */}
      <div className="bg-gradient-to-b from-[#22178f] via-[#0d4ec4] to-[#0a3ca1] pb-14 pt-10">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          
          {/* --- 2. FOUR-COLUMN GRID STRUCTURE --- */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 pb-20 pt-8">
            
            {/* Column 1: Brand & Socials */}
            <div className="space-y-8 lg:col-span-4">
              <div className="flex items-center gap-4">
                <Image src={Logo} alt="DEV INN" className="h-10 w-auto" priority />
              </div>
              
              <p className="text-[15px] leading-7 text-slate-200/85 font-medium max-w-md">
                Dev iNN Web Solutions is an established web development company delivering web development services of any complexity to clients worldwide.
              </p>

              <div className="space-y-4">
                <h4 className="text-base font-extrabold tracking-wider uppercase text-slate-100">Follow Us</h4>
                <div className="flex items-center gap-3.5">
                  
                  {/* GitHub SVG Replacing Facebook */}
                  <a 
                    href="https://github.com/DEVINNOVATIVE" 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    className="flex h-10 h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-[#24292e] hover:border-[#24292e] transition-all duration-200 group" 
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 fill-current text-slate-200 group-hover:text-white" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>

                  {/* Twitter / X SVG */}
                  <a href="https://x.com/Devvinnovative" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-[#00aeef] hover:border-[#00aeef] transition-all duration-200 group" aria-label="Twitter">
                    <svg className="w-5 h-5 fill-current text-slate-200 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn SVG */}
                  <a href="https://www.linkedin.com/company/dev-innovative/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-200 group" aria-label="LinkedIn">
                    <svg className="w-5 h-5 fill-current text-slate-200 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>

                  {/* Instagram SVG */}
                  <a href="https://www.instagram.com/devinnovative/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10 hover:bg-[#d6244f] hover:border-[#d6244f] transition-all duration-200 group" aria-label="Instagram">
                    <svg className="w-5 h-5 fill-current text-slate-200 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-5 lg:col-span-2 lg:pl-6">
              <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">Quick Links</h3>
              <ul className="space-y-4 text-[15px] font-semibold text-slate-200/95">
                <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link href="/service/web-development" className="hover:text-orange-400 transition-colors">Services</Link></li>
                <li><Link href="/contact-us" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Us Details */}
            <div className="space-y-5 lg:col-span-3">
              <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">Contact Us</h3>
              <ul className="space-y-4 text-[15px] text-slate-200/95 font-medium leading-relaxed">
                <li className="max-w-[260px]">
                  2020 N Academy Blvd, Colorado Springs, 80909 United States
                </li>
                <li>
                  <span className="hover:underline hover:text-orange-400 block transition-colors">
                    Info@devinnovative.com
                  </span>
                </li>
                <li>
                  <span  className="hover:underline hover:text-orange-400 block transition-colors">
                    +1 (689) 267-4506
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter Box */}
            <div className="space-y-5 lg:col-span-3">
              <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">Subscribe</h3>
              <p className="text-[15px] leading-7 text-slate-200/85 font-medium">
                Follow our newsletter to stay updated about us.
              </p>
              <form className="relative w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full rounded-lg bg-white px-5 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:ring-2 focus:ring-orange-400 font-medium shadow-inner"
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-[#ff5c3d] transition-colors"
                  aria-label="Submit newsletter subscription"
                >
                  <Send className="h-[18px] w-[18px] transform rotate-45" />
                </button>
              </form>
            </div>

          </div>

          {/* --- 3. BOTTOM BOUNDARY FOOTER STRIP --- */}
          <div className="relative mt-4 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[13px] text-slate-300/85 font-medium text-center md:text-left w-full">
              © {new Date().getFullYear()} Dev iNN. All Rights Reserved.
            </p>

            {/* --- 4. FLOATING WHATSAPP CHAT WIDGET --- */}
            <a 
              href="https://wa.me/16892674506" 
              target="_blank" 
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-[1.04] hover:bg-[#20ba5a] group shrink-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.239 3.482 8.415-.004 6.613-5.34 11.963-11.91 11.963-1.993-.001-3.951-.5-5.688-1.448L0 24zm6.59-4.846c1.656.982 3.511 1.5 5.409 1.512 5.517 0 10.01-4.496 10.014-10.02.002-2.673-1.04-5.184-2.934-7.078-1.892-1.893-4.404-2.934-7.082-2.936-5.521 0-10.015 4.497-10.019 10.02-.001 1.897.501 3.75 1.453 5.391L1.416 21.8l4.23-1.111-.001.001z"/>
              </svg>
              <span>Have a Question? Chat with Us</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}