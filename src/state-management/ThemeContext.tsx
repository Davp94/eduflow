import React, { createContext, useState, type ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toogleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toogleTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toogleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}