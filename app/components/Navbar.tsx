"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "tabler-icons-react";
import Modal from "./Modal";
import { Components } from 'tabler-icons-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div className="bg-slate-700 py-1.5 text-center">
        For a limited time{" "}
        <span className="rounded border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-gray-700 dark:text-yellow-300">
          10% discount
        </span>{" "}
        on your purchase over <strong>$200</strong>
      </div>
      <div className="container mx-auto flex justify-between p-3">
        <Link className="text-xl flex items-center gap-2" href="/">
          <Components /> CYBER<strong>TECH</strong>
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
