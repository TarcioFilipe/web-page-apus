'use client'

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import Image from 'next/image';
import { useState } from 'react';

import '@/styles/probability.css'


const faqs = [
  {
    question: 'O que é ?',
    answer: 'Você pode contratar o cartão Credcesta diretamente pelo nosso app ou com um de nossos correspondentes autorizados.',
  },
  {
    question: 'Como fnciona?',
    answer: 'Não! O cartão Credcesta não possui taxa de anuidade nem de adesão.',
  },
  {
    question: 'Meus dados estarão seguros?',
    answer: 'Pode confiar: o Open Finance é um ecossistema seguro, garantindo que suas informações estejam 100% no app next e também fora dele. Além disso, se preferir, você pode alterar ou remover as informações do seu compartilhamento a qualquer momento.',
  },
];

export default function Portability() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-[#FFA415] py-20">
      <div className="flex flex-col container w-full h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center py-4 items-center text-black lg:items-start lg:text-start lg:w-[85%]"
        >
          <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4 xl:mb-8">
            Portabilidade
          </p>
          <p className="font-light text-lg w-full md:w-10/12 lg:w-full lg:text-2xl/8 xl:text-3xl/12 text-black mb-6">
            Traga seu empréstimo para cá e comece a economizar! Com a portabilidade,
            você transfere seu contrato de outro banco e aproveita condições mais
            vantajosas, como taxas menores e mais flexibilidade no pagamento. É simples,
            rápido e 100% seguro.
          </p>  
        </motion.div>
        <motion.div>
          <LayoutGroup>
            <div className="flex flex-col grow gap-4 mt-4 text-black">
              {faqs.map((faq, index) => {
                const isOpen = expanded === index

                return (
                  <motion.div
                    key={index}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className="w-full lg:w-[70%]"
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : index)}
                      className="w-full py-4 flex items-start gap-2 text-left font-black text-2xl cursor-pointer lg:text-3xl"
                    >
                      {faq.question}
                      <motion.span
                        layout
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={{ duration: 0.2 }}
                        className="text-white relative flex items-start justify-center max-w-[42px] max-h-[42px]"
                      >
                        <Image src="/images/arrow_right_white.png" width={128} height={128} alt="arrow" className='arrowWhite' />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-answer"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pr-6 pb-4 text-lg text-black overflow-visible xl:text-2xl"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </LayoutGroup>
        </motion.div>
      </div>
    </section>
  )
}