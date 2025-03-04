import { useDashboardContext } from "@/contexts/DashboardContext";
import { Point } from "@/types/point";
import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { separatorMap } from "@/constants/constants";

export function InputCsv() {
  const { separator, setPoints, setFilename } = useDashboardContext();



  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        try {
          validateCsv(e.target.result);
        } catch (error) {
          if (error instanceof Error) {
            alert(error.message);
          }
          return;
        }
        processCsv(e.target.result);
      }
      // Set filename
      setFilename(file.name)
    };
    reader.readAsText(file);
  };

  const validateCsv = (data: string) => {
    const lines = data.split("\n");
    if (lines.length < 1) {
      throw new Error("Niepoprawna długość pliku");
    }

    if (lines[0].split(separatorMap.get(separator)!).length < 4) {
      throw new Error("Niepoprawny separator lub struktura pliku");
    }
  };

  const processCsv = (data: string) => {

    let lineSeparator = separator;
    if (separator === "space") {
      lineSeparator = " ";
    } else {
      lineSeparator = separator;
    }

    const lines = data.split("\n");

    const parsedPoints: Point[] = lines.map((line) => {
      const [Nr, X, Y, Z] = line.split(lineSeparator).map((v) => parseFloat(v));
      return { Nr, X, Y, Z };
    });
    const filteredPoints = parsedPoints.filter((point) => !isNaN(point.Nr));

    setPoints(filteredPoints);
  };

  return <Input type="file" accept=".csv, .txt" onChange={handleFileUpload} className='max-w-[300px] mx-auto mb-[25px] bg-grey hover:bg-hover cursor-pointer border-theme2 border-[2px]' />;
}
