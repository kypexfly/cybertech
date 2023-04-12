import Heading from "@/components/Heading";
import dollarUSLocale from "@/utils/dollarUSLocale";
import { StripeProduct } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Stripe from "stripe";
import AddItemButton from "@/components/AddItemButton";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const { name } = await getStripeSingleProduct(id);

  return {
    title: `${name} - CyberTech`,
  };
}

async function getStripeSingleProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  return product as unknown as StripeProduct;
}

export default async function ProductPage({ params }: Props) {
  const { id } = params;

  const { images, name, metadata, description, default_price } =
    await getStripeSingleProduct(id);

  const price = dollarUSLocale.format(default_price.unit_amount / 100);

  return (
    <div className="flex min-h-[70vh] flex-col gap-4 px-3 py-6 md:flex-row">
      <div className="w-full flex-1 lg:px-16">
        <div className="relative h-96 w-full overflow-hidden md:h-[36rem]">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#5151510d]"></div>
          <Image
            src={images[0]}
            alt={name}
            height={600}
            width={600}
            className="h-full w-full scale-90 object-contain object-center"
          />
        </div>
      </div>
      <div className="flex-1">
        <span className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600">
          {metadata.category}
        </span>
        <Heading as="h3" size="text-3xl" className="mb-6">
          {name}
        </Heading>

        <p className="mb-6 text-zinc-700">{description}</p>

        <span className="text-2xl font-bold">{price}</span>

        <div className="my-6">
          <AddItemButton
            cartItem={{
              priceId: default_price.id,
              productId: id,
              quantity: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
