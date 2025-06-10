import {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
    FC,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    toggleTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    toggleTheme: () => null,
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    defaultTheme = "system",
    storageKey = "iut",
    ...props
}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem(storageKey) as Theme | null;
            return savedTheme || defaultTheme; // Default to 'system' if no saved theme
        }

        return defaultTheme; // Fallback for server-side rendering
    });

    useEffect(() => {
        // This code will only run on the client side
        if (typeof window !== "undefined") {
            const root = window.document.documentElement;

            root.classList.remove("light", "dark");

            if (theme === "system") {
                const systemTheme = window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches
                    ? "dark"
                    : "light";

                root.classList.add(systemTheme);
                return;
            }

            root.classList.add(theme);
        }
    }, [theme]);

    const value = {
        theme,
        toggleTheme: (theme: Theme) => {
            if (typeof window !== "undefined") {
                localStorage.setItem(storageKey, theme);
            }
            setTheme(theme);
        },
    };

    return (
        <ThemeContext {...props} value={value}>{children}</ThemeContext>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
