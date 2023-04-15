import getStripeListProducts from "@/helpers/getStripeListProducts";
import { Metadata } from "next";
import ProductsContainer from "./ProductsContainer";
import SearchProductBar from "@/components/SearchProductBar";

export const metadata: Metadata = {
  title: "Products - CyberTech",
};

interface Props {
  searchParams: {
    search: string;
    category: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const search = searchParams.search;
  const category = searchParams.category;

  const products = await getStripeListProducts({ limit: 10, search, category });

  return (
    <main className="px-3 py-6">
      <div className="md:hidden mb-6">
        <SearchProductBar />
      </div>
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
