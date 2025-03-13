
import ListProducts from '@/components/ListProducts';
import Products from '@/components/Products';
import ColourfulText from '@/components/ui/colourful-text';
import React from 'react'

const products = () => {
  const images=["https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg"];
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-center text-3xl font-bold'>Products By <ColourfulText text={"Cut Type"}/> Category</h1>
        {
         [1,2,3,4].map((first,index)=>(
          <ListProducts images={images} key={index} index={index} />
         )) }
    </div>
  )
}

export default products