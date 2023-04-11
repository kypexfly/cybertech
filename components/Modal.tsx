"use client";

import useCart from "@/store/cart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactDom from "react-dom";
import { X } from "tabler-icons-react";
import Heading from "./Heading";
import Loader from "./Loader";

export default function Modal() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const cart = useCart((state) => state.cart);
  const removeCartItem = useCart((state) => state.removeCartItem);
  const setOpenModal = useCart((state) => state.setOpenModal);

  async function checkout() {
    setIsLoading(true);
    const lineItems = cart.map((cartItem) => {
      return {
        price: cartItem.id,
        quantity: cartItem.quantity,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    });

    const data = await res.json();
    setIsLoading(false);
    router.push(data.session.url);
  }

  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 z-30 h-screen w-full">
      <div
        onClick={setOpenModal}
        className="absolute inset-0 bg-slate-900/50"
      ></div>
      <div className="absolute right-0 top-0 h-full w-full bg-white sm:w-96">
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
              <Link href="/" className="mt-3 bg-black p-1 text-white">
                Go shopping
              </Link>
            </>
          )}
          {cart.length ? <pre>{JSON.stringify(cart, null, 2)}</pre> : null}
          {cart.length ? (
            <div className="flex flex-col gap-3">
              {cart.map((item) => (
                <button
                  key={item.id}
                  onClick={() => removeCartItem(item.id)}
                  className="cursor-pointer bg-blue-600 p-3 text-white"
                >
                  Remove {item.id}
                </button>
              ))}
              <button
                onClick={checkout}
                className="cursor-pointer bg-black p-3 text-white"
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Checkout"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
}
