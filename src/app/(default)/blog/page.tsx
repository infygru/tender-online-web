"use client";
import BlogHero from "@/components/Blog/BlogHero";
import BlogTrending from "@/components/Blog/blogTrending";
import Footer from "@/components/shared/footer";
import Header from "@/components/ui/header";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const fetchBlog = async () => {
    const res = await fetch("https://tender-online-h4lh.vercel.app/api/blog");
    return res.json();
  };

  const {
    data: blog,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlog,
  });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="pt-36 px-12">
        <BlogHero />
        <BlogTrending title={"Trending Blogs"} blog={blog} />
        <BlogTrending title={"Related Topics"} blog={blog} />
      </div>
      <Footer />
    </div>
  );
}
