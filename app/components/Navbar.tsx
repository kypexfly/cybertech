"use client";

import Link from "next/link";
import { ShoppingBag } from "tabler-icons-react";
import Modal from "./Modal";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div className="container mx-auto flex justify-between p-3">
        <Link className="font-bold" href="/">
          CYBERTECH
        </Link>
        <div
          className="relative flex cursor-pointer items-center"
          onClick={() => setIsOpen(true)}
          tabIndex={0}
        >
          <ShoppingBag strokeWidth={1.5} />
          <span className="absolute bottom-3 left-3 flex aspect-square h-5 items-center justify-center rounded-full border-2 border-zinc-800 bg-red-500 text-xs font-bold">
            5
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
