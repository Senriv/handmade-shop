"use client";
import React from "react";

import PlusSVG from "@/assets/main/catalog/pluss.svg";

interface AddToCartButtonProps {
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ className }) => {
  const handleAddToCart = () => {
    console.log("Добавил в корзину товар, молодец!");
  };

  return (
    <button
      type="button"
      className={` p-[11px] bg-white border-2  border-primary500 rounded-xl ${className}`}
      onClick={handleAddToCart}
    >
      <PlusSVG className="text-primary500" />
    </button>
  );
};

export default AddToCartButton;
