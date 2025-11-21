import Image from "next/image";
import Link from "next/link";
import PaletteSelector from "@/components/base/palette/PaletteSelector";
import AddToCartButton from "./AddToCartButton";
import ProductBadge from "../ProductBadge";

import { useHover } from "@/hooks/reusableUIthings/useHover";

import type { Product } from "@/redux/api/apiRequests";
import type { Category } from "@/types/categories.types";

type ProductItemProps = {
  item: Product;
  selectedCategory: Category;
};

const ProductItem = ({ selectedCategory, item }: ProductItemProps) => {
  const [hoverRef, isHovered] = useHover<HTMLLIElement>();
  const { productName, sendingDataShort } = item;

  const isBestseller =
    selectedCategory === "Bestseller" || sendingDataShort.bestseller === true;

  const isOnSale =
    selectedCategory === "Sale" ||
    (sendingDataShort.discountPrice !== null &&
      sendingDataShort.price > sendingDataShort.discountPrice);

  return (
    <li ref={hoverRef} className="  flex flex-col ">
      <Link href={`/shop/${item.productId}`}>
        <div className="relative aspect-[1/1] w-[167px] h-[167px] sm:w-[307px] sm:h-[307px] md:w-[285px] md:h-[285px] mb-2 sm:mb-[14px]">
          <Image
            src={
              item.sendingDataShort.imageUrl || "/images/default/Item_plug.jpg"
            }
            alt={productName}
            fill
          />
          <div className="absolute bottom-[17px] right-[13px]">
            {isHovered && <AddToCartButton />}
          </div>

          <div className="absolute top-[17px] right-[6px] flex flex-col gap-1 items-end">
            {isOnSale && <ProductBadge text="Sale" bgColor="bg-labelSale" />}
            {isBestseller && (
              <ProductBadge text="Bestseller" bgColor="bg-primary500" />
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-row justify-between ">
          <div className="flex flex-col flex-1 ">
            <p className="text-[10px] sm:text-[17px] md:text-[18px] font-bold">
              {productName}
            </p>
            <div className="flex gap-[18px]">
              {isOnSale ? (
                <div className="flex gap-3 text-[9px] sm:text-[15px] md:text-[16px] font-semibold">
                  <p className="">${sendingDataShort.discountPrice}</p>
                  <p className="line-through decoration-oldPrice text-oldPrice">
                    ${sendingDataShort.price}
                  </p>
                </div>
              ) : (
                <p className="text-[9px] sm:text-[15px] md:text-[16px] font-semibold">
                  ${sendingDataShort.price}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-end">
            <PaletteSelector
              isHovered={isHovered}
              colors={sendingDataShort.variants}
            />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
