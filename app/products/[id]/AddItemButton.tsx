"use client";

import useCart, { CartItem } from "@/store/cart";
import { ShoppingCart } from "tabler-icons-react";

export default function AddItemButton(props: CartItem) {
  const addCartItem = useCart((state) => state.addCartItem);

  const handleAddItem = () => {
    addCartItem(props);
  };

  return (
    <button
      type="button"
      onClick={handleAddItem}
      className="mb-2 mr-2 rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-700"
    >
      <ShoppingCart className="mr-2 inline-block" /> Add to cart
    </button>
  );
}
