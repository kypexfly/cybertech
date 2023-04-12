"use client";

import useCart, { CartItem } from "@/store/cart";
import { ShoppingCart } from "tabler-icons-react";
import toast from "react-hot-toast";
import clsx from "clsx";

interface AddItemButtonProps {
  cartItem: CartItem;
  productName: string;
  className?: string;
}

export default function AddItemButton({
  cartItem,
  className,
  productName,
}: AddItemButtonProps) {
  const addCartItem = useCart((state) => state.addCartItem);

  const handleAddItem = () => {
    addCartItem(cartItem);
    toast.success(`${productName} added to cart!`);
  };

  return (
    <button
      type="button"
      onClick={handleAddItem}
      className={clsx(
        "mb-2 mr-2 bg-rose-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-700",
        className
      )}
    >
      <ShoppingCart className="mr-2 inline-block" /> Add to cart
    </button>
  );
}