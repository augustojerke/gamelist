import { useState } from "react";
import { ListFilter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { SelectOrder } from "./select-order";
import { Label } from "../ui/label";

export function GameTableFilters({
  onChange,
}: {
  onChange?: (filters: Record<string, any>) => void;
}) {
  const [filters, setFilters] = useState({
    order: "asc",
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onChange?.(newFilters);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-9">
          <ListFilter />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filters</h4>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="order">Order:</Label>
            <SelectOrder
              onChange={(event) =>
                handleFilterChange("order", event.target.value)
              }
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
