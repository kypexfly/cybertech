import { StripePrice } from "@/types";
import Stripe from "stripe";
 
interface Props {
    limit: number
}


export default async function getStripeListProducts({ limit } : Props) {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });
  
    const res = await stripe.prices.list({
      expand: ["data.product"],
      limit,
    });
  
    const products = res.data;
  
    return products as StripePrice[];
  }