"use client";

import Image from "next/image";

import { useCounter } from "@/hooks/productItem/PurchasesQuantety";
import { useBack } from "@/hooks/reusableUIthings/useBackButton";

import SlideControl from "@/components/base/SlideControl";

import ArrowBackSVG from "@/assets/main/default/arrow_back_page.svg";
import ZoomSVG from "@/assets/main/default/zoom_product_card.svg";

import MinusSVG from "@/assets/ProductCard/minus.svg";
import PlusSVG from "@/assets/ProductCard/plus.svg";

const ProductCard = () => {
  // for navigation
  const back = useBack("/shop");

  // purchases counter
  const { value: items, increment, decrement } = useCounter(0);

  return (
    <section className="mt-5 sm:mt-[38px] ">
      {/* button back */}
      <button
        type="button"
        onClick={back}
        className="flex gap-[6px] items-center text-[15px] text-primary500 mb-[30px] md:mb-[34px]"
      >
        <ArrowBackSVG /> Back
      </button>
      <div className="flex flex-col sm:flex-row sm:gap-[60px] md:gap-[43px]">
        {/* main iamge */}

        <div className="relative  min-w-[358px] max-w-[430px] min-h-[358px] max-h-[430px] sm:min-w-[430px] sm:max-w-[630px] sm:min-h-[430px] sm:max-h-[630px]  rounded-lg overflow-hidden  mb-[22px] aspect-square md:w-[630px] md:h-[630px]">
          <Image
            src="/images/default/Item_plug.jpg"
            alt="item image"
            fill
            className="object-cover"
          />
          <button
            type="button"
            className="p-1 absolute top-[15px] right-[15px] hidden"
          >
            <ZoomSVG />
          </button>
          <SlideControl direction="left" />
          <SlideControl direction="right" />
        </div>
        {/* description */}
        <div className="flex-1">
          <h1 className="text-[20px] font-bold leading-[18px] mb-5 sm:text-[28px] sm:leading-[24px] sm:mb-[30px]">
            Vintage Bronze Pendant with Amber
          </h1>
          <h2 className="text-[17px] font-bold leading-[16px] mb-3 sm:text-[22px] sm:leading-[18px]">
            $129.00
          </h2>
          <span className="flex h-[1px] w-full bg-primary500"></span>
          {/* short descr */}
          <div className="mt-4 flex justify-between items-baseline mb-[30px]">
            <p className="text-[14px] font-bold leading-[16px]">
              Short Description:
            </p>
            <p className="text-[14px] leading-[24px] xs:w-[258px] sm:w-[315px] md:w-[403px]">
              Exquisite handcrafted pendant featuring a large natural amber
              stone set in an ornate bronze frame inspired by the Baroque era.
            </p>
          </div>
          <div className="flex flex-row gap-[30px] justify-end mb-5 md:hidden">
            {/* quantity */}
            <div className="w-[111px] h-[41px] border border-primary500 rounded-md px-[5px] py-[3px] flex justify-between items-center ">
              <button
                type="button"
                className="p-[13px]"
                onClick={decrement}
                disabled={items === 0}
              >
                <MinusSVG />
              </button>
              <p>{items}</p>
              <button type="button" className="p-[11px]" onClick={increment}>
                <PlusSVG />
              </button>
            </div>
            {/* add to cart */}
            <div>
              <button
                type="button"
                className="w-[149px] h-[41px] border border-primary500 rounded-md text-[14px] font-bold uppercase text-primary500"
              >
                Add to cart
              </button>
              <p className="mt-[7px] text-primary500 text-[15px]">
                Free shipping from $85
              </p>
            </div>
          </div>
          {/* info */}
          <div className="flex flex-col gap-3 mb-[30px] md:hidden">
            <ul className="flex flex-col gap-3">
              <li className="flex gap-1">
                <p className="text-lightGray text-[15px]">Categories: </p>
                <p className="text-[15px]">Jewelry</p>
              </li>
              <li className="flex gap-1">
                <p className="text-lightGray text-[15px]">Material: </p>
                <p className="text-[15px]">Metal</p>
              </li>
              <li className="flex gap-1">
                <p className="text-lightGray text-[15px]">Size: </p>
                <p className="text-[15px]">Оne size</p>
              </li>
            </ul>
            <div className="flex gap-1">
              <p className="text-lightGray text-[15px]">Color: </p>
              <div>ColorPeaker!!!!!</div>
            </div>
          </div>

          {/* mobile full description */}
          <div className="leading-[18px] text-[15px] mb-[30px] sm:hidden">
            <ul className="flex flex-col">
              <li className="flex ">
                <p>Pendant size:</p>
                <p>approximately 5 cm x 3 cm</p>
              </li>
              <li className="flex ">
                <p>Chain length:</p>
                <p> 50 cm</p>
              </li>
              <li className="flex ">
                <p>Technique:</p>
                <p>Hand-casting and engraving</p>
              </li>
              <li className="flex ">
                <p>Style:</p>
                <p>Vintage, Baroque</p>
              </li>
              <li>
                <p>Features:</p>
                <p>✓ Handmade</p>
                <p>✓ Unique amber patterns</p>
                <p>✓ Perfect gift for lovers of classic beauty</p>
              </li>
            </ul>
            <p className="mt-6">
              Exquisite handcrafted pendant featuring a large natural amber
              stone set in an ornate bronze frame inspired by the Baroque era.
              The warm hues of genuine amber create a captivating play of light,
              emphasizing the uniqueness of each piece. The bronze chain
              complements the vintage design, adding an authentic antique charm.
            </p>
          </div>
          {/* desctop description */}
          <div className="md:flex flex-col hidden">
            <div className="flex justify-between items-center">
              {/* left side */}
              <div className="flex flex-col gap-4">
                <ul className="flex flex-col gap-4">
                  <li className="flex">
                    <p>Categories: </p>
                    <p>Jewelry</p>
                  </li>
                  <li className="flex">
                    <p>Material: </p>
                    <p>Metal</p>
                  </li>
                  <li className="flex">
                    <p>Size: </p>
                    <p>Оne size</p>
                  </li>
                </ul>
                <div className="flex">
                  <p>Color: </p>
                  <div>ColorPeaker!!!!!</div>
                </div>
              </div>
              {/* right side */}
              <div>
                <div className="flex gap-[34px]">
                  <div className="w-[111px] h-[41px] border border-primary500 rounded-md px-[5px] py-[3px] flex justify-between items-center ">
                    <button
                      type="button"
                      className="p-[13px]"
                      onClick={decrement}
                      disabled={items === 0}
                    >
                      <MinusSVG />
                    </button>
                    <p>{items}</p>
                    <button
                      type="button"
                      className="p-[11px]"
                      onClick={increment}
                    >
                      <PlusSVG />
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-[149px] h-[41px] border border-primary500 rounded-md text-[14px] font-bold uppercase text-primary500"
                    >
                      Add to cart
                    </button>
                    <p className="mt-[7px] text-primary500 text-[15px]">
                      Free shipping from $85
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* full description */}
            <div className="leading-6">
              <ul className="flex flex-col">
                <li className="flex ">
                  <p>Pendant size:</p>
                  <p>approximately 5 cm x 3 cm</p>
                </li>
                <li className="flex ">
                  <p>Chain length:</p>
                  <p> 50 cm</p>
                </li>
                <li className="flex ">
                  <p>Technique:</p>
                  <p>Hand-casting and engraving</p>
                </li>
                <li className="flex ">
                  <p>Style:</p>
                  <p>Vintage, Baroque</p>
                </li>
                <li>
                  <p>Features:</p>
                  <p>✓ Handmade</p>
                  <p>✓ Unique amber patterns</p>
                  <p>✓ Perfect gift for lovers of classic beauty</p>
                </li>
              </ul>
              <p className="mt-6">
                Exquisite handcrafted pendant featuring a large natural amber
                stone set in an ornate bronze frame inspired by the Baroque era.
                The warm hues of genuine amber create a captivating play of
                light, emphasizing the uniqueness of each piece. The bronze
                chain complements the vintage design, adding an authentic
                antique charm.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* full description tablet */}
      <div className="xs:hidden mt-[74px] md:hidden">
        <ul className="flex flex-col">
          <li className="flex ">
            <p>Pendant size:</p>
            <p>approximately 5 cm x 3 cm</p>
          </li>
          <li className="flex ">
            <p>Chain length:</p>
            <p> 50 cm</p>
          </li>
          <li className="flex ">
            <p>Technique:</p>
            <p>Hand-casting and engraving</p>
          </li>
          <li className="flex ">
            <p>Style:</p>
            <p>Vintage, Baroque</p>
          </li>
          <li>
            <p>Features:</p>
            <p>✓ Handmade</p>
            <p>✓ Unique amber patterns</p>
            <p>✓ Perfect gift for lovers of classic beauty</p>
          </li>
        </ul>
        <p className="mt-6">
          Exquisite handcrafted pendant featuring a large natural amber stone
          set in an ornate bronze frame inspired by the Baroque era. The warm
          hues of genuine amber create a captivating play of light, emphasizing
          the uniqueness of each piece. The bronze chain complements the vintage
          design, adding an authentic antique charm.
        </p>
      </div>

      {/* full description */}
      <div className="leading-6 md:hidden">
        <ul className="flex flex-col">
          <li className="flex ">
            <p>Pendant size:</p>
            <p>approximately 5 cm x 3 cm</p>
          </li>
          <li className="flex ">
            <p>Chain length:</p>
            <p> 50 cm</p>
          </li>
          <li className="flex ">
            <p>Technique:</p> <p>Hand-casting and engraving</p>
          </li>
          <li className="flex ">
            <p>Style:</p>
            <p>Vintage, Baroque</p>
          </li>
          <li>
            <p>Features:</p>
            <p>✓ Handmade</p>
            <p>✓ Unique amber patterns</p>
            <p>✓ Perfect gift for lovers of classic beauty</p>
          </li>
        </ul>
        <p className="mt-6">
          Exquisite handcrafted pendant featuring a large natural amber stone
          set in an ornate bronze frame inspired by the Baroque era. The warm
          hues of genuine amber create a captivating play of light, emphasizing
          the uniqueness of each piece. The bronze chain complements the vintage
          design, adding an authentic antique charm.
        </p>
      </div>
      {/* Bestsellers part */}
      <div className=" mb-[30px] sm:my-[80px] md:my-[65px]">
        <h3 className="text-[23px] font-bold text-primary500 mb-5">
          Bestseller
        </h3>
        <div className="flex gap-[10px]"></div>
      </div>
    </section>
  );
};

export default ProductCard;
