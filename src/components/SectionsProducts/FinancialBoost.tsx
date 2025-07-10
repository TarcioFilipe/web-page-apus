'use client'

import { motion } from "framer-motion"
import ListItemCustom from "../ListItemCustom"
import Image from "next/image"

import '@/styles/financialBoost.css'


export default function FinancialBoost() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center lg:items-center bg-white text-black py-20 overflow-hidden">
      <div className="flex flex-col container px-4">
        <div className='arrowBottom absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>
        <div className='arrowTop absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start lg:w-8/12 z-10"
        >
          <p className="text-3xl text-center lg:text-left lg:text-4xl/12 2xl:text-5xl/14 font-black mb-8 xl:mb-10">
            Precisa de um impulso financeiro?
          </p>

          <p className="font-light text-center lg:text-left text-lg w-8/12 lg:w-full xl:text-2xl/8 text-black mb-6">
            Na APUS digital você encontra opções
            de empréstimos que se adaptam ao
            seu perfil e momento de vida.
          </p> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-2 lg:items-start lg:mt-8 "
        >
          <ListItemCustom
            indexadorClassName="relative flex items-center justify-center rotate-13 w-[36px] h-[36px]"
            indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
            text="Empréstimo Consignado"
            textClassName="text-lg font-black lg:max-w-[280px] xl:max-w-[340px] lg:text-2xl xl:text-3xl"
          />
          <ListItemCustom
            indexadorClassName="relative flex items-center justify-center rotate-13 w-[36px] h-[36px]"
            indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
            text="Empréstimo Refinanciamento"
            textClassName="text-lg font-black lg:max-w-[280px] xl:max-w-[340px] lg:text-2xl xl:text-3xl"
          />
          <ListItemCustom
            indexadorClassName="relative flex items-center justify-center rotate-13 w-[36px] h-[36px]"
            indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
            text="Empréstimo Servidores Públicos"
            textClassName="text-lg font-black lg:max-w-[280px] xl:max-w-[340px] lg:text-2xl xl:text-3xl" 
          />
          <ListItemCustom
            indexadorClassName="relative flex items-center justify-center rotate-13 w-[36px] h-[36px]"
            indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
            text="Empréstimo INSS"
            textClassName="text-lg font-black lg:max-w-[280px] xl:max-w-[340px] lg:text-2xl xl:text-3xl"
          />
        </motion.div>
      </div>
    </section>
  )
}