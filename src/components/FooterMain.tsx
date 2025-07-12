"use client";

import Link from "next/link";
import Image from "next/image";

import FacebookSvg from "./base/FacebookSvg";
import InstagramSvg from "./base/InstagramSvg";
import ErrorSVG from "@/assets/footer-icons/error_close.svg";
import { useFooterSubscription } from "@/hooks/useFooterSubscription";

export default function FooterMain() {
  const { email, error, handleEmailChange, handleJoin, handleResetEmailField } =
    useFooterSubscription();

  return (
    <footer className="bg-mint">
      <div className="max-w-[767px] mx-auto px-[14px] sm:px-[30px] sm:max-w-[1439px] md:px-[90px] md:min-w-[1440px]">
        {/* mobile view */}
        <div className="block sm:hidden">
          <div className="pt-5 flex flex-col">
            {/* join us */}
            <div className="max-w-[358px] flex flex-col  mb-[5px] ">
              <h1 className="text-[18px] font-bold mb-[14px] leading-[16px]">
                Pssst... Want the good stuff first?
              </h1>

              <div className="flex h-10 w-full relative">
                <input
                  className={`outline-none py-3 px-4 text-[14px] flex-grow border border-r-0 rounded-l-[6px] ${
                    error ? "border-error" : "border-accentMain"
                  }`}
                  id="email"
                  type="email"
                  placeholder="email@gmail.com "
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                <button
                  className={`text-white text-[18px] font-bold leading-[0.88] py-3 pl-[22px] pr-[27px] ${
                    error ? "bg-lightGray cursor-not-allowed" : "bg-accentMain"
                  } rounded-r-[6px]`}
                  type="button"
                  onClick={handleJoin}
                >
                  Join
                </button>
                <div className="absolute right-[90px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  {error && (
                    <button type="button" onClick={handleResetEmailField}>
                      <ErrorSVG className="text-error" />
                    </button>
                  )}
                </div>
              </div>

              <p
                className={`ml-2 mt-1 text-[10px] transition-opacity duration-200 ${
                  error ? "text-error opacity-100" : "opacity-0"
                }`}
              >
                *Please enter a valid email address
              </p>
            </div>

            {/* 4 coloums  */}
            <ul className="flex flex-row justify-between w-full ">
              {/* categories */}
              <li className="">
                <ul className="flex flex-col gap-[6px]">
                  <li>
                    <p className="text-[18px] font-bold leading-[16px]">
                      Categories
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      Jewelry
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      Knitted Items
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      Candles
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      Gift Sets
                    </p>
                  </li>
                </ul>
              </li>
              {/* logo */}
              <li className="flex flex-col items-center group   active:text-accentMainActive ">
                <Image
                  src="/logo/Crafted_Tresaures.png"
                  alt="logo"
                  width={70}
                  height={67}
                />
                <h2 className="text-[11px] font-bold mt-[7px]">Crafted</h2>
                <h3 className="text-[7px] mt-[2px]">-Treasures-</h3>
              </li>
              {/* information */}
              <li>
                <ul className="flex flex-col gap-[6px]">
                  <li>
                    <p className="text-[18px] font-bold leading-[16px]">
                      Information
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      About Us
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[1.29] active:text-accentMainActive ">
                      Contact Us
                    </p>
                  </li>
                  <li>
                    <p className="text-[14px] leading-[14px] active:text-accentMainActive ">
                      Shipping &amp;
                      <br /> Returning
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            {/* social media */}
            <div className="flex  flex-row gap-3 mt-5 justify-start mb-[14px] sm:hidden">
              <Link href="https://www.instagram.com">
                <InstagramSvg
                  width={24}
                  height={24}
                  className="text-accentMain active:text-accentMainActive"
                />
              </Link>

              <Link href="https://www.facebook.com">
                <FacebookSvg
                  width={20}
                  height={24}
                  className="text-accentMain active:text-accentMainActive"
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-between pb-[6px]">
            <p className="text-[10px] text-lightGray leading-[12px]">
              Product Policy
            </p>
            <p className="text-[10px] text-lightGray leading-[12px]">
              &copy; 2025 Shop. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* others view */}
        <div className="hidden sm:block">
          <div className="flex flex-row justify-between sm:pt-10 md:pt-10">
            <div className="flex flex-row mt-3 md:mt-5 sm:gap-[92px] md:gap-[118px]">
              {/* categories */}

              <ul>
                <li>
                  <p className="text-[18px] font-bold leading-[16px] mb-2">
                    Categories
                  </p>
                </li>
                <li>
                  <p className="text-[14px]  leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Jewelry
                  </p>
                </li>
                <li>
                  <p className="text-[14px]  leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Knitted Items
                  </p>
                </li>
                <li>
                  <p className="text-[14px] leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Candles
                  </p>
                </li>
                <li>
                  <p className="text-[14px] leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Gift Sets
                  </p>
                </li>
              </ul>
              {/* Information */}
              <ul>
                <li>
                  <p className="text-[18px] font-bold leading-[16px] mb-2  ">
                    Information
                  </p>
                </li>
                <li>
                  <p className="text-[14px]  leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    About Us
                  </p>
                </li>
                <li>
                  <p className="text-[14px]  leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Contact Us
                  </p>
                </li>
                <li>
                  <p className="text-[14px] leading-[30px] hover:text-accentMain active:text-accentMainActive cursor-pointer">
                    Shipping & Returns
                  </p>
                </li>
              </ul>
            </div>
            {/* logo */}
            <div className=" flex flex-col items-center group  hover:text-accentMain active:text-accentMainActive cursor-pointer">
              <Image
                src="/logo/Crafted_Tresaures.png"
                alt="logo"
                width={139}
                height={133}
                className="md:w-[144px] md:h-[138px]"
              />

              <h2 className="text-[24px] font-bold mt-[15px] leading-[29px]">
                Crafted
              </h2>
              <h3 className="text-[16px] font-semibold mt-[-2px] leading-[19px]">

                -Treasures-
              </h3>
            </div>
            <div>
              {/* join us */}
              <div className="w-full  flex flex-col gap-[18px] mt-[12px] md:mt-5">
                <h1 className="text-[18px] font-bold ">
                  Pssst... Want the good stuff first?
                </h1>

                <div className="w-[300px] md:w-[360px]">
                  <div className="flex h-10 relative">
                    <input
                      className={`outline-none py-3 px-4 text-[14px] flex-grow border border-r-0 rounded-l-[6px] ${
                        error ? "border-error" : "border-accentMain"
                      }`}
                      type="email"
                      placeholder="email@gmail.com "
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                    <button
                      className={`text-white text-[18px] font-bold leading-[0.88] py-3 pl-[22px] pr-[27px] ${
                        error
                          ? "bg-lightGray cursor-not-allowed"
                          : "bg-accentMain"
                      } rounded-r-[6px]`}
                      type="button"
                      onClick={handleJoin}
                    >
                      Join
                    </button>
                    <div className="absolute right-[90px] top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                      {error && (
                        <button type="button" onClick={handleResetEmailField}>
                          <ErrorSVG className="text-error" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p
                    className={`ml-2 mt-1 text-[10px] transition-opacity duration-200 ${
                      error ? "text-error opacity-100" : "opacity-0"
                    }`}
                  >
                    *Please enter a valid email address
                  </p>
                </div>
              </div>
              {/* social media */}
              <div className="flex  flex-row gap-3  justify-start mt-[14px] mb-[77px]">
                <Link href="https://www.instagram.com">
                  <InstagramSvg
                    width={30}
                    height={30}
                    className="text-accentMain active:text-accentMainActive"
                  />
                </Link>

                <Link href="https://www.facebook.com">
                  <FacebookSvg
                    width={25}
                    height={30}
                    className="text-accentMain active:text-accentMainActive"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex gap-[62px] justify-end pb-[6px]">
            <p className="text-[14px] text-lightGray cursor-pointer leading-[16px]">
              Product Policy
            </p>
            <p className="text-[14px] text-lightGray leading-[16px]">

              &copy; 2025 Shop. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
