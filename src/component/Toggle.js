import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Toggle = ({size}) => {
    const {themeToggler,isLight}=useContext(ThemeContext)
    const color=isLight ?"dark":"light"
    return (
        <button  className={`btn btn-${color} btn-${size}`} onClick={themeToggler} >{isLight?'Dark mode':'Light mode'}</button>
    )
}

export default Toggle
