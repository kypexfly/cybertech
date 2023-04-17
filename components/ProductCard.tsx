import dollarUSLocale from "@/utils/dollarUSLocale";
import { StripeProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddItemButton from "./AddItemButton";

export default function ProductCard({ product }: { product: StripeProduct }) {
  const { images, name, metadata, id: productId } = product;
  const { unit_amount: cost, id: priceId } = product.default_price;

  const price = dollarUSLocale.format(cost / 100);

  return (
    <div className="flex md:rounded-b shadow-none transition-shadow duration-200 hover:shadow-xl md:flex-col">
      <div className="group relative aspect-square h-44 w-full basis-44 overflow-hidden md:h-72 md:basis-auto">
        <Link href={`/products/${productId}`}>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#6185cc0d]"></div>
          <Image
            src={images[0]}
            alt={name}
            height={255}
            width={255}
            className="h-full w-full scale-75 object-contain object-center transition-transform duration-100 ease-in group-hover:-translate-y-5 group-hover:scale-[0.8]"
          />
        </Link>
        <AddItemButton
          className="relative top-0 w-full transition-all ease-linear group-hover:top-[-45px]"
          productName={name}
          cartItem={{
            priceId,
            productId,
            quantity: 1,
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-3 md:flex-auto">
        <Link
          href={`/products?category=${metadata.category}`}
          className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600 hover:underline"
        >
          {metadata.category}
        </Link>
        <h3 className="mb-1 transition-colors hover:text-rose-600 md:text-sm">
          <Link href={`/products/${productId}`}>{name}</Link>
        </h3>
        <span className="text-lg text-zinc-700">{price}</span>
      </div>
    </div>
  );
}
