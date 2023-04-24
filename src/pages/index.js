import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <>
    <div className='relative'>
      <Image src="/bg-main-mobile.png"  width={300} height={300} className="w-[100%]"/>
      <Image src="/bg-card-back.png" width={300} height={200} className="w-[75%] absolute right-2 top-4" />
    </div>
    <div className='-mt-28'>
      <Card />

    </div>

    </>

  )
}
