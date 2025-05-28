"use client";

import { Container } from "./Container";

import LogoSVG from "@/assets/footer-icons/footer-logo.svg";
import InstagramSVG from "@/assets/footer-icons/instagram.svg";
import FacebookSVG from "@/assets/footer-icons/facebook.svg";

export default function FooterMain() {
  return (
    <footer className="bg-mint">
      <Container>
        <div className="pt-[13px] ">
          {/* join us */}
          <div className="w-full flex flex-col gap-[18px] mb-[18px] ">
            <h1 className="text-[18px] font-bold ">
              Pssst... Want the good stuff first?
            </h1>

            <div className="flex h-10 w-full ">
              <input
                className="outline-none py-3 px-4 text-[14px] flex-grow border border-accentMain border-r-0 rounded-l-[6px]"
                id="email"
                type="email"
                placeholder="email@gmail.com "
              />
              <button
                className="text-white text-[18px] font-bold leading-[0.88] py-3 pl-[22px] pr-[27px] bg-accentMain rounded-r-[6px]"
                type="button"
              >
                Join
              </button>
            </div>
          </div>

          {/* 4 coloums  */}
          <ul className="flex flex-row  w-full mb-4">
            {/* categories */}
            <li className="mr-[4px] ">
              <ul>
                <li>
                  <p className="text-[18px] font-bold ">Categories</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">Jewelry</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">Knitted Items</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">Candles</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">Gift Sets</p>
                </li>
              </ul>
            </li>
            {/* social media */}
            <li className="flex  flex-row gap-2 items-end mr-[12px]">
              <InstagramSVG />
              <FacebookSVG />
            </li>
            {/* logo */}
            <li className="flex flex-col items-center group mr-auto hover:text-accentMain active:text-accentMainActive ">
              <LogoSVG />
              <h2 className="text-[11px] font-bold">Crafted</h2>
              <h3 className="text-[7px]">-Treasures-</h3>
            </li>
            {/* information */}
            <li>
              <ul className="flex flex-col ">
                <li>
                  <p className="text-[18px] font-bold ">Information</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">About Us</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">Contact Us</p>
                </li>
                <li>
                  <p className="text-[14px] leading-4">
                    Shipping &amp;
                    <br /> Returning
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="text-[10px] text-lightGray">Product Policy</p>
          <p className="text-[10px] text-lightGray">
            &copy; 2025 Shop. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
