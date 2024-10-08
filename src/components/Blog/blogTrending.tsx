import Link from "next/link";
import React from "react";
import { CarouselTopSpot } from "../ui/CarouselTopSPot";
import { CarouselItem } from "../ui/carousel";
import { MoveUpRight } from "lucide-react";

const BlogTrending = ({ blog, isLoading }: any) => {
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="w-full">
        <h1 className="text-3xl mt-12 font-bold text-start">Trending Blogs</h1>
        <div className="w-full">
          <>
            <div className="w-full">
              <div className="">
                <div className="mt-6 grid">
                  <CarouselTopSpot isImg={false} isHover={true}>
                    {blog.map((item: any, index: number) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <Link
                          className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href={"/blog/" + item._id}
                        >
                          <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                            <img
                              className="size-full absolute top-0 start-0 object-cover"
                              src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
                              alt="Image Description"
                            />
                          </div>

                          <div className="absolute bottom-0 inset-x-0 z-10">
                            <div className="flex flex-col h-full p-4 sm:p-6">
                              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white/[.8]">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-xs line-clamp-3 text-white/[.8]">
                                {item.description}
                              </p>
                            </div>
                            <Link
                              href={"/blog/" + item._id}
                              className=" w-12 text-white h-12 rounded-full absolute bottom-6 right-6 bg-gray-600 flex items-center justify-center  "
                            >
                              <MoveUpRight size={24} />
                            </Link>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselTopSpot>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default BlogTrending;
