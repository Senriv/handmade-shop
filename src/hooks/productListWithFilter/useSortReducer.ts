import { useReducer } from "react";

export type SortOrder = "asc" | "desc" | null;

type SortAction = { type: "TOGGLE_ASC" } | { type: "TOGGLE_DESC" };

function reducer(state: SortOrder, action: SortAction): SortOrder {
  switch (action.type) {
    case "TOGGLE_ASC":
      return state === "asc" ? null : "asc";
    case "TOGGLE_DESC":
      return state === "desc" ? null : "desc";
    default:
      return state;
  }
}

export const useSortReducer = () => {
  return useReducer(reducer, null);
};
