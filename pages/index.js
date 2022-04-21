import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import img1 from '../assets/1.jpg'
import img2 from '../assets/5.jpg'
import img3 from '../assets/12.jpg'
import imgog from '../assets/5739253.jpg'
import plane from '../assets/pngwing.com.png'
import { useState } from 'react'

export default function Home() {

  const [isAnimating, SetIsAnimating] = useState(false)

const boxAnims = {
  Click: {

  }
} 


  return (
    <div>
      {/* 1 */}
      <div className='text-3xl content-center justify-center	w-full shadow-md py-2 bg-slate-100	 font-bold flex'>
        Welcome
      </div>
      {/* 2 */}
      <div className='flex flex-row w-full border-b-2 '>
        <div className='text-lg w-1/3 p-12 border-r-2 '>
          <p>
            This is a animation test, lets see how it works, hmmm, framer motion would be used here for that. alright that was it.</p>
          <br />
          <p>Commodo magna ea officia sint cillum id duis magna do labore ea velit est veniam.</p>
        </div>

        <div className='w-2/3 content-center justify-center flex p-12'>
          <Image src={imgog} height={400} width={620}></Image>     </div>
      </div>
      {/* 3 */}
      <div className='flex justify-center p-12 border-b-2'>
        <div className=' overflow-hidden rounded-xl  shadow-lg mx-12'  >
          <Image src={img1} height={170} width={170} />     </div>
        <div className=' overflow-hidden rounded-xl  shadow-lg mx-12'  >
          <Image src={img2} height={170} width={170} />     </div>
        <motion.div className=' overflow-hidden rounded-xl shadow-lg mx-12' drag="x" dragConstraints={{ right: 20, left: 20 }} whileHover={{
          scale: 1.07
        }} whileTap={{
          scale: 0.95,
        }} transition={{
          duration: 0.2
        }} >
          <Image src={img3} height={170} width={170} />     </motion.div>


      </div>
      {/* 4 */}
      < motion.div className='flex flex-row w-full border-b-2 min-w-full py-8' animate={{
        x: isAnimating ? '75vw' : '-10rem',
        opacity: isAnimating ? 1 : 0.5, scale: 1,
      }}
        initial={{
          opacity: 0.5,
          x: '-5rem',
          scale: 0.7,
        }}

        transition={
          {

            type: 'spring',
            stiffness: 300,
            damping: 100,
          }
        }

        onClick={() => SetIsAnimating(!isAnimating)}
      >
        <Image src={plane} height={190} width={320} className=""
        />
      </motion.div>
      {/* 5 */}
      <div className='text-3xl content-center justify-center	w-full shadow-md py-2 bg-slate-100	 font-bold flex'>
        Bye Bye
      </div>
    </div >
  )
}
