"use client";

import ProductItem from "./ProductItem";

import FilterDownSVG from "@/assets/main/catalog/filter_to_low.svg";
import FilterUpSVG from "@/assets/main/catalog/filter_to_high.svg";

import type { Product } from "@/redux/api/apiRequests";
import type { Category } from "@/types/categories.types";

interface ProductListSectionProps {
  productCategories: Category[];
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
  sortOrder: "asc" | "desc" | null;
  dispatchSortOrder: React.Dispatch<
    { type: "TOGGLE_ASC" } | { type: "TOGGLE_DESC" }
  >;
  data: Product[];
}

const ProductListSection = ({
  productCategories,
  selectedCategory,
  setSelectedCategory,
  dispatchSortOrder,
  sortOrder,
  data,
}: ProductListSectionProps) => {
  return (
    <section className="mb-4 sm:mb-11 md:mb-[50px]">
      {/* categories + fliter svgs */}
      <div className="flex flex-row items-center justify-between mb-[14px]">
        {/* categories */}
        <ul className="flex flex-row gap-[14px]">
          {productCategories.map((category) => (
            <li key={category}>
              <button
                className={`${
                  selectedCategory === category
                    ? "text-primary500 border-b-[2px] border-primary500 pb-[7px]"
                    : "text-textPrimary"
                } text-[15px] font-bold`}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        {/* fliter svgs */}
        <ul className="flex flex-row gap-[15px]">
          <li>
            <button
              type="button"
              className="py-1 px-[1px]"
              onClick={() => dispatchSortOrder({ type: "TOGGLE_DESC" })}
            >
              <FilterDownSVG
                className={
                  sortOrder === "desc"
                    ? "text-primary700"
                    : "text-textSecondary"
                }
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="py-1 px-[1px]"
              onClick={() => dispatchSortOrder({ type: "TOGGLE_ASC" })}
            >
              <FilterUpSVG
                className={
                  sortOrder === "asc" ? "text-primary700" : "text-textSecondary"
                }
              />
            </button>
          </li>
        </ul>
      </div>
      {/* product list */}
      <ul className="flex flex-wrap gap-x-3 gap-y-[35px] sm:gap-x-5  md:sm:gap-x-[38px]">
        {data &&
          data.map((item) => (
            <ProductItem
              key={item.productId}
              item={item}
              selectedCategory={selectedCategory}
            />
          ))}
      </ul>
    </section>
  );
};

export default ProductListSection;
