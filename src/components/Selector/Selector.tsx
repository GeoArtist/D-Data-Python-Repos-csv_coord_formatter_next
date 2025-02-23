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
  onValueChange: (value: any) => void;
}

export function Selector({placeholder,value,options, onValueChange}:SelectorProps) {

  return (
    <>
        <div className={'max-w-[200px] grid'}>
          <Label className={'mx-auto pb-2'}>{placeholder}</Label>
          <Select value={value} onValueChange={onValueChange} >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
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
