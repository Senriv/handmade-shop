"use client";

import { useParams } from "next/navigation";

import Image from "next/image";

import { useCounter } from "@/hooks/productItem/PurchasesQuantety";
import { useBack } from "@/hooks/reusableUIthings/useBackButton";
import {
  useGetProductByIdQuery,
  useGetAllProductsQuery,
} from "@/redux/api/apiRequests";

import ProductItem from "@/components/shop/ProductListWithFilter/ProductItem";

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

  // get id from url
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  // get info by id
  const { data, isLoading, isError } = useGetProductByIdQuery(numericId);

  console.log(data);

  const { data: Bestsellers } = useGetAllProductsQuery({
    bestseller: true,
    page: 0,
    size: 4,
  });

  const bestsellers = Bestsellers?.content ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Something went wrong</div>;
  }

  const {
    title,
    shortDescription,
    description,
    price,
    // discountPrice,
    category,
    image,
    materials,
    attributes,
  } = data;

  const technique = attributes.find((item) => item.name === "Technique")?.value;
  const style = attributes.find((item) => item.name === "Style")?.value;

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

        <div className="relative  w-[358px]  h-[358px]  sm:min-w-[430px] sm:max-w-[630px] sm:min-h-[430px] sm:max-h-[630px]  rounded-lg overflow-hidden  mb-[22px] aspect-square md:w-[630px] md:h-[630px]">
          <Image
            src={image || "/images/default/Item_plug.jpg"}
            alt={title}
            fill
            className="object-cover"
          />
          <button
            type="button"
            className="p-1 absolute top-[15px] right-[15px] hidden md:block"
          >
            <ZoomSVG />
          </button>
          <SlideControl direction="left" />
          <SlideControl direction="right" />
        </div>
        {/* description */}
        <div className="flex-1">
          <h1 className="text-[20px] font-bold leading-[18px] mb-5 sm:text-[28px] sm:leading-[24px] sm:mb-[30px]">
            {title}
          </h1>
          <h2 className="text-[17px] font-bold leading-[16px] mb-3 sm:text-[22px] sm:leading-[18px]">
            $ {price}
          </h2>
          <span className="flex h-[1px] w-full bg-primary500"></span>
          {/* short descr */}
          <div className="mt-4 flex justify-between items-baseline mb-[30px]">
            <p className="text-[14px] font-bold leading-[16px]">
              Short Description:
            </p>
            <p className="text-[14px] leading-[24px] xs:w-[258px] sm:w-[315px] md:w-[403px]">
              {shortDescription}
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
                <p className="text-[15px]">{category}</p>
              </li>
              <li className="flex gap-1">
                <p className="text-lightGray text-[15px]">Material: </p>
                {materials &&
                  materials.map((item, index) => (
                    <p className="text-[15px]" key={index}>
                      {item}
                    </p>
                  ))}
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
                <p>{style}</p>
              </li>
              <li>
                <p>Features:</p>
                <p>✓ Handmade</p>
                <p>✓ Unique amber patterns</p>
                <p>✓ Perfect gift for lovers of classic beauty</p>
              </li>
            </ul>
            <p className="mt-6">{description}</p>
          </div>
          {/* desctop description */}
          <div className="md:flex flex-col hidden">
            <div className="flex justify-between items-center">
              {/* left side */}
              <div className="flex flex-col gap-4">
                <ul className="flex flex-col gap-4">
                  <li className="flex">
                    <p>Categories: </p>
                    <p>{category}</p>
                  </li>
                  <li className="flex">
                    <p>Material: </p>
                    {materials &&
                      materials.map((item, index) => (
                        <p className="text-[15px]" key={index}>
                          {item}
                        </p>
                      ))}
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
                  <p>{technique}</p>
                </li>
                <li className="flex ">
                  <p>Style:</p>
                  <p>{style}</p>
                </li>
                <li>
                  <p>Features:</p>
                  <p>✓ Handmade</p>
                  <p>✓ Unique amber patterns</p>
                  <p>✓ Perfect gift for lovers of classic beauty</p>
                </li>
              </ul>
              <p className="mt-6">{description}</p>
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
            <p>{technique}</p>
          </li>
          <li className="flex ">
            <p>Style:</p>
            <p>{style}</p>
          </li>
          <li>
            <p>Features:</p>
            <p>✓ Handmade</p>
            <p>✓ Unique amber patterns</p>
            <p>✓ Perfect gift for lovers of classic beauty</p>
          </li>
        </ul>
        <p className="mt-6">{description}</p>
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
            <p>Technique:</p> <p>{technique}</p>
          </li>
          <li className="flex ">
            <p>Style:</p>
            <p>{style}</p>
          </li>
          <li>
            <p>Features:</p>
            <p>✓ Handmade</p>
            <p>✓ Unique amber patterns</p>
            <p>✓ Perfect gift for lovers of classic beauty</p>
          </li>
        </ul>
        <p className="mt-6">{description}</p>
      </div>
      {/* Bestsellers part */}
      <div className=" mb-[30px] sm:my-[80px] md:my-[65px]">
        <h3 className="text-[23px] font-bold text-primary500 mb-5">
          Bestseller
        </h3>
        <div className="flex gap-[10px]">
          <ul className="flex flex-wrap gap-x-3 gap-y-[35px] sm:gap-x-5  md:sm:gap-x-[38px]">
            {bestsellers &&
              bestsellers.map((item) => (
                <ProductItem
                  key={item.productId}
                  item={item}
                  selectedCategory={"Bestseller"}
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
