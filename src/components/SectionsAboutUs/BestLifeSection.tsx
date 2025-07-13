'use client'

import { motion } from 'framer-motion'

import Image from "next/image";
import '@/styles/benefitsClub.css'
import '@/styles/bestLife.css'

export default function BestLife() {
  return (
    <section className="relative imageLife h-screen imageLife flex flex-col items-center bg-white overflow-hidden py-20 pt-40">
      <div className="flex flex-col h-full container px-8">
        <div className='arrowTop absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex w-full  text-black lg:w-7/12'
        >
          <p className='text-left text-2xl xl:text-3xl 2xl:text-4xl/14'>
            Viva o melhor da vida <br/>
            com a APUS ao seu lado.
          </p>
        </motion.div>
      </div>
    </section>
  )
}