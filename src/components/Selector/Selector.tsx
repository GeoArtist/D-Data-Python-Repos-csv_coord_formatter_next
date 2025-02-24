import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";

type SelectorProps={
  placeholder: string;
  options: string[];
  value: string;
  onValueChange: (value:string) => void;
}

export function Selector({placeholder,value,options, onValueChange}:SelectorProps) {

  return (
    <>
        <div className={'max-w-[200px] min-w-[100px] grid mx-auto'}>
          <Label className={'mx-auto pb-2'}>{placeholder}</Label>
          <Select value={value} onValueChange={onValueChange}  >
            <SelectTrigger className="bg-grey hover:bg-hover cursor-pointer border-theme2 border-[2px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent >
              {options.map((val) => (
                <SelectItem key={val} value={val}>
                  {val}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
    </>
  );
}
