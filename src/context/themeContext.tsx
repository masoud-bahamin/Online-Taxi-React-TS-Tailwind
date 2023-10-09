import { createContext, useState } from "react";

type theme = "dark" | "light"

type themeContextType = {
    theme: theme;
    themeHandler: () => void;
}

const themeData: theme = localStorage.getItem("taxi_theme") as theme || "light"

export const themeContext = createContext<themeContextType>({} as themeContextType)

type themeContextProviderProps = {
    children: React.ReactNode
}

const ThemeContextProvider = ({ children }: themeContextProviderProps) => {

    const [theme, setTheme] = useState<theme>(themeData)

    const themeHandler = () => {
        setTheme(prev => {
            localStorage.setItem("taxi_theme" , prev === "light" ? "dark" : "light")
            return prev === "light" ? "dark" : "light"
        })
        window.location.reload()
    }

    return (
        <themeContext.Provider value={{
            theme, themeHandler
        }}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider