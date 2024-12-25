import React from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { addDays, differenceInDays } from "date-fns";

export const DatePickerWithRange = ({ dateRange, setDateRange }: any) => {
  const [date, setDate] = React.useState(
    dateRange || {
      from: undefined,
      to: undefined,
    }
  );
  const [isOpen, setIsOpen] = React.useState(false);

  const calculateDays = () => {
    if (date.from && date.to) {
      return differenceInDays(date.to, date.from);
    }
    return 0;
  };

  return (
    <div className="relative w-full">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className={cn(
              "w-max justify-start text-left font-normal text-white",
              !date
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} -{" "}
                  {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              <span>Bid - Submission Date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Select Range</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              className="bg-white"
            />

            <div className="flex items-center justify-between">
              {(date?.from || date?.to) && (
                <div className="px-4 py-2 border rounded text-sm">
                  Days selected: {calculateDays()} days
                </div>
              )}

              <Button
                className="ml-auto"
                onClick={() => {
                  setDateRange(date);
                  setIsOpen(false);
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithRange;
