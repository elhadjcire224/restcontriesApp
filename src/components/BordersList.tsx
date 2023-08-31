import { Country, useCountries } from "../context/CountryContent";
import Button from "./Button";

const BordersList = ({
    borders,
    setSelectedCountry
}: {
    borders: string[];
    setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
}) => {
    const { countries } = useCountries();
    const bordersInfos: Country[] | null = countries.filter(
        (country: Country) =>
            country.cca3 && borders ? borders.includes(country.cca3) : ""
    );
    return (
        <div className="flex flex-col gap-4 ">
            <h2 className="text-xl capitalize ">Pays limitrophes : </h2>
            <div className="flex gap-4 flex-wrap  capitalize">
                {bordersInfos?.map((border) => (
                    <Button className="" country={border} setSelectedCountry={setSelectedCountry}>{border.translations.fra.common}</Button>
                ))}
            </div>
        </div>
    );
};

export default BordersList;
