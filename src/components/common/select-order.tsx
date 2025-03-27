import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowDown, ArrowUp } from "lucide-react";

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
      <SelectTrigger className="w-[180px] text-muted-foreground">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc">
            <div className="flex justify-start items-center gap-2 text-muted-foreground">
              <ArrowUp size={18} />
              Lower to Higher
            </div>
          </SelectItem>
          <SelectItem value="desc">
            <div className="flex justify-start items-center gap-2 text-muted-foreground">
              <ArrowDown size={18} />
              Higher to Lower
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
