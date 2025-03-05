import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className=' px-4 overflow-x-scroll scrollbar-hide  '>
        <div className=' flex gap-4 md:gap-8'>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/5424914/pexels-photo-5424914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'>Casual Shirts</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/26834024/pexels-photo-26834024/free-photo-of-clothes-hanging-on-coathangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'> Jeans</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/12700580/pexels-photo-12700580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'>{`Men's Shorts`}</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/30940603/pexels-photo-30940603/free-photo-of-colorful-row-of-caps-and-shirts-on-hangers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'> Cap</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/8619007/pexels-photo-8619007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'>{`Women's wear`}</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/26651160/pexels-photo-26651160/free-photo-of-hat-and-torn-jeans-on-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'> {`Women's jeans`}</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/5264907/pexels-photo-5264907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'> Blezers</h1>            
            </Link>
            <Link href='/list?cart=test' className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className=' relative bg-slate-100 w-full h-96'>
                    <Image src={"https://images.pexels.com/photos/10154937/pexels-photo-10154937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='' fill sizes='20vw' className=' object-cover'/>
                </div>
                <h1 className=' text-center font-semibold mt-8  tracking-wide'> Shoes</h1>            
            </Link>
        </div>
    </div>
  )
}

export default CategoryList