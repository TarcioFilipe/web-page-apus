'use client'

import { motion, AnimatePresence, LayoutGroup  } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

import '@/styles/probability.css'
import '@/styles/financialBoost.css'


const faqs = [
  {
    question: 'Como faço para contratar o cartão Credcesta?',
    answer: 'Você pode contratar o cartão Credcesta diretamente pelo nosso app ou com um de nossos correspondentes autorizados.',
  },
  {
    question: 'Existe anuidade ou taxa de adesão?',
    answer: 'Não! O cartão Credcesta não possui taxa de anuidade nem de adesão.',
  },
  {
    question: 'Quais são os benefícios do cartão?',
    answer: 'O cartão oferece compras com desconto em folha, clube de vantagens, produtos agregados e muito mais.',
  },
]

export default function HelpSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-white text-black py-20 overflow-hidden">
      <div className="container flex flex-col h-full justify-center px-4 lg:pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col h-full text-center z-20"
        >
          <div className="flex flex-col items-center">
            <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">
              Tem alguma duvida? Nos ajudamos!
            </p>
            <p className="font-light text-center text-md w-10/12 lg:text-lg lg:w-full xl:text-2xl text-zinc-800 mb-6">
              perguntas frequentes
            </p>
          </div>

          <LayoutGroup>
            <div className="flex flex-col justify-center grow gap-4 mt-10 z-10">
              {faqs.map((faq, index) => {
                const isOpen = expanded === index

                return (
                  <motion.div
                    key={index}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className="border-t border-b border-zinc-950"
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left font-bold text-2xl hover:bg-zinc-50 transition"
                    >
                      {faq.question}
                      <motion.span
                        layout
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                        className="text-white relative flex items-start justify-center max-w-[42px] max-h-[42px] lg:max-w-[64px]  lg:max-h-[64px]"
                      >
                        <Image src="/images/arrow_right_orange.png" width={128} height={128} alt="arrow" className='arrowWhite' />
                      </motion.span>
                    </button>

                    {isOpen && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="px-6 pb-4 text-lg text-zinc-700 overflow-visible xl:text-2xl"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </LayoutGroup>
        </motion.div>


        <p className="text-center text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black z-10">
          Entre emcontato conosco
        </p>

        <div className='arrowBottom absolute  w-[400px] h-[400px] lg:w-[800px] lg:h-[800px]'>
          <Image src="/images/arraow_right.png" alt='Arrow right' fill objectFit='cover'/>
        </div>
      </div>
    </section>
  )
}