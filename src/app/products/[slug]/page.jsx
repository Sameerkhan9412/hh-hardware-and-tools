
import ListProducts from '@/components/ListProducts';
import ColourfulText from '@/components/ui/colourful-text';
import React from 'react'
import { productList, productsList } from '../../../../lib/utils';
import ProductCard from '@/components/ProductCard';
// import Product from '@/components/ProductCard';
const products = () => {
  const filteredList=productList[0].products;
  return (
    <div className='max-w-7xl mx-auto my-2'>
      <h1 className='text-center text-3xl font-bold'>Products By <ColourfulText text={"Cut Type"}/> Category</h1>
      <div className=' py-2 rounded-2xl my-5'>
        {
          filteredList.map((product,index)=>(<ProductCard key={index} index={index} product={product} />))
        }
        <h2 className="text-2xl  font-bold space-x-1 underline my-2">
          <ColourfulText text={"Specifications"} />
        </h2>
        <div className="w-full flex justify-center  ">
          <img
            src={productList[0].size}
            alt=""
            className="w-96"
          />
        </div>
      </div>
    </div>
  )
}

export default products