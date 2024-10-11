"use client";
import React, { useEffect, useState } from "react";
import TenderHeader from "@/components/shared/tender-header";
import { useQuery } from "@tanstack/react-query";
import { DataTableTender } from "@/components/table/tender-table";
import AdsImage from "@/components/shared/ads-image";
import MobileTenderList from "@/components/shared/mobile-tenders";
import { DatePickerWithRange } from "@/components/shared/multi-select-demo";
import Footer from "@/components/shared/footer";
import { CheckSuggestion } from "@/components/shared/check-suggestion";
import Loading from "@/components/ui/loading";
import { useRouter } from "next/navigation";

export default function Page() {
  const [search, setSearch] = useState("");

  const { data: userStatus, isLoading } = useQuery({
    queryKey: ["userStatus"],
    queryFn: async () => {
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/auth/status",
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      return response.json();
    },
  });

  console.log(userStatus, "userStatus");

  const [isMobile, setIsMobile] = useState<any>(false);

  useEffect(() => {
    // Only run this code on the client-side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="w-full px-2 lg:px-4">
      <TenderHeader />
      <CheckSuggestion />
      <div className="w-full ">
        {userStatus?.isTendersVisible ? (
          <>
            {!isMobile ? (
              <DataTableTender setSearch={setSearch} search={search} />
            ) : (
              <MobileTenderList />
            )}
          </>
        ) : (
          <FreeTrialComplete />
        )}

        <AdsImage />
      </div>
      <Footer />
    </main>
  );
}

interface FreeTrialCompleteProps {
  message?: string;
  buttonText?: string;
}

const FreeTrialComplete: React.FC<FreeTrialCompleteProps> = ({
  message = "Your free trial has ended. Please subscribe to continue.",
  buttonText = "Go to Pricing",
}) => {
  const navigate = useRouter();

  const handleNavigate = () => {
    navigate.push("/pricing"); // Adjust this path based on your actual pricing page route
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-3xl p-6 text-white shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4">{message}</h2>
      <button
        onClick={handleNavigate}
        className="mt-4 bg-white text-red-600 hover:bg-gray-200 font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
      >
        {buttonText}
      </button>
    </div>
  );
};
