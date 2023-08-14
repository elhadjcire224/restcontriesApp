import clsx from "clsx";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import { useTheme } from "./context/useTheme";
import { cn } from "./utils/cn";

function App() {
    const { isDark } = useTheme();

    return (
        <>
            <Header />
            <main className={cn("bg-light-gray px-3 h-screen", isDark && "bg-dark-blue-light")}>
                <section className="py-5 flex flex-col gap-5">
                    <SearchBar />
                    <FilterBar />
                </section>
            </main>
        </>
    );
}

export default App;
