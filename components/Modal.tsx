"use client";

import useCart from "@/store/store";
import ReactDom from "react-dom";
import { X } from "tabler-icons-react";
import Heading from "./Heading";

export default function Modal() {
  const setOpenModal = useCart((state) => state.setOpenModal);
  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 z-30 h-screen w-full">
      <div
        onClick={setOpenModal}
        className="absolute inset-0 bg-slate-900/50"
      ></div>
      <div className="absolute right-0 top-0 h-full w-96 bg-white">
        <div className="flex items-center justify-between px-3">
          <Heading as="h3" size="text-lg">
            Your Shopping Cart
          </Heading>
          <button onClick={setOpenModal}>
            <X className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
}
