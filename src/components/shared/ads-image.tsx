import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const AdsImage = () => {
  const { data: ads } = useQuery<any>({
    queryKey: ["Ads"],
    queryFn: () =>
      fetch(`http://localhost:8080/api/ads/images`).then((res) => res.json()),
  });

  return (
    <div className="pt-6 px-4 lg:px-4 pb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {ads?.map((ads: any, index: number) => (
            <CarouselItem key={index} className="lg:basis-1/2 basis-full">
              <Link
                target="_black"
                href={"/pricing"}
                className="lg:h-64 h-28 w-full"
              >
                <img
                  src={ads.imageUrl}
                  alt=""
                  className="lg:h-52 h-28 object-cover w-full rounded-xl"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="mr-14" />
      </Carousel>
    </div>
  );
};

export default AdsImage;
