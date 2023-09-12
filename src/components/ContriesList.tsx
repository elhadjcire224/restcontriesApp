import { useContext } from "react";
import { Country, useCountries } from "../context/CountryContent";
import CountryItem from "./ContryItem";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const CountriesList = ({countries,setSelectedCountry}:{countries:Country[]|null,setSelectedCountry :React.Dispatch<React.SetStateAction<Country |null>>}) => {
    const { isDark } = useTheme();
    
    return (
        <section
            className={cn(
                "grid grid-cols-[repeat(auto-fit,minmax(250px,300px))] justify-center  gap-5 p-6 ",
                "text-white mx-5 ",
                "text-sm",
                isDark && "text-white bg-dark-bg",
                ' sm:gap-12 sm:text-md',
            

            )}>
            {countries?.map((country) => (
                <CountryItem setSelectedCountry={setSelectedCountry} country={country} key={country.name.official} />
            ))}
        </section>
    );
};

export default CountriesList;
