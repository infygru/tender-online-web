import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import Link from "next/link";

const AdsImage = () => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  const { data: ads } = useQuery<any>({
    queryKey: ["Ads"],
    queryFn: () =>
      fetch(process.env.NEXT_PUBLIC_API_ENPOINT + `/api/ads/images`).then(
        (res) => res.json()
      ),
  });

  return (
    <div className="pt-6 px-4 lg:px-4 pb-8">
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
      >
        <CarouselContent>
          {ads?.map((ads: any, index: number) => (
            <CarouselItem key={index} className="lg:basis-1/2 basis-full">
              <Link
                target="_black"
                href={ads?.url || "/"}
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
