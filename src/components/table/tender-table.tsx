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
import Select from "react-select";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import Loading from "../ui/loading";
import { ScrollArea } from "../ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import TenderDetailsDialog from "../shared/TenderDetailsDialog";
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

  return `${day}/${month}/${year}`;
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
  active: boolean;
};

export function formatIndianRupeePrice(amount: number): string {
  if (amount === undefined) {
    return "refer document";
  }

  // Convert the number to a string
  let amountStr = amount.toString();

  // Split the string into integer and decimal parts (if any)
  let [integerPart, decimalPart] = amountStr.split(".");

  // Regular expression to format the first part with Indian numbering system
  let lastThreeDigits = integerPart.slice(-3); // Extract last three digits
  let otherDigits = integerPart.slice(0, -3); // Extract the rest

  // Format the rest of the digits with commas every two digits
  if (otherDigits !== "") {
    otherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  }

  // Combine both parts
  let formattedPrice = otherDigits + (otherDigits ? "," : "") + lastThreeDigits;

  // Add the decimal part if it exists
  if (decimalPart) {
    formattedPrice += "." + decimalPart;
  }

  // Add the Rupee symbol at the beginning
  return `₹${formattedPrice}`;
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
    accessorKey: "tenderName",
    header: ({ column }) => (
      <Button
        className="text-xs text-gray-500"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        title="Sort by Tender Title"
      >
        Tender Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div
        title={row.getValue("tenderName")}
        className="flex items-center min-w-60 gap-3"
      >
        <div className="flex flex-col">
          <span className="font-bold text-gray-900" title="Department">
            {row.getValue("department")}
          </span>
          <span
            className="text-xs line-clamp-3 font-normal text-gray-500"
            title="Tender Title"
          >
            {row.getValue("tenderName")}
          </span>
        </div>
        <span
          className="bg-[#ECFDF3] text-[#027A48] gap-1 border rounded-full flex items-center w-max px-2 text-[9px] font-bold"
          title="Status: Active"
        >
          <div className="bg-green-500 rounded-full w-1 h-1" />
          active
        </span>
      </div>
    ),
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
        className="text-xs text-center text-gray-500"
        variant="ghost"
        title="Tender Value (₹)"
      >
        Tender Value (₹)
      </Button>
    ),
    cell: ({ row }) => (
      <div title="Tender Value (₹)">
        {formatIndianRupeePrice(row.getValue("tenderValue"))}
      </div>
    ),
  },
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

export function DataTableTender({ setSearch, search }: any) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [isfilterOpen, setIsFilterOpen] = React.useState(true);

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
  const [selectedDistricts, setSelectedDistricts] = React.useState<any>([]);
  const [selectedDepartments, setSelectedDepartments] = React.useState<any>([]);
  const [selectedStatus, setSelectedStatus] = React.useState<any>([]);
  const [selectedTenderValues, setSelectedTenderValues] = React.useState<any>(
    []
  );

  const [status, setStatus] = React.useState<string>("");
  const {
    data: tenders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "tenders",
      selectedDistricts,
      selectedDepartments,
      selectedStatus,
      selectedTenderValues,
      search,
    ],
    queryFn: async () => {
      const queryParams = new URLSearchParams();

      if (selectedDistricts.length) {
        queryParams.append(
          "district",
          selectedDistricts.map((d: any) => d.value).join(",")
        );
      }
      if (selectedTenderValues.length) {
        queryParams.append(
          "tenderValue",
          selectedTenderValues.map((v: any) => v.value).join(",")
        );
      }
      if (selectedDepartments.length) {
        queryParams.append(
          "department",
          selectedDepartments.map((d: any) => d.value).join(",")
        );
      }
      if (selectedStatus.length) {
        queryParams.append(
          "status",
          selectedStatus.map((s: any) => s.value).join(",")
        );
      }
      if (search) {
        queryParams.append("search", search);
      }

      const response = await fetch(
        `https://tender-online-h4lh.vercel.app/api/tender/all?${queryParams.toString()}`
      );
      setIsFilterOpen(false);
      return response.json();
    },
  });
  const data = tenders?.result;

  React.useEffect(() => {
    refetch();
  }, [district, tenderValue, department, status, search]);

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

  if (isLoading) {
    return <Loading />;
  }

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

  const handleRowClick = (rowData: Tender) => {
    setSelectedRowData(rowData); // Set the clicked row data to state
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
  const dropdownLabels = ["District", "Tender Value", "Department", "Status"];
  const clearFilters = () => {
    setDistrict("");
    setTenderValue("");
    setDepartment("");
    setStatus("");
    setSearch("");
  };

  return (
    <div className="w-full border rounded-xl">
      <div className="flex items-center justify-between px-2 py-2">
        <Input
          placeholder="Search tenders..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="max-w-sm"
        />
        <div className="flex items-center gap-2">
          {dropdownLabels.map((label) => renderMultiSelect(label))}
          {(district || tenderValue || department || status) && (
            <button
              onClick={clearFilters}
              className="bg-[#1C1A1A] px-4 py-2.5 rounded-md text-white text-xs"
            >
              Clear
            </button>
          )}

          <div className="mx-2">
            {isAnyRowSelected && (
              <button className="bg-[#1C1A1A] px-4 py-2.5 rounded-md text-white text-xs">
                Request For Documents
              </button>
            )}
          </div>
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
                table?.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        className="cursor-pointer"
                        onClick={() => {
                          // skip
                          if (cell.column.columnDef.id !== "select") {
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
                ))
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
