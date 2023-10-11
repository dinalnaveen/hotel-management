import React from 'react';
import styles from './recentsearches.module.css';
import Image from 'next/image';
import Recent from '@/data/Recent';

export default function RecentSearches() {
  return (
    <div className='w-[80%] mx-auto mt-[620px] '>
      <h2 className={`${styles.title} text-[24px] opacity-80 mb-[10px]`}>Your recent searches</h2>
      
<div className='grid grid-cols-3'>
    {Recent.map((item,index)=>(
      <div className="card w-96 bg-base-100 shadow-xl p-3 hover:bg-slate-100 rounded-lg cursor-pointer">
        <div className="flex items-center">
          <Image src={item.image} alt={item.name} width={81} height={81} />
          <div className="ml-4">
            <h3 className='text-[16px] font-semibold opacity-80 my-2'>{item.name}</h3>
            <p className='text-[16px] font-normal opacity-80 my-2'>{item.date}</p>
          </div>
        </div>
      </div>
))}

</div>
    </div>
  );
}
