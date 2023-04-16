import Heading from "@/components/Heading";
import SearchProductBar from "@/components/SearchProductBar";
import getStripeListProducts from "@/helpers/getStripeListProducts";
import { FilterContextProvider } from "@/utils/context/FilterContext";
import { Metadata } from "next";
import OptionSelector from "./OptionSelector";
import ProductsContainer from "./ProductsContainer";

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

  const products = await getStripeListProducts({
    limit: 100,
    search,
    category,
  });

  return (
    <FilterContextProvider>
      <div className="flex flex-col gap-3 px-3 py-8 md:flex-row">
        <aside className="w-full shrink-0 md:w-60">
          <Heading className="mb-6 font-normal" as="h3">
            Options
          </Heading>
          <div className="mb-6 md:hidden">
            <SearchProductBar />
          </div>
          <div>
            <OptionSelector />
          </div>
        </aside>

        <section className="grow">
          <ProductsContainer products={products} />
        </section>
      </div>
    </FilterContextProvider>
  );
}
