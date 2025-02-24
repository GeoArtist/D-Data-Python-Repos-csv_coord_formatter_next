"use client";

import { Selector } from "@/components/Selector/Selector";
import { useDashboardContext } from "@/contexts/DashboardContext";
import { InputCsv } from "@/components/InputCsv/InputCsv";

import { CoordinateTable } from "@/components/CoordinateTable/CoordinateTable";
import { OperationalButtons } from "@/components/OperationalButtons/OperationalButtons";
import { Divider } from "@/components/Divider/Divider";

// const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Dashboard() {
  const {
    filename,
    decimalPlacesXY,
    setDecimalPlacesXY,
    decimalPlacesZ,
    setDecimalPlacesZ,
    separator,
    setSeparator,
    points,
  } = useDashboardContext();

  return (
    <div className="p-6 space-y-4 max-w-[1000px] mx-auto">

      <div className="grid gap-4 mb-[50px]"  >
        <h1 className="text-center">CSV Transformer</h1>
        <h2 className="text-center">[Nr X Y H] </h2>
        <InputCsv />
        <Selector
          placeholder="Separator"
          options={[",", ";", "space"]}
          value={separator}
          onValueChange={(value) => setSeparator(value)}
        />
      </div>
      <h1>{filename}</h1>
      <Divider />
      {points.length > 0 && (
        <div >
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] max-w-[600px] gap-4 mx-auto p-2 my-[20px]">

            <Selector
              placeholder="Decimal Places X/Y"
              options={["0", "1", "2", "3"]}
              value={decimalPlacesXY.toString()}
              onValueChange={(value) => setDecimalPlacesXY(parseInt(value))}
            />
            <Selector
              placeholder="Decimal Places Z"
              options={["0", "1", "2", "3"]}
              value={decimalPlacesZ.toString()}
              onValueChange={(value) => setDecimalPlacesZ(parseInt(value))}
            />
          </div>
          <CoordinateTable />
          <Divider />
          <OperationalButtons />
        </div>
      )}
    </div>
  );
}
