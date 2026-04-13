"use client";
import {
  Navigation,
  Pagination,
  A11y,
  Virtual,
  Controller,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

export default function ProductCarosul({
  imageList,
  slidesPerView = 1,
  spaceBetween = 50,
}: {
  imageList: string[] | undefined;
  slidesPerView?: number;
  spaceBetween?: number;
}) {
const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSwiper={setMainSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Controller]}
        controller={{ control: thumbSwiper  }}
      >
        <div className="flex ">
          {imageList?.map((image) => (
            <SwiperSlide key={image}>
              <div className=" ">
                <img src={image} alt={image} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <Swiper
        modules={[Virtual, Controller]}
        onSwiper={setThumbSwiper}
        spaceBetween={5}
        slidesPerView={4}
        
        
      >
        {imageList?.map((slideContent, index) => (
          <SwiperSlide className=" cursor-pointer shadow p-3 mb-3" key={slideContent} virtualIndex={index} onClick={() => mainSwiper?.slideTo(index)}>
            <img src={slideContent} alt={slideContent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
