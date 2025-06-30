'use client';

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Nossos Benefícios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-100 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Benefício 1</h3>
            <p className="text-sm text-gray-600">Descrição do benefício.</p>
          </motion.div>
          {/* ...outros cards */}
        </div>
      </div>
    </section>
  );
}
