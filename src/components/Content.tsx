//content.tsx
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { useFilter } from "../hooks/useFilter";
import CountriesList from "./ContriesList";
import { Country, useCountries } from "../context/CountryContent";
import CountryDetails from "./CountryDetails";
import Squeletons from "./Squeletons";
import { ArrowUp } from "lucide-react";

function filter(countries: Country[], regionNames: string[]) {
    return countries?.filter((country) => regionNames.includes(country.region));
}

const Content = () => {
    const { isDark } = useTheme();
    const { regions, handleClick, regionNames } = useFilter();
    const { countries, isLoading } = useCountries();
    const [search, setSearch] = useState("");

    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(
        null
    );

    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    const handleFilter = () => {
        if (regionNames.length == 0) {
            setFilteredCountries(countries);
        } else {
            setFilteredCountries(filter(countries, regionNames));
        }
    };

    useEffect(() => {
        handleFilter();
    }, [regions]);

    const handleSearch = (query: string) => {
        const searchableCountries =
            regionNames.length == 0
                ? countries
                : filter(countries, regionNames);
        const result = searchableCountries?.filter((country: Country) => {
            const capital = country.capital ? country.capital[0] : "";
            return (
                country.translations.fra.common
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                country.translations.fra.official
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                capital?.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            );
        });
        setFilteredCountries(result);
    };

    useEffect(() => {
        handleSearch(search);
    }, [search]);

    return (
        <main
            
            
            className={cn(
                "content relative",
                "bg-light-gray px-3 min-h-screen",
                isDark && "bg-dark-bg"
            )}>
            {selectedCountry == null ? (
                <section
                    className={cn(
                        "py-5 flex flex-col gap-5",
                        "sm:flex-row justify-between mx-4"
                    )}>
                    <SearchBar search={search} setSearch={setSearch} />
                    <FilterBar regions={regions} handleClick={handleClick} />
                </section>
            ) : null}

            {!isLoading ? (
                selectedCountry == null ? (
                    filteredCountries?.length !== 0 ? (
                        <CountriesList
                            setSelectedCountry={setSelectedCountry}
                            countries={filteredCountries}
                        />
                    ) : (
                        <div className="bg-red-500 text-white p-8 rounded-lg  border border-red-800">
                            desolé rien ne correspond à vos recherches
                        </div>
                    )
                ) : (
                    <CountryDetails
                        country={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                    />
                )
            ) : (
                <Squeletons />
            )}
            {!isLoading && !selectedCountry && filteredCountries?.length !== 0 && (<button
                className={cn(
                    "p-2 flex rounded-full bg-dark-bg text-white  items-center justify-center fixed",
                    " bottom-8 right-8 transition",
                    isDark && "bg-white",


                )}
                onClick={() => scrollTo({top:0,behavior:"smooth"})}
                >
                {" "}
                <ArrowUp className={cn(isDark && "fill-white text-dark-bg")}/>
            </button>)}
            
        </main>
    );
};

export default Content;
