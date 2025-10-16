import Image from "next/image";
import PaletteSelector from "@/components/base/palette/PaletteSelector";
import AddToCartButton from "./AddToCartButton";
import ProductBadge from "../ProductBadge";

import { useHover } from "@/hooks/reusableUIthings/useHover";

import type { Product } from "@/redux/api/apiRequests";

type ProductItemProps = {
  item: Product;
  selectedCategory?: string;
};

const ProductItem = ({
  selectedCategory,

  item,
}: ProductItemProps) => {
  const [hoverRef, isHovered] = useHover<HTMLLIElement>();
  const { productName, sendingDataShort } = item;
  return (
    <li
      ref={hoverRef}
      className=" w-[173px] h-[208px] flex flex-col sm:w-[292px] sm:h-[351px] md:w-[295px] md:h-[355px]"
    >
      <div className="relative aspect-[1/1] w-[167px] h-[167px] sm:w-[282px] sm:h-[282px] md:w-[285px] md:h-[285px] my-[6px] mx-[3px] sm:my-[10px] sm:mx-[5px]">
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

        <div className="absolute top-[17px] right-[6px]">
          {selectedCategory === "Sale" && (
            <ProductBadge text="Sale" bgColor="bg-labelSale" />
          )}
        </div>

        <div className="absolute top-[17px] right-[6px]">
          {selectedCategory === "Bestseller" && (
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
            <p className="text-[9px] sm:text-[15px] md:text-[16px] font-semibold">
              ${sendingDataShort.price}
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <PaletteSelector
            isHovered={isHovered}
            colors={sendingDataShort.variants}
          />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
