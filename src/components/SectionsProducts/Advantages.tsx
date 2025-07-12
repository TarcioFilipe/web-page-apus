'use client'

import { motion } from 'framer-motion'

export default function Advantages() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-white py-20">
      <div className="flex flex-col container w-full h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center py-4 items-center text-black lg:items-start lg:text-start"
        >
          <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4 xl:mb-8">
            Quais as vantagens da portabilidade?
          </p> 
        </motion.div>

        <div className='flex flex-col gap-2 w-full mt-8'>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            className='grid grid-cols-3 gap-2'
          >
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>FACILIDADE</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2}}
            className='grid grid-cols-3 gap-2'
          >
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>AUTONOMIA</p>
            </div>
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>OFERTAS</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='grid grid-cols-3 gap-2'
          >
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>GRATUIDADE</p>
            </div>
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>GRATUIDADE</p>
            </div>
            <div className='flex items-start justify-start min-h-[120px] p-2 md:p-4 md:min-h-[208px] xl:min-h-[342px] xl:p-8 bg-amber-300'>
              <p className='text-black text-md font-bold md:text-lg lg:text-2xl 2xl:text-3xl'>LIBERDADE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}