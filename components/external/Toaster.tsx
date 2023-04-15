"use client";

import { Toaster as ClientComponent, ToasterProps } from "react-hot-toast";

export default function Toaster(props: ToasterProps) {
  return <ClientComponent {...props} />;
}
