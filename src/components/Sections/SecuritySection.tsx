'use client'

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";

import Image from "next/image";
import '@/styles/securityScreen.css'

export default function SecuritySection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize(); 
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  
  return (
    <section ref={sectionRef} className="h-screen flex flex-col bg-white text-black items-center">
      <motion.div 
        className={`flex h-full flex-col justify-center container items-center mb-12 lg:flex-row`}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center px-4 py-4 items-center lg:items-start lg:text-start lg:w-6/12"
        >
          <h1 className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">
            Facilidade na contratação e
            segurança em todas as suas transações.
          </h1>
          <p className="font-light text-md w-8/12 lg:w-full xl:text-lg/8 text-zinc-800 mb-6">
            O Credcesta está pronto para atender às suas
            realizações pessoais. Confira o que preparamos
            para você.
          </p>
          <button className="bg-black text-white font-semibold px-6 py-2 xl:py-4 xl:px-12 rounded-lg cursor-pointer hover:bg-zinc-800 transition">
            Ver agora
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="element-security flex flex-col items-center w-full lg:h-full lg:justify-center lg:w-6/12 mt-10 overflow-hidden"
        >
          <motion.div 
            style={{ rotateY }}
            className={`relative flex w-full h-[500px] 
              lg:w-[700px] lg:h-[600px] 
              xl:w-full xl:h-[800px]`
            }
          >
            <Image  
              src="/images/appApus.png"
              alt="Celular image"
              fill={true}
              objectFit="contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}