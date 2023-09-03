//content.tsx
import { useEffect, useState } from "react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import { useFilter } from "../hooks/useFilter";
import CountriesList from "./ContriesList";
import { Country, useCountries } from "../context/CountryContent";
import CountryDetails from "./CountryDetails";
import Squelton from "./Squelton";
import Squeletons from "./Squeletons";

const Content = () => {
    const { isDark } = useTheme();
    const { regions, handleClick } = useFilter();
    const { countries,isLoading} = useCountries();
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [selectedCountry, setSelectedCountry] = useState<Country|null>(null);

    useEffect(() => {
        setFilteredCountries(countries);
    }, [countries]);

    const handleFilter = () => {
        if (regions.length === 0) {
            setFilteredCountries(countries);
        } else {
            let filteredCountriesN = filteredCountries?.filter(
                (country: Country) => regions.filter((r) => r.selected)[0].name == country.region
                // regions.includes(country.region)
                );
                setFilteredCountries(filteredCountriesN)

        }
    };

    useEffect(() => {
        handleFilter();
    }, [regions]);

    const handleSearch = (query: string) => {
        const result = countries?.filter((country: Country) => {
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
            className={cn('content',
                "bg-light-gray px-3 min-h-screen",
                isDark && "bg-dark-bg"
            )}>
            {selectedCountry == null ? (
                <section className={cn("py-5 flex flex-col gap-5","sm:flex-row justify-between mx-4")}>
                    <SearchBar setSearch={setSearch} />
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
                        <div className="bg-red-500 text-white p-8 rounded-lg  border border-red-800">desolé rien ne correspond à vos recherches</div>
                    )
                ) : (<CountryDetails country={selectedCountry} setSelectedCountry={setSelectedCountry}/>
                )
            ) : <Squeletons/>}
        </main>
    );
};

export default Content;
