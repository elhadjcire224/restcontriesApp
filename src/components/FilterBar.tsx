import { cn } from "../utils/cn";
import { useTheme } from "../context/useTheme";
import { Dropdown } from "../context/FilterContext";
import { Region } from "../hooks/useFilter";

export default function FilterBar({
    regions,
    handleClick,
}: {
    regions: Region[];
    handleClick: (region: Region) => void;
}) {
    const { isDark } = useTheme();

    return (
        <Dropdown onChange={handleClick} className="relative">
            <Dropdown.Button
                className={cn(
                    "flex justify-between w-[60%] rounded py-3 px-4 shadow-m items-center",
                    "bg-white ",
                    isDark && "bg-dark-bg text-light-gray"
                )}>
                Filtrer par region
            </Dropdown.Button>
            <Dropdown.List
                className={cn(
                    "list-none absolute w-[60%] bg-white mt-2 shadow-md rounded  py-3",
                    isDark && "text-light-gray bg-dark-bg"
                )}>
                {regions.map((value) => (
                    <Dropdown.Item
                        itemValue={value}
                        key={value.name}
                        className={cn(
                            "bg-white pt-1 px-3 cursor-pointer hover:bg-dark-blue-light",
                            isDark && "text-light-gray bg-dark-bg",
                            value.selected && "bg-red-500"
                        )}>
                        {value.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.List>
        </Dropdown>
    );
}
