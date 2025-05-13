"use client";
import { useState, useEffect } from "react";
import AllGewellery from "@/components/shop/AllGewellery";
import SaleGewellery from "@/components/shop/SaleGewellery";
import HeroSlider from "@/components/shop/HeroSlider";
import ArrowDown from "@/assets/main/catalog/Chevron_Down.svg";

type CatalogType = "all" | "sale";

export default function ShopPage() {
  const [catalog, setCatalog] = useState<CatalogType>("all");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "http://185.161.208.160:8081/api/get/items",
          {
            method: "GET",
            headers: {
              Authorization: "Basic " + btoa("admin:Admin123"),
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setItems(data);
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

  console.log("Тут должен появиться массив при удачном запросе:", items);

  return (
    <>
      <HeroSlider />
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-3">
            <button
              type="button"
              onClick={() => setCatalog("all")}
              className={`pb-2 border-b-2 ${
                catalog === "all"
                  ? "text-[#37cece] border-[#37cece]"
                  : "text-textMain border-transparent"
              } text-[15px] font-bold leading-[1.05] transition-colors duration-200`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setCatalog("sale")}
              className={`pb-2 border-b-2 ${
                catalog === "sale"
                  ? "text-[#37cece] border-[#37cece]"
                  : "text-textMain border-transparent"
              } text-[15px] font-bold leading-[1.05] transition-colors duration-200`}
            >
              Sale
            </button>
          </div>
          <ArrowDown />
        </div>
        {catalog == "all" ? <AllGewellery /> : <SaleGewellery />}
      </div>
    </>
  );
}
