'use client'
import React from 'react'

const ContactUs = () => {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mt-16 '>
        <div className=' flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-semibold'>Contact us</h1>
            <form action="" className=' flex flex-col mt-16 mb-10 gap-4'>
                
                    <input type="text" placeholder='emai address' className='ring-2 ring-gray-300 rounded-md p-4' />

                    <textarea name="message" id="" placeholder=' Message here ....' className='ring-2 ring-gray-300 rounded-md p-4' />
                    <button className="bg-vita text-white p-2 rounded-md">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactUs