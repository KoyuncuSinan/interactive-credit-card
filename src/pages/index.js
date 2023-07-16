import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
    <main className=''>
      <div className='relative'>
        <Image src="/bg-main-mobile.png"  width={300} height={300} className="w-[100%] umd:hidden"/>
        <Image src="/bg-main-desktop.png" width={500} height={0} className="h-screen hidden umd:block"/>
        <Image src="/bg-card-back.png" width={300} height={200} className="w-[75%] 
        absolute right-2 top-4
        umd:w-[20%] umd:left-[20rem] umd:top-[30rem] umd:shadow-2xl" />
    </div>
    <div className='-mt-28'>
      <Card />

    </div>

    </main>

  )
}
