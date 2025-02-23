import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDashboardContext } from "@/contexts/DashboardContext";

export function CoordinateTable() {
  const SLICER = 5;
  const {
    decimalPlacesXY,
    decimalPlacesZ,
    points,

  } = useDashboardContext();

  return (
      <Table className={"max-w-[600px] mx-auto mt-[25px] mb-[35px]"}>
        <TableCaption>{`List of first ${SLICER} points`}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nr</TableHead>
            <TableHead>X</TableHead>
            <TableHead>Y</TableHead>
            <TableHead>Z</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {points.slice(0, SLICER).map((point) => (
            <TableRow key={point.Nr}>
              <TableCell className="font-medium">{point.Nr}</TableCell>
              <TableCell>{point.X.toFixed(decimalPlacesXY)}</TableCell>
              <TableCell>{point.Y.toFixed(decimalPlacesXY)}</TableCell>
              <TableCell>{point.Z.toFixed(decimalPlacesZ)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

  );
}
