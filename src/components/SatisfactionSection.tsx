import { motion } from "framer-motion"
import Image from "next/image"
import '@/styles/satisfaction.css'

export default function SatisfactionSection() {
  return (
    <section className="relative h-screen w-full flex flex-col pt-20 bg-white items-center text-black overflow-hidden">
      <Image  
        src="/images/arraow_right.png"
        alt="Imagem do cartao"
        width={400}
        height={400}
        className="arrow"
      />
      <div className="flex flex-col container w-full h-full lg:flex-row">
        <div className="flex flex-col w-full h-[40%] lg:h-full lg:justify-center lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 60}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            className="p-4 text-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4">
              Mais de 3 milhões de usuários satisfeitos
            </h1>

            <p className="w-full font-light text-md lg:w-full xl:text-lg/8 text-zinc-800 mb-6">
              Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper
            </p>
          </motion.div>
        </div>
        <div className="image-bg flex flex-col relative w-full h-[60%] lg:h-full lg:w-7/12">
          <motion.div 
            initial={{ opacity: 0, y: 40}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8 }}
            className="image-casal h-full w-full flex flex-col items-end overflow-hidden"
          >
          </motion.div>
        </div>
      </div>
    </section>
  )
}