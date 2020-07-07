import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  let history=useHistory()
  const onSubmitHandler =async e=>{
    try{
      const {data}=await axios.post('https://mern-todo-backend17502.herokuapp.com/api/user/login',{
        email,password
      },
      {
        headers: { 'Content-Type': 'application/json'}
      })
      console.log(data)
      localStorage.setItem("token",data.token)
      localStorage.setItem("name",data.name)
      history.push("/dashboard")

    }catch(err){
      return console.log(err)
    }
  }
  return (
    <div>
      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="defaultForm-email"
                  className="form-control validate"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Your email
            </label>
              </div>
              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="defaultForm-pass"
                  className="form-control validate"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Your password
            </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button  onClick={onSubmitHandler} className="btn btn-default">Login</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href
          className="btn btn-lg btn-outline-dark btn-rounded mb-4"
          data-toggle="modal"
          data-target="#modalLoginForm"
        >
          Login
    </a>
      </div>
    </div>

  )
}

export default Login
