import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ProductCategory } from "@/components/ProductsCategory";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterEffectSmoothDemo";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundBeamsWithCollisionDemo/>
      <HeroSection/>
      <ProductCategory/>
      <TypewriterEffectSmoothDemo/>
    </div>
  );
}
