import React from 'react'
import {useHistory} from 'react-router-dom'
import Register from '../Register'
import Login from '../Login'
const LandingPage = () => {
    let history = useHistory()
   if(localStorage.getItem('name')){
    history.push('/dashboard')
   }
    return (
        <div className="bg-light container-fluid d-flex flex-column justify-content-center">
            <div className="animated fadeIn slow p-5">
                <h1>Time mangement</h1>
                <p className="lead">Organize your every task in a effective and simple way and 
                get productive.Achieve your dream and get ready for the future</p>
            </div>
            <div className="animated zoomIn delay-1s p-5">
                <img className=" landing-page-img rounded"  src="https://wallpaperaccess.com/full/1489353.jpg"/>
            </div>
            <div  className="d-flex p-5">
                <Register/>
                <Login/>
            </div>
        </div>
    )
}

export default LandingPage
