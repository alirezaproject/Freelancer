import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();


export function DarkModeProvider({ children }) {
    const initState = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // localStorage.setItem("isDarkMode", initState);

    const [isDarkMode, setIsDarkMode] =
        useLocalStorageState("isDarkMode",
            initState);

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    }, [isDarkMode])


    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined)
        throw new Error("DarkModeContext used outside of DarModeProvider");
    return context;
}