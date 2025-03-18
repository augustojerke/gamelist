import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "@/app/data/genres";
import { Loader2 } from "lucide-react";

interface Genre {
  checksum: string;
  name: string;
}

interface MultiSelectGenreProps {
  onChange?: (selected: string[]) => void;
  value?: string[];
}

export function MultiSelectGenre({
  onChange,
  value = [],
}: MultiSelectGenreProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  const { data: genres, isLoading } = useQuery<{ data: Genre[] }>({
    queryFn: () => getGenres(),
    queryKey: ["get-genres"],
  });

  const handleToggle = (genreId: string) => {
    const newSelected = selectedValues.includes(genreId)
      ? selectedValues.filter((id) => id !== genreId)
      : [...selectedValues, genreId];
    setSelectedValues(newSelected);
    onChange?.(newSelected);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[180px] justify-between text-slate-400"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin mx-auto" size={20} />
          ) : selectedValues.length > 0 ? (
            genres?.data
              .filter((g) => selectedValues.includes(g.checksum))
              .map((g) => g.name)
              .join(", ")
          ) : (
            "Select Genres..."
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-2 max-h-[200px] overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center p-4">
            <Loader2 className="animate-spin" size={24} />
          </div>
        ) : (
          genres?.data?.map((g) => (
            <div key={g.checksum} className="flex items-center gap-2 p-1">
              <Checkbox
                checked={selectedValues.includes(g.checksum)}
                onCheckedChange={() => handleToggle(g.checksum)}
              />
              <p className="text-sm">{g.name}</p>
            </div>
          ))
        )}
      </PopoverContent>
    </Popover>
  );
}
