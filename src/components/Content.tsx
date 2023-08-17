import { useState } from "react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { useFilter } from "../hooks/useFilter";


const Content = () => {
    const { isDark } = useTheme();
    const {regions,handleClick} = useFilter()
    const [search,setSearch] = useState<string>('')
    
    return (
        <main
            className={cn(
                "bg-light-gray px-3 h-screen",
                isDark && "bg-dark-blue-light"
            )}>
            <section className="py-5 flex flex-col gap-5">
                <SearchBar setSearch={setSearch}/>
                <FilterBar regions={regions} handleClick={handleClick} />
            </section>
            {search}
        </main>
    );
};

export default Content;
