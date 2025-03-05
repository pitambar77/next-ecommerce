
'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Pagination from './Pagination'

const ProductList = () => {
  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href="/test" className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className=' w-full h-80 relative'>
            <Image 
                src="https://images.pexels.com/photos/15404590/pexels-photo-15404590/free-photo-of-rack-with-choice-of-sweaters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src="https://images.pexels.com/photos/5734462/pexels-photo-5734462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md '
            />
            </div>
            <div className=' flex justify-between'>
                <span className=' font-medium'>Product Name</span>
                <span className=' font-semibold'>$499</span>
            </div>
            <div className=' text-sm text-gray-500'>My description</div>
            <button className=' rounded-2xl ring-1 ring-vita text-vita w-max py-2 px-4 text-xs hover:bg-vita hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className=' w-full h-80 relative'>
            <Image 
                src="https://images.pexels.com/photos/5734462/pexels-photo-5734462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src="https://images.pexels.com/photos/15404590/pexels-photo-15404590/free-photo-of-rack-with-choice-of-sweaters.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md '
            />
            </div>
            <div className=' flex justify-between'>
                <span className=' font-medium'>Product Name</span>
                <span className=' font-semibold'>$499</span>
            </div>
            <div className=' text-sm text-gray-500'>My description</div>
            <button className=' rounded-2xl ring-1 ring-vita text-vita w-max py-2 px-4 text-xs hover:bg-vita hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className=' w-full h-80 relative'>
            <Image 
                src="https://images.pexels.com/photos/5418892/pexels-photo-5418892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src="https://images.pexels.com/photos/18699686/pexels-photo-18699686/free-photo-of-choice-of-clothing-in-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md '
            />
            </div>
            <div className=' flex justify-between'>
                <span className=' font-medium'>Product Name</span>
                <span className=' font-semibold'>$499</span>
            </div>
            <div className=' text-sm text-gray-500'>My description</div>
            <button className=' rounded-2xl ring-1 ring-vita text-vita w-max py-2 px-4 text-xs hover:bg-vita hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className=' w-full h-80 relative'>
            <Image 
                src="https://images.pexels.com/photos/18699686/pexels-photo-18699686/free-photo-of-choice-of-clothing-in-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src="https://images.pexels.com/photos/25749259/pexels-photo-25749259/free-photo-of-close-up-of-clothes-hanging-on-a-rack-in-a-clothing-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md '
            />
            </div>
            <div className=' flex justify-between'>
                <span className=' font-medium'>Product Name</span>
                <span className=' font-semibold'>$499</span>
            </div>
            <div className=' text-sm text-gray-500'>My description</div>
            <button className=' rounded-2xl ring-1 ring-vita text-vita w-max py-2 px-4 text-xs hover:bg-vita hover:text-white'>Add to Cart</button>
        </Link>
        <Link href="/test" className=' w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className=' w-full h-80 relative'>
            <Image 
                src="https://images.pexels.com/photos/5717891/pexels-photo-5717891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
            />
            <Image 
                src="https://images.pexels.com/photos/9219048/pexels-photo-9219048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt='' 
                fill
                sizes='25vw'
                className=' absolute object-cover rounded-md '
            />
            </div>
            <div className=' flex justify-between'>
                <span className=' font-medium'>Product Name</span>
                <span className=' font-semibold'>$499</span>
            </div>
            <div className=' text-sm text-gray-500'>My description</div>
            <button className=' rounded-2xl ring-1 ring-vita text-vita w-max py-2 px-4 text-xs hover:bg-vita hover:text-white'>Add to Cart</button>
        </Link>
        <Pagination/>
    </div>
  )
}

export default ProductList