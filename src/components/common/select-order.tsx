import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function SelectOrder({ onChange }: { onChange?: (event: any) => void }) {
  const [order, setOrder] = useState("asc");

  const handleChange = (value: string) => {
    setOrder(value);
    const event = { target: { value } };
    onChange?.(event);
  };

  return (
    <Select value={order} onValueChange={handleChange}>
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
