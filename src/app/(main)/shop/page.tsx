"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSlider from "@/components/shop/HeroSlider";

export default function ShopPage() {
  const [items, setItems] = useState([]);

  console.log("All goods fetch:", items);

  // get all goods
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "http://185.161.208.160:8081/api/get/items",
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setItems(data.content);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Fetch error:", error.message);
        } else {
          console.error("Unknown error", error);
        }
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <HeroSlider />
      <Link href="/shop/r8KlsnF93JdWqmXz4aTp7HcB">
        <div className="p-3 hover:bg-mediumGray ">
          Click me and You&apos;ll see the magic
        </div>
      </Link>
    </>
  );
}
