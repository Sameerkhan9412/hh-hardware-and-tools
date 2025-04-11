'use client';

import ListProducts from '@/components/ListProducts';
import ColourfulText from '@/components/ui/colourful-text';
import React, { useEffect } from 'react';
import { productList } from '../../../../lib/utils';
import ProductCard from '@/components/ProductCard';
import { useParams } from 'next/navigation';

const Products = () => {
  const { category } = useParams(); // e.g. "flat-files"

  const normalize = (str) => str.toLowerCase().replace(/[-\s]+/g, '');

  const filteredItem = productList.find((item) =>
    normalize(item.category) === normalize(category)
  );

  useEffect(() => {
    console.log('Selected Category:', category);
    console.log('Filtered Item:', filteredItem);
  }, [category]);

  return (
    <div className='max-w-7xl mx-auto my-2'>
      <h1 className='text-center text-3xl font-bold'>
        Products By{' '}
        <ColourfulText text={`${filteredItem?.category || category}`} /> Category
      </h1>

      <div className='py-2 rounded-2xl my-5'>
        {filteredItem?.products?.map((product, index) => (
          <ProductCard key={index} index={index} product={product} />
        ))}

        <h2 className='text-2xl font-bold underline my-2'>
          <ColourfulText text={'Specifications'} />
        </h2>

        <div className='w-full flex justify-center'>
          <img src={filteredItem?.size || productList[0].size} alt='' className='w-96' />
        </div>
      </div>
    </div>
  );
};

export default Products;
