import getStripeListProducts from "@/helpers/getStripeListProducts";
import ProductsContainer from "./ProductsContainer";

interface Props {
  searchParams: {
    search: string;
    category: string;
  };
}

export default async function ProductsPage({ searchParams }: Props) {
  const search = searchParams.search;
  const category = searchParams.category;

  const products = await getStripeListProducts({
    limit: 100,
    search,
    category,
  });

  return <ProductsContainer products={products} />;
}
