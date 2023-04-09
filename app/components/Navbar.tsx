"use client";

import Link from "next/link";
import { ShoppingBag } from "tabler-icons-react";
import Modal from "./Modal";
import { Components } from "tabler-icons-react";
import useCart from "../(store)/store";

function Navbar() {
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return (
    <header className="bg-slate-800 text-white">
      {openModal && <Modal />}
      <div className="container mx-auto flex justify-between p-3">
        <Link className="flex items-center gap-2 text-xl" href="/">
          <Components /> CyberTech
        </Link>
        <div
          className="relative flex cursor-pointer items-center"
          onClick={setOpenModal}
          tabIndex={0}
        >
          <ShoppingBag strokeWidth={1.5} />
          <span className="absolute bottom-3 left-3 flex aspect-square h-5 items-center justify-center rounded-full border-2 border-zinc-800 bg-red-500 text-xs font-bold">
            5
          </span>
        </div>
      </div>
      <div className="bg-slate-100 py-1.5 text-center text-sm text-slate-800">
        ✨ For a limited time{" "}
        <span className="rounded border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
          10% discount
        </span>{" "}
        on your purchase over <strong>$200</strong>
      </div>
    </header>
  );
}

export default Navbar;
