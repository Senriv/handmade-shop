"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useClickOutside } from "@/hooks/clickOutside";

import { Container } from "@/components/Container";
import { BurgerSvg } from "./base/BurgerSvg";
import SearchSVG from "@/assets/header-icons/search.svg";
import GroceryCartSVG from "@/assets/header-icons/grocery_cart.svg";

export default function HeaderMain() {
  const pathname = usePathname();

  //  burger menu
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // search
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  //  logo hover
  const [isActive, setIsActive] = useState<boolean>(false);

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/about-us", label: "About us" },
  ];

  // for input width
  const [width, setWidth] = useState(99);

  const handleFocus = () => {
    const screen = window.innerWidth;
    if (screen >= 990) setWidth(300);
    else if (screen >= 768) setWidth(178);
  };

  const handleBlur = () => setWidth(99);

  useClickOutside(mobileSearchRef, () => {
    if (isMobileSearchOpen) {
      setIsMobileSearchOpen(false);
    }
  });

  useClickOutside(mobileMenuRef, () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  });

  const handleInputValueSearch = () => {
    console.log(
      `Полетел запрос: "${searchValue}". Так-же потом он чистится и закрывается.`
    );
    setSearchValue("");
    setIsMobileSearchOpen(false);
  };

  return (
    <header className="relative xs:mt-[20px] sm:mt-[41px] md:mt-[32px]">
      <Container>
        {/* header's left side */}
        <div className="relative flex items-center">
          <div className="flex-1 flex items-center">
            {/* Burger btn */}
            <button
              type="button"
              className="block group sm:hidden hover:fill-red"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <BurgerSvg className="w-8 h-8  fill-accentMain group-hover:opacity-100 transition-opacity duration-200" />
            </button>

            {/* tablet/desktop nav */}
            <nav className="hidden sm:flex items-center gap-6">
              <ul className="flex flex-row gap-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href} className="relative">
                    <Link
                      href={href}
                      className={`${
                        pathname === href ? "font-bold" : ""
                      } relative hover:text-accentMain transition-colors`}
                    >
                      {label}
                      {pathname === href && (
                        <span className="absolute left-0 -bottom-[29px] w-full h-[3px] bg-accentMain" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* logo+ name (middle) */}
          <div className="flex-none z-10 ">
            <div
              className={`flex items-center gap-2 transition-colors cursor-pointer ${
                isActive ? "text-accentMainActive" : "hover:text-accentMain"
              }`}
              onMouseDown={() => setIsActive(true)}
              onMouseUp={() => setIsActive(false)}
              onMouseLeave={() => setIsActive(false)}
              onTouchStart={() => setIsActive(true)}
              onTouchEnd={() => setIsActive(false)}
            >
              <h2 className="text-[15px] sm:text-[18px] font-semibold">
                Crafted
              </h2>
              <div className="relative w-[38px] h-[37px] sm:w-[48px] sm:h-[46px] md">
                <Image
                  src="/Crafted_Treasure_Logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-[15px] sm:text-[18px] font-semibold">
                Treasures
              </h2>
            </div>
          </div>

          {/* header's right part */}
          <div className="flex-1 flex justify-end gap-[20px] sm:gap-3 items-center">
            <div className="flex items-center gap-3">
              {/* Desktop Search Input */}
              <div className="hidden sm:flex items-center h-[32px] relative min-w-0">
                <div
                  className="relative transition-all duration-300 ease-out"
                  style={{ width: `${width}px` }}
                >
                  <input
                    type="text"
                    placeholder="Search"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="w-full h-[32px] box-border border border-accentMain  rounded-[6px] px-2 pr-8 text-sm leading-none outline-none placeholder:text-placeholderPrimary"
                  />
                  <button
                    type="button"
                    className="absolute right-[10px] top-[5px] z-20"
                    onClick={handleInputValueSearch}
                  >
                    <SearchSVG />
                  </button>
                </div>
              </div>

              {/* show on the mobile */}
              {!isMobileSearchOpen && (
                <button
                  type="button"
                  className="sm:hidden flex justify-center items-center"
                  onClick={() => setIsMobileSearchOpen(true)}
                >
                  <SearchSVG />
                </button>
              )}
            </div>
            <button type="button">
              <GroceryCartSVG />
            </button>
          </div>

          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <nav
                ref={mobileMenuRef}
                className="absolute top-[60px] left-0 w-full bg-white p-[10px] z-50 rounded-xl border border-accentMain"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col">
                  {navLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`${pathname === href ? "font-bold" : ""}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
        <div
          className="hidden sm:block w-full border-t border-accent-main mt-[17px]"
          style={{ borderTopWidth: "0.3px" }}
        ></div>
      </Container>
      {/* opened input for mobile */}
      {isMobileSearchOpen && (
        <div
          className="sm:hidden relative top-[6px] px-[18px] left-0 w-full bg-white z-60 "
          ref={mobileSearchRef}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            onChange={(e) => setSearchValue(e.target.value)}
            className={`w-full h-[34px] rounded-[6px] px-2 pr-8 text-sm placeholder:text-placeholderPrimary outline-none
    border
    ${isInputFocused ? "border-accentMain " : "border-accentMainActive "}
  `}
          />
          <button
            type="button"
            className="absolute right-[28px] top-[5px] z-20"
            onClick={handleInputValueSearch}
          >
            <SearchSVG />
          </button>
        </div>
      )}
    </header>
  );
}
