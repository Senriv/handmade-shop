"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HeroSliderSkeleton() {
  return (
    <section className="mt-5 mb-[14px] sm:mt-[17px] sm:mb-[21px] md:mt-6 md:mb-10 flex justify-center">
      <div
        className="
          w-full
          h-[168px]
          sm:h-[349px]
          md:h-[450px]
          min-w-[361px]
          sm:min-w-[706px]
          md:w-[1260px]
          rounded-2xl
          overflow-hidden
        "
      >
        <Skeleton
          width="100%"
          height="100%"
          baseColor="#e5e7eb"
          highlightColor="#f3f4f6"
        />
      </div>
    </section>
  );
}
