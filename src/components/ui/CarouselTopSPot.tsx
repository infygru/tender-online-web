import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselTopSpot({ children, isImg, isHover, hover }: any) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full"
    >
      <CarouselContent isDrag={isImg}>{children}</CarouselContent>
      {hover && (
        <>
          <CarouselPrevious className="left-2 w-7 h-7" />
          <CarouselNext className="right-2 w-7 h-7" />
        </>
      )}
      {isHover && (
        <>
          <CarouselPrevious className="left-2 w-7 h-7" />
          <CarouselNext className="right-2 w-7 h-7" />
        </>
      )}
    </Carousel>
  );
}
