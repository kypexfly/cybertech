"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart } from "tabler-icons-react";

export default function WishlistButton() {
  const wishlist = [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="relative flex cursor-pointer items-center"
        >
          <Heart strokeWidth={1.5} />
          <span className="absolute bottom-3 left-4 flex aspect-square h-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
            0
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="fixed right-0 top-0 flex h-screen w-full flex-col overflow-y-auto bg-white sm:w-96">
        <DialogHeader>
          <DialogTitle>Wishlist</DialogTitle>
        </DialogHeader>
        {!wishlist.length ? <WithoutCartItems /> : null}
      </DialogContent>
    </Dialog>
  );
}

function WithoutCartItems() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Heart size={180} strokeWidth={1} className="mt-6" />
        <p className="px-3 py-6 text-center text-lg">
          Your wishlist is empty
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
