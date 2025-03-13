import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectOrder({
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

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="desc">Desc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
