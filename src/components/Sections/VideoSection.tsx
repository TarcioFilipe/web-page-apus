'use client';

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="min-h-screen flex flex-col items-center bg-white py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto h-full px-4 text-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-black text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-2"
          >
            Descubra o que o Credcesta tem para você
          </motion.h2>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm lg:text-md font-medium text-gray-700 mb-6"
          >
            Aperte o play e conheça as vantagens do seu Cartão de Benefício Consignado.
          </motion.h6>
          <div className="flex flex-col h-full gap-2 container justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center bg-gray-300 w-full h-[520px] rounded-lg p-6"
            >
              <span className="text-black">
                Video
              </span>
            </motion.div>
            {/* ...outros cards */}
          </div>
        </div>
      </div>
    </section>
  );
}
