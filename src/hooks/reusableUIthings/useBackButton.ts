"use client";
import { useRouter } from "next/navigation";

export function useBack(route: string = "/") {
  const router = useRouter();

  const back = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.replace(route);
    }
  };

  return back;
}
