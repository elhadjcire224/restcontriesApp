import { Country } from "../context/CountryContent";
import { useTheme } from "../context/useTheme";
import ArrowLeft from "../icons/ArrowLeft";
import { cn } from "../utils/cn";
import BordersList from "./BordersList";
import Button from "./Button";

const CountryDetails = ({
    country,
    setSelectedCountry,
}: {
    country: Country;
    setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}) => {
    const currencyNames = country.currencies && Object.values(country.currencies).map(
        (currency) => currency.name
    );

    const { isDark } = useTheme();
    return (
        <article
            className={cn(
                "flex flex-col gap-16 p-5 ",
                isDark && "text-light-gray",
                "sm:px-20 "
            )}>
            <Button className="w-28 " setSelectedCountry={setSelectedCountry}>
                <ArrowLeft className="w-24 h-8" />
                Back
            </Button>
            <div className={cn("flex flex-col gap-10", "sm:flex-row")}>
                <div className=" sm:w-[50%]">
                    <img
                        className="w-full h-auto"
                        src={country.flags.png}
                        alt={country.name.common}
                    />
                </div>

                <div className={cn("flex flex-col gap-4", "justify-between")}>
                    <h1 className="text-xl capitalize font-bold sm:text-3xl">
                        {country.translations.fra.official}
                    </h1>
                    <div className="sm:flex justify-between">
                        <div >
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Nom Natif :
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country?.name?.nativeName?.eng?.official}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Population :
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country?.population}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Région :{" "}
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country.region}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Sous Région :{" "}
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country.subregion}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                capital :
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country.capital
                                        ? country.capital[0]
                                        : null}
                                </span>
                            </p>
                        </div>
                        <div className="">
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Top level domain :
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country.tld ? country.tld[0] : null}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Currencies:{" "}
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {currencyNames && currencyNames.join(", ")}
                                </span>
                            </p>
                            <p
                                className={cn(
                                    "text-dark-blue-light font-semibold",
                                    isDark && "text-white"
                                )}>
                                Lnaguages :{" "}
                                <span
                                    className={cn(
                                        "text-dark-bg font-thin",
                                        isDark && "text-white"
                                    )}>
                                    {country.languages && Object.values(country.languages)
                                        .map((language) => language)
                                        .join(", ")}
                                </span>
                            </p>
                        </div>
                    </div>
                    <BordersList
                        setSelectedCountry={setSelectedCountry}
                        borders={country.borders}
                    />
                </div>
            </div>
        </article>
    );
};

export default CountryDetails;
