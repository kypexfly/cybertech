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
import { FormEvent } from "react";

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
  const { filter, setFilter } = useFilterContext();

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
      <Select onValueChange={handleSort}>
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
        <Input name="min" onChange={handlePrice} placeholder="Min" /> To
        <Input name="max" onChange={handlePrice} placeholder="Max" />
      </div>
      {/* <div className="mt-6 flex gap-3">
        <button
          onClick={resetFilter}
          className="flex-1 rounded  bg-rose-500 p-2 text-sm font-bold text-white"
        >
          Reset
        </button>
        <button className="flex-1 rounded bg-blue-500  p-2 text-sm font-bold text-white">
          Apply filters
        </button>
      </div> */}
    </>
  );
}
