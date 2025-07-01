'use client';

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto h-full px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-black text-gray-900 mb-2"
        >
          Descubra o que o Credcesta tem para você
        </motion.h2>
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-medium text-gray-700 mb-6"
        >
          Aperte o play e conheça as vantagens do seu Cartão de Benefício Consignado.
        </motion.h6>
        <div className="flex flex-col h-full gap-2 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center bg-gray-100 w-full h-[520px] rounded-lg p-6"
          >
            <span className="text-black">
              Video
            </span>
          </motion.div>
          {/* ...outros cards */}
        </div>
      </div>
    </section>
  );
}
