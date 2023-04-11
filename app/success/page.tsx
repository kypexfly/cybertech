import Heading from "@/components/Heading";
import Redirect from "./Redirect";

export default async function Sucess() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-3 py-10">
      <Heading size="text-3xl" as="h3">
        Thanks for buying 🥳
      </Heading>

      <Redirect />
    </main>
  );
}
