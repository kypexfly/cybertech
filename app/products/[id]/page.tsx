import Heading from "@/app/components/Heading";

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { id } = params;
  return (
    <div className="grid h-screen grid-cols-2 gap-4 py-3">
      <div className="">
        <div className="h-96 w-96 rounded bg-slate-300"></div>
      </div>
      <section>
        <Heading as="h3" size="text-3xl">
          Product Name
        </Heading>
        Price: <span>Product Price</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
          aliquid eligendi aut assumenda autem laboriosam cum iusto tenetur
          officia repudiandae dicta temporibus veritatis cumque asperiores quis
          earum explicabo sequi delectus. Dolor reprehenderit ad alias eos
          facilis voluptatum eaque, magnam blanditiis dolorum! Tenetur
          laudantium itaque culpa tempora perspiciatis!
        </p>
        <button className="rounded bg-green-600 p-3 font-bold text-white">
          Add to Cart
        </button>
      </section>
    </div>
  );
}
