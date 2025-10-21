"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSlider from "@/components/shop/HeroSlider";
import HeroSliderSkeleton from "@/components/shop/skeletons/HeroSliderSkeleton";
import FilterSection from "@/components/shop/ProductListWithFilter/FilterSection";
import ProductListSection from "@/components/shop/ProductListWithFilter/ProductListSection";
import Pagination from "@/components/shop/Pagination";

import {
  useGetAllProductsQuery,
  useGetBanerQuery,
} from "@/redux/api/apiRequests";
import { useSortReducer } from "@/hooks/productListWithFilter/useSortReducer";

export default function ShopPage() {
  // product list
  const productCategories = ["All", "Sale", "Bestseller"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, dispatchSortOrder] = useSortReducer();

  // pagination
  const [page, setPage] = useState(0);

  const pageSize = 12;

  const { data: getAllGoods } = useGetAllProductsQuery({
    page,
    size: pageSize,
  });

  const totalPages = getAllGoods?.totalPages ?? 0;

  const products = getAllGoods?.content ?? [];

  // getBanner
  const {
    data: banerData,
    error: bannerError,
    isLoading: banerLoading,
  } = useGetBanerQuery();

  return (
    <>
      {banerLoading && <HeroSliderSkeleton />}
      {!banerLoading && !bannerError && <HeroSlider slides={banerData} />}
      {bannerError && <HeroSliderSkeleton />}

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
