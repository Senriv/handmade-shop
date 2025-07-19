// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function HeroSlider() {
//   return (
//     <section className="mt-6 mb-10 h-[450px]">
//       <Swiper
//         className="h-full"
//         modules={[Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<span class="${className} custom-bullet"></span>`;
//           },
//         }}
//         autoplay={{ delay: 3000 }}
//         loop
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div
//             className="h-full bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/images/HeroSliderBg/HeroSlider1.jpg')",
//             }}
//           >
//             <div className="max-w-[674px] w-full pt-[70px] pl-[42px]">
//               <p className="font-bold text-[14px] leading-[1.14] uppercase tracking-[0.1em] mb-[5px]">
//                 Welcome to Shop
//               </p>
//               <h1 className="text-[70px] font-bold leading-[1] uppercase mb-[5px]">
//                 HANDMADE WITH <span className="text-primary500">LOVE</span>
//               </h1>
//               <p className="max-w-[584px] w-full text-[14px] font-bold leading-[1.71] text-textSecondary mb-[45px]">
//                 Explore our curated collection of handcrafted goods that bring
//                 warmth and uniqueness to your life.
//               </p>
//               <button
//                 className="font-bold leading-[1.25] uppercase text-white py-2 px-[26px] bg-primary500 rounded-md"
//                 type="button"
//               >
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div
//             className="h-full bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/images/HeroSliderBg/HeroSlider1.jpg')",
//             }}
//           >
//             <div className="max-w-[674px] w-full pt-[70px] pl-[42px]">
//               <p className="font-bold text-[14px] leading-[1.14] uppercase tracking-[0.1em] mb-[5px]">
//                 Welcome to Shop
//               </p>
//               <h1 className="text-[70px] font-bold leading-[1] uppercase mb-[5px]">
//                 HANDMADE WITH <span className="text-primary500">LOVE</span>
//               </h1>
//               <p className="max-w-[584px] w-full text-[14px] font-bold leading-[1.71] text-textSecondary mb-[45px]">
//                 Explore our curated collection of handcrafted goods that bring
//                 warmth and uniqueness to your life.
//               </p>
//               <button
//                 className="font-bold leading-[1.25] uppercase text-white py-2 px-[26px] bg-primary500 rounded-md"
//                 type="button"
//               >
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div
//             className="h-full bg-cover bg-center"
//             style={{
//               backgroundImage: "url('/images/HeroSliderBg/HeroSlider1.jpg')",
//             }}
//           >
//             <div className="max-w-[674px] w-full pt-[70px] pl-[42px]">
//               <p className="font-bold text-[14px] leading-[1.14] uppercase tracking-[0.1em] mb-[5px]">
//                 Welcome to Shop
//               </p>
//               <h1 className="text-[70px] font-bold leading-[1] uppercase mb-[5px]">
//                 HANDMADE WITH <span className="text-primary500">LOVE</span>
//               </h1>
//               <p className="max-w-[584px] w-full text-[14px] font-bold leading-[1.71] text-textSecondary mb-[45px]">
//                 Explore our curated collection of handcrafted goods that bring
//                 warmth and uniqueness to your life.
//               </p>
//               <button
//                 className="font-bold leading-[1.25] uppercase text-white py-2 px-[26px] bg-primary500 rounded-md"
//                 type="button"
//               >
//                 SHOP NOW
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }

// export default HeroSlider;

"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export interface HeroSlide {
  id: string;
  imageUrl: string;
  title?: string;
  subtitle?: string;
  description?: string;
  priority?: boolean;
}

interface HeroSliderProps {
  slides: HeroSlide[];
}

function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <section className="mt-5 mb-[14px] sm:mt-[17px] sm:mb-[21px] md:mt-6 md:mb-10 flex justify-center">
      <Swiper
        className="custom-swiper min-w-[361px] min-h-[168px] sm:min-w-[966px] sm:min-h-[343px] md:w-[1260px] md:h-[450px]"
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
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full aspect-[3/1]">
              <Image
                src={slide.imageUrl}
                alt={`Slide ${slide.title}`}
                fill
                className="object-fill"
                priority={slide.priority === true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
