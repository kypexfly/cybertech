import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <section>
        <h3 className="font-bold text-3xl">Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          <ProductCard
            product={{
              name: "RTX 4090",
              id: "1",
            }}
          />
          <ProductCard
            product={{
              name: "RAM 16GB",
              id: "2",
            }}
          />
          <ProductCard
            product={{
              name: "RAM 16GB",
              id: "3",
            }}
          />
          <ProductCard
            product={{
              name: "RAM 16GB",
              id: "4",
            }}
          />
        </div>
      </section>
    </main>
  );
}
