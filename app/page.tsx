import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import { StripePrice } from "@/types";
import Link from "next/link";
import Stripe from "stripe";
import {
  Cpu,
  Database,
  DeviceFloppy,
  DeviceGamepad2,
  DeviceLaptop,
} from "tabler-icons-react";

async function getStripeListProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const res = await stripe.prices.list({
    expand: ["data.product"],
    limit: 6,
  });

  const products = res.data;

  return products as StripePrice[];
}

const categories = [
  {
    name: "Storage",
    icon: DeviceFloppy,
  },
  {
    name: "RAM",
    icon: Database,
  },
  {
    name: "Graphic Card",
    icon: DeviceGamepad2,
  },
  {
    name: "Laptop",
    icon: DeviceLaptop,
  },
  {
    name: "CPU",
    icon: Cpu,
  },
];

export default async function Home() {
  const products = await getStripeListProducts();

  return (
    <main className="px-3 py-6">
      <section>
        <header className="my-6">
          <Heading size="text-xl" className="md:text-3xl" as="h3">
            Popular Categories
          </Heading>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <button
              // href={`/products/${category}`}
              key={category.name}
              className="flex items-center justify-center gap-2 bg-zinc-100 px-6 py-3 hover:bg-blue-600 hover:text-white md:flex-col md:py-6"
            >
              <category.icon size={32} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <header className="my-6 p-5 text-center md:p-10">
          <Heading size="text-4xl" className="md:text-5xl" as="h3">
            Latest Products
          </Heading>
        </header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
