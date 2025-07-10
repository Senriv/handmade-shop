import React from "react";

interface ProductLabelProps {
  text: string;
  className: string;
}
const ProductLabel = ({ text, className }: ProductLabelProps) => {
  return (
    <div
      className={`absolute top-[17px] right-[7px] px-5 font-bold text-white rounded-md ${className}`}
    >
      {text}
    </div>
  );
};

export default ProductLabel;
