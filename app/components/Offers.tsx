import React from 'react'
import styles from './offers.module.css'
import Image from 'next/image'
import offer1 from '@/public/Images/offer1.png'
import offer2 from '@/public/Images/offer2.png'
import OfferDetails from '@/data/OfferDetails'

export default function Offers() {
  return (
    <div className='w-[80%] mx-auto mt-[100px] '>
        <h2 className={`${styles.title} text-[24px] opacity-80 mb-[20px]`}>Offers</h2>

        <div className='grid grid-cols-2'>
{OfferDetails.map((item,index) =>(
            <div className=''>
                <Image src={item.image} alt='offer1' className=' absolute' width={545} height={192} />
                <div className='relative z-10  p-6 '>
                <h3 className={`${styles.paragraph} text-[16px]  z-10 font-semibold`}>{item.title}</h3>
                <p className={`${styles.paragraph} text-[14px]  z-10 font-normal my-5`}>{item.paragraph}</p>
                <button className={`${styles.customButton}   py-[10px] px-4 rounded text-[14px] `}>Book your stay</button>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}
