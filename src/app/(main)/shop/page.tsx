"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import HeroSlider, { HeroSlide } from "@/components/shop/HeroSlider";

export default function ShopPage() {
  const [items, setItems] = useState([]);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);

  useEffect(() => {
    const simulatedSlides: HeroSlide[] = [
      {
        id: "1",
        imageUrl: "/images/HeroSliderBg/slide_1.jpg",
        title: "HANDMADE WITH LOVE",
        subtitle: "Welcome to Shop",
        description:
          "Explore our curated collection of handcrafted goods that bring warmth and uniqueness to your life.",
        priority: true,
      },
      {
        id: "2",
        imageUrl: "/images/HeroSliderBg/slide_2.jpg",
        title: "UNIQUE & HANDCRAFTED",
        subtitle: "New Arrivals",
      },
      {
        id: "3",
        imageUrl: "/images/HeroSliderBg/slide_3.jpg",
        title: "SHOP OUR COLLECTION",
      },
      {
        id: "4",
        imageUrl: "/images/HeroSliderBg/slide_4.jpg",
        title: "SHOP OUR COLLECTIONio",
      },
    ];

    setHeroSlides(simulatedSlides);
  }, []);

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
      <HeroSlider slides={heroSlides} />
      <Link href="/shop/r8KlsnF93JdWqmXz4aTp7HcB">
        <div className="p-3 hover:bg-mediumGray ">
          Click me and You&apos;ll see the magic
        </div>
      </Link>
    </>
  );
}
