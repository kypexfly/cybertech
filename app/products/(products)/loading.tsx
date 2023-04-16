import Heading from "@/components/Heading";

export default function Loading() {
  return (
    <>
      <Heading className="my-3" as="h3">
        <div className="h-8 w-1/4 animate-pulse rounded bg-slate-200"></div>
      </Heading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex md:flex-col">
              <div className="group relative h-44 w-full basis-44 animate-pulse overflow-hidden bg-slate-200 md:h-72 md:basis-auto"></div>
              <div className="flex h-28 flex-1 flex-col p-3 md:flex-auto">
                <span className="mb-1 h-3 w-1/6 rounded bg-slate-100"></span>
                <div className="mb-1 h-4 w-full rounded bg-slate-100"></div>
                <div className="mb-1 h-4 w-3/4 rounded bg-slate-100"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
