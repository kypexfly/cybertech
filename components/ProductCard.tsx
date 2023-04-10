import { StripeItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

export default function ProductCard({ product }: { product: StripeItem }) {
  const { id, unit_amount: cost, product: productInfo } = product;
  const { images, name, description } = productInfo;

  return (
    <div className="flex flex-col">
      <Link href={`/products/${id}`}>
        <div className="group relative h-72 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt={name}
            height={350}
            width={350}
            className="h-full w-full object-contain object-center scale-75 group-hover:scale-[0.85] transition-transform duration-100 ease-in-out"
          />
          <div className="top-0 left-0 absolute w-full h-full bg-[#5151510d] z-10"></div>
        </div>
      </Link>
      <div className="flex flex-col p-3">
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600">
          Accesories
        </span>
        <h3 className="hover:text-rose-600 transition-colors text-sm mb-1">
          <Link href={`/products/${id}`}>{name}</Link>
        </h3>
        <span className="text-zinc-700">{`$${cost / 100}`}</span>
      </div>
    </div>
  );
}
