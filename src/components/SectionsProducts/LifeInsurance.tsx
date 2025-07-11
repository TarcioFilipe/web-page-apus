'use client'

import Image from "next/image";
import { motion } from 'framer-motion'

import '@/styles/lifeInsurence.css'
import '@/styles/satisfaction.css'

export default function LifeInsurance() {
  return (
    <section className="relative h-screen w-full flex flex-col bg-white items-center text-black overflow-hidden lg:h-[512px] xl:h-[640px] 2xl:h-[786px]">
      <div className="flex flex-col container w-full h-full lg:flex-row-reverse">
        <div className='arrowBottomRight absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>


        <div className="flex flex-col w-full h-[40%] lg:h-full lg:justify-center lg:w-6/12">
          <motion.div
            initial={{ opacity: 0, y: 60}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            className="flex flex-col p-4 text-center items-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">
              Seguro de vida
            </h1>

            <p className="w-10/12 font-light text-md lg:w-full xl:text-lg/8 2xl:text-2xl text-zinc-800 mb-6">
              A forma de cuidar de quem você ama
              está aqui. Com o Seguro de Vida <span className="font-bold">APUS</span>
              digital, você garante tranquilidade e
              segurança para o futuro da sua família.
            </p>
            <p className="w-10/12 font-light text-md lg:w-full xl:text-lg/8 2xl:text-2xl text-zinc-800 mb-6">
              Ao longo do contrato, todo o patrimônio
              acumulado é destinado aos beneficiários
              indicados, assegurando que os frutos do
              seu esforço estejam protegidos.
            </p>
          </motion.div>
        </div>
        <div className="image-bg-life flex flex-col relative w-full h-[60%] lg:h-full lg:w-6/12">
          <motion.div 
            initial={{ opacity: 0, y: 40}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8 }}
            className="image-idosa h-full w-full flex flex-col items-end overflow-hidden"
          >
          </motion.div>
        </div>
      </div>
    </section>  
  )
}