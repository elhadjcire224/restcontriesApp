import { Search } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const SearchBar = () => {
    const { isDark } = useTheme();

    return (
        <div
            className={cn(
                "flex items-center gap-5  py-3 px-5 rounded shadow-sm ",
                "text-dark-bg bg-white ",
                "text-sm",
                isDark && "text-light-gray bg-dark-bg"
            )}>
            <Search color={cn(isDark && "#fff", !isDark && "#858585")} />
            <input
                className={cn("outline-none focus",isDark && "bg-dark-bg text-light-gray")}
                type="text"
                placeholder="Rechercher un pays ..."
            />
        </div>
    );
};

export default SearchBar;
