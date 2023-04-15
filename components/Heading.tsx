import cn from "@/utils/cn";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "text-sm"
    | "text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl";
  children: React.ReactNode;
  className?: string;
}

function Heading({
  as: Element = "h1",
  size = "text-base",
  children,
  className,
}: HeadingProps) {
  return (
    <Element className={cn("my-3 font-bold", size, className)}>
      {children}
    </Element>
  );
}

export default Heading;
