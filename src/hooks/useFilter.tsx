import { useState } from "react";

export type Region = {
    name: string;
    selected: boolean;
};

export const useFilter = () => {
    const [regions, setRegions] = useState<Region[]>([
        { name: "Africa", selected: false },
        { name: "America", selected: false },
        { name: "Asia", selected: false },
        { name: "Europe", selected: false },
        { name: "Oceania", selected: false },
    ]);

    const handleClick = (region: Region) => {
        const updatedRegions = regions.map((r) =>
            r.name === region.name ? { ...r, selected: !r.selected } : r
        );
        setRegions(updatedRegions);
    };

    return { regions, handleClick };
};
