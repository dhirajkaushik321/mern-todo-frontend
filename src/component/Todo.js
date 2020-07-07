import React,{useContext,useState} from 'react'
import axios from 'axios'
import { TodoContext } from '../context/TodoContext'
import NewTodo from './NewTodo'
const colors=['primary', 'secondary', 'success','warning','info','danger','light','dark']
const Todo = ({id,index,description}) => {
    const [isEdit,setIsEdit]=useState(false)
    const [delAnim,setDelAnim]=useState("")
    const {dispatch}=useContext(TodoContext)
    const deleteHandler =async e=>{
        setDelAnim("animated zoomOut")
        setTimeout (
            ()=>dispatch({type:'REMOVE_TODO',id}),500)
        const {data}=await axios.delete(`/todo/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    return (
        isEdit
        ?
        <div className={`list-group-item list-group-item-${colors[index%8]} d-flex justify-content-between p-3 m-1`}>
         <NewTodo op="edit" initVal={description} setIsEdit={setIsEdit} id={id}/>
         </div>
        :
        <div className={`list-group-item list-group-item-${colors[index%8]} d-flex justify-content-between flex-wrap p-3 m-1 ${delAnim}`}>
            <div className="lead">
            {description}
        </div>
        <div className="ml-2 flex-wrap">
        <i onClick={e=>setIsEdit(true)}  className="pointer fas fa-edit fa-2x"></i>
        <i  onClick={e=>deleteHandler(e)} className="ml-2 pointer fas fa-trash fa-2x"></i>
        </div>
        </div>
    )
}

export default Todo
