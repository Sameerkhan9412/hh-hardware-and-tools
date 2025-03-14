
import ListProducts from '@/components/ListProducts';
import ColourfulText from '@/components/ui/colourful-text';
import React from 'react'

const products = () => {
  const images=["https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg"];
  return (
    <div className='max-w-7xl mx-auto my-2'>
      <h1 className='text-center text-3xl font-bold'>Products By <ColourfulText text={"Cut Type"}/> Category</h1>
      <div className='bg-[#A8DADC] py-10 rounded-2xl px-5 my-5'>
        <ListProducts />
      </div>
    </div>
  )
}

export default products