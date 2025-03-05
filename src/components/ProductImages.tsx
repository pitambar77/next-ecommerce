"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
      {
        id: 1,
        url: "https://images.pexels.com/photos/29212401/pexels-photo-29212401/free-photo-of-casual-urban-streetwear-fashion.jpeg",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/30646356/pexels-photo-30646356/free-photo-of-portrait-of-a-bearded-man-in-studio-lighting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/13865700/pexels-photo-13865700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ];

const ProductImages = () => {
    const [index, setIndex] = useState(0);
  return (
    <div>
        <div className=' h-[500px] relative'>
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
        </div>
        <div className=' flex justify-between gap-4 mt-8'>
            {images.map((img,i)=>(
                <div 
                    key={img.id}
                    onClick={()=>setIndex(i)}
                    className=' w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'>
                <Image
                    src={img.url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />        
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages