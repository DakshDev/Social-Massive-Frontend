import { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function SelectOptionUI({
  placeholder,
  options,
  name,
  setChangedValue,
  placeholderWaning,
}: {
  placeholder: string;
  options: string[] | number[];
  name: string;
  setChangedValue?: Dispatch<SetStateAction<string | null>>;
  placeholderWaning?: string | boolean | null;
}) {
  return (
    <Select
      onValueChange={(e) => {
        if (setChangedValue) {
          setChangedValue(e);
        }
      }}
      name={name}
    >
      <SelectTrigger className={`w-full ${placeholderWaning == false && "data-[placeholder]:text-red-400"}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.length != 0 &&
            options.map((each) => (
              <SelectItem
                key={each}
                value={each.toString()}
                className='capitalize'
              >
                {each}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
