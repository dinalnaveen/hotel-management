import React from 'react'
import styles from './hotelDescription.module.css'
import {AiOutlineStar} from 'react-icons/ai';
import {TbHexagon3Filled , TbHexagon9Filled} from 'react-icons/tb';
import Image from 'next/image';
import Map from '@/public/Images/Map.png'


export default function HotelDescription() {
  return (
    <div className='grid grid-cols-2  w-[80%] mx-auto mt-[30px]'>
        <div className='mt-[70px] '>
            <h2 className={`${styles.title} text-[30px] opacity-80 mb-[20px] text-center font-normal`}>Our Villas</h2>
            
            <div className={`${styles.star} flex items-center gap-1 justify-center mb-[24px]`}>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
            </div>

            <div className='flex flex-col gap-3 mb-[24px]'>
            <p className={`${styles.paragraph} text-[12px] text-center `}>Welcome to our boutique villa, a charming and unique accommodation option located just a short distance from the beach. Our villa boasts an antique traditional vibe, providing a warm and welcoming atmosphere that will take you to another time and place.</p>
            <p className={`${styles.paragraph} text-[12px] text-center `}>As you step inside, you'll be greeted by an elegant living area decorated with antique furnishings and traditional artworks. The villa features seven well-appointed bedrooms providing luxurious ambience unprecedented and modern amenities.</p>
            <p className={`${styles.paragraph} text-[12px] text-center `}>We are a small island with big hearts. Wherever you may find yourself in Sri Lanka, rest easy knowing that an open door is never too far away.</p>
            </div>

            <div className='flex items-center gap-10 justify-center mb-[24px]'>
            <div className='flex items-center gap-3' >
                <TbHexagon3Filled className={`${styles.hexagon} text-[24px]`}/>
                <p className={`${styles.paragraph} text-[14px] font-semibold `}>Destination</p>
            </div>

            <div className='flex items-center gap-3' >
                <TbHexagon9Filled className={`${styles.hexagon} text-[24px]`}/>
                <p className={`${styles.paragraph} text-[14px] font-semibold `}>Luxury Properties</p>
            </div>
            </div>

            <div className=' text-center'>
                <button className={`${styles.customButton}   py-[10px] px-4 rounded text-[14px] `}>
                    Book your stay
                </button>
            </div>

        </div>


        <div className=''>
          <Image src={Map} alt='Map' className=' absolute'/>
            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[30px] ml-[130px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        JAFFNA
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[220px] ml-[80px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        NEGOMBO
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[20px] ml-[100px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        COLOMBO
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[-200px] ml-[340px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        TRINCOMALEE
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[20px] ml-[220px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        SIGIRIYA
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[70px] ml-[230px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        KANDY
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[180px] ml-[180px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        GALLE
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[-90px] ml-[380px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        YALA
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

            <button className={`${styles.mapButton } py-[4px] px-2  text-[12px] mt-[-70px] ml-[90px] z-10 relative shadow-md flex items-center gap-3 hover:scale-105 rounded-md`}>
                        KALUTHARA
                        <p className='bg-[#07AF56] px-1.5 rounded-sm text-white font-normal'>2</p>
            </button>

        </div>

        
    </div>
  )
}
