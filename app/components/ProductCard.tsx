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
    <div className="flex flex-col rounded bg-white">
      <div className="h-44 bg-slate-300"></div>
      <div className="flex flex-col p-3">
        <Link
          href={`/products/${product.id}`}
          className="font-bold  text-zinc-900"
        >
          {product.name}
        </Link>
        <span className="font-bold text-green-600">{`$${product.price}`}</span>
      </div>
    </div>
  );
}
