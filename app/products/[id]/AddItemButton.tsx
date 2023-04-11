"use client";

import useCart, { CartItem } from "@/store/cart";
import { ShoppingCart } from "tabler-icons-react";
import toast from "react-hot-toast";

export default function AddItemButton(props: CartItem) {
  const addCartItem = useCart((state) => state.addCartItem);

  const handleAddItem = () => {
    addCartItem(props);
    toast.success("Product added to cart!");
  };

  return (
    <button
      type="button"
      onClick={handleAddItem}
      className="mb-2 mr-2 bg-rose-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-700"
    >
      <ShoppingCart className="mr-2 inline-block" /> Add to cart
    </button>
  );
}
