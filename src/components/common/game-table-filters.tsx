import { useState } from "react";
import { ArrowUpDown, ListFilter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { SelectOrder } from "./select-order";
import { Label } from "../ui/label";
import { GameTableFiltersInterface } from "@/types/game-table-filters";
import { MultiSelectGenre } from "./multi-select-genre";

export function GameTableFilters({
  onChange,
}: {
  onChange?: (filters: GameTableFiltersInterface) => void;
}) {
  const [filters, setFilters] = useState<GameTableFiltersInterface>({
    order: "desc",
    genres: [],
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
            <div className="flex justify-start items-center gap-2">
              <ArrowUpDown size={20} />
              <Label>Order:</Label>
            </div>
            <SelectOrder
              onChange={(event) =>
                handleFilterChange("order", event.target.value)
              }
              value={filters.order}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="flex justify-start items-center gap-2">
              <Label>Genres:</Label>
            </div>
            <MultiSelectGenre
              onChange={(selectedGenres) =>
                handleFilterChange("genres", selectedGenres)
              }
              value={filters.genres}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
