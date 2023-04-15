import { StripeProduct } from "@/types";
import Stripe from "stripe";

interface Props {
  limit: number;
  search?: string;
  category?: string;
}

export default async function getStripeListProducts({
  limit,
  search = "",
  category = "",
}: Props) {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const options = {
    expand: ["data.default_price"],
    limit,
  };

  if (search || category ) {
    const res = await stripe.products.search({
      ...options,
      query: `name~'${search || null}' OR metadata['category']:'${category || null}'`,
    });
    const products = res.data;
    console.log({category, search})
    return products as StripeProduct[];
  } else {
    const res = await stripe.products.list(options);
    const products = res.data;
    return products as StripeProduct[];
  }
}
