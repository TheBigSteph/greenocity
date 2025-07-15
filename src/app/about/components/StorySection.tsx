import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface StorySectionProps {
  image: string;
  alt: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
}

export default function StorySection({
  image,
  alt,
  title,
  paragraphs,
  reverse = false,
}: StorySectionProps) {
  return (
    <div className={`max-w-6xl mx-auto px-6 py-16 md:py-24 `}>
      <div className={`flex flex-col md:flex-row items-center gap-12 `}>
        <div className="md:w-1/2">
          <Badge className="bg-green-800 mb-4">Pourquoi nous choisir?</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base md:text-lg text-gray-600${
                i < paragraphs.length - 1 ? " mb-4" : ""
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="relative md:w-1/2">
          <div className="z-0 absolute inset-0 bg-green-800 rounded-tl-[60px] rounded-br-[60px] mt-8 "></div>
          <Image
            src={image}
            alt={alt}
            width={600}
            height={400}
            className="relative z-30 ml-8 mb-8 rounded-tl-[60px] rounded-br-[60px] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
