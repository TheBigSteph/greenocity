import HeroSection from "@/components/HeroSection";
import { OurImpact } from "./components/OurImpact";

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        imageUrl="/images/cover.jpg"
        title="Financement vert"
        subtitle="Des solutions innovantes pour un avenir durable"
      />
      <div className=" mx-auto py-16">
        <OurImpact />
      </div>
    </div>
  );
}
