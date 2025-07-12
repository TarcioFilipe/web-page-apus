'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import '@/styles/benefitsClub.css'
import ListItemCustom from "../ListItemCustom"


export default function BenefitsClub() {
  return (
    <section className="relative h-screen flex flex-col items-center bg-white pt-10 overflow-hidden">
      <div className="flex flex-col justify-center h-full container px-4 lg:flex-row lg:items-center">
        <div className='arrowTop absolute w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]' >
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start lg:w-6/12 z-10"
        >
          <p className="text-black text-3xl text-center lg:text-left lg:text-4xl/12 2xl:text-5xl/14 font-black mb-8 xl:mb-10">
            Clube de benfícios
          </p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black flex flex-col items-start mx-auto lg:justify-center lg:gap-4 lg:mx-0 lg:items-start lg:w-full lg:mt-2  "
          >
            <ListItemCustom
              indexadorClassName="relative flex items-center justify-center rotate-13 max-w-[36px] max-h-[36px]"
              indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
              text="Clube de Vantagens com descontos de até 40%"
              textClassName="text-lg max-w-[280px] md:max-w-[320px] lg:max-w-full lg:text-2xl xl:max-w-11/12 2xl:text-3xl"
            />
            <ListItemCustom
              indexadorClassName="relative flex items-center justify-center rotate-13 max-w-[36px] max-h-[36px]"
              indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
              text="Economia em consultórios e farmácias"
              textClassName="text-lg max-w-[280px] md:max-w-[320px] lg:max-w-full lg:text-2xl xl:max-w-11/12 2xl:text-3xl"
            />
            <ListItemCustom
              indexadorClassName="relative flex items-center justify-center rotate-13 max-w-[36px] max-h-[36px]"
              indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
              text="Acesso a Seguro de Vida"
              textClassName="text-lg max-w-[280px] md:max-w-[320px] lg:max-w-full lg:text-2xl xl:max-w-11/12 2xl:text-3xl" 
            />
            <ListItemCustom
              indexadorClassName="relative flex items-center justify-center rotate-13 max-w-[36px] max-h-[36px]"
              indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
              text="Atendimento digital e personalizado"
              textClassName="text-lg max-w-[280px] md:max-w-[320px] lg:max-w-full lg:text-2xl xl:max-w-11/12 2xl:text-3xl"
            />
            <ListItemCustom
              indexadorClassName="relative flex items-center justify-center rotate-13 max-w-[36px] max-h-[36px]"
              indexador={<Image src="/images/arraow_right.png" width={128} height={128}  alt="arrow" />}
              text="Acesso facilitado a promoções, cupons e serviços essenciais"
              textClassName="text-lg max-w-[280px] md:max-w-[320px] lg:max-w-full lg:text-2xl xl:max-w-11/12 2xl:text-3xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative imageCell flex w-full h-[320px] md:mt-6 lg:w-6/12 lg:h-[500px] xl:h-[600px]"
        >
          <Image  
            src="/images/celular_rotate.png"
            alt="Celular image"
            fill={true}
            objectFit="contain"
          />
        </motion.div>
      </div>
    </section>
  )
}