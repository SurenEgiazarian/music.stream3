import React, { useContext } from "react";

export const themes = {
    light: {
        name: 'light',
        color:'#181818',
        background: '#fff'
    },
    dark: {
        name: 'dark',
        color: '#fff',
        background:'#181818'
    },
}

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {}
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    return theme;
}