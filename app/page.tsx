import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import { FeatureSection1, FeatureSection2 } from "@/components/FeatureSections";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Features />
      <FeatureSection1 />
      <FeatureSection2 />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}
