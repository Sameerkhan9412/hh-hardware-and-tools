import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import PageLoader from "@/components/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HH Hardware and Tools | Quality Tools for Every Project",
  description: "Discover high-quality hand tools, power tools, and industrial hardware at HH Hardware and Tools. Serving professionals and DIYers with durable, reliable products.",
  keywords:
    "hardware tools, power tools, hand tools, HH Hardware and Tools, Aligarh tools shop, industrial tools, cutting tools, workshop tools, drilling machines, reliable hardware"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <AuthProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-[320px] overflow-x-hidden`}>

          <Navbar />
          {/* <Loading/> */}
          <PageLoader/>
          {children}
          <Footer />
          <Toaster
            toastOptions={{
              style: {
                background: "rgba(255,0,0,0.7)",
                color: "white",
              },
            }}
          />
        </body>
      </AuthProvider>
    </html>
  );
}
