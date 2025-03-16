
import ListProducts from '@/components/ListProducts';
import ColourfulText from '@/components/ui/colourful-text';
import React from 'react'
import { productsList } from '../../../lib/utils';
import Product from '@/components/ProductCard';
const products = () => {
  return (
    <div className='max-w-7xl mx-auto my-2'>
      <h1 className='text-center text-3xl font-bold'>Products By <ColourfulText text={"Cut Type"}/> Category</h1>
      <div className='bg-[#A8DADC] py-10 rounded-2xl px-5 my-5'>
        {
          productsList.map((product,index)=>(<Product key={index} index={index} product={product} />))
          
        }
      </div>
    </div>
  )
}

export default products