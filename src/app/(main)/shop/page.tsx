"use client";
import { useState, useEffect } from "react";
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
    </>
  );
}
