import { useState, useCallback } from "react";

export function useCounter(initialValue: number = 0, min: number = 0) {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setValue((prev) => Math.max(min, prev - 1));
  }, [min]);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return { value, increment, decrement, reset, setValue };
}
