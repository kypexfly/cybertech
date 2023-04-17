import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import SearchProductBar from "@/components/SearchProductBar";
import Carousel from "@/components/external/Carousel";
import getStripeListProducts from "@/helpers/getStripeListProducts";
import Link from "next/link";

import {
  Cpu,
  Database,
  DeviceFloppy,
  DeviceGamepad2,
  DeviceLaptop,
} from "tabler-icons-react";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1280,
    },
    items: 5,
    slidesToSlide: 5,
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0,
    },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: {
      max: 1280,
      min: 768,
    },
    items: 3,
    slidesToSlide: 3,
  },
};

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
    name: "Processor",
    icon: Cpu,
  },
];

export default async function Home() {
  const products = await getStripeListProducts({ limit: 9 });

  return (
    <main className="px-3 py-6">
      <div className="mb-6 md:hidden">
        <SearchProductBar />
      </div>
      <section>
        <header className="my-6 p-5 text-center md:p-10">
          <Heading size="text-4xl" className="md:text-5xl" as="h3">
            Latest Products
          </Heading>
          <p className="mx-auto mt-4 max-w-lg text-sm/relaxed text-gray-500 dark:text-gray-400">
            Stay up-to-date with the newest and most innovative tech items on
            the market. From smartphones to laptops, smart home devices to
            wearables, we have all the latest and greatest tech products for you
            to explore.
          </p>
        </header>
        <Carousel
          additionalTransfrom={0}
          arrows
          ssr={true}
          deviceType="desktop"
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          className="sliderContainer"
          containerClass="container-with-dots"
          focusOnSelect={false}
          infinite
          itemClass="px-3"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside
          responsive={responsive}
          showDots
          sliderClass=""
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </section>

      <section>
        <header className="mb-6 mt-10">
          <Heading size="text-xl" className="md:text-3xl" as="h3">
            Popular Categories
          </Heading>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              href={`/products?category=${category.name.toLowerCase()}`}
              key={category.name}
              className="flex items-center gap-2 bg-slate-100 px-6 py-3 hover:bg-blue-600 hover:text-white md:flex-col md:justify-center md:py-6"
            >
              <category.icon size={32} />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
