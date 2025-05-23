// "use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";
import { categoryList } from "../../lib/utils";

export function ProductCategory() {
  const cards = categoryList.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-5 bg-[#1D3557]">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-white font-sans">
        Explore Files Category
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data2 = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file2_mnytg7.jpg",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];


