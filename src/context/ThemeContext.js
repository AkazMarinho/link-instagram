import { createContext, useState} from "react";
import { Links } from "../pages/Links/Links";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const verifyTheme = () => {

        const currentyTheme = localStorage.getItem("theme");
        console.log(currentyTheme);

        if(currentyTheme === 'light'){
            setTheme("light")
        } else{
            setTheme("dark")
        }
    }

    const themeToggle = () => {
        console.log(theme);

        if (theme === 'light') {
            localStorage.setItem("theme", "dark");
            setTheme('dark')
        } else{
            setTheme('light')
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <ThemeContext.Provider value={{theme, themeToggle, verifyTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//importar useContext
// criar um export const nameContext = createContext({})
// criar função nameProvider ({children})
// retornar <nameContext.Provoder value={{}}> {children} </nameContext.Provoder>