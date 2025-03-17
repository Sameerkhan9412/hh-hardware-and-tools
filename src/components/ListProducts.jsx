"use client";
import React, { useState } from "react";
import { Lens } from "./ui/lens";
import { Button } from "./ui/moving-border";
import { CardSpotlight } from "./ui/card-spotlight";
import ColourfulText from "./ui/colourful-text";
import Product from "./ProductCard";
const productWithCategory=[
  {
    category:""
  }
]
const ListProducts = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((pro,index) => (
        <Product key={index} index={index}/>
))}
    </div>
  );
};

export default ListProducts;
