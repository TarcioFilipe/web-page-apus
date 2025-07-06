'use client'

import { useEffect, useState } from "react"

import { motion } from "framer-motion"
import Header from "./Header"
import Image from "next/image"
import '@/styles/hero.css'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg = 1024px
    };

    checkScreenSize(); // inicial
    window.addEventListener('resize', checkScreenSize); // escuta resize

    return () => window.removeEventListener('resize', checkScreenSize); // limpa
  }, []);

  return (
    <section className="h-screen flex flex-col bg-white text-black items-center">
      <div className="min-h-18 w-full"></div>
      <motion.div 
        className={`${!isMobile && 'element'} flex h-full flex-col justify-center container items-center mb-12 lg:flex-row`}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center px-4 py-4 items-center lg:text-start lg:w-5/12"
        >
          <h1 className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">O que importa na vida em um só cartão.</h1>
          <p className="font-light text-md w-8/12 lg:w-full xl:text-lg/8 text-zinc-800 mb-6">
            Você é servidor público, aposentado ou
            pensionista do INSS? Tenha tudo o que
            importa na vida em um só cartão aceito
            em milhares de estabelecimentos
            espalhados pelo País.
          </p>
          <button className="bg-black text-white font-semibold px-6 py-2 xl:py-4 xl:px-12 rounded-lg hover:bg-gray-100 transition">
            Saiba Mais
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center w-full lg:w-7/12"
        >
          <div 
            className={`relative flex w-full h-[320px] lg:w-[550px] lg:h-[450px] xl:w-full`}
          >
            <Image  
              src="/images/cartao_capa.png"
              alt="Imagem do cartao"
              fill={true}
              objectFit="cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
