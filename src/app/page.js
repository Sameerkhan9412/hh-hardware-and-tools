'use client'
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Brands from "@/components/Brands";
import FeedbackSlider from "@/components/FeedbackSlider";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProductCategory } from "@/components/ProductsCategory";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollisionDemo/>
      <HeroSection/>
      <ProductCategory/>
      <TypewriterEffectSmoothDemo/>
      <FeedbackSlider className="w-full"/>
      <Brands/>
    </div>
  );
}
