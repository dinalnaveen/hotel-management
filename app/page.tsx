import Image from 'next/image'
import Hero from './components/Hero'
import Recentsearches from './components/Recentsearches'
import HotelDescription from './components/HotelDescription'
import Offers from './components/Offers'
import Recommended from './components/Recommended'

export default function Home() {
  return (
    <div className='flex-row gap-5'>
      <Hero/>
      <Recentsearches/>
      <HotelDescription/>
      <Offers/>
      <Recommended/>
    </div>
  )
}
