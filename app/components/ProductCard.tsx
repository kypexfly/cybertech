import Link from "next/link";

interface Product {
  name: string;
  id: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col rounded bg-slate-100">
      <div className="h-44 bg-slate-300"></div>
      <div className="flex flex-col p-3">
        <Link
          href={`/products/${product.id}`}
          className="font-bold text-zinc-900"
        >
          Product Title
        </Link>
        <span className="font-bold text-green-600">$20.00</span>
      </div>
    </div>
  );
}
