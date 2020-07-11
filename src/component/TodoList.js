import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { TodoContext } from '../context/TodoContext'
import Todo from './Todo'
import Loading from './Loading'

const TodoList = () => {
    const { todos, dispatch } = useContext(TodoContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try{
            const { data } = await axios.get('https://mern-todo-backend17502.herokuapp.com/api/todo',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
            setIsLoading(false)
            console.log(data)
            const todos = data.todos.map(({ id, description }) => ({ id, description }))
            dispatch({ type: 'LOAD_TODO', todos: todos.reverse() })
            console.log(todos)
        }catch(err){
            setError(err.message)
            setIsLoading(false)
        }
    }
        fetchData()
    
    },[dispatch])
    
    return (
        <>
        {isLoading
        ? <Loading msg={"Loading todo items..."}/>
        :
        <>
        <h1>{error}</h1>
         <ul className="animated fadeInUpBig list-group">
            {todos.map(({ id, description }, index) => <Todo key={id} id={id} index={index} description={description} dispatch={dispatch} />)}
        </ul>
        </>
        }
        </>
    )
}

export default TodoList
