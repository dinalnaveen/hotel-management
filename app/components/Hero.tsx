import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiSolidDownArrow } from 'react-icons/bi';
import { IoFilterSharp } from 'react-icons/io5';
import styles from './hero.module.css'


export default function Hero() {
  return (
    <div className='relative'>
      <Image src='/hero2.png' alt='hero-image' width={800} height={200} className='w-full absolute mt-[-70] ' />
      
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-[230px]'>
        <h2 className={styles.titleLine1}>Welcome to</h2>
        <h2 className={styles.titleLine2}>Our Villas</h2>
      </div>

      <div className='flex justify-center  '>
        <div className={`${styles.bookingWidget} absolute flex items-center gap-9 mt-[480px] p-[20px] px-[30px] border-[2px]  rounded-md`}>
        
      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className={styles.bookingTitle}>Search</h2>
        <div className='flex gap-2 items-center'>
        <AiOutlineSearch className="w-6 h-6 text-[#545455cb] " />
        <input type="text" placeholder='Enter a destination' className={`${styles.bookingText}  w-[160px] py-[5px] outline-none placeholder-[#545455cd] placeholder-opacity-80  `}/>
        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className={styles.bookingTitle}>Check-In</h2>
        <div className='flex gap-2 items-center'>
          <button className={`${styles.bookingText} flex gap-2 items-center  text-opacity-80 py-[5px] `}>Select date <BiSolidDownArrow className="w-3 h-3 text-[#545455cb] hover:text-[#545455]" /></button>
        </div> 
      </div>


      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className={styles.bookingTitle}>Check-Out</h2>
        <div className='flex gap-2 items-center'>
          <button className={`${styles.bookingText} flex gap-2 items-center  text-opacity-80 py-[5px] `}>Select date <BiSolidDownArrow className="w-3 h-3 text-[#545455cb] hover:text-[#545455]" /></button>
        </div> 
      </div>

      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className={styles.bookingTitle}>Adult</h2>
        <div className='flex gap-2 items-center'>
          <button className={`${styles.bookingText} flex gap-2 items-center  text-opacity-80 py-[5px] `}>0<BiSolidDownArrow className="w-3 h-3 text-[#545455cb] hover:text-[#545455]" /></button>
        </div> 
      </div>


      <div className='z-10 mt-50  top-0 left-0  '>
        <h2 className={styles.bookingTitle}>Child</h2>
        <div className='flex gap-2 items-center'>
          <button className={`${styles.bookingText} flex gap-2 items-center  text-opacity-80 py-[5px] `}>0<BiSolidDownArrow className="w-3 h-3 text-[#545455cb] hover:text-[#545455]" /></button>
        </div> 
      </div>

      <div>
      <IoFilterSharp className="w-6 h-6 text-[#545455] hover:text-[#545455] hover:scale-105" />
      </div>

    

      <div>
      <button className={`${styles.customButton}   py-[14px] px-4 rounded`}>
        Check Availability
      </button>
      </div>

      </div>
      </div>
    </div>
  );
}
