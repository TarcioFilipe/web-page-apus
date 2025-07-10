'use client'

import { motion } from 'framer-motion';
import '@/styles/welcome.css'
import Image from 'next/image';

export default function Welcome() {
  return(
    <section className="h-screen imageElement w-full flex flex-col items-center bg-white text-black pt-18 overflow-hidden">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='container relative h-full w-full flex items-center justify-center px-4'
      >
        <div className='arrowElement absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>
        <div className='flex w-10/12 h-[50%] lg:w-6/12'>
          <p className='text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4'>
            Conheça
            nossos produtos
          </p>
        </div>
        <div className='flex w-2/12 lg:w-6/12'>

        </div>
      </motion.div>
    </section>
  )
} 