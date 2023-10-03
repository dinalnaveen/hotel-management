import React from 'react'
import Image from 'next/image'
import styles from './header.module.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Header() {
  return (
    <div className='flex justify items-center p-1 pl-10 pr-7 shadow-sm'>
        <div className=' absolute'>
            <Image src='/logo.png' alt='logo'
            width={90} height={70}/>
        </div>
        <ul className='flex gap-10 ml-[220px]'>
            <li className={`${styles.menuItem} cursor-pointer hover:scale-105`}>Home</li>
            <li className={`${styles.menuItem} cursor-pointer hover:scale-105`}>Gallery</li>
            <li className={`${styles.menuItem} cursor-pointer hover:scale-105`}>Offers</li>
            <li className={`${styles.menuItem} cursor-pointer hover:scale-105`}>About Us</li>
            <li className={`${styles.menuItem} cursor-pointer hover:scale-105`}>FAQs</li>
        </ul>

        <div className='flex gap-10 items-center ml-[460px] mr-[60px] '>
        <Image src='/flag2.png' alt='logo'
            width={40} height={30}/>
            <h3 className={`${styles.icon} cursor-pointer hover:scale-105`} >USD</h3>
            <button className={`${styles.btn} bg-transparent  py-2 px-8 border hover:border-transparent rounded`}>
            Login
            </button>
            <i className="fi fi-rs-shopping-cart"></i>
            <div className=' absolute right-0 mr-[60px]'>
            <AiOutlineShoppingCart className="w-6 h-6 text-[#545455cb] hover:scale-110 cursor-pointer hover:text-[#545455]"/>
            </div>

        </div>
        
    </div>
  )
}