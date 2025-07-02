"use client";

import Image from "next/image";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1681949103006-70066fb25dfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyb3VwZSUyMGQlMjBlcGVyc29ubmVzJTIwZGFucyUyMHVuJTIwYnVyZWF1fGVufDB8fDB8fHww",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus. ",
    name: "John Doe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1749482843703-3895960e7d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjB8fHxlbnwwfHx8fHw%3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.",
    name: "Bob Brown",
  },
];

const TestimonialCard = ({
  image,
  description,
  name,
}: {
  image: string;
  description: string;
  name: string;
}) => (
  <div className="flex flex-col w-full h-full bg-gray-200 rounded-tl-2xl rounded-br-2xl">
    <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed my-10 italic">
      &quot;{description}&quot;
    </p>
    <div className="flex items-center mb-8 ml-4 ">
      <div className="flex justify-start relative rounded-full overflow-hidden h-10 w-10">
        <Image src={image} alt={name} fill objectFit="cover" />
      </div>
      <p className="pl-6 text-base font-semibold">{name}</p>
    </div>
  </div>
);

export default function Testimonial() {
  return (
    <div>
      <h1 className="text-xl md:text-3xl text-left font-bold text-gray-700 capitalize my-10">
        clients testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
