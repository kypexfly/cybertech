"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Redirect({ seconds = 5 }: { seconds?: number }) {
  const router = useRouter();
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval)
      router.push("/")
    };

    return () => {
      clearInterval(interval);
    };
  }, [count, router]);

  return <p>You&apos;re being redirected to the homepage in {count}...</p>;
}
