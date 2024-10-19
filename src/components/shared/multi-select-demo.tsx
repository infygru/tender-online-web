import React, { useEffect, useRef } from "react";
import { DateRangePicker } from "@matharumanpreet00/react-daterange-picker";

// Type definition for the component
export const DatePickerWithRange: React.FC<any> = ({
  dateRange,
  setDateRange,
}: any) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const pickerRef = useRef<HTMLDivElement>(null); // Ref for the date picker container
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button

  // Handle click outside to close the date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) // Ensure the button is excluded
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  const calculateDays = () => {
    if (dateRange.startDate && dateRange.endDate) {
      const start = new Date(dateRange.startDate);
      const end = new Date(dateRange.endDate);

      // Calculate the difference in time (in milliseconds)
      const timeDiff = Math.abs(end.getTime() - start.getTime());

      // Convert time difference from milliseconds to days
      const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return diffDays;
    }
    return 0;
  };

  return (
    <div className="relative w-full">
      {/* Button to toggle the date picker */}
      <button
        ref={buttonRef} // Attach ref to the button
        className="px-3 text-sm py-2 w-max bg-blue-500 text-white rounded hover:bg-blue-600  transition"
        onClick={() => setOpen(!open)}
      >
        Bid - Submission Date
      </button>

      {/* Date Range Picker */}
      {open && (
        <div
          ref={pickerRef} // Attach ref to the date picker container
          className="absolute z-50 top-12 right-0 bg-white"
        >
          {dateRange && (
            <div className="absolute bottom-4 py-2 px-5 flex items-center justify-center left-24 text-center border rounded">
              <h3>
                No. of days selected:{" "}
                {dateRange?.startDate && dateRange?.endDate
                  ? calculateDays()
                  : 0}{" "}
                days
              </h3>
            </div>
          )}
          <DateRangePicker
            open={open}
            onChange={(range) => setDateRange(range)}
          />
        </div>
      )}
    </div>
  );
};
