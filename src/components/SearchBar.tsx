import React from "react";
import Search from "../icons/Search";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const SearchBar = ({ setSearch }: { setSearch: (query: string) => void }) => {
    const { isDark } = useTheme();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div
            className={cn(
                "flex items-center gap-5  py-3 px-5 rounded shadow-sm ",
                "text-dark-bg bg-white ",
                "text-sm",
                isDark && "text-light-gray bg-dark-blue"
            )}
        >
            <Search
                className={cn(" h-5 w-5 text-dark-blue-light", isDark && "text-white")}
            />
            <input
                onChange={handleSearchChange}
                className={cn("outline-none focus", isDark && "bg-dark-blue text-light-gray")}
                type="text"
                placeholder="Rechercher un pays ..."
            />
        </div>
    );
};

export default SearchBar;
