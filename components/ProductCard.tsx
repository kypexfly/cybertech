import dollarUSLocale from "@/utils/dollarUSLocale";
import { StripePrice } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddItemButton from "./AddItemButton";

export default function ProductCard({ product }: { product: StripePrice }) {
  const { unit_amount: cost, id: priceId } = product;
  const { images, name, metadata, id: productId } = product.product;

  const price = dollarUSLocale.format(cost / 100);

  return (
    <div className="flex flex-col">
      <div className="group relative h-72 w-full overflow-hidden">
        <Link href={`/products/${productId}`}>
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#5151510d]"></div>
          <Image
            src={images[0]}
            alt={name}
            height={350}
            width={350}
            className="h-full w-full scale-75 object-contain object-center transition-transform duration-100 ease-in-out group-hover:scale-[0.85]"
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
      <div className="flex flex-col p-3">
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600">
          {metadata.category}
        </span>
        <h3 className="mb-1 transition-colors hover:text-rose-600 md:text-sm">
          <Link href={`/products/${productId}`}>{name}</Link>
        </h3>
        <span className="text-zinc-700">{price}</span>
      </div>
    </div>
  );
}
