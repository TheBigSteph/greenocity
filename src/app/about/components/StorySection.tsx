import Image from "next/image";

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
    <div
      className={`max-w-6xl mx-auto px-6 py-16 md:py-24 ${
        reverse ? "bg-green-50" : "bg-white"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={alt}
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-gray-600${
                i < paragraphs.length - 1 ? " mb-4" : ""
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
