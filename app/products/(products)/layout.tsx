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
      <div className="flex flex-col gap-6 px-3 py-8 lg:flex-row">
        <aside className="w-full shrink-0 lg:w-60">
          <Heading
            className="my-6 scroll-m-20 text-2xl font-semibold tracking-tight"
            as="h3"
          >
            Filters
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
