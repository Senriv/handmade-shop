"use client";

import { Container } from "./Container";

import LogoSVG from "@/assets/footer-icons/footer-logo.svg";
import InstagramSVG from "@/assets/footer-icons/instagram.svg";
import FacebookSVG from "@/assets/footer-icons/facebook.svg";

export default function FooterMain() {
  return (
    <footer className="bg-mint">
      <Container>
        <div className="flex justify-between">
          <div className="flex gap-[50px] mt-[61px]">
            {/* Categories */}
            <div>
              <h3 className="text-[18px] font-bold leading-[0.88] mb-2">
                Categories
              </h3>
              <ul>
                <li>
                  <p className="text-[14px] leading-[2.14]">Jewelry</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">Knitted Items</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">Candles & Soaps</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">Home Decor</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">Gift Sets</p>
                </li>
              </ul>
            </div>

            {/* User Guide */}
            <div>
              <h3 className="text-[18px] font-bold leading-[0.88] mb-2">
                User Guide
              </h3>
              <ul>
                <li>
                  <p className="text-[14px] leading-[2.14]">My Account</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">Favorite</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">How to Buy</p>
                </li>
                <li>
                  <p className="text-[14px] leading-[2.14]">
                    Shipping & Delivery
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <LogoSVG className="mt-10 mb-[87px]" />
          <div className="flex flex-col">
            <div className="flex flex-col mt-[61px]">
              <label
                className="text-[18px] font-bold leading-[0.88] mb-4"
                htmlFor="email"
              >
                Pssst... Want the good stuff first?
              </label>
              <div className="flex h-10 w-[359px] mb-[26px]">
                <input
                  className="outline-none py-3 px-4 text-[14px] flex-grow border border-accentMain border-r-0 rounded-l-[6px]"
                  id="email"
                  type="email"
                  placeholder="email@gmail.com "
                />
                <button
                  className="text-white font-bold leading-[0.88] py-3 pl-[22px] pr-[27px] bg-accentMain rounded-r-[6px]"
                  type="button"
                >
                  Join
                </button>
              </div>

              <ul className="flex gap-4">
                <li>
                  <a href="#">
                    <InstagramSVG />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FacebookSVG />
                  </a>
                </li>
              </ul>
            </div>

            {/* Product Policy */}
            <ul className="mt-auto flex gap-16">
              <li>
                <p className="text-[14px] text-lightGray leading-[2.14]">
                  Product Policy
                </p>
              </li>
              <li>
                <p className="text-[14px] text-lightGray leading-[2.14]">
                  © 2025 Shop. All Rights Reserved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
