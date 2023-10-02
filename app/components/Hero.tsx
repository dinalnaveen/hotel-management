import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidDownArrow } from 'react-icons/bi';
import { IoFilterSharp } from 'react-icons/io5';


export default function Hero() {
  return (
    <div className='relative'>
      <Image src='/hero2.png' alt='hero-image' width={800} height={200} className='w-full absolute mt-[-70] ' />
      
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-[230px]'>
        <h2 className='text-[40px] font-semibold text-white'>Welcome to</h2>
        <h2 className='text-[100px] font-extrabold text-white'>Our Villas</h2>
      </div>

      <div className='flex justify-center  '>
        <div className='absolute flex items-center gap-9 bg-white mt-[480px] p-[20px] px-[30px] border-[2px] border-[#07AF56] rounded-md'>
        
      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Search</h2>
        <div className='flex gap-2 items-center'>
        <AiOutlineSearch className="w-6 h-6 text-[#545455]" />
        <input type="text" placeholder='Enter a destination' className='text-[#545455] w-[160px] py-[5px] outline-none placeholder-[#545455] placeholder-opacity-80'  />
        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Check-In</h2>
        <div className='flex gap-2 items-center'>
          <button className='flex gap-2 items-center text-[#545455] text-opacity-80 py-[5px] text-[16px]'>Select date <BiSolidDownArrow className="w-3 h-3 text-[#545455]" /></button>
        </div> 
      </div>


      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Check-Out</h2>
        <div className='flex gap-2 items-center'>
          <button className='flex gap-2 items-center text-[#545455] text-opacity-80 py-[5px] text-[16px]'>Select date <BiSolidDownArrow className="w-3 h-3 text-[#545455]" /></button>
        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Adult</h2>
        <div className='flex gap-2 items-center'>
          <button className='flex gap-2 items-center text-[#545455] text-opacity-80 py-[5px] text-[16px]'>0<BiSolidDownArrow className="w-3 h-3 text-[#545455]" /></button>
        </div> 
      </div>


      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Child</h2>
        <div className='flex gap-2 items-center'>
          <button className='flex gap-2 items-center text-[#545455] text-opacity-80 py-[5px] text-[16px]'>0<BiSolidDownArrow className="w-3 h-3 text-[#545455]" /></button>
        </div> 
      </div>

      <div>
      <IoFilterSharp className="w-6 h-6 text-[#545455]" />
      </div>

      <div>
      <button className="bg-[#07AF56] hover:bg-[#1E6E44] text-white font-bold py-[14px] px-4 rounded">
        Check Availability
      </button>
      </div>

      </div>
      </div>
    </div>
  );
}
