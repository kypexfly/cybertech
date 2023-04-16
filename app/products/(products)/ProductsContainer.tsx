"use client";

import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { StripeProduct } from "@/types";
import useFilteredProducts from "@/utils/hooks/useFilteredProducts";
import { useSearchParams } from "next/navigation";

export default function ProductsContainer({
  products,
}: {
  products: StripeProduct[];
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const { filteredProducts } = useFilteredProducts(products);

  return (
    <>
      <Heading className="my-3 font-normal" as="h3">
        {!search ? "All products" : `Search for "${search}"`} (
        {filteredProducts.length} results)
      </Heading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
