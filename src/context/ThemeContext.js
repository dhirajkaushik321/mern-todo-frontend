import React,{createContext,useState} from 'react'

export const ThemeContext=createContext()
export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState({
        isLight:true,
        light:{
            background:'#222',
            btnClr:'brown'
        },
        dark:{
            background:'#fff',
            btnClr:'cyan'
        }
       
    })
    const themeToggler=()=>
        setTheme(
            {
                ...theme,
                isLight:!theme.isLight
            }
        )
    return (
        <ThemeContext.Provider value={{...theme,themeToggler}}> 
            {children}
        </ThemeContext.Provider>
    )
}