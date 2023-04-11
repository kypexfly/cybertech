import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.ids.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }
  
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });

    const res = await stripe.products.list({
        expand: ["data.default_price"],
        ids: body.ids,
      });

    const products = res.data

    return NextResponse.json(products);

  } catch (err) {
    
    console.log(err);
    return new Response("Error", {
      status: 405,
    });
  }
}