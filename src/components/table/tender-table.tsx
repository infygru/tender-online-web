"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import axios from "axios";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MultiSelect } from "@mantine/core";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ArrowUpDown, CalendarIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea } from "../ui/scroll-area";
import TenderDetailsDialog from "../shared/TenderDetailsDialog";
import { DatePickerWithRange } from "../shared/multi-select-demo";
import { DateRange } from "@matharumanpreet00/react-daterange-picker";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SearchTab from "./search-tab";
import Loading from "../ui/loading";
import { useUserContext } from "../hook/length";
export const formatDate = (isoDateString: string): string => {
  const date = new Date(isoDateString);

  const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()]; // Get the month abbreviation
  const day = date.getDate().toString().padStart(2, "0"); // Ensure day is two digits

  // Extract and format time in 12-hour format
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensure minutes are two digits
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, with 12 being the fallback for 0

  return `${day}/${month}/${year} ${hours
    .toString()
    .padStart(2, "0")}:${minutes} ${ampm}`;
};

// Define the type for the tender data
export type Tender = {
  _id: string;
  tenderName: string;
  epublishedDate: string;
  bidSubmissionDate: string;
  bidOpeningDate: string;
  district?: string;
  department: string;
  classification?: any;
  active: boolean;
};

export function formatIndianRupeePrice(amount: any): string {
  if (
    amount === undefined ||
    amount === null ||
    amount === 0 ||
    Number.isNaN(amount)
  ) {
    return "Refer the document";
  }

  // Remove commas from the input string and convert to a number
  const numAmount = Number(String(amount).replace(/,/g, ""));
  if (Number.isNaN(numAmount)) {
    return "Refer the document";
  }

  // Helper to format the number as per Indian units
  const formatWithUnits = (value: number): string => {
    if (value >= 1e7) {
      // 1 Crore and above
      const crore = value / 1e7;
      return `${crore.toFixed(2).replace(/\.00$/, "")} Crore`;
    } else if (value >= 1e5) {
      // 1 Lakh and above
      const lakh = value / 1e5;
      return `${lakh.toFixed(2).replace(/\.00$/, "")} Lakh`;
    }
    return value.toLocaleString("en-IN"); // Below 1 Lakh, use the standard comma format
  };

  return `₹${formatWithUnits(numAmount)}`;
}

