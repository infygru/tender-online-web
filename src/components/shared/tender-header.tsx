import React, { useEffect, useState } from "react";
import { SelectState } from "./selectState";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { DropdownMenuDemo } from "../ui/header";
import { cn } from "@/lib/utils";
import { useUserContext } from "../hook/length";

const TenderHeader = ({ tenderLength }: { tenderLength: number | null }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [foryou, setForYou] = React.useState<any | null>(null);
  const searchParams = useSearchParams();
  const { length, setLength, setRefetch, refetch } = useUserContext();
  React.useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const foryouValue = params.get("foryou");
      setForYou(foryouValue);
    }
  }, []);
  const search = searchParams.get("length");

  const LoadingDots = () => (
    <div className="flex items-center justify-center space-x-1 px-1">
      <div className="h-1 w-1 bg-white rounded-full animate-pulse"></div>
      <div className="h-1 w-1 bg-white rounded-full animate-pulse delay-200"></div>
      <div className="h-1 w-1 bg-white rounded-full animate-pulse delay-400"></div>
    </div>
  );

  return (
    <div className="flex items-center w-full px-1 lg:px-8 py-2 lg:py-6">
      <div className="">
        <Link href={"/"}>
          <img src="/logo.png" className=" w-44 lg:w-[96%]" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="lg:bg-[#171717] bg-white py-2 w-full  px-0 lg:px-4 flex items-center justify-between gap-6 rounded-full">
          <div className="flex items-center gap-3">
            <div className="lg:pl-0 pl-8">
              <SelectState />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-white text-center text-base not-italic font-medium leading-[25px] flex gap-1">
                Showing {tenderLength != null ? tenderLength : <LoadingDots />}{" "}
                Tenders in Tamilnadu{" "}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="">
              <a
                onClick={() => setRefetch(!refetch)}
                href={(function () {
                  const foryouIs =
                    foryou === "true" || foryou === true ? "false" : "true";
                  const params = new URLSearchParams(window.location.search);
                  params.set("foryou", foryouIs); // Add or update the 'foryou' parameter
                  return `/tenders?${params.toString()}`;
                })()}
                className={cn(
                  "border-2 lg:text-white text-black px-4 py-2 text-sm font-semibold rounded-xl capitalize",
                  foryou === "false" ||
                    foryou === false ||
                    foryou === null ||
                    foryou === undefined
                    ? "border-none bg-gradient-to-r from-[#8D1DB8] to-[#1B3BF1] text-white px-4 py-2 rounded-xl capitalize w-[250px] h-[50px]"
                    : "border-2 text-white lg:text-black px-4 py-2 rounded-xl capitalize bg-black lg:bg-white"
                )}
              >
                {foryou === "true" || foryou === true
                  ? "All Tenders"
                  : "For you"}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* <Link
                target="_black"
                href="https://wa.me/9176133695"
                className="flex items-center gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-white text-sm">
                  91761 33695
                </h1>
              </Link>

              <Link
                target="_black"
                href="mailto:sales@tenderonline.co.in"
                className="flex items-center gap-2"
              >
                <img src="/gmail.png" alt="Gmail" className="w-8 h-8" />
                <h1 className="font-bold hidden lg:block text-white text-sm">
                  sales@tenderonline.co.in
                </h1>
              </Link> */}

              <div className="hidden lg:block">
                <DropdownMenuDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenderHeader;
