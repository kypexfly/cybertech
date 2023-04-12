"use client";

import Link from "next/link";
import CartButton from "./CartButton";
import Image from "next/image";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="container mx-auto flex justify-between px-3 py-6">
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
        <CartButton />
      </div>
      {/* <div className="bg-slate-100 py-1.5 text-center text-sm text-slate-800">
        ✨ For a limited time{" "}
        <span className="rounded border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
          10% discount
        </span>{" "}
        on your purchase over <strong>$200</strong>
      </div> */}
    </header>
  );
}

export default Navbar;
