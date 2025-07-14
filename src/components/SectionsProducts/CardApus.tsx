'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

import '@/styles/cardApus.css'


export default function CardApus() {
  return (
    <section className="flex flex-col w-full bg-[#FFA415] lg:items-center overflow-visible"> 
      <div className='relative flex flex-col container items-center lg:flex-row'>
        <div className='imageCard absolute h-[280px] w-[340px] md:h-[320px] md:w-[400px] lg:h-[500px] lg:w-[560px] 2xl:h-[600px] 2xl:w-[660px]'>
          <Image  
            src="/images/cartao_capa.png"
            alt="Imagem do cartao"
            fill={true}
            objectFit="cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container flex flex-col text-center px-4 py-10 items-center lg:items-start lg:text-start lg:w-7/12"
        >
          <p className="text-3xl text-white lg:text-4xl/12 lg:w-11/12 xl:mb-6 2xl:text-5xl/14 font-black mb-4">
            Com o cartão APUS digital
            recheado de benefícios
            você acontece
          </p>
          <p className="font-light text-lg w-8/12 lg:w-full xl:text-2xl/8 text-black mb-6">
            É aceito em qualquer lugar do mundo, com
            descontos exclusivos em várias marcas parceiras
            e você não paga nada para ter seu cartão
          </p>  
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex w-full lg:w-5/12'
        >
          <div className={`relative flex w-full h-[280px] md:h-[320px] xl:w-full`}>
            {/* <Image  
              src="/images/cartao_capa.png"
              alt="Imagem do cartao"
              fill={true}
              objectFit="cover"
            /> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}