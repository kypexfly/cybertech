import Heading from "@/components/Heading";
import dollarUSLocale from "@/utils/dollarUSLocale";
import { StripeProduct } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Stripe from "stripe";
import AddItemButton from "@/components/AddItemButton";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

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

  const cartItem = {
    priceId: default_price.id,
    productId: id,
    quantity: 1,
  };

  const price = dollarUSLocale.format(default_price.unit_amount / 100);

  return (
    <div className="flex min-h-[70vh] flex-col gap-4 px-3 py-6 md:flex-row">
      <div className="w-full flex-1 lg:px-16">
        <div className="relative h-96 w-full overflow-hidden md:h-[36rem]">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-[#6185cc0d]"></div>
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
        <Link
          href={`/products?category=${metadata.category}`}
          className="text-[0.75rem] font-bold uppercase tracking-wider text-blue-600 hover:underline"
        >
          {metadata.category}
        </Link>
        <Heading as="h3" size="text-3xl" className="mb-6">
          <Balancer>{name}</Balancer>
        </Heading>

        <p className="mb-6 text-zinc-700">{description}</p>

        <span className="text-2xl font-bold">{price}</span>

        <div className="my-6">
          <AddItemButton productName={name} cartItem={cartItem} />
        </div>

        <hr className="my-3" />

        <Heading as="h4" className="my-3">
          Product Description
        </Heading>

        <ul className="my-3 list-inside list-disc space-y-3 text-zinc-700">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            laborum ex obcaecati assumenda explicabo quos omnis.
          </li>
          <li>
            Tempora facere maxime incidunt beatae inventore quae cum
            exercitationem.
          </li>
          <li>Rerum debitis iusto repellendus itaque ea.</li>
          <li>Sequi voluptatibus saepe.</li>
          <li>
            Repellat explicabo labore commodi reprehenderit quas, eum
            necessitatibus! Pariatur, culpa sunt, rerum odit ad nisi ea
            excepturi.
          </li>
        </ul>
      </div>
    </div>
  );
}