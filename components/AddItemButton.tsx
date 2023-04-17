"use client";

import useCart, { CartItem } from "@/store/cart";
import { ShoppingCart } from "tabler-icons-react";
import toast from "react-hot-toast";
import truncateSentence from "@/utils/truncateSentence";
import cn from "@/utils/cn";
import { Button } from "./ui/button";

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
    toast.success(`${truncateSentence(productName)} added to cart`);
  };

  return (
    <Button
      type="button"
      onClick={handleAddItem}
      size="lg"
      className={cn(
        "rounded-none bg-rose-600 font-medium text-white",
        className
      )}
    >
      <ShoppingCart className="mr-2" /> Add to cart
    </Button>
  );
}
