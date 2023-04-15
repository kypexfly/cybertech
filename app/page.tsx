import Heading from "@/components/Heading";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/external/Carousel";
import getStripeListProducts from "@/helpers/getStripeListProducts";
import "react-multi-carousel/lib/styles.css";

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
    name: "CPU",
    icon: Cpu,
  },
];

export default async function Home() {
  const products = await getStripeListProducts({ limit: 9 });

  return (
    <main className="px-3 py-6">
      <section>
        <header className="my-6 p-5 text-center md:p-10">
          <Heading size="text-4xl" className="md:text-5xl" as="h3">
            Latest Products
          </Heading>
        </header>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          ssr
          className="sliderContainer"
          containerClass="container-with-dots"
          dotListClass="!relative"
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
          // slidesToSlide={1}
          // swipeable
          // draggable
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
            <button
              // href={`/products/${category}`}
              key={category.name}
              className="flex items-center md:justify-center gap-2 bg-zinc-100 px-6 py-3 hover:bg-blue-600 hover:text-white md:flex-col md:py-6"
            >
              <category.icon size={32} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
