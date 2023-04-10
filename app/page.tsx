import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { StripeItem } from "@/types";
import Stripe from "stripe";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices as StripeItem[];
}

export default async function Home() {
  const products = await getStripeProducts();

  return (
    <main className="px-3 py-6">
      <section>
        <Heading size="text-3xl" as="h3">
          Latest Products
        </Heading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

// const products: Product[] = [
//   {
//     name: "MSI GeForce RTX 4090 Gaming Trio 24G",
//     id: "1",
//     price: 1599.99,
//   },
//   {
//     name: "Corsair Vengeance RGB Pro 32GB",
//     id: "2",
//     price: 83.99,
//   },
//   {
//     name: "Intel Core i9-13900K Desktop Processor 24 cores",
//     id: "3",
//     price: 569.99,
//   },
//   {
//     name: "Corsair RMX Series (2021) RM1000x 1000 Watt",
//     id: "4",
//     price: 189.95,
//   },
//   {
//     name: "AMD Ryzen™ 7 5800X3D 8-core, 16-Thread Desktop Processor",
//     id: "5",
//     price: 326.99,
//   },
//   {
//     name: "Seagate BarraCuda 8TB Internal Hard Drive HDD",
//     id: "6",
//     price: 99.99,
//   },
//   {
//     name: "Elgato HD60 X External Capture Card",
//     id: "7",
//     price: 199.99,
//   },
//   {
//     name: "Corsair RMX Series (2021) RM1000x 1000 Watt",
//     id: "8",
//     price: 189.95,
//   },
// ];
