'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import '@/styles/aboutUs.css'

export default function AboutUsSection() {
  return (
    <section className="h-[70vh] w-full flex flex-col items-center bg-white text-black pt-20 overflow-hidden md:h-[80vh] lg:h-[70vh]">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='container relative h-full w-full flex flex-col items-center justify-center md:px-4 lg:flex-row'
      >
        <div className='arrowUs absolute w-[300px] h-[300px] opacity-40  lg:w-[400px] lg:h-[400px] 2xl:h-[500px]  2xl:w-[500px] '>
          <Image 
            src="/images/arraow_right.png" 
            alt='Arrow right' 
            fill 
            sizes='(max-width: 640px)'
            className='object-cover'
          />
        </div>

        <div className='flex w-full justify-center lg:w-4/12'>
          <p className='text-center text-4xl lg:text-4xl/12 xl:text-5xl 2xl:text-6xl/14 font-black mb-4 lg:text-left'>
            Quem <br/>
            somos nós
          </p>
        </div>
        <div className='relative flex w-full h-full lg:w-8/12'>
          <div className='imageUs absolute w-full h-[400px] md:h-[500px] lg:w-full lg:h-[440px] xl:h-[500px] 2xl:h-[620px] '>
            <Image src="/images/aboutUs.png" alt='sobre nos' fill className='object-cover'/>
          </div>
        </div>
      </motion.div>
    </section>
  )
}