export const columns: ColumnDef<Tender>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="rounded"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        title="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="rounded"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        title="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorFn: (row) =>
      `${row.department} - ${row.tenderName} - ${row.classification}`, // Combine two fields
    header: "Tender Information",
    cell: ({ row }) => {
      const department = row.original.department; // Access the original row's department
      const tenderName = row.original.tenderName; // Access the original row's tenderName
      const classification = row.original.classification; // Access classification

      return (
        <div className="flex items-center min-w-60 gap-3">
          <div className="flex flex-col">
            {/* Display department name */}
            {/* <span className="font-bold text-gray-900" title="Department">
              {department}
            </span> */}

            {/* Display tender title */}
            <span
              className="text-xs line-clamp-3 font-normal text-gray-500"
              title="Tender Title"
            >
              {tenderName}
            </span>
          </div>

          {/* Display classification */}
          <span
            className="bg-[#ECFDF3] text-[#027A48] gap-1 border rounded-full flex items-center w-max px-2 text-[9px] font-bold"
            title="Classification"
          >
            <div className="bg-green-500 rounded-full w-1 h-1" />
            {classification}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "epublishedDate",
    header: ({ column }) => (
      <Button
        className="text-xs text-gray-500"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        title="Sort by Published Date"
      >
        Published Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-xs text-center w-32" title="Published Date">
        {formatDate(row.getValue("epublishedDate"))}
      </div>
    ),
  },
  {
    accessorKey: "bidSubmissionDate",
    header: ({ column }) => (
      <Button
        className="text-xs text-gray-500"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        title="Sort by Bid Submission Date"
      >
        Bid Submission Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-xs text-center w-32" title="Bid Submission Date">
        {formatDate(row.getValue("bidSubmissionDate"))}
      </div>
    ),
  },
  {
    accessorKey: "bidOpeningDate",
    header: ({ column }) => (
      <Button
        className="text-xs text-gray-500"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        title="Sort by Bid Opening Date"
      >
        Bid Opening Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-xs text-center w-32" title="Bid Opening Date">
        {formatDate(row.getValue("bidOpeningDate"))}
      </div>
    ),
  },
  {
    accessorKey: "refNo",
    header: ({ column }) => (
      <Button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-xs text-gray-500"
        variant="ghost"
        title="Reference No"
      >
        Reference No
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-xs line-clamp-2 text-center" title="Reference No">
        {row.getValue("refNo")}
      </div>
    ),
  },
  {
    accessorKey: "tenderValue",
    header: ({ column }) => (
      <Button
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="text-xs text-center text-gray-500"
        variant="ghost"
        title="Tender Value (₹)"
      >
        Tender Value (₹)
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div title="Tender Value (₹)">
        {/* {row.getValue("tenderValue")} */}
        {formatIndianRupeePrice(row.getValue("tenderValue"))}
      </div>
    ),
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="rounded mr-4"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        title="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="rounded mr-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        title="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
const fetchTenders = async (queryParams: URLSearchParams): Promise<any> => {
  const response = await fetch(
    `https://tender-online.vercel.app/api/tender/all?${queryParams.toString()}`
  );
  if (!response.ok) {
    toast.error("Failed to fetch tenders");
  }
  return response.json();
};

function addSIfEndsWithS(word: string): string {
  if (word.endsWith("s")) {
    return word;
  } else {
    return word + "s";
  }
}

export function DataTableTender({ setSearch, search }: any) {
  const [foryou, setForYou] = React.useState<any | null>(null);
  const [searchList, setSearchList] = React.useState<string[]>([]);

  React.useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const foryouValue = params.get("foryou");
      setForYou(foryouValue);
      console.log(foryouValue, "foryou");
    }
  }, []);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const TenderValue = [
    { value: "1", label: "Less than ₹10L", minValue: 0, maxValue: 1000000 },
    {
      value: "2",
      label: "₹10L - ₹1Cr",
      minValue: 1000000,
      maxValue: 10000000,
    },
    {
      value: "3",
      label: "₹1Cr - ₹100Cr",
      minValue: 10000000,
      maxValue: 1000000000,
    },
    { value: "4", label: "More than ₹100Cr", minValue: 1000000000 },
  ];

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  console.log(rowSelection, "rowSelection");
  const isAnyRowSelected = Object.values(rowSelection).some(
    (selected) => selected
  );
  const [district, setDistrict] = React.useState<string>("");
  const [tenderValue, setTenderValue] = React.useState<string>("");
  const [department, setDepartment] = React.useState<string>("");
  const [selectedRowData, setSelectedRowData] = React.useState<Tender | null>(
    null
  );
  const [industry, setIndustry] = React.useState<any>("");
  const [subIndustry, setSubIndustry] = React.useState<any>("");
  const [classification, setClassification] = React.useState<any>("");
  const [selectedDistricts, setSelectedDistricts] = React.useState<any>([]);
  const [selectedDepartments, setSelectedDepartments] = React.useState<any>([]);
  const [selectedStatus, setSelectedStatus] = React.useState<any>([]);
  const [selectedTenderValues, setSelectedTenderValues] = React.useState<any>(
    []
  );
  const [filterIndustry, setFilterIndustry] = React.useState<any>([]);
  const [filterSubIndustry, setFilterSubIndustry] = React.useState<any>([]);

  const [status, setStatus] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<any | null>(null);

  const [dateRange, setDateRange] = React.useState<DateRange | null>(null);

  const {
    data: tenders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tenders"],
    queryFn: async () => {
      const queryParams = new URLSearchParams();

      // Helper to append multi-select values dynamically
      const appendMultiSelect = (key: string, values: any[]) => {
        if (values.length) {
          const isObjectWithValue =
            values[0] && typeof values[0] === "object" && "value" in values[0];

          const valueString = isObjectWithValue
            ? values.map((item) => item.value).join(",")
            : values.join(",");

          queryParams.append(key, valueString);
        }
      };

      appendMultiSelect("district", selectedDistricts);
      appendMultiSelect("department", selectedDepartments);
      appendMultiSelect("tenderValue", selectedTenderValues);
      appendMultiSelect("status", selectedStatus);
      appendMultiSelect("industry", industry);
      appendMultiSelect("subIndustry", subIndustry);
      appendMultiSelect(
        "classification",
        classification ? [classification] : []
      );

      // Append global search
      if (searchList) {
        queryParams.append("search", searchList.join(","));
      }

      // Append date range filter
      if (dateRange && dateRange.startDate && dateRange.endDate) {
        queryParams.append("startDate", dateRange.startDate.toISOString());
        queryParams.append("endDate", dateRange.endDate.toISOString());
      }

      return fetchTenders(queryParams);
    },
  });
  const [user, setUser] = React.useState<any | null>(null);

  // Function to get the auth token from sessionStorage
  const getaccessToken = () => sessionStorage.getItem("accessToken");

  // Fetch user details dynamically
  const fetchUserDetails = async (
    url: string = "https://tender-online.vercel.app/api/auth/me"
  ): Promise<any | null> => {
    try {
      const token = getaccessToken();
      if (!token) throw new Error("No auth token found");

      const response = await axios.get<any>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data); // Store user details in state
      return response.data; // Return the fetched user data
    } catch (error) {
      console.error("Error fetching user details:", error);
      return null; // Return null if an error occurs
    }
  };

  const [selectedRow, setSelectedRow] = React.useState<any>([]);

  React.useEffect(() => {
    if (rowSelection) {
      const selectedRow = table?.getSelectedRowModel()?.rows;

      const ids = selectedRow.map((row: any) => row.original._id);
      setSelectedRow(ids);
    }
  }, [rowSelection]);
  const router = useRouter();
  const { length, setLength, refetch: refetchUserContext } = useUserContext();
  React.useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        if (foryou === "true" || foryou === true) {
          const userDetails = await fetchUserDetails(); // Await the user details
          console.log(userDetails, "userDetails");
          if (userDetails) {
            setIndustry(userDetails.industry || []); // Set industry and classification
            setClassification(userDetails.classification || []);
          }
          refetch(); // Call refetch after setting the state
          window.location.reload;
        }

        refetch(); // Call refetch after setting the state
      }, 2000);
    };

    fetchData(); // Call the inner async function
  }, [foryou, refetchUserContext, refetch]); // Add 'foryou' as a dependency to re-fetch if it changes
  console.log(classification, "classification");

  const data = tenders?.result;

  React.useEffect(() => {
    if (data) {
      // const currentUrl = new URL(window.location.href); // Get the current URL
      // const params = new URLSearchParams(currentUrl.search); // Get existing query params

      // // Update or add new query parameters
      // params.set("length", data.length);

      // // Preserve the current path and add the updated query string
      // router.replace(`${currentUrl.pathname}?${params.toString()}`, undefined);

      setLength(data.length);
    }
  }, [data, router]);

  React.useEffect(() => {
    refetch();
  }, [
    district,
    tenderValue,
    department,
    status,
    selectedDistricts,
    selectedDepartments,
    selectedTenderValues,
    selectedStatus,
    searchList,
    industry,
    subIndustry,
    classification,
    dateRange,
    user,
    refetchUserContext,
  ]);

  const table = useReactTable({
    data: data || [],
    columns: columns || [],
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

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

  const fetchIndustry = async () => {
    const response = await axios.get(
      "https://tender-online.vercel.app/api/tender/industries"
    );
    setFilterIndustry(response.data.industries);
    return response.data.industries;
  };

  const fetchSubIndustry = async () => {
    const response = await axios.get(
      "https://tender-online.vercel.app/api/tender/sub-industries"
    );
    setFilterSubIndustry(response.data.subIndustries);
    return response.data.subIndustries;
  };

  React.useEffect(() => {
    fetchIndustry();
    fetchSubIndustry();
  }, []);

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
    Industry: filterIndustry,
    SubIndustry: filterSubIndustry,
    Classification: [
      { value: "Goods", label: "Goods" },
      { value: "services", label: "Services" },
      { value: "works", label: "Works" },
    ],
  };

  const handleRowClick = (rowData: Tender) => {
    setSelectedRowData(rowData); // Set the clicked row data to state
  };

  const handleMultiSelectChange = (label: string, value: any) => {
    console.log(value, "selected");
    // if (foryou === "true" || foryou === true) {
    //   toast.error(
    //     "You can't change the filter , kindy to profle page and add your industry and classification Filter"
    //   );
    //   return;
    // }

    switch (label) {
      case "District":
        setSelectedDistricts(value);
        break;
      case "Department":
        setSelectedDepartments(value);
        break;
      case "Industry":
        setIndustry(value);
        break;
      case "SubIndustry":
        setSubIndustry(value);
        break;
      case "Classification":
        setClassification(value);
        break;
      case "Tender Value":
        setSelectedTenderValues(value);
        break;
      default:
        break;
    }
  };

  // Utility function to remove duplicate options
  const removeDuplicates = (options: { value: string; label: string }[]) => {
    const uniqueOptions = new Map();
    options.forEach((option) => {
      if (!uniqueOptions.has(option.value)) {
        uniqueOptions.set(option.value, option);
      }
    });
    return Array.from(uniqueOptions.values());
  };

  const renderMultiSelect = (label: string) => {
    // Map dropdown data to Mantine format and remove duplicates
    const options =
      dropdownData[label]?.map((option: any) => ({
        value: option.value, // Ensure that value is unique
        label: option.label, // Adjust according to your data structure
      })) || [];

    // Remove duplicate options based on 'value'
    const uniqueOptions = removeDuplicates(options);

    const getSelectedValues = (label: string) => {
      switch (label) {
        case "District":
          return Array.isArray(selectedDistricts) ? selectedDistricts : [];
        case "Department":
          return Array.isArray(selectedDepartments) ? selectedDepartments : [];
        case "Tender Value":
          return Array.isArray(selectedTenderValues)
            ? selectedTenderValues
            : [];
        case "Industry":
          return Array.isArray(industry) ? industry : [];
        case "SubIndustry":
          return Array.isArray(subIndustry) ? subIndustry : [];
        case "Classification":
          return Array.isArray(classification) ? classification : [];
        default:
          return [];
      }
    };

    return (
      <div className="w-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">{label}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 bg-white">
            <div className="grid gap-4">
              <MultiSelect
                label={label}
                placeholder={`Pick ${label}`}
                data={uniqueOptions} // Use the filtered unique options
                value={getSelectedValues(label)} // Ensure value is an array
                onChange={(selected) =>
                  handleMultiSelectChange(label, selected)
                }
                className={cn("basic-multi-select")}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  const handleToAddRequest = async (selectedRowData: any): Promise<void> => {
    console.log(selectedRowData, "selectedRowData");

    const url = "https://tender-online.vercel.app/api/tender/tender-mapping";

    try {
      // Create an array of promises for each tender ID
      const promises = selectedRow.map(async (tenderId: string) => {
        const data = { tenderId };

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to create tender mapping for tenderId: ${tenderId}`
          );
        }

        return response.json();
      });

      // Wait for all requests to complete
      const results = await Promise.all(promises);

      toast.success(
        "Tender documents request sent successfully. We will reach out to you soon."
      );
      console.log("Tender mappings created successfully:", results);
    } catch (error) {
      toast.error("Error sending tender mapping requests.");
      console.error("Error sending tender mapping:", error);
    }
  };

  const dropdownLabels = [
    "District",
    "Tender Value",
    // "Department",
    "Industry",
    // "SubIndustry",
    "Classification",
  ];
  const clearFilters = () => {
    if (foryou === "true" || foryou === true) {
      router.push("/tenders");
      window.location.reload();
    }
    setDistrict("");
    setTenderValue("");
    setDepartment("");
    setStatus("");
    setSearch("");
    setSelectedDistricts([]);
    setSelectedTenderValues([]);
    setSelectedDepartments([]);
    setSelectedStatus([]);
    setIndustry("");
    setSubIndustry("");
    setClassification("");
  };
  const removeDistrict = (districtToRemove: string, setState: any) => {
    setState((prev: any) =>
      prev.filter((value: any) => value !== districtToRemove)
    );
  };

  const removeClassificatin = (removedata: string, setState: any) => {
    setState((prev: any) => prev.filter((value: any) => value !== removedata));
  };

  if (!tenders) {
    return <Loading />;
  }

  return (
    <div className="w-full border rounded-xl">
      <div className="flex items-center justify-between px-2 py-2">
        <SearchTab
          refetch={refetch}
          setSearchList={setSearchList}
          searchList={searchList}
          search={search}
          setSearch={setSearch}
        />
        <div className="flex items-center gap-2">
          {dropdownLabels.map((label) => renderMultiSelect(label))}
          <div className="">
            <DatePickerWithRange
              setDateRange={setDateRange}
              dateRange={dateRange}
            />
          </div>
          <div className="w-full">
            {isAnyRowSelected && (
              <button
                onClick={() => handleToAddRequest(selectedRowData)}
                className="bg-[#1C1A1A] text-nowrap px-4 w-full py-2.5 rounded-md text-white text-xs"
              >
                Request For Documents
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center  px-4">
        <div className="text-black flex flex-wrap gap-1 items-center">
          {/* Conditional rendering of the Reset All button */}
          {(selectedDistricts.length > 0 ||
            selectedTenderValues.length > 0 ||
            dateRange ||
            industry.length > 0 ||
            classification) && (
            <button
              onClick={clearFilters}
              className="px-4 rounded-md mr-3 border py-3 text-xs"
            >
              Reset All
            </button>
          )}
          {selectedDistricts?.map((district: string) => (
            <div
              key={district}
              className="mr-2 capitalize flex flex-col items-start px-3 pr-6 py-1 border text-xs rounded-md relative"
            >
              {district}
              <span className="text-[8px] font-light">district</span>
              <button
                onClick={() => removeDistrict(district, setSelectedDistricts)}
                className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${district}`}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {/* // add  date filter also  */}
          {dateRange && (
            <div className="mr-2 capitalize flex flex-col items-start px-3 pr-6 py-1 border text-xs rounded-md relative">
              {`${dateRange?.startDate?.toLocaleDateString() ?? ""} - ${
                dateRange?.endDate?.toLocaleDateString() ?? ""
              }`}
              <span className="text-[8px] font-light">date range</span>
              <button
                onClick={() => setDateRange(null)}
                className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${dateRange}`}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {/* {selectedTenderValues?.map((value: string) => (
            <div
              key={value}
              className="mr-2 flex flex-col items-start px-3 pr-4 py-1 border text-xs rounded-xl relative"
            >
              {value}
              <span className="text-[8px] font-light">tender value</span>
              <button
                
                onClick={() => removeDistrict(value, setSelectedTenderValues)}
                className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                aria-label={`Remove ${value}`}
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))} */}

          {selectedTenderValues?.map((value: string) => {
            const tender = TenderValue.find((item) => item.value === value);
            return (
              tender && (
                <div
                  key={value}
                  className="mr-2  capitalize flex flex-col items-start px-3 pr-6 py-1 border text-xs rounded-md relative"
                >
                  {tender.label}
                  <span className="text-[8px] font-light">tender value</span>
                  <button
                    onClick={() =>
                      removeDistrict(value, setSelectedTenderValues)
                    }
                    className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                    aria-label={`Remove ${tender.label}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )
            );
          })}

          {industry &&
            industry?.map((industry: string) => (
              <div
                key={industry}
                className="mr-2 capitalize flex flex-col items-start px-3 pr-6 py-1  border text-xs rounded-md relative"
              >
                {industry}
                <span className="text-[8px] font-light">industry</span>
                <button
                  onClick={() => removeDistrict(industry, setIndustry)}
                  className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                  aria-label={`Remove ${industry}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

          {classification &&
            classification?.map((classification: string) => (
              <div
                className="mr-2 capitalize flex flex-col items-start px-3 pr-6 py-1  border text-xs rounded-md relative"
                key={classification}
              >
                {addSIfEndsWithS(classification)}
                <span className="text-[8px] font-light">classification</span>
                <button
                  onClick={() =>
                    removeDistrict(classification, setClassification)
                  }
                  className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700"
                  aria-label={`Remove ${classification}`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="">
        <ScrollArea className="">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table?.getRowModel().rows?.length ? (
                table?.getRowModel().rows.map((row) => {
                  const bidSubmissionDate = new Date(
                    row.original.bidSubmissionDate
                  ); // Assuming bidSubmissionDate exists in row.original
                  const isPastDate = false;

                  return (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className={
                        isPastDate ? "bg-gray-100 cursor-not-allowed" : ""
                      }
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          className={`cursor-pointer ${
                            isPastDate && "opacity-50"
                          }`} // Make past rows appear dimmer
                          onClick={() => {
                            // Skip interaction for past date rows
                            if (
                              !isPastDate &&
                              cell.column.columnDef.id !== "select"
                            ) {
                              handleRowClick(row.original);
                            }
                          }}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ScrollArea>
        <TenderDetailsDialog
          selectedRowData={selectedRowData}
          setSelectedRowData={setSelectedRowData}
        />
      </div>
      <div className="flex px-4 items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getRowModel().rows.length} row(s) selected.
        </div>
        {/* show pagination Number and find number of page and show here   */}

        <div className="">
          <p>
            Page{" "}
            <span className="font-bold">
              {table.getState().pagination.pageIndex + 1}
            </span>{" "}
            of <span className="font-bold">{table.getPageCount()}</span>
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
