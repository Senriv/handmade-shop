"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/Container";

import SearchSVG from "@/assets/header-icons/search.svg";
import HeartSVG from "@/assets/header-icons/heart.svg";
import UserSVG from "@/assets/header-icons/user.svg";
import GroceryCartSVG from "@/assets/header-icons/grocery_cart.svg";

export default function HeaderMain() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/about-us", label: "About us" },
    { href: "/contact-us", label: "Contact us" },
  ];

  return (
    <header className="mt-[30px] ">
      <Container>
        <div className="flex flex-row justify-between">
          <nav className="flex items-center">
            <ul className="flex flex-row gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="relative ">
                  <Link
                    href={href}
                    className={`${
                      pathname === href ? "font-bold" : ""
                    } relative`}
                  >
                    {label}
                    {pathname === href && (
                      <span className="absolute left-0 bottom-[-29px] w-full h-[3px] bg-accentMain"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row gap-2 items-center">
            <h2 className="text-[18px] font-semibold">Crafted</h2>
            <Image
              src="/Crafted_Treasure_Logo.png"
              alt="logo"
              width={45}
              height={43}
            />
            <h2 className="text-[18px] font-semibold">Treasures</h2>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="relative w-[99px] h-[34px] flex justify-end items-center">
              <input
                type="text"
                placeholder="Search"
                className="absolute right-0 top-0 w-[99px] focus:w-[330px] h-[34px] border border-accent-main bg-accentBg rounded-[6px] px-2 py-[9px] transition-all duration-300 ease-in-out z-10 outline-none"
              />
              <SearchSVG className="absolute right-[10px] top-[8px] z-20" />
            </div>
            <button
              type="button"
              className="flex justify-center items-center w-[34px] h-[34px] bg-accentMain rounded-[6px] border border-accent-main"
            >
              <HeartSVG />
            </button>
            <button
              type="button"
              className="flex justify-center items-center w-[34px] h-[34px] bg-transparent rounded-[6px] border border-accent-main"
            >
              <UserSVG />
            </button>
            <button
              type="button"
              className="flex justify-center items-center w-[34px] h-[34px] rounded-[6px]"
            >
              <GroceryCartSVG />
            </button>
          </div>
        </div>
        <div
          className="w-full border-t border-accent-main mt-[17px]"
          style={{ borderTopWidth: "0.3px" }}
        ></div>
      </Container>
    </header>
  );
}
