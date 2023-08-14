import { Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { cn } from "../utils/cn";

const ThemeSwitcher = () => {
    
    const {isDark,toggleTheme} = useTheme()

    const icon = isDark ? <Moon key={"dark"} fill="#ffffff" stroke="#fff" /> : <Moon key={"light"} />;
    return (
        <button
            className={cn(
                "flex items-center gap-2 ",
                'text-sm',
                isDark && 'text-white '
            )}
            onClick={toggleTheme}>
            {icon} <span >Dark Mode</span>
        </button>
    );
};

export default ThemeSwitcher;
