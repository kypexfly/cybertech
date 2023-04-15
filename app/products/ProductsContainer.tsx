"use client";

import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { StripePrice } from "@/types";
import { useSearchParams } from "next/navigation";

export default function ProductsContainer({
  products,
}: {
  products: StripePrice[];
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  //   Sort by Title
  const sortedProducts = products.sort((a, b) => {
    if (a.product.name < b.product.name) {
      return -1;
    }
    if (a.product.name > b.product.name) {
      return 1;
    }
    return 0;
  });

  //    Sort by Price
  //   products.sort((a, b) => a.unit_amount - b.unit_amount)

  return (
    <>
      {
        <Heading className="text-3xl font-normal" as="h3">
          {!search ? (
            "All products"
          ) : (
            <>
              Search results for: <strong>{search}</strong>
            </>
          )}
        </Heading>
      }

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}