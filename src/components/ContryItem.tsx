import { Country } from "../context/CountryContent";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
const CountryItem = ({country,setSelectedCountry}:{country:Country,setSelectedCountry: React.Dispatch<React.SetStateAction<Country |null>>}) => {
    const { isDark } = useTheme();
    return (
        <article
            onClick={() => setSelectedCountry(country)}
            className={cn(
                "rounded bg-white shadow-md cursor-pointer h-full w-full",
                isDark && "bg-dark-blue my-3 "
            )}>
            <div className=" h-[150px] sm:h-[200px]">
                <img className="rounded  h-full w-full" src={country.flags.png} loading="lazy" />
            </div>
            <div className="px-5">
                <h3
                    className={cn(
                        "font-bold text-lg my-4 text-dark-blue-light",
                        isDark && "text-white"
                    )}>
                    {country.translations.fra.official}
                </h3>
                <p
                    className={cn(
                        "text-dark-bg font-thin",
                        isDark && "text-white"
                    )}>
                    <span
                        className={cn(
                            "text-dark-blue-light font-semibold",
                            isDark && "text-white"
                        )}>
                        Population:
                    </span>
                    {country.population}
                </p>
                <p
                    className={cn(
                        "text-dark-bg font-thin",
                        isDark && "text-white"
                    )}>
                    <span
                        className={cn(
                            "text-dark-blue-light font-semibold",
                            isDark && "text-white"
                        )}>
                        Region:
                    </span>
                    {country.region}
                </p>
                <p
                    className={cn(
                        "text-dark-bg font-thin",
                        isDark && "text-white"
                    )}>
                    <span
                        className={cn(
                            "text-dark-blue-light font-semibold",
                            isDark && "text-white"
                        )}>
                        Capital:
                    </span>
                    {country.capital}
                </p>
            </div>
        </article>
    );
};

export default CountryItem;
