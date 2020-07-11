import React from 'react'
import { useHistory, Link } from 'react-router-dom'
const Navbar = () => {
    let history = useHistory()
    const logoutHandler = e => {
        localStorage.removeItem('name')
        localStorage.removeItem('token')
        history.push('/')
    }
    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark primary-color">
            <Link to="/" className="navbar-brand">
                MyTodo
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent-4"
                aria-controls="navbarSupportedContent-4"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fab fa-facebook-f" /> Facebook
          <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fab fa-instagram" /> Instagram
                     </a>
                    </li> */}
                    <li className="nav-item dropdown">
                        <Link to="/"
                            className="nav-link dropdown-toggle"
                            id="navbarDropdownMenuLink-4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false" >
                            {localStorage.getItem('isImg')
                            ? <img className="mr-2" style={{width:'45px',height:'60px',borderRadius:'50%'}}
                             src={`https://mern-todo-backend17502.herokuapp.com/api/user/${localStorage.getItem('id')}/profile`} alt="profile"/>
                            :<i className="fas fa-user" /> }{localStorage.getItem('name')}{" "}
                        </Link>
                        <div
                            className="dropdown-menu dropdown-menu-right dropdown-info"
                            aria-labelledby="navbarDropdownMenuLink-4" >
                            <button onClick={e=>history.push('/Dashboard/me')} className="dropdown-item">
                                My account
                            </button>
                            <button onClick={e => logoutHandler(e)} className="dropdown-item">
                                Log out
                             </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
