"use client";
import Image from "next/image";
import { useReducer } from "react";
import BlueSVG from "@/assets/temporarry/blue.svg";
import GreenSVG from "@/assets/temporarry/green.svg";
import RainbowSVG from "@/assets/temporarry/rainbow.svg";
import RedSVG from "@/assets/temporarry/red.svg";
import MinusSVG from "@/assets/ProductCard/minus.svg";
import PlusSVG from "@/assets/ProductCard/plus.svg";

type State = {
  amount: number;
};

type Action = { type: "increment" } | { type: "decrement" };

const ProductCard = () => {
  // Product quantity

  const initialState = { amount: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "increment":
        return { amount: state.amount + 1 };
      case "decrement":
        return { amount: Math.max(0, state.amount - 1) };
      default:
        return state;
    }
  }
  return (
    <section className="my-20">
      <div className="flex flex-row gap-11">
        <Image
          src="/temporarry/Product.jpg"
          alt="product card"
          width={610}
          height={610}
          className="shrink-0 grow-0 object-cover block"
          style={{ maxWidth: "none", height: "610px", width: "610px" }}
        />
        <div className="flex flex-col">
          <h1 className="text-[28px] font-bold leading-[16px] mb-6">
            Vintage Bronze Pendant with Amber
          </h1>
          <h2 className="text-[22px] font-bold leading-[16px]">$129.00</h2>
          <div className="border-[0.3px] border-accentMain w-[528px] my-[18px]" />
          <div className="flex flex-row gap-[68px] mb-4">
            <h2 className="font-semibold text-[15px] leading-[16px] whitespace-nowrap">
              Short Description:
            </h2>
            <p className="text-mediumGray text-[14px] leading-[23.94px]">
              Exquisite handcrafted pendant featuring a large natural amber
              stone set in an ornate bronze frame inspired by the Baroque era.
            </p>
          </div>
          <div className="flex justify-between items-end mb-9">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row gap-1 text-[15px] leading-[16px]">
                <p className="text-lightGray">Categories:</p>
                <p className="text-mediumGray">Jewelry</p>
              </li>
              <li className="flex flex-row gap-1 text-[15px] leading-[16px]">
                <p className="text-lightGray">Tags:</p>
                <p className="text-mediumGray">Metal</p>
              </li>
              <li className="flex flex-row gap-1 text-[15px] leading-[16px]">
                <p className="text-lightGray">Size:</p>
                <p className="text-mediumGray">Metal</p>
              </li>
              <li className="flex flex-row gap-1 text-[15px] leading-[16px]">
                <p className="text-lightGray">Color:</p>
                <div className="flex flex-row">
                  <BlueSVG />
                  <GreenSVG />
                  <RainbowSVG />
                  <RedSVG />
                </div>
              </li>
            </ul>
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-row gap-[22px]">
                <div className="flex flex-row items-center gap-[6px] h-[41px] border border-accentMain rounded-md">
                  <button
                    type="button"
                    className="pt-[6px] pr-[10px] pb-[7px] pl-[10px]"
                    onClick={() => dispatch({ type: "decrement" })}
                  >
                    <MinusSVG />
                  </button>
                  <p>{state.amount}</p>
                  <button
                    type="button"
                    className="pt-[6px] pr-[10px] pb-[7px] pl-[10px]"
                    onClick={() => dispatch({ type: "increment" })}
                  >
                    <PlusSVG />
                  </button>
                </div>
                <button
                  type="button"
                  className="h-[41px] flex items-center border border-accentMain rounded-md py-[9px] px-[28px] font-bold text-accentMain whitespace-nowrap"
                >
                  SHOP NOW
                </button>
              </div>
              <p className="text-[15px] text-accentMain font-semibold">
                Free shipping from $85
              </p>
            </div>
          </div>
          <div className="text-[14px] leading-[24px] text-mediumGray">
            <ul className="list-disc pl-5">
              <li>Materials: Bronze, natural amber</li>
              <li>Technique: Hand-casting and engraving</li>
              <li>Style: Vintage, Baroque</li>
              <li>Pendant size: approximately 5 cm x 3 cm</li>
              <li>Chain length: 50 cm</li>
            </ul>
            <h3>Features:</h3>
            <ul>
              <li>✓ Handmade</li>
              <li>✓ Unique amber patterns</li>
              <li>✓ Perfect gift for lovers of classic beauty</li>
            </ul>
            <p>
              Exquisite handcrafted pendant featuring a large natural amber
              stone set in an ornate bronze frame inspired by the Baroque era.
              The warm hues of genuine amber create a captivating play of light,
              emphasizing the uniqueness of each piece. The bronze chain
              complements the vintage design, adding an authentic antique charm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
