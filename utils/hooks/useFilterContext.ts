import { useContext } from "react";
import { FilterContext } from "@/utils/context/FilterContext";


export const useFilterContext = () => {
    
    const context = useContext(FilterContext);
    
    if (!context) {
        throw new Error("useFilterContext must be used within a FilterContextProvider");
    }

    return context
}