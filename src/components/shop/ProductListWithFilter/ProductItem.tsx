import Image from "next/image";
import PaletteSelector from "@/components/base/palette/PaletteSelector";
import BuyButton from "./BuyButton";
import ProductLabel from "../ProductLabel";

import { useHover } from "@/hooks/useHover";

type ProductItemProps = {
  selectedCategory: string;
};

const ProductItem = ({ selectedCategory }: ProductItemProps) => {
  const [hoverRef, isHovered] = useHover<HTMLLIElement>();
  return (
    <li
      ref={hoverRef}
      className=" w-[173px] h-[208px] flex flex-col sm:w-[292px] sm:h-[351px] md:w-[295px] md:h-[355px]"
    >
      <div className="relative aspect-[1/1] w-[167px] h-[167px] sm:w-[282px] sm:h-[282px] md:w-[285px] md:h-[285px] my-[6px] mx-[3px] sm:my-[10px] sm:mx-[5px]">
        <Image src="/images/default/Item_plug.jpg" alt="product photo" fill />
        {isHovered && <BuyButton className="bottom-[17px] right-[13px]" />}
        {selectedCategory === "Sale" && (
          <ProductLabel text="Sale" className="bg-labelSale" />
        )}
        {selectedCategory === "Bestseller" && (
          <ProductLabel text="Bestseller" className="bg-accentMain" />
        )}
      </div>
      <div className="flex-1 flex flex-row justify-between ">
        <div className="flex flex-col flex-1 ">
          <p className="text-[10px] sm:text-[17px] md:text-[18px] font-bold">
            Silver Bracelet
          </p>
          <p className="text-[9px] sm:text-[15px] md:text-[16px] font-semibold">
            $1049.00
          </p>
        </div>
        <div className="flex items-end">
          <PaletteSelector isHovered={isHovered} />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
