import Heading from "@/components/Heading";
import getStripeListProducts from "@/helpers/getStripeListProducts";
import { Metadata } from "next";
import ProductsContainer from "./ProductsContainer";

export const metadata: Metadata = {
  title: "Products - CyberTech",
};

export default async function Home() {
  const products = await getStripeListProducts({ limit: 100 });

  return (
    <main className="px-3 py-6">
      <div className="text-right">
        <label
          htmlFor="SortBy"
          className="block text-xs font-medium text-gray-700"
        >
          Sort By
        </label>

        <select
          id="SortBy"
          className="mt-1 rounded border-gray-300 p-1 text-sm"
        >
          <option>Sort By</option>
          <option value="Title, DESC">Title, DESC</option>
          <option value="Title, ASC">Title, ASC</option>
          <option value="Price, DESC">Price, DESC</option>
          <option value="Price, ASC">Price, ASC</option>
        </select>
      </div>

      <section>
        <ProductsContainer products={products} />
      </section>
    </main>
  );
}
