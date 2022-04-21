import Head from 'next/head'
import Image from 'next/image'
import img1 from '../assets/1.jpg'
import img2 from '../assets/5.jpg'
import img3 from '../assets/12.jpg'

export default function Home() {
  return (
    <div>
      {/* 1 */}
      <div className='text-3xl content-center justify-center	w-full shadow-md py-2 bg-slate-100	 font-bold flex'>
        Welcome
      </div>
      {/* 2 */}
      <div className='flex flex-row w-full border-b-2 '>
        <div className='text-lg w-1/3 p-12 border-r-2 '>
          This is a animation test, lets see how it works, hmmm, framer motion would be used here for that. alright that was it.</div>

        <div className='w-2/3 content-center justify-center flex p-12'>
          <Image src={`https://image.shutterstock.com/shutterstock/photos/1785067790/display_1500/stock-vector-white-car-state-template-perfect-for-use-in-mobile-applications-banner-web-landing-page-1785067790.jpg`} height={400} width={620}></Image>     </div>
      </div>
      {/* 3 */}
      <div className='flex justify-center p-12 border-b-2'>
        <div className=' overflow-hidden rounded-xl  shadow-lg mx-12'  >
          <Image src={img1} height={170} width={170} />     </div>
        <div className=' overflow-hidden rounded-xl  shadow-lg mx-12'  >
          <Image src={img2} height={170} width={170} />     </div>
        <div className=' overflow-hidden rounded-xl  shadow-lg mx-12'  >
          <Image src={img3} height={170} width={170} />     </div>


      </div>
      {/* 4 */}
      <div className='text-3xl content-center justify-center	w-full shadow-md py-2 bg-slate-100	 font-bold flex'>
        Bye Bye
      </div>
    </div >
  )
}
