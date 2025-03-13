"use client";
import React, { useState } from "react";
import { Lens } from "./ui/lens";
import { Button } from "./ui/moving-border";
import { CardSpotlight } from "./ui/card-spotlight";

const ListProducts = ({ images, index }) => {
  const [currImage, setCurrImage] = useState(images[0]);
  const [hovering, setHovering] = useState(false);
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 mx-4 px-10 my-5 items-center ">
        <div className={`grid grid-cols-5 gap-2 ${index%2==0?"order-1":"order-2"}`}>
          <div className=" col-span-4 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <Lens hovering={hovering} setHovering={setHovering}>
              <img
                src={currImage}
                alt="product img"
                className="object-contain "
              />
            </Lens>
          </div>
          <div className="grid gap-2">
            {images.map((image, i) => (
              <div
                onClick={() => setCurrImage(image)}
                key={i}
                className="rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt="product img "
                  className="hover:scale-110 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      <div className={`${index%2==0?"order-2":"order-1"}`}>
        {/* <CardSpotlight className="h-full w-full"> */}
        <h2 className="text-2xl font-bold relative z-20 mt-2 text-black">
          Double-ended Screwdriver
        </h2>
        <div className="mt-4 relative z-20 text-black text-sm">
          JKSD 4”x12T TCT Blade Pro is engineered for exceptional performance
          and durability. This blade ensures long-lasting efficiency and
          reliability. Its unique profile precision sawing technology guarantees
          clean, accurate cuts with minimal effort, while the innovative design
          minimizes chip wastage, making the most out of every material. Ideal
          for professional carpenters and woodworkers, this blade enhances
          cutting precision and material efficiency, providing superior results
          for various cutting tasks. Upgrade your toolkit with the 4”x12T TCT
          Blade for superior cutting performance and reduced waste.
        </div>
        {/* </CardSpotlight> */}
      </div>
      </div>
      <div className="  col-span-2">
        <h2 className="text-lg font-bold">Features:</h2>
        <div className="grid grid-cols-2 text-sm">
          {[1, 2, 3, 4, 5].map((list, index) => (
            <li key={index}>
              {" "}
              Hardened tip to avoid breakage, slipping and twisting.
            </li>
          ))}
        </div>
        <h2 className="text-lg font-bold">Specifications:</h2>
        <div className="w-full flex justify-center  ">
          <img
            src="https://jksuperdrive.com/wp-content/uploads/2021/07/Half-Round-Machinist-1.jpg"
            alt=""
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
