"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import type BanerProps from "@/types/baner.types";

interface HeroSliderProps {
  slides?: BanerProps[];
}

function HeroSlider({ slides }: HeroSliderProps) {
  if (!slides?.length) return null;
  return (
    <section className="mt-5 mb-[14px] sm:mt-[17px] sm:mb-[21px] md:mt-6 md:mb-10 flex justify-center">
      <Swiper
        className="custom-swiper min-w-[361px] min-h-[168px] sm:min-w-[706px] sm:h-[349px] md:w-[1260px] md:h-[450px]"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.productId}>
            <div className="relative w-full h-full ">
              <Link
                href={`/shop/${slide.productId}`}
                className="block w-full h-full relative"
              >
                <Image
                  src={slide.imageUrl}
                  alt="baner"
                  fill
                  priority={false}
                  className="object-cover cursor-pointer"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
