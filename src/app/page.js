import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { LensDemo } from "@/components/Lensdemo";
import Navbar from "@/components/Navbar";
import { ProductCategory } from "@/components/ProductsCategory";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollisionDemo/>
      <HeroSection/>
      <ProductCategory/>
      <TypewriterEffectSmoothDemo/>
      <LensDemo/>
    </div>
  );
}
