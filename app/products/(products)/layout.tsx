import Heading from "@/components/Heading";
import SearchProductBar from "@/components/SearchProductBar";
import { FilterContextProvider } from "@/utils/context/FilterContext";
import { Metadata } from "next";
import OptionSelector from "./OptionSelector";

export const metadata: Metadata = {
  title: "Products - CyberTech",
};

export default async function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FilterContextProvider>
      <div className="flex flex-col gap-6 px-3 py-8 md:flex-row">
        <aside className="w-full shrink-0 md:w-60">
          <Heading className="mb-6 font-normal" as="h3">
            Options
          </Heading>
          <div className="mb-6 md:hidden">
            <SearchProductBar />
          </div>
          <div>
            <OptionSelector />
          </div>
        </aside>

        <section className="grow">{children}</section>
      </div>
    </FilterContextProvider>
  );
}
