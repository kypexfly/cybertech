import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import CartButton from "./CartButton";
import SearchProductBar from "./SearchProductBar";
import WishlistButton from "./WishlistButton";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-100 bg-white">
      <div className="container mx-auto flex justify-between gap-3 px-3 py-4">
        <Link className="flex items-center gap-2 text-base font-bold" href="/">
          <div>
            cyber_<span className="text-blue-600">tech.</span>
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
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-zinc-900 dark:text-zinc-700">
                My account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-zinc-100" />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-zinc-100" />
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
