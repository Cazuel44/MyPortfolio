
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/scrollToTop/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rodrigo Portfolio",
  description: "Frontend Developer Portfolio",
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
    >
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white">

        {/* BACKGROUND CLOUD LAYER */}
        <div className="fixed inset-0 pointer-events-none -z-10">

          <img
            src="/images/akatsukicloud.png"
            alt=""
            className="absolute top-[10%] left-[15%] w-[180px] opacity-40 animate-floatSlow"
          />

          <img
            src="/images/akatsukicloud.png"
            alt=""
            className="absolute top-[35%] right-[10%] w-[320px] opacity-30 animate-floatSlowReverse"
          />

          <img
            src="/images/akatsukicloud.png"
            alt=""
            className="absolute top-[65%] left-[25%] w-[220px] opacity-40 animate-floatSlow"
          />

          <img
            src="/images/akatsukicloud.png"
            alt=""
            className="absolute top-[85%] right-[20%] w-[260px] opacity-25 animate-floatSlowReverse"
          />

        </div>
        <Navbar />
        <ScrollToTop />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col">
          {children}
        </div>

      </body>
    </html>
  );
}