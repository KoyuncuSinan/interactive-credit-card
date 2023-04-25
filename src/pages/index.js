import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <main className=''>
      <div className='relative'>
        <Image src="/bg-main-mobile.png"  width={300} height={300} className="w-[100%] md:hidden"/>
        <Image src="/bg-main-desktop.png" width={500} height={0} className="h-screen hidden md:block"/>
        <Image src="/bg-card-back.png" width={300} height={200} className="w-[75%] 
        absolute right-2 top-4
        md:w-[20%] md:left-[20rem] md:top-[30rem] md:shadow-2xl" />
    </div>
    <div className='-mt-28'>
      <Card />

    </div>

    </main>

  )
}
