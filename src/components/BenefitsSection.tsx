'use client'

import { motion } from 'framer-motion';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@/styles/benefits.css';
import Icon from '@mdi/react';
import { mdiBriefcaseOutline,mdiGiftOutline, mdiShareVariantOutline } from '@mdi/js';

const items = [
  { id: 1, icon: mdiBriefcaseOutline, title: 'Sindicatos e Associações' },
  { id: 2, icon: mdiGiftOutline, title: 'Clube de Vantagens' },
  { id: 3, icon: mdiShareVariantOutline, title: 'Produtos Agregados' },
];

export default function BenefitsSection() {
  return (
    <section className="h-screen flex flex-col items-center bg-[#FFA415] text-black z-10 py-20">
      <div className='flex flex-col container w-full h-full items-center justify-center'>
        <p className='text-center xl:max-w-6xl text-3xl lg:text-4xl/12 2xl:text-5xl/14 font-black mb-4'>
          O cartão de benefícios especialista em resolver. Entenda por que o Apus digital é considerado o melhor:
        </p>
        <div className="container max-w-full mx-auto px-4 mt-10">
          <Swiper
            slidesPerView={'auto'}  
            spaceBetween={0}
            centeredSlides={true}
            grabCursor={true}
            loop={false}
            initialSlide={1}
            parallax={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 10,
              scale: .8,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="tranding-slide  rounded-xl shadow-md">
                <div className="tranding-slide-content p-6 flex flex-col w-full h-full justify-between">
                  <div className='flex h-full items-center'>
                    <p className="text-md lg:text-2xl font-light">{item.title}</p>
                  </div>
                  <div className="flex items-end justify-end">
                    <Icon path={item.icon} color="#000" className='w-[32px] h-[32px] lg:w-[64px] lg:h-[64px]' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
