import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative'>
      <Image src='/hero.png' alt='hero-image' width={800} height={200} className='w-full absolute mt-[-70]' />

      <div className='flex justify-center  '>
        <div className='absolute flex items-center gap-7 bg-white mt-[480px] p-[20px] px-[20px] border-[2px] border-[#07AF56]'>
        
      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Search</h2>
        <div className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#545455]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input type="text" placeholder='Colombo' className='text-[#545455] w-[160px] py-[5px] outline-none'  />
        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Check-In</h2>
        <div className='flex gap-2 items-center'>
        <input type="text" placeholder='Select date' className='text-[#545455] w-[90px] py-[5px]' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#545455]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Check Out</h2>
        <div className='flex gap-2 items-center'>
        <input type="text" placeholder='Select date' className='text-[#545455] w-[90px] py-[5px]' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#545455]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className='text-[12] text-[#07AF56]'>Adult</h2>
        <div className='flex gap-2 items-center'>
        <input type="text" placeholder='0' className='text-[#545455] w-[10px] py-[5px]' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#545455]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0 '>
        <h2 className='text-[12] text-[#07AF56]'>Child</h2>
        <div className='flex gap-2 items-center'>
        <input type="text" placeholder='0' className='text-[#545455] w-[10px] py-[5px]' />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#545455]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>

        </div> 
      </div>

      </div>
      </div>
    </div>
  );
}
