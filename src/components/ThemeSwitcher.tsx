import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";
import MoonIcon from "../icons/MoonIcon";

const ThemeSwitcher = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            className={cn(
                "flex items-center gap-2 ",
                "text-sm",
                isDark && "text-white "
            )}
            onClick={toggleTheme}>
            <MoonIcon className={cn(" h-5 w-5",isDark && "fill-white")} /> <span>Dark Mode</span>
        </button>
    );
};

export default ThemeSwitcher;
