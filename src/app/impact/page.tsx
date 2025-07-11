import HeroSection from "@/components/HeroSection";
import { OurImpact } from "./components/OurImpact";

export default function ImpactPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1542800952-e5471ed41326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmlsbGVzJTIwdmVydGVzfGVufDB8fDB8fHww"
        title="Financement vert"
        subtitle="Des solutions innovantes pour un avenir durable"
      />
      <div className=" mx-auto py-16">
        <OurImpact />
      </div>
    </div>
  );
}
