"use client";
import React, { useEffect, useState } from "react";
import ListTenders from "@/components/shared/list-tenders";
import TenderHeader from "@/components/shared/tender-header";
import WelcomeModal from "@/components/shared/welcome-model";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { DataTableTender } from "@/components/table/tender-table";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/tender/all");
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

  return (
    <main className="w-full px-4">
      {showWelcome && (
        <WelcomeModal onClose={() => setShowWelcome(false)} clientId="hi" />
      )}
      <TenderHeader />
      <div className="w-full ">
        {/* <ListTenders data={data} /> */}
        <DataTableTender data={data.result} />
      </div>
    </main>
  );
}
