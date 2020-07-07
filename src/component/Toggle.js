import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Toggle = () => {
    const {themeToggler,isLight}=useContext(ThemeContext)
    const color=isLight ?"dark":"light"
    return (
        <button  className={`btn btn-${color} btn-lg`} onClick={themeToggler} >{isLight?'Dark mode':'Light mode'}</button>
    )
}

export default Toggle
