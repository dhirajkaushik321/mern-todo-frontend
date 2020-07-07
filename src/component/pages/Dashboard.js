import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import NewTodo from '../NewTodo';
import Toggle from '../Toggle';
import TodoList from '../TodoList';
import { ThemeContext } from '../../context/ThemeContext';
const Dashboard = () => {
    let history=useHistory()
    if(!localStorage.getItem('name')){
        history.push('/')
    }
    const name=localStorage.getItem('name');
const {isLight,light,dark}=useContext(ThemeContext)
const {background}=isLight ?dark :light

const style={
    background
}

const logoutHandler=e=>{
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    history.push('/')
}
    return (
        <div style={style} className="container d-flex flex-column mt-5">
        <div className="d-flex justify-content-between">
        <Toggle/>
        <div className="d-flex">
        <h2 className="bg-primary text-light p-2 m-2">{name}</h2>
        <button onClick={logoutHandler} className="btn btn-lg btn-cyan">Logout</button>
        </div>
        </div>
       
        <NewTodo initVal=""/>
        <TodoList/>
        </div>
    )
}

export default Dashboard
