import { StripeItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

const dollarUSLocale = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export default function ProductCard({ product }: { product: StripeItem }) {
  const { id, unit_amount: cost, product: productInfo } = product;
  const { images, name, description, metadata } = productInfo;

  const price = dollarUSLocale.format(cost / 100)

  return (
    <div className="flex flex-col">
      <Link href={`/products/${id}`}>
        <div className="group relative h-72 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt={name}
            height={350}
            width={350}
            className="h-full w-full scale-75 object-contain object-center transition-transform duration-100 ease-in-out group-hover:scale-[0.85]"
          />
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-[#5151510d]"></div>
        </div>
      </Link>
      <div className="flex flex-col p-3">
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600">
          {metadata.category}
        </span>
        <h3 className="mb-1 text-sm transition-colors hover:text-rose-600">
          <Link href={`/products/${id}`}>{name}</Link>
        </h3>
        <span className="text-zinc-700">{price}</span>
      </div>
    </div>
  );
}
