
// import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import "./globals.css";
// // ================= 3. CUSTOM GOOGLE FONT INTEGRATION WITH CSS VARIABLES =================

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // ================= 1. EXPLICIT VIEWPORT OBJECT EXPORT =================
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// // ================= 2. PRODUCTION READY SEO METADATA =================
// export const metadata: Metadata = {
//   title: "Dev innovative - Your Trusted Partner for Software Solutions",
//   description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//   alternates: {
//     canonical: "https://devinnovative.com/",
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
  
//   // OpenGraph Meta (Facebook, LinkedIn sharing optimizations)
//   openGraph: {
//     locale: "en_US",
//     type: "website",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     url: "https://devinnovative.com/",
//     siteName: "Dev iNN | Development Services Provider",
//     images: [
//       {
//         // FIXED ROUTING: Pointed straight to the exposed production public route directory asset
//         url: "https://devinnovative.com/og-banner.png", 
//         width: 1200,
//         height: 630,
//         alt: "Dev innovative Solutions Global Branding Asset",
//       },
//     ],
//   },

//   // Twitter Card Parameters
//   twitter: {
//     card: "summary_large_image",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     // FIXED ROUTING: Same rule applies here
//     images: ["https://devinnovative.com/og-banner.png"], 
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//       suppressHydrationWarning
//     >
//       <body className="min-h-full flex flex-col bg-white text-slate-900" suppressHydrationWarning>
//         <Header />
        
//         <main className="flex-1 w-full flex flex-col">
//           {children}
//         </main>
        
//         <Footer />
//       </body>
//     </html>
//   );
// }

// import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import "./globals.css";

// // ================= 3. CUSTOM GOOGLE FONT INTEGRATION WITH CSS VARIABLES =================
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // ================= 1. EXPLICIT VIEWPORT OBJECT EXPORT =================
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// // ================= 2. PRODUCTION READY SEO METADATA =================
// export const metadata: Metadata = {
//   title: "Dev innovative - Your Trusted Partner for Software Solutions",
//   description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//   alternates: {
//     canonical: "https://devinnovative.com",
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
  
//   // OpenGraph Meta (Facebook, LinkedIn, WhatsApp sharing optimizations)
//   openGraph: {
//     locale: "en_US",
//     type: "website",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     url: "https://devinnovative.com",
//     siteName: "Dev iNN | Development Services Provider",
//     images: [
//       {
//         url: "https://devinnovative.com/og-banner.png", 
//         width: 1200,
//         height: 630,
//         alt: "Dev innovative Solutions Global Branding Asset",
//       },
//     ],
//   },

//   // Twitter Card Parameters
//   twitter: {
//     card: "summary_large_image",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     images: ["https://devinnovative.com/og-banner.png"], 
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//       suppressHydrationWarning
//     >
//       <body className="min-h-full flex flex-col bg-white text-slate-900" suppressHydrationWarning>
//         <Header />
        
//         <main className="flex-1 w-full flex flex-col">
//           {children}
//         </main>
        
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

// ================= FONT INTEGRATION =================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ================= VIEWPORT OBJECT =================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ================= PRODUCTION READY SEO METADATA =================
// export const metadata: Metadata = {
//   title: "Dev innovative - Your Trusted Partner for Software Solutions",
//   description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//   alternates: {
//     canonical: "https://devinnovative.com",
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   openGraph: {
//     locale: "en_US",
//     type: "website",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     url: "https://devinnovative.com",
//     siteName: "Dev iNN | Development Services Provider",
//     images: [
//       {
//         url: "https://devinnovative.com/og-banner.png", 
//         width: 1200,
//         height: 630,
//         alt: "Dev innovative Solutions Global Branding Asset",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Dev innovative - Your Trusted Partner for Software Solutions",
//     description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
//     images: ["https://devinnovative.com/og-banner.png"], 
//   },
// };
// ================= PRODUCTION READY SEO METADATA =================
export const metadata: Metadata = {
  title: "Dev innovative - Your Trusted Partner for Software Solutions",
  description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
  alternates: {
    canonical: "https://devinnovative.com",
  },
  
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Dev innovative - Your Trusted Partner for Software Solutions",
    description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
    url: "https://devinnovative.com",
    siteName: "Dev iNN | Development Services Provider",
    images: [
      {
        // Added ?v=1 to break old image cache logs across messaging platforms
        url: "https://devinnovative.com/og-banner.png?v=1", 
        width: 1200,
        height: 630,
        alt: "Dev innovative Solutions Global Branding Asset",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dev innovative - Your Trusted Partner for Software Solutions",
    description: "Transform your business with Dev innovative, Specializing in software web, mobile app dev, blockchain, AI, & cloud solutions... Contact us",
    // Added ?v=1 here as well
    images: ["https://devinnovative.com/og-banner.png?v=1"], 
  },
};

// ================= SCHEMA.ORG RICH TEXT (JSON-LD Organization) =================
const getStructuredData = () => {
  const structuredDataMatrix = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dev innovative",
    "alternateName": "Dev iNN | Solutions Global",
    "url": "https://devinnovative.com",
    "logo": "https://devinnovative.com/logo.webp", 
    "sameAs": [
      "https://github.com/DEVINNOVATIVE",
      "https://x.com/Devvinnovative",
      "https://www.linkedin.com/company/dev-innovative",
      "https://www.instagram.com/devinnovative"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 267-4506",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "description": "Dev iNN Web Solutions is an established web development company delivering web development services of any complexity to clients worldwide."
  };
  return JSON.stringify(structuredDataMatrix);
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ================= JSON-LD Rich Text structured data integration ================= */}
        <Script
          id="schema-org-structured-data"
          type="application/ld+json"
          strategy="afterInteractive" 
          dangerouslySetInnerHTML={{ __html: getStructuredData() }} 
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900" suppressHydrationWarning>
        <Header />
        
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}