'use client'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default function MySwiper({imageList, slidesPerView =1, spaceBetween=50 }: {imageList: {image: string; h3: string; p: string; button1: string; button2: string}[]; slidesPerView?: number ;spaceBetween?: number}) {

  
  return (
    <div className='w-full h-full  bg-primary z-20' >

    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop
      navigation
      pagination={{ clickable: true }}
      >
      {imageList.map(imgSrc=>
        <SwiperSlide  key={imgSrc.image}>{
<section className="max-w-none h-[400] w-full ">
  <div className="relative overflow-hidden h-full">
    <img src={imgSrc.image} alt="Vibrant close-up of fresh organic vegetables and fruits marketplace"  className="absolute w-full h-full inset-0 bg-cover bg-center"  style={{backgroundImage: 'bg-linear-to-r from-[#3b82f6] to-[#ef4444]'}} />
    <div className="relative h-full w-full flex flex-col items-center md:items-start justify-center md:px-25 px-12 bg-linear-to-r from-[#00C950E5] to-[#05DF7280]">
      <h2 className="text-4xl font-bold text-white leading-tight mb-4 md:w-[30%]">{imgSrc.h3}</h2>
      <p className="text-lg text-white/90 mb-8 font-medium md:w-[30%]">{imgSrc.p}</p>
      <div className="flex gap-4">
        <Link href="/products"><button className="bg-white text-green-400 px-8 py-3.5 cursor-pointer rounded-lg font-bold transition-all transform hover:scale-105">{imgSrc.button1}</button></Link>
        <Link href="/products"><button className="bg-transparent hover:bg-white/20 cursor-pointer text-white backdrop-blur-md border border-white/30 px-8 py-3.5 rounded-lg font-bold transition-all">{imgSrc.button2}</button></Link>
      </div>
    </div>
  </div>
</section>

          }</SwiperSlide>)}

      
    </Swiper>
    </div>
  );
};