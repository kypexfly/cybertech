"use client";

import { useMemo, createContext, useState } from "react";

type SelectorStates = {
  sortby: string;
  priceRange: {
    min: number;
    max: number;
  };
};

interface FilterContextType {
  filter: SelectorStates;
  setFilter: React.Dispatch<React.SetStateAction<SelectorStates>>;
  resetFilter: () => void;
}

const initialState = {
  sortby: "",
  priceRange: {
    min: 0,
    max: 0,
  },
};

export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState<SelectorStates>(initialState);

  const resetFilter = () => {
    setFilter(initialState);
  };

  const value = useMemo(
    () => ({
      filter,
      setFilter,
      resetFilter
    }),
    [filter]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
