"use client";
import React, { useState } from "react";
import { Lens } from "./ui/lens";
import { Button } from "./ui/moving-border";
import { CardSpotlight } from "./ui/card-spotlight";

const CategoryInfo = ({ images }) => {
  const [currImage, setCurrImage] = useState(images[0]);
  const [hovering, setHovering] = useState(false);
  console.log("currImage,", currImage);
  return (
    <div className="grid grid-cols-2 gap-4 mx-4 px-10 my-5">
      <div className="grid grid-cols-5 gap-2">
        <div className=" col-span-4 border-2 rounded-lg overflow-hidden h-96 flex items-center justify-center">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img src={currImage} alt="product img" className="object-contain " />
          </Lens>
        </div>
        <div className="grid gap-2">
          {images.map((image, i) => (
            <div
              onClick={() => setCurrImage(image)}
              key={i}
              className="border-2 rounded-lg overflow-hidden cursor-pointer"
            >
              <img src={image} alt="product img " className="hover:scale-110 transition-all" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 flex-col select-none">
        <CardSpotlight className="h-full w-full">
          <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
            hello, this is my first product cateogyr
          </h2>
          <div className="text-neutral-200 mt-4 relative z-20">
            JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
            and durability. This blade ensures long-lasting efficiency and
            reliability. Its unique profile precision sawing technology
            guarantees clean, accurate cuts with minimal effort, while the
            innovative design minimizes chip wastage, making the most out of
            every material. Ideal for professional carpenters and woodworkers,
            this blade enhances cutting precision and material efficiency,
            providing superior results for various cutting tasks. Upgrade your
            toolkit with the 4”x12T TCT Blade for superior cutting performance
            and reduced waste.
          </div>
        </CardSpotlight>
      </div>
    </div>
  );
};


export default CategoryInfo;
