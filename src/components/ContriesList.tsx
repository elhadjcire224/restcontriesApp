import { useContext } from "react";
import { Country, useCountries } from "../context/CountryContent";
import CountryItem from "./ContryItem";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import { Region } from "../hooks/useFilter";

const CountriesList = ({countries}:{countries:Country[]|null}) => {
    const { isDark } = useTheme();
    console.log(countries)
    
    return (
        <section
            className={cn(
                "grid grid-cols-[250px] place-items-center  gap-5 ",
                "text-white mx-5 ",
                "text-sm",
                isDark && "text-white bg-dark-bg",
                'sm:grid-cols-4',
                "md:grid-cols-6"

            )}>
            {countries?.map((country) => (
                <CountryItem data={country} key={country.name.official} />
            ))}
        </section>
    );
};

export default CountriesList;
