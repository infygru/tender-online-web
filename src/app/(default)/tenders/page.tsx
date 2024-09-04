"use client";
import React, { useEffect, useState } from "react";
import ListTenders from "@/components/shared/list-tenders";
import TenderHeader from "@/components/shared/tender-header";
import WelcomeModal from "@/components/shared/welcome-model";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { DataTableTender } from "@/components/table/tender-table";
import AdsImage from "@/components/shared/ads-image";
import MobileTenderList from "@/components/shared/mobile-tenders";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/tender/all"
      );
      return response.json();
    },
  });

  useEffect(() => {
    const path = localStorage.getItem("path");
    if (!path) {
      setShowWelcome(true);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  const isMobile = window.innerWidth < 768;

  return (
    <main className="w-full px-2 lg:px-4">
      {showWelcome && (
        <WelcomeModal onClose={() => setShowWelcome(false)} clientId="hi" />
      )}
      <TenderHeader />
      <div className="w-full ">
        {!isMobile ? <DataTableTender /> : <MobileTenderList />}
        <AdsImage />
      </div>
    </main>
  );
}
