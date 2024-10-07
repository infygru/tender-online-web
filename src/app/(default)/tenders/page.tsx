"use client";
import React, { useEffect, useState } from "react";
import TenderHeader from "@/components/shared/tender-header";
import { useQuery } from "@tanstack/react-query";
import { DataTableTender } from "@/components/table/tender-table";
import AdsImage from "@/components/shared/ads-image";
import MobileTenderList from "@/components/shared/mobile-tenders";
import { DatePickerWithRange } from "@/components/shared/multi-select-demo";

export default function Page() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["tenders", search],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8080/api/tender/all" + `?search=${search}`
      );
      return response.json();
    },
  });

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

  return (
    <main className="w-full px-2 lg:px-4">
      <TenderHeader />
      <div className="w-full ">
        {!isMobile ? (
          <DataTableTender setSearch={setSearch} search={search} />
        ) : (
          <MobileTenderList />
        )}

        <AdsImage />
      </div>
    </main>
  );
}
