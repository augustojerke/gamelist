import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "@/app/data/genres";

export function SelectGenre({
  onChange,
  value,
}: {
  onChange?: (event: any) => void;
  value: string;
}) {
  const [_, setOrder] = useState("desc");

  const handleChange = (value: string) => {
    setOrder(value);
    const event = { target: { value } };
    onChange?.(event);
  };

  const { data: genres } = useQuery({
    queryFn: () => getGenres(),
    queryKey: ["get-genres"],
  });

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {genres?.data.map((g) => (
            <SelectItem value={g.checksum} key={g.checksum}>
              {g.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
