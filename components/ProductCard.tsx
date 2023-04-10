import Link from "next/link";

export interface Product {
  name: string;
  id: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col bg-white">
      <Link href={`/products/${product.id}`}><div className="h-44 bg-slate-300 animate-pulse rounded"></div></Link>
      <div className="flex flex-col py-3">
        <Link
          href={`/products/${product.id}`}
          className="font-bold  text-zinc-900"
        >
          {product.name}
        </Link>
        <span className="text-green-600 font-semibold text-lg">{`$${product.price}`}</span>
      </div>
    </div>
  );
}
