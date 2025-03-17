import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProductCategory } from "@/components/ProductsCategory";
import { Reviews } from "@/components/Reviews";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollisionDemo/>
      <HeroSection/>
      <Link href={"products"}>click me</Link>
      <ProductCategory/>
      <TypewriterEffectSmoothDemo/>
      {/* <Reviews className={"w-screen bg-black"}/> */}
    </div>
  );
}
