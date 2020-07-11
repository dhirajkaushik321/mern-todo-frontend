import React, { useState, useContext } from 'react'
import axios from 'axios'
import { TodoContext } from '../context/TodoContext'
import { ThemeContext } from '../context/ThemeContext'
import Alert from './Alert'

const NewTodo = ({ op, initVal, setIsEdit, id }) => {
    let placeholder = "What do you want to do?"
    let btnText = "Add"
    let type = "ADD_TODO"
    let method = 'post'
    let url = 'https://mern-todo-backend17502.herokuapp.com/api/todo'
    if (op === 'edit') {
        placeholder = ""
        btnText = "Update"
        type = "EDIT_TODO"
        method = 'patch'
        url = `https://mern-todo-backend17502.herokuapp.com/api/todo/${id}`
    }
    const [description, setDescription] = useState(initVal)
    const [isAdded, setIsAdded] = useState(false)
    const { isLight, light, dark } = useContext(ThemeContext)
    const { dispatch } = useContext(TodoContext)
    const onSubmitHandler = async e => {
        e.preventDefault()
        if (op === 'edit') {
            dispatch({ type, description, id })
            op === 'edit' ? setIsEdit(false) : setDescription('')
        }
        try {
            await axios({
                method,
                url,
                data: {
                    description
                },
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
        }catch(err){
            return console.log(err.message)
        }
       
        
        dispatch({ type, description, id })
        setIsAdded(true)
        op === 'edit' ? setIsEdit(false) : setDescription('')
    }
    const { btnClr } = isLight ? light : dark
    return (
        <>
            {isAdded && <Alert type="success" message="successfuly added" />}
            <form onSubmit={onSubmitHandler} className="form-inline center mx-auto mb-4">
                <div className="animated zoomIn form-group mx-sm-3 mb-2">
                    <input
                        type="text"
                        className="form-control-lg"
                        placeholder={placeholder}
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <button className={`btn btn-lg btn-${btnClr} mb-2`}>{btnText}</button>
            </form>
        </>
    )
}

export default NewTodo
