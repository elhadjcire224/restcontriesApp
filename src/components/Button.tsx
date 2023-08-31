import { ReactNode } from "react";
import { Country } from "../context/CountryContent";
import { cn } from "../utils/cn";
import { useTheme } from "../context/useTheme";

const Button = ({
    children,
    className,
    setSelectedCountry,
    country
}: {
    children: ReactNode;
    className?: string;
    country?: Country;
    setSelectedCountry?: React.Dispatch<React.SetStateAction<Country | null>>;
}) => {
    const { isDark } = useTheme();
    return (
        <button
            className={cn(
                "flex items-center gap-3 border px-4 ",
                isDark && "text-light-gray border-dark-blue bg-dark-blue",
                " shadow-lg rounded-sm",
                className
            )}
            onClick={() => {
                if(setSelectedCountry && country){
                    setSelectedCountry(country);
                }else if(setSelectedCountry){
                    setSelectedCountry(null)
                }
            }}>
            {children}
        </button>
    );
};

export default Button;
