"use client";
import React, { useEffect, useState } from "react";
import TenderDetailsDialog from "./TenderDetailsDialog";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/loading";
export function formatCurrency(value: any): string {
  const crore = 1_00_00_000; // 1 crore = 10 million
  const lakh = 1_00_000; // 1 lakh = 100 thousand
  const thousand = 1_000; // 1 thousand = 1 thousand

  if (value >= crore) {
    return `${(value / crore).toFixed(2)}Cr`; // Format as Crore
  } else if (value >= lakh) {
    return `${(value / lakh).toFixed(2)}L`; // Format as Lakh
  } else if (value >= thousand) {
    return `${(value / thousand).toLocaleString("en-IN")}`; // Format with commas
  } else {
    return value.toString(); // Return as is for smaller numbers
  }
}

// Define the type for tender data
interface Tender {
  _id: string;
  tenderName: string;
  description: string;
  epublishedDate: string;
  bidSubmissionDate: string;
  bidOpeningDate: string;
  tenderValue: string;
  refNo: string;
  TenderId: string;
  district: string;
  state: string;
  department: string;
  subDepartment: string;
  location: string;
  address: string;
  pincode: string;
  active: boolean;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const MobileTenderList: React.FC = () => {
  const [selectedTenderValues, setTenderValues] = useState<string[]>([]);
  const [selectedRowData, setSelectedRowData] = useState<Tender | null>(null);
  const [district, setDistrict] = useState<string>("");
  const [tenderValue, setTenderValue] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        district,
        tenderValue,
        department,
        status,
        search,
      });

      const response = await fetch(
        `https://tender-online-h4lh.vercel.app/api/tender/all?${queryParams.toString()}`
      );
      return response.json();
    },
  });
  useEffect(() => {
    refetch();
  }, [district, tenderValue, department, status, search]);
  if (isLoading) {
    return <Loading />;
  }
  const tenders = data?.result;

  const handleRowClick = (rowData: any) => {
    setSelectedRowData(rowData); // Set the clicked row data to state
  };

  return (
    <div className="px-2 bg-[#F6F8F9] rounded-3xl py-4">
      <h2 className="text-[#6E7C87] py-2 text-xs font-semibold">
        Showing 156 Tenders in Tamilnadu
      </h2>
      <TenderDetailsDialog
        selectedRowData={selectedRowData}
        setSelectedRowData={setSelectedRowData}
      />
      {tenders?.map((tender: any) => (
        <div
          onClick={() => handleRowClick(tender)}
          key={tender._id}
          className="bg-white shadow-lg rounded-lg mb-4 p-4"
        >
          <div className="flex items-center text-[#4B0082] text-[10px] justify-between">
            <p>Opening Date: {formatDate(tender.bidOpeningDate)}</p>
            <p>Closeing Date: {formatDate(tender.bidSubmissionDate)}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-[#F8DD4E] text-[#500187] px-0.5 py-0.5 rounded font-semibold text-[10px]">
              <p>{tender.department}</p>
            </div>
            <div className="text-[20px] text-[#500187] font-bold">
              ₹{formatCurrency(tender.tenderValue)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#667085] w-[60%] text-[12px]">
              {tender.tenderName}
            </p>
            <p className="text-[#667085] text-[10px]">{tender.TenderId}</p>
          </div>
          {/* <h3 className="font-bold text-lg mb-2">{tender.tenderName}</h3>
          <div className="text-sm text-gray-500">
            <p>
              <span className="font-semibold">Published Date: </span>
              {formatDate(tender.epublishedDate)}
            </p>
            <p>
              <span className="font-semibold">Submission Date: </span>
              {formatDate(tender.bidSubmissionDate)}
            </p>
            <p>
              <span className="font-semibold">Opening Date: </span>
              {formatDate(tender.bidOpeningDate)}
            </p>
            <p>
              <span className="font-semibold">Tender Value: </span>
              {tender.tenderValue || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Reference No: </span>
              {tender.refNo}
            </p>
            <p>
              <span className="font-semibold">Department: </span>
              {tender.department}
            </p>
            <p>
              <span className="font-semibold">Location: </span>
              {tender.location}
            </p>
            <p>
              <span className="font-semibold">Address: </span>
              {tender.address}
            </p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default MobileTenderList;
