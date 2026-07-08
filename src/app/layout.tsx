import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/animations/SmoothScrollProvider";
import {Inter} from "next/font/google";

const inter= Inter({subsets:["latin"],variable: "--font-inter"})
export const metadata: Metadata = {
  title: "Kynyx Solution — Engineering Tomorrow",
  description: "Premium technology consulting and development firm specializing in enterprise-grade digital transformation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
  
</body>
    </html>
  );
}
