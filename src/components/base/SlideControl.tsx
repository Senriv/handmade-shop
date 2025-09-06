import React from "react";
import ScevronSVG from "@/assets/main/default/arrow_product_card.svg";

type SlideControlProps = {
  direction?: "left" | "right";
};

const SlideControl = ({ direction = "left" }: SlideControlProps) => {
  return (
    <button
      type="button"
      className={`absolute top-1/2  -translate-y-1/2 w-10 h-10 rounded-[11px] border border-1.5 border-primary500 bg-background flex justify-center items-center ${
        direction === "left" ? "left-5" : "right-5 rotate-180"
      } `}
    >
      <ScevronSVG />
    </button>
  );
};

export default SlideControl;
