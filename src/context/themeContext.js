import React, { useContext, useState } from "react";
import {themes} from '../styles/themes'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const ThemeProvider = ({children}) => {
    const [selectedTheme, setSelected] = useState(0)
    const theme = themes[selectedTheme]

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setSelected}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}