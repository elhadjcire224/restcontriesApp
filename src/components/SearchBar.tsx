import Search from "../icons/Search";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const SearchBar = ({setSearch}:{setSearch:React.Dispatch<React.SetStateAction<string>>}) => {
    const { isDark } = useTheme();

    return (
        <div
            className={cn(
                "flex items-center gap-5  py-3 px-5 rounded shadow-sm ",
                "text-dark-bg bg-white ",
                "text-sm",
                isDark && "text-light-gray bg-dark-bg"
            )}>
            <Search className={cn(" h-5 w-5 text-dark-blue-light",isDark && "text-white")} />
            <input
                onChange={(e) => setSearch(e.target.value)}
                className={cn("outline-none focus",isDark && "bg-dark-bg text-light-gray")}
                type="text"
                placeholder="Rechercher un pays ..."
            />
        </div>
    );
};

export default SearchBar;
