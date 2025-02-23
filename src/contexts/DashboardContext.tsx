"use client";
import { Point } from "@/types/point";
import { createContext, useContext,useState } from "react";



interface DashboardContextType {
    decimalPlacesXY: number;
    setDecimalPlacesXY: React.Dispatch<React.SetStateAction<number>>;
    decimalPlacesZ: number;
    setDecimalPlacesZ: React.Dispatch<React.SetStateAction<number>>;
    separator: string;
    setSeparator: React.Dispatch<React.SetStateAction<string>>;
    points: Point[];
    setPoints: React.Dispatch<React.SetStateAction<Point[]>>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [decimalPlacesXY, setDecimalPlacesXY] = useState<number>(2);
    const [decimalPlacesZ, setDecimalPlacesZ] = useState<number>(1);
    const [separator, setSeparator] = useState<string>("space");
    const [points, setPoints] = useState<Point[]>([]);

    return (
        <DashboardContext.Provider
            value={{
                decimalPlacesXY,
                setDecimalPlacesXY,
                decimalPlacesZ,
                setDecimalPlacesZ,
                separator,
                setSeparator,
                points,
                setPoints,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export function useDashboardContext() {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error("useDashboardContext must be used within a DashboardProvider");
    }
    return context;
}