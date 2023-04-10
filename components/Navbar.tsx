"use client";

import Link from "next/link";
import { Components, ShoppingBag } from "tabler-icons-react";
import useCart from "../store/store";
import Modal from "./Modal";

function Navbar() {
  const cart = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      {openModal && <Modal />}
      <div className="container mx-auto flex justify-between px-3 py-6">
        <Link className="flex items-center gap-2 text-base font-bold" href="/">
          <Components /> <div>cyber.<span className="text-blue-600">tech</span></div>
        </Link>
        <div
          className="relative flex cursor-pointer items-center"
          onClick={setOpenModal}
          tabIndex={0}
        >
          <ShoppingBag strokeWidth={1.5} />
          <span className="absolute bottom-3 left-3 flex aspect-square h-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            {cart.length}
          </span>
        </div>
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
