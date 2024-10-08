"use client";
import Header from "@/components/ui/header";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Page({ params }: { params: { slug: string } }) {
  const fetchBlog = async () => {
    const res = await axios.get(
      `https://tender-online-h4lh.vercel.app/api/blog/${params.slug}`
    );
    return res.data;
  };

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlog,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="bg-gray-50">
      <Header />
      <div className="pt-36 px-4 md:px-12 lg:px-20">
        {/* Blog Title Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
              {blog[0]?.title}
            </h1>
            <p className="text-sm text-gray-500">{blog[0]?.tags}</p>
            <h2 className="capitalize text-lg text-gray-600">
              Written by:{" "}
              <span className="font-semibold">{blog[0]?.author}</span>
            </h2>
            <p className="text-base text-gray-500">
              {new Date(blog[0]?.createdAt).toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row items-start">
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg mb-4 md:mb-0">
            <p className="text-xl font-semibold text-gray-800">Introduction</p>
            <p className="text-lg mt-3 text-gray-600">
              {blog[0]?.introduction}
            </p>
          </div>
          <div className="flex-1 px-6">
            <img
              className="rounded-lg w-full h-[300px] object-cover"
              src={blog[0]?.featureImg1}
              alt="Blog Feature Image"
            />
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="my-8">
          {blog &&
            Array.isArray(blog[1]) &&
            blog[1].map((value: any, index: number) => (
              <div
                key={index}
                className="mt-6 p-6 bg-white shadow-lg rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
        </section>

        {/* Conclusion Section */}
        <section className="flex flex-col md:flex-row items-start my-12">
          <div className="flex-1 p-6 bg-white shadow-lg rounded-lg mb-4 md:mb-0">
            <p className="text-xl font-semibold text-gray-800">Conclusion</p>
            <p className="text-lg mt-3 text-gray-600">{blog[0]?.conclusion}</p>
          </div>
          <div className="flex-1 px-6">
            <img
              className="rounded-lg w-full h-[300px] object-cover"
              src={blog[0]?.featureImg2}
              alt="Blog Conclusion Image"
            />
          </div>
        </section>

        {/* Comments Section */}
        <section>
          <h1 className="text-3xl mt-12 font-bold text-gray-800">Comments</h1>
          <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
            <p className="text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
