"use client";
import ListTenders from "@/components/shared/list-tenders";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const response = await fetch(
        "https://tender-online-h4lh.vercel.app/api/tender/all"
      );
      return response.json();
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="">
      <div className="">
        <div className=""></div>
        <ListTenders data={data} />
      </div>
    </main>
  );
}
