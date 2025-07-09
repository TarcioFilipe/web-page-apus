'use client'

import { motion, AnimatePresence, LayoutGroup  } from "framer-motion"
import { useState } from "react"


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

export default function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="h-screen w-full flex flex-col items-center bg-white text-black py-20">
      <div className="container flex flex-col px-4">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">
            Tem alguma duvida? Nos ajudamos!
          </p>
          <p className="font-light text-md w-10/12 lg:text-lg lg:w-full xl:text-2xl text-zinc-800 mb-6">
            perguntas frequentes
          </p>
        </motion.div>

        <LayoutGroup>
          <div className="flex flex-col gap-4 mt-10">
            {faqs.map((faq, index) => {
              const isOpen = expanded === index

              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ layout: { duration: 0.3, type: 'spring' } }}
                  className="border border-zinc-300 rounded-lg"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-2xl hover:bg-zinc-50 transition"
                  >
                    {faq.question}
                    <motion.span
                      layout
                      animate={{ rotate: isOpen ? 0 : -90 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#FFA415]"
                    >
                      ▼
                    </motion.span>
                  </button>

                  {isOpen && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="px-6 pb-4 text-lg text-zinc-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}