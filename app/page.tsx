import Image from 'next/image'
import Hero from './components/Hero'
import Recentsearches from './components/Recentsearches'
import HotelDescription from './components/HotelDescription'

export default function Home() {
  return (
    <div className='flex-row gap-5'>
      <Hero/>
      <Recentsearches/>
      <HotelDescription/>
    </div>
  )
}
