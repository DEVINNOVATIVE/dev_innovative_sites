import React from "react";

type TickProps = React.SVGProps<SVGSVGElement> & { size?: number };

export default function TickIcon({ size = 16, className, ...props }: TickProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="#dbeafe" strokeWidth="2" fill="#eff6ff" />
      <path d="M7 12.5l3 3 7-7" stroke="#0c5adb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
