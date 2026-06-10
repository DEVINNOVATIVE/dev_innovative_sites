

// "use client";

// import React, { useState, useRef } from "react";
// import { Send, Loader2 } from "lucide-react";
// import ReCAPTCHA from "react-google-recaptcha";
// import RevealAnimation from "./animation/RevealAnimation";
// import { sendContactEmail } from "@/app/action/sendEmail"; // Adjust path based on your folder structure

// interface ContactFormCardProps {
//   title?: string;
//   badgeText?: string;
//   showLiveIndicator?: boolean;
// }

// export function ContactFormCard({
//   title = "Our Dedication Is To Exceed Our Clients' Expectations !",
//   badgeText = "Need Assistance",
//   showLiveIndicator = true,
// }: ContactFormCardProps) {
//   const [isPending, setIsPending] = useState(false);
//   const [formFeedback, setFormFeedback] = useState<{ success: boolean; message: string } | null>(null);
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  
//   const recaptchaRef = useRef<ReCAPTCHA>(null);

//   const handleCaptchaChange = (token: string | null) => {
//     setCaptchaToken(token);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!captchaToken) {
//       setFormFeedback({ success: false, message: "Please complete the reCAPTCHA challenge." });
//       return;
//     }

//     setIsPending(true);
//     setFormFeedback(null);

//     const targetForm = e.currentTarget;
//     const rawFormData = new FormData(targetForm);
    
//     // Append the token manually so it gets safely intercepted by the backend action parameter array
//     rawFormData.append("g-recaptcha-response", captchaToken);

//     try {
//       const result = await sendContactEmail(rawFormData);
//       setFormFeedback(result);
      
//       if (result.success) {
//         targetForm.reset(); 
//         recaptchaRef.current?.reset(); // Clear reCAPTCHA token visually on success
//         setCaptchaToken(null);
//       }
//     } catch (err) {
//       setFormFeedback({ success: false, message: "An unexpected connection error occurred." });
//     } finally {
//       setIsPending(false);
//     }
//   };

//   return (
//     <div className="w-full bg-white border border-neutral-200/60 rounded-3xl p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-neutral-300/60 transition-colors duration-500">
      
//       {/* ================= FORM HEADER ================= */}
//       <div className="space-y-3 mb-8 text-left">
//         {badgeText && (
//           <ConditionalReveal direction="down" duration={0.8} delay={0.1} offset={15} animationType="from">
//             <div className="flex items-center gap-2">
//               <span className="tracking-wider text-lg font-bold text-[#104cba] uppercase block">
//                 {badgeText}
//               </span>
//               {showLiveIndicator && (
//                 <div className="h-2 w-2 rounded-full bg-[#ff4b2b] animate-pulse" />
//               )}
//             </div>
//           </ConditionalReveal>
//         )}

//         <ConditionalReveal direction="right" duration={1.0} delay={0.15} offset={25} animationType="from">
//           <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a] leading-tight">
//             {title}
//           </h3>
//         </ConditionalReveal>
//       </div>

//       {/* ================= INTERACTIVE FORM INPUTS ================= */}
//       <form className="space-y-5" onSubmit={handleSubmit}>
        
//         {/* Name Field */}
//         <ConditionalReveal direction="up" duration={0.9} delay={0.2} offset={15} animationType="from">
//           <div className="relative w-full">
//             <input
//               type="text"
//               name="name"
//               required
//               disabled={isPending}
//               placeholder="Your Name*"
//               className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
//             />
//           </div>
//         </ConditionalReveal>

//         {/* Email Field */}
//         <ConditionalReveal direction="up" duration={0.9} delay={0.25} offset={15} animationType="from">
//           <div className="relative w-full">
//             <input
//               type="email"
//               name="email"
//               required
//               disabled={isPending}
//               placeholder="Your Email*"
//               className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
//             />
//           </div>
//         </ConditionalReveal>

//         {/* Phone No Field */}
//         <ConditionalReveal direction="up" duration={0.9} delay={0.3} offset={15} animationType="from">
//           <div className="relative w-full">
//             <input
//               type="tel"
//               name="phone"
//               required
//               disabled={isPending}
//               placeholder="Phone No*"
//               className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
//             />
//           </div>
//         </ConditionalReveal>

//         {/* Message TextArea Box */}
//         <ConditionalReveal direction="up" duration={0.9} delay={0.35} offset={15} animationType="from">
//           <div className="relative w-full">
//             <textarea
//               name="message"
//               rows={4}
//               required
//               disabled={isPending}
//               placeholder="Message*"
//               className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 resize-none min-h-[100px] disabled:opacity-60 disabled:cursor-not-allowed"
//             />
//           </div>
//         </ConditionalReveal>

//         {/* Google reCAPTCHA Render Layer Anchor Box */}
//         <ConditionalReveal direction="up" duration={0.9} delay={0.38} offset={10} animationType="from">
//           <div className="w-full flex justify-start overflow-x-auto py-1">
          
//             <ReCAPTCHA
//               ref={recaptchaRef}
//               sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
//               onChange={handleCaptchaChange}
//             />
//           </div>
//         </ConditionalReveal>

