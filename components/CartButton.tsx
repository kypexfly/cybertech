"use client";

import { ShoppingBag } from "tabler-icons-react";
import useCart from "../store/cart";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

export default function CartButton() {
  const cart = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <button
        type="button"
        className="relative flex cursor-pointer items-center"
        onClick={setOpenModal}
      >
        <ShoppingBag strokeWidth={1.5} />
        <span className="absolute bottom-3 left-4 flex aspect-square h-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
          {totalItems}
        </span>
      </button>
      <AnimatePresence>{openModal && <Modal />}</AnimatePresence>
    </>
  );
}
