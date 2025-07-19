import React from "react";

type BadgeColor = "bg-labelSale" | "bg-primary500";

interface ProductBadgeProps {
  text: string;
  bgColor: BadgeColor;
}
const ProductBadge = ({ text, bgColor }: ProductBadgeProps) => {
  return (
    <div className={` px-5 font-bold text-white rounded-md ${bgColor}`}>
      {text}
    </div>
  );
};

export default ProductBadge;
