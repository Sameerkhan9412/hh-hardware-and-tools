
import CategoryInfo from '@/components/CategoryInfo';
import Products from '@/components/Products';
import React from 'react'

const products = () => {
  const images=["https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file5_nzoij8.jpg","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file1_g5xbbs.png","https://res.cloudinary.com/sameerkhan/image/upload/v1741689033/hhhardware/file4_qvabe8.jpg"];
  return (
    <div>
        <CategoryInfo images={images} />
        <Products/>
    </div>
  )
}

export default products