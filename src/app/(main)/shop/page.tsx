"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSlider, { HeroSlide } from "@/components/shop/HeroSlider";
import ProductListWithFilter from "@/components/shop/ProductListWithFilter/ProductListWithFilter";
import Filter from "@/components/shop/ProductListWithFilter/Filter";
import ProductList from "@/components/shop/ProductListWithFilter/ProductList";

import { useSortReducer } from "@/hooks/productListWithFilter/useSortReducer";

export default function ShopPage() {
  // slider
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  // product list
  const productCategories = ["All", "Sale", "Bestseller"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, dispatchSortOrder] = useSortReducer();

  useEffect(() => {
    const simulatedSlides: HeroSlide[] = [
      {
        id: "1",
        imageUrl: "/images/HeroSliderBg/slide_1.jpg",
        title: "HANDMADE WITH LOVE",
        subtitle: "Welcome to Shop",
        description:
          "Explore our curated collection of handcrafted goods that bring warmth and uniqueness to your life.",
        priority: true,
      },
      {
        id: "2",
        imageUrl: "/images/HeroSliderBg/slide_2.jpg",
        title: "UNIQUE & HANDCRAFTED",
        subtitle: "New Arrivals",
      },
      {
        id: "3",
        imageUrl: "/images/HeroSliderBg/slide_3.jpg",
        title: "SHOP OUR COLLECTION",
      },
      {
        id: "4",
        imageUrl: "/images/HeroSliderBg/slide_4.jpg",
        title: "SHOP OUR COLLECTIONio",
      },
    ];

    setHeroSlides(simulatedSlides);
  }, []);

  return (
    <>
      <HeroSlider slides={heroSlides} />
      <ProductListWithFilter className="flex flex-col gap-[14px] sm:gap-[65px] sm:flex-row">
        <Filter className="h-7 sm:w-[263px]" />
        <ProductList
          productCategories={productCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOrder={sortOrder}
          dispatchSortOrder={dispatchSortOrder}
          className=""
        />
      </ProductListWithFilter>
      <Link href="/shop/r8KlsnF93JdWqmXz4aTp7HcB">
        <div className="p-3 hover:bg-mediumGray ">
          Click me and You&apos;ll see the magic
        </div>
      </Link>
    </>
  );
}
