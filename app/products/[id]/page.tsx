import Heading from "@/components/Heading";
import Button from "./Button";

import { Metadata } from "next";

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

export default async function ProductPage({ params }: Props) {
  const { id } = params;
  return (
    <div className="grid h-screen grid-cols-2 gap-4 px-3 py-6">
      <div className="">
        <div className="h-96 w-96 bg-slate-300"></div>
      </div>
      <section>
        <Heading as="h3" size="text-3xl">
          Product Name
        </Heading>

        <Button />
        
      </section>
    </div>
  );
}
