import React from 'react'
import styles from './offers.module.css'
import Image from 'next/image'
import OfferDetails from '@/data/OfferDetails'

export default function Offers() {
  return (
    <div className='w-[80%] mx-auto mt-[100px]'>
      <h2 className={`${styles.title} text-[24px] opacity-80`}>
        Offers {/* Title */}
      </h2>

      <div className='grid grid-cols-2 mx-auto justify-center mt-[20px] '>
        {OfferDetails.map((item, index) => (
          <div className=''>
            <Image src={item.image} alt='offer-images' className=' absolute' width={560} height={192} />

            <div className='relative z-10 p-6 pr-20 '>
              <h3 className={`${styles.paragraph} text-[16px]  z-10 font-semibold`}>
                {item.title} {/* Offer Title */}
              </h3>
              <p className={`${styles.paragraph} text-[14px]  z-10 font-normal my-5`}>
                {item.paragraph} {/* Offer Paragraph */}
              </p>
              <button className={`${styles.customButton} py-[10px] px-4 rounded text-[14px] `}>
                Book your stay {/* "Book Your Stay" Button */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
