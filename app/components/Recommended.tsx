import React from 'react';
import styles from './recommended.module.css';
import Image from 'next/image';
import { FaCircle } from 'react-icons/fa';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import Places from '@/data/Places';

export default function Recommended() {
  return (
    <div className='w-[80%] mx-auto mt-[60px] mb-[50px]'>
      <h2 className={`${styles.title} text-[24px] opacity-80`}>Recommended places to stay</h2>

      <div className='flex flex-cols-4 gap-4 items-center mt-[20px] '>
        {Places.map((item, index) => (
          <div className='card bg-base-100 shadow-xl rounded-md w-[280px]'>
            <Image src={item.image} alt='hotel-place' width={280} height={164} />

            <div className='flex flex-col gap-2 px-3'>
              <h3 className={`${styles.cardTitle} text-[14px] font-semibold  pt-3`}>{item.name}</h3>
              <p className={`${styles.paragraph} text-[12px] font-medium `}>{item.place}</p>

              <div className='flex items-center gap-2'>
                <div className={`${styles.circle} text-[12px] flex items-center gap-1`} >
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircle />
                  <FaCircleHalfStroke />
                </div>
                <p className={`${styles.paragraph} text-[14px] font-semibold opacity-80 `}>{item.rating}</p>
              </div>

              <div className='flex items-center gap-2 pr-2 pl-16 my-3'>
                <p className={`${styles.paragraph} text-[12px] font-normal `}>Starting from</p>
                <p className={`${styles.price} text-[16px] font-semibold`}>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
