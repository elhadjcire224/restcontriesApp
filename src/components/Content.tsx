//content.tsx
import { useEffect, useState } from "react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { useFilter } from "../hooks/useFilter";
import CountriesList from "./ContriesList";
import { Country, useCountries } from "../context/CountryContent";

const Content = () => {
    const { isDark } = useTheme();
    const { regions, handleClick } = useFilter();
    const { countries, isLoading } = useCountries();
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);
    // const [selectedRegions, setSelectedRegions] = useState([]);

    console.log(isLoading);

    const handleFilter = () => {
        if (regions.length === 0) {
            setFilteredCountries(countries);
        } else {
            let filteredCountriesN = filteredCountries?.filter(
                (country: Country) =>
                    regions.filter((r) => r.selected)[0].name == country.region
                // regions.includes(country.region)
            );
            setFilteredCountries(filteredCountriesN);
        }
    };

    useEffect(() => {
        handleFilter();
    }, [regions]);

    const handleSearch = (query: string) => {
        const filteredCountries = countries?.filter((country: Country) => {
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
        setFilteredCountries(filteredCountries);
    };

    useEffect(() => {
        handleSearch(search);
    }, [search]);

    return (
        <main
            className={cn(
                "bg-light-gray px-3 min-h-screen",
                isDark && "bg-dark-bg"
            )}>
            <section className="py-5 flex flex-col gap-5">
                <SearchBar setSearch={setSearch} />
                <FilterBar regions={regions} handleClick={handleClick} />
            </section>
            {filteredCountries?.length !== 0 ? (
                <CountriesList countries={filteredCountries} />
            ) : (
                "rien ne correspond a vos recherches"
            )}
        </main>
    );
};

export default Content;
