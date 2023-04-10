"use client";

import useCart from "@/store/store";
import ReactDom from "react-dom";
import { X } from "tabler-icons-react";
import Heading from "./Heading";
import Link from "next/link";

export default function Modal() {
  const cart = useCart((state) => state.cart);
  const setOpenModal = useCart((state) => state.setOpenModal);
  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 z-30 h-screen w-full">
      <div
        onClick={setOpenModal}
        className="absolute inset-0 bg-slate-900/50"
      ></div>
      <div className="absolute right-0 top-0 w-full h-full sm:w-96 bg-white">
        <div className="flex items-center justify-between px-3">
          <Heading as="h3" size="text-lg">
            Your Shopping Cart
          </Heading>
          <button onClick={setOpenModal}>
            <X className="cursor-pointer" />
          </button>
        </div>
        <div className="p-3">
          {!cart.length && (
            <>
              <p>No items 🛒</p>
              <Link href="/" className="bg-black text-white p-1 mt-3">Go shopping</Link>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
}
