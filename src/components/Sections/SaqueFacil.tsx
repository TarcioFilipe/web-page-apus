'use client'

import { motion } from "framer-motion"

import '@/styles/saqueFacil.css';
import PrimaryButton from "../PrimaryButton";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

export default function SaqueFacil() {
  return (
    <section className="image-idosos h-screen flex flex-col justify-center items-center bg-white text-black py-20">
      <div className="container flex flex-col lg:flex-row lg:px-4">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center lg:text-left lg:w-8/12 lg:items-start"
        >
          <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-1">
            Saque-Fácil: dinheiro na mão,
            na hora em que você precisar
          </p>
          <p className="text-3xl font-bold mb-4 lg:text-2xl">
            Crédito em conta em até 24 horas
            úteis, de forma simples e fácil.
          </p>
          <ul className="">
            <li className="flex justify-center lg:justify-start">
              <p className="font-light text-md w-10/12 xl:text-lg text-zinc-800 mb-6">
                Pagamento parcelado.
                Juros atrativos.
                Solicite no App, ou lojas físicas.
              </p>
            </li>
            <li className="flex justify-center lg:justify-start">
              <p className="font-light text-md w-10/12 xl:text-lg text-zinc-800 mb-6">
                Sujeito à análise de crédito, disponibilidade de
                limite e de margem consignável.
              </p>
            </li>
            <li className="flex justify-center lg:justify-start">
              <p className="font-light text-md w-10/12 xl:text-lg text-zinc-800 mb-6">
                Evite o superendividamento, contrate saques
                sempre de acordo com suas condições financeiras
              </p>
            </li>
          </ul>

          <div className="flex flex-col items-center lg:flex-row lg:gap-4">
            <PrimaryButton onClick={() => console.log('clicado')} className="flex flex-row items-center justify-center gap-2 cursor-pointer xl:text-lg xl:h-16 hover:bg-zinc-800">
              Fale conosco 
              <FaWhatsapp />
            </PrimaryButton>

            <div className="hidden relative lg:flex w-[64px] h-[64px] lg:w-[88px] lg:h-[88px]"> 
              <Image 
                src="/images/qrcode.png"
                alt="Imagem do cartao"
                fill={true}
                objectFit="contain"
                className="relative"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex w-4/12 h-full bg-red">
          <div className="w-4 h-4">

          </div>
        </div>
      </div>
    </section>
  )
}