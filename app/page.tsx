import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { StripePrice } from "@/types";
import Stripe from "stripe";

async function getStripeListProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
  });

  const products = res.data;

  return products as StripePrice[];
}

export default async function Home() {
  const products = await getStripeListProducts();

  return (
    <main className="px-3 py-6">
      <section>
        <Heading size="text-3xl" as="h3">
          Latest Products
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
