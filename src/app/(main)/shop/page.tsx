"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSlider, { HeroSlide } from "@/components/shop/HeroSlider";
import FilterSection from "@/components/shop/ProductListWithFilter/FilterSection";
import ProductListSection from "@/components/shop/ProductListWithFilter/ProductListSection";
import Pagination from "@/components/shop/Pagination";

import { useGetAllProductsQuery } from "@/redux/api/apiRequests";
import { useSortReducer } from "@/hooks/productListWithFilter/useSortReducer";

export default function ShopPage() {
  // slider
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  // product list
  const productCategories = ["All", "Sale", "Bestseller"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, dispatchSortOrder] = useSortReducer();

  // pagination
  const [page, setPage] = useState(0);
  const [pageSize] = useState(12);

  const { data: getAllGoods, isLoading } = useGetAllProductsQuery({
    page,
    size: pageSize,
  });

  const totalPages = getAllGoods?.totalPages ?? 0;

  const products = getAllGoods?.content ?? [];

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
      <section className="flex flex-col gap-[14px] sm:gap-[65px] sm:flex-row">
        <FilterSection className="h-7 sm:w-[263px] flex-shrink-0" />
        <div className="flex flex-col gap-4 sm:gap-11 md:gap-[50px] ">
          <ProductListSection
            productCategories={productCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            dispatchSortOrder={dispatchSortOrder}
            data={products}
            isLoading={isLoading}
          />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </section>
      <Link href="/shop/r8KlsnF93JdWqmXz4aTp7HcB">
        <div className="p-3 hover:bg-textSecondary ">
          Click me and You&apos;ll see the magic
        </div>
      </Link>
    </>
  );
}
