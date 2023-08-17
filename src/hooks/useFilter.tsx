import { useState } from "react";

export type Region = {
    name: string;
    selected: boolean;
};
let regions: Region[] = [
    { name: "Afrique", selected: false },
    { name: "Amerique", selected: false },
    { name: "Asie", selected: false },
    { name: "Europe", selected: false },
    { name: "Oceanie", selected: false },
];
export const useFilter = () => {
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
    const handleClick = (region: Region) => {
        setSelectedRegion((curr) => {
            if (!!curr && curr.name == region.name) {
                console.log("le meme donc on desactive");
                curr = { ...curr, selected: false };
                regions = regions.map((v) => (curr?.name == v.name ? curr : v));
                // console.log(regions);
                console.log("meme donc on return null");
                return null;
            } else if (!!!curr) {
                region = { ...region, selected: true };
                regions = regions.map((v) =>
                    region?.name == v.name ? region : v
                );
            } else if (!!curr && !(curr.name == region.name)) {
                curr = { ...curr, selected: false };
                region = { ...region, selected: true };
                regions = regions.map((v) => {
                    if (curr?.name == v.name) {
                        return curr;
                    } else if (region?.name == v.name) {
                        return region;
                    }
                    return v;
                });
            }

            return region;
        });

    };

    return {regions,handleClick}
};
