"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterContext } from "@/utils/hooks/useFilterContext";
import { FormEvent, useState } from "react";

type OptionType = {
  label: string;
  value: string;
};

const sortOptions: OptionType[] = [
  { label: "Name (A-Z)", value: "name asc" },
  { label: "Name (Z-A)", value: "name desc" },
  { label: "Price (Lowest)", value: "price asc" },
  { label: "Price (Highest)", value: "price desc" },
];

export default function OptionSelector() {
  const { filter, setFilter, resetFilter } = useFilterContext();

  const [reset, setReset] = useState(+new Date());

  const handleSort = (value: string) => {
    setFilter({
      ...filter,
      sortby: value,
    });
  };

  const handlePrice = (e: FormEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      priceRange: {
        ...filter.priceRange,
        [e.currentTarget.name]: Number(e.currentTarget.value),
      },
    });
  };

  return (
    <>
      <Select key={reset} onValueChange={handleSort}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectGroup>
          <SelectContent>
            <SelectLabel>Sort by</SelectLabel>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectGroup>
      </Select>
      <div className="py-3">Price Range</div>
      <div className="flex items-center gap-3">
        <Input
          name="min"
          value={filter.priceRange.min}
          onChange={handlePrice}
          placeholder="Min"
        />{" "}
        To
        <Input
          name="max"
          value={filter.priceRange.max}
          onChange={handlePrice}
          placeholder="Max"
        />
      </div>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            resetFilter();
            setReset(+new Date());
          }}
          className="flex-1 rounded  bg-rose-600 px-2 py-3 text-sm font-bold text-white"
        >
          Reset
        </button>
      </div>
      {/* <pre>{JSON.stringify(filter, null, 2)}</pre> */}
    </>
  );
}
