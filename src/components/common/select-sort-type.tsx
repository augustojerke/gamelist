import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowUpAZ, Calendar, Star } from "lucide-react";

export function SelectSortType({
  onChange,
  value,
}: {
  onChange?: (event: any) => void;
  value: string;
}) {
  const [_, setOrder] = useState("total_rating");

  const handleChange = (value: string) => {
    setOrder(value);
    const event = { target: { value } };
    onChange?.(event);
  };

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-[220px] text-muted-foreground">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="total_rating">
            <div className="flex justify-start items-center gap-2 text-muted-foreground">
              <Star size={20}/>
              Rating
            </div>
          </SelectItem>
          <SelectItem value="name">
            <div className="flex justify-start items-center gap-2 text-muted-foreground">
              <ArrowUpAZ size={20}/>
              Name
            </div>
          </SelectItem>
          <SelectItem value="first_release_date">
            <div className="flex justify-start items-center gap-2 text-muted-foreground">
              <Calendar size={20}/>
              Year
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
