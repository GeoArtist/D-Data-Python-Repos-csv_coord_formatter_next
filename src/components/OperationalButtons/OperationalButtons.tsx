import { useDashboardContext } from "@/contexts/DashboardContext";
import { Button } from "@/components/ui/button";
import { separatorMap } from "@/constants/constants";

export function OperationalButtons() {

    const {
        decimalPlacesXY,
        decimalPlacesZ,
        separator,
        points,
        setPoints,
      } = useDashboardContext();
    
      
    const swapCoordinates = () => {
        setPoints(points.map(({ Nr, X, Y, Z }) => ({ Nr, X: Y, Y: X, Z })));
    };

    const downloadCsv = () => {
        const sep = separatorMap.get(separator)
        const csvContent = points
        .map(
            ({ Nr, X, Y, Z }) =>
            `${Nr}${sep}${X.toFixed(decimalPlacesXY)}${sep}${Y.toFixed(
                decimalPlacesXY
            )}${sep}${Z.toFixed(decimalPlacesZ)}`
        )
        .join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "transformed_coordinates.csv";
        link.click();
    };

    return(
         <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] max-w-[800px] mx-auto">
        <Button
          variant="outline"
          className="p-2 space-y-4 w-[200px] mx-auto bg-grey hover:bg-hover cursor-pointer border-theme2 border-[2px]"
          onClick={swapCoordinates}
        >
          Swap X and Y
        </Button>
        <Button
          variant="outline"
          className="p-2 space-y-4 w-[200px] mx-auto bg-grey hover:bg-hover cursor-pointer border-theme2 border-[2px]"
          onClick={downloadCsv}
        >
          Download CSV
        </Button>
      </div>
    )
}