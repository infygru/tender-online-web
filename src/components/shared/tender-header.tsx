import React from "react";
import { SelectState } from "./selectState";
import { useQuery } from "@tanstack/react-query";

const TenderHeader = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const { data, isLoading } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/tender/all"
      );
      return response.json();
    },
  });
  return (
    <div className="flex items-center w-full px-8 py-6">
      <div className="">
        <img src="/logo.png" className="w-10/12" alt="logo" />
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="bg-[#171717] py-2 w-full  px-4 flex items-center justify-between gap-6 rounded-full">
          <div className="flex items-center gap-3">
            <div className="">
              <SelectState />
            </div>
            <div className="">
              <h1 className="text-white text-center text-base not-italic font-medium leading-[25px]">
                Showing {data?.result?.length} Tenders in Tamilnadu{" "}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <button className="border-4 border-yellow-400 bg-[#EEE] font-semibold rounded-full px-4 py-2">
                For you
              </button>
            </div>
            <div className="">
              <img
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderHeader;
