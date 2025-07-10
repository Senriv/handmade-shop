"use client";
import React from "react";

import PlusSVG from "@/assets/main/catalog/pluss.svg";

interface BuyButtonProps {
  className?: string;
}

const BuyButton: React.FC<BuyButtonProps> = ({ className }) => {
  const handleAddToCart = () => {
    console.log("Добавил в корзину товар, молодец!");
  };

  return (
    <button
      type="button"
      className={`absolute p-[11px] bg-white border-2  border-accentMain rounded-xl ${className}`}
      onClick={handleAddToCart}
    >
      <PlusSVG />
    </button>
  );
};

export default BuyButton;
