"use client"
import React, { useState } from "react";
import { Lens } from "./ui/lens";
import ColourfulText from "./ui/colourful-text";
// const images=[
//   "https://m.media-amazon.com/images/I/61Nu5cgpOzL._SL1500_.jpg","https://m.media-amazon.com/images/I/71G2ZvbXv2L._SL1500_.jpg","https://m.media-amazon.com/images/I/61TFoKSQ-dL._SL1500_.jpg"
// ]

const ProductCard = ({product,index}) => {
    const [currImage, setCurrImage] = useState(product.images[0]);
    const [hovering, setHovering] = useState(false);
  return (
    <div className="px-10 text-[#1D3557]">
      <div className="grid grid-cols-2 gap-4 mx-4 px-10 my-5 items-center ">
        <div
          className={`grid grid-cols-5 gap-2 border-2 border-[#1D3557] p-2 rounded-xl  ${
            index % 2 == 0 ? "order-1" : "order-2 "
          } hover:shadow-2xl shadow-white transition-all`}
        >
          <div className=" col-span-4 rounded-lg overflow-hidden h-96 flex items-center justify-center border-2 border-[#1D3557] bg-white ">
            <Lens hovering={hovering} setHovering={setHovering}>
              <img
                src={currImage}
                alt="product img"
                className="object-contain "
              />
            </Lens>
          </div>
          <div className="grid gap-2 ">
            {product.images.map((image, i) => (
              <div
                onClick={() => setCurrImage(image)}
                key={i}
                className="rounded-lg overflow-hidden cursor-pointer border-[#1D3557] border-2 h-fit "
              >
                <img
                  src={image}
                  alt="product img "
                  className="hover:scale-110 transition-all duration-200"
                />
              </div>
            ))}
          </div>
        </div>
        <div className={`${index % 2 == 0 ? "order-2" : "order-1"}`}>
          {/* <CardSpotlight className="h-full w-full"> */}
          <h2 className="text-2xl font-bold relative z-20 mt-2 space-x-0.5">
            <ColourfulText text={"Double-ended Screwdriver"} />
          </h2>
          <div className="mt-4 relative z-20 text-sm text-[#1D3557] font-semibold">
            {product.description}
          </div>
          {/* </CardSpotlight> */}
        </div>
      </div>
      <div className="  col-span-2">
        <h2 className="text-2xl  font-bold space-x-1 underline my-2">
          <ColourfulText text={"Features"} />
        </h2>
        <div className="grid grid-cols-2 text-sm">
          {[1, 2, 3, 4, 5].map((list, index) => (
            <li key={index}>
              {" "}
              Hardened tip to avoid breakage, slipping and twisting.
            </li>
          ))}
        </div>
        <h2 className="text-2xl  font-bold space-x-1 underline my-2">
          <ColourfulText text={"Specifications"} />
        </h2>
        <div className="w-full flex justify-center  ">
          <img
            src="https://jksuperdrive.com/wp-content/uploads/2021/07/Half-Round-Machinist-1.jpg"
            alt=""
            className="w-96"
          />
        </div>
      </div>
      <div className="h-2 w-[70%] bg-[#1D3557] mx-auto my-5 rounded-full"></div>
    </div>
  );
};

export default ProductCard;
