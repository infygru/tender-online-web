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
        "https://api.tenderonline.in/api/tender/all"
      );
      return response.json();
    },
  });

  return (
    <div className="flex items-center w-full px-1 lg:px-8 py-2 lg:py-6">
      <div className="">
        <img src="/logo.png" className=" w-44 lg:w-[96%]" alt="logo" />
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="lg:bg-[#171717] bg-white py-2 w-full  px-0 lg:px-4 flex items-center justify-between gap-6 rounded-full">
          <div className="flex items-center gap-3">
            <div className="lg:pl-0 pl-8">
              <SelectState />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-white text-center text-base not-italic font-medium leading-[25px]">
                Showing {data?.result?.length} Tenders in Tamilnadu{" "}
              </h1>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2">
                <img src="/whatsapp.png" alt="" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-white text-sm">
                  91761 33695
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <img src="/gmail.png" alt="" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-white text-sm">
                  sales@tenderonline.co.in
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderHeader;
