import {
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

type themeValue = {
    isDark: boolean;
    toggleTheme: () => void;
};

const themeContext = createContext<themeValue>({} as any);

export function useTheme(): themeValue {
    return useContext(themeContext);
}

export function ThemeProvider({ children }: PropsWithChildren) {
    const [isDark, setDark] = useState<boolean>(true);

    const toggleTheme = useCallback(() => {
        setDark((value) => !value);
    }, [isDark]);

    const value = useMemo((): themeValue => {
        return { isDark, toggleTheme };
    }, [isDark, toggleTheme]);

    return (
        <themeContext.Provider value={value}> {children}</themeContext.Provider>
    );
}
