import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className='flex justify-between items-center p-1 pl-7 pr-7 shadow-sm'>
        <div>
            <Image src='/logo.png' alt='logo'
            width={50} height={50}/>
        </div>
        <ul className='flex gap-10'>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>Home</li>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>Packages</li>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>Gallery</li>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>Room</li>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>About Us</li>
            <li className='text-[14] text-[#545455] hover:text-[#07AF56] cursor-pointer'>Contact Us</li>
        </ul>
        <div className='flex gap-10 items-center '>
        <Image src='/flag.jpg' alt='logo'
            width={40} height={30}/>
            <h3 className='text-[14] text-[#545455] cursor-pointer'>USD</h3>
            <button className="bg-transparent hover:bg-[#07AF56] text-[#07AF56] font-semibold hover:text-white py-2 px-8 border border-[#07AF56] hover:border-transparent rounded">
            Login
            </button>
            <i className="fi fi-rs-shopping-cart"></i>
        </div>
    </div>
  )
}