//         {/* Feedback Alert Status Logs */}
//         {formFeedback && (
//           <div
//             className={`text-sm p-4 rounded-xl font-medium transition-all duration-300 text-left ${
//               formFeedback.success
//                 ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
//                 : "bg-rose-50 text-rose-700 border border-rose-100"
//             }`}
//           >
//             {formFeedback.message}
//           </div>
//         )}

//         {/* Submit Call-To-Action Button */}
//         <ConditionalReveal direction="up" duration={1.0} delay={0.4} offset={15} animationType="from">
//           <div className="pt-2 text-left">
//             <button
//               type="submit"
//               disabled={isPending}
//               className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-[14px] shadow-[0_6px_20px_rgba(255,75,43,0.15)] hover:shadow-[0_10px_28px_rgba(255,75,43,0.25)] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
//               style={{
//                 background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
//               }}
//             >
//               {isPending ? (
//                 <>
//                   <span>Sending...</span>
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                 </>
//               ) : (
//                 <>
//                   <span>Contact Us</span>
//                   <Send className="h-3.5 w-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </>
//               )}
//             </button>
//           </div>
//         </ConditionalReveal>

//       </form>
//     </div>
//   );
// }



"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import RevealAnimation from "./animation/RevealAnimation";
import { sendContactEmail } from "@/app/action/sendEmail"; // Adjust path based on your folder structure

interface ContactFormCardProps {
  title?: string;
  badgeText?: string;
  showLiveIndicator?: boolean;
}

export function ContactFormCard({
  title = "Our Dedication Is To Exceed Our Clients' Expectations !",
  badgeText = "Need Assistance",
  showLiveIndicator = true,
}: ContactFormCardProps) {
  const [isPending, setIsPending] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Helper component to conditionally wrap children with RevealAnimation
  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };
  
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setFormFeedback({ success: false, message: "Please complete the reCAPTCHA challenge." });
      return;
    }

    setIsPending(true);
    setFormFeedback(null);

    const targetForm = e.currentTarget;
    const rawFormData = new FormData(targetForm);
    
    // Append the token manually so it gets safely intercepted by the backend action parameter array
    rawFormData.append("g-recaptcha-response", captchaToken);

    try {
      const result = await sendContactEmail(rawFormData);
      setFormFeedback(result);
      
      if (result.success) {
        targetForm.reset(); 
        recaptchaRef.current?.reset(); // Clear reCAPTCHA token visually on success
        setCaptchaToken(null);
      }
    } catch (err) {
      setFormFeedback({ success: false, message: "An unexpected connection error occurred." });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="w-full bg-white border border-neutral-200/60 rounded-3xl p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:border-neutral-300/60 transition-colors duration-500">
      
      {/* ================= FORM HEADER ================= */}
      <div className="space-y-3 mb-8 text-left">
        {badgeText && (
         
            <div className="flex items-center gap-2">
              <span className="tracking-wider text-lg font-bold text-[#104cba] uppercase block">
                {badgeText}
              </span>
              {showLiveIndicator && (
                <div className="h-2 w-2 rounded-full bg-[#ff4b2b] animate-pulse" />
              )}
            </div>
        
        )}

       
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a] leading-tight">
            {title}
          </h3>
       
      </div>

      {/* ================= INTERACTIVE FORM INPUTS ================= */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        
        {/* Name Field */}
       
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              required
              disabled={isPending}
              placeholder="Your Name*"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
       

        {/* Email Field */}
       
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              required
              disabled={isPending}
              placeholder="Your Email*"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
      

        {/* Phone No Field */}
       
          <div className="relative w-full">
            <input
              type="tel"
              name="phone"
              required
              disabled={isPending}
              placeholder="Phone No*"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
       

        {/* Message TextArea Box */}
       
          <div className="relative w-full">
            <textarea
              name="message"
              rows={4}
              required
              disabled={isPending}
              placeholder="Message*"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition-all duration-300 hover:border-neutral-300 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 resize-none min-h-[100px] disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>
     

        {/* Google reCAPTCHA Render Layer Anchor Box */}
       
          <div className="w-full flex justify-start overflow-x-auto py-1">
          
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={handleCaptchaChange}
            />
          </div>
        

        {/* Feedback Alert Status Logs */}
        {formFeedback && (
          <div
            className={`text-sm p-4 rounded-xl font-medium transition-all duration-300 text-left ${
              formFeedback.success
                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                : "bg-rose-50 text-rose-700 border border-rose-100"
            }`}
          >
            {formFeedback.message}
          </div>
        )}

        {/* Submit Call-To-Action Button */}
       
          <div className="pt-2 text-left">
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-[14px] shadow-[0_6px_20px_rgba(255,75,43,0.15)] hover:shadow-[0_10px_28px_rgba(255,75,43,0.25)] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
              }}
            >
              {isPending ? (
                <>
                  <span>Sending...</span>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                </>
              ) : (
                <>
                  <span>Contact Us</span>
                  <Send className="h-3.5 w-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
      

      </form>
    </div>
  );
}