import React, {createContext, useContext, useState, useEffect} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState('light');


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme); 
    }

    const value = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
        const context = useContext(ThemeContext);
        if(!context) {
            throw new Error('useTheme must be used within ThemeProvider');
        }

        return context;
    }