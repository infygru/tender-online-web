import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AdsImage = () => {
  const {
    data: ads,
    isLoading,
    error,
    refetch,
  } = useQuery<any>({
    queryKey: ["Ads"],
    queryFn: () =>
      fetch(`https://tender-online-h4lh.vercel.app/api/ads/images`).then(
        (res) => res.json()
      ),
  });
  return (
    <div className="pt-6 px-16 pb-8">
      <Carousel className="w-full">
        <CarouselContent>
          {ads?.map((ads: any, index: number) => (
            <CarouselItem key={index} className="basis-1/2">
              <div className="h-64 w-full">
                <img
                  src={ads.imageUrl}
                  alt=""
                  className="h-52 object-cover w-full rounded-3xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default AdsImage;
