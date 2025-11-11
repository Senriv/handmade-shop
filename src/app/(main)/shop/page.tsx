"use client";
import { useState, useEffect, useMemo } from "react";
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

import type { Category } from "@/types/categories.types";

export function ShopPage() {
  // product list
  const productCategories: Category[] = ["All", "Sale", "Bestseller"];
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [sortOrder, dispatchSortOrder] = useSortReducer();

  // logic for asc and desc price
  const sortPriceAsc =
    sortOrder === "asc" ? true : sortOrder === "desc" ? false : undefined;

  // logic for categories
  const { onSale, bestseller } = useMemo(() => {
    switch (selectedCategory) {
      case "Sale":
        return { onSale: true, bestseller: undefined };
      case "Bestseller":
        return { onSale: undefined, bestseller: true };
      default:
        return { onSale: undefined, bestseller: undefined };
    }
  }, [selectedCategory]);

  // pagination
  const [page, setPage] = useState(0);

  const pageSize = 12;

  const { data: getAllGoods } = useGetAllProductsQuery({
    page,
    size: pageSize,
    sortPriceAsc,
    onSale,
    bestseller,
  });

  const totalPages = getAllGoods?.totalPages ?? 0;

  const products = getAllGoods?.content ?? [];

  // getBanner
  const {
    data: banerData,
    error: bannerError,
    isLoading: banerLoading,
  } = useGetBanerQuery();

  // set 1st page if something was changed
  useEffect(() => {
    setPage(0);
  }, [sortOrder, selectedCategory]);

  return (
    <>
      {banerLoading && <HeroSliderSkeleton />}
      {!banerLoading && !bannerError && <HeroSlider slides={banerData} />}
      {bannerError && <HeroSliderSkeleton />}

      <section className="flex flex-col gap-[14px] sm:gap-[65px] sm:flex-row">
        <FilterSection className="h-7 sm:w-[263px] flex-shrink-0" />
        <div className="flex flex-col  ">
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
    </>
  );
}

export default ShopPage;
