import ProductCard, { Product } from "./components/ProductCard";

const products: Product[] = [
  {
    name: "MSI GeForce RTX 4090 Gaming Trio 24G",
    id: "1",
    price: 1599.99,
  },
  {
    name: "Corsair Vengeance RGB Pro 32GB",
    id: "2",
    price: 83.99,
  },
  {
    name: "Intel Core i9-13900K Desktop Processor 24 cores",
    id: "3",
    price: 569.99,
  },
  {
    name: "Corsair RMX Series (2021), RM1000x, 1000 Watt",
    id: "4",
    price: 189.95,
  },
  {
    name: "AMD Ryzen™ 7 5800X3D 8-core, 16-Thread Desktop Processor",
    id: "5",
    price: 326.99,
  },
  {
    name: "Seagate BarraCuda 8TB Internal Hard Drive HDD",
    id: "6",
    price: 99.99,
  },
  {
    name: "Elgato HD60 X External Capture Card",
    id: "7",
    price: 199.99,
  },
];

export default function Home() {
  return (
    <main className="">
      <section>
        <h3 className="text-3xl font-bold my-5">Products</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
