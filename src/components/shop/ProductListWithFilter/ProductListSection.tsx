"use client";

import ProductItem from "./ProductItem";

import FilterDownSVG from "@/assets/main/catalog/filter_to_low.svg";
import FilterUpSVG from "@/assets/main/catalog/filter_to_high.svg";

interface ProductListSectionProps {
  productCategories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOrder: "asc" | "desc" | null;
  dispatchSortOrder: React.Dispatch<
    { type: "TOGGLE_ASC" } | { type: "TOGGLE_DESC" }
  >;
}

const ProductListSection = ({
  productCategories,
  selectedCategory,
  setSelectedCategory,
  dispatchSortOrder,
  sortOrder,
}: ProductListSectionProps) => {
  return (
    <section>
      {/* categories + fliter svgs */}
      <div className="flex flex-row items-center justify-between mb-[14px]">
        {/* categories */}
        <ul className="flex flex-row gap-[14px]">
          {productCategories.map((category) => (
            <li key={category}>
              <button
                className={`${
                  selectedCategory === category
                    ? "text-accentMain border-b-[2px] border-accentMain pb-[7px]"
                    : "text-textMain"
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
                    ? "text-accentMainActive"
                    : "text-mediumGray"
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
                  sortOrder === "asc"
                    ? "text-accentMainActive"
                    : "text-mediumGray"
                }
              />
            </button>
          </li>
        </ul>
      </div>
      {/* product list */}
      <ul className="flex flex-wrap gap-x-3 gap-y-[6px] sm:gap-y-[15px]">
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
        <ProductItem selectedCategory={selectedCategory} />
      </ul>
    </section>
  );
};

export default ProductListSection;
