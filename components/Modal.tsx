"use client";

import useCart from "@/store/cart";
import { StripeProduct } from "@/types";
import dollarUSLocale from "@/utils/dollarUSLocale";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { toast } from "react-hot-toast";
import useSWR, { useSWRConfig } from "swr";
import { ShoppingBag, X } from "tabler-icons-react";
import Heading from "./Heading";
import Loader from "./Loader";

export default function Modal() {
  const cart = useCart((state) => state.cart);
  const setOpenModal = useCart((state) => state.setOpenModal);

  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 z-30 h-screen w-full">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            ease: "easeOut",
            duration: 0.15,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            ease: "easeIn",
            duration: 0.15,
          },
        }}
        onClick={setOpenModal}
        className="absolute inset-0 cursor-pointer bg-slate-900/75"
      ></motion.div>
      <motion.aside
        initial={{ x: "100%" }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="fixed right-0 top-0 flex h-screen w-full flex-col overflow-y-auto bg-white sm:w-96"
      >
        <div className="flex items-center justify-between px-3 shadow">
          <Heading as="h3" size="text-base" className="my-6">
            Shopping Cart
          </Heading>
          <button onClick={setOpenModal}>
            <X className="cursor-pointer" />
          </button>
        </div>
        {!cart.length ? <WithoutCartItems /> : null}
        {cart.length ? <WithCartItems /> : null}
      </motion.aside>
    </div>,
    document.getElementById("modal") as Element
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
    toast.error(`${productName} removed from cart!`);
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
              <div className="relative h-20 basis-20 overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#5151510d]"></div>
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
              <button
                onClick={() => handleRemoveItem(product.id, product.name)}
                className="cursor-pointer bg-rose-500 p-1 text-white"
              >
                <X size={12} strokeWidth={2} />
              </button>
            </div>
          ))}
      </div>

      <div className="mb-6 mt-auto flex flex-col px-3 py-6">
        <button
          onClick={checkout}
          className="cursor-pointer bg-blue-600 p-3 font-bold text-white"
          disabled={isChecking}
        >
          {isChecking ? <Loader /> : "Checkout"}
        </button>
      </div>
    </>
  );
}

function WithoutCartItems() {
  const router = useRouter();
  const setOpenModal = useCart((state) => state.setOpenModal);

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="px-3 py-6 text-center text-lg">
          Your shopping cart is empty
        </p>
        <ShoppingBag size={180} />
      </div>
      <div className="mb-6 mt-auto flex flex-col px-3 py-6">
        <button
          type="button"
          onClick={() => {
            router.push("/");
            setOpenModal();
          }}
          className="cursor-pointer bg-black p-3 text-white"
        >
          Let&apos;s shopping
        </button>
      </div>
    </>
  );
}
