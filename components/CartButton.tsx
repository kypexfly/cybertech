"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useCart from "@/store/cart";
import { StripeProduct } from "@/types";
import dollarUSLocale from "@/utils/dollarUSLocale";
import truncateSentence from "@/utils/truncateSentence";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useSWR from "swr";
import { ShoppingBag, X } from "tabler-icons-react";
import Loader from "./Loader";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function WishlistButton() {
  const cart = useCart((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="relative flex cursor-pointer items-center"
        >
          <ShoppingBag strokeWidth={1.5} />
          <span className="absolute bottom-3 left-4 flex aspect-square h-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
            {totalItems}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="fixed right-0 top-0 flex h-screen w-full flex-col overflow-y-auto bg-white sm:w-96">
        <DialogHeader>
          <DialogTitle>Shopping Cart</DialogTitle>
        </DialogHeader>
        {!cart.length ? <WithoutCartItems /> : null}
        {cart.length ? <WithCartItems /> : null}
      </DialogContent>
    </Dialog>
  );
}

async function getCartItemsFromStripe(ids: string[]) {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
  });

  const products = await res.json();

  return products as StripeProduct[];
}

function WithCartItems() {
  const cart = useCart((state) => state.cart);
  const productIds = cart.map((item) => item.productId);
  const removeCartItem = useCart((state) => state.removeCartItem);

  const {
    data: products,
    isLoading: loadingProducts,
    isValidating,
    mutate,
  } = useSWR("/api/products", () => getCartItemsFromStripe(productIds));

  const totalPrice =
    products?.reduce((acc, product) => {
      const cartItem = cart.find((item) => item.productId === product.id);
      return (
        (product.default_price.unit_amount / 100) * cartItem!.quantity + acc
      );
    }, 0) ?? 0;

  const [isChecking, setIsChecking] = useState(false);
  const router = useRouter();

  async function checkout() {
    setIsChecking(true);

    const lineItems = cart.map((cartItem) => {
      return {
        price: cartItem.priceId,
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

    if (!res.ok) setIsChecking(false);

    const data = await res.json();
    setIsChecking(false);
    router.push(data.session.url);
  }

  const handleRemoveItem = (productId: string, productName: string) => {
    removeCartItem(productId);
    mutate(
      products?.filter((product) => product.id !== productId),
      { revalidate: false }
    );
    toast.error(`${truncateSentence(productName)} removed`);
  };

  return (
    <>
      <div className="flex flex-col">
        {(loadingProducts || isValidating) && (
          <div className="p-6 text-center">
            <Loader />
          </div>
        )}
        {!(loadingProducts || isValidating) &&
          products!.map((product) => (
            <div
              key={`cart_${product.id}`}
              className="flex items-center gap-3 border-b border-slate-200 px-3 py-6 last:border-b-0"
            >
              <div className="relative h-20 basis-20 overflow-hidden ">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#6185cc0d]"></div>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  height={350}
                  width={350}
                  className="h-full w-full scale-90 object-contain object-center"
                />
              </div>
              <div className="flex-1 text-sm">
                <h5 className="mb-2 font-bold transition-colors hover:text-rose-600">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h5>
                <div>
                  {dollarUSLocale.format(
                    product.default_price.unit_amount / 100
                  )}{" "}
                  x{" "}
                  {cart.find((item) => item.productId === product.id)?.quantity}
                </div>
              </div>
              <Button
                onClick={() => handleRemoveItem(product.id, product.name)}
                size="sm"
                className="aspect-square h-5 rounded-full bg-rose-500 p-1 text-white"
              >
                <X size={16} strokeWidth={3} />
              </Button>
            </div>
          ))}
      </div>

      <div className="mb-6 mt-auto flex flex-col px-3 py-6">
        <div className="flex justify-between py-6 text-lg">
          <span className="font-bold">Total</span>
          <span>{dollarUSLocale.format(totalPrice)}</span>
        </div>
        <Button
          onClick={checkout}
          className="bg-blue-600 p-3 font-bold text-white"
          disabled={isChecking}
        >
          {isChecking ? <Loader /> : "Checkout"}
        </Button>
      </div>
    </>
  );
}

function WithoutCartItems() {
  return (
    <>
      <div className="flex flex-col items-center">
        <ShoppingBag size={180} strokeWidth={1} className="mt-6" />
        <p className="px-3 py-6 text-center text-lg">
          Your shopping cart is empty
        </p>
      </div>
      <div className="mb-6 mt-auto flex flex-col px-3 py-6">
        <DialogClose className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800">
          Continue shopping
        </DialogClose>
      </div>
    </>
  );
}
