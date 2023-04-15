import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import getStripeListProducts from "@/helpers/getStripeListProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - CyberTech",
};

export default async function Home() {
  const products = await getStripeListProducts({ limit: 100 });

  return (
    <main className="px-3 py-6">
      <section>
        <Heading size="text-3xl" as="h3">
          All products
        </Heading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
