import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import ThemeSwitcher from "./ThemeSwitcher";


const Header = () => {
    const { isDark } = useTheme();
    return (
        <header
            className={cn(
                "flex justify-between shadow-lg ",

                "px-3 py-8",
                "text-dark-blue text-md",
                isDark && "bg-dark-blue"
                
            )}>
            <h1 className={cn("font-bold", isDark && "text-white",'sm:text-lg')}>
                <strong>Where in the world?</strong>
            </h1>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
