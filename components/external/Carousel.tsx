"use client";

import Carousel, { CarouselProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ClientComponent(props: CarouselProps) {
  return <Carousel {...props} />;
}
