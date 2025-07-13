'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'


export default function ProposalSection() {
  return (
    <section className="flex flex-col w-full bg-[#FFA415] lg:items-center lg:justify-center overflow-hidden py-20 lg:h-[80vh] "> 
      <div className='relative flex flex-col container items-center lg:flex-row px-4'>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container flex flex-col text-center px-4 py-10 items-center lg:items-start lg:text-start lg:w-5/12"
        >
          <p className="text-5xl lg:text-4xl/12 lg:w-11/12 xl:mb-6 xl:text-5xl 2xl:text-6xl/14 font-black mb-4">
            Nosso <br/>
            Propósito
          </p> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex w-full justify-center lg:w-7/12'
        >
          <p className="text-center font-light text-lg w-10/12 lg:text-left lg:text-2xl lg:w-full xl:text-3xl/10 text-white mb-6">
            Com uma conta 100% digital e toda a segurança do
            Bradesco, colocamos você em primeiro lugar,
            enfatizando nosso propósito de conectar pessoas e
            sonhos. Nossos serviços, financeiros e não financeiros,
            estão disponíveis para todo o Brasil, ajudando a criar
            um sistema mais democrático, inclusivo e que valorize
            a diversidade.
          </p>  
        </motion.div>
      </div>
    </section>
  )
}