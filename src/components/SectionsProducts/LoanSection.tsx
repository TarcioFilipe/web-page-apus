'use client'

import {  motion } from "framer-motion";
import Image from "next/image";
import '@/styles/loanSection.css'

export default function LoanSection() {
  return (
    <section className="image-mao flex flex-col items-center bg-[#FFA415] text-black py-20">
      <motion.div 
        className={`flex h-full flex-col justify-center items-center mb-12 container lg:flex-row`}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container flex flex-col text-center px-4 py-4 items-center lg:items-start lg:text-start lg:w-6/12"
        >
          <p className="text-lg lg:text-2xl/12 2xl:text-3xl/14 font-bold mb-2">
            Empréstimos
          </p>
          <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-8 xl:mb-10">
            Soluções para você
            tirar todos os seus
            planos do papel.
          </p>
          <p className="font-light text-lg w-8/12 lg:w-full xl:text-2xl/8 text-black mb-6">
            Na APUS digital você encontra opções
            de empréstimos que se adaptam ao
            seu perfil e momento de vida.
          </p>  
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center w-full lg:h-full lg:justify-center lg:w-6/12 mt-10 overflow-hidden"
        >
          <motion.div className="relative flex w-full h-[380px] lg:h-[450px] xl:w-full xl:h-[600px]">
            {/* <Image  
              src="/images/celular_mao.png"
              alt="Celular com mao image"
              fill={true}
              objectFit="contain"
            /> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}