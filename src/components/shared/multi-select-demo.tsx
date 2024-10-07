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

  return (
    <div className="relative">
      {/* Button to toggle the date picker */}
      <button
        ref={buttonRef} // Attach ref to the button
        className="px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Date"}
      </button>

      {/* Date Range Picker */}
      {open && (
        <div
          ref={pickerRef} // Attach ref to the date picker container
          className="absolute z-50 top-12 right-0 bg-white"
        >
          <DateRangePicker
            open={open}
            onChange={(range) => setDateRange(range)}
          />
        </div>
      )}
    </div>
  );
};
