"use client";
import React, { useEffect, useState } from "react";
import TenderDetailsDialog from "./TenderDetailsDialog";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/loading";
import { PopoverMobileFilter } from "./moblie-filter";
import Select from "react-select";
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
  const [sorting, setSorting] = React.useState<any>([]);
  const [columnFilters, setColumnFilters] = React.useState<any>([]);

  const [columnVisibility, setColumnVisibility] = React.useState<any>({});
  const [rowSelection, setRowSelection] = React.useState({});
  console.log(rowSelection, "rowSelection");
  const isAnyRowSelected = Object.values(rowSelection).some(
    (selected) => selected
  );

  const [selectedDistricts, setSelectedDistricts] = React.useState<any>([]);
  const [selectedDepartments, setSelectedDepartments] = React.useState<any>([]);
  const [selectedStatus, setSelectedStatus] = React.useState<any>([]);

  const [status, setStatus] = React.useState<string>("");

  const [selectedRowData, setSelectedRowData] = useState<Tender | null>(null);
  const [district, setDistrict] = useState<string>("");
  const [tenderValue, setTenderValue] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [selectedTenderValues, setSelectedTenderValues] = React.useState<any>(
    []
  );
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
  const districts = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanniyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupattur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const departments = [
    "Agriculture Department",
    "Animal Husbandry Department",
    "BC, MBC & Minorities Welfare Department",
    "Commercial Taxes and Registration Department",
    "Co-operation, Food and Consumer Protection Department",
    "Energy Department",
    "Environment and Forests Department",
    "Finance Department",
    "Handlooms, Handicrafts, Textiles and Khadi Department",
    "Health and Family Welfare Department",
    "Higher Education Department",
    "Highways and Minor Ports Department",
    "Home, Prohibition and Excise Department",
    "Housing and Urban Development Department",
    "Industries Department",
    "Information Technology Department",
    "Labour Welfare and Skill Development Department",
    "Law Department",
    "Municipal Administration and Water Supply Department",
    "Planning, Development and Special Initiatives Department",
    "Public Department",
    "Public Works Department",
    "Revenue and Disaster Management Department",
    "Rural Development and Panchayat Raj Department",
    "School Education Department",
    "Social Welfare and Women Empowerment Department",
    "Tamil Development and Information Department",
    "Tourism, Culture and Religious Endowments Department",
    "Transport Department",
    "Youth Welfare and Sports Development Department",
  ];

  const dropdownData: any = {
    District: districts.map((district) => ({
      value: district.toLowerCase().replace(/\s+/g, ""),
      label: district,
    })),
    "Tender Value": [
      { value: "1", label: "Less than ₹10L" },
      { value: "2", label: "₹10L - ₹1Cr" },
      { value: "3", label: "₹1Cr - ₹100Cr" },
      { value: "4", label: "More than ₹100Cr" },
    ],
    Department: departments.map((department) => ({
      value: department
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, ""),
      label: department,
    })),
    Status: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
    ],
  };

  const handleMultiSelectChange = (label: string, value: any) => {
    switch (label) {
      case "District":
        setSelectedDistricts(value);
        break;
      case "Department":
        setSelectedDepartments(value);
        break;
      case "Status":
        setSelectedStatus(value);
        break;
      case "Tender Value":
        setSelectedTenderValues(value);
        break;
      default:
        break;
    }
  };
  // Function to render the dropdown menu dynamically
  const renderMultiSelect = (label: string) => {
    const options = dropdownData[label] || [];

    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <Select
          isMulti
          options={options}
          value={(() => {
            switch (label) {
              case "District":
                return selectedDistricts;
              case "Department":
                return selectedDepartments;
              case "Status":
                return selectedStatus;
              case "Tender Value":
                return selectedTenderValues;
              default:
                return [];
            }
          })()}
          onChange={(selected) => handleMultiSelectChange(label, selected)}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    );
  };

  return (
    <div className="px-2 bg-[#F6F8F9] rounded-3xl py-4">
      <div className=" flex items-center justify-between w-full">
        <h2 className="text-[#6E7C87] py-2 text-xs font-semibold">
          Showing {tenders.length} Tenders in Tamilnadu
        </h2>
        <div className="">
          <PopoverMobileFilter renderMultiSelect={renderMultiSelect} />
        </div>
      </div>
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
