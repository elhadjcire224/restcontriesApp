import { Country } from "../context/CountryContent";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const CountryItem = ({ data }: { data: Country }) => {
    const { isDark } = useTheme();
    return (
        <article
            className={cn(
                "rounded bg-white shadow-md cursor-pointer h-full w-full",
                isDark && "bg-dark-blue my-3 "
            )}>
            <div className=" h-[150px]">
                <img className="rounded object-cover h-full w-full" src={data.flags.png} loading="lazy" />
            </div>
            <div className="px-5">
                <h3
                    className={cn(
                        "font-bold text-lg my-4 text-dark-blue-light",
                        isDark && "text-white"
                    )}>
                    {data.translations.fra.official}
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
                    {data.population}
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
                    {data.region}
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
                    {data.capital}
                </p>
            </div>
        </article>
    );
};

export default CountryItem;
