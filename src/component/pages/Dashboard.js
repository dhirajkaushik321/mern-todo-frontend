import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import NewTodo from '../NewTodo';
import TodoList from '../TodoList';
import { ThemeContext } from '../../context/ThemeContext';
import Navbar from '../Navbar';
const Dashboard = () => {
    let history = useHistory()
    if (!localStorage.getItem('name')) {
        history.push('/')
    }
        const { isLight, light, dark } = useContext(ThemeContext)
    const { background } = isLight ? dark : light

    const style = {
        background
    }

    return (
        <>
        <Navbar/>
        <div style={style} className="container d-flex flex-column mt-5">
            {/* <div className="d-flex justify-content-between">
                <Toggle size={size} />
                <div className="d-flex">
                    <div className="d-flex flex-column">
                        <img style={{ width: "60px" }} src={"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"} />
                        <p className={`lead bg-primary text-light ${pd} mt-3`}>{name}</p>
                    </div>

                    <button onClick={logoutHandler} className={`btn btn-${size} btn-${color}`}>Logout</button>
                </div>
            </div> */}

            <NewTodo initVal="" />
            <TodoList />
        </div>
        </>
    )
}

export default Dashboard
