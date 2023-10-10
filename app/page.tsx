import Image from 'next/image'
import Hero from './components/Hero'
import Recentsearches from './components/Recentsearches'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Recentsearches/>
    </div>
  )
}
