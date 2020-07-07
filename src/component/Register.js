import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Loading from './Loading'

const Register = () => {
  let history=useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const onSubmitHandler = async e => {
    setIsLoading(true)
    try{
      const res=await axios.post('https://mern-todo-backend17502.herokuapp.com/api/user/signup',{
        name,email,password
      },
      {
        headers: { 'Content-Type': 'application/json'}
      })
      
      
      const {data}=res
      console.log(data)
      setIsLoading(false)
      localStorage.setItem("token",data.token)
      localStorage.setItem("name",data.name)
      setName('')
      setEmail('')
      setPassword('')
      history.push('/dashboard')

    }catch(err){
      return console.log(err.message)
    }
    
  }
  return (
    <div>
      <div
        className="modal fade"
        id="modalRegisterForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
            {isLoading && <Loading/>}
              <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
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
                <i className="fas fa-user prefix grey-text" />
                <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control validate"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                >
                  Your name
            </label>
              </div>
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text" />
                <input
                  type="email"
                  id="orangeForm-email"
                  className="form-control validate"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-email"
                >
                  Your email
            </label>
              </div>
              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text" />
                <input
                  type="password"
                  id="orangeForm-pass"
                  className="form-control validate"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-pass"
                >
                  Your password
            </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button onClick={e => onSubmitHandler(e)} className="btn btn-deep-orange">Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a
          href
          className="btn btn-lg btn-dark btn-rounded mb-4"
          data-toggle="modal"
          data-target="#modalRegisterForm"
        >
          Signup
    </a>
      </div>
    </div>
  )
}

export default Register
