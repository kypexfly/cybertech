"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import CartButton from "./CartButton";
import WishlistButton from "./WishlistButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white">
      <Announcement />
      <div className="container mx-auto flex justify-between gap-3 px-3 py-4">
        <Link className="flex items-center gap-2 text-base font-bold" href="/">
          <Image
            src="/cybertech.svg"
            height={28}
            width={28}
            alt="CyberTech Logo"
          />{" "}
          <div>
            cyber.<span className="text-blue-600">tech</span>
          </div>
        </Link>

        <nav className="mx-6 hidden text-sm md:flex">
          <ul className="inline-flex items-center gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <div className="hidden grow items-center md:flex">
          <SearchProductBar />
        </div>

        <div className="inline-flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="/profile-picture.jpg" alt="Jessie" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-zinc-900 dark:text-zinc-700">
                My account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-300" />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-300" />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <WishlistButton />
          <CartButton />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

// Announcement Component
function Announcement() {
  return (
    <div className="bg-slate-100 py-1.5 text-center text-sm text-slate-800">
      ✨ For a limited time{" "}
      <span className="rounded border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
        10% discount
      </span>{" "}
      on your purchase over <strong>$200</strong>
    </div>
  );
}

// Search Component
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function SearchProductBar() {
  const router = useRouter();
  const { register, getValues } = useForm();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products?search=${getValues("search")}`, {
      forceOptimisticNavigation: true,
    });
  };

  return (
    <form onSubmit={(e) => handleSearch(e)} className="w-full">
      <input
        type="search"
        {...register("search")}
        className="w-full rounded border border-zinc-100 px-2 py-1"
        placeholder="Search products..."
        name="search"
      />
    </form>
  );
}
