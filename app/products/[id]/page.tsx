import Heading from "@/components/Heading";
import Button from "./Button";

import { Metadata } from "next";
import Stripe from "stripe";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: price_id } = params;
  return {
    title: `Product ${price_id} - CyberTech`,
  };
}

async function getStripeSingleProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const price = await stripe.prices.retrieve(id, { expand: ["product"] });
  return price;
}

export default async function ProductPage({ params }: Props) {
  const { id } = params;

  const product = await getStripeSingleProduct(id);

  return (
    <>
      <div className="flex gap-4 px-3 py-6">
        <div className="w-full max-w-[450px] shrink-0">
          <div className="relative h-96 w-full overflow-hidden">
            <Image
              src={product.product.images[0]}
              alt={product.product.name}
              height={350}
              width={350}
              className="h-full w-full scale-90 object-contain object-center"
            />
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-[#5151510d]"></div>
          </div>
        </div>
        <div className="grow">
          <p>{product.product.metadata.category}</p>
          <Heading as="h3" size="text-3xl">
            {product.product.name}
          </Heading>
          <p>{product.product.description}</p>
          <Button />
        </div>
      </div>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </>
  );
}
