"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

export default function SearchProductBar() {
  const router = useRouter();
  const { register, getValues, reset } = useForm();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?search=${getValues("search")}`);
    reset();
  };

  return (
    <form onSubmit={(e) => handleSearch(e)} className="w-full">
      <Input
        type="search"
        {...register("search")}
        className="w-full rounded border border-zinc-100 p-2"
        placeholder="Search products..."
        name="search"
      />
    </form>
  );
}
