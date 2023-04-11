import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2022-11-15",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/",
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (err) {
    console.log(err);
    return new Response("Error", {
      status: 405,
    });
  }
}
