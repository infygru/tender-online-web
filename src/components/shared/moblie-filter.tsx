import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";

export function PopoverMobileFilter({ renderMultiSelect }: any) {
  const dropdownLabels = [
    "District",
    "Tender Value",
    "Industry",
    "Classification",
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Filter size={16} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white">
        <div className="grid gap-4">
          {dropdownLabels.map((label) => renderMultiSelect(label))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